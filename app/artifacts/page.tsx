"use client";

import Link from "next/link";
import { useGameProgress } from "../../lib/hooks/useGameProgress";
import { ARTIFACTS_DATA } from "../../lib/data/artifacts";
import { AuthButton } from "../../components/auth/AuthButton";

export default function ArtifactsPage() {
    const { progress, isLoaded } = useGameProgress();

    if (!isLoaded) return null;

    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col font-sans">
            <header className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12">
                <Link href="/" className="text-2xl font-black tracking-widest hover:text-white transition-colors font-serif">
                    BAYDOUVAN
                </Link>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                    <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-xs md:text-sm font-bold tracking-wider uppercase font-serif w-full md:w-auto">
                        <Link href="/map" className="hover:text-white transition-colors">Carte</Link>
                        <Link href="/missions" className="hover:text-white transition-colors">Missions</Link>
                        <Link href="/leaderboard" className="hover:text-white transition-colors">Classement</Link>
                        <Link href="/artifacts" className="text-[#00A86B]">Artefacts</Link>
                        <Link href="/profile" className="hover:text-white transition-colors">Profil</Link>
                    </nav>
                    <AuthButton />
                </div>
            </header>

            <div className="max-w-6xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center font-serif text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    Musée des Artefacts
                </h1>
                <p className="text-center text-white/60 mb-12 uppercase tracking-widest text-sm">Collection Histoire Africaine</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTIFACTS_DATA.map((artifact) => {
                        const isUnlocked = artifact.requiredMissions.some(m => progress.completedMissions.includes(m));
                        
                        return (
                            <div 
                                key={artifact.id} 
                                className={`flex flex-col border ${isUnlocked ? 'border-[#D4AF37]/50 bg-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'border-white/10 bg-black'} p-6 relative overflow-hidden group transition-all duration-500`}
                            >
                                <div className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase">
                                    {isUnlocked ? (
                                        <span className="text-[#D4AF37]">Acquis</span>
                                    ) : (
                                        <span className="text-white/30">Caché</span>
                                    )}
                                </div>
                                <div className={`text-7xl mt-4 mb-6 flex justify-center transition-transform duration-700 ${!isUnlocked ? 'opacity-10 grayscale blur-sm' : 'group-hover:scale-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]'}`}>
                                    {artifact.icon}
                                </div>
                                <div className="text-center flex-1 flex flex-col">
                                    <span className="text-[#00A86B] text-xs font-bold uppercase tracking-widest mb-2 block font-mono">
                                        {isUnlocked ? `Origine : ${artifact.civilization}` : '???'}
                                    </span>
                                    <h3 className={`text-2xl font-black uppercase tracking-widest font-serif mb-4 ${isUnlocked ? 'text-white' : 'text-white/30'}`}>
                                        {isUnlocked ? artifact.name : 'Artefact Inconnu'}
                                    </h3>
                                    
                                    {isUnlocked && (
                                        <>
                                            <p className="text-white/70 text-sm leading-relaxed italic mb-6 flex-1">
                                                "{artifact.description}"
                                            </p>
                                            <div className="mt-auto">
                                                <div className={`px-4 py-1.5 border inline-block text-xs font-bold uppercase tracking-widest
                                                    ${artifact.rarity === 'Légendaire' ? 'border-purple-500/50 text-purple-400 bg-purple-500/10' : 
                                                      artifact.rarity === 'Épique' ? 'border-[#00A86B]/50 text-[#00A86B] bg-[#00A86B]/10' : 
                                                      'border-[#D4AF37]/50 text-[#D4AF37] bg-[#D4AF37]/10'}`}
                                                >
                                                    {artifact.rarity}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
