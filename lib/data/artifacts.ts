export interface ArtifactItem {
  id: number;
  name: string;
  civilization: string;
  icon: string;
  rarity: "Commune" | "Rare" | "Épique" | "Légendaire" | "Mythique";
  requiredMissions: number[];
  description: string;
}

export const ARTIFACTS_DATA: ArtifactItem[] = [
  { 
    id: 1, 
    name: "Le Papyrus d'Imhotep", 
    civilization: "Kemet", 
    icon: "📜", 
    rarity: "Légendaire", 
    requiredMissions: [11, 15],
    description: "Les écrits originaux du premier architecte et médecin connu de l'histoire, contenant les plans secrets de la pyramide à degrés."
  },
  { 
    id: 2, 
    name: "Couronne de Kush", 
    civilization: "Nubie", 
    icon: "👑", 
    rarity: "Épique", 
    requiredMissions: [24, 28],
    description: "La parure royale arborant le double uraeus, symbole du pouvoir des pharaons noirs sur la Haute et Basse-Égypte."
  },
  { 
    id: 3, 
    name: "Or de Mansa Musa", 
    civilization: "Mali", 
    icon: "💰", 
    rarity: "Rare", 
    requiredMissions: [34, 40],
    description: "Une pièce d'or pur issue du pèlerinage légendaire de l'empereur, dont la richesse fit chuter le cours de l'or au Caire."
  },
  { 
    id: 4, 
    name: "Masque d'Ivoire de l'Oba", 
    civilization: "Bénin", 
    icon: "🎭", 
    rarity: "Épique", 
    requiredMissions: [53, 56],
    description: "Un chef-d'œuvre sculptural porté lors des cérémonies de purification, témoignage de la finesse des artisans Edo."
  },
  { 
    id: 5, 
    name: "Stèle d'Aksoum", 
    civilization: "Éthiopie", 
    icon: "🏛️", 
    rarity: "Légendaire", 
    requiredMissions: [62, 63],
    description: "Une réplique miniature des gigantesques obélisques funéraires marquant les tombes des souverains aksoumites."
  },
  { 
    id: 6, 
    name: "Oiseau de Zimbabwe", 
    civilization: "Zimbabwe", 
    icon: "🦅", 
    rarity: "Rare", 
    requiredMissions: [71, 75],
    description: "Une sculpture en stéatite représentant l'aigle bateleur, le symbole spirituel et national de la cité de pierre."
  },
];
