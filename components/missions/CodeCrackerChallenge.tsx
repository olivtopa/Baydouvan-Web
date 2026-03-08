import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeCracker } from '../../lib/data/challenges';

interface CodeCrackerChallengeProps {
    cracker: CodeCracker;
    onSuccess: () => void;
}

export function CodeCrackerChallenge({ cracker, onSuccess }: CodeCrackerChallengeProps) {
    const wordLength = cracker.hiddenWord.length;
    const [guesses, setGuesses] = useState<string[]>(Array(wordLength).fill(''));
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
        if (index >= 0 && index < wordLength) {
            inputRefs.current[index]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (isSuccess) return;

        if (e.key === 'Backspace') {
            if (guesses[index] === '' && index > 0) {
                focusInput(index - 1);
            } else {
                const newGuesses = [...guesses];
                newGuesses[index] = '';
                setGuesses(newGuesses);
                setIsError(false);
            }
        } else if (e.key === 'ArrowLeft') {
            focusInput(index - 1);
        } else if (e.key === 'ArrowRight') {
            focusInput(index + 1);
        } else if (e.key === 'Enter') {
            checkWord();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (isSuccess) return;
        
        const val = e.target.value.toUpperCase();
        if (val.match(/^[A-ZÉÈÊÀÂÎÏÔÙÛÇ]$/)) {
            const newGuesses = [...guesses];
            // Take only the last character entered
            newGuesses[index] = val.slice(-1);
            setGuesses(newGuesses);
            setIsError(false);
            focusInput(index + 1);
        } else if (val === '') {
            const newGuesses = [...guesses];
            newGuesses[index] = '';
            setGuesses(newGuesses);
        }
    };

    const checkWord = () => {
        const word = guesses.join('');
        if (word.length === wordLength) {
            if (word === cracker.hiddenWord.toUpperCase()) {
                setIsSuccess(true);
            } else {
                setIsError(true);
                // Reset after brief error animation
                setTimeout(() => {
                    setIsError(false);
                }, 800);
            }
        }
    };

    // Auto-check on all filled
    useEffect(() => {
        if (guesses.every(g => g !== '') && guesses.length === wordLength) {
            checkWord();
        }
    }, [guesses]);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-12 animate-fade-in relative">
            <div className="p-6 border-l-4 border-[#D4AF37] bg-black/50 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent flex" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#D4AF37] mb-4">
                    Sceau Mémoriel
                </h3>
                <p className="text-white/80 text-lg italic">
                    {cracker.clue}
                </p>
            </div>

            <motion.div 
                className="flex items-center justify-center gap-2 md:gap-4 flex-wrap"
                animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
            >
                {guesses.map((char, i) => (
                    <input
                        key={i}
                        ref={(el) => { inputRefs.current[i] = el; }}
                        type="text"
                        value={char}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        disabled={isSuccess}
                        maxLength={2} // Allow 2 to detect replace via slice(-1)
                        className={`
                            w-12 h-16 md:w-16 md:h-20 text-center text-2xl md:text-4xl font-black uppercase
                            bg-transparent outline-none transition-all duration-300
                            ${isSuccess ? 'border-b-4 border-[#00A86B] text-[#00A86B] shadow-[0_0_15px_rgba(0,168,107,0.3)]' : 
                              isError ? 'border-b-4 border-red-500 text-red-500 shadow-[0_0_15px_rgba(255,0,0,0.3)]' : 
                              'border-b-2 border-white/30 text-white focus:border-[#D4AF37] focus:text-[#D4AF37]'}
                        `}
                    />
                ))}
            </motion.div>

            <AnimatePresence>
                {isSuccess && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-[#00A86B]/10 border border-[#00A86B] text-center space-y-6"
                    >
                        <h3 className="text-2xl font-black text-[#00A86B] uppercase tracking-widest">
                            Sceau Brisé
                        </h3>
                        <p className="text-white text-lg">
                            {cracker.successMessage}
                        </p>
                        <button 
                            onClick={onSuccess}
                            className="px-8 py-3 bg-[#00A86B] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
                        >
                            Continuer
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
