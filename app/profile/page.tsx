"use client";

import Link from "next/link";
import { useGameProgress } from "../../lib/hooks/useGameProgress";

export default function ProfilePage() {
    const { progress, isLoaded } = useGameProgress();

    if (!isLoaded) return null;

    // Simulation d'une jauge d'XP
    const xpLevels = [0, 1000, 5000, 10000, 20000];
    const currentLevelIndex = xpLevels.findIndex((xp, i) => progress.xp >= xp && progress.xp < (xpLevels[i+1] || Infinity));
    const nextLevelXP = xpLevels[currentLevelIndex + 1] || progress.xp;
    const prevLevelXP = xpLevels[currentLevelIndex] || 0;
    
    const progressPercent = nextLevelXP > prevLevelXP 
        ? Math.min(100, Math.max(0, ((progress.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100))
        : 100;

    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col font-sans">
            <header className="flex justify-between items-center mb-12">
                <Link href="/" className="text-2xl font-black tracking-widest hover:text-white transition-colors font-serif">
                    BAYDOUVAN
                </Link>
                <nav className="flex flex-wrap gap-4 md:gap-6 text-sm font-bold tracking-wider uppercase font-serif">
                    <Link href="/map" className="hover:text-white transition-colors">Carte</Link>
                    <Link href="/missions" className="hover:text-white transition-colors">Missions</Link>
                    <Link href="/leaderboard" className="hover:text-white transition-colors">Classement</Link>
                    <Link href="/artifacts" className="hover:text-white transition-colors">Artefacts</Link>
                    <Link href="/profile" className="text-[#00A86B]">Profil</Link>
                </nav>
            </header>

            <div className="max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Colonne Joueur */}
                    <div className="lg:col-span-1 flex flex-col items-center bg-[#0F2A44]/20 p-8 border border-[#0F2A44] shadow-[0_0_30px_rgba(15,42,68,0.5)]">
                        <div className="w-40 h-40 rounded-full border-4 border-[#00A86B] shadow-[0_0_20px_rgba(0,168,107,0.4)] flex items-center justify-center mb-6 bg-[#00A86B]/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.3)_0%,transparent_70%)] animate-pulse" />
                            <span className="text-5xl font-black tracking-tighter text-[#00A86B] relative z-10 font-serif">B</span>
                        </div>
                        
                        <h1 className="text-3xl font-black uppercase tracking-widest mb-2 font-serif text-white">
                            Initié_001
                        </h1>
                        <p className="text-[#00A86B] font-bold tracking-widest uppercase text-sm mb-8">Level: {progress.grade}</p>

                        <div className="w-full mb-8">
                            <div className="flex justify-between text-xs font-bold text-[#D4AF37]/60 uppercase tracking-widest mb-2">
                                <span>{progress.xp} XP</span>
                                <span>{nextLevelXP === progress.xp ? 'Max' : `${nextLevelXP} XP`}</span>
                            </div>
                            <div className="h-2 w-full bg-black border border-[#D4AF37]/30 overflow-hidden relative">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-1000 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
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

                        <div className="border border-[#00A86B]/30 p-6 bg-[#00A86B]/5">
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-[#00A86B]/30 pb-4 text-[#00A86B] font-serif">Activité Récente</h3>
                            {progress.completedMissions.length > 0 ? (
                                <ul className="space-y-4">
                                    {/* Display last 3 completed missions - simple mock display since we just have IDs */}
                                    {progress.completedMissions.slice(-3).reverse().map((id, idx) => (
                                        <li key={idx} className="flex justify-between items-center text-sm border-l-2 border-[#D4AF37] pl-4">
                                            <span className="text-white font-medium">Mission #{id} complétée</span>
                                            <span className="text-[#D4AF37] font-mono font-bold">Succès</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-white/50 text-sm italic">Aucune mission accomplie pour le moment. L'histoire vous attend.</p>
                            )}
                            <div className="mt-6 pt-4 border-t border-white/5 text-right">
                                <Link href="/missions" className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                                    Continuer l'aventure →
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
