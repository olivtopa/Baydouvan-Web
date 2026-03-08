"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthButton } from "../auth/AuthButton";
import { ShareButton } from "../ui/ShareButton";
import { createClient } from "../../utils/supabase/client";
import { signout } from "../../app/auth/actions";

interface GameHeaderProps {
    currentRoute?: string;
}

export const GameHeader = ({ currentRoute }: GameHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data.session?.user || null);
        };
        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const links = [
        { name: "Carte", href: "/map" },
        { name: "Missions", href: "/missions" },
        { name: "Classement", href: "/leaderboard" },
        { name: "Artefacts", href: "/artifacts" },
        { name: "Profil", href: "/profile" },
    ];

    return (
        <header className="flex justify-between items-center mb-16 relative z-50">
            <Link href="/" className="transition-transform hover:scale-110">
                <div className="relative h-24 w-24 md:h-36 md:w-36 overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    <Image
                        src="/logo.png"
                        alt="Baydouvan Logo"
                        fill
                        className="object-contain"
                    />
                </div>
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
                            <div className="flex justify-center pt-4 border-t border-[#D4AF37]/10 flex-col gap-4">
                                <ShareButton />
                                {user && (
                                    <form action={signout} className="w-full">
                                        <button 
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 py-3 border border-red-500/30 text-red-500 font-bold uppercase tracking-widest text-xs hover:bg-red-500/10 transition-colors"
                                        >
                                            <LogOut size={16} />
                                            Déconnexion
                                        </button>
                                    </form>
                                )}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
