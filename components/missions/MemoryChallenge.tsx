import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MemoryGame, MemoryCard } from '../../lib/data/challenges';

interface MemoryChallengeProps {
    game: MemoryGame;
    onSuccess: () => void;
}

interface GridCard extends MemoryCard {
    uniqueId: string;
}

export function MemoryChallenge({ game, onSuccess }: MemoryChallengeProps) {
    const [cards, setCards] = useState<GridCard[]>([]);
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [matchedIds, setMatchedIds] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [isChecking, setIsChecking] = useState<boolean>(false);

    useEffect(() => {
        // Initialize game: duplicate pairs, shuffle
        const duplicated = [...game.pairs, ...game.pairs].map((card, index) => ({
            ...card,
            uniqueId: `${card.id}-${index}`
        }));
        
        // Fisher-Yates shuffle
        for (let i = duplicated.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
        }
        
        setCards(duplicated);
        setFlippedIndices([]);
        setMatchedIds([]);
        setIsComplete(false);
    }, [game]);

    const handleCardClick = (index: number) => {
        if (isChecking) return;
        if (flippedIndices.includes(index)) return;
        if (matchedIds.includes(cards[index].id)) return;

        const newFlipped = [...flippedIndices, index];
        setFlippedIndices(newFlipped);

        if (newFlipped.length === 2) {
            setIsChecking(true);
            const card1 = cards[newFlipped[0]];
            const card2 = cards[newFlipped[1]];

            if (card1.id === card2.id) {
                // Match!
                setMatchedIds(prev => {
                    const next = [...prev, card1.id];
                    if (next.length === game.pairs.length) {
                        setTimeout(() => setIsComplete(true), 500);
                    }
                    return next;
                });
                setFlippedIndices([]);
                setIsChecking(false);
            } else {
                // No match, turn back after delay
                setTimeout(() => {
                    setFlippedIndices([]);
                    setIsChecking(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in relative">
            <div className="text-center mb-8">
                <p className="text-white text-lg lg:text-xl font-medium">
                    Trouvez toutes les paires pour restaurer les fragments de mémoire.
                </p>
                <div className="mt-4 font-mono text-[#D4AF37] border border-[#D4AF37]/30 inline-block px-4 py-2 bg-black/50">
                    Paires trouvées: {matchedIds.length} / {game.pairs.length}
                </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 perspective-1000">
                {cards.map((card, index) => {
                    const isFlipped = flippedIndices.includes(index) || matchedIds.includes(card.id);
                    const isMatched = matchedIds.includes(card.id);

                    return (
                        <div 
                            key={card.uniqueId}
                            onClick={() => handleCardClick(index)}
                            className="relative w-full aspect-square cursor-pointer group"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.div
                                className="w-full h-full relative preserve-3d"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front of card (hidden, facing back usually) */}
                                <div 
                                    className="absolute w-full h-full backface-hidden border border-[#D4AF37]/50 bg-black/80 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <div className="w-8 h-8 md:w-12 md:h-12 border border-[#D4AF37]/30 rotate-45 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-[#D4AF37]"></div>
                                    </div>
                                </div>

                                {/* Back of card (the actual content, flipped) */}
                                <div 
                                    className={`absolute w-full h-full backface-hidden border p-2 md:p-4 flex flex-col items-center justify-center text-center ${
                                        isMatched ? "border-[#00A86B] bg-[#00A86B]/10" : "border-[#D4AF37] bg-black"
                                    }`}
                                    style={{ 
                                        backfaceVisibility: "hidden", 
                                        transform: "rotateY(180deg)" 
                                    }}
                                >
                                    <span className={`text-sm md:text-base font-bold ${isMatched ? "text-[#00A86B]" : "text-[#D4AF37]"}`}>
                                        {card.content}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            <AnimatePresence>
                {isComplete && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 p-6 bg-[#00A86B]/10 border border-[#00A86B] text-center space-y-6"
                    >
                        <h3 className="text-2xl font-black text-[#00A86B] uppercase tracking-widest">
                            Mémoire Restaurée
                        </h3>
                        <p className="text-white text-lg">
                            {game.successMessage}
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
