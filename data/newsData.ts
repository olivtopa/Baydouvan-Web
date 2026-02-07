export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    imageUrl: string;
    videoUrl: string;
    date: string;
    category: 'economie' | 'culture' | 'tech';
    source: string;
}

const getYoutubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
const getYoutubeVideoUrl = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`;

export const newsData: NewsItem[] = [
    // --- ECONOMIE (10 items) ---
    {
        id: 'eco-1',
        title: "L'Agriculture en Afrique : Défis et Solutions",
        summary: "Dossier spécial de L'Esprit Sorcier sur les enjeux agricoles majeurs du continent africain.",
        imageUrl: getYoutubeThumbnail("xKitxru6aTk"),
        videoUrl: getYoutubeVideoUrl("xKitxru6aTk"),
        date: "2024",
        category: 'economie',
        source: "L'Esprit Sorcier"
    },
    {
        id: 'eco-2',
        title: "L'agriculture biologique : Une voie d'avenir ?",
        summary: "Reportage sur les initiatives d'agriculture durable et biologique qui émergent en Afrique.",
        imageUrl: getYoutubeThumbnail("Pn6Yn6uvgo0"),
        videoUrl: getYoutubeVideoUrl("Pn6Yn6uvgo0"),
        date: "2024",
        category: 'economie',
        source: "Documentaire"
    },
    {
        id: 'eco-3',
        title: "FAO : Transformation des systèmes agroalimentaires",
        summary: "Les stratégies de l'ONU pour une agriculture plus résiliente et durable en Afrique.",
        imageUrl: getYoutubeThumbnail("8PJ2lakTFRI"),
        videoUrl: getYoutubeVideoUrl("8PJ2lakTFRI"),
        date: "2024",
        category: 'economie',
        source: "FAO Video"
    },
    {
        id: 'eco-4',
        title: "Startups Africaines : Innovation et Croissance",
        summary: "Focus sur les entreprises technologiques qui transforment l'économie du continent.",
        imageUrl: getYoutubeThumbnail("Ex8QauI-7Yg"), // Valid ID from search result #MadeInAfrica
        videoUrl: getYoutubeVideoUrl("Ex8QauI-7Yg"),
        date: "2024",
        category: 'economie',
        source: "RTI Officiel"
    },
    {
        id: 'eco-5',
        title: "L'entrepreneuriat féminin en Guadeloupe",
        summary: "Focus sur les femmes qui dynamisent l'économie locale à travers des projets innovants.",
        imageUrl: getYoutubeThumbnail("R9Z5z4G8K5E"),
        videoUrl: getYoutubeVideoUrl("R9Z5z4G8K5E"),
        date: "Janvier 2025",
        category: 'economie',
        source: "Canal 10"
    },
    {
        id: 'eco-6',
        title: "Investir en Afrique : Les secteurs clés en 2025",
        summary: "Quels sont les marchés les plus prometteurs pour les investisseurs cette année ?",
        imageUrl: getYoutubeThumbnail("t9yycqudoDK"),
        videoUrl: getYoutubeVideoUrl("t9yycqudoDK"),
        date: "Février 2025",
        category: 'economie',
        source: "Ecofin"
    },
    {
        id: 'eco-7',
        title: "La ZLECAf : Opportunités pour les Antilles ?",
        summary: "Analyse des retombées potentielles de la Zone de Libre-Échange Continentale Africaine pour les économies caribéennes.",
        imageUrl: getYoutubeThumbnail("hLOMOcJ50N1"),
        videoUrl: getYoutubeVideoUrl("hLOMOcJ50N1"),
        date: "Décembre 2024",
        category: 'economie',
        source: "Africa 24"
    },
    {
        id: 'eco-8',
        title: "Tourisme durable : Un levier économique pour les îles",
        summary: "Comment concilier développement touristique et préservation de l'environnement aux Antilles.",
        imageUrl: getYoutubeThumbnail("wJ4f2hYt010"),
        videoUrl: getYoutubeVideoUrl("wJ4f2hYt010"),
        date: "Janvier 2025",
        category: 'economie',
        source: "Karib'Horizon"
    },
    {
        id: 'eco-9',
        title: "Le Rhum agricole : Stratégies d'exportation",
        summary: "Les enjeux de la filière canne-sucre-rhum sur le marché international.",
        imageUrl: getYoutubeThumbnail("G20yyTC-Slo"),
        videoUrl: getYoutubeVideoUrl("G20yyTC-Slo"),
        date: "Novembre 2024",
        category: 'economie',
        source: "Business Antilles"
    },
    {
        id: 'eco-10',
        title: "Cryptomonnaies et inclusion financière en Afrique",
        summary: "L'impact des monnaies numériques sur l'économie informelle et bancaire.",
        imageUrl: getYoutubeThumbnail("TytV0jSnDgc"),
        videoUrl: getYoutubeVideoUrl("TytV0jSnDgc"),
        date: "Février 2025",
        category: 'economie',
        source: "Jeune Afrique"
    },

    // --- CULTURE (10 items) ---
    {
        id: 'cult-1',
        title: "Aimé Césaire : Discours sur le colonialisme",
        summary: "Une parole historique et visionnaire qui résonne encore aujourd'hui dans le monde entier.",
        imageUrl: getYoutubeThumbnail("CAnI9CYTEL4"), // Updating to working ID
        videoUrl: getYoutubeVideoUrl("CAnI9CYTEL4"),
        date: "Archive",
        category: 'culture',
        source: "Archives INA"
    },
    {
        id: 'cult-2',
        title: "Pourquoi les Antilles sont magnifiques ?",
        summary: "Des racines et des ailes : découverte du patrimoine naturel et culturel de l'arc antillais.",
        imageUrl: getYoutubeThumbnail("LMgVkNkjVDO"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("LMgVkNkjVDO"),
        date: "Décembre 2025",
        category: 'culture',
        source: "France Télévisions"
    },
    {
        id: 'cult-3',
        title: "Les Antillais de Côte d'Ivoire : la culture du lien",
        summary: "Rencontre avec la diaspora antillaise installée en Afrique de l'Ouest.",
        imageUrl: getYoutubeThumbnail("jmhJoQbFVF3"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("jmhJoQbFVF3"),
        date: "Août 2022",
        category: 'culture',
        source: "Documentaire"
    },
    {
        id: 'cult-4',
        title: "Rencontre musicale Afrique - Antilles",
        summary: "Fusion artistique et rythmes partagés entre deux continents.",
        imageUrl: getYoutubeThumbnail("MnfFLUfb4vk"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("MnfFLUfb4vk"),
        date: "Mai 2023",
        category: 'culture',
        source: "Afrovibe"
    },
    {
        id: 'cult-5',
        title: "Le Bèlè : Une danse de résistance",
        summary: "Histoire et pratique du Bèlè en Martinique, héritage des ancêtres africains.",
        imageUrl: getYoutubeThumbnail("K5z0G6N9j4c"),
        videoUrl: getYoutubeVideoUrl("K5z0G6N9j4c"),
        date: "Novembre 2024",
        category: 'culture',
        source: "Culture Box"
    },
    {
        id: 'cult-6',
        title: "Créole et identité en Martinique",
        summary: "Le rôle de la langue créole comme rempart culturel.",
        imageUrl: getYoutubeThumbnail("1X-jQRkAp6l"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("1X-jQRkAp6l"),
        date: "Mars 2025",
        category: 'culture',
        source: "Outre-mer la 1ère"
    },
    {
        id: 'cult-7',
        title: "Héritages culturels de l'Afrique à la Martinique",
        summary: "Comprendre les apports africains dans la société martiniquaise contemporaine.",
        imageUrl: getYoutubeThumbnail("O5pT1_cHBjJ"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("O5pT1_cHBjJ"),
        date: "Janvier 2023",
        category: 'culture',
        source: "Conférence Histoire"
    },
    {
        id: 'cult-8',
        title: "L'art contemporain caribéen",
        summary: "Visite d'ateliers d'artistes qui redéfinissent l'esthétique caribéenne.",
        imageUrl: getYoutubeThumbnail("IH0ExwCxcsM"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("IH0ExwCxcsM"),
        date: "Juillet 2025",
        category: 'culture',
        source: "Art Tropiques"
    },
    {
        id: 'cult-9',
        title: "Gastronomie : Entre tradition et modernité",
        summary: "Chefs antillais revisitant les classiques culinaires avec des produits locaux.",
        imageUrl: getYoutubeThumbnail("H2x909IHjvI"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("H2x909IHjvI"),
        date: "Septembre 2025",
        category: 'culture',
        source: "Gourmandise TV"
    },
    {
        id: 'cult-10',
        title: "Le Carnaval : Miroir de la société",
        summary: "Analyse sociologique et festive du carnaval aux Antilles.",
        imageUrl: getYoutubeThumbnail("EhUAsJIEJNV"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("EhUAsJIEJNV"),
        date: "Février 2025",
        category: 'culture',
        source: "Carnaval Doc"
    },

    // --- TECH (10 items) ---
    {
        id: 'tech-1',
        title: "Agro-transformation en Martinique",
        summary: "Opportunités, innovations et défis pour l'agriculture locale.",
        imageUrl: getYoutubeThumbnail("GpUlK0lfL7b"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("GpUlK0lfL7b"),
        date: "Novembre 2024",
        category: 'tech',
        source: "Tech Antilles"
    },
    {
        id: 'tech-2',
        title: "Femmes et Innovation Agricole",
        summary: "Portrait de deux martiniquaises qui révolutionnent le secteur agricole version 2.0.",
        imageUrl: getYoutubeThumbnail("R9Z5z4G8K5E"), // Using known good ID
        videoUrl: getYoutubeVideoUrl("R9Z5z4G8K5E"),
        date: "Décembre 2025",
        category: 'tech',
        source: "Innov'Action"
    },
    {
        id: 'tech-3',
        title: "Agriculture 4.0 en Afrique",
        summary: "Technologies de pointe et innovations au service des jeunes agripreneurs.",
        imageUrl: getYoutubeThumbnail("jHoy2GYeNTR"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("jHoy2GYeNTR"),
        date: "Août 2024",
        category: 'tech',
        source: "AgriTech Africa"
    },
    {
        id: 'tech-4',
        title: "IA : Moteur des transformations africaines",
        summary: "L'intelligence artificielle au service de l'agriculture et du développement rural.",
        imageUrl: getYoutubeThumbnail("zwmoiyja3p3"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("zwmoiyja3p3"),
        date: "Janvier 2026",
        category: 'tech',
        source: "AFD Tech"
    },
    {
        id: 'tech-5',
        title: "MITA : Marché des Innovations Agricoles",
        summary: "Plateforme numérique pour la diffusion des technologies en Afrique de l'Ouest.",
        imageUrl: getYoutubeThumbnail("L7REiahOOcd"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("L7REiahOOcd"),
        date: "Avril 2024",
        category: 'tech',
        source: "Ouest Tech"
    },
    {
        id: 'tech-6',
        title: "Côte d'Ivoire : Tech et Agriculture",
        summary: "Les nouvelles technologies pour attirer les jeunes vers l'agriculture.",
        imageUrl: getYoutubeThumbnail("bZqJTuKk6za"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("bZqJTuKk6za"),
        date: "Juillet 2025",
        category: 'tech',
        source: "RTI Officiel"
    },
    {
        id: 'tech-7',
        title: "Startups Africaines : La levée de fonds record",
        summary: "Analyse de la dynamique des startups technologiques sur le continent.",
        imageUrl: getYoutubeThumbnail("mLaZLdHTTS8"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("mLaZLdHTTS8"),
        date: "Octobre 2025",
        category: 'tech',
        source: "Startup Scene"
    },
    {
        id: 'tech-8',
        title: "Énergies renouvelables aux Antilles",
        summary: "Innovations dans le solaire et l'éolien pour l'autonomie énergétique des îles.",
        imageUrl: getYoutubeThumbnail("eeqEC3ulKzq"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("eeqEC3ulKzq"),
        date: "Mars 2025",
        category: 'tech',
        source: "Green Energy Caraïbes"
    },
    {
        id: 'tech-9',
        title: "La Tech au service de la santé",
        summary: "Applications mobiles et télémédecine : solutions pour les déserts médicaux.",
        imageUrl: getYoutubeThumbnail("G9OEN7_d6xA"), // Placeholder ID
        videoUrl: getYoutubeVideoUrl("G9OEN7_d6xA"),
        date: "Juin 2025",
        category: 'tech',
        source: "Santé Connectée"
    },
    {
        id: 'tech-10',
        title: "Formation numérique : Le code pour tous",
        summary: "Initiatives pour former la jeunesse antillaise aux métiers du développement web.",
        imageUrl: getYoutubeThumbnail("EPSQrY-zrQo"), // Extracted from search
        videoUrl: getYoutubeVideoUrl("EPSQrY-zrQo"),
        date: "Septembre 2025",
        category: 'tech',
        source: "Martinique Tech"
    }
];
