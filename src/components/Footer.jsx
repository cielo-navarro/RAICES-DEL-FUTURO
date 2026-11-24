import React from 'react';
import { IconSprout, IconHeart, IconMapPin, IconPhone, IconMail, IconShield } from './Icons';

const currentYear = 2026;

export const Footer = ({ onOpenHelpModal }) => {

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <IconSprout size={24} />
              </div>
              <div>
                <span className="footer-brand-title">RAÍCES DEL FUTURO</span>
                <span className="footer-brand-slogan">«Sembrando oportunidades, construyendo futuros»</span>
              </div>
            </div>

            <p className="footer-desc">
              Iniciativa comunitaria y solidaria orientada a reducir la desigualdad educativa en las comunidades rurales e indígenas de la región Loreto, Perú. Conectamos voluntades para que ningún niño amazónico deje de soñar.
            </p>

            <div className="footer-badge-trust">
              <IconShield size={16} />
              <span>Transparencia y auditoría comunal en cada entrega</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer-col">
            <h5 className="footer-heading">Navegación</h5>
            <ul className="footer-links">
              <li><a href="#inicio" onClick={(e) => handleScrollTo(e, '#inicio')}>Inicio</a></li>
              <li><a href="#mision" onClick={(e) => handleScrollTo(e, '#mision')}>Nuestra Misión</a></li>
              <li><a href="#comunidades" onClick={(e) => handleScrollTo(e, '#comunidades')}>Comunidades Rurales</a></li>
              <li><a href="#necesidades" onClick={(e) => handleScrollTo(e, '#necesidades')}>Lista de Necesidades</a></li>
              <li><a href="#campanas" onClick={(e) => handleScrollTo(e, '#campanas')}>Campañas Fluviales</a></li>
              <li><a href="#resultados" onClick={(e) => handleScrollTo(e, '#resultados')}>Resultados y Testimonios</a></li>
            </ul>
          </div>

          {/* Action links */}
          <div className="footer-col">
            <h5 className="footer-heading">Participación</h5>
            <ul className="footer-links">
              <li><a href="#voluntariado" onClick={(e) => handleScrollTo(e, '#voluntariado')}>Inscripción de Voluntarios</a></li>
              <li><a href="#donaciones" onClick={(e) => handleScrollTo(e, '#donaciones')}>Donar Útiles y Materiales</a></li>
              <li><a href="#donaciones" onClick={(e) => handleScrollTo(e, '#donaciones')}>Padrinazgo Escolar Anual</a></li>
              <li><a href="#donaciones" onClick={(e) => handleScrollTo(e, '#donaciones')}>Puntos de Acopio Iquitos y Lima</a></li>
              <li><a href="#contacto" onClick={(e) => handleScrollTo(e, '#contacto')}>Preguntas Frecuentes (FAQs)</a></li>
            </ul>
          </div>

          {/* Contact summary */}
          <div className="footer-col">
            <h5 className="footer-heading">Sede Loreto</h5>
            <div className="footer-contact-items">
              <div className="f-contact-item">
                <IconMapPin size={18} className="f-icon" />
                <span>Jr. Putumayo N° 458, Iquitos, Loreto, Perú</span>
              </div>
              <div className="f-contact-item">
                <IconPhone size={18} className="f-icon" />
                <span>+51 982 451 092 (Coordinación)</span>
              </div>
              <div className="f-contact-item">
                <IconMail size={18} className="f-icon" />
                <span>contacto@raicesdelfuturo.org.pe</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-accent btn-sm footer-help-btn"
              onClick={onOpenHelpModal}
            >
              <IconHeart size={16} fill={true} />
              <span>Quiero ayudar hoy</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} <strong>RAÍCES DEL FUTURO</strong>. Todos los derechos reservados. Desarrollado con amor y compromiso social por la Amazonía peruana.</p>
          <div className="footer-bottom-links">
            <span>Región Loreto</span>
            <span>•</span>
            <span>Cuencas del Amazonas, Nanay e Itaya</span>
            <span>•</span>
            <span>Perú</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-primary-dark);
          color: #f7fbf8;
          padding: 5rem 0 2rem 0;
          border-top: 1px solid #1f4e38;
        }
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.9fr 1fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.2rem;
        }
        .footer-logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--color-forest) 0%, var(--color-sage) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          display: block;
          line-height: 1.1;
        }
        .footer-brand-slogan {
          font-size: 0.8rem;
          color: var(--color-mint-light);
          font-style: italic;
          display: block;
        }
        .footer-desc {
          font-size: 0.9rem;
          color: #b5cebf;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .footer-badge-trust {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(82, 183, 136, 0.15);
          color: #d8f3dc;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }
        .footer-heading {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 1.2rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 24px;
          height: 2px;
          background-color: var(--color-sage);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #b5cebf;
          font-size: 0.9rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
        }
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: #b5cebf;
          line-height: 1.45;
        }
        .f-icon {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-help-btn {
          width: 100%;
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #92b19e;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-bottom-bar strong {
          color: #ffffff;
        }
        .footer-bottom-links {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }
      `}</style>
    </footer>
  );
};
