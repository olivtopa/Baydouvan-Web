"use client";

import { Share2, QrCode, X } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";

export const ShareButton = () => {
    const [isShared, setIsShared] = useState(false);

    const [showQR, setShowQR] = useState(false);

    const shareData = {
        title: "Baydouvan",
        text: "Rejoins-moi sur Baydouvan, l'aventure afrofuturiste pour redécouvrir l'histoire africaine !",
        url: typeof window !== "undefined" ? window.location.origin : "https://baydouvan.vercel.app",
    };

    const handleShare = async () => {
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
        <>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setShowQR(true)}
                    className="p-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full transition-all duration-300"
                    title="Afficher le QR Code"
                >
                    <QrCode size={18} />
                </button>
                <button
                    onClick={handleShare}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-xs
                        ${isShared 
                            ? "border-[#00A86B] bg-[#00A86B]/20 text-[#00A86B]" 
                            : "border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                        }`}
                    title="Partager le lien de l'application"
                >
                    <Share2 size={16} />
                    <span className="hidden sm:inline">
                        {isShared ? "Lien Copié !" : "Partager"}
                    </span>
                </button>
            </div>

            {/* QR Code Modal Overlay */}
            {showQR && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                    <div className="bg-[#111] border border-[#D4AF37]/30 p-8 rounded-2xl shadow-2xl relative max-w-sm w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <button 
                            onClick={() => setShowQR(false)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <h3 className="text-[#D4AF37] font-black uppercase tracking-widest text-xl mb-2 font-serif">
                            BAYDOUVAN
                        </h3>
                        <p className="text-white/60 text-sm text-center mb-8 uppercase tracking-widest font-bold">
                            Scannez pour jouer
                        </p>
                        
                        <div className="bg-white p-4 rounded-xl mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                            <QRCode
                                value={shareData.url}
                                size={200}
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="H"
                            />
                        </div>
                        
                        <p className="text-[#00A86B] text-xs uppercase tracking-widest font-bold">
                            Aventure Afrofuturiste
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
