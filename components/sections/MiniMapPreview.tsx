"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function MiniMapPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative group w-full max-w-[300px] aspect-square rounded-full flex items-center justify-center cursor-pointer"
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-[#00A86B]/20 blur-2xl group-hover:bg-[#00A86B]/40 group-hover:blur-3xl transition-all duration-700" />
      
      <Link href="/map" className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-500 block">
        
        {/* Map Image acts as globe surface */}
        <div className="absolute inset-0 bg-black/80 z-0">
          <Image
            src="/images/map-placeholder.jpg" // Note: Fallback styling will handle if image missing
            alt="Interactive Map Preview"
            fill
            className="object-cover opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000"
            onError={(e) => {
              // Fallback to purely CSS base map if image missing 
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                // Instead of using Tailwind bg-[url(...)], which confuses Next.js Webpack during dev,
                // we assign it as an inline style.
                parent.innerHTML = '<div class="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 mix-blend-screen" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Zz48cGF0aCBkPSJNIDIwMCwgMjAwIG0gLTEwMCwgMCBhIDEwMCwxMDAgMCAxLDAgMjAwLDAgYSAxMDAsMTAwIDAgMSwwIC0yMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBBODZCIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+\')"></div>';
              }
            }}
          />
        </div>
        
        {/* Overlay Grid Line */ }
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,107,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,107,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-full [mask-image:radial-gradient(circle,black_30%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Scanning Line Animation */}
        <motion.div 
          animate={{
            top: ["-20%", "120%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 right-0 h-1 bg-[#D4AF37] opacity-60 shadow-[0_0_10px_#D4AF37] blur-[1px]" 
        />
        
        {/* Markers */}
        <div className="absolute top-[30%] left-[40%] w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] animate-pulse" />
        <div className="absolute top-[60%] left-[60%] w-2 h-2 rounded-full bg-[#00A86B] shadow-[0_0_10px_#00A86B] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[45%] left-[70%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Hover overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <span className="text-[#D4AF37] font-serif uppercase tracking-widest font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Ouvrir la carte</span>
           <span className="text-white text-xs mt-2 uppercase tracking-wide">3 Missions Disponibles</span>
        </div>
      </Link>
    </motion.div>
  );
}
