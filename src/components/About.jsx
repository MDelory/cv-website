import React from 'react';
import { calculateAge } from '../utils/dateUtils';
import { User, Code, Server, MapPin, Car } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import profileImg from '../assets/person_cutout.png';

const About = () => {
    const age = calculateAge('1993-08-12');

    return (
        <section id="about" style={{ position: 'relative', backgroundColor: 'var(--color-bg-secondary)', overflow: 'hidden' }}>
            <ParticleBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2>À propos de moi</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    marginTop: '3rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '360px',
                            aspectRatio: '4/5',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.25)',
                            border: '2px solid rgba(59, 130, 246, 0.4)',
                            background: 'radial-gradient(circle at 50% 35%, #1e293b 0%, #0f172a 60%, #050811 100%)'
                        }}>
                            <img
                                src={profileImg}
                                alt="Martin Delory"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'bottom center',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10, 10, 10, 0.5) 0%, transparent 40%)',
                                pointerEvents: 'none'
                            }} />
                        </div>
                    </div>

                    <div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                            Je suis un Développeur Back-end passionné de {age} ans.
                            Intéressé par les nouvelles téchonologies et méthodes de travail. J'aime proposer des idées qui permettent d'améliorer les processus métiers.
                            Passionné par le développement Back-End et la création d'outils pour faciliter le travail des équipes.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                            Je recherche une entreprise innovante et centrée utilisateur pour répondre au mieux aux besoins client,
                            de son idée à la livraison final du projet, ou participer à l'amélioration d'un projet éxistant.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Server size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Backend</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Java/SpringBoot, PHP, Node.js</p>
                            </div>
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Code size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Code Propre</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Maintenable</p>
                            </div>
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <MapPin size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Localisation</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Métropole Lilloise</p>
                            </div>
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Car size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Mobilité</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Permis B - véhiculé</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
