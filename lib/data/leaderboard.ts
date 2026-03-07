export interface LeaderboardPlayer {
  rank?: number; // Calculated dynamically often, but can be hardcoded for mock data
  username: string;
  xp: number;
  grade: string;
  isCurrentUser?: boolean;
}

export const MOCK_LEADERBOARD: LeaderboardPlayer[] = [
  { username: "Guardian_Africa", xp: 18500, grade: "Sage africain" },
  { username: "NileExplorer", xp: 14200, grade: "Sage africain" },
  { username: "MaliScholar", xp: 12100, grade: "Maître de Kemet" },
  { username: "KushiteKing", xp: 9500, grade: "Gardien de la mémoire" },
  { username: "ZuluWarrior", xp: 8400, grade: "Gardien de la mémoire" },
  { username: "BeninBronze", xp: 7200, grade: "Gardien de la mémoire" },
  { username: "SonghaiPrince", xp: 6100, grade: "Gardien de la mémoire" },
  { username: "AxumiteTrader", xp: 4800, grade: "Gardien de la mémoire" },
  { username: "Initiate099", xp: 2100, grade: "Gardien de la mémoire" },
  { username: "NewGuardian", xp: 1500, grade: "Initié" },
];
