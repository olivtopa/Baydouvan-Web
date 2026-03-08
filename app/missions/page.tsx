"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { GAMEPLAY_CHAPTERS } from "../../lib/data/gameplay";
import { useGameProgress } from "../../lib/hooks/useGameProgress";
import { GameHeader } from "../../components/layout/GameHeader";

function MissionsList() {
    const { progress, isLoaded } = useGameProgress();
    const searchParams = useSearchParams();
    const regionFilter = searchParams.get("region");

    if (!isLoaded) return <div className="text-center text-[#D4AF37] mt-12 animate-pulse font-serif uppercase tracking-widest">Chargement des mémoires...</div>;

    const chaptersToDisplay = regionFilter 
        ? GAMEPLAY_CHAPTERS.filter(c => c.region === regionFilter) 
        : GAMEPLAY_CHAPTERS;

    return (
        <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-2xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                {regionFilter ? `Missions : ${regionFilter}` : "Missions & Défis"}
            </h1>
            
            {regionFilter && (
                <div className="text-center mb-12">
                     <Link href="/missions" className="text-sm text-[#00A86B] hover:text-white uppercase tracking-widest underline decoration-[#00A86B]/30 hover:decoration-white transition-colors">
                         [ Voir toutes les missions ]
                     </Link>
                </div>
            )}
            
            {!regionFilter && <div className="mb-12" />}

            {chaptersToDisplay.length === 0 ? (
                <div className="text-center text-white/50 py-12 border border-white/10 bg-black/50">
                    Aucune mission trouvée pour la région {regionFilter}.
                </div>
            ) : (
                <div className="space-y-16">
                    {chaptersToDisplay.map(chapter => (
                        <section key={chapter.id}>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00A86B] mb-6 border-b border-[#00A86B]/30 pb-2">
                                Chapitre {chapter.id}: {chapter.title}
                            </h2>
                            <div className="grid gap-4">
                                {chapter.missions.map(mission => {
                                    const isCompleted = progress.completedMissions.includes(mission.id);
                                    
                                    return (
                                        <div key={mission.id} className={`border p-6 flex flex-col md:flex-row justify-between items-center transition-all ${isCompleted ? 'border-[#00A86B]/30 bg-[#00A86B]/5' : 'border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] bg-[#D4AF37]/5'}`}>
                                            <div>
                                                <span className="text-xs font-bold tracking-widest text-[#D4AF37]/60 uppercase mb-2 block">{chapter.region} - {mission.type}</span>
                                                <h3 className={`text-xl font-bold ${isCompleted ? 'text-[#00A86B]' : 'text-white'}`}>
                                                    {mission.title}
                                                    {isCompleted && <span className="ml-3 text-sm">✓ Terminé</span>}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                                <span className={`${isCompleted ? 'text-[#00A86B]' : 'text-[#D4AF37]'} font-mono font-bold`}>+{mission.xp} XP</span>
                                                {!isCompleted && (
                                                    <Link href={`/play/${mission.id}`} className="px-6 py-2 bg-[#D4AF37] text-black font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors">
                                                        Jouer
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function MissionsPage() {
    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col">
            <GameHeader currentRoute="/missions" />

            <Suspense fallback={<div className="text-center text-[#D4AF37] mt-12 animate-pulse font-serif uppercase tracking-widest">Chargement...</div>}>
                <MissionsList />
            </Suspense>
        </main>
    );
}
