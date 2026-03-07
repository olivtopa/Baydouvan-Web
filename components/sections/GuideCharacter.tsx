"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DIALOG_LINES = [
  "Salutations, initié. Prêt pour les défis du jour ?",
  "L'histoire attend que l'on s'en souvienne...",
  "Ton voyage pour devenir Gardien commence ici.",
  "Explore la carte et découvre les secrets de l'Afrique."
];

export function GuideCharacter() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const text = DIALOG_LINES[currentLine];
    let currentIndex = 0;
    
    setIsTyping(true);
    setDisplayedText("");

    const typeChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        currentIndex++;
        timeout = setTimeout(typeChar, 50); // Typing speed
      } else {
        setIsTyping(false);
        // Change line after 5 seconds
        timeout = setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % DIALOG_LINES.length);
        }, 5000);
      }
    };

    timeout = setTimeout(typeChar, 500); // Initial delay

    return () => clearTimeout(timeout);
  }, [currentLine]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-end gap-return"
    >
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLine}
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: -20 }}
          className="relative max-w-[280px] bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl rounded-br-sm p-4 text-sm text-white font-serif mb-12 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-[#00A86B] animate-pulse" />
          <p className="pl-4 min-h-[40px] flex items-center">
            {displayedText}
            {isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-[#D4AF37] animate-pulse" />}
          </p>
          
          {/* Bubble Tail */}
          <div className="absolute -bottom-3 right-4 w-6 h-6 bg-black/60 border-b border-r border-[#D4AF37]/30 transform rotate-45" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Character Image */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 cursor-pointer"
        onClick={() => {
          if (!isTyping) {
            setCurrentLine((prev) => (prev + 1) % DIALOG_LINES.length);
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent rounded-full blur-xl" />
        <Image
          src="/images/GuidePortrait.png" // Fallback to a placeholder if not real image
          alt="Guide"
          fill
          className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300"
          onError={(e) => {
             // Fallback to a generic abstract shape or icon if image is missing
             e.currentTarget.style.display = 'none';
             e.currentTarget.parentElement?.classList.add('fallback-guide');
          }}
        />
        {/* CSS for fallback inside global css but we add a generic element here just in case */}
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center -z-10 bg-black/50 overflow-hidden">
             <div className="w-20 h-20 bg-gradient-to-tr from-[#D4AF37] to-[#00A86B] rounded-full blur-md opacity-50" />
        </div>
      </motion.div>

    </motion.div>
  );
}
