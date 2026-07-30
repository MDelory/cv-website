import React from 'react';
import { Database, Server, Shield } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { skillCategories } from '../data/cvData';

const iconMap = {
    backend: Server,
    database: Database,
    devops: Shield,
};

const SkillCard = ({ icon: Icon, title, skills }) => (
    <div style={{
        padding: '2rem',
        background: 'var(--color-bg-secondary)',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{
            display: 'inline-flex',
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            marginBottom: '1.5rem'
        }}>
            <Icon size={32} color="var(--color-primary)" />
        </div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{title}</h3>
        <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)' }}>
            {skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--color-primary)',
                        borderRadius: '50%',
                        marginRight: '10px'
                    }} />
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" style={{ backgroundColor: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
            <ParticleBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2>Compétences Techniques</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {skillCategories.map((cat) => {
                        const Icon = iconMap[cat.id] || Server;
                        return (
                            <SkillCard
                                key={cat.id}
                                icon={Icon}
                                title={cat.title}
                                skills={cat.skills}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
