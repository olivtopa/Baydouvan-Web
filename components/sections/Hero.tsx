"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Overlay increased to 70% opacity for better text contrast */}
                <div className="absolute inset-0 bg-black/70 z-10" />
                <Image
                    src="/images/BanniereAccueil.png"
                    alt="Baydouvan Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-lg"
                >
                    BAYDOUVAN
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 text-lg text-gold md:text-2xl font-normal"
                >
                    <span style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)" }}>
                        Mettre en avant l&apos;excellence noire
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-black-main/40 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto border border-white/10">
                        <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed drop-shadow-sm font-medium">
                            Nous sommes les héritiers d&apos;une histoire millénaire, bâtisseurs d&apos;un futur où la Culture nourrit l&apos;esprit, l&apos;Économie libère, et la Tech connecte.
                        </p>

                        <a href="#manifesto" className="inline-block rounded-full border border-gold bg-black-main/50 px-8 py-3 text-gold transition-colors hover:bg-gold hover:text-black-main font-bold backdrop-blur-md">
                            Découvrir le Manifeste
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
