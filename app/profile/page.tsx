"use client";

import Link from "next/link";
import { useGameProgress } from "../../lib/hooks/useGameProgress";
import { GRADES, GAMEPLAY_CHAPTERS, Mission } from "../../lib/data/gameplay";
import { useMemo } from "react";
import { GameHeader } from "../../components/layout/GameHeader";

export default function ProfilePage() {
    const { progress, isLoaded } = useGameProgress();

    // Map completed IDs to full mission data
    const completedMissionsData = useMemo(() => {
        if (!isLoaded) return [];
        const foundMissions: { mission: Mission, chapterTitle: string }[] = [];
        // Iterate backwards to show recent first naturally
        const ids = [...progress.completedMissions].reverse();
        
        for (const id of ids) {
            for (const chapter of GAMEPLAY_CHAPTERS) {
                const m = chapter.missions.find(m => m.id === id);
                if (m) {
                    foundMissions.push({ mission: m, chapterTitle: chapter.title });
                    break;
                }
            }
        }
        return foundMissions;
    }, [isLoaded, progress.completedMissions]);

    if (!isLoaded) return null;

    // Use actual gameplay GRADES data
    const currentGradeIndex = GRADES.findIndex(g => g.name === progress.grade) !== -1 
        ? GRADES.findIndex(g => g.name === progress.grade) 
        : 0;
    
    const prevLevelXP = GRADES[currentGradeIndex].requiredXP;
    const nextLevelXP = GRADES[currentGradeIndex + 1]?.requiredXP || progress.xp; // If no next level, bar is full
    
    let progressPercent = 100;
    if (nextLevelXP > prevLevelXP) {
        progressPercent = Math.min(100, Math.max(0, ((progress.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100));
    }

    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col font-sans">
            <GameHeader currentRoute="/profile" />

            <div className="max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Colonne Joueur */}
                    <div className="lg:col-span-1 flex flex-col items-center bg-[#0F2A44]/20 p-8 border border-[#0F2A44] shadow-[0_0_30px_rgba(15,42,68,0.5)]">
                        <div className="w-40 h-40 rounded-full border-4 border-[#00A86B] shadow-[0_0_20px_rgba(0,168,107,0.4)] flex items-center justify-center mb-6 bg-[#00A86B]/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.3)_0%,transparent_70%)] animate-pulse" />
                            <span className="text-5xl font-black tracking-tighter text-[#00A86B] relative z-10 font-serif">B</span>
                        </div>
                        
                        <h1 className="text-3xl font-black uppercase tracking-widest mb-2 font-serif text-white text-center">
                            Initiateur des Mémoires
                        </h1>
                        <p className="text-[#00A86B] font-bold tracking-widest uppercase text-sm mb-8">
                            Grade: <span className="text-[#D4AF37]">{progress.grade}</span>
                        </p>

                        <div className="w-full mb-8">
                            <div className="flex justify-between text-xs font-bold text-[#D4AF37]/60 uppercase tracking-widest mb-2">
                                <span>{progress.xp} XP / {nextLevelXP} XP</span>
                                <span>{Math.floor(progressPercent)}%</span>
                            </div>
                            <div className="h-2 w-full bg-black border border-[#D4AF37]/30 overflow-hidden relative">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-1000 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            {progressPercent === 100 && (
                                <p className="text-[#00A86B] text-center text-xs mt-2 uppercase font-bold tracking-wider animate-pulse">Niveau Maximum Atteint</p>
                            )}
                        </div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border border-[#D4AF37]/30 p-6 bg-black/50 hover:bg-[#D4AF37]/5 transition-colors">
                                <div className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]/60 mb-2">XP Total Acquis</div>
                                <div className="text-4xl md:text-5xl font-mono font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{progress.xp}</div>
                            </div>
                            <div className="border border-[#D4AF37]/30 p-6 bg-black/50 hover:bg-[#D4AF37]/5 transition-colors">
                                <div className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]/60 mb-2">Missions Complétées</div>
                                <div className="text-4xl md:text-5xl font-mono font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{progress.completedMissions.length}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-[#00A86B]/30 p-6 bg-[#00A86B]/5 h-full flex flex-col">
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-[#00A86B]/30 pb-4 text-[#00A86B] font-serif shrink-0">Activité Récente</h3>
                                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                    {completedMissionsData.length > 0 ? (
                                        <ul className="space-y-4">
                                            {completedMissionsData.slice(0, 5).map((data, idx) => (
                                                <li key={idx} className="flex flex-col border-l-2 border-[#D4AF37] pl-4 py-1">
                                                    <span className="text-white font-medium text-sm line-clamp-1" title={data.mission.title}>
                                                        {data.mission.title}
                                                    </span>
                                                    <div className="flex justify-between items-center text-xs mt-1">
                                                        <span className="text-white/40 uppercase tracking-wider">{data.chapterTitle}</span>
                                                        <span className="text-[#D4AF37] font-mono font-bold">+{data.mission.xp} XP</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="h-full flex items-center justify-center">
                                            <p className="text-white/30 text-sm italic text-center">Aucune mission accomplie. La mémoire attend d'être restaurée.</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#00A86B]/30 text-right shrink-0">
                                    <Link href="/missions" className="text-[#00A86B] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                                        Continuer l'exploration →
                                    </Link>
                                </div>
                            </div>

                            {/* Badges Section */}
                            <div className="border border-[#D4AF37]/30 p-6 bg-black/50 h-full flex flex-col">
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-[#D4AF37]/30 pb-4 text-[#D4AF37] font-serif shrink-0">Badges d'Honneur</h3>
                                <div className="grid grid-cols-2 gap-4 flex-1">
                                    {['Historien', 'Explorateur', 'Conteur', 'Décrypteur'].map((badge, idx) => {
                                        // Mock badge unlocking logic based on generic stats for now
                                        const isUnlocked = 
                                            (badge === 'Historien' && progress.xp >= 500) ||
                                            (badge === 'Explorateur' && completedMissionsData.filter(m => m.mission.type === 'exploration').length >= 1) ||
                                            (badge === 'Décrypteur' && completedMissionsData.filter(m => m.mission.type === 'puzzle').length >= 1) ||
                                            (badge === 'Conteur' && progress.xp >= 2000);

                                        return (
                                            <div key={idx} className={`flex flex-col items-center justify-center p-4 border aspect-square text-center transition-colors
                                                ${isUnlocked 
                                                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                                                    : 'border-white/10 opacity-40 grayscale'}
                                            `}>
                                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full mb-3 flex items-center justify-center
                                                    ${isUnlocked ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_#D4AF37]' : 'bg-white/10 text-white/30'}
                                                `}>
                                                    {/* Simple icon representation */}
                                                    <span className="font-bold text-lg md:text-xl">{badge[0]}</span>
                                                </div>
                                                <span className={`text-[10px] md:text-xs uppercase font-bold tracking-widest ${isUnlocked ? 'text-[#D4AF37]' : 'text-white/50'}`}>
                                                    {badge}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
