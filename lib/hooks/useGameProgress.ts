import { useState, useEffect } from "react";
import { getGradeFromXP } from "../data/gameplay";
import { quizzes, enigmas, mapPoints, memoryGames, codeCrackers } from "../data/challenges";
import { createClient } from "../../utils/supabase/client";

export interface GameProgress {
  xp: number;
  grade: string;
  completedMissions: number[];
}

const DEFAULT_PROGRESS: GameProgress = {
  xp: 0,
  grade: "Initié",
  completedMissions: [],
};

const STORAGE_KEY = "baydouvan_game_progress";

export function useGameProgress() {
  const [progress, setProgress] = useState<GameProgress>(DEFAULT_PROGRESS);
  const [isLoaded, setIsLoaded] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    let isMounted = true;

    async function loadProgress() {
      // 1. Check if user is logged in
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // 2. Fetch from database if user exists
        const { data, error } = await supabase
          .from('profiles')
          .select('xp, grade, completed_missions')
          .eq('id', session.user.id)
          .single();

        if (data && !error && isMounted) {
          setProgress({
            xp: data.xp,
            grade: data.grade,
            completedMissions: data.completed_missions || []
          });
          setIsLoaded(true);
          return;
        }
      }

      // 3. Fallback to LocalStorage
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isMounted) {
        try {
          const parsed = JSON.parse(saved);
          setProgress({
            ...DEFAULT_PROGRESS,
            ...parsed,
            grade: getGradeFromXP(parsed.xp || 0)
          });
        } catch (e) {
          console.error("Failed to parse game progress", e);
        }
      }
      if (isMounted) setIsLoaded(true);
    }

    loadProgress();

    return () => { isMounted = false; };
  }, []);

  const saveProgress = async (newProgress: GameProgress) => {
    const updatedWithGrade = {
      ...newProgress,
      grade: getGradeFromXP(newProgress.xp)
    };
    
    // Update Local State Optimistically
    setProgress(updatedWithGrade);
    
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      // Sync to Supabase
      await supabase
        .from('profiles')
        .update({
          xp: updatedWithGrade.xp,
          grade: updatedWithGrade.grade,
          completed_missions: updatedWithGrade.completedMissions
        })
        .eq('id', session.user.id);
    } else {
      // Fallback save to LocalStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedWithGrade));
    }
  };

  const completeMission = (missionId: number, xpReward: number) => {
    if (!progress.completedMissions.includes(missionId)) {
      saveProgress({
        ...progress,
        xp: progress.xp + xpReward,
        completedMissions: [...progress.completedMissions, missionId]
      });
    }
  };

  const resetProgress = () => {
    saveProgress(DEFAULT_PROGRESS);
  };
  
  const getChallengeData = (missionId: number, type: 'quiz' | 'puzzle' | 'exploration' | 'memory' | 'cracker') => {
    switch (type) {
      case 'quiz':
        return quizzes[missionId] || null;
      case 'puzzle':
        return enigmas[missionId] || null;
      case 'exploration':
        return mapPoints[missionId] || null;
      case 'memory':
        return memoryGames[missionId] || null;
      case 'cracker':
        return codeCrackers[missionId] || null;
      default:
        return null;
    }
  };

  return { progress, isLoaded, completeMission, resetProgress, getChallengeData };
}
