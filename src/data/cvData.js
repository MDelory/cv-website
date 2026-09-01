import { calculateAge } from '../utils/dateUtils';

export const personalInfo = {
    firstName: 'Martin',
    lastName: 'Delory',
    title: 'Développeur Senior Backend Java & Microservices',
    email: 'delorymartin@gmail.com',
    location: 'Métropole Lilloise',
    mobility: 'Permis B — Véhiculé',
    linkedin: 'linkedin.com/in/martin-delory',
    github: 'github.com/MDelory',
    birthDate: '1993-08-12',
};

export const getAge = () => calculateAge(personalInfo.birthDate);

export const profileSummary = {
    short: (age) =>
        `Développeur Senior Backend, âgé de ${age} ans, avec 10 ans d’expérience en développement logiciel. Spécialisé en Java / Spring Boot, APIs REST et architectures Microservices, j’interviens sur la conception, l’évolution et l’optimisation de services backend dans des environnements métier critiques et à fort volume. Expérience en GCP, Docker, CI/CD et bases de données SQL, avec une attention particulière portée à la qualité, la performance et la fiabilité des applications.`,

    full: (age) =>
        `Développeur Senior Backend, âgé de ${age} ans, avec 10 ans d’expérience en développement logiciel, dont plus de 5 ans en Java / Spring Boot. Spécialisé dans la conception et l’évolution d’APIs REST et de services Microservices, j’interviens sur des systèmes métier critiques et à fort volume, de la conception jusqu’au déploiement et au maintien en conditions opérationnelles. Expérience de Java 8 à 25, Spring Boot 3, GCP, Docker, CI/CD et des bases de données Oracle / PostgreSQL / Redis. Habitué aux problématiques de qualité logicielle, de performance, de résilience, d’observabilité et de modernisation applicative, avec une approche orientée Clean Code, DDD et tests automatisés.`
};

export const skillCategories = [
    {
        id: 'backend',
        title: 'Backend & Architecture',
        pdfLabel: 'BACKEND & ARCHITECTURE',
        skills: [
            'Java 8 → 25',
            'Spring Boot 3 · Spring Framework',
            'Microservices & APIs REST',
            'Architecture distribuée & conception de services',
            'Clean Code · DDD · Design Patterns',
            'Tests automatisés · JUnit · Mockito · TDD',
        ]
    },
    {
        id: 'database',
        title: 'Données & Performance',
        pdfLabel: 'DONNÉES & PERFORMANCE',
        skills: [
            'PostgreSQL · Oracle',
            'Redis · Cache distribué',
            'MySQL / MariaDB',
            'Modélisation de données',
            'Optimisation SQL & performances',
        ]
    },
    {
        id: 'devops',
        title: 'Cloud, DevOps & Production',
        pdfLabel: 'CLOUD, DEVOPS & PRODUCTION',
        skills: [
            'GCP — Cloud Run · GKE · Pub/Sub',
            'GCP — IAM · Cloud Storage · Secret Manager',
            'Docker',
            'CI/CD · GitHub Actions',
            'Datadog · Dynatrace · Supervision',
            'Sonar · Qualité & analyse statique',
            'OAuth2 · JWT · Sécurité API',
            'Agile / Scrum · MCO · Support N3',
        ]
    }
];

export const experiences = [
    {
        id: 'kiabi',
        title: 'Développeur Senior Backend Java & Microservices',
        company: 'NTICO',
        client: 'KIABI',
        startDate: '2024-02-11',
        endDate: '2026-09-11',
        description:
            "Équipe BackOffice Web — Périmètre financier de la commande (paiement, fidélité, chiffre d'affaires, certification de factures) au sein d'un écosystème Microservices Retail à fort trafic.",
        envTechnique:
            'Java 17 & 21 · Spring Boot 3 & 4 · Microservices · REST · GCP (Cloud Run / GKE / Pub/Sub / IAM / Secret Manager) · Docker · Oracle · PostgreSQL · CI/CD · Sonar · Datadog · Dynatrace · Talend',
        bullets: [
            "Conception et développement d'APIs REST backend pour des services stratégiques (paiement, fidélité, facturation).",
            "Déploiement et exploitation Microservices sur GCP (Cloud Run, GKE, Pub/Sub) avec conteneurisation Docker.",
            "Optimisation des accès données Oracle/PostgreSQL (requêtes, indexation) et suivi des performances via Datadog & Dynatrace.",
            "Industrialisation des livraisons via pipelines CI/CD, contrôles Sonar et flux SI avec Talend."
        ]
    },

    {
        id: 'yzee',
        title: 'Développeur Senior Backend Java',
        company: 'NTICO',
        client: 'Yzee Service',
        startDate: '2022-03-01',
        endDate: '2024-02-10',
        description:
            "Équipe Intégration & Export — Périmètre Document Management (ingestion, valorisation, règles métier et diffusion de documents multi-formats).",
        envTechnique:
            'Java 8 / 11 / 17 · Spring Boot 3 · Microservices · REST · Redis · Python · PostgreSQL · Docker · Sonar · Talend',
        bullets: [
            "Conception et développement d'APIs REST et Microservices Java / Spring Boot 3 pour le traitement et la diffusion de documents.",
            "Mise en œuvre d'un cache distribué Redis pour accélérer les requêtes à fort volume et soulager PostgreSQL.",
            "Modernisation applicative (migration Java 8/11 vers 17), conteneurisation Docker, scripts Python et suivi de production (N3)."
        ]
    },

    {
        id: 'capdemat',
        title: 'Développeur Full Stack & Référent Technique',
        company: 'Quadra-Informatique',
        client: 'Centre de Service Secteur Public (CAPDEMAT)',
        startDate: '2018-01-01',
        endDate: '2022-02-21',
        description:
            "Prise en charge à 360° d'applications métier du secteur public (du besoin au déploiement), avec évolution vers le rôle de référent technique.",
        envTechnique:
            'PHP · Symfony · HTML/CSS · JavaScript · SQL · APIs REST · Web Services SOAP · Administration Linux · CRM',
        bullets: [
            "Recueil des besoins, audits techniques et rédaction des spécifications fonctionnelles & techniques.",
            "Conception, développement et sécurisation d'applications Web et APIs REST / Web Services SOAP (PHP, Symfony) inter-SI.",
            "Intégration et personnalisation de solutions métier / CRM (SuiteCRM, WordPress) et modules décisionnels.",
            "Définition des stratégies de tests, administration des serveurs Linux, déploiements et accompagnement technique de l'équipe."
        ]
    },

    {
        id: 'weldom',
        title: 'Développeur Full Stack',
        company: 'Quadra-Informatique',
        client: "Weldom (Clermont de l'Oise)",
        startDate: '2017-02-01',
        endDate: '2017-12-31',
        description:
            "Mission Logistique & WMS — Reporting opérationnel, suivi d'activité d'entrepôt et étiquetage logistique.",
        envTechnique:
            'WMOS · HTML/CSS · JavaScript/jQuery · SQL · JasperReports · ZPL',
        bullets: [
            "Développement de tableaux de bord et d'états automatisés avec JasperReports pour le suivi logistique.",
            "Conception et optimisation de maquettes d'étiquettes d'expédition ZPL à haute cadence.",
            "Interfaçage et requêtage SQL sur le WMS WMOS (stocks, inventaires, préparation de commandes)."
        ]
    },

    {
        id: 'norauto',
        title: 'Développeur Stagiaire',
        company: 'Norauto International',
        client: null,
        startDate: '2016-04-01',
        endDate: '2016-06-06',
        description:
            "Développement de l'application Web interne d'aide à la décision « Magic Wheel » au sein d'une équipe Agile / Scrum.",
        envTechnique:
            'PHP · HTML/CSS · JavaScript/jQuery · SQL · Agile / Scrum',
        bullets: [
            "Développement du module Web interne Magic Wheel en PHP, JavaScript/jQuery, HTML5/CSS3 et SQL.",
            "Participation aux cérémonies Agile / Scrum (Sprint Planning, Daily, Rétrospectives)."
        ]
    },

    {
        id: 'bailly',
        title: 'Développeur Stagiaire',
        company: 'Bailly Courouble Logistique',
        client: null,
        startDate: '2015-04-01',
        endDate: '2015-06-06',
        description:
            "Conception et développement d'un module centralisé de gestion des utilisateurs et habilitations en architecture MVC.",
        envTechnique:
            'PHP · HTML/CSS · JavaScript/jQuery · SQL · MVC',
        bullets: [
            "Conception de l'architecture MVC et développement du module de gestion des utilisateurs et habilitations.",
            "Modélisation de la base de données relationnelle et sécurisation de la gestion des comptes."
        ]
    }
];

export const education = [
    {
        id: 'bts-sio',
        title: 'BTS SIO (Services Informatiques aux Organisations)',
        shortTitle: 'BTS SIO — Option SLAM',
        establishment: 'Lycée Gaston Berger — Lille',
        year: '2014 – 2016',
        description: 'Option Solutions Logicielles et Applications Métiers (SLAM).'
    },
    {
        id: 'bts-muc',
        title: 'BTS MUC (Management des Unités Commerciales)',
        shortTitle: 'BTS MUC',
        establishment: 'CEPRECO — Roubaix',
        year: '2012 – 2014',
        description: 'Alternance dans la grande distribution.'
    },
    {
        id: 'bac-es',
        title: 'Baccalauréat ES (Économique & Sociale)',
        shortTitle: 'Baccalauréat ES',
        establishment: 'L.I.C.P — Tourcoing',
        year: '2011',
        description: 'Spécialité Mathématiques.'
    }
];

export const hobbies = [
    {
        id: 'sport',
        name: 'Sport',
        icon: 'Dumbbell'
    },
    {
        id: 'cuisine',
        name: 'Cuisine',
        icon: 'Utensils'
    },
    {
        id: 'echecs',
        name: 'Échecs',
        icon: 'FaChessBishop'
    }
];

export const sideProjects = [
    {
        id: 'doc-generator',
        title: 'docGenerator',
        status: 'En cours de développement',
        stack: 'React · Vite · Java · Google OAuth2',
        description:
            'Génération automatique de documentation technique à partir des sources applicatives, avec interface React/Vite et backend Java sécurisé via Google OAuth2.',
        category: 'Full Stack'
    },
    {
        id: 'briefme',
        title: 'BriefMe',
        status: null,
        stack: 'Java 21 · Spring Boot · RSS Feeds · Mail',
        description:
            "Service backend d'agrégation et de filtrage de flux RSS permettant l'envoi automatisé de résumés d'actualités par email.",
        category: 'Backend Java'
    },
    {
        id: 'cv-react',
        title: 'Site CV (Version React)',
        status: null,
        stack: 'React 19 · Vite · Vitest · CSS3',
        description:
            'Application Web responsive servant de vitrine technique et de CV en ligne, avec export PDF dynamique et tests automatisés.',
        category: 'Web App'
    }
];
