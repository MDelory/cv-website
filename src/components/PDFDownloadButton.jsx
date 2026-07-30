import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

const PDFDownloadButton = ({ className = '', style = {}, variant = 'primary' }) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);

        // 1. Overlay opaque qui cache la page à l'utilisateur (z-index 100000)
        //    html2canvas ne capture PAS cet élément : il cible uniquement #cv-pdf-template
        const overlay = document.createElement('div');
        overlay.style.cssText = [
            'position:fixed', 'inset:0',
            'z-index:100000',
            'background:rgba(10,10,10,0.96)',
            'display:flex', 'flex-direction:column',
            'align-items:center', 'justify-content:center',
            'gap:16px', 'color:#ffffff',
            'font-family:Arial,sans-serif',
            'font-size:1rem', 'font-weight:600',
            'pointer-events:none',
        ].join(';');
        overlay.innerHTML = '<div style="font-size:2.5rem">⏳</div><div>Génération du CV en PDF…</div><div style="font-size:0.8rem;opacity:0.6">Veuillez patienter quelques secondes</div>';
        document.body.appendChild(overlay);

        try {
            // 2. Passer le template en mode "capture" (position fixed z-index:99999)
            //    via l'event React
            window.dispatchEvent(new Event('pdf:capture:start'));

            // 3. Attendre que React re-rende le template en position visible
            await new Promise(r => setTimeout(r, 600));

            const element = document.getElementById('cv-pdf-template');
            if (!element) throw new Error('Element #cv-pdf-template introuvable.');

            // Vérifier que l'élément a bien des dimensions
            const rect = element.getBoundingClientRect();
            console.log('[PDF] Element rect :', rect);
            if (rect.width === 0 || rect.height === 0) {
                throw new Error(`Element a des dimensions nulles : ${JSON.stringify(rect)}`);
            }

            // 4. Charger html2pdf dynamiquement
            const html2pdfModule = await import('html2pdf.js');
            const html2pdf = html2pdfModule.default || html2pdfModule;

            // 5. Générer et télécharger le PDF
            await html2pdf().set({
                margin:      [8, 8, 8, 8],
                filename:    'CV_Martin_Delory_Java_Backend.pdf',
                image:       { type: 'jpeg', quality: 0.97 },
                html2canvas: {
                    scale:           2,
                    useCORS:         true,
                    allowTaint:      true,
                    logging:         false,
                    backgroundColor: '#ffffff',
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            }).from(element).save();

        } catch (err) {
            console.error('[PDF] Erreur génération :', err);
            alert('Erreur lors de la génération du PDF. Consultez la console pour plus de détails.');
        } finally {
            // 6. Restaurer le template en position masquée
            window.dispatchEvent(new Event('pdf:capture:done'));
            // 7. Supprimer l'overlay
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            setLoading(false);
        }
    };

    const isNav = variant === 'nav';

    return (
        <button
            onClick={handleDownload}
            disabled={loading}
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
                backgroundColor: isNav ? 'rgba(59,130,246,0.15)' : 'var(--color-primary)',
                color: '#ffffff',
                cursor: loading ? 'wait' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isNav ? 'none' : '0 4px 14px rgba(59,130,246,0.4)',
                opacity: loading ? 0.8 : 1,
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
                    e.currentTarget.style.backgroundColor = isNav ? 'rgba(59,130,246,0.15)' : 'var(--color-primary)';
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
