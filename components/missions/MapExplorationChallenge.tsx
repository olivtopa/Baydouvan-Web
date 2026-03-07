import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapExplorationPoint } from '../../lib/data/challenges';

interface MapExplorationChallengeProps {
    point: MapExplorationPoint;
    onSuccess: () => void;
}

export function MapExplorationChallenge({ point, onSuccess }: MapExplorationChallengeProps) {
    const [phase, setPhase] = useState<'scanning' | 'locked' | 'story'>('scanning');

    useEffect(() => {
        // Auto-progress from scanning to locked after 3 seconds
        const scanTimer = setTimeout(() => {
            setPhase('locked');
        }, 3000);

        return () => clearTimeout(scanTimer);
    }, []);

    useEffect(() => {
        if (phase === 'locked') {
            // Auto-progress from locked to story after reading coordinates
            const lockTimer = setTimeout(() => {
                setPhase('story');
            }, 2000);
            return () => clearTimeout(lockTimer);
        }
    }, [phase]);

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 flex flex-col items-center animate-fade-in relative z-10">
            {/* The Radar UI */}
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 overflow-hidden flex items-center justify-center transition-colors duration-1000 ${phase === 'scanning' ? 'border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-[#00A86B] shadow-[0_0_50px_rgba(0,168,107,0.4)]'}`}>
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-full opacity-40 bg-black/80" />
                
                {/* Scanning Animation */}
                <AnimatePresence>
                    {phase === 'scanning' && (
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 origin-center"
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-[#D4AF37] opacity-60 rounded-full blur-[2px]" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Target Locked Indicator */}
                {phase !== 'scanning' && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute w-4 h-4 bg-[#00A86B] rounded-full shadow-[0_0_20px_#00A86B] animate-pulse"
                    />
                )}
                
                {/* Center Crosshair always visible */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <div className="w-full h-[1px] bg-[#D4AF37]" />
                    <div className="w-[1px] h-full bg-[#D4AF37] absolute" />
                    <div className="w-1/2 h-1/2 border border-[#D4AF37] rounded-full absolute" />
                </div>
            </div>

            {/* Status & Information Display */}
            <div className="text-center min-h-[160px] w-full mt-8">
                {phase === 'scanning' && (
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[#D4AF37] font-mono tracking-widest uppercase text-xl animate-pulse"
                    >
                        Recherche d'une anomalie temporelle...
                    </motion.p>
                )}

                {phase === 'locked' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2 text-[#00A86B]"
                    >
                        <h3 className="font-bold text-2xl uppercase tracking-widest">Cible Verrouillée</h3>
                        <p className="font-mono text-lg text-white">
                            LAT: {point.coordinates.lat.toFixed(4)} | LNG: {point.coordinates.lng.toFixed(4)}
                        </p>
                        <p className="font-black text-3xl uppercase tracking-widest mt-2">{point.country}</p>
                    </motion.div>
                )}

                {phase === 'story' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full bg-black/60 border border-[#D4AF37]/30 p-8 space-y-6 shadow-[0_0_20px_rgba(212,175,55,0.1)] relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A86B] to-transparent" />
                        <h4 className="text-[#00A86B] font-bold uppercase tracking-widest text-sm mb-4">Archive Récupérée</h4>
                        <p className="text-white text-xl md:text-2xl leading-relaxed italic text-center font-medium">
                            {point.story}
                        </p>
                        <div className="pt-6">
                            <button 
                                onClick={onSuccess}
                                className="px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            >
                                S'imprégner de cette mémoire
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
