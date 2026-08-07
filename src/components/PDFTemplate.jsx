import React from 'react';
import { personalInfo, getAge, profileSummary, skillCategories, experiences, education, hobbies } from '../data/cvData';
import { calculateDuration } from '../utils/dateUtils';
import profileImg from '../assets/person_cutout.png';


/**
 * PDFTemplate - Template du CV exportable en PDF (A4).
 * Consomme à 100% les données dynamiques de cvData.js et dateUtils.
 * Toujours répercuté automatiquement lors des mises à jour du site.
 */
const PDFTemplate = () => {
    const age = getAge();

    // Couleurs concrètes pour un rendu 100% fiable dans html2canvas
    const C = {
        primary: '#2563eb',
        dark:    '#0f172a',
        text:    '#1e293b',
        muted:   '#475569',
        body:    '#334155',
        bg:      '#f1f5f9',
        bgSoft:  '#f8fafc',
        border:  '#cbd5e1',
        white:   '#ffffff',
    };

    const H = {
        section: {
            fontSize: '10.5pt',
            fontWeight: '700',
            color: C.dark,
            borderBottom: `1.5px solid ${C.border}`,
            paddingBottom: '3px',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        },
    };

    // Séparer les expériences principales et les stages pour un affichage A4 élégant
    const mainExperiences = experiences.filter(e => e.company === 'NTICO' || e.company === 'Quadra-Informatique');
    const stageExperiences = experiences.filter(e => !['NTICO', 'Quadra-Informatique'].includes(e.company));

    return (
        <div
            id="cv-pdf-template"
            aria-hidden="true"
            style={{
                position: 'absolute',
                left: '-9999px',
                top: '0px',
                width: '794px',
                backgroundColor: C.white,
                color: C.text,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: '9.5pt',
                lineHeight: '1.45',
                padding: '32px',
                boxSizing: 'border-box',
            }}
        >
            {/* ─── HEADER ─── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: `2px solid ${C.primary}`, paddingBottom: '14px', marginBottom: '14px' }}>
                {/* Photo de profil (Cadrage net et sans écrasement) */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2.5px solid ${C.primary}`,
                    flexShrink: 0,
                    backgroundColor: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={profileImg}
                        alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 20%',
                            display: 'block',
                        }}
                    />
                </div>

                {/* Identité & Contact */}
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '22pt', fontWeight: '800', color: C.dark, lineHeight: 1.1 }}>
                        {personalInfo.firstName} <span style={{ color: C.primary }}>{personalInfo.lastName.toUpperCase()}</span>
                    </div>
                    <div style={{ fontSize: '11pt', fontWeight: '700', color: C.primary, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {personalInfo.title}
                    </div>
                    <div style={{ fontSize: '8.5pt', color: C.muted, marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                        <span>✉ {personalInfo.email}</span>
                        <span>📍 {personalInfo.location}</span>
                        <span>🚗 {personalInfo.mobility}</span>
                        <span>🔗 {personalInfo.linkedin}</span>
                        <span>💻 {personalInfo.github}</span>
                    </div>
                </div>
            </div>

            {/* ─── PROFIL PROFESSIONNEL DYNAMIQUE ─── */}
            <div style={{ backgroundColor: C.bgSoft, borderLeft: `4px solid ${C.primary}`, padding: '8px 12px', marginBottom: '14px', borderRadius: '0 4px 4px 0' }}>
                <div style={{ fontWeight: '700', color: C.dark, marginBottom: '3px', fontSize: '10pt' }}>PROFIL PROFESSIONNEL</div>
                <div style={{ color: C.body, fontSize: '9pt', lineHeight: '1.4' }}>
                    {profileSummary.full(age)}
                </div>
            </div>

            {/* ─── COMPÉTENCES CLEFS DYNAMIQUES ─── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={H.section}>Compétences Techniques</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {skillCategories.map((cat) => (
                        <div key={cat.id} style={{ flex: 1, backgroundColor: C.bg, padding: '8px', borderRadius: '4px' }}>
                            <div style={{ fontWeight: '700', color: C.primary, fontSize: '8.5pt', marginBottom: '4px' }}>{cat.pdfLabel}</div>
                            <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '8pt', color: C.body }}>
                                {cat.skills.map((skill) => (
                                    <li key={skill} style={{ marginBottom: '2px' }}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── EXPÉRIENCES PROFESSIONNELLES DYNAMIQUES ─── */}
            <div style={{ marginBottom: '14px' }}>
                <div style={H.section}>Expériences Professionnelles</div>

                {mainExperiences.map((exp) => {
                    const duration = calculateDuration(exp.startDate, exp.endDate || new Date());
                    const startStr = new Date(exp.startDate).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
                    const endStr = exp.endDate ? new Date(exp.endDate).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) : "Aujourd'hui";
                    const metaStr = exp.client ? `${exp.company} — Mission Client : ${exp.client}` : exp.company;

                    return (
                        <div key={exp.id} style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                                <span style={{ fontWeight: '700', fontSize: '10pt', color: C.dark }}>{exp.title}</span>
                                <span style={{ fontSize: '8pt', fontWeight: '600', color: C.primary, whiteSpace: 'nowrap' }}>
                                    {startStr} – {endStr} ({duration})
                                </span>
                            </div>
                            <div style={{ fontSize: '8.5pt', color: C.muted, fontWeight: '600', marginBottom: '3px' }}>{metaStr}</div>
                            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8pt', color: C.body, lineHeight: '1.4' }}>
                                {exp.bullets.map((b, i) => (
                                    <li key={i} style={{ marginBottom: '1px' }}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}

                {/* Stages en 2 colonnes en bas des expériences */}
                {stageExperiences.length > 0 && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '6px', borderTop: `1px solid ${C.border}`, paddingTop: '6px' }}>
                        {stageExperiences.map((exp) => {
                            const duration = calculateDuration(exp.startDate, exp.endDate);
                            return (
                                <div key={exp.id} style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '700', fontSize: '9pt', color: C.dark }}>{exp.title}</div>
                                    <div style={{ fontSize: '8pt', color: C.muted, fontWeight: '600' }}>
                                        {exp.company} &bull; {duration}
                                    </div>
                                    <div style={{ fontSize: '7.5pt', color: C.body }}>{exp.description}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ─── FORMATION DYNAMIQUE ─── */}
            <div>
                <div style={H.section}>Formation</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {education.map((edu) => (
                        <div key={edu.id} style={{ flex: 1 }}>
                            <div style={{ fontWeight: '700', fontSize: '8.5pt', color: C.dark }}>{edu.shortTitle}</div>
                            <div style={{ fontSize: '7.5pt', color: C.muted }}>{edu.establishment}</div>
                            <div style={{ fontSize: '7.5pt', color: C.primary, fontWeight: '600' }}>{edu.year}</div>
                            <div style={{ fontSize: '7pt', color: C.body }}>{edu.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── LOISIRS ─── */}
            {hobbies && hobbies.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                    <div style={H.section}>Loisirs</div>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '8pt', color: C.body }}>
                        {hobbies.map((hobby) => (
                            <div key={hobby.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontWeight: '700', color: C.primary }}>•</span>
                                <span><strong style={{ color: C.dark }}>{hobby.name}</strong></span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};


export default PDFTemplate;
