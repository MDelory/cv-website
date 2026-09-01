import React from 'react';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import PDFDownloadButton from './PDFDownloadButton';
import { personalInfo } from '../data/cvData';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            background: 'radial-gradient(circle at center, var(--color-bg-secondary) 0%, var(--color-bg) 100%)',
            overflow: 'hidden',
            padding: '7rem 1rem 5rem'
        }}>
            <ParticleBackground />
            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '900px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h4 style={{
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    marginBottom: '0.75rem',
                    fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                    fontWeight: '600'
                }}>
                    {personalInfo.title}
                </h4>
                <h1 style={{
                    fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
                    marginBottom: '1rem',
                    lineHeight: '1.1',
                    wordBreak: 'break-word'
                }}>
                    Martin <span style={{ color: 'var(--color-primary)' }}>Delory</span>
                </h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: 'var(--color-text-muted)',
                    maxWidth: '650px',
                    margin: '0 auto 1.5rem',
                    lineHeight: '1.6',
                    padding: '0 0.5rem'
                }}>
                    Conception de systèmes back-end robustes, évolutifs et sécurisés.
                    Spécialiste <strong style={{ color: 'var(--color-accent)' }}>Java (8 → 21/25)</strong>, Spring Boot 3 et architectures <strong style={{ color: 'var(--color-accent)' }}>Microservices</strong>.
                </p>

                {/* CTA PDF Download */}
                <div style={{ marginBottom: '2rem' }}>
                    <PDFDownloadButton variant="primary" />
                </div>

                <div style={{
                    width: '100%',
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    padding: '0 0.5rem'
                }}>

                    <svg
                        viewBox="0 0 800 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            width: '100%',
                            maxHeight: '180px',
                            height: 'auto',
                            display: 'block'
                        }}
                    >
                        <defs>
                            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Central Hub */}
                        <path d="M400 0 V40" stroke="var(--color-primary)" strokeWidth="2" filter="url(#neon-glow)" />
                        <circle cx="400" cy="40" r="4" fill="var(--color-bg)" stroke="var(--color-primary)" strokeWidth="2" />

                        {/* --- LEVEL 1 BRANCHES --- */}
                        <path d="M400 40 L280 40 L260 60" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.8 }} />
                        <path d="M400 40 L520 40 L540 60" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.8 }} />

                        {/* --- LEVEL 2 BRANCHES (Complex) --- */}
                        {/* Bottom Center */}
                        <path d="M400 40 L400 90 L360 120" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.7 }} />
                        <circle cx="360" cy="120" r="3" fill="var(--color-primary)" />
                        <path d="M400 90 L440 120" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.7 }} />
                        <circle cx="440" cy="120" r="3" fill="var(--color-primary)" />

                        {/* Far Left Complex */}
                        <path d="M260 60 L180 60 L160 90 L100 90" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.6 }} />
                        <circle cx="100" cy="90" r="3" fill="var(--color-primary)" />
                        {/* Branch off Far Left */}
                        <path d="M180 60 L180 120 L220 150" stroke="var(--color-primary)" strokeWidth="1" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.5 }} />
                        <circle cx="220" cy="150" r="2" fill="var(--color-primary)" />

                        {/* Far Right Complex */}
                        <path d="M540 60 L620 60 L640 90 L700 90" stroke="var(--color-primary)" strokeWidth="2" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.6 }} />
                        <circle cx="700" cy="90" r="3" fill="var(--color-primary)" />
                        {/* Branch off Far Right */}
                        <path d="M620 60 L620 120 L580 150" stroke="var(--color-primary)" strokeWidth="1" fill="none" filter="url(#neon-glow)" style={{ opacity: 0.5 }} />
                        <circle cx="580" cy="150" r="2" fill="var(--color-primary)" />

                        {/* --- DECORATIVE DETAILS --- */}
                        <path d="M280 40 L280 70" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" style={{ opacity: 0.5 }} />
                        <circle cx="280" cy="70" r="2" fill="var(--color-primary)" style={{ opacity: 0.5 }} />
                        <path d="M520 40 L520 70" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" style={{ opacity: 0.5 }} />
                        <circle cx="520" cy="70" r="2" fill="var(--color-primary)" style={{ opacity: 0.5 }} />

                        {/* --- ANIMATIONS --- */}
                        {/* Main Entry */}
                        <circle cx="400" cy="0" r="2" fill="white">
                            <animate attributeName="cy" from="0" to="40" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Center Split */}
                        <circle cx="400" cy="40" r="2" fill="white">
                            <animate attributeName="cy" values="40;90;120" keyTimes="0;0.6;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
                            <animate attributeName="cx" values="400;400;360" keyTimes="0;0.6;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="400" cy="40" r="2" fill="white">
                            <animate attributeName="cy" values="40;90;120" keyTimes="0;0.6;1" dur="3s" begin="1.5s" repeatCount="indefinite" />
                            <animate attributeName="cx" values="400;400;440" keyTimes="0;0.6;1" dur="3s" begin="1.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                        </circle>

                        {/* Left Path */}
                        <circle cx="400" cy="40" r="2" fill="white">
                            <animate attributeName="cx" values="400;280;260;180;160;100" keyTimes="0;0.2;0.3;0.5;0.6;1" dur="4s" begin="0.2s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="40;40;60;60;90;90" keyTimes="0;0.2;0.3;0.5;0.6;1" dur="4s" begin="0.2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0.2s" repeatCount="indefinite" />
                        </circle>

                        {/* Right Path */}
                        <circle cx="400" cy="40" r="2" fill="white">
                            <animate attributeName="cx" values="400;520;540;620;640;700" keyTimes="0;0.2;0.3;0.5;0.6;1" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="40;40;60;60;90;90" keyTimes="0;0.2;0.3;0.5;0.6;1" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;1;0" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </div>

            <a
                href="#about"
                aria-label="Faire défiler vers le bas"
                style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite',
                    color: 'var(--color-primary)',
                    zIndex: 2,
                    cursor: 'pointer',
                    padding: '0.5rem'
                }}
            >
                <ArrowDown size={28} color="var(--color-primary)" />
            </a>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-8px) translateX(-50%); }
          60% { transform: translateY(-4px) translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
