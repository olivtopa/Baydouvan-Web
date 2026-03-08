import { useState } from 'react';
import { QuizQuestion } from '../../lib/data/challenges';

interface QuizChallengeProps {
    quiz: QuizQuestion;
    onSuccess: () => void;
}

export function QuizChallenge({ quiz, onSuccess }: QuizChallengeProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSelect = (index: number) => {
        if (isCorrect) return; // Prevent changing answer after success
        setSelectedAnswer(index);
        
        if (index === quiz.correctAnswerIndex) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="p-6 border border-white/10 bg-black/50 mb-8">
                <p className="text-white text-xl font-medium leading-relaxed">
                    {quiz.question}
                </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 text-base">
                {quiz.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isThisCorrect = index === quiz.correctAnswerIndex;
                    
                    let buttonClass = "px-6 py-4 border border-[#D4AF37]/50 font-bold text-left transition-colors md:text-lg ";
                    
                    if (isCorrect && isThisCorrect) {
                        buttonClass += "bg-[#00A86B]/20 border-[#00A86B] text-[#00A86B]";
                    } else if (isSelected && !isCorrect) {
                        buttonClass += "bg-red-900/20 border-red-500 text-red-500";
                    } else if (isCorrect) {
                        buttonClass += "opacity-50 cursor-not-allowed text-white/50";
                    } else {
                        buttonClass += "hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white";
                    }

                    return (
                        <button 
                            key={index}
                            onClick={() => handleSelect(index)}
                            disabled={isCorrect === true}
                            className={buttonClass}
                        >
                            {String.fromCharCode(65 + index)}. {option}
                        </button>
                    );
                })}
            </div>

            {isCorrect === false && (
                <div className="text-red-500 text-center font-bold mt-4 animate-fade-in text-lg space-y-4">
                    <p>Réponse incorrecte. La mémoire s'estompe, essayez encore.</p>
                    <button 
                        onClick={() => handleSelect(quiz.correctAnswerIndex)}
                        className="px-6 py-2 border border-red-500/50 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-colors text-sm uppercase tracking-wider mx-auto block"
                    >
                        Révéler la réponse
                    </button>
                </div>
            )}

            {isCorrect === null && (
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={() => handleSelect(quiz.correctAnswerIndex)}
                        className="px-6 py-2 border border-red-500/50 text-red-500/70 hover:text-red-500 hover:border-red-500 transition-colors text-sm uppercase tracking-wider"
                    >
                        Je donne ma langue au chat
                    </button>
                </div>
            )}

            {isCorrect === true && (
                <div className="mt-8 p-6 bg-[#00A86B]/10 border border-[#00A86B] text-center animate-fade-in space-y-6">
                    <h3 className="text-2xl font-black text-[#00A86B] uppercase tracking-widest">
                        Mémoire Restaurée
                    </h3>
                    <p className="text-white text-lg">
                        {quiz.explanation}
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
