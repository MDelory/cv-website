import React from 'react';
import { getAge, hobbies, experiences } from '../data/cvData';
import { getAvailabilityStatus } from '../utils/dateUtils';
import { Code, Server, MapPin, Car, Dumbbell, Utensils, Heart } from 'lucide-react';
import { FaChessBishop } from 'react-icons/fa6';
import ParticleBackground from './ParticleBackground';
import profileImg from '../assets/person_cutout.png';

const hobbyIconMap = {
    Dumbbell,
    Utensils,
    FaChessBishop,
    Crown: FaChessBishop,
};

const iosStatusConfigs = {
    green: {
        bg: 'rgba(48, 209, 88, 0.08)',
        border: 'rgba(48, 209, 88, 0.25)',
        ledColor: '#30d158',
        glow: '0 0 7px rgba(48, 209, 88, 0.75)',
        textColor: '#30d158'
    },
    orange: {
        bg: 'rgba(255, 159, 10, 0.08)',
        border: 'rgba(255, 159, 10, 0.25)',
        ledColor: '#ff9f0a',
        glow: '0 0 7px rgba(255, 159, 10, 0.75)',
        textColor: '#ff9f0a'
    },
    red: {
        bg: 'rgba(255, 69, 58, 0.08)',
        border: 'rgba(255, 69, 58, 0.25)',
        ledColor: '#ff453a',
        glow: '0 0 7px rgba(255, 69, 58, 0.75)',
        textColor: '#ff453a'
    }
};

const About = () => {
    const age = getAge();
    const availability = getAvailabilityStatus(experiences);
    const config = iosStatusConfigs[availability.color] || iosStatusConfigs.green;

    return (
        <section id="about" style={{ position: 'relative', backgroundColor: 'var(--color-bg-secondary)', overflow: 'hidden' }}>
            <ParticleBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2>À propos de moi</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start',
                    marginTop: '3rem'
                }}>
                    {/* Colonne Gauche : Identité, Statut & Logistique */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '380px',
                        margin: '0 auto',
                        width: '100%'
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
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
                                    height: '115%',
                                    objectFit: 'cover',
                                    objectPosition: 'center top',
                                    transform: 'scale(1.05) translateY(-8%)',
                                    transformOrigin: 'top center',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.10) translateY(-8%)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1.05) translateY(-8%)'}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10, 10, 10, 0.5) 0%, transparent 40%)',
                                pointerEvents: 'none'
                            }} />
                        </div>

                        {/* Status de disponibilité informatif & discret sous la photo */}
                        <div
                            data-testid="availability-badge"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                padding: '0.3rem 0.75rem',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                marginTop: '1.2rem',
                                marginBottom: '1.2rem'
                            }}
                        >
                            <span
                                data-testid="led-indicator"
                                className="ios-led-dot"
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: config.ledColor,
                                    boxShadow: config.glow
                                }}
                            />
                            <span style={{
                                fontSize: '0.78rem',
                                fontWeight: '500',
                                color: 'var(--color-text-muted)',
                                letterSpacing: '0.01em'
                            }}>
                                {availability.label}
                            </span>
                        </div>

                        {/* Cartes Informations Logistiques */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0.8rem',
                            width: '100%'
                        }}>
                            <div style={{
                                padding: '1rem 0.8rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <MapPin size={26} color="var(--color-primary)" style={{ marginBottom: '0.4rem' }} />
                                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.15rem' }}>Localisation</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>Métropole Lilloise</p>
                            </div>
                            <div style={{
                                padding: '1rem 0.8rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Car size={26} color="var(--color-primary)" style={{ marginBottom: '0.4rem' }} />
                                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.15rem' }}>Mobilité</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>Permis B - véhiculé</p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite : Biographie, piliers techniques & loisirs */}
                    <div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                            Développeur Back-end Senior de {age} ans fort d'une solide expertise en développement back-end et architectures distribuées. Principalement axé sur l'écosystème <strong style={{ color: 'var(--color-accent)' }}>Java (versions 8, 11, 17, 21, 25)</strong> et Spring Boot 3, je maîtrise également d'autres langages back-end tels que <strong style={{ color: 'var(--color-primary)' }}>PHP (Symfony), Node.js et Python</strong>.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                            Spécialisé dans la conception d'APIs RESTful résilientes à fort volume, l'écosystème <strong style={{ color: 'var(--color-accent)' }}>Microservices</strong>, l'optimisation des bases de données (Oracle, PostgreSQL, Redis) et le déploiement continu sur GCP et Docker. J'interviens de la phase d'audit et de conception jusqu'à la mise en production.
                        </p>

                        {/* Cartes piliers techniques */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                            <div style={{
                                padding: '1.25rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Server size={28} color="var(--color-primary)" style={{ marginBottom: '0.4rem' }} />
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Backend</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Java, PHP, Node.js, Python</p>
                            </div>
                            <div style={{
                                padding: '1.25rem',
                                background: 'rgba(10, 10, 10, 0.8)',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                textAlign: 'center',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <Code size={28} color="var(--color-primary)" style={{ marginBottom: '0.4rem' }} />
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Code Propre</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Maintenable & Résilient</p>
                            </div>
                        </div>

                        {/* Block Loisirs */}
                        <div style={{
                            marginTop: '1.5rem',
                            padding: '1.25rem 1.5rem',
                            background: 'rgba(10, 10, 10, 0.8)',
                            borderRadius: '8px',
                            border: '1px solid #333',
                            backdropFilter: 'blur(5px)'
                        }}>
                            <h3 style={{
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Heart size={20} color="var(--color-primary)" />
                                <span>Loisirs & Centres d'intérêt</span>
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                gap: '0.8rem'
                            }}>
                                {hobbies.map((hobby) => {
                                    const Icon = hobbyIconMap[hobby.icon] || Heart;
                                    return (
                                        <div
                                            key={hobby.id}
                                            data-testid={`hobby-card-${hobby.id}`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.6rem 0.8rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: '6px',
                                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'default'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                            }}
                                        >
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '34px',
                                                height: '34px',
                                                borderRadius: '50%',
                                                background: 'rgba(59, 130, 246, 0.15)',
                                                color: 'var(--color-accent)',
                                                flexShrink: 0
                                            }}>
                                                <Icon size={18} color="var(--color-accent)" />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'white' }}>{hobby.name}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



