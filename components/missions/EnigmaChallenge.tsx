import { useState } from 'react';
import { Enigma } from '../../lib/data/challenges';

interface EnigmaChallengeProps {
    enigma: Enigma;
    onSuccess: () => void;
}

export function EnigmaChallenge({ enigma, onSuccess }: EnigmaChallengeProps) {
    const [inputValue, setInputValue] = useState("");
    const [hintLevel, setHintLevel] = useState(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isCorrect) return;

        const cleanInput = inputValue.trim().toLowerCase();
        // Remove accents for naive comparison if needed in future, but simple includes is ok for now.
        const isMatch = enigma.acceptedAnswers.some(ans => cleanInput.includes(ans.toLowerCase()));

        if (isMatch) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            setInputValue("");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="p-8 border border-[#D4AF37]/30 bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.1)] mb-8 space-y-4">
                {enigma.riddle.map((line, i) => (
                    <p key={i} className="text-white text-xl md:text-2xl font-medium leading-relaxed italic text-center">
                        "{line}"
                    </p>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsCorrect(null);
                        }}
                        disabled={isCorrect === true}
                        placeholder="Votre réponse ici"
                        className="w-full bg-black border-b-2 border-[#D4AF37] px-2 md:px-4 py-4 text-center text-base sm:text-lg md:text-2xl text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors font-bold uppercase"
                    />
                </div>

                {isCorrect === false && (
                    <div className="text-red-500 text-center font-bold animate-fade-in text-lg">
                        Cette réponse ne résonne pas avec la vérité.
                    </div>
                )}

                {!isCorrect && (
                    <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
                        <button 
                            type="button"
                            onClick={() => {
                                setInputValue(enigma.acceptedAnswers[0]);
                                setIsCorrect(true);
                            }}
                            className="px-6 py-3 border border-red-500/50 text-red-500/70 hover:text-red-500 hover:border-red-500 transition-colors text-sm uppercase tracking-wider"
                        >
                            Révéler la réponse
                        </button>
                        <button 
                            type="button"
                            onClick={() => setHintLevel(prev => Math.min(prev + 1, enigma.hints.length))}
                            disabled={hintLevel >= enigma.hints.length}
                            className="px-6 py-3 border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-colors text-sm uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Demander un indice ({enigma.hints.length - hintLevel} restants)
                        </button>
                        <button 
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Soumettre
                        </button>
                    </div>
                )}
            </form>

            {hintLevel > 0 && !isCorrect && (
                <div className="mt-8 space-y-3 animate-fade-in">
                    <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest text-center border-b border-[#D4AF37]/20 pb-2">
                        Indices Mémoriels
                    </h4>
                    {enigma.hints.slice(0, hintLevel).map((hint, i) => (
                        <p key={i} className="text-white/80 text-center bg-white/5 py-3 px-4 italic text-lg shadow-inner">
                            {hint}
                        </p>
                    ))}
                </div>
            )}

            {isCorrect === true && (
                <div className="mt-8 p-6 bg-[#00A86B]/10 border border-[#00A86B] text-center animate-fade-in space-y-6">
                    <h3 className="text-2xl font-black text-[#00A86B] uppercase tracking-widest">
                        Énigme Résolue
                    </h3>
                    <p className="text-white text-lg">
                        {enigma.successMessage}
                    </p>
                    <button 
                        onClick={onSuccess}
                        className="px-8 py-3 bg-[#00A86B] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300"
                    >
                        Continuer
                    </button>
                </div>
            )}
        </div>
    );
}
