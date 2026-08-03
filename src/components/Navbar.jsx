import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import PDFDownloadButton from './PDFDownloadButton';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Accueil', href: '#home', id: 'home' },
        { name: 'À propos', href: '#about', id: 'about' },
        { name: 'Expérience', href: '#experience', id: 'experience' },
        { name: 'Compétences', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    // Scroll listener for header style changes & active section detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver for active section tracking
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sectionElements = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);

        sectionElements.forEach(el => observer.observe(el));

        return () => {
            sectionElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Handle Escape key & window resize
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 868 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
                    MD<span className="logo-dot">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <ul className="nav-links-desktop">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        {link.name}
                                        {isActive && <span className="active-indicator" />}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <PDFDownloadButton variant="nav" />
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className={`nav-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={(e) => {
                    if (e.target === e.currentTarget) setIsMobileMenuOpen(false);
                }}
            >
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-links">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li
                                    key={link.name}
                                    style={{
                                        animationDelay: isMobileMenuOpen ? `${0.1 + index * 0.08}s` : '0s'
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                        <li style={{ marginTop: '1rem', animationDelay: isMobileMenuOpen ? '0.5s' : '0s' }}>
                            <PDFDownloadButton variant="primary" />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
