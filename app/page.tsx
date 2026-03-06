"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IntroCinematic } from "../components/IntroCinematic";

export default function Home() {
    const [showIntro, setShowIntro] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Only show intro once per session/visit if desired, but for now we'll show it if not seen in localStorage
        const hasSeenIntro = localStorage.getItem("baydouvan_has_seen_intro");
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
        setIsLoaded(true);
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
        localStorage.setItem("baydouvan_has_seen_intro", "true");
    };

    if (!isLoaded) return null;

    return (
        <main className="relative min-h-screen bg-black text-[#D4AF37] flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
            {showIntro && <IntroCinematic onComplete={handleIntroComplete} />}
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10" />
                <Image
                    src="/images/BanniereAccueil.png"
                    alt="Baydouvan Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-8 relative z-20">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] font-serif">
                    BAYDOUVAN
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#00A86B] drop-shadow-[0_0_10px_rgba(0,168,107,0.5)] uppercase font-serif">
                    Guardians of African Memory
                </h2>
                
                <p className="text-lg md:text-xl text-white max-w-2xl mx-auto py-8 font-medium leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                    Une société secrète protège les savoirs anciens d'Afrique. 
                    Devenez un initié et retrouvez les artefacts perdus de notre histoire.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link 
                        href="/missions"
                        className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all duration-300 font-serif"
                    >
                        PLAY NOW
                    </Link>
                    <Link 
                        href="/map"
                        className="px-8 py-4 border border-[#00A86B] text-[#00A86B] font-bold uppercase tracking-wider rounded-none hover:bg-[#00A86B]/20 hover:text-white hover:shadow-[0_0_20px_rgba(0,168,107,0.5)] transition-all duration-300 bg-black/50 font-serif"
                    >
                        Explorer la carte
                    </Link>
                </div>
            </div>

            <footer className="absolute bottom-0 w-full py-6 text-center text-white/90 font-medium text-xs tracking-widest uppercase font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-20 bg-gradient-to-t from-black/80 to-transparent">
                <p>© {new Date().getFullYear()} BAYDOUVAN. Tous droits réservés.</p>
            </footer>
        </main>
    );
}
