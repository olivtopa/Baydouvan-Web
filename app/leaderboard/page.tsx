"use client";

import Link from "next/link";
import { useGameProgress } from "../../lib/hooks/useGameProgress";
import { MOCK_LEADERBOARD, LeaderboardPlayer } from "../../lib/data/leaderboard";
import { useMemo } from "react";
import { GameHeader } from "../../components/layout/GameHeader";

export default function LeaderboardPage() {
    const { progress, isLoaded } = useGameProgress();

    const rankedPlayers = useMemo(() => {
        if (!isLoaded) return [];

        // Create player object
        const currentUser: LeaderboardPlayer = {
            username: "Vous (Initié_001)",
            xp: progress.xp,
            grade: progress.grade,
            isCurrentUser: true
        };

        // Combine and sort
        const combined = [...MOCK_LEADERBOARD, currentUser].sort((a, b) => b.xp - a.xp);
        
        // Assign ranks and take top 10 or ensure we see user
        let userWasIncluded = false;
        const result = combined.slice(0, 10).map((p, index) => {
            if (p.isCurrentUser) userWasIncluded = true;
            return { ...p, rank: index + 1 };
        });

        // If user fell out of top 10, append them at their real rank
        if (!userWasIncluded && currentUser.xp >= 0) {
            const realRank = combined.findIndex(p => p.isCurrentUser) + 1;
            result.push({ ...currentUser, rank: realRank });
        }

        return result;
    }, [isLoaded, progress]);

    if (!isLoaded) return null;

    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col font-sans">
            <GameHeader currentRoute="/leaderboard" />

            <div className="max-w-4xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center font-serif text-[#00A86B] drop-shadow-[0_0_15px_rgba(0,168,107,0.5)]">
                    Classement Mondial
                </h1>
                <p className="text-center text-white/60 mb-12 uppercase tracking-widest text-sm">Top 10 des Gardiens</p>

                <div className="space-y-4">
                    {rankedPlayers.map((player) => {
                        const isTop3 = player.rank && player.rank <= 3;
                        const isMe = player.isCurrentUser;

                        let borderBgClasses = 'border-white/10 bg-black/50';
                        if (isMe) borderBgClasses = 'border-[#00A86B] bg-[#00A86B]/10 shadow-[0_0_20px_rgba(0,168,107,0.3)] scale-[1.02] transform z-10 relative';
                        else if (isTop3) borderBgClasses = 'border-[#D4AF37]/50 bg-[#D4AF37]/5';

                        return (
                            <div 
                                key={player.rank} 
                                className={`flex items-center justify-between p-4 md:p-6 border gap-2 md:gap-4 transition-all ${borderBgClasses}`}
                            >
                                <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
                                    <span className={`text-2xl md:text-3xl font-black font-serif w-8 md:w-12 text-center shrink-0
                                        ${isMe ? 'text-[#00A86B]' : isTop3 ? 'text-[#D4AF37]' : 'text-white/40'}`}>
                                        #{player.rank}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-base md:text-xl font-bold tracking-wider flex items-center gap-2 md:gap-3
                                            ${isMe ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white/90'}`}>
                                            <span className="truncate">{player.username}</span>
                                            {isMe && <span className="shrink-0 text-[10px] md:text-xs bg-[#00A86B] text-black px-1.5 md:px-2 py-0.5 uppercase tracking-widest font-black rounded-sm">Vous</span>}
                                        </h3>
                                        <span className={`text-[10px] md:text-xs uppercase tracking-widest font-bold block truncate ${isMe || isTop3 ? 'text-[#D4AF37]' : 'text-[#00A86B]'}`}>
                                            {player.grade}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className={`text-lg md:text-2xl font-mono font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] ${isMe ? 'text-[#00A86B]' : 'text-white'}`}>
                                        {player.xp}
                                    </span>
                                    <span className={`text-[10px] md:text-sm font-bold tracking-widest ml-1 md:ml-2 uppercase ${isMe ? 'text-[#00A86B]/80' : 'text-[#D4AF37]/80'}`}>XP</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
