import { useState, useEffect } from "react";
import { getGradeFromXP } from "../data/gameplay";

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

  useEffect(() => {
    // Load from LocalStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
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
    setIsLoaded(true);
  }, []);

  const saveProgress = (newProgress: GameProgress) => {
    const updatedWithGrade = {
      ...newProgress,
      grade: getGradeFromXP(newProgress.xp)
    };
    setProgress(updatedWithGrade);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedWithGrade));
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

  return { progress, isLoaded, completeMission, resetProgress };
}
