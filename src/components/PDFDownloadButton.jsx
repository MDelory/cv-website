import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

const PDFDownloadButton = ({ className = '', style = {}, variant = 'primary' }) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try {
            const html2pdfModule = await import('html2pdf.js');
            const html2pdf = html2pdfModule.default || html2pdfModule;

            const source = document.getElementById('cv-pdf-template');
            if (!source) {
                console.error('PDFTemplate introuvable dans le DOM.');
                return;
            }

            // Cloner le template et l'injecter dans le DOM en position visible
            // mais derrière le fond sombre de la page (z-index: -1)
            // html2canvas capture l'élément d'après ses coordonnées absolues
            const clone = source.cloneNode(true);
            clone.removeAttribute('id'); // éviter duplications d'ID

            clone.style.position = 'fixed';
            clone.style.top = '0px';
            clone.style.left = '0px';
            clone.style.width = '794px'; // ~210mm @ 96dpi
            clone.style.backgroundColor = '#ffffff';
            clone.style.color = '#1e293b';
            clone.style.zIndex = '-1'; // derrière le fond sombre du site
            clone.style.pointerEvents = 'none';
            clone.style.opacity = '1';
            clone.style.visibility = 'visible';
            clone.style.display = 'block';
            clone.style.padding = '32px';

            document.body.appendChild(clone);

            // Laisser le navigateur effectuer le rendu du clone
            await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

            const opt = {
                margin:      0,
                filename:    'CV_Martin_Delory_Java_Backend.pdf',
                image:       { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff',
                    windowWidth: 794,
                    scrollX: 0,
                    scrollY: 0,
                },
                jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait', hotfixes: ['px_scaling'] }
            };

            await html2pdf().set(opt).from(clone).save();

            document.body.removeChild(clone);
        } catch (error) {
            console.error('Erreur génération PDF :', error);
        } finally {
            setLoading(false);
        }
    };

    const isNav = variant === 'nav';

    return (
        <button
            onClick={handleDownload}
            disabled={loading}
            className={`btn-pdf ${className}`}
            title="Télécharger le CV au format PDF"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: isNav ? '0.45rem 1rem' : '0.85rem 1.8rem',
                fontSize: isNav ? '0.85rem' : '1.05rem',
                fontWeight: '600',
                borderRadius: '6px',
                border: '1px solid var(--color-primary)',
                backgroundColor: isNav ? 'rgba(59, 130, 246, 0.15)' : 'var(--color-primary)',
                color: '#ffffff',
                cursor: loading ? 'wait' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isNav ? 'none' : '0 4px 14px rgba(59, 130, 246, 0.4)',
                opacity: loading ? 0.8 : 1,
                ...style
            }}
            onMouseEnter={(e) => {
                if (!loading) {
                    e.currentTarget.style.backgroundColor = isNav ? 'var(--color-primary)' : 'var(--color-primary-dark)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }
            }}
            onMouseLeave={(e) => {
                if (!loading) {
                    e.currentTarget.style.backgroundColor = isNav ? 'rgba(59, 130, 246, 0.15)' : 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }
            }}
        >
            {loading ? (
                <>
                    <Loader2 size={isNav ? 16 : 20} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Génération PDF...</span>
                </>
            ) : (
                <>
                    <Download size={isNav ? 16 : 20} />
                    <span>Télécharger CV (PDF)</span>
                </>
            )}
        </button>
    );
};

export default PDFDownloadButton;
