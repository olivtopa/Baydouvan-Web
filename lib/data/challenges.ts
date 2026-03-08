export interface QuizQuestion {
  missionId: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Enigma {
  missionId: number;
  riddle: string[];
  hints: string[];
  acceptedAnswers: string[];
  successMessage: string;
}

export interface MapExplorationPoint {
  missionId: number;
  country: string;
  coordinates: { lat: number; lng: number };
  story: string;
  unlocksMissionId?: number;
}

export interface MemoryCard {
  id: string;
  content: string;
}

export interface MemoryGame {
  missionId: number;
  pairs: MemoryCard[];
  successMessage: string;
}

export interface CodeCracker {
  missionId: number;
  hiddenWord: string;
  clue: string;
  successMessage: string;
}

// Initial data for some missions as examples

export const quizzes: Record<number, QuizQuestion> = {
  3: {
    missionId: 3,
    question: "Où se trouve la région originelle de l'humanité selon les découvertes archéologiques majeures ?",
    options: ["Afrique du Nord", "Afrique de l'Est", "Afrique de l'Ouest", "Afrique australe"],
    correctAnswerIndex: 1,
    explanation: "L'Afrique de l'Est (notamment la vallée du grand rift) est souvent appelée le berceau de l'humanité en raison des nombreux fossiles d'hominidés qui y ont été découverts."
  },
  6: {
    missionId: 6,
    question: "Quel fleuve a permis le développement de la civilisation de Kemet ?",
    options: ["Le Niger", "Le Congo", "Le Nil", "Le Zambèze"],
    correctAnswerIndex: 2,
    explanation: "Le Nil, avec ses crues régulières, a apporté le limon fertile indispensable à l'agriculture de l'Égypte antique (Kemet)."
  },
  13: {
    missionId: 13,
    question: "Comment appelle-t-on le système d'écriture sacré inventé par les anciens Égyptiens ?",
    options: ["Cunéiforme", "Hiéroglyphes", "Méroïtique", "Ge'ez"],
    correctAnswerIndex: 1,
    explanation: "Les hiéroglyphes (du grec pour 'gravure sacrée') étaient utilisés en Égypte (Kemet) pour les textes religieux et monumentaux. Les Égyptiens eux-mêmes l'appelaient 'Medu Neter' (les paroles divines)."
  },
  82: {
    missionId: 82,
    question: "De quel royaume la reine Nzinga était-elle la souveraine au 17e siècle ?",
    options: ["Ndongo et Matamba", "Dahomey", "Ashanti", "Mali"],
    correctAnswerIndex: 0,
    explanation: "La reine Nzinga a dirigé les royaumes du Ndongo et du Matamba (dans l'actuel Angola) et a résisté farouchement à la colonisation portugaise."
  }
};

export const enigmas: Record<number, Enigma> = {
  2: {
    missionId: 2,
    riddle: [
      "Je suis un objet ancien, souvent caché ou oublié.",
      "Je détiens les souvenirs d'un temps passé.",
      "On me cherche pour comprendre l'histoire.",
      "Que suis-je ?"
    ],
    hints: [
      "Je suis souvent exposé dans un musée.",
      "Mon nom commence par 'A'."
    ],
    acceptedAnswers: ["artefact", "un artefact", "artefacts"],
    successMessage: "Excellent ! L'artefact est la clé de la mémoire."
  },
  5: {
    missionId: 5,
    riddle: [
      "Je suis un système de symboles originaire d'Afrique de l'Ouest.",
      "Je ne suis pas une écriture pour lire, mais pour se souvenir.",
      "Mon nom signifie 'au revoir' dans la langue des peuples Akan.",
      "Qui suis-je ?"
    ],
    hints: [
      "On me retrouve souvent imprimé sur des tissus traditionnels.",
      "Mon nom commence par 'A' et contient 7 lettres."
    ],
    acceptedAnswers: ["adinkra", "les adinkra"],
    successMessage: "Exact ! Les symboles Adinkra du Ghana et de la Côte d'Ivoire sont de puissants vecteurs de philosophie et d'histoire."
  },
  7: {
    missionId: 7,
    riddle: [
      "Je coule du sud vers le nord.",
      "Je suis la ligne de vie dans le sable ardent.",
      "Ma crue bleue nourrit la terre noire.",
      "Qui suis-je ?"
    ],
    hints: [
      "Je suis considéré comme le plus long fleuve du monde.",
      "Je traverse notamment l'Égypte et le Soudan."
    ],
    acceptedAnswers: ["nil", "le nil", "fleuve nil"],
    successMessage: "Parfait. Le Nil (Hâpy dans l'antiquité) est la colonne vertébrale de Kemet."
  },
  12: {
    missionId: 12,
    riddle: [
      "Ma base est carrée, mes faces touchent le ciel.",
      "Je fus érigée par des milliers de mains libres.",
      "Je suis le tombeau éternel d'un pharaon très célèbre à Gizeh.",
      "Comment s'appelle ce pharaon ?"
    ],
    hints: [
      "La plus grande des trois pyramides de Gizeh porte son nom.",
      "Il est aussi connu sous le nom grec de Khéops."
    ],
    acceptedAnswers: ["khoufou", "kheops", "khéops"],
    successMessage: "Bien joué ! La grande pyramide de Khoufou reste l'une des sept merveilles du monde antique."
  },
  15: {
    missionId: 15,
    riddle: [
      "Je pousse sur les rives du fleuve sacré.",
      "Je suis découpé, séché, pressé.",
      "Sur mon corps pâle, l'histoire noire s'imprime.",
      "Que suis-je ?"
    ],
    hints: [
      "Je suis l'ancêtre du papier.",
      "Mon nom ressemble au mot papier."
    ],
    acceptedAnswers: ["papyrus", "le papyrus", "un papyrus"],
    successMessage: "Exact ! Le papyrus était le principal support d'écriture du monde méditerranéen antique."
  },
  16: {
    missionId: 16,
    riddle: [
      "Je marche dans la nuit, entre la vie et la mort.",
      "J'accompagne les âmes et je pèse les cœurs.",
      "Ma tête est celle d'un chacal noir.",
      "Qui suis-je ?"
    ],
    hints: [
      "Je suis un dieu majeur de la mythologie égyptienne.",
      "Mon nom commence par 'A'."
    ],
    acceptedAnswers: ["anubis", "inepou", "inpou"],
    successMessage: "Bien trouvé. Anubis (Inpou en égyptien) est le dévoué protecteur des embaumeurs et des morts."
  },
  19: {
    missionId: 19,
    riddle: [
      "Je règne sur le monde d'en bas après avoir été trahi.",
      "Ma peau est parfois représentée rouge, parfois noire, parfois verte.",
      "Ma sœur et épouse Isis a rassemblé mes morceaux pour me ramener à la vie.",
      "Qui suis-je ?"
    ],
    hints: [
      "Je suis l'un des dieux les plus importants de Kemet.",
      "Mon nom commence par 'O'."
    ],
    acceptedAnswers: ["osiris", "ousir"],
    successMessage: "Parfait. Osiris est le symbole de la résurrection dans l'Égypte antique."
  },
  20: {
    missionId: 20,
    riddle: [
      "Je suis sculpté en pierre précieuse.",
      "On me pose sur le cœur du défunt pour empêcher qu'il ne témoigne contre lui.",
      "Ma forme réelle roule le soleil dans le ciel matinal.",
      "Comment m'appelle-t-on couramment ?"
    ],
    hints: [
      "Le dieu de l'aube, Khépri, me ressemble.",
      "Je suis un insecte coléoptère sacré."
    ],
    acceptedAnswers: ["scarabée", "scarabee", "un scarabée"],
    successMessage: "Bravo ! Le scarabée cœur était un artefact fondamental pour la protection des défunts dans la Maât."
  },
  43: {
    missionId: 43,
    riddle: [
      "Je suis une ville mythique d'Afrique de l'Ouest.",
      "J'ai abrité des milliers de manuscrits précieux.",
      "Mon université de Sankoré était célèbre dans tout le monde islamique.",
      "Qui suis-je ?"
    ],
    hints: [
      "Je commence par la lettre 'T'.",
      "Je suis située au Mali."
    ],
    acceptedAnswers: ["tombouctou", "timbuktu"],
    successMessage: "Bravo ! Tombouctou était un centre intellectuel majeur."
  }
};

export const mapPoints: Record<number, MapExplorationPoint> = {
  1: {
    missionId: 1,
    country: "Sénégal",
    coordinates: { lat: 14.7167, lng: -17.4677 },
    story: "Les serveurs centraux de l'Ordre BAYDOUVAN, localisés sous forme holographique. Ici commence votre initiation. Prêt à retrouver les mémoires perdues ?",
    unlocksMissionId: 2
  },
  4: {
    missionId: 4,
    country: "Soudan",
    coordinates: { lat: 18.0667, lng: 33.9167 },
    story: "Une archive antique a été repérée près de la Vallée des Reines de Méroé. Suivez cette première piste mémorielle pour trouver le Manuscrit.",
    unlocksMissionId: 5
  },
  8: {
    missionId: 8,
    country: "Tanzanie",
    coordinates: { lat: -2.9644, lng: 35.3400 },
    story: "Les gorges d'Olduvai en Afrique de l'Est. Ici les scientifiques ont trouvé les premières traces d'hominidés. Un portail temporel vous y attend.",
    unlocksMissionId: 9
  },
  9: {
    missionId: 9,
    country: "Kenya",
    coordinates: { lat: 0.0236, lng: 37.9062 },
    story: "En altitude sur les plaines de l'Est Africain de la Rift Valley. Choisissez votre première destination temporelle. L'histoire commence maintenant.",
    unlocksMissionId: 10
  },
  10: {
    missionId: 10,
    country: "Égypte",
    coordinates: { lat: 26.8206, lng: 30.8025 },
    story: "Vous êtes arrivé sur les terres de Kemet, la terre noire, là où l'une des plus grandes civilisations de l'histoire a prospéré.",
    unlocksMissionId: 11
  },
  11: {
    missionId: 11,
    country: "Égypte",
    coordinates: { lat: 29.8710, lng: 31.2163 },
    story: "Vous marchez sur la nécropole de Saqqarah. Un génie multidisciplinaire nommé Imhotep vient d'achever la première pyramide à degrés du monde.",
    unlocksMissionId: 12
  },
  14: {
    missionId: 14,
    country: "Égypte",
    coordinates: { lat: 25.7188, lng: 32.6573 },
    story: "Karnak. Le plus vaste complexe religieux de l'Antiquité. Ses immenses colonnes de pierres recélent encore de grands mystères astronomiques.",
    unlocksMissionId: 15
  },
  17: {
    missionId: 17,
    country: "Égypte",
    coordinates: { lat: 31.2001, lng: 29.9187 },
    story: "Alexandrie, perle de la Méditerranée. Les plus précieux parchemins de toute l'Afrique et du monde connu sont stockés dans sa Grande Bibliothèque.",
    unlocksMissionId: 18
  },
  18: {
    missionId: 18,
    country: "Égypte",
    coordinates: { lat: 25.7483, lng: 32.6022 },
    story: "La Vallée des Rois. Le soleil cuit le calcaire environnant. Sous vos pieds dorment des dizaines de pharaons du Nouvel Empire, avec leurs savoirs inestimables.",
    unlocksMissionId: 19
  },
  35: {
    missionId: 35,
    country: "Mali",
    coordinates: { lat: 16.7666, lng: -3.0026 },
    story: "Tombouctou, la ville aux 333 saints. Marchez dans les rues où les érudits discutaient de mathématiques, d'astronomie et de religion il y a des siècles.",
    unlocksMissionId: 36
  }
};

export const memoryGames: Record<number, MemoryGame> = {
  19: {
    missionId: 19,
    pairs: [
      { id: "osiris", content: "Osiris (Ousir)" },
      { id: "isis", content: "Isis (Aset)" },
      { id: "horus", content: "Horus (Heru)" },
      { id: "anubis", content: "Anubis (Inpou)" },
      { id: "thoth", content: "Thot (Djehouty)" },
      { id: "maat", content: "Maât" }
    ],
    successMessage: "Les mémoires divines ont été reformées. Vous avez recréé l'harmonie (Maât)."
  }
};

export const codeCrackers: Record<number, CodeCracker> = {
  16: {
    missionId: 16,
    hiddenWord: "INPOU",
    clue: "Nom africain originel du guide à tête de canidé (5 lettres).",
    successMessage: "Le sceau est brisé ! Inpou vous accorde son passage."
  }
};
