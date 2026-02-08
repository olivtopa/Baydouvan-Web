"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const navItems = [
    { name: "Culture", href: "/#culture" },
    { name: "Économie", href: "/#economie" },
    { name: "Tech", href: "/#tech" },
    { name: "À Propos", href: "/#about" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black-main/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold">
                        <Image
                            src="/images/logo.jpeg"
                            alt="Baydouvan Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-serif text-xl font-bold text-gold tracking-wider hidden sm:block">
                        BAYDOUVAN
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="https://tidjob.com"
                        target="_blank"
                        className="relative h-10 w-10 overflow-hidden rounded-xl border-2 border-gold transition-transform hover:scale-110"
                        title="Tidjob Lokal"
                    >
                        <Image
                            src="/images/tidjob_logo.jpeg"
                            alt="Tidjob Lokal"
                            fill
                            className="object-cover"
                        />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-black-main border-b border-white/10 md:hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-white/80 hover:text-gold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="https://tidjob.com"
                                target="_blank"
                                className="flex items-center justify-center gap-3 rounded-full bg-tidjob-green py-3 text-white transition-transform active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/20">
                                    <Image
                                        src="/images/tidjob_logo.jpeg"
                                        alt="Tidjob"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-bold">Accéder à Tidjob</span>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
