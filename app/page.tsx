import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { BridgeWidget } from "@/components/ui/BridgeWidget";
import { StickyFooter } from "@/components/ui/StickyFooter";
import { Pillars } from "@/components/sections/Pillars";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-black-main text-white">
            <Header />
            <Hero />

            {/* Manifesto Section */}
            <section id="manifesto" className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8">Le Manifeste</h2>
                    <div className="prose prose-invert prose-lg mx-auto text-white/90">
                        <p className="mb-6">
                            On dit souvent que le savoir est une arme. C&apos;est faux. Le savoir est une <span className="italic text-gold">munition</span>. L&apos;arme, c&apos;est l&apos;action. Bienvenue sur <span className="font-bold text-gold">Baydouvan</span>, le média de l&apos;excellence noire.
                        </p>
                        <p className="mb-6">
                            Si vous êtes ici, c&apos;est que vous refusez le rôle de spectateur. Vous sentez que l&apos;histoire s&apos;accélère. Baydouvan (« Mettre en avant » en créole) est né d&apos;une urgence : celle de réunir nos forces dispersées.
                        </p>
                    </div>

                    <BridgeWidget />
                </div>
            </section>

            {/* Pillars Section */}
            <Pillars />

            {/* Mock RSS Feed / Tidjob Integration */}

            {/* About Section (reused footer or manifesto?) - Let's add a small About block or point #about here */}
            <section id="about" className="py-20 px-6 container mx-auto text-center border-t border-white/10 scroll-mt-24">
                <h2 className="text-3xl font-serif text-gold mb-6">À Propos</h2>
                <p className="max-w-2xl mx-auto text-white/80">
                    Baydouvan est une initiative portée par la communauté pour la communauté.
                    Notre mission : révéler les potentiels et bâtir des ponts économiques solides.
                </p>
            </section>

            {/* Mock RSS Feed / Tidjob Integration */}
            <section className="py-20 px-6 container mx-auto text-center">
                <h2 className="text-2xl font-serif mb-8 text-white/80">En direct de <span className="text-tidjob-green font-bold">Tidjob</span></h2>
                <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-6 py-3 border border-white/20">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tidjob-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-tidjob-green"></span>
                    </span>
                    <span className="text-sm md:text-base">Dernière mission postée : <span className="font-bold">Recherche Traiteur à Paris</span></span>
                </div>
            </section>

            <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm">
                <p>© {new Date().getFullYear()} Baydouvan. Tous droits réservés.</p>
            </footer>

            <StickyFooter />
        </main >
    );
}
