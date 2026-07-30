import React from 'react';
import { calculateAge, calculateDuration } from '../utils/dateUtils';
import profileImg from '../assets/person_cutout.png';

/**
 * PDFTemplate – rendu invisible dans le DOM (masqué hors écran).
 * Lors du téléchargement, PDFDownloadButton clone cet élément,
 * le place temporairement dans le viewport et le capture avec html2canvas.
 */
const PDFTemplate = () => {
    const age = calculateAge('1993-08-12');

    const expKiabiDuration   = calculateDuration('2024-02-11', new Date());
    const expYzeeDuration    = calculateDuration('2022-02-01', '2024-02-10');
    const expQuadraDuration  = calculateDuration('2018-01-01', '2022-02-21');
    const expWeldomDuration  = calculateDuration('2017-02-01', '2017-12-31');
    const expNorautoMonths   = calculateDuration('2016-04-01', '2016-06-06');
    const expBaillyMonths    = calculateDuration('2015-04-01', '2015-06-06');

    // Tous les styles utilisent des valeurs concrètes (pas de var(--...))
    // pour garantir un rendu correct dans html2canvas
    const c = {
        primary:   '#2563eb',
        dark:      '#0f172a',
        text:      '#1e293b',
        muted:     '#475569',
        light:     '#334155',
        bg:        '#f1f5f9',
        bgLight:   '#f8fafc',
        white:     '#ffffff',
        border:    '#e2e8f0',
    };

    const sectionTitle = {
        fontSize: '11pt',
        fontWeight: '700',
        color: c.dark,
        borderBottom: `1px solid ${c.border}`,
        paddingBottom: '3px',
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    };

    return (
        /* Élément ancre masqué – ne jamais l'afficher directement */
        <div
            id="cv-pdf-template"
            aria-hidden="true"
            style={{
                position: 'absolute',
                left: '-9999px',
                top: '0px',
                width: '794px',
                backgroundColor: c.white,
                color: c.text,
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                fontSize: '9.5pt',
                lineHeight: '1.45',
                padding: '32px',
                boxSizing: 'border-box',
            }}
        >
            {/* ── HEADER ── */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderBottom: `2px solid ${c.primary}`,
                paddingBottom: '14px',
                marginBottom: '14px',
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${c.primary}`,
                    flexShrink: 0,
                    backgroundColor: '#0f172a',
                }}>
                    <img
                        src={profileImg}
                        alt="Martin Delory"
                        crossOrigin="anonymous"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 18%',
                            transform: 'scale(1.35)',
                            transformOrigin: 'center 20%',
                        }}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '22pt', fontWeight: '800', color: c.dark, lineHeight: '1.1' }}>
                        Martin&nbsp;<span style={{ color: c.primary }}>DELORY</span>
                    </div>
                    <div style={{ fontSize: '11pt', fontWeight: '700', color: c.primary, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Développeur Backend Java & Architectures Microservices
                    </div>
                    <div style={{ fontSize: '8.5pt', color: c.muted, marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <span>✉ delorymartin@gmail.com</span>
                        <span>📍 Métropole Lilloise</span>
                        <span>🚗 Permis B – Véhiculé</span>
                        <span>🔗 linkedin.com/in/martin-delory</span>
                        <span>💻 github.com/MDelory</span>
                    </div>
                </div>
            </div>

            {/* ── PROFIL EXÉCUTIF ── */}
            <div style={{
                backgroundColor: c.bgLight,
                borderLeft: `4px solid ${c.primary}`,
                padding: '8px 12px',
                marginBottom: '14px',
                borderRadius: '0 4px 4px 0',
            }}>
                <div style={{ fontWeight: '700', color: c.dark, marginBottom: '3px', fontSize: '10pt' }}>
                    PROFIL PROFESSIONNEL
                </div>
                <div style={{ color: c.light, fontSize: '9pt', lineHeight: '1.4' }}>
                    Développeur Back-end Senior ({age} ans) expert en écosystème{' '}
                    <strong>Java (8 · 11 · 17 · 21 · 25)</strong>, <strong>Spring Boot 3</strong> et architectures{' '}
                    <strong>Microservices distribuées</strong>. Conception d'APIs RESTful résilientes à fort volume,
                    optimisation des bases de données relationnelles (Oracle, PostgreSQL) et NoSQL (Redis),
                    et déploiement continu sur GCP/Docker. Expertise reconnue en audit, gestion de projet technique
                    et Clean Code.
                </div>
            </div>

            {/* ── COMPÉTENCES ── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={sectionTitle}>Compétences Techniques</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[
                        {
                            label: 'BACKEND & JAVA',
                            items: ['Java 8, 11, 17, 21, 25', 'Spring Boot 3 / Spring Framework', 'Écosystème Microservices', 'APIs RESTful & Web Services', 'Clean Code · DDD · TDD', 'PHP / Symfony · Node.js'],
                        },
                        {
                            label: 'BASES DE DONNÉES',
                            items: ['PostgreSQL & Oracle', 'Redis (Cache / Pub-Sub)', 'MySQL / MariaDB', 'Modélisation & Optimisation SQL'],
                        },
                        {
                            label: 'DEVOPS & OUTILS',
                            items: ['Google Cloud Platform (GCP)', 'Docker / Kubernetes', 'Pipelines CI/CD', 'Git & GitHub Actions', 'OAuth2 / JWT / Sécurité API', 'Méthode Agile / Scrum'],
                        },
                    ].map(({ label, items }) => (
                        <div key={label} style={{ flex: 1, backgroundColor: c.bg, padding: '8px', borderRadius: '4px' }}>
                            <div style={{ fontWeight: '700', color: c.primary, fontSize: '8.5pt', marginBottom: '4px' }}>{label}</div>
                            <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: c.light }}>
                                {items.map((item) => <li key={item} style={{ marginBottom: '2px' }}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── EXPÉRIENCES ── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={sectionTitle}>Expériences Professionnelles</div>

                {/* ---- NTICO / KIABI ---- */}
                <ExpBlock
                    title="Développeur Backend Java & Microservices"
                    meta="NTICO — Mission Client : KIABI"
                    period={`Fév. 2024 – Aujourd'hui (${expKiabiDuration})`}
                    bullets={[
                        "Conception et développement d'APIs REST au sein d'un Écosystème Microservices à forte charge (KIABI — retail 35 pays).",
                        "Déploiement et intégration continue sur Google Cloud Platform (GCP) avec Docker & Kubernetes.",
                        "Optimisation des requêtes et des interactions avec les bases Oracle et PostgreSQL.",
                        "Env. technique : Java 17, Java 21 · Spring Boot 3 · Microservices · GCP · Docker · Oracle · Postgres · Kafka · CI/CD",
                    ]}
                    c={c}
                />

                {/* ---- NTICO / YZEE ---- */}
                <ExpBlock
                    title="Développeur Backend Java"
                    meta="NTICO — Mission Client : Yzee Service"
                    period={`Fév. 2022 – Fév. 2024 (${expYzeeDuration})`}
                    bullets={[
                        "Analyse, développement et intégration d'APIs REST dans un Écosystème Microservices.",
                        "Mise en œuvre d'un cache distribué Redis pour l'optimisation des performances applicatives.",
                        "Maintenance corrective, refactoring et suivi des déploiements en environnement conteneurisé.",
                        "Env. technique : Java 11, Java 17 · Spring Boot · Microservices · Redis · Python · Postgres · Docker",
                    ]}
                    c={c}
                />

                {/* ---- QUADRA / CAPDEMAT ---- */}
                <ExpBlock
                    title="Développeur Full Stack & Référent Technique"
                    meta="Quadra-Informatique — Centre de Service Secteur Public (CAPDEMAT)"
                    period={`Jan. 2018 – Fév. 2022 (${expQuadraDuration})`}
                    bullets={[
                        "Audit technique, conception d'architectures applicatives et gestion de projet sur applications métier critiques.",
                        "Développement et exposition de Web Services REST & SOAP sécurisés.",
                        "Env. technique : Java 8, Java 11 · PHP · Symfony · HTML/CSS · JS · SQL · REST/SOAP · SuiteCRM",
                    ]}
                    c={c}
                />

                {/* ---- QUADRA / WELDOM ---- */}
                <ExpBlock
                    title="Développeur Full Stack"
                    meta="Quadra-Informatique — Client : Weldom (Clermont de l'Oise)"
                    period={`Fév. 2017 – Déc. 2017 (${expWeldomDuration})`}
                    bullets={[
                        "Reporting opérationnel — Dashboards & états JasperReport, étiquetage ZPL.",
                        "Env. technique : WMOS · HTML/CSS · JavaScript · SQL · JasperReport · ZPL",
                    ]}
                    c={c}
                />

                {/* ---- STAGES ---- */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                    <div style={{ flex: 1, borderTop: `1px solid ${c.border}`, paddingTop: '6px' }}>
                        <div style={{ fontWeight: '700', fontSize: '9pt', color: c.dark }}>Développeur Stagiaire</div>
                        <div style={{ fontSize: '8pt', color: c.muted, fontWeight: '600' }}>Norauto International • Avr.–Juin 2016 ({expNorautoMonths})</div>
                        <div style={{ fontSize: '7.5pt', color: c.light }}>Développement interne – Magic Wheel. Méthode Agile. PHP, HTML/CSS, JS, SQL</div>
                    </div>
                    <div style={{ flex: 1, borderTop: `1px solid ${c.border}`, paddingTop: '6px' }}>
                        <div style={{ fontWeight: '700', fontSize: '9pt', color: c.dark }}>Développeur Stagiaire</div>
                        <div style={{ fontSize: '8pt', color: c.muted, fontWeight: '600' }}>Bailly Courouble Logistique • Avr.–Juin 2015 ({expBaillyMonths})</div>
                        <div style={{ fontSize: '7.5pt', color: c.light }}>Module gestion utilisateurs MVC. PHP, HTML/CSS, JS, SQL</div>
                    </div>
                </div>
            </div>

            {/* ── FORMATION ── */}
            <div>
                <div style={sectionTitle}>Formation</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[
                        { title: 'BTS SIO – Option SLAM', where: 'Lycée Gaston Berger – Lille', year: '2014 – 2016', detail: 'Solutions Logicielles et Applications Métiers' },
                        { title: 'BTS MUC', where: 'CEPRECO – Roubaix', year: '2012 – 2014', detail: 'Management des Unités Commerciales (Alternance)' },
                        { title: 'Baccalauréat ES', where: 'L.I.C.P – Tourcoing', year: '2011', detail: 'Spécialité Mathématiques' },
                    ].map(({ title, where, year, detail }) => (
                        <div key={title} style={{ flex: 1 }}>
                            <div style={{ fontWeight: '700', fontSize: '8.5pt', color: c.dark }}>{title}</div>
                            <div style={{ fontSize: '7.5pt', color: c.muted }}>{where}</div>
                            <div style={{ fontSize: '7.5pt', color: c.primary, fontWeight: '600' }}>{year}</div>
                            <div style={{ fontSize: '7pt', color: c.light }}>{detail}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/** Bloc d'expérience réutilisable */
const ExpBlock = ({ title, meta, period, bullets, c }) => (
    <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '700', fontSize: '10pt', color: c.dark }}>{title}</span>
            <span style={{ fontSize: '8pt', fontWeight: '600', color: c.primary }}>{period}</span>
        </div>
        <div style={{ fontSize: '8.5pt', color: c.muted, fontWeight: '600', marginBottom: '3px' }}>{meta}</div>
        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8pt', color: c.light, lineHeight: '1.4' }}>
            {bullets.map((b, i) => <li key={i} style={{ marginBottom: '1px' }}>{b}</li>)}
        </ul>
    </div>
);

export default PDFTemplate;
