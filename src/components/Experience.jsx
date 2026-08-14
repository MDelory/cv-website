import React from 'react';
import { calculateDuration } from '../utils/dateUtils';
import { Briefcase, GraduationCap, FolderGit2 } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { experiences, education, sideProjects } from '../data/cvData';

const ExperienceItem = ({ title, company, client, startDate, endDate, description, envTechnique, isLast }) => {
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
            <p style={{ color: 'var(--color-text-muted)', marginBottom: envTechnique ? '0.5rem' : '0' }}>{description}</p>
            {envTechnique && (
                <p style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>Env. Technique : </span>{envTechnique}
                </p>
            )}
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

const SideProjectItem = ({ title, status, stack, description }) => (
    <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-primary)', position: 'relative' }}>
        <div style={{
            position: 'absolute',
            left: '-5px',
            top: '0.5rem',
            width: '8px',
            height: '8px',
            background: 'var(--color-primary)',
            borderRadius: '50%'
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', margin: 0 }}>{title}</h4>
            {status && (
                <span style={{
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    background: 'rgba(234, 179, 8, 0.15)',
                    color: '#eab308',
                    borderRadius: '12px',
                    fontWeight: '600'
                }}>
                    {status}
                </span>
            )}
        </div>
        <p style={{ color: 'var(--color-text)', fontWeight: '500', fontSize: '0.85rem', marginBottom: '0.4rem' }}>{stack}</p>
        {description && <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>{description}</p>}
    </div>
);

const Experience = () => {
    // Grouper par entreprise si désiré, ou afficher la liste ordonnée
    const nticoExps = experiences.filter(e => e.company === 'NTICO');
    const quadraExps = experiences.filter(e => e.company === 'Quadra-Informatique');
    const stageExps = experiences.filter(e => !['NTICO', 'Quadra-Informatique'].includes(e.company));

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
                    {/* Section Expérience */}
                    <div style={{ flex: '2', minWidth: '300px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Briefcase size={32} color="var(--color-primary)" />
                            Expérience
                        </h3>

                        {/* Groupe NTICO */}
                        <ExperienceGroup>
                            {nticoExps.map((exp, i) => (
                                <ExperienceItem
                                    key={exp.id}
                                    title={exp.title}
                                    company={exp.company}
                                    client={exp.client}
                                    startDate={exp.startDate}
                                    endDate={exp.endDate}
                                    description={exp.description}
                                    envTechnique={exp.envTechnique}
                                    isLast={i === nticoExps.length - 1}
                                />
                            ))}
                        </ExperienceGroup>

                        {/* Groupe Quadra */}
                        <ExperienceGroup>
                            {quadraExps.map((exp, i) => (
                                <ExperienceItem
                                    key={exp.id}
                                    title={exp.title}
                                    company={exp.company}
                                    client={exp.client}
                                    startDate={exp.startDate}
                                    endDate={exp.endDate}
                                    description={exp.description}
                                    envTechnique={exp.envTechnique}
                                    isLast={i === quadraExps.length - 1}
                                />
                            ))}
                        </ExperienceGroup>

                        {/* Stages */}
                        {stageExps.map((exp) => (
                            <ExperienceGroup key={exp.id}>
                                <ExperienceItem
                                    title={exp.title}
                                    company={exp.company}
                                    client={exp.client}
                                    startDate={exp.startDate}
                                    endDate={exp.endDate}
                                    description={exp.description}
                                    envTechnique={exp.envTechnique}
                                    isLast={true}
                                />
                            </ExperienceGroup>
                        ))}
                    </div>

                    {/* Section Formation & Side Projects */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <GraduationCap size={28} color="var(--color-primary)" />
                            Formation
                        </h3>
                        {education.map((edu) => (
                            <EducationItem
                                key={edu.id}
                                title={edu.title}
                                establishment={edu.establishment}
                                year={edu.year}
                                description={edu.description}
                            />
                        ))}

                        <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '2rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FolderGit2 size={28} color="var(--color-primary)" />
                            Side Projects
                        </h3>
                        {sideProjects.map((project) => (
                            <SideProjectItem
                                key={project.id}
                                title={project.title}
                                status={project.status}
                                stack={project.stack}
                                description={project.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

