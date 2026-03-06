export interface Mission {
  id: number;
  title: string;
  xp: number;
  type: "quiz" | "exploration" | "puzzle";
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
      { id: 2, title: "Activer la machine mémorielle", xp: 50, type: "puzzle" },
      { id: 3, title: "Identifier la carte des civilisations", xp: 50, type: "quiz" },
      { id: 4, title: "Trouver le premier manuscrit", xp: 50, type: "exploration" },
      { id: 5, title: "Décoder un symbole Adinkra", xp: 50, type: "puzzle" },
      { id: 6, title: "Localiser Kemet sur la carte", xp: 50, type: "quiz" },
      { id: 7, title: "Résoudre l’énigme du Nil", xp: 50, type: "puzzle" },
      { id: 8, title: "Déverrouiller le portail temporel", xp: 50, type: "exploration" },
      { id: 9, title: "Choisir sa première mission", xp: 50, type: "exploration" },
      { id: 10, title: "Entrer dans Kemet", xp: 50, type: "exploration" }
    ]
  },
  {
    id: 2,
    title: "Kemet : civilisation du Nil",
    region: "Kemet",
    missions: [
      { id: 11, title: "Rencontrer Imhotep", xp: 100, type: "exploration" },
      { id: 12, title: "Construire la pyramide virtuelle", xp: 100, type: "puzzle" },
      { id: 13, title: "Comprendre les hiéroglyphes", xp: 100, type: "quiz" },
      { id: 14, title: "Trouver le temple perdu", xp: 100, type: "exploration" },
      { id: 15, title: "Protéger un papyrus ancien", xp: 100, type: "puzzle" },
      { id: 16, title: "Décoder un symbole d’Anubis", xp: 100, type: "puzzle" },
      { id: 17, title: "Explorer la bibliothèque d’Alexandrie", xp: 100, type: "exploration" },
      { id: 18, title: "Trouver la tombe secrète", xp: 100, type: "exploration" },
      { id: 19, title: "Résoudre le puzzle des dieux", xp: 100, type: "puzzle" },
      { id: 20, title: "Restaurer un artefact sacré", xp: 100, type: "puzzle" }
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
      { id: 24, title: "Protéger un commerce d’or", xp: 100, type: "puzzle" },
      { id: 25, title: "Déchiffrer l’écriture méroïtique", xp: 100, type: "puzzle" },
      { id: 26, title: "Explorer un temple de Kush", xp: 100, type: "exploration" },
      { id: 27, title: "Affronter des pillards", xp: 100, type: "puzzle" },
      { id: 28, title: "Trouver une relique royale", xp: 100, type: "exploration" },
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
      { id: 33, title: "Organiser une caravane", xp: 150, type: "puzzle" },
      { id: 34, title: "Protéger l’or du royaume", xp: 150, type: "puzzle" },
      { id: 35, title: "Explorer Tombouctou", xp: 150, type: "exploration" },
      { id: 36, title: "Sauver un manuscrit", xp: 150, type: "exploration" },
      { id: 37, title: "Déjouer un complot", xp: 150, type: "puzzle" },
      { id: 38, title: "Explorer la mosquée Djinguereber", xp: 150, type: "exploration" },
      { id: 39, title: "Comprendre les routes commerciales", xp: 150, type: "quiz" },
      { id: 40, title: "Rencontrer Mansa Musa", xp: 150, type: "exploration" }
    ]
  },
  {
    id: 5,
    title: "Songhaï",
    region: "Songhaï",
    missions: [
      { id: 41, title: "Explorer Gao", xp: 150, type: "exploration" },
      { id: 42, title: "Rencontrer Sonni Ali", xp: 150, type: "quiz" },
      { id: 43, title: "Défendre Tombouctou", xp: 150, type: "puzzle" },
      { id: 44, title: "Découvrir la stratégie militaire", xp: 150, type: "quiz" },
      { id: 45, title: "Protéger un érudit", xp: 150, type: "exploration" },
      { id: 46, title: "Cartographier le Niger", xp: 150, type: "puzzle" },
      { id: 47, title: "Déjouer l’invasion", xp: 150, type: "puzzle" },
      { id: 48, title: "Trouver un manuscrit perdu", xp: 150, type: "exploration" },
      { id: 49, title: "Restaurer une bibliothèque", xp: 150, type: "puzzle" },
      { id: 50, title: "Couronnement d’Askia", xp: 150, type: "exploration" }
    ]
  },
  {
    id: 6,
    title: "Royaume du Bénin",
    region: "Bénin",
    missions: [
      { id: 51, title: "Entrer dans Benin City", xp: 200, type: "exploration" },
      { id: 52, title: "Rencontrer l’Oba", xp: 200, type: "quiz" },
      { id: 53, title: "Découvrir les bronzes du Bénin", xp: 200, type: "exploration" },
      { id: 54, title: "Sauver un atelier d’art", xp: 200, type: "puzzle" },
      { id: 55, title: "Explorer les murailles", xp: 200, type: "exploration" },
      { id: 56, title: "Trouver un masque royal", xp: 200, type: "exploration" },
      { id: 57, title: "Déjouer une trahison", xp: 200, type: "puzzle" },
      { id: 58, title: "Protéger un rituel", xp: 200, type: "puzzle" },
      { id: 59, title: "Restaurer un artefact", xp: 200, type: "puzzle" },
      { id: 60, title: "Défendre la capitale", xp: 200, type: "puzzle" }
    ]
  },
  {
    id: 7,
    title: "Éthiopie / Aksoum",
    region: "Aksoum",
    missions: [
      { id: 61, title: "Découvrir Aksoum", xp: 200, type: "exploration" },
      { id: 62, title: "Explorer les stèles géantes", xp: 200, type: "exploration" },
      { id: 63, title: "Déchiffrer une inscription", xp: 200, type: "puzzle" },
      { id: 64, title: "Explorer le commerce de la mer Rouge", xp: 200, type: "quiz" },
      { id: 65, title: "Trouver un manuscrit chrétien", xp: 200, type: "exploration" },
      { id: 66, title: "Découvrir la reine de Saba", xp: 200, type: "quiz" },
      { id: 67, title: "Explorer Lalibela", xp: 200, type: "exploration" },
      { id: 68, title: "Protéger une relique", xp: 200, type: "puzzle" },
      { id: 69, title: "Restaurer une église", xp: 200, type: "puzzle" },
      { id: 70, title: "Sauver un trésor ancien", xp: 200, type: "exploration" }
    ]
  },
  {
    id: 8,
    title: "Great Zimbabwe",
    region: "Zimbabwe",
    missions: [
      { id: 71, title: "Explorer la cité de pierre", xp: 250, type: "exploration" },
      { id: 72, title: "Comprendre l’architecture", xp: 250, type: "quiz" },
      { id: 73, title: "Trouver un passage secret", xp: 250, type: "puzzle" },
      { id: 74, title: "Restaurer une tour conique", xp: 250, type: "puzzle" },
      { id: 75, title: "Découvrir le commerce de l’or", xp: 250, type: "quiz" },
      { id: 76, title: "Explorer les routes maritimes", xp: 250, type: "exploration" },
      { id: 77, title: "Trouver un artefact chinois", xp: 250, type: "exploration" },
      { id: 78, title: "Protéger la cité", xp: 250, type: "puzzle" },
      { id: 79, title: "Décoder un symbole royal", xp: 250, type: "puzzle" },
      { id: 80, title: "Sauver la civilisation", xp: 250, type: "puzzle" }
    ]
  },
  {
    id: 9,
    title: "Les héros africains",
    region: "Monde",
    missions: [
      { id: 81, title: "Rencontrer Shaka Zulu", xp: 300, type: "exploration" },
      { id: 82, title: "Rencontrer la reine Nzinga", xp: 300, type: "quiz" },
      { id: 83, title: "Rencontrer Samory Touré", xp: 300, type: "quiz" },
      { id: 84, title: "Rencontrer Yaa Asantewaa", xp: 300, type: "quiz" },
      { id: 85, title: "Défendre un royaume", xp: 300, type: "puzzle" },
      { id: 86, title: "Reconstruire une armée", xp: 300, type: "puzzle" },
      { id: 87, title: "Déjouer une invasion", xp: 300, type: "puzzle" },
      { id: 88, title: "Protéger une cité", xp: 300, type: "exploration" },
      { id: 89, title: "Restaurer une tradition", xp: 300, type: "puzzle" },
      { id: 90, title: "Devenir gardien", xp: 300, type: "exploration" }
    ]
  },
  {
    id: 10,
    title: "Le secret BAYDOUVAN",
    region: "Monde",
    missions: [
      { id: 91, title: "Découvrir la société secrète", xp: 500, type: "exploration" },
      { id: 92, title: "Trouver les fragments historiques", xp: 500, type: "puzzle" },
      { id: 93, title: "Restaurer la mémoire africaine", xp: 500, type: "puzzle" },
      { id: 94, title: "Déjouer l’organisation ennemie", xp: 500, type: "puzzle" },
      { id: 95, title: "Protéger les archives", xp: 500, type: "puzzle" },
      { id: 96, title: "Décoder la vérité historique", xp: 500, type: "quiz" },
      { id: 97, title: "Restaurer les civilisations", xp: 500, type: "puzzle" },
      { id: 98, title: "Devenir Sage", xp: 500, type: "exploration" },
      { id: 99, title: "Déverrouiller le temple final", xp: 500, type: "puzzle" },
      { id: 100, title: "Devenir Maître BAYDOUVAN", xp: 1000, type: "exploration" }
    ]
  }
];

export const GRADES = [
  { name: "Initié", requiredXP: 0 },
  { name: "Explorateur", requiredXP: 1000 },
  { name: "Gardien", requiredXP: 5000 },
  { name: "Sage", requiredXP: 10000 },
  { name: "Maître", requiredXP: 20000 }
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
