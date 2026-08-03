import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PDFDownloadButton = ({ className = '', style = {}, variant = 'primary' }) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (loading) return;
        setLoading(true);

        let container = null;
        try {
            const source = document.getElementById('cv-pdf-template');
            if (!source) {
                throw new Error("L'élément modèle PDF (#cv-pdf-template) est introuvable.");
            }

            // 1. Créer un conteneur temporaire pour la capture
            // Positionné en absolute top:0 left:0 sous le reste de la page (z-index: -99999)
            // pour être invisible à l'écran mais parfaitement calculable par html2canvas
            container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.top = '0px';
            container.style.left = '0px';
            container.style.width = '794px';
            container.style.zIndex = '-99999';
            container.style.opacity = '1';
            container.style.pointerEvents = 'none';
            container.style.backgroundColor = '#ffffff';

            // 2. Cloner le template dans le conteneur
            const clone = source.cloneNode(true);
            clone.removeAttribute('id');
            clone.style.position = 'static';
            clone.style.left = '0px';
            clone.style.top = '0px';
            clone.style.width = '794px';
            clone.style.visibility = 'visible';
            clone.style.opacity = '1';
            clone.style.display = 'block';

            container.appendChild(clone);
            document.body.appendChild(container);

            // 3. Attendre que les images (photo de profil) du clone soient bien chargées
            const images = Array.from(clone.getElementsByTagName('img'));
            await Promise.all(
                images.map((img) => {
                    if (img.complete && img.naturalWidth !== 0) return Promise.resolve();
                    return new Promise((resolve) => {
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                })
            );

            // Petite pause pour garantir que le moteur de rendu du navigateur a peint l'élément
            await new Promise((r) => setTimeout(r, 150));

            // 4. Capture haute définition via html2canvas
            const canvas = await html2canvas(clone, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
                windowWidth: 794,
            });

            // 5. Nettoyer le conteneur du DOM immédiatement
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
                container = null;
            }

            // 6. Génération du fichier PDF via jsPDF
            const imgData = canvas.toDataURL('image/jpeg', 0.98);

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();   // 210 mm
            const pdfHeight = pdf.internal.pageSize.getHeight(); // 297 mm

            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            // Si le contenu tient dans une page A4
            if (imgHeight <= pdfHeight) {
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                // Ajuster le ratio pour faire tenir l'ensemble sur 1 seule page A4 propre
                const scaleFactor = pdfHeight / imgHeight;
                const fitWidth = pdfWidth * scaleFactor;
                const marginX = (pdfWidth - fitWidth) / 2;
                pdf.addImage(imgData, 'JPEG', marginX, 0, fitWidth, pdfHeight);
            }

            // Téléchargement du fichier PDF
            pdf.save('CV_Martin_Delory_Java_Backend.pdf');

        } catch (error) {
            console.error('Erreur lors de la génération du PDF :', error);
            alert('Une erreur est survenue lors du téléchargement du PDF. Détails dans la console.');
        } finally {
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
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
                marginLeft: isNav ? '20px' : '0',
                ...style,
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
                    <span>Génération PDF…</span>
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
