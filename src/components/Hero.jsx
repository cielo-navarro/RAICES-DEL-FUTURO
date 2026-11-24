import React from 'react';
import { IconHeart, IconArrowRight, IconBoat, IconUsers, IconBook, IconShield } from './Icons';
import { IMPACT_METRICS } from '../data/mockData';

export const Hero = ({ onOpenHelpModal, onExploreCommunities }) => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-badge animate-pulse-subtle">
              <span className="badge-dot"></span>
              <span>Región Loreto, Perú • Amazonía Rural</span>
            </div>

            <h1 className="hero-title">
              Sembrando oportunidades, <br />
              <span className="hero-title-highlight">construyendo futuros.</span>
            </h1>

            <p className="hero-description">
              En la inmensidad de la selva de Loreto, cientos de escuelas rurales navegan contra la corriente del olvido. 
              <strong> RAÍCES DEL FUTURO</strong> es el puente solidario que conecta a voluntarios, donantes y aliados con las comunidades ribereñas para brindar útiles, libros dignos y acompañamiento pedagógico a cada niño amazónico.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-accent btn-lg hero-cta-btn"
                onClick={onOpenHelpModal}
              >
                <IconHeart size={20} fill={true} />
                <span>Quiero ayudar</span>
              </button>

              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={onExploreCommunities}
              >
                <span>Conocer comunidades</span>
                <IconArrowRight size={18} />
              </button>
            </div>

            {/* Trust factors */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <IconShield size={18} className="trust-icon" />
                <span>Entregas directas en botes fluviales</span>
              </div>
              <div className="trust-item">
                <IconUsers size={18} className="trust-icon" />
                <span>Coordinación directa con Apus y Docentes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                alt="Niños sonrientes de una comunidad amazónica de Loreto recibiendo apoyo educativo"
                className="hero-main-img"
              />
              <div className="hero-card-overlay">
                <div className="overlay-badge">
                  <IconBoat size={18} />
                  <span>Ruta fluvial por el Río Nanay y Amazonas</span>
                </div>
                <p className="overlay-caption">
                  «Cuando un libro llega por el río, una vida entera se llena de luz.»
                </p>
              </div>
            </div>

            {/* Floating floating badge card */}
            <div className="floating-stat-card">
              <div className="floating-stat-icon">
                <IconBook size={24} />
              </div>
              <div>
                <strong className="floating-stat-val">+3,400 kits</strong>
                <span className="floating-stat-sub">entregados a escolares rurales</span>
              </div>
            </div>

            <div className="floating-volunteer-card">
              <div className="avatar-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Voluntaria" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Voluntario" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Donante" />
              </div>
              <div className="floating-vol-text">
                <strong>140+ Voluntarios</strong>
                <span>activos en expediciones</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Bar Strip */}
        <div className="hero-impact-strip">
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-number">{metric.number}</span>
              <span className="metric-label">{metric.label}</span>
              <span className="metric-detail">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 130px;
          padding-bottom: 5rem;
          background: linear-gradient(180deg, #f7f2ea 0%, #faf6f0 50%, #ffffff 100%);
          overflow: hidden;
        }
        .hero-glow-1 {
          position: absolute;
          top: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 198, 157, 0.22) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          bottom: 10%;
          left: -8%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 100, 50, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #eaf5ed;
          border: 1px solid #c7e8d0;
          color: var(--color-primary);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-sage);
          border-radius: 50%;
        }
        .hero-title {
          font-size: 3.4rem;
          line-height: 1.14;
          letter-spacing: -0.02em;
          margin-bottom: 1.4rem;
          color: var(--color-primary-dark);
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.4rem;
          }
        }
        .hero-title-highlight {
          color: var(--color-forest);
          font-style: italic;
          position: relative;
        }
        .hero-description {
          font-size: 1.18rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2.2rem;
          max-width: 620px;
        }
        .hero-description strong {
          color: var(--color-primary-dark);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .hero-cta-btn {
          box-shadow: 0 8px 24px rgba(200, 100, 50, 0.35);
        }
        .hero-trust-bar {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .trust-icon {
          color: var(--color-forest);
        }
        /* Right visual card */
        .hero-visual {
          position: relative;
        }
        .hero-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 4px solid #ffffff;
        }
        .hero-main-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hero-image-card:hover .hero-main-img {
          transform: scale(1.02);
        }
        .hero-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.8rem 1.6rem;
          background: linear-gradient(180deg, rgba(19, 51, 36, 0) 0%, rgba(19, 51, 36, 0.88) 100%);
          color: #ffffff;
        }
        .overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .overlay-caption {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.4;
          color: #f7fbf8;
        }
        .floating-stat-card {
          position: absolute;
          top: -20px;
          left: -20px;
          background: #ffffff;
          padding: 0.9rem 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border: 1px solid var(--border-light);
          animation: floatSlow 4s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .floating-stat-icon {
          width: 44px;
          height: 44px;
          background: var(--color-mint-light);
          color: var(--color-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floating-stat-val {
          display: block;
          font-size: 1.1rem;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }
        .floating-stat-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .floating-volunteer-card {
          position: absolute;
          bottom: -22px;
          right: -15px;
          background: #ffffff;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border: 1px solid var(--border-light);
        }
        .avatar-group {
          display: flex;
        }
        .avatar-group img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          margin-left: -8px;
          object-fit: cover;
        }
        .avatar-group img:first-child {
          margin-left: 0;
        }
        .floating-vol-text strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }
        .floating-vol-text span {
          font-size: 0.74rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .floating-stat-card, .floating-volunteer-card {
            display: none;
          }
        }
        /* Impact Strip */
        .hero-impact-strip {
          background: var(--color-pure-white);
          border-radius: var(--radius-xl);
          padding: 2.2rem 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.8rem;
        }
        @media (max-width: 900px) {
          .hero-impact-strip {
            grid-template-columns: repeat(2, 1fr);
            padding: 1.8rem;
          }
        }
        @media (max-width: 520px) {
          .hero-impact-strip {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .metric-box {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          border-right: 1px solid var(--border-light);
          padding-right: 1rem;
        }
        .metric-box:last-child {
          border-right: none;
        }
        @media (max-width: 900px) {
          .metric-box:nth-child(2) {
            border-right: none;
          }
        }
        @media (max-width: 520px) {
          .metric-box {
            border-right: none;
            padding-right: 0;
            padding-bottom: 1.2rem;
            border-bottom: 1px solid var(--border-light);
          }
          .metric-box:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
        .metric-number {
          font-family: var(--font-heading);
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
        }
        .metric-label {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .metric-detail {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};
