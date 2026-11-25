import React from 'react';
import { IconSprout, IconHeart, IconMapPin, IconPhone, IconMail, IconShield } from './Icons';

const currentYear = 2026;

export const Footer = ({ onOpenHelpModal }) => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      {/* Pre-footer CTA band */}
      <div className="footer-cta-band">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">🌿 Únete hoy</span>
            <h3>Cada donación, cada hora de voluntariado<br /><em>transforma una vida en la Amazonía</em></h3>
          </div>
          <button type="button" className="btn btn-gold btn-lg" onClick={onOpenHelpModal}>
            <IconHeart size={20} fill={true} />
            Quiero ayudar ahora
          </button>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-body">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><IconSprout size={22} /></div>
              <div>
                <span className="footer-brand-name">RAÍCES DEL FUTURO</span>
                <span className="footer-brand-tagline">«Sembrando oportunidades, construyendo futuros»</span>
              </div>
            </div>
            <p className="footer-desc">
              Iniciativa comunitaria orientada a reducir la desigualdad educativa en las comunidades rurales e indígenas de Loreto, Perú. Conectamos voluntades para que ningún niño amazónico deje de soñar.
            </p>
            <div className="footer-trust-badge">
              <IconShield size={15} />
              <span>Transparencia y auditoría comunal en cada entrega</span>
            </div>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <h5 className="footer-heading">Navegación</h5>
            <ul className="footer-links">
              {[
                ['#inicio','Inicio'],
                ['#mision','Nuestra Misión'],
                ['#comunidades','Comunidades Rurales'],
                ['#necesidades','Lista de Necesidades'],
                ['#campanas','Campañas Fluviales'],
                ['#resultados','Resultados e Impacto'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} onClick={e => handleScrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div className="footer-col">
            <h5 className="footer-heading">Participación</h5>
            <ul className="footer-links">
              {[
                ['#voluntariado','Inscripción de Voluntarios'],
                ['#donaciones','Donar Útiles y Materiales'],
                ['#donaciones','Padrinazgo Escolar Anual'],
                ['#donaciones','Puntos de Acopio'],
                ['#contacto','Preguntas Frecuentes'],
              ].map(([href, label], i) => (
                <li key={i}><a href={href} onClick={e => handleScrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5 className="footer-heading">Contacto</h5>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <IconMapPin size={16} className="f-icon" />
                <span>Jr. Putumayo N° 458, Iquitos, Loreto, Perú</span>
              </div>
              <div className="footer-contact-item">
                <IconPhone size={16} className="f-icon" />
                <span>+51 982 451 092</span>
              </div>
              <div className="footer-contact-item">
                <IconMail size={16} className="f-icon" />
                <span>contacto@raicesdelfuturo.org.pe</span>
              </div>
            </div>
            <button type="button" className="btn btn-accent btn-sm footer-help-btn" onClick={onOpenHelpModal}>
              <IconHeart size={15} fill={true} />
              Ayudar hoy
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container footer-bottom">
          <p>© {currentYear} <strong>RAÍCES DEL FUTURO</strong> · Todos los derechos reservados · Hecho con ❤ por la Amazonía peruana</p>
          <div className="footer-bottom-tags">
            <span>Región Loreto</span>
            <span>·</span>
            <span>Amazonas · Nanay · Itaya</span>
            <span>·</span>
            <span>Perú</span>
          </div>
        </div>
      </div>

      <style>{`
        /* ── PRE-FOOTER CTA BAND ── */
        .footer-cta-band {
          background: linear-gradient(135deg, #22a05a 0%, #174730 60%, #0d2b1a 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        .footer-cta-band::before {
          content: '🌿🌱🌿🌱🌿';
          position: absolute;
          top: 50%; left: 0;
          transform: translateY(-50%);
          font-size: 6rem;
          opacity: 0.08;
          pointer-events: none;
          letter-spacing: -1rem;
          white-space: nowrap;
        }
        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .footer-cta-inner { flex-direction: column; text-align: center; gap: 2rem; }
        }
        .footer-cta-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a8f0c6;
          margin-bottom: 0.6rem;
        }
        .footer-cta-text h3 {
          font-size: 1.9rem;
          color: #ffffff;
          line-height: 1.3;
        }
        .footer-cta-text h3 em { color: #f9c74f; font-style: italic; }

        /* ── FOOTER BODY ── */
        .footer-body {
          background: #050f09;
          padding-top: 4.5rem;
          border-top: 1px solid rgba(78,203,132,0.1);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 0.9fr 0.9fr 1fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; } }
        @media (max-width: 600px)  { .footer-grid { grid-template-columns: 1fr; gap: 2rem; } }

        .footer-logo {
          display: flex; align-items: center; gap: 0.8rem;
          margin-bottom: 1.2rem;
        }
        .footer-logo-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg, #22a05a, #4ecb84);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(34,160,90,0.35);
          flex-shrink: 0;
        }
        .footer-brand-name {
          display: block;
          font-family: var(--font-h);
          font-size: 1.15rem; font-weight: 800;
          color: #ffffff; line-height: 1.1;
        }
        .footer-brand-tagline {
          display: block;
          font-size: 0.75rem; font-style: italic;
          color: rgba(78,203,132,0.8);
        }
        .footer-desc {
          font-size: 0.88rem; color: rgba(255,255,255,0.45);
          line-height: 1.65; margin-bottom: 1.2rem;
        }
        .footer-trust-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(78,203,132,0.1);
          border: 1px solid rgba(78,203,132,0.2);
          color: rgba(168,240,198,0.9);
          padding: 0.4rem 0.9rem; border-radius: 999px;
          font-size: 0.75rem; font-weight: 600;
        }

        .footer-col h5.footer-heading {
          font-size: 0.95rem; color: #ffffff;
          margin-bottom: 1.2rem;
          position: relative; padding-bottom: 0.6rem;
        }
        .footer-col h5.footer-heading::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 28px; height: 2px;
          background: linear-gradient(90deg, #22a05a, #4ecb84);
          border-radius: 2px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
        .footer-links a {
          color: rgba(255,255,255,0.45);
          font-size: 0.88rem;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .footer-links a:hover { color: #4ecb84; transform: translateX(4px); }

        .footer-contact-list { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.4rem; }
        .footer-contact-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-size: 0.85rem; color: rgba(255,255,255,0.45); line-height: 1.45;
        }
        .f-icon { color: #4ecb84; flex-shrink: 0; margin-top: 2px; }
        .footer-help-btn { width: 100%; }

        .btn-gold {
          background: linear-gradient(135deg, #f5a623, #f9c74f);
          color: #0b1f12;
          border: none;
          font-weight: 900;
          box-shadow: 0 8px 28px rgba(245,166,35,0.4);
        }
        .btn-gold:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 40px rgba(245,166,35,0.55);
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 2rem 0 2.5rem;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
          font-size: 0.8rem; color: rgba(255,255,255,0.3);
        }
        .footer-bottom strong { color: rgba(255,255,255,0.65); }
        .footer-bottom-tags { display: flex; gap: 0.5rem; align-items: center; }
      `}</style>
    </footer>
  );
};
