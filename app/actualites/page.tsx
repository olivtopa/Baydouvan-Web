import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { StickyFooter } from "@/components/ui/StickyFooter";
import { fetchNewsData } from "@/lib/fetchNews";
import { NewsPageClient } from "./NewsPageClient";

export const revalidate = 3600; // Revalidate every hour

export default async function NewsPage() {
    const newsItems = await fetchNewsData();

    return (
        <main className="min-h-screen bg-black-main font-body text-white selection:bg-gold selection:text-black-main">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-black-main text-white flex items-center justify-center">Chargement...</div>}>
                <NewsPageClient initialNews={newsItems} />
            </Suspense>
            <StickyFooter />
        </main>
    );
}
