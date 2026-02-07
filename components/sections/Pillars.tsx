"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Pillars = () => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Function to update active ID from hash
        const updateActiveId = () => {
            const hash = window.location.hash.replace("#", "");
            setActiveId(hash);
        };

        // Set initial state
        updateActiveId();

        // Listen for hash changes
        window.addEventListener("hashchange", updateActiveId);

        // Also listen for click events on anchor links to ensure immediate update
        // (Next.js Link sometimes doesn't trigger hashchange immediately on same-page nav)
        const handleAnchorClick = () => {
            // Small timeout to allow the URL to update
            setTimeout(updateActiveId, 50);
        };

        window.addEventListener("click", handleAnchorClick);

        return () => {
            window.removeEventListener("hashchange", updateActiveId);
            window.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    const getPillarClasses = (id: string) => {
        const baseClasses = "group scroll-mt-24 rounded-2xl p-6 transition-all duration-500 relative z-0";
        const activeClasses = "bg-white/5 ring-1 ring-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105 z-10";

        return activeId === id
            ? `${baseClasses} ${activeClasses}`
            : baseClasses;
    };

    return (
        <section className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">Nos 3 Piliers</h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Culture */}
                    <div id="culture" className={getPillarClasses("culture")}>
                        <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/images/ancrageIdentite.png"
                                alt="Culture"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-gold mb-3">S&apos;ancrer pour s&apos;élever</h3>
                        <p className="mb-6 text-white/80">
                            Notre culture n&apos;est pas un folklore, c&apos;est notre système d&apos;exploitation. Philosophie Ubuntu, histoire ancienne... puisons-y notre force.
                        </p>
                        <Link
                            href="/actualites?category=culture"
                            className="inline-flex items-center text-sm font-bold text-gold hover:underline"
                        >
                            Découvrir les actualités culture
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Tech */}
                    <div id="tech" className={getPillarClasses("tech")}>
                        <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/images/SciencesTechno.png"
                                alt="Tech"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-gold mb-3">Coder notre futur</h3>
                        <p className="mb-6 text-white/80">
                            La technologie est le grand égalisateur. De l&apos;IA à la blockchain, brisons tous les plafonds de verre.
                        </p>
                        <Link
                            href="/actualites?category=tech"
                            className="inline-flex items-center text-sm font-bold text-gold hover:underline"
                        >
                            Voir les innovations tech
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Economy */}
                    <div id="economie" className={getPillarClasses("economie")}>
                        <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/images/BusinessCroissance.png"
                                alt="Économie"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-gold mb-3">Faire circuler la richesse</h3>
                        <p className="mb-6 text-white/80">
                            La fierté culturelle ne suffit pas. Créons un circuit économique où l&apos;argent circule entre nous.
                        </p>
                        <Link
                            href="/actualites?category=economie"
                            className="inline-flex items-center text-sm font-bold text-gold hover:underline"
                        >
                            Suivre l&apos;actualité économique
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
