import React from 'react';
import { calculateDuration } from '../utils/dateUtils';
import { Briefcase, GraduationCap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const ExperienceItem = ({ title, company, client, startDate, endDate, description, isLast }) => {
    const duration = calculateDuration(startDate, endDate || new Date());
    const endDisplay = endDate ? new Date(endDate).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) : "Aujourd'hui";
    const startDisplay = new Date(startDate).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });

    return (
        <div style={{
            position: 'relative',
            paddingLeft: '3rem',
            marginBottom: isLast ? '0' : '3rem',
        }}>
            <div style={{
                position: 'absolute',
                left: '-9px',
                top: '0',
                width: '20px',
                height: '20px',
                background: 'var(--color-primary)',
                borderRadius: '50%',
                boxShadow: '0 0 0 5px var(--color-bg)',
                zIndex: 2
            }} />

            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{title}</h3>
            {company && <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                <span style={{ color: 'var(--color-text-muted)', fontWeight: 'normal' }}>Entreprise : </span>{company}
            </h4>}
            {client && <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-muted)', fontWeight: 'normal' }}>Client : </span>{client}
            </h4>}
            <div style={{
                display: 'inline-block',
                padding: '0.2rem 0.8rem',
                background: 'rgba(59, 130, 246, 0.1)',
                color: 'var(--color-primary)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                marginBottom: '1rem',
                fontWeight: '600'
            }}>
                {startDisplay} - {endDisplay} • {duration}
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>{description}</p>
        </div>
    );
};

const ExperienceGroup = ({ children }) => (
    <div style={{
        position: 'relative',
        borderLeft: '2px solid rgba(59, 130, 246, 0.3)',
        marginBottom: '3rem'
    }}>
        {children}
    </div>
);

const EducationItem = ({ title, establishment, year, description }) => (
    <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-bg-secondary)', position: 'relative' }}>
        <div style={{
            position: 'absolute',
            left: '-5px',
            top: '0.5rem',
            width: '8px',
            height: '8px',
            background: 'var(--color-text-muted)',
            borderRadius: '50%'
        }} />
        <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>{title}</h4>
        <p style={{ color: 'var(--color-text)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{establishment}</p>
        <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            marginBottom: '0.5rem'
        }}>{year}</span>
        {description && <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>{description}</p>}
    </div>
);

const Experience = () => {
    return (
        <section id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
            <ParticleBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2>Expérience & Formation</h2>
                <div style={{
                    marginTop: '3rem',
                    display: 'flex',
                    gap: '4rem',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    {/* Experience Section (Dominant) */}
                    <div style={{ flex: '2', minWidth: '300px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Briefcase size={32} color="var(--color-primary)" />
                            Expérience
                        </h3>

                        {/* Group 1: NTICO */}
                        <ExperienceGroup>
                            <ExperienceItem
                                title="Développeur Backend Java & Microservices"
                                company="NTICO"
                                client="KIABI"
                                startDate="2024-02-11"
                                description="Mission Client - Conception et développement d'une architecture globale en Écosystème Microservices à forte charge. Conception d'APIs RESTful résilientes, déploiement sur Google Cloud Platform (GCP), optimisation des requêtes et pipelines CI/CD. - Env. Technique: Java 17, Java 21 / Spring Boot 3 / Écosystème Microservices / GCP / Docker / Oracle / Postgres / Kafka"
                            />
                            <ExperienceItem
                                title="Développeur Backend Java"
                                company="NTICO"
                                client="Yzee Service"
                                startDate="2022-02-01"
                                endDate="2024-02-10"
                                description="Mission Client - Développements Back-end et intégration d'APIs au sein d'un Écosystème Microservices. Optimisation des performances avec mise en place de cache Redis, automatisation des builds et suivi de production. - Env. Technique: Java 11, Java 17 / Spring Boot / Écosystème Microservices / REDIS / Python / Postgres / Docker"
                                isLast={true}
                            />
                        </ExperienceGroup>

                        {/* Group 2: Quadra-Informatique */}
                        <ExperienceGroup>
                            <ExperienceItem
                                title="Développeur Full Stack & Référent Technique"
                                company="Quadra-Informatique"
                                client="Centre de service Secteur Public (CAPDEMAT)"
                                startDate="2018-01-01"
                                endDate="2022-02-21"
                                description="Centre de service Secteur Public - Audit d'applications, développements, architecture Web Services et gestion de projet. Migration et maintenance d'applications métier. - Env. Technique: Java 8, Java 11 / PHP / Symfony / HTML/CSS / Javascript / SQL / Web Services REST & SOAP"
                            />
                            <ExperienceItem
                                title="Développeur Full Stack"
                                company="Quadra-Informatique"
                                client="Weldom (Clermont de l'Oise)"
                                startDate="2017-02-01"
                                endDate="2017-12-31"
                                description="Mission Client - Reporting opérationnel DashBoard / JasperReport, ZPL - Env. Technique: WMOS, HTML/CSS, Javascript/JQuery, SQL, JasperReport, ZPL"
                                isLast={true}
                            />
                        </ExperienceGroup>

                        {/* Group 3: Stages (Individual but grouped for consistency if needed, or separate. Let's group by company if same, else separate. Here company differs: Norauto, Bailly) */}
                        <ExperienceGroup>
                            <ExperienceItem
                                title="Développeur Stagiaire"
                                company="Norauto Internationnal"
                                client
                                startDate="2016-04-01"
                                endDate="2016-06-06"
                                description="Développement Interne - Magic Wheel. Methodologie hybrid / agile - Env. Technique: PHP, HTML/CSS, Javascript/JQuery, SQL"
                                isLast={true}
                            />
                        </ExperienceGroup>

                        <ExperienceGroup>
                            <ExperienceItem
                                title="Développeur Stagiaire"
                                company="Bailly Courouble (Logistique)"
                                client
                                startDate="2015-04-01"
                                endDate="2015-06-06"
                                description="Module de Gestion des Utilisateurs, Modèle MVC - Env. Technique: PHP, HTML/CSS, Javascript/JQuery, SQL"
                                isLast={true}
                            />
                        </ExperienceGroup>
                    </div>

                    {/* Education Section (Discrete) */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <GraduationCap size={28} color="var(--color-primary)" />
                            Formation
                        </h3>
                        <EducationItem
                            title="BTS SIO (Services Informatiques aux Organisations)"
                            establishment="Lycée Gaston Berger - Lille"
                            year="2014 - 2016"
                            description="Option Solutions Logicielles et Applications Métiers (SLAM)."
                        />
                        <EducationItem
                            title="BTS MUC (Management des Unités Commerciales"
                            establishment="CEPRECO - Roubaix"
                            year="2012-2014"
                            description="Alternance dans la grande distribution hard-discount"
                        />
                        <EducationItem
                            title="Baccalauréat ES (Economique & Sociale)"
                            establishment="L.I.C.P - Tourcoing"
                            year="2011"
                            description="Specialité Mathématiques"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
