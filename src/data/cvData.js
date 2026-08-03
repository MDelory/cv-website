import { calculateAge } from '../utils/dateUtils';

export const personalInfo = {
    firstName: 'Martin',
    lastName: 'Delory',
    title: 'Développeur Backend & Architectures Microservices',
    email: 'delorymartin@gmail.com',
    location: 'Métropole Lilloise',
    mobility: 'Permis B — Véhiculé',
    linkedin: 'linkedin.com/in/martin-delory',
    github: 'github.com/MDelory',
    birthDate: '1993-08-12',
};

export const getAge = () => calculateAge(personalInfo.birthDate);

export const profileSummary = {
    short: (age) => `Développeur Back-end Senior de ${age} ans fort d'une solide expertise en conception logicielle et architectures distribuées. Spécialisé en Java (versions 8 à 25), Spring Boot 3 et écosystème Microservices, je maîtrise également PHP, Node.js et Python.`,
    full: (age) => `Développeur Back-end Senior (${age} ans) fort d'une solide expertise en développement back-end et architectures distribuées. Principalement axé sur l'écosystème Java (versions 8, 11, 17, 21, 25) et Spring Boot 3, je maîtrise également d'autres langages back-end tels que PHP (Symfony), Node.js et Python. Spécialisé dans la conception d'APIs RESTful résilientes à fort volume, l'écosystème Microservices, l'optimisation des bases de données (Oracle, PostgreSQL, Redis) et le déploiement continu sur GCP et Docker.`
};

export const skillCategories = [
    {
        id: 'backend',
        title: 'Développement Back-end',
        pdfLabel: 'BACKEND & LANGAGES',
        skills: [
            'Java (versions 8, 11, 17, 21, 25)',
            'Spring Boot 3 & 4 / Framework Spring',
            'Écosystème Microservices & REST APIs',
            'PHP / Symfony & Node.js',
            'Clean Code, DDD & TDD',
        ]
    },
    {
        id: 'database',
        title: 'Bases de données',
        pdfLabel: 'BASES DE DONNÉES',
        skills: [
            'PostgreSQL & Oracle',
            'Redis (Cache distribué)',
            'MySQL / MariaDB',
            'Modélisation & Optimisation SQL',
        ]
    },
    {
        id: 'devops',
        title: 'DevOps & Outils',
        pdfLabel: 'DEVOPS & OUTILS',
        skills: [
            'Google Cloud Platform (GCP)',
            'Docker / Kubernetes (GKE) / CloudRun',
            'Pipelines CI/CD & GitHub Actions',
            'OAuth2 / JWT & Sécurité API',
            'Méthode Agile / Scrum',
        ]
    }
];

export const experiences = [
    {
        id: 'kiabi',
        title: 'Développeur Backend Java & Microservices',
        company: 'NTICO',
        client: 'KIABI',
        startDate: '2024-02-11',
        endDate: null, // Présent
        description: "Conception et développement d'APIs REST au sein d'un Écosystème Microservices à forte charge (KIABI — retail 35 pays). Déploiement et intégration continue sur Google Cloud Platform (GCP) avec Docker & Kubernetes. Optimisation des requêtes Oracle / PostgreSQL et mise en place de pipelines CI/CD.",
        envTechnique: 'Java 17, Java 21 · Spring Boot 3 & 4 · Microservices · GCP · Docker · Oracle · PostgreSQL · CI/CD',
        bullets: [
            "Conception et développement d'APIs REST au sein d'un Écosystème Microservices à forte charge (KIABI — retail 35 pays).",
            "Déploiement et intégration continue sur Google Cloud Platform (GCP) avec Docker & GKE / CloudRun",
            "Optimisation des requêtes Oracle / PostgreSQL, pipelines CI/CD et résilience applicative.",
            "Env. : Java 17, Java 21 · Spring Boot 3 & 4 · Microservices · GCP · Docker · Oracle · PostgreSQL · CI/CD"
        ]
    },
    {
        id: 'yzee',
        title: 'Développeur Backend Java',
        company: 'NTICO',
        client: 'Yzee Service',
        startDate: '2022-02-01',
        endDate: '2024-02-10',
        description: "Intégration d'APIs REST dans un Écosystème Microservices — analyse, développement, recette et suivi de production. Mise en œuvre d'un cache distribué Redis pour l'optimisation des performances applicatives. Refactoring et conteneurisation Docker.",
        envTechnique: 'Java 11, Java 17 · Spring Boot 3 · Microservices · Redis · Python · PostgreSQL · Docker',
        bullets: [
            "Intégration d'APIs REST dans un Écosystème Microservices — analyse, développement, recette et suivi de production.",
            "Mise en œuvre d'un cache distribué Redis pour l'optimisation des performances applicatives.",
            "Refactoring et maintenance corrective en environnement Docker conteneurisé.",
            "Env. : Java 11, Java 17 · Spring Boot 3 · Microservices · Redis · Python · PostgreSQL · Docker"
        ]
    },
    {
        id: 'capdemat',
        title: 'Développeur Full Stack & Référent Technique',
        company: 'Quadra-Informatique',
        client: 'Centre de Service Secteur Public (CAPDEMAT)',
        startDate: '2018-01-01',
        endDate: '2022-02-21',
        description: "Audit technique, conception d'architectures applicatives et gestion de projet sur des applications métier critiques du secteur public. Développement et exposition de Web Services REST & SOAP sécurisés.",
        envTechnique: 'PHP · Symfony · HTML/CSS · JS · SQL · Web Services REST & SOAP',
        bullets: [
            "Audit technique, conception d'architectures applicatives et gestion de projet sur des applications métier critiques.",
            "Développement et exposition de Web Services REST & SOAP sécurisés.",
            "Env. : PHP · Symfony · HTML/CSS · JS/jQuery · SQL · REST/SOAP · SuiteCRM · Wordpress"
        ]
    },
    {
        id: 'weldom',
        title: 'Développeur Full Stack',
        company: 'Quadra-Informatique',
        client: 'Weldom (Clermont de l\'Oise)',
        startDate: '2017-02-01',
        endDate: '2017-12-31',
        description: "Mission Client — Reporting opérationnel, tableaux de bord, états JasperReport, étiquetage ZPL.",
        envTechnique: 'WMOS · HTML/CSS · JavaScript/jQuery · SQL · JasperReport · ZPL',
        bullets: [
            "Reporting opérationnel — tableaux de bord, états JasperReport, étiquetage ZPL.",
            "Env. : WMOS · HTML/CSS · JavaScript/jQuery · SQL · JasperReport · ZPL"
        ]
    },
    {
        id: 'norauto',
        title: 'Développeur Stagiaire',
        company: 'Norauto International',
        client: null,
        startDate: '2016-04-01',
        endDate: '2016-06-06',
        description: "Développement interne — Magic Wheel. Méthodologie hybride / Agile.",
        envTechnique: 'PHP · HTML/CSS · JavaScript/jQuery · SQL',
        bullets: [
            "Développement interne Magic Wheel — Méthode Agile.",
            "Env. : PHP · HTML/CSS · JavaScript/jQuery · SQL"
        ]
    },
    {
        id: 'bailly',
        title: 'Développeur Stagiaire',
        company: 'Bailly Courouble Logistique',
        client: null,
        startDate: '2015-04-01',
        endDate: '2015-06-06',
        description: "Conception du module de gestion des utilisateurs en modèle MVC.",
        envTechnique: 'PHP · HTML/CSS · JavaScript/jQuery · SQL',
        bullets: [
            "Conception du module de gestion utilisateurs (Modèle MVC).",
            "Env. : PHP · HTML/CSS · JavaScript/jQuery · SQL"
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
