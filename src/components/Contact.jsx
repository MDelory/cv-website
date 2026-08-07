import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--color-bg-secondary)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
            <ParticleBackground />
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 style={{ marginBottom: '2rem' }}>Me Contacter</h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                }}>
                    Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou un projet, je ferai de mon mieux pour vous répondre !
                </p>

                <a href="mailto:delorymartin@gmail.com" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                    <Mail size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    Contactez-moi
                </a>

                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a
                        href="https://github.com/MDelory?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Profil GitHub de Martin Delory (ouvre dans un nouvel onglet)"
                        style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://fr.linkedin.com/in/martin-delory"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Profil LinkedIn de Martin Delory (ouvre dans un nouvel onglet)"
                        style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                        <FaLinkedin size={32} />
                    </a>
                </div>


                <footer style={{ marginTop: '4rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Martin Delory. Construit avec React & Vite. Propulsé par Antigravity AI</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
