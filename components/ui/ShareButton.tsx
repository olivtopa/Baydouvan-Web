"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export const ShareButton = () => {
    const [isShared, setIsShared] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: "Baydouvan",
            text: "Rejoins-moi sur Baydouvan, l'aventure afrofuturiste pour redécouvrir l'histoire africaine !",
            url: window.location.origin, // Dynamically gets the current domain
        };

        try {
            if (navigator.share) {
                // Use native Web Share API (Mobile & some Desktop browsers)
                await navigator.share(shareData);
                console.log("Partagé avec succès !");
            } else {
                // Fallback: Copy to clipboard if Web Share API is not supported (e.g. older desktop browsers)
                await navigator.clipboard.writeText(shareData.url);
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            }
        } catch (err) {
            console.error("Erreur lors du partage :", err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-xs
                ${isShared 
                    ? "border-[#00A86B] bg-[#00A86B]/20 text-[#00A86B]" 
                    : "border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
            title="Partager l'application"
        >
            <Share2 size={16} />
            <span className="hidden sm:inline">
                {isShared ? "Lien Copié !" : "Partager"}
            </span>
        </button>
    );
};
