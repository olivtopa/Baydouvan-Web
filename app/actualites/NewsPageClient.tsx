"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsItem } from "@/lib/fetchNews";

const categories = [
    { id: "culture", label: "S'ancrer" },
    { id: "economie", label: "Faire Circuler" },
    { id: "tech", label: "Coder le Futur" },
];

interface NewsPageClientProps {
    initialNews: NewsItem[];
}

export function NewsPageClient({ initialNews }: NewsPageClientProps) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [activeTab, setActiveTab] = useState("culture");

    useEffect(() => {
        if (categoryParam && categories.some(c => c.id === categoryParam)) {
            setActiveTab(categoryParam);
        }
    }, [categoryParam]);

    const filteredNews = initialNews.filter(item => item.category === activeTab);

    return (
        <div className="container mx-auto px-4 py-24 md:py-32">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 font-heading text-4xl font-bold text-gold md:text-5xl"
                >
                    Actualités & Veille
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto max-w-2xl text-gray-300"
                >
                    Explorez les dernières avancées, analyses et découvertes qui façonnent notre futur.
                    Une sélection quotidienne pour nourrir votre réflexion.
                </motion.p>
            </div>

            {/* Tabs */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`rounded-full border px-6 py-2 text-sm font-bold transition-all ${activeTab === cat.id
                            ? "border-gold bg-gold text-black-main"
                            : "border-white/20 hover:border-gold hover:text-gold"
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            {filteredNews.length > 0 ? (
                <NewsGrid items={filteredNews} />
            ) : (
                <div className="text-center text-gray-400 py-10">
                    Aucune actualité disponible pour le moment dans cette catégorie.
                </div>
            )}

            {/* Footer Note */}
            <div className="mt-16 text-center text-sm text-gray-500">
                Mis à jour quotidiennement • Sources vérifiées
            </div>
        </div>
    );
}
