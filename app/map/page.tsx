import Link from "next/link";
import { AuthButton } from "../../components/auth/AuthButton";

export default function MapPage() {
    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col">
            <header className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12 relative z-10 p-6 md:p-8 pb-0 w-full">
                <Link href="/" className="text-2xl font-black tracking-widest hover:text-white transition-colors font-serif text-[#D4AF37]">
                    BAYDOUVAN
                </Link>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                    <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-xs md:text-sm font-bold tracking-wider uppercase font-serif w-full md:w-auto">
                        <Link href="/map" className="text-[#00A86B]">Carte</Link>
                        <Link href="/missions" className="hover:text-white transition-colors">Missions</Link>
                        <Link href="/leaderboard" className="hover:text-white transition-colors text-[#D4AF37]">Classement</Link>
                        <Link href="/artifacts" className="hover:text-white transition-colors text-[#D4AF37]">Artefacts</Link>
                        <Link href="/profile" className="hover:text-white transition-colors text-[#D4AF37]">Profil</Link>
                    </nav>
                    <AuthButton />
                </div>
            </header>

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
                    {["Kemet", "Nubie", "Mali", "Songhaï", "Bénin", "Aksoum", "Zimbabwe", "Zulu", "Kongo", "Côte Swahili"].map(region => (
                        <button key={region} className="px-8 py-6 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 font-bold uppercase tracking-widest text-sm sm:text-base">{region}</span>
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}
