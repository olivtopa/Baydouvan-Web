"use client";

import { useMemo, useState } from "react";
import { GAMEPLAY_CHAPTERS } from "../../../lib/data/gameplay";
import { useGameProgress } from "../../../lib/hooks/useGameProgress";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PlayMissionPage({ params }: { params: { missionId: string } }) {
    const router = useRouter();
    const { progress, isLoaded, completeMission } = useGameProgress();
    const [gameState, setGameState] = useState<"intro" | "playing" | "success">("intro");

    const missionIdNum = parseInt(params.missionId);

    const missionDetails = useMemo(() => {
        for (const chapter of GAMEPLAY_CHAPTERS) {
            const m = chapter.missions.find(m => m.id === missionIdNum);
            if (m) return { mission: m, chapter };
        }
        return null;
    }, [missionIdNum]);

    if (!isLoaded || !missionDetails) return null;

    const { mission, chapter } = missionDetails;
    const isCompleted = progress.completedMissions.includes(mission.id);

    const handleSuccess = () => {
        completeMission(mission.id, mission.xp);
        setGameState("success");
    };

    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col items-center justify-center">
            <Link href="/missions" className="absolute top-8 left-8 text-sm font-bold tracking-wider uppercase hover:text-white transition-colors">
                ← Retour
            </Link>

            <div className="max-w-2xl w-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-widest text-[#00A86B] uppercase mb-2 block">
                        Chapitre {chapter.id} — {chapter.region}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        {mission.title}
                    </h1>
                    <div className="inline-flex border border-[#D4AF37]/30 px-4 py-1 text-sm font-mono text-[#D4AF37]">
                        Récompense: +{mission.xp} XP
                    </div>
                </div>

                {gameState === "intro" && (
                    <div className="space-y-8 text-center">
                        <p className="text-lg text-white/80 leading-relaxed font-medium">
                            Vous pénétrez dans les mémoires de {chapter.region}. 
                            Votre objectif en tant qu'Initié est de {mission.title.toLowerCase()}.
                        </p>
                        {isCompleted && (
                            <p className="text-[#00A86B] font-bold">Mission déjà complétée précédemment.</p>
                        )}
                        <button 
                            onClick={() => setGameState("playing")}
                            className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300"
                        >
                            Démarrer l'épreuve
                        </button>
                    </div>
                )}

                {gameState === "playing" && (
                    <div className="space-y-8 text-center animate-fade-in">
                        <div className="p-6 border border-white/10 bg-black/50 mb-8">
                            <p className="text-white text-xl font-medium">
                                Enigme de {mission.type}:
                                {mission.type === "quiz" ? " Sélectionnez la bonne réponse pour prouver votre savoir." : " Résolvez le puzzle historique pour avancer."}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <button onClick={handleSuccess} className="px-6 py-4 border border-[#D4AF37]/50 hover:border-[#00A86B] hover:text-[#00A86B] transition-colors font-bold text-left">
                                A. Réponse ou action correcte
                            </button>
                            <button className="px-6 py-4 border border-[#D4AF37]/50 hover:bg-red-900/20 hover:border-red-500 transition-colors font-bold text-left">
                                B. Fausse piste
                            </button>
                            <button className="px-6 py-4 border border-[#D4AF37]/50 hover:bg-red-900/20 hover:border-red-500 transition-colors font-bold text-left">
                                C. Distraction historique
                            </button>
                        </div>
                    </div>
                )}

                {gameState === "success" && (
                    <div className="text-center space-y-8 animate-fade-in">
                        <div className="w-24 h-24 rounded-full border-4 border-[#00A86B] mx-auto flex items-center justify-center bg-[#00A86B]/10 shadow-[0_0_30px_rgba(0,168,107,0.5)]">
                            <span className="text-4xl text-[#00A86B]">✓</span>
                        </div>
                        <h2 className="text-3xl font-black text-[#00A86B] uppercase tracking-widest">
                            Succès
                        </h2>
                        <p className="text-white text-lg font-medium">
                            Vous avez gagné <span className="font-bold text-[#D4AF37]">{mission.xp} XP</span>.
                        </p>
                        <div className="pt-8">
                            <button 
                                onClick={() => router.push('/missions')}
                                className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300"
                            >
                                Retour aux missions
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
