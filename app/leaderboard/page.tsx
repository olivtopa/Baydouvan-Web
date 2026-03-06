"use client";

import Link from "next/link";

const MOCK_LEADERBOARD = [
  { rank: 1, username: "Guardian_Africa", xp: 18500, grade: "Sage" },
  { rank: 2, username: "NileExplorer", xp: 14200, grade: "Sage" },
  { rank: 3, username: "MaliScholar", xp: 12100, grade: "Sage" },
  { rank: 4, username: "KushiteKing", xp: 9500, grade: "Gardien" },
  { rank: 5, username: "ZuluWarrior", xp: 8400, grade: "Gardien" },
  { rank: 6, username: "BeninBronze", xp: 7200, grade: "Gardien" },
  { rank: 7, username: "SonghaiPrince", xp: 6100, grade: "Gardien" },
  { rank: 8, username: "AxumiteTrader", xp: 4800, grade: "Explorateur" },
  { rank: 9, username: "Initiate099", xp: 2100, grade: "Explorateur" },
  { rank: 10, username: "NewGuardian", xp: 1500, grade: "Explorateur" },
];

export default function LeaderboardPage() {
    return (
        <main className="min-h-screen bg-black text-[#D4AF37] p-8 flex flex-col font-sans">
            <header className="flex justify-between items-center mb-12">
                <Link href="/" className="text-2xl font-black tracking-widest hover:text-white transition-colors font-serif">
                    BAYDOUVAN
                </Link>
                <nav className="flex flex-wrap gap-4 md:gap-6 text-sm font-bold tracking-wider uppercase font-serif">
                    <Link href="/map" className="hover:text-white transition-colors">Carte</Link>
                    <Link href="/missions" className="hover:text-white transition-colors">Missions</Link>
                    <Link href="/leaderboard" className="text-[#00A86B]">Classement</Link>
                    <Link href="/artifacts" className="hover:text-white transition-colors">Artefacts</Link>
                    <Link href="/profile" className="hover:text-white transition-colors">Profil</Link>
                </nav>
            </header>

            <div className="max-w-4xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center font-serif text-[#00A86B] drop-shadow-[0_0_15px_rgba(0,168,107,0.5)]">
                    Classement Mondial
                </h1>
                <p className="text-center text-white/60 mb-12 uppercase tracking-widest text-sm">Top 10 des Gardiens</p>

                <div className="space-y-4">
                    {MOCK_LEADERBOARD.map((player) => (
                        <div 
                            key={player.rank} 
                            className={`flex items-center justify-between p-6 border ${player.rank <= 3 ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/10 bg-black/50'} transition-all`}
                        >
                            <div className="flex items-center gap-6">
                                <span className={`text-3xl font-black font-serif ${player.rank <= 3 ? 'text-[#D4AF37]' : 'text-white/40'}`}>
                                    #{player.rank}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-wider">{player.username}</h3>
                                    <span className="text-xs uppercase tracking-widest text-[#00A86B]">{player.grade}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-mono font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{player.xp}</span>
                                <span className="text-sm font-bold tracking-widest text-[#D4AF37]/80 ml-2 uppercase">XP</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
