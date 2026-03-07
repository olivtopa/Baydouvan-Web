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
  10: {
    missionId: 10,
    country: "Égypte",
    coordinates: { lat: 26.8206, lng: 30.8025 },
    story: "Vous êtes arrivé sur les terres de Kemet, la terre noire, là où l'une des plus grandes civilisations de l'histoire a prospéré.",
    unlocksMissionId: 11
  },
  35: {
    missionId: 35,
    country: "Mali",
    coordinates: { lat: 16.7666, lng: -3.0026 },
    story: "Tombouctou, la ville aux 333 saints. Marchez dans les rues où les érudits discutaient de mathématiques, d'astronomie et de religion il y a des siècles.",
    unlocksMissionId: 36
  }
};
