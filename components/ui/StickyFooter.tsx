"use client";

import { Download, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const StickyFooter = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after scrolling down a bit
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Only show on mobile/tablet (hidden on desktop by default via CSS media queries,
    // but good to have logic control too)

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-gold/30 bg-black-main/95 p-4 backdrop-blur-md md:hidden"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-white">
                            L&apos;App de la communauté est là.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="https://tidjob.com"
                            target="_blank"
                            className="flex items-center gap-2 rounded-full bg-tidjob-green px-4 py-2 text-xs font-bold text-white shadow-glow"
                        >
                            <Download className="h-3 w-3" />
                            Télécharger
                        </Link>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-white/60 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
