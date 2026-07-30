import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

const PDFDownloadButton = ({ className = '', style = {}, variant = 'primary' }) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try {
            const element = document.getElementById('cv-pdf-template');
            if (!element) {
                console.error("Élément modèle PDF introuvable.");
                setLoading(false);
                return;
            }

            // Temporarily adjust styles for clean rendering
            const originalPosition = element.style.position;
            const originalLeft = element.style.left;
            const originalTop = element.style.top;
            const originalZIndex = element.style.zIndex;

            element.style.position = 'fixed';
            element.style.left = '0px';
            element.style.top = '0px';
            element.style.zIndex = '-9999';

            const html2pdfModule = await import('html2pdf.js');
            const html2pdf = html2pdfModule.default || html2pdfModule;

            const opt = {
                margin:       [6, 6, 6, 6],
                filename:     'CV_Martin_Delory_Java_Backend.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, logging: false },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            await html2pdf().set(opt).from(element).save();

            // Restore original styles
            element.style.position = originalPosition;
            element.style.left = originalLeft;
            element.style.top = originalTop;
            element.style.zIndex = originalZIndex;
        } catch (error) {
            console.error("Erreur lors de la génération du PDF :", error);
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
