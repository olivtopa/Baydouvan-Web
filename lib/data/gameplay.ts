export interface Mission {
  id: number;
  title: string;
  xp: number;
  type: "quiz" | "exploration" | "puzzle" | "memory" | "cracker";
}

export interface Chapter {
  id: number;
  title: string;
  region: string;
  missions: Mission[];
}

export const GAMEPLAY_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "L’appel de la mémoire",
    region: "Monde",
    missions: [
      { id: 1, title: "Découvrir l’artefact BAYDOUVAN", xp: 50, type: "exploration" },
      { id: 2, title: "Activer la machine mémorielle", xp: 50, type: "cracker" },
      { id: 3, title: "Identifier la carte des civilisations", xp: 50, type: "quiz" },
      { id: 4, title: "Trouver le premier manuscrit", xp: 50, type: "exploration" },
      { id: 5, title: "Mémoriser un symbole Adinkra", xp: 50, type: "memory" },
      { id: 6, title: "Localiser Kemet sur la carte", xp: 50, type: "quiz" },
      { id: 7, title: "Résoudre l’énigme du Nil", xp: 50, type: "puzzle" },
      { id: 8, title: "Décoder le portail temporel", xp: 50, type: "cracker" },
      { id: 9, title: "Associer les artefacts initiaux", xp: 50, type: "memory" },
      { id: 10, title: "Franchir l'épreuve de volonté", xp: 50, type: "puzzle" }
    ]
  },
  {
    id: 2,
    title: "Kemet : civilisation du Nil",
    region: "Kemet",
    missions: [
      { id: 11, title: "Rencontrer Imhotep", xp: 100, type: "exploration" },
      { id: 12, title: "Déchiffrer le plan de la pyramide", xp: 100, type: "cracker" },
      { id: 13, title: "Comprendre les hiéroglyphes", xp: 100, type: "quiz" },
      { id: 14, title: "Trouver le temple perdu", xp: 100, type: "exploration" },
      { id: 15, title: "Répondre au Sphinx", xp: 100, type: "puzzle" },
      { id: 16, title: "Décoder un symbole d’Anubis", xp: 100, type: "cracker" },
      { id: 17, title: "Reconstituer le papyrus d'Ani", xp: 100, type: "memory" },
      { id: 18, title: "Évaluer le règne d'Hatchepsout", xp: 100, type: "quiz" },
      { id: 19, title: "Mémoriser le panthéon divin", xp: 100, type: "memory" },
      { id: 20, title: "Résoudre le litige d'Osiris", xp: 100, type: "puzzle" }
    ]
  },
  {
    id: 3,
    title: "Nubie et Kush",
    region: "Nubie",
    missions: [
      { id: 21, title: "Traverser le désert nubien", xp: 100, type: "exploration" },
      { id: 22, title: "Localiser Méroé", xp: 100, type: "quiz" },
      { id: 23, title: "Découvrir les pyramides nubiennes", xp: 100, type: "exploration" },
      { id: 24, title: "Déchiffrer la pierre marchande", xp: 100, type: "cracker" },
      { id: 25, title: "Déchiffrer l’écriture méroïtique", xp: 100, type: "cracker" },
      { id: 26, title: "Mémoriser les signes de pouvoir", xp: 100, type: "memory" },
      { id: 27, title: "Résoudre le conflit des Kandakes", xp: 100, type: "puzzle" },
      { id: 28, title: "Identifier les arcs nubiens", xp: 100, type: "memory" },
      { id: 29, title: "Découvrir la reine Amanirenas", xp: 100, type: "quiz" },
      { id: 30, title: "Sauver les archives de Kush", xp: 100, type: "puzzle" }
    ]
  },
  {
    id: 4,
    title: "L’empire du Mali",
    region: "Mali",
    missions: [
      { id: 31, title: "Arriver à Niani", xp: 150, type: "exploration" },
      { id: 32, title: "Rencontrer Soundiata Keita", xp: 150, type: "quiz" },
      { id: 33, title: "Comprendre la charte du Manden", xp: 150, type: "cracker" },
      { id: 34, title: "Protéger l’or du royaume", xp: 150, type: "memory" },
      { id: 35, title: "Explorer Tombouctou", xp: 150, type: "exploration" },
      { id: 36, title: "Découvrir la constitution Mandingue", xp: 150, type: "puzzle" },
      { id: 37, title: "Déjouer un complot", xp: 150, type: "cracker" },
      { id: 38, title: "Mémoriser l'architecture de Djinguereber", xp: 150, type: "memory" },
      { id: 39, title: "Comprendre les routes commerciales", xp: 150, type: "quiz" },
      { id: 40, title: "Rencontrer Mansa Musa", xp: 150, type: "puzzle" }
    ]
  },
  {
    id: 5,
    title: "Songhaï",
    region: "Songhaï",
    missions: [
      { id: 41, title: "Explorer Gao", xp: 150, type: "exploration" },
      { id: 42, title: "Rencontrer Sonni Ali Ber", xp: 150, type: "quiz" },
      { id: 43, title: "Défendre Tombouctou", xp: 150, type: "puzzle" },
      { id: 44, title: "Découvrir la stratégie militaire", xp: 150, type: "quiz" },
      { id: 45, title: "Mémoriser les savants", xp: 150, type: "memory" },
      { id: 46, title: "Cartographier le Niger", xp: 150, type: "exploration" },
      { id: 47, title: "Déchiffrer une lettre royale", xp: 150, type: "cracker" },
      { id: 48, title: "Traduire un manuscrit perdu", xp: 150, type: "cracker" },
      { id: 49, title: "Restaurer une bibliothèque", xp: 150, type: "memory" },
      { id: 50, title: "Couronnement d’Askia Muhammed", xp: 150, type: "puzzle" }
    ]
  },
  {
    id: 6,
    title: "Royaume du Bénin",
    region: "Bénin",
    missions: [
      { id: 51, title: "Entrer dans Benin City", xp: 200, type: "exploration" },
      { id: 52, title: "Rencontrer l'Oba Ewuare", xp: 200, type: "quiz" },
      { id: 53, title: "Admirer les bronzes du Bénin", xp: 200, type: "memory" },
      { id: 54, title: "Comprendre la guilde des artisans", xp: 200, type: "quiz" },
      { id: 55, title: "Explorer les immenses murailles", xp: 200, type: "exploration" },
      { id: 56, title: "Déchiffrer une plaque de cour", xp: 200, type: "cracker" },
      { id: 57, title: "Résoudre l'énigme de l'Iyamoba", xp: 200, type: "puzzle" },
      { id: 58, title: "Mémoriser l'arbre généalogique", xp: 200, type: "memory" },
      { id: 59, title: "Protéger le sanctuaire", xp: 200, type: "puzzle" },
      { id: 60, title: "Traduire l'édit royal", xp: 200, type: "cracker" }
    ]
  },
  {
    id: 7,
    title: "Éthiopie / Aksoum",
    region: "Aksoum",
    missions: [
      { id: 61, title: "Découvrir Aksoum", xp: 200, type: "exploration" },
      { id: 62, title: "Explorer les stèles géantes", xp: 200, type: "exploration" },
      { id: 63, title: "Déchiffrer une inscription guèze", xp: 200, type: "cracker" },
      { id: 64, title: "Comprendre le commerce de la mer Rouge", xp: 200, type: "quiz" },
      { id: 65, title: "Trouver un manuscrit chrétien", xp: 200, type: "puzzle" },
      { id: 66, title: "Découvrir la reine de Saba", xp: 200, type: "quiz" },
      { id: 67, title: "Mémoriser les neufs saints", xp: 200, type: "memory" },
      { id: 68, title: "Protéger l'Arche d'Alliance", xp: 200, type: "cracker" },
      { id: 69, title: "Restaurer une église géométrique", xp: 200, type: "puzzle" },
      { id: 70, title: "Mémoriser l'architecture de Lalibela", xp: 200, type: "memory" }
    ]
  },
  {
    id: 8,
    title: "Great Zimbabwe",
    region: "Zimbabwe",
    missions: [
      { id: 71, title: "Explorer la Grande Enceinte", xp: 250, type: "exploration" },
      { id: 72, title: "Comprendre l’architecture shona", xp: 250, type: "quiz" },
      { id: 73, title: "Trouver un passage secret", xp: 250, type: "puzzle" },
      { id: 74, title: "Mémoriser les oiseaux de stéatite", xp: 250, type: "memory" },
      { id: 75, title: "Découvrir le commerce de l’or", xp: 250, type: "quiz" },
      { id: 76, title: "Explorer les routes vers Kilwa", xp: 250, type: "exploration" },
      { id: 77, title: "Déchiffrer un artefact Ming", xp: 250, type: "cracker" },
      { id: 78, title: "Protéger la vallée des rois", xp: 250, type: "puzzle" },
      { id: 79, title: "Décoder un symbole royal de Mutapa", xp: 250, type: "cracker" },
      { id: 80, title: "Restaurer le Mur de la Vallée", xp: 250, type: "memory" }
    ]
  },
  {
    id: 9,
    title: "Les héros africains",
    region: "Monde",
    missions: [
      { id: 81, title: "Rencontrer Shaka Zulu", xp: 300, type: "exploration" },
      { id: 82, title: "Rencontrer la reine Nzinga", xp: 300, type: "quiz" },
      { id: 83, title: "Comprendre la tactique de Samory Touré", xp: 300, type: "quiz" },
      { id: 84, title: "Déchiffrer le mot de passe Ashanti", xp: 300, type: "cracker" },
      { id: 85, title: "Mémoriser l'organisation de l'Impi", xp: 300, type: "memory" },
      { id: 86, title: "Reconstruire une ligne de front", xp: 300, type: "puzzle" },
      { id: 87, title: "Déjouer l'invasion coloniale", xp: 300, type: "cracker" },
      { id: 88, title: "Protéger la cité de Kumasi", xp: 300, type: "exploration" },
      { id: 89, title: "Identifier les héros oubliés", xp: 300, type: "memory" },
      { id: 90, title: "S'échapper des forces européennes", xp: 300, type: "puzzle" }
    ]
  },
  {
    id: 10,
    title: "Le secret BAYDOUVAN",
    region: "Monde",
    missions: [
      { id: 91, title: "Découvrir la citadelle BAYDOUVAN", xp: 500, type: "exploration" },
      { id: 92, title: "Trouver les fragments temporels", xp: 500, type: "puzzle" },
      { id: 93, title: "Réaligner les consciences", xp: 500, type: "memory" },
      { id: 94, title: "Déchiffrer le code source BAYDOUVAN", xp: 500, type: "cracker" },
      { id: 95, title: "Protéger les archives centrales", xp: 500, type: "puzzle" },
      { id: 96, title: "Prouver votre savoir académique", xp: 500, type: "quiz" },
      { id: 97, title: "Mémoriser l'ordre des Sages", xp: 500, type: "memory" },
      { id: 98, title: "Atteindre la singularité", xp: 500, type: "exploration" },
      { id: 99, title: "Briser le sceau final", xp: 500, type: "cracker" },
      { id: 100, title: "Passer l'ultime examen des fondateurs", xp: 1000, type: "quiz" }
    ]
  }
];

export const GRADES = [
  { name: "Initié", requiredXP: 0 },
  { name: "Gardien de la mémoire", requiredXP: 1000 },
  { name: "Sage africain", requiredXP: 5000 },
  { name: "Maître de Kemet", requiredXP: 10000 },
  { name: "Légende", requiredXP: 20000 }
];

export function getGradeFromXP(xp: number): string {
  let currentGrade = GRADES[0].name;
  for (const grade of GRADES) {
    if (xp >= grade.requiredXP) {
      currentGrade = grade.name;
    }
  }
  return currentGrade;
}
