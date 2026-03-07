import Link from "next/link";
import { GameHeader } from "../../components/layout/GameHeader";

const REGIONS = [
  "Monde", "Kemet", "Nubie", "Mali", "Songhaï", 
  "Bénin", "Aksoum", "Zimbabwe", "Zulu", "Kongo", "Côte Swahili"
];

export default function MapPage() {
    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col">
            <GameHeader currentRoute="/map" />

            <div className="flex-1 flex flex-col items-center justify-center border border-[#D4AF37]/20 relative overflow-hidden bg-black/50">
                {/* Placeholder for the interactive map */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
                
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-[#D4AF37] mb-8 relative z-10">
                    Carte d'Afrique
                </h1>
                <p className="text-white/60 mb-12 max-w-xl text-center relative z-10">
                    Sélectionnez une région pour découvrir son histoire et relever les défis.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                    {REGIONS.map(region => (
                        <Link href={`/missions?region=${encodeURIComponent(region)}`} key={region} className="px-8 py-6 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all group relative overflow-hidden block text-center">
                            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 font-bold uppercase tracking-widest text-sm sm:text-base">{region}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
