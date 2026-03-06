"use client";

import Link from "next/link";
import { useGameProgress } from "../../lib/hooks/useGameProgress";

const MOCK_ARTIFACTS = [
  { id: 1, name: "Le Papyrus d'Imhotep", civilization: "Kemet", icon: "📜", rarity: "Légendaire", requiredMissions: [11, 15] },
  { id: 2, name: "Couronne de Kush", civilization: "Nubie", icon: "👑", rarity: "Épique", requiredMissions: [24, 28] },
  { id: 3, name: "Or de Mansa Musa", civilization: "Mali", icon: "💰", rarity: "Rare", requiredMissions: [34, 40] },
  { id: 4, name: "Masque d'Ivoire", civilization: "Bénin", icon: "🎭", rarity: "Épique", requiredMissions: [53, 56] },
  { id: 5, name: "Stèle d'Aksoum", civilization: "Éthiopie", icon: "🏛️", rarity: "Légendaire", requiredMissions: [62] },
  { id: 6, name: "Oiseau de Zimbabwe", civilization: "Zimbabwe", icon: "🦅", rarity: "Rare", requiredMissions: [71] },
];

export default function ArtifactsPage() {
    const { progress, isLoaded } = useGameProgress();

    if (!isLoaded) return null;

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
                    <Link href="/artifacts" className="text-[#00A86B]">Artefacts</Link>
                    <Link href="/profile" className="hover:text-white transition-colors">Profil</Link>
                </nav>
            </header>

            <div className="max-w-6xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center font-serif text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    Musée des Artefacts
                </h1>
                <p className="text-center text-white/60 mb-12 uppercase tracking-widest text-sm">Collection Histoire Africaine</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_ARTIFACTS.map((artifact) => {
                        const isUnlocked = artifact.requiredMissions.some(m => progress.completedMissions.includes(m));
                        
                        return (
                            <div 
                                key={artifact.id} 
                                className={`border ${isUnlocked ? 'border-[#00A86B]/50 bg-[#0F2A44]/50' : 'border-white/10 bg-black'} p-6 relative overflow-hidden group transition-all`}
                            >
                                <div className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase">
                                    {isUnlocked ? (
                                        <span className="text-[#00A86B]">Débloqué</span>
                                    ) : (
                                        <span className="text-white/30">Caché</span>
                                    )}
                                </div>
                                <div className={`text-6xl mb-6 flex justify-center ${!isUnlocked && 'opacity-10 grayscale blur-sm'}`}>
                                    {artifact.icon}
                                </div>
                                <div className="text-center">
                                    <span className="text-[#D4AF37]/60 text-xs font-bold uppercase tracking-widest mb-1 block">
                                        {isUnlocked ? artifact.civilization : '???'}
                                    </span>
                                    <h3 className={`text-xl font-bold font-serif ${isUnlocked ? 'text-white' : 'text-white/30'}`}>
                                        {isUnlocked ? artifact.name : 'Artefact Inconnu'}
                                    </h3>
                                    {isUnlocked && (
                                        <div className="mt-4 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block text-xs uppercase tracking-widest text-[#D4AF37]">
                                            {artifact.rarity}
                                        </div>
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
