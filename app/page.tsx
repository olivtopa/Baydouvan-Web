"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IntroCinematic } from "../components/IntroCinematic";
import { GuideCharacter } from "../components/sections/GuideCharacter";
import { DailyChallenges } from "../components/sections/DailyChallenges";
import { MiniMapPreview } from "../components/sections/MiniMapPreview";

export default function Home() {
    const [showIntro, setShowIntro] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
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
        <main className="relative min-h-screen bg-black text-[#D4AF37] flex flex-col p-4 md:p-8 overflow-hidden font-sans">
            {showIntro && <IntroCinematic onComplete={handleIntroComplete} />}
            
            {/* Background Map & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
                <Image
                    src="/images/BanniereAccueil.png"
                    alt="Baydouvan Background"
                    fill
                    className="object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
                    priority
                />
            </div>

            {/* Glowing Orbs for ambiance */}
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[100px] z-0 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#00A86B]/10 rounded-full blur-[120px] z-0 pointer-events-none" />

            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col h-full flex-1">
                
                {/* Header (Title & Hook) */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center w-full pt-8 md:pt-12"
                >
                    <div className="relative w-[300px] md:w-[500px] lg:w-[600px] h-[100px] md:h-[150px] lg:h-[180px] mx-auto mb-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                        <Image
                            src="/logo.png"
                            alt="Baydouvan Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-[#00A86B] drop-shadow-[0_0_15px_rgba(0,168,107,0.5)] uppercase font-serif">
                        Guardians of African Memory
                    </h2>
                    
                    <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mt-6 font-medium leading-relaxed bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                        Une société secrète protège les savoirs anciens d'Afrique. 
                        Devenez un initié et retrouvez les artefacts perdus de notre histoire.
                    </p>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-8 mb-12"
                    >
                        <Link 
                            href="/missions"
                            className="inline-block px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold uppercase tracking-[0.2em] rounded-sm hover:from-white hover:to-gray-200 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 font-serif"
                        >
                            Démarrer L'Initiation
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Dashboard / Gaming Grid Layout */}
                <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end pb-12 w-full mt-auto">
                    
                    {/* Left Panel: Guide Character */}
                    <div className="order-3 md:order-1 lg:col-span-1 flex justify-center md:justify-start items-end z-30">
                        <GuideCharacter />
                    </div>

                    {/* Center Panel: Map Preview */}
                    <div className="order-1 md:order-2 lg:col-span-1 flex justify-center items-center h-full min-h-[300px] z-20">
                        <MiniMapPreview />
                    </div>

                    {/* Right Panel: Daily Challenges */}
                    <div className="order-2 md:order-3 lg:col-span-1 flex justify-center md:justify-end items-end z-30 mb-8 md:mb-0">
                        <DailyChallenges />
                    </div>

                </div>
            </div>

            <footer className="absolute bottom-0 w-full py-4 text-center text-white/60 font-medium text-[10px] md:text-xs tracking-[0.3em] uppercase font-serif z-20">
                <p>© {new Date().getFullYear()} BAYDOUVAN. Project Prototype.</p>
            </footer>
        </main>
    );
}
