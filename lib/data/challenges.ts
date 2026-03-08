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
  18: {
    missionId: 18,
    question: "Quelle femme pharaon a régné pendant près de 22 ans sous la XVIIIe dynastie, se faisant souvent représenter avec les attributs masculins du pouvoir ?",
    options: ["Cléopâtre", "Hatchepsout", "Néfertiti", "Mérytneith"],
    correctAnswerIndex: 1,
    explanation: "Hatchepsout fut l'une des rares femmes pharaons. Sous son règne pacifique, l'Égypte a connu une grande prospérité architecturale et commerciale, notamment avec l'expédition au pays de Pount."
  },
  22: {
    missionId: 22,
    question: "Face à quelle puissance continentale la Nubie est-elle restée l'une des rares régions à maintenir farouchement son indépendance et à imposer des traités de paix ?",
    options: ["L'Empire romain", "L'Empire ottoman", "La Grèce de Macédoine", "L'Empire perse"],
    correctAnswerIndex: 0,
    explanation: "Les reines nubiennes (les Kandakes) ont vaillamment repoussé les légions d'Auguste, forçant l'Empire romain à signer un traité de paix et d'indépendance."
  },
  29: {
    missionId: 29,
    question: "Laquelle de ces reines (Kandakes) est célèbre pour avoir mené son armée contre les légions romaines en n'ayant qu'un œil ?",
    options: ["Nzinga", "Amanishakheto", "Amanirenas", "Nandi"],
    correctAnswerIndex: 2,
    explanation: "Amanirenas était la guerrière légendaire (aveugle d'un œil suite à une bataille) qui a défendu victorieusement le royaume de Kush contre l'Empire romain en l'an 24 av. J.-C."
  },
  82: {
    missionId: 82,
    question: "De quel royaume la reine Nzinga était-elle la souveraine au 17e siècle ?",
    options: ["Ndongo et Matamba", "Dahomey", "Ashanti", "Mali"],
    correctAnswerIndex: 0,
    explanation: "La reine Nzinga a dirigé les royaumes du Ndongo et du Matamba (dans l'actuel Angola) et a résisté farouchement à la colonisation portugaise."
  },
  32: {
    missionId: 32,
    question: "Comment surnomme-t-on le grand empire guerrier fondé par Soundiata Keita au 13ème siècle ?",
    options: ["L'Empire du Ghana", "L'Empire Songhaï", "L'Empire du Mali", "L'Empire Monomotapa"],
    correctAnswerIndex: 2,
    explanation: "Soundiata Keita est le père fondateur de l'Empire du Mali (Empire Mandingue), unifiant plusieurs royaumes après la grande victoire de Kirina."
  },
  39: {
    missionId: 39,
    question: "Sur quel animal s'appuyaient principalement les grandes caravanes transsahariennes reliant l'Afrique de l'Ouest au reste du monde islamique ?",
    options: ["Le Cheval", "Le Chameau", "L'Éléphant", "L'Âne"],
    correctAnswerIndex: 1,
    explanation: "Le chameau (et plus spécifiquement le dromadaire), surnommé le 'vaisseau du désert', a permis le développement florissant du commerce transsaharien (or, sel, manuscrits)."
  },
  42: {
    missionId: 42,
    question: "Ce souverain impitoyable et stratège de génie a mené l'Empire Songhaï à son apogée militaire avant sa noyade mystérieuse. Qui est-il ?",
    options: ["Askia Muhammed", "Sonni Ali Ber", "Mansa Musa", "Soundiata Keita"],
    correctAnswerIndex: 1,
    explanation: "Sonni Ali Ber, ou Ali le Grand, fut un conquérant redoutable dont les campagnes militaires terrestres et fluviales (sur le fleuve Niger) ont étendu l'Empire Songhaï."
  },
  44: {
    missionId: 44,
    question: "L'armée Songhaï était redoutable grâce à sa flotte navale qui contrôlait quel grand fleuve ouest-africain ?",
    options: ["Le Nil", "Le Congo", "Le Niger", "Le Sénégal"],
    correctAnswerIndex: 2,
    explanation: "Le contrôle du fleuve Niger avec une véritable marine de guerre fut l'un des piliers majeurs de la puissance militaire et commerciale de l'Empire Songhaï."
  },
  52: {
    missionId: 52,
    question: "Comment s'appelle le dirigeant du Royaume du Bénin, considéré comme une autorité politique et semi-divine ?",
    options: ["Le Mansa", "Le Pharaon", "L'Oba", "Le Mwene"],
    correctAnswerIndex: 2,
    explanation: "Le titre de souverain de l'Empire (ou Royaume) du Bénin transparaît à travers le titre d'Oba. Son palais royal à Benin City était légendaire."
  },
  54: {
    missionId: 54,
    question: "La guilde artisanale de Benin City était mondialement célèbre et ses meilleures productions étaient exclusivement réservées à l'Oba. Quel était son matériau phare ?",
    options: ["Le Bronze (et Laiton)", "Le Fer", "L'Argile cuite", "L'Ébène"],
    correctAnswerIndex: 0,
    explanation: "Les célèbres 'Bronzes du Bénin' (en grande partie constitués de laiton par la technique de la cire perdue) décoraient les piliers de bois de la cour d'Igun Eronmwon."
  },
  64: {
    missionId: 64,
    question: "Aksoum (l'actuelle Éthiopie) fut l'un des quatre plus puissants empires de son époque, contrôlant les routes maritimes de quelle mer stratégique ?",
    options: ["La Mer Méditerranée", "La Mer Noire", "La Mer Rouge", "La Mer Baltique"],
    correctAnswerIndex: 2,
    explanation: "Aksoum dominait le commerce sur la Mer Rouge et l'Océan Indien, frappant sa propre monnaie et constituant un pont entre l'Afrique, l'Arabie et l'Inde."
  },
  66: {
    missionId: 66,
    question: "Le grand texte épique éthiopien du Kebra Nagast ('La Gloire des Rois') trace l'ascendance de la dynastie salomonide jusqu'à quelle fameuse reine ?",
    options: ["La Reine de Saba", "Cléopâtre", "Amanirenas", "La Reine Amina"],
    correctAnswerIndex: 0,
    explanation: "Selon le Kebra Nagast, la reine de Saba (Makéda) a rendu visite au roi Salomon, et leur fils Ménélik Ier serait le fondateur de la dynastie salomonide."
  },
  72: {
    missionId: 72,
    question: "Le site archéologique du Grand Zimbabwe est mondialement célèbre pour avoir été construit sans un élément architectural précis. Lequel ?",
    options: ["Briques d'argile", "Toit en chaume", "Mortier", "Fer d'armature"],
    correctAnswerIndex: 2,
    explanation: "Le Grand Zimbabwe est un monument de pierre sèche impressionnant ; les murs massifs en blocs de granit ont été ajustés avec une telle précision qu'aucun mortier n'est nécessaire."
  },
  75: {
    missionId: 75,
    question: "Quelle ressource naturelle le royaume de Mutapa (successeur du Grand Zimbabwe) exportait-il massivement vers la côte swahili par le port de Kilwa ?",
    options: ["L'Ivoiri", "L'Or", "Les Épices", "Le Fer"],
    correctAnswerIndex: 1,
    explanation: "Le plateau zimbabwéen était extrêmement riche en or. Il était extrait puis transporté vers les cités-États de la côte est-africaine pour entrer dans le commerce de l'Océan Indien."
  },
  83: {
    missionId: 83,
    question: "L'Almamy Samory Touré, grand résistant à la pénétration coloniale française en Afrique de l'Ouest, était célèbre pour sa stratégie militaire. Comment se nommait-elle ?",
    options: ["Guerre de positions", "Terre brûlée", "Guerre asymétrique maritime", "Charge de la cavalerie lourde"],
    correctAnswerIndex: 1,
    explanation: "Samory Touré (le 'Napoléon des savanes') a brillamment utilisé la tactique de la terre brûlée, détruisant ressources civiles et militaires pour affamer les troupes françaises lancées à sa poursuite."
  },
  96: {
    missionId: 96,
    question: "Quel savant, historien et physicien sénégalais multidisciplinaire a mis en lumière l'origine africaine de la civilisation pharaonique dans les années 1950 ?",
    options: ["Léopold Sédar Senghor", "Thomas Sankara", "Cheikh Anta Diop", "Aimé Césaire"],
    correctAnswerIndex: 2,
    explanation: "Cheikh Anta Diop (dont l'œuvre majeure est 'Nations nègres et culture') a révolutionné l'historiographie mondiale par ses démonstrations scientifiques sur l'Égypte antique."
  },
  100: {
    missionId: 100,
    question: "Le terme 'BAYDOUVAN' fait référence dans l'histoire de ce projet aux gardiens originels du...",
    options: ["Continent", "Savoir Universel", "Fleuve", "Ciel"],
    correctAnswerIndex: 1,
    explanation: "Baydouvan est l'Ordre des Gardiens du Savoir Universel et du Temps Africain. Vous êtes désormais l'un d'eux !"
  }
};

export const enigmas: Record<number, Enigma> = {
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
  36: {
    missionId: 36,
    riddle: [
      "Je suis la première déclacration orale des droits humains, jurée à Kouroukan Fouga.",
      "Je condamne l'esclavage et la haine.",
      "Je suis le serment des septs royaumes libres.",
      "Qui suis-je ?"
    ],
    hints: [
      "C'est la charte fondatrice de l'Empire Mandingue.",
      "Cela commence par 'Charte du'."
    ],
    acceptedAnswers: ["charte du manden", "le manden", "manden"],
    successMessage: "La Constitution Mandingue est l'une des plus vieilles déclarations solennelles des droits de l'homme au monde (1236)."
  },
  40: {
    missionId: 40,
    riddle: [
      "J'ai entrepris le plus grand pèlerinage de tous les temps.",
      "Là où je passais, la valeur de l'or s'effondrait pendant des années tant j'en distribuais.",
      "Qui suis-je ?"
    ],
    hints: [
      "Je fus le Mansa (Empereur) du Mali le plus riche de l'histoire.",
      "L'empereur Kankan..."
    ],
    acceptedAnswers: ["mansa musa", "kankan moussa", "moussa", "musa"],
    successMessage: "Mansa Musa ! Son voyage légendaire de 1324 plaça le Mali sur toutes les cartes catalanes du monde."
  },
  43: {
    missionId: 43,
    riddle: [
      "Je suis la perle du savoir posée sur les sables du Mali.",
      "On achète mes manuscrits au prix de l'or.",
      "Pourtant, je pleure la prise sanglante de Sonni Ali.",
      "Quelle ville suis-je ?"
    ],
    hints: [
      "C'est la ville de l'université de Sankoré.",
      "Je commence par la lettre 'T'."
    ],
    acceptedAnswers: ["tombouctou", "timbuktu", "tombouctu"],
    successMessage: "Tombouctou ! Maintement centre d'excellence capturé par Sonni Ali Ber."
  },
  50: {
    missionId: 50,
    riddle: [
      "Général, j'ai renversé le fils du Grand Roi.",
      "J'ai pris le titre que me donnèrent mes filles en s'écriant de surprise : 'A si kya !' (Il ne sera pas).",
      "Sous mon règne, l'empire Songhaï touchera son apogée religieux et politique.",
      "Qui suis-je ?"
    ],
    hints: [
      "C'est l'empereur (Mamadou Touré) qui a pris ce titre.",
      "La dynastie des..."
    ],
    acceptedAnswers: ["askia", "askia mohamed", "askia muhammed", "askia le grand"],
    successMessage: "Absolument. Askia Muhammed, le bâtisseur du califat de l'administration Songhaï."
  },
  57: {
    missionId: 57,
    riddle: [
      "Je suis la Reine Mère bienveillante mais puissante de l'Empire de Benin.",
      "J'ai levé une armée seule pour secourir mon fils roi en plein conflit.",
      "Mon autel me représente souvent sous la forme de plaques de bronze.",
      "Quel est mon nom ?"
    ],
    hints: [
      "Mon nom de reine-mère (Iyoba) était Idia.",
      "Reine..."
    ],
    acceptedAnswers: ["idia", "la reine idia", "reine idia", "iyoba idia"],
    successMessage: "La Reine-mère (Iyoba) Idia est en effet le visage iconique des fameux masques funéraires du FESTAC."
  },
  59: {
    missionId: 59,
    riddle: [
      "Caché au cœur de la jungle, je suis un édifice géométrique et rituel.",
      "On m'arrose d'huile de palme et de laiton.",
      "Mes têtes de trophées encadrent la porte des panthères.",
      "Je suis le cœur mystique du Palais de l'Oba. Que suis-je ?"
    ],
    hints: [
      "C'est l'autel de la royauté.",
      "Un mot qui commence par 'A' et finit par 'l', appartenant aux ancêtres."
    ],
    acceptedAnswers: ["autel ancestral", "autel", "le sanctuaire", "autel de l'oba"],
    successMessage: "Le grand autel de l'Oba de Benin City fut longtemps le centre spirituel du monde Edo."
  },
  65: {
    missionId: 65,
    riddle: [
      "Je suis l'un des premiers royaumes chrétiens à émerger dès le quatrième siècle.",
      "Mes fameuses stèles géantes, taillées dans un seul bloc de pierre de plusieurs centaines de tonnes, pointent encore vers les cieux.",
      "Qui suis-je ?"
    ],
    hints: [
      "Royaume de l'Est africain.",
      "Je commence par la lettre 'A'."
    ],
    acceptedAnswers: ["aksoum", "aksum"],
    successMessage: "Obélisque rétabli. Le royaume d'Aksoum était la fierté architecturale et navale de l'antiquité éthiopienne."
  },
  69: {
    missionId: 69,
    riddle: [
      "Je ne suis pas bâtie en briques ou montée brique par brique.",
      "J'ai été sculptée du haut vers le bas, creusée à même la roche volcanique rougeoyante.",
      "Je porte la forme d'une croix géante de St-Georges (Bete Giyorgis).",
      "Quel roi mythique m'a rêvée à Jérusalem pour m'ancrer en Éthiopie ?"
    ],
    hints: [
      "Le site porte le même nom que le roi.",
      "Roi Lali..."
    ],
    acceptedAnswers: ["lalibela", "roi lalibela", "gebere mesqel lalibela"],
    successMessage: "La Nouvelle Jérusalem d'Afrique a été sanctifiée !"
  },
  73: {
    missionId: 73,
    riddle: [
      "Construit au centre d'une vallée verdoyante par les ancêtres du peuple Shona.",
      "Mes murs de pierre incurvés et majestueux en font l'un des plus grands de l'Afrique subsaharienne.",
      "Je suis le centre nerveux de l'empire de MaShona.",
      "Quel est mon nom composé ?"
    ],
    hints: [
      "Nom du pays actuel qui signifie 'Maison de pierre'.",
      "Great..."
    ],
    acceptedAnswers: ["great zimbabwe", "grand zimbabwe", "mutapa"],
    successMessage: "Pierre par pierre sans mortier, le Grand Zimbabwe dévoile son architecture."
  },
  78: {
    missionId: 78,
    riddle: [
      "Je suis la tour conique, symbole abstrait de pouvoir ou réserve de céréales.",
      "Les archéologues, longtemps bornés, ont soutenu que je ne pouvais avoir été achevée par un peuple africain.",
      "Pourtant, la précision locale de mes murs est irréfutable.",
      "De quelle bâtisse majeure fais-je partie ?"
    ],
    hints: [
      "L'enceinte la plus imposante du Grand Zimbabwe.",
      "La Grande ..."
    ],
    acceptedAnswers: ["grande enceinte", "great enclosure"],
    successMessage: "Bien vu ! La Grande Enceinte avec ses motifs en chevron atteste du génie structural Shona."
  },
  86: {
    missionId: 86,
    riddle: [
      "Révolutionnaire tactique venue des plaines d'Afrique du Sud.",
      "Le chef m'a forgée pour remplacer l'ancienne pique (assegai).",
      "Je suis courte et sert au poignardage fatal au corps à corps.",
      "Une arme légendaire nommée ?"
    ],
    hints: [
      "Invention de Shaka Zulu.",
      "Le bruit qu'elle ferait lors du retrait du corps de l'ennemi (Ikl..)."
    ],
    acceptedAnswers: ["iklwa", "assegai iklwa"],
    successMessage: "L'iklwa s'ancre dans le lore; la nouvelle ligne de front de l'Empire Zoulou (tactique des cornes du buffle) prend vie."
  },
  90: {
    missionId: 90,
    riddle: [
      "Symbole absolu de l'âme et du pouvoir de la nation Ashanti.",
      "Si cet artefact venait à toucher le sol, tout s'effondrerait.",
      "Les britanniques déclenchèrent une guerre (menée par Yaa Asantewaa) pour le confisquer et s'y asseoir.",
      "Que suis-je ?"
    ],
    hints: [
      "Une pièce de mobilier royal en or.",
      "Le Tabouret d'..."
    ],
    acceptedAnswers: ["tabouret d'or", "le tabouret d'or", "sika dwa kofi"],
    successMessage: "Sika Dwa Kofi est sécurisé. Vous venez de libérer l'esprit de l'empire Ashanti."
  },
  92: {
    missionId: 92,
    riddle: [
      "Nous sommes les Gardiens, nous voyageons hors du temps.",
      "Le chemin est obscur mais la volonté est inébranlable.",
      "Dîtes le mot de passe final qui résume l'histoire reconstruite : la 'Vérité' africaine.",
      "Quel mot est la somme de notre quête ?"
    ],
    hints: [
      "Le nom même de cette expérience.",
      "BAY..."
    ],
    acceptedAnswers: ["baydouvan", "le baydouvan", "projet baydouvan"],
    successMessage: "Identification biométrique positive !"
  },
  95: {
    missionId: 95,
    riddle: [
      "Mieux vaut un homme qui a la patience d'écrire l'histoire, qu'un million d'hommes qui passent leur temps à la relire.",
      "Par ce code, les falsifications tombent.",
      "Un dernier effort intellectuel. Quelle couleur caractérisait la terre de Kemet selon l'étymologie de ses fondateurs (Khémi) ?"
    ],
    hints: [
      "Terre (Mélano...)",
      "L'opposé du blanc."
    ],
    acceptedAnswers: ["noire", "noir"],
    successMessage: "Kemet, la Terre Noire. Le noyau central de vérité est sauvegardé de la falsification historique."
  }
};

export const mapPoints: Record<number, MapExplorationPoint> = {
  1: {
    missionId: 1,
    country: "Sénégal",
    coordinates: { lat: 14.7167, lng: -17.4677 },
    story: "Les serveurs centraux de l'Ordre BAYDOUVAN, localisés sous forme holographique au niveau du monument de la Renaissance Africaine. Ici commence votre initiation.",
    unlocksMissionId: 2
  },
  4: {
    missionId: 4,
    country: "Madagascar",
    coordinates: { lat: -18.8792, lng: 47.5079 },
    story: "Une archive antique a été repérée près des ruines du Rova d'Antananarivo. Suivez cette première piste mémorielle pour trouver le Manuscrit de l'Île Rouge.",
    unlocksMissionId: 5
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
  21: {
    missionId: 21,
    country: "Soudan",
    coordinates: { lat: 21.9167, lng: 31.6333 },
    story: "Vous traversez l'implacable désert de Nubie, guidé par les pistes ancestrales caravanières. La chaleur est intense, mais l'objectif est proche.",
    unlocksMissionId: 22
  },
  23: {
    missionId: 23,
    country: "Soudan",
    coordinates: { lat: 16.9380, lng: 33.7489 },
    story: "Méroé. Plus de deux cents pyramides à forte pente se dressent devant vous. Contrairement à Gizeh, ce sont ici des souveraines qui dorment pour l'éternité.",
    unlocksMissionId: 24
  },
  31: {
    missionId: 31,
    country: "Guinée / Mali",
    coordinates: { lat: 11.5317, lng: -9.1866 },
    story: "Les collines du Mandé se dressent. Vous arrivez aux portes de Niani, la légendaire capitale de l'Empire du Mali (aujourd'hui disparue sous les sols guinéens).",
    unlocksMissionId: 32
  },
  35: {
    missionId: 35,
    country: "Mali",
    coordinates: { lat: 16.7666, lng: -3.0026 },
    story: "Tombouctou, la ville aux 333 saints. Marchez dans les rues où les érudits discutaient de mathématiques, d'astronomie et de religion aux côtés de leurs universités (Sankoré, Sidi Yahya).",
    unlocksMissionId: 36
  },
  41: {
    missionId: 41,
    country: "Mali",
    coordinates: { lat: 16.2717, lng: -0.0447 },
    story: "Vous débarquez au port bouillonnant de Gao, siège du pouvoir de l'Empire Songhaï naissant. Le fleuve Niger est noir d'embarcations militaires.",
    unlocksMissionId: 42
  },
  46: {
    missionId: 46,
    country: "Niger",
    coordinates: { lat: 15.0000, lng: 1.0000 },
    story: "Le long de la courbe dorée du fleuve Niger (le Dijoliba), les escadres de l'Amiral Songhaï tracent le réseau commercial et militaire qui relie la savane au désert.",
    unlocksMissionId: 47
  },
  51: {
    missionId: 51,
    country: "Nigeria",
    coordinates: { lat: 6.3350, lng: 5.6275 },
    story: "Vous atteignez l'une des merveilles urbaines du vieux monde : Edo (Benin City). Ses lampadaires au gaz de palme illuminent des perspectives rectilignes sans fin de nuit.",
    unlocksMissionId: 52
  },
  55: {
    missionId: 55,
    country: "Nigeria",
    coordinates: { lat: 6.3361, lng: 5.6258 },
    story: "Vous longez un fragment des gigantesques remparts de Benin City, l'Aiya. 16000 km d'enceinte globale. Quatre fois la taille de la Grande Muraille de Chine en termes de volume de remblais.",
    unlocksMissionId: 56
  },
  61: {
    missionId: 61,
    country: "Éthiopie",
    coordinates: { lat: 14.1268, lng: 38.7180 },
    story: "Plongez dans les hauts plateaux tempérés de la Corne de l'Afrique. Aksoum, hub intellectuel et marchand, se dresse fièrement après avoir pacifié la mer Rouge.",
    unlocksMissionId: 62
  },
  62: {
    missionId: 62,
    country: "Éthiopie",
    coordinates: { lat: 14.1333, lng: 38.7167 },
    story: "Vous touchez la base du grand Obélisque d'Aksoum. Cette pierre dressée, pilier gigantesque sculpté pour simuler un bâtiment à étages, représente des centaines de tonnes de roche transportées sans technologies modernes.",
    unlocksMissionId: 63
  },
  67: {
    missionId: 67,
    country: "Éthiopie",
    coordinates: { lat: 12.0305, lng: 39.0400 },
    story: "Les spectaculaires églises de Lalibela sont à vos pieds. Pas une brique ajoutée, tout taillé par soustraction d'une seule masse de tuf rougeâtre.",
    unlocksMissionId: 68
  },
  71: {
    missionId: 71,
    country: "Zimbabwe",
    coordinates: { lat: -20.2683, lng: 30.9333 },
    story: "L'Afrique Australe mystique. Le Grand Zimbabwe s'ouvre à vous. Ce monumental complexe de pierre séche servait de capitale métropolitaine à Empire Shona.",
    unlocksMissionId: 72
  },
  76: {
    missionId: 76,
    country: "Tanzanie",
    coordinates: { lat: -8.9667, lng: 39.5167 },
    story: "Kilwa Kisiwani, l'état swahili riche d'Asie et de l'or de Mutapa. Ibn Battuta décrira cette ville insulaire de palais coralliens comme l'une des plus belles villes du monde.",
    unlocksMissionId: 77
  },
  81: {
    missionId: 81,
    country: "Afrique du Sud",
    coordinates: { lat: -28.3167, lng: 31.4167 },
    story: "À l'ombre du KwaZulu-Natal, les impis rugissent. Shaka Zulu n'est plus, mais son génie militaire d'unification tribale a secoué le demi-continent.",
    unlocksMissionId: 82
  },
  88: {
    missionId: 88,
    country: "Ghana",
    coordinates: { lat: 6.6994, lng: -1.6241 },
    story: "Vous atterrissez près de la capitale de la confédération Ashanti (Kumasi), protégée par ses guerriers férophières prêtes à défendre le tabouret d'or aux côtés de la reine mère Yaa Asantewaa.",
    unlocksMissionId: 89
  },
  91: {
    missionId: 91,
    country: "Inconnue",
    coordinates: { lat: 0, lng: 0 },
    story: "Coordonnées non cartographiées. Le plan astral. Bienvenue dans la Citadelle Baydouvan, le lieu de croisement où toutes les timelines de l'Histoire d'Afrique fusionnent.",
    unlocksMissionId: 92
  },
  98: {
    missionId: 98,
    country: "Hyperespace",
    coordinates: { lat: 0, lng: 0 },
    story: "Singularité atteinte. Tous les mensonges sont tombés. L'humanité d'hier retrouve sa dignité. Gardien, c'est l'heure de la transmission des pouvoirs.",
    unlocksMissionId: 99
  }
};

export const memoryGames: Record<number, MemoryGame> = {
  5: {
    missionId: 5,
    pairs: [
      { id: "gye_nyame", content: "Gye Nyame (Suprématie de Dieu)" },
      { id: "sankofa", content: "Sankofa (Retour aux sources)" },
      { id: "duafe", content: "Duafe (Peigne de bois, beauté)" },
      { id: "akoma", content: "Akoma (Le Cœur, patience)" }
    ],
    successMessage: "Les symboles Adinkra sont ancrés dans votre esprit. Vous comprenez la sagesse Akan."
  },
  9: {
    missionId: 9,
    pairs: [
      { id: "masque", content: "Masque Dan" },
      { id: "djembe", content: "Djembé Royal" },
      { id: "lance", content: "Lance Massaï" },
      { id: "bouclier", content: "Bouclier Zoulou" },
      { id: "sculpture", content: "Bronze du Bénin" },
      { id: "tissu", content: "Pagne Kente" }
    ],
    successMessage: "Les fragments d'artefacts primordiaux s'alignent. La mémoire culturelle s'éveille."
  },
  17: {
    missionId: 17,
    pairs: [
      { id: "plume", content: "Plume de Maât" },
      { id: "balance", content: "Balance du Jugement" },
      { id: "coeur", content: "Scarabée Coeur" },
      { id: "devoreuse", content: "Ammit la Dévoreuse" },
      { id: "thot", content: "Scribe Djehouty" },
      { id: "osiris", content: "Trône d'Ousir" }
    ],
    successMessage: "Le Papyrus d'Ani est reconstitué. Vous maîtrisez le livre de la sortie au jour."
  },
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
    successMessage: "Les divinités s'alignent. Vous avez recréé l'harmonie sacrée du panthéon (Maât)."
  },
  26: {
    missionId: 26,
    pairs: [
      { id: "or", content: "Couronne en Or" },
      { id: "elephant", content: "Sceau de l'Éléphant" },
      { id: "arc", content: "Arc composite Nubien" },
      { id: "vase", content: "Vase rituel de Dongola" }
    ],
    successMessage: "Les symboles de souveraineté des reines nubiennes sont restaurés."
  },
  28: {
    missionId: 28,
    pairs: [
      { id: "fer", content: "Pointes de flèche en fer" },
      { id: "cuir", content: "Carquois en cuir tressé" },
      { id: "bois", content: "Bois d'Ebène" },
      { id: "corde", content: "Corde en liane tressée" }
    ],
    successMessage: "Vous avez identifié l'armement asymétrique des fameux archers de Kush."
  },
  34: {
    missionId: 34,
    pairs: [
      { id: "poudre", content: "Poudre d'Or (Wangara)" },
      { id: "cauri", content: "Coquillage Cauri (Monnaie)" },
      { id: "barre", content: "Barres de Selgem" },
      { id: "dinars", content: "Dinars du Caire" }
    ],
    successMessage: "La logistique monétaire du Mali médiéval n'a plus de secret pour vous."
  },
  38: {
    missionId: 38,
    pairs: [
      { id: "minaret", content: "Minaret Pyramidal" },
      { id: "bois", content: "Bois de Palmier Rônier" },
      { id: "banco", content: "Enduit naturel en Banco" },
      { id: "niche", content: "Niche du Mihrab" }
    ],
    successMessage: "L'architecture hispano-mauresque et soudanaise d'Abou Ishaq es-Sahéli est en sécurité dans votre esprit."
  },
  45: {
    missionId: 45,
    pairs: [
      { id: "astronome", content: "Mohammed Bagayogo" },
      { id: "historien", content: "Mahmoud Kati (Tarikh)" },
      { id: "juriste", content: "Ahmed Baba" },
      { id: "imam", content: "Aqit al-Timbukti" }
    ],
    successMessage: "Vous avez honoré la mémoire des plus illustres lettrés noirs de Tombouctou."
  },
  49: {
    missionId: 49,
    pairs: [
      { id: "theologie", content: "Coran relié cuir ocre" },
      { id: "geometrie", content: "Notes d'Algèbre de Sankoré" },
      { id: "botanique", content: "Manuel de Pharmacopée en Bambara" },
      { id: "poesie", content: "Versets en langue ajami" }
    ],
    successMessage: "Le savoir encyclopédique de Sankoré est préservé des outrages du temps."
  },
  53: {
    missionId: 53,
    pairs: [
      { id: "panthere", content: "La Panthère (Le Roi)" },
      { id: "mudfish", content: "Poisson Vasard (Monde de l'Eau/Olokun)" },
      { id: "portugais", content: "Marchand Fidalgo (Commerce)" },
      { id: "iyoba", content: "Tête Mémorial Pectoral (Reine Mère)" }
    ],
    successMessage: "La riche symbolique politique et zoologique des lauriers du Bénin s'anime sous vos yeux !"
  },
  58: {
    missionId: 58,
    pairs: [
      { id: "ewuare", content: "Oba Ewuare Le Grand" },
      { id: "ozolua", content: "Oba Ozolua Le Conquérant" },
      { id: "esigie", content: "Oba Esigie" },
      { id: "idia", content: "Iyoba Idia (Bataille d'Idah)" }
    ],
    successMessage: "La lignée du grand empereur Oromiyan et la fondation de l'Edo moderne a été reconnectée."
  },
  67: {
    missionId: 67,
    pairs: [
      { id: "aragawi", content: "Abba Za-Mikael Aregawi" },
      { id: "panteleon", content: "Abba Pantaléwon" },
      { id: "gerima", content: "Abba Garima (Manuscrit)" },
      { id: "afse", content: "Abba Afsé" },
      { id: "tsahma", content: "Abba Yem'ata" },
      { id: "guba", content: "Abba Gouba" }
    ],
    successMessage: "Le nom des célèbres moines fondateurs orthodoxes est consigné aux archives."
  },
  70: {
    missionId: 70,
    pairs: [
      { id: "mariam", content: "Bete Maryam" },
      { id: "giyorgis", content: "Bete Giyorgis (Croix)" },
      { id: "medhane", content: "Bete Medhane Alem" },
      { id: "amanuel", content: "Bete Amanuel" }
    ],
    successMessage: "L'art monolithique inouï du roi saint a été correctement réassemblé."
  },
  74: {
    missionId: 74,
    pairs: [
      { id: "oiseau", content: "Les 8 Oiseaux en stéatite" },
      { id: "chevron", content: "Motif architectural Chevron" },
      { id: "or", content: "Ornements de forge Shona" },
      { id: "dieu", content: "Mwari (Dieu Créateur)" }
    ],
    successMessage: "Les totems aériens du Grand Zimbabwe veillent encore sur la région."
  },
  80: {
    missionId: 80,
    pairs: [
      { id: "mutapa", content: "Royaume de Mutapa" },
      { id: "mapungubwe", content: "Cité de Mapungubwe" },
      { id: "rozvi", content: "Empire Rozvi" },
      { id: "khami", content: "Ruines de Khami" }
    ],
    successMessage: "Toute la galaxie chronologique de l'Afrique du Sud des pierres sèches s'illumine."
  },
  85: {
    missionId: 85,
    pairs: [
      { id: "tete", content: "La Tête (Guerriers Elites)" },
      { id: "poitrine", content: "La Poitrine (Assaut frontal)" },
      { id: "gauche", content: "Corne Gauche (Flanc rapide)" },
      { id: "droite", content: "Corne Droite (Encerclant)" }
    ],
    successMessage: "Vous maitrîsez la redoutable formation guerrière des 'Cornes de Buffle' de l'Impis zoulou."
  },
  89: {
    missionId: 89,
    pairs: [
      { id: "yaa", content: "Yaa Asantewaa (Reine de Kumasi)" },
      { id: "samory", content: "Samory Touré (Napoléon d'Afrique)" },
      { id: "shaka", content: "Shaka Zulu" },
      { id: "cetshwayo", content: "Roi Cetshwayo (Isandhlwana)" },
      { id: "oumar", content: "El Hadj Oumar Tall" },
      { id: "toussaint", content: "Toussaint Louverture (Haïti/Diapora)" }
    ],
    successMessage: "Leur sacrifice est inscrit dans nos blocs de silicone BAYDOUVAN."
  },
  93: {
    missionId: 93,
    pairs: [
      { id: "savoir", content: "Sciences Mathématiques" },
      { id: "paix", content: "Harmonie (Maât)" },
      { id: "richesse", content: "Agriculture et Commerce" },
      { id: "defaut", content: "Guerres fratricides" }
    ],
    successMessage: "L'équilibre des civilisations est préservé. Vous êtes clairvoyant."
  },
  97: {
    missionId: 97,
    pairs: [
      { id: "initie", content: "L'Initié (Curiosité)" },
      { id: "gardien", content: "Le Gardien (Protection)" },
      { id: "sage", content: "Le Sage (Transmission)" },
      { id: "maitre", content: "Le Maître Baydouvan (Créer)" }
    ],
    successMessage: "Félicitations. Vous intégrez la structure mentale des fondateurs !"
  }
};

export const codeCrackers: Record<number, CodeCracker> = {
  2: {
    missionId: 2,
    hiddenWord: "MAAT",
    clue: "Le principe de vérité, d'équilibre, d'ordre et de justice divine (4 lettres).",
    successMessage: "Le code génétique est purifié, la machine Mémorielle s'active sous le signe de l'équilibre."
  },
  8: {
    missionId: 8,
    hiddenWord: "TEMPS",
    clue: "Il coule comme le fleuve, mais efface souvent la mémoire (5 lettres).",
    successMessage: "Coordonnées temporelles validées. Le continuum s'ouvre."
  },
  12: {
    missionId: 12,
    hiddenWord: "PIERRE",
    clue: "L'assemblage parfait de ce matériau inerte a défié les millénaires (6 lettres).",
    successMessage: "L'alignement sacré de Gizeh est déchiffré. Le plan est vôtre."
  },
  16: {
    missionId: 16,
    hiddenWord: "INPOU",
    clue: "Nom africain originel du guide à tête de chacal (5 lettres).",
    successMessage: "Le sceau est brisé ! Inpou vous accorde son passage funéraire."
  },
  24: {
    missionId: 24,
    hiddenWord: "MEROE",
    clue: "La grande capitale du fer et de l'or des rois noirs (5 lettres).",
    successMessage: "La plaque commerciale de la capitale est décodée. La route du fer s'ouvre."
  },
  25: {
    missionId: 25,
    hiddenWord: "ROYAL",
    clue: "Ce qui appartient à la Candace et à l'Oba (5 lettres).",
    successMessage: "Un fragment méroïtique de la cour a été traduit avec succès."
  },
  33: {
    missionId: 33,
    hiddenWord: "MANDEN",
    clue: "Le vieux nom pour l'empire du Mali, lieu d'origine de sa constitution fondatrice (6 lettres).",
    successMessage: "La charte de Kouroukan Fouga (Manden Kalikan) rayonne sous vos yeux."
  },
  37: {
    missionId: 37,
    hiddenWord: "GRIOT",
    clue: "Bibliothèque humaine, poète et diplomate redouté. (5 lettres)",
    successMessage: "Le maître de la parole (Djéli) est démasqué, vous laissant fuir en silence."
  },
  47: {
    missionId: 47,
    hiddenWord: "BARKA",
    clue: "Le mot de 'Bénédiction' arabe ou bambara en lettres (5 lettres). L'Askia revient de la Mecque.",
    successMessage: "Les bénédictions (Baraka) vous sont accordées ! Code certifié."
  },
  48: {
    missionId: 48,
    hiddenWord: "AJAMI",
    clue: "L'art d'écrire des langues africaines avec l'alphabet arabe (5 lettres)",
    successMessage: "Parfait. L'Ajami ouvre des pans entiers de littérature ouest-africaine."
  },
  56: {
    missionId: 56,
    hiddenWord: "LAITON",
    clue: "Ce fameux métal lourd jaune doré coulé souvent à tort sous le nom de Bronze (6 lettres)",
    successMessage: "Affinage chimique certifié. Les maitres forgerons l'adoraient pour sa malléabilité."
  },
  60: {
    missionId: 60,
    hiddenWord: "IGUN",
    clue: "Le quartier de la guilde sacrée des fondeurs à Edo (4 lettres). Igun Eronmwon.",
    successMessage: "Passage autorisé vers la forge sacrée des artisans de la Cour."
  },
  63: {
    missionId: 63,
    hiddenWord: "GEEZ",
    clue: "L'ancienne langue liturgique sud-sémitique d'Aksoum et de l'Éthiopie (4 lettres). (S'écrit parfois Ge'ez)",
    successMessage: "Épigraphie terminée. L'ancêtre de l'Amharique vous montre la voie."
  },
  68: {
    missionId: 68,
    hiddenWord: "ARCHE",
    clue: "Relique sacrée de Jérusalem qui serait cachée dans l'Eglise Sainte-Marie-de-Sion à Aksoum (5 lettres).",
    successMessage: "L'Alliance est scellée. Le code spirituel s'ouvre."
  },
  77: {
    missionId: 77,
    hiddenWord: "KILWA",
    clue: "L'un des ports majeurs (en Tanzanie) connectant l'or Zimbabwéen à l'Asie (5 lettres).",
    successMessage: "L'artefact d'ivoire et de porcelaine se met en route. Pillage des corsaires portugais évité !"
  },
  79: {
    missionId: 79,
    hiddenWord: "SHONA",
    clue: "Le nom de l'empire et de la racine linguistique du peuple fondateur du Grand Zimbabwe (5 lettres).",
    successMessage: "Résonance activée sur les ancêtres MaShona."
  },
  84: {
    missionId: 84,
    hiddenWord: "OR",
    clue: "Le matériau de la richesse du royaume Ashanti du roi Osei Tutu, symbole étincelant (2 lettres).",
    successMessage: "La poudre brillante pèse sur la balance du savoir."
  },
  87: {
    missionId: 87,
    hiddenWord: "ASANTE",
    clue: "Le peuple fédéré autour du roi de Kumasi pour résister à la force expéditionnaire Anglaise (6 lettres, comme l'empire).",
    successMessage: "La confédération dorée survit ce jour."
  },
  94: {
    missionId: 94,
    hiddenWord: "DATA",
    clue: "Le véritable enjeu de l'ordre BAYDOUVAN : restaurer et libérer nos _ _ _ _ de l'aliénation (4 lettres, terme informatique).",
    successMessage: "Accès réseau aux bases de données temporelles quantiques garanti."
  },
  99: {
    missionId: 99,
    hiddenWord: "VRAI",
    clue: "La lumière de la Maât révèle ce qui n'est pas mensonger (4 lettres).",
    successMessage: "C'EST FINI ! Toutes les encryptions ont craqué vis à vis de l'histoire universelle de l'Afrique. Vous avez triomphé."
  }
};
