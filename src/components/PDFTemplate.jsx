import React from 'react';
import { calculateAge, calculateDuration } from '../utils/dateUtils';
import profileImg from '../assets/person_cutout.png';

/**
 * PDFTemplate - Modèle de CV format A4.
 * Toujours rendu dans le DOM en position masquée (position: absolute; left: -9999px).
 * Lors du clic sur le bouton de téléchargement, PDFDownloadButton clone cet élément
 * dans un conteneur temporaire hors écran pour générer un PDF propre sans clignotement.
 */
const PDFTemplate = () => {
    const age = calculateAge('1993-08-12');

    const expKiabi    = calculateDuration('2024-02-11', new Date());
    const expYzee     = calculateDuration('2022-02-01', '2024-02-10');
    const expQuadra   = calculateDuration('2018-01-01', '2022-02-21');
    const expWeldom   = calculateDuration('2017-02-01', '2017-12-31');
    const expNorauto  = calculateDuration('2016-04-01', '2016-06-06');
    const expBailly   = calculateDuration('2015-04-01', '2015-06-06');

    // Couleurs concrètes pour un rendu fiable dans html2canvas
    const C = {
        primary: '#2563eb',
        dark:    '#0f172a',
        text:    '#1e293b',
        muted:   '#475569',
        body:    '#334155',
        bg:      '#f1f5f9',
        bgSoft:  '#f8fafc',
        border:  '#cbd5e1',
        white:   '#ffffff',
    };

    const H = {
        section: {
            fontSize: '10.5pt',
            fontWeight: '700',
            color: C.dark,
            borderBottom: `1.5px solid ${C.border}`,
            paddingBottom: '3px',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        },
    };

    return (
        <div
            id="cv-pdf-template"
            aria-hidden="true"
            style={{
                position: 'absolute',
                left: '-9999px',
                top: '0px',
                width: '794px',
                backgroundColor: C.white,
                color: C.text,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: '9.5pt',
                lineHeight: '1.45',
                padding: '32px',
                boxSizing: 'border-box',
            }}
        >
            {/* ─── HEADER ─── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: `2px solid ${C.primary}`, paddingBottom: '14px', marginBottom: '14px' }}>
                {/* Photo de profil */}
                <div style={{ width: '82px', height: '82px', borderRadius: '50%', overflow: 'hidden', border: `2.5px solid ${C.primary}`, flexShrink: 0, backgroundColor: '#0f172a' }}>
                    <img
                        src={profileImg}
                        alt="Martin Delory"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', transform: 'scale(1.15)', transformOrigin: 'center 20%' }}
                    />
                </div>
                {/* Informations de contact & Titre */}
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '22pt', fontWeight: '800', color: C.dark, lineHeight: 1.1 }}>
                        Martin <span style={{ color: C.primary }}>DELORY</span>
                    </div>
                    <div style={{ fontSize: '11pt', fontWeight: '700', color: C.primary, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Développeur Backend Java &amp; Architectures Microservices
                    </div>
                    <div style={{ fontSize: '8.5pt', color: C.muted, marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                        <span>✉ delorymartin@gmail.com</span>
                        <span>📍 Métropole Lilloise</span>
                        <span>🚗 Permis B — Véhiculé</span>
                        <span>🔗 linkedin.com/in/martin-delory</span>
                        <span>💻 github.com/MDelory</span>
                    </div>
                </div>
            </div>

            {/* ─── PROFIL PROFESSIONNEL ─── */}
            <div style={{ backgroundColor: C.bgSoft, borderLeft: `4px solid ${C.primary}`, padding: '8px 12px', marginBottom: '14px', borderRadius: '0 4px 4px 0' }}>
                <div style={{ fontWeight: '700', color: C.dark, marginBottom: '3px', fontSize: '10pt' }}>PROFIL PROFESSIONNEL</div>
                <div style={{ color: C.body, fontSize: '9pt', lineHeight: '1.4' }}>
                    Développeur Back-end Senior ({age} ans) expert de l'écosystème <strong>Java (8 · 11 · 17 · 21 · 25)</strong>, <strong>Spring Boot 3</strong>
                    {' '}et des architectures <strong>Microservices distribuées</strong>. Spécialisé dans la conception d'APIs RESTful résilientes
                    à fort volume, l'optimisation des bases de données (Oracle, PostgreSQL, Redis) et le déploiement continu sur GCP / Docker.
                    Expertise reconnue en audit technique, gestion de projet et Clean Code sur des environnements critiques.
                </div>
            </div>

            {/* ─── COMPÉTENCES CLEFS ─── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={H.section}>Compétences Techniques</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[
                        { label: 'BACKEND & JAVA', items: ['Java 8, 11, 17, 21, 25', 'Spring Boot 3 / Spring Framework', 'Écosystème Microservices', 'APIs RESTful & Web Services', 'Clean Code · DDD · TDD', 'PHP / Symfony · Node.js'] },
                        { label: 'BASES DE DONNÉES',  items: ['PostgreSQL & Oracle', 'Redis (Cache distribué)', 'MySQL / MariaDB', 'Modélisation & Optimisation SQL'] },
                        { label: 'DEVOPS & OUTILS',   items: ['Google Cloud Platform (GCP)', 'Docker / Kubernetes', 'Pipelines CI/CD', 'Git & GitHub Actions', 'OAuth2 / JWT', 'Méthode Agile / Scrum'] },
                    ].map(({ label, items }) => (
                        <div key={label} style={{ flex: 1, backgroundColor: C.bg, padding: '8px', borderRadius: '4px' }}>
                            <div style={{ fontWeight: '700', color: C.primary, fontSize: '8.5pt', marginBottom: '4px' }}>{label}</div>
                            <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: C.body }}>
                                {items.map(item => <li key={item} style={{ marginBottom: '2px' }}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── EXPÉRIENCES PROFESSIONNELLES ─── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={H.section}>Expériences Professionnelles</div>

                <Exp title="Développeur Backend Java & Microservices"
                     meta="NTICO — Mission Client : KIABI"
                     period={`Fév. 2024 – Aujourd'hui (${expKiabi})`}
                     C={C}
                     bullets={[
                         "Conception et développement d'APIs REST au sein d'un Écosystème Microservices à forte charge (KIABI — retail 35 pays).",
                         "Déploiement et intégration continue sur Google Cloud Platform (GCP) avec Docker & Kubernetes.",
                         "Optimisation des requêtes Oracle / PostgreSQL, mise en place de pipelines CI/CD robustes.",
                         "Env. : Java 17, Java 21 · Spring Boot 3 · Microservices · GCP · Docker · Oracle · PostgreSQL · Kafka · CI/CD",
                     ]} />

                <Exp title="Développeur Backend Java"
                     meta="NTICO — Mission Client : Yzee Service"
                     period={`Fév. 2022 – Fév. 2024 (${expYzee})`}
                     C={C}
                     bullets={[
                         "Intégration d'APIs REST dans un Écosystème Microservices — analyse, développement, recette et déploiement.",
                         "Mise en œuvre d'un cache distribué Redis pour l'optimisation des performances applicatives.",
                         "Refactoring et maintenance corrective en environnement Docker conteneurisé.",
                         "Env. : Java 11, Java 17 · Spring Boot · Microservices · Redis · Python · PostgreSQL · Docker",
                     ]} />

                <Exp title="Développeur Full Stack & Référent Technique"
                     meta="Quadra-Informatique — Centre de Service Secteur Public (CAPDEMAT)"
                     period={`Jan. 2018 – Fév. 2022 (${expQuadra})`}
                     C={C}
                     bullets={[
                         "Audit technique, conception d'architectures applicatives et gestion de projet sur des applications métier critiques.",
                         "Développement et exposition de Web Services REST & SOAP sécurisés.",
                         "Env. : Java 8, Java 11 · PHP · Symfony · HTML/CSS · JS/jQuery · SQL · REST/SOAP · SuiteCRM · Wordpress",
                     ]} />

                <Exp title="Développeur Full Stack"
                     meta="Quadra-Informatique — Client : Weldom (Clermont de l'Oise)"
                     period={`Fév. 2017 – Déc. 2017 (${expWeldom})`}
                     C={C}
                     bullets={[
                         "Reporting opérationnel — tableaux de bord, états JasperReport, étiquetage ZPL.",
                         "Env. : WMOS · HTML/CSS · JavaScript/jQuery · SQL · JasperReport · ZPL",
                     ]} />

                <div style={{ display: 'flex', gap: '10px', marginTop: '6px', borderTop: `1px solid ${C.border}`, paddingTop: '6px' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '9pt', color: C.dark }}>Développeur Stagiaire</div>
                        <div style={{ fontSize: '8pt', color: C.muted, fontWeight: '600' }}>Norauto International &bull; Avr.–Juin 2016 ({expNorauto})</div>
                        <div style={{ fontSize: '7.5pt', color: C.body }}>Développement interne Magic Wheel — Agile. PHP, HTML/CSS, JS, SQL.</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '9pt', color: C.dark }}>Développeur Stagiaire</div>
                        <div style={{ fontSize: '8pt', color: C.muted, fontWeight: '600' }}>Bailly Courouble Logistique &bull; Avr.–Juin 2015 ({expBailly})</div>
                        <div style={{ fontSize: '7.5pt', color: C.body }}>Module gestion utilisateurs MVC. PHP, HTML/CSS, JS, SQL.</div>
                    </div>
                </div>
            </div>

            {/* ─── FORMATION ─── */}
            <div>
                <div style={H.section}>Formation</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[
                        { t: 'BTS SIO — Option SLAM', w: 'Lycée Gaston Berger — Lille',  y: '2014 – 2016', d: 'Solutions Logicielles et Applications Métiers' },
                        { t: 'BTS MUC',              w: 'CEPRECO — Roubaix',             y: '2012 – 2014', d: 'Management des Unités Commerciales (Alternance)' },
                        { t: 'Baccalauréat ES',       w: 'L.I.C.P — Tourcoing',           y: '2011',        d: 'Spécialité Mathématiques' },
                    ].map(({ t, w, y, d }) => (
                        <div key={t} style={{ flex: 1 }}>
                            <div style={{ fontWeight: '700', fontSize: '8.5pt', color: C.dark }}>{t}</div>
                            <div style={{ fontSize: '7.5pt', color: C.muted }}>{w}</div>
                            <div style={{ fontSize: '7.5pt', color: C.primary, fontWeight: '600' }}>{y}</div>
                            <div style={{ fontSize: '7pt', color: C.body }}>{d}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

const Exp = ({ title, meta, period, bullets, C }) => (
    <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
            <span style={{ fontWeight: '700', fontSize: '10pt', color: C.dark }}>{title}</span>
            <span style={{ fontSize: '8pt', fontWeight: '600', color: C.primary, whiteSpace: 'nowrap' }}>{period}</span>
        </div>
        <div style={{ fontSize: '8.5pt', color: C.muted, fontWeight: '600', marginBottom: '3px' }}>{meta}</div>
        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8pt', color: C.body, lineHeight: '1.4' }}>
            {bullets.map((b, i) => <li key={i} style={{ marginBottom: '1px' }}>{b}</li>)}
        </ul>
    </div>
);

export default PDFTemplate;
