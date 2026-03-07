"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthButton } from "../auth/AuthButton";
import { ShareButton } from "../ui/ShareButton";

interface GameHeaderProps {
    currentRoute?: string;
}

export const GameHeader = ({ currentRoute }: GameHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Carte", href: "/map" },
        { name: "Missions", href: "/missions" },
        { name: "Classement", href: "/leaderboard" },
        { name: "Artefacts", href: "/artifacts" },
        { name: "Profil", href: "/profile" },
    ];

    return (
        <header className="flex justify-between items-center mb-12 relative z-50">
            <Link href="/" className="text-2xl font-black tracking-widest hover:text-white transition-colors font-serif text-[#D4AF37]">
                BAYDOUVAN
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                <nav className="flex gap-6 text-sm font-bold tracking-wider uppercase font-serif">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors ${currentRoute === link.href ? "text-[#00A86B]" : "hover:text-white text-[#D4AF37]"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <ShareButton />
                    <AuthButton />
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
                <ShareButton />
                <AuthButton />
                <button
                    className="text-[#D4AF37] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 p-6 bg-black border border-[#D4AF37]/30 shadow-2xl rounded-lg md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center text-sm font-bold tracking-wider uppercase font-serif">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`transition-colors py-2 border-b border-white/5 ${currentRoute === link.href ? "text-[#00A86B]" : "text-white/80 hover:text-[#D4AF37]"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
