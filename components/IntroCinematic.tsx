"use client";

import { useState, useEffect } from "react";

interface IntroCinematicProps {
  onComplete: () => void;
}

export function IntroCinematic({ onComplete }: IntroCinematicProps) {
  const [step, setStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const sentences = [
    "L'histoire de l'Afrique a été oubliée...",
    "Deviens Gardien de la mémoire."
  ];

  useEffect(() => {
    if (step >= sentences.length) {
      // Intro is finished
      setTimeout(onComplete, 2000);
      return;
    }

    let i = 0;
    setIsTyping(true);
    setDisplayText("");

    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + sentences[step].charAt(i));
      i++;
      if (i === sentences[step].length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Wait before next step
        setTimeout(() => setStep((s) => s + 1), 3000);
      }
    }, 70); // Typing speed

    return () => clearInterval(typingInterval);
  }, [step]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-sans tracking-widest px-4 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.15)_0%,transparent_70%)] opacity-50 animate-pulse" />
      
      <p className="text-2xl md:text-4xl text-white font-serif min-h-[4rem] relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        {displayText}
        {isTyping && <span className="animate-ping ml-1 text-[#00A86B]">_</span>}
      </p>

      {step >= sentences.length && (
        <button 
          onClick={onComplete}
          className="mt-12 opacity-50 hover:opacity-100 text-[#D4AF37] uppercase text-sm tracking-[0.3em] font-serif transition-opacity animate-fade-in z-10"
        >
          [ Passer la transmission ]
        </button>
      )}
    </div>
  );
}
