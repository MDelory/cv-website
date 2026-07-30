import React from 'react';
import { calculateAge, calculateDuration } from '../utils/dateUtils';
import profileImg from '../assets/person_cutout.png';

const PDFTemplate = () => {
    const age = calculateAge('1993-08-12');

    const expKiabiDuration = calculateDuration('2024-02-11', new Date());
    const expYzeeDuration = calculateDuration('2022-02-01', '2024-02-10');
    const expQuadraDuration = calculateDuration('2018-01-01', '2022-02-21');
    const expWeldomDuration = calculateDuration('2017-02-01', '2017-12-31');

    return (
        <div id="cv-pdf-template" style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '12mm 15mm',
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontSize: '9.5pt',
            lineHeight: '1.45',
            position: 'absolute',
            left: '-9999px',
            top: '-9999px'
        }}>
            {/* --- HEADER --- */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderBottom: '2px solid #2563eb',
                paddingBottom: '14px',
                marginBottom: '14px'
            }}>
                {/* Photo recadrée sur le visage */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #2563eb',
                    flexShrink: 0,
                    backgroundColor: '#0f172a'
                }}>
                    <img
                        src={profileImg}
                        alt="Martin Delory"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 18%',
                            transform: 'scale(1.35)',
                            transformOrigin: 'center 20%'
                        }}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <h1 style={{
                        fontSize: '22pt',
                        fontWeight: '800',
                        color: '#0f172a',
                        margin: 0,
                        lineHeight: '1.1'
                    }}>
                        Martin <span style={{ color: '#2563eb' }}>DELORY</span>
                    </h1>
                    <div style={{
                        fontSize: '12pt',
                        fontWeight: '700',
                        color: '#2563eb',
                        marginTop: '2px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        Développeur Backend Java & Architectures Microservices
                    </div>
                    <div style={{
                        fontSize: '8.5pt',
                        color: '#475569',
                        marginTop: '4px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px'
                    }}>
                        <span>📧 delorymartin@gmail.com</span>
                        <span>📍 Métropole Lilloise</span>
                        <span>🚗 Permis B (Véhiculé)</span>
                        <span>🔗 linkedin.com/in/martin-delory</span>
                        <span>💻 github.com/MDelory</span>
                    </div>
                </div>
            </div>

            {/* --- PROFIL EXÉCUTIF --- */}
            <div style={{
                backgroundColor: '#f8fafc',
                borderLeft: '4px solid #2563eb',
                padding: '8px 12px',
                marginBottom: '14px',
                borderRadius: '0 4px 4px 0'
            }}>
                <div style={{ fontWeight: '700', color: '#1e293b', marginBottom: '2px', fontSize: '10pt' }}>
                    PROFIL PROFESSIONNEL & EXPERTISE
                </div>
                <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: '1.4' }}>
                    Développeur Back-end Senior ({age} ans) fort d'une expertise reconnue sur l'écosystème <strong>Java (versions 8, 11, 17, 21, 25)</strong>, le framework <strong>Spring Boot 3</strong> et les architectures en <strong>Microservices</strong>. Spécialisé dans la conception et l'optimisation d'APIs résilientes à haut volume, la gestion de bases de données relationnelles et NoSQL, et le déploiement continu sur GCP/Docker.
                </p>
            </div>

            {/* --- COMPÉTENCES CLÉS --- */}
            <div style={{ marginBottom: '14px' }}>
                <div style={{
                    fontSize: '11pt',
                    fontWeight: '700',
                    color: '#0f172a',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '3px',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Compétences Techniques
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                    <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '4px' }}>
                        <div style={{ fontWeight: '700', color: '#2563eb', fontSize: '8.5pt', marginBottom: '4px' }}>BACKEND & JAVA</div>
                        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: '#334155' }}>
                            <li><strong>Java (8, 11, 17, 21, 25)</strong></li>
                            <li><strong>Spring Boot 3</strong> / Framework Spring</li>
                            <li><strong>Écosystème Microservices</strong></li>
                            <li>APIs RESTful & Web Services</li>
                            <li>Clean Code, DDD, TDD</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '4px' }}>
                        <div style={{ fontWeight: '700', color: '#2563eb', fontSize: '8.5pt', marginBottom: '4px' }}>BASES DE DONNÉES</div>
                        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: '#334155' }}>
                            <li>PostgreSQL & Oracle</li>
                            <li><strong>Redis (Caching / Pub-Sub)</strong></li>
                            <li>MySQL / MariaDB</li>
                            <li>Modélisation & Optimisation SQL</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '4px' }}>
                        <div style={{ fontWeight: '700', color: '#2563eb', fontSize: '8.5pt', marginBottom: '4px' }}>DEVOPS & OUTILS</div>
                        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: '#334155' }}>
                            <li>Google Cloud Platform (GCP)</li>
                            <li>Docker / Kubernetes</li>
                            <li>Pipelines CI/CD & Git</li>
                            <li>OAuth2 / JWT / Sécurité API</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- EXPÉRIENCES PROFESSIONNELLES --- */}
            <div style={{ marginBottom: '14px' }}>
                <div style={{
                    fontSize: '11pt',
                    fontWeight: '700',
                    color: '#0f172a',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '3px',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Expériences Professionnelles
                </div>

                {/* Mission Kiabi */}
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '700', fontSize: '10pt', color: '#0f172a' }}>
                            Développeur Backend Java & Microservices
                        </span>
                        <span style={{ fontSize: '8pt', fontWeight: '600', color: '#2563eb' }}>
                            Fév. 2024 - Aujourd'hui ({expKiabiDuration})
                        </span>
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#475569', fontWeight: '600', marginBottom: '3px' }}>
                        NTICO — Mission Client : KIABI
                    </div>
                    <div style={{ fontSize: '8pt', color: '#334155', lineHeight: '1.4' }}>
                        • Conception et développement d'APIs au sein d'un <strong>Écosystème Microservices</strong> à forte charge.<br />
                        • Déploiement et intégration continue sur la plateforme <strong>Google Cloud Platform (GCP)</strong> avec Docker/Kubernetes.<br />
                        • Optimisation des performances des requêtes et interactions avec les bases Oracle et PostgreSQL.<br />
                        • <em>Environnement technique :</em> <strong>Java 17, Java 21</strong>, Spring Boot 3, Écosystème Microservices, GCP, Oracle, Postgres, Kafka, CI/CD.
                    </div>
                </div>

                {/* Mission Yzee */}
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '700', fontSize: '10pt', color: '#0f172a' }}>
                            Développeur Backend Java
                        </span>
                        <span style={{ fontSize: '8pt', fontWeight: '600', color: '#2563eb' }}>
                            Fév. 2022 - Fév. 2024 ({expYzeeDuration})
                        </span>
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#475569', fontWeight: '600', marginBottom: '3px' }}>
                        NTICO — Mission Client : Yzee Service
                    </div>
                    <div style={{ fontSize: '8pt', color: '#334155', lineHeight: '1.4' }}>
                        • Analyse, développement et intégration d'APIs REST au sein d'une architecture <strong>Microservices</strong>.<br />
                        • Mise en œuvre d'une couche de cache distribué performante basée sur <strong>Redis</strong>.<br />
                        • Maintenance corrective, refactoring applicatif et suivi des déploiements en environnement conteneurisé.<br />
                        • <em>Environnement technique :</em> <strong>Java 11, Java 17</strong>, Spring Boot, Écosystème Microservices, REDIS, Python, Postgres, Docker.
                    </div>
                </div>

                {/* Quadra CAPDEMAT */}
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '700', fontSize: '10pt', color: '#0f172a' }}>
                            Développeur Full Stack & Référent Technique
                        </span>
                        <span style={{ fontSize: '8pt', fontWeight: '600', color: '#2563eb' }}>
                            Jan. 2018 - Fév. 2022 ({expQuadraDuration})
                        </span>
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#475569', fontWeight: '600', marginBottom: '3px' }}>
                        Quadra-Informatique — Centre de Service Secteur Public (CAPDEMAT)
                    </div>
                    <div style={{ fontSize: '8pt', color: '#334155', lineHeight: '1.4' }}>
                        • Audit technique, cadrage des évolutions et gestion de projet sur des applications métier critiques.<br />
                        • Conception et mise à disposition de Web Services REST / SOAP sécurisés.<br />
                        • <em>Environnement technique :</em> <strong>Java 8, Java 11</strong>, PHP, Symfony, SQL, Web Services REST/SOAP, SuiteCRM, Wordpress.
                    </div>
                </div>

                {/* Quadra Weldom */}
                <div style={{ marginBottom: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '700', fontSize: '9.5pt', color: '#0f172a' }}>
                            Développeur Full Stack
                        </span>
                        <span style={{ fontSize: '8pt', color: '#64748b' }}>
                            Fév. 2017 - Déc. 2017 ({expWeldomDuration})
                        </span>
                    </div>
                    <div style={{ fontSize: '8pt', color: '#475569' }}>
                        Quadra-Informatique — Client : Weldom • Reporting opérationnel DashBoard (JasperReport, WMOS, SQL, JavaScript)
                    </div>
                </div>
            </div>

            {/* --- FORMATION --- */}
            <div>
                <div style={{
                    fontSize: '11pt',
                    fontWeight: '700',
                    color: '#0f172a',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '3px',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Formation
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '8.5pt', color: '#0f172a' }}>BTS SIO (SLAM)</div>
                        <div style={{ fontSize: '7.5pt', color: '#475569' }}>Lycée Gaston Berger - Lille</div>
                        <div style={{ fontSize: '7.5pt', color: '#2563eb', fontWeight: '600' }}>2014 - 2016</div>
                    </div>

                    <div>
                        <div style={{ fontWeight: '700', fontSize: '8.5pt', color: '#0f172a' }}>BTS MUC</div>
                        <div style={{ fontSize: '7.5pt', color: '#475569' }}>CEPRECO - Roubaix</div>
                        <div style={{ fontSize: '7.5pt', color: '#2563eb', fontWeight: '600' }}>2012 - 2014</div>
                    </div>

                    <div>
                        <div style={{ fontWeight: '700', fontSize: '8.5pt', color: '#0f172a' }}>Baccalauréat ES</div>
                        <div style={{ fontSize: '7.5pt', color: '#475569' }}>L.I.C.P - Tourcoing</div>
                        <div style={{ fontSize: '7.5pt', color: '#2563eb', fontWeight: '600' }}>2011</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFTemplate;
