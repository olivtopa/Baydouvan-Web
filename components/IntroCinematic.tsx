"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface IntroCinematicProps {
  onComplete: () => void;
}

const sentences = [
  "L'histoire de l'Afrique a été oubliée...",
  "Devenez Gardien de la mémoire."
];

export function IntroCinematic({ onComplete }: IntroCinematicProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= sentences.length) {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
    
    // Auto-advance to next sentence after typing is done + pause
    const typingDuration = sentences[step].length * 70;
    const nextStepTimer = setTimeout(() => {
      setStep((s) => s + 1);
    }, typingDuration + 3000);
    
    return () => clearTimeout(nextStepTimer);
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-sans tracking-widest px-4 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-50 animate-pulse pointer-events-none" />
      
      <div className="text-2xl md:text-3xl lg:text-4xl text-white font-serif min-h-[6rem] flex items-center justify-center relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        {step < sentences.length && (
          <motion.p key={step} className="flex flex-wrap justify-center">
            {sentences[step].split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.07, duration: 0.1 }}
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-[#D4AF37] ml-1"
            >
              _
            </motion.span>
          </motion.p>
        )}
      </div>

      {step >= sentences.length ? (
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onComplete}
          className="mt-12 opacity-80 hover:opacity-100 text-[#00A86B] uppercase text-sm md:text-base tracking-[0.3em] font-serif transition-opacity z-10"
        >
          [ Démarrer l'Aventure ]
        </motion.button>
      ) : (
        <button 
          onClick={onComplete}
          className="absolute bottom-10 opacity-30 hover:opacity-100 text-white uppercase text-xs tracking-[0.2em] font-serif transition-opacity z-10"
        >
          Passer l'introduction
        </button>
      )}
    </div>
  );
}
