import React, { useState } from 'react';
import { IconHeart, IconArrowRight, IconBoat, IconBook, IconShield, IconSparkles } from './Icons';
import { IMPACT_METRICS } from '../data/mockData';

export const Hero = ({ onOpenHelpModal, onExploreCommunities, onQuickPledge }) => {
  const [pledgeAmount, setPledgeAmount] = useState(75);

  const pledgePresets = [
    { amount: 35, label: "Kit Escolar", impact: "1 escolar recibe 4 cuadernos, lápices y colores a prueba de humedad." },
    { amount: 75, label: "Mochila + Kit", impact: "1 mochila impermeable y útiles protegidos para viajar en canoa." },
    { amount: 150, label: "Padrinazgo Anual", impact: "Útiles de todo el año, 3 libros infantiles y calzado para 1 estudiante." },
    { amount: 450, label: "Rincón de Lectura", impact: "30 libros de literatura y estantería de madera para un aula rural." }
  ];

  const currentPreset = pledgePresets.find(p => p.amount === pledgeAmount) || pledgePresets[1];

  return (
    <section id="inicio" className="hero-section">
      {/* Luminous Ambient Background Glows */}
      <div className="hero-ambient-glow-green"></div>
      <div className="hero-ambient-glow-sunset"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Vision & Actions */}
          <div className="hero-content">
            <div className="hero-badge animate-pulse-glow">
              <span className="badge-glow-dot"></span>
              <span>Región Loreto, Perú • Amazonía Rural</span>
              <span className="badge-fluvial-tag">Expediciones Fluviales Activas</span>
            </div>

            <h1 className="hero-title">
              Sembrando oportunidades, <br />
              <span className="hero-title-highlight gradient-text-forest">construyendo futuros.</span>
            </h1>

            <p className="hero-description">
              En el corazón de la selva de Loreto, donde los caminos son ríos y las distancias se miden en horas de navegación, 
              <strong> RAÍCES DEL FUTURO</strong> une voluntades de todo el país para equipar escuelas rurales, crear bibliotecas flotantes y garantizar que ningún niño amazónico abandone sus sueños.
            </p>

            {/* Main Action Buttons */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-accent btn-lg hero-cta-btn animate-pulse-glow"
                onClick={onOpenHelpModal}
              >
                <IconHeart size={20} fill={true} />
                <span>Quiero ayudar ahora</span>
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

            {/* Quick Impact Simulator (WOW feature) */}
            <div className="hero-simulator-box card-base glass-card">
              <div className="simulator-header">
                <span className="sim-tag">
                  <IconSparkles size={14} />
                  <span>Simulador de Impacto Rápido</span>
                </span>
                <strong className="sim-amount-display">S/. {pledgeAmount}</strong>
              </div>

              <div className="sim-presets-row">
                {pledgePresets.map((preset) => (
                  <button
                    key={preset.amount}
                    type="button"
                    className={`sim-preset-pill ${pledgeAmount === preset.amount ? 'active' : ''}`}
                    onClick={() => setPledgeAmount(preset.amount)}
                  >
                    <span>{preset.label}</span>
                    <small>S/.{preset.amount}</small>
                  </button>
                ))}
              </div>

              <div className="sim-impact-result">
                <div className="impact-check-icon">
                  <IconHeart size={16} fill={true} />
                </div>
                <p className="impact-text">
                  <strong>Con este aporte:</strong> {currentPreset.impact}
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm sim-direct-btn"
                  onClick={() => onQuickPledge(pledgeAmount)}
                >
                  Apadrinar este impacto
                </button>
              </div>
            </div>

            {/* Trust factors bar */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <IconShield size={18} className="trust-icon" />
                <span>Entrega nominal en manos del escolar</span>
              </div>
              <div className="trust-item">
                <IconBoat size={18} className="trust-icon" />
                <span>Rutas supervisadas con los Apus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with floating cards */}
          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                alt="Niños escolares de una comunidad amazónica en Loreto sonriendo con libros nuevos"
                className="hero-main-img"
              />
              <div className="hero-card-overlay">
                <div className="overlay-badge">
                  <IconBoat size={18} />
                  <span>Cuencas del Río Nanay, Amazonas y Ucayali</span>
                </div>
                <p className="overlay-caption">
                  «La educación no es un privilegio de la ciudad; es el derecho de cada niño amazónico.»
                </p>
              </div>
            </div>

            {/* Floating Live Badge 1 */}
            <div className="floating-stat-card glass-card">
              <div className="floating-stat-icon">
                <IconBook size={24} />
              </div>
              <div>
                <strong className="floating-stat-val">+3,400 Kits Escolares</strong>
                <span className="floating-stat-sub">Entregados en 18 caseríos</span>
              </div>
            </div>

            {/* Floating Live Badge 2 */}
            <div className="floating-volunteer-card glass-card">
              <div className="avatar-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Voluntaria" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Docente" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Donante" />
              </div>
              <div className="floating-vol-text">
                <strong>140+ Voluntarios</strong>
                <span>Navegando por la educación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Counter Strip */}
        <div className="hero-impact-strip card-base glass-card">
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
          padding-top: 140px;
          padding-bottom: 6rem;
          background: linear-gradient(180deg, #f7f3ec 0%, #faf6f0 55%, #ffffff 100%);
          overflow: hidden;
        }
        .hero-ambient-glow-green {
          position: absolute;
          top: 5%;
          right: -8%;
          width: 580px;
          height: 580px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(82, 183, 136, 0.28) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }
        .hero-ambient-glow-sunset {
          position: absolute;
          bottom: 10%;
          left: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(231, 111, 81, 0.16) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.18fr 0.92fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 4.5rem;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(82, 183, 136, 0.4);
          color: var(--color-primary);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 1.4rem;
          box-shadow: 0 4px 14px rgba(10, 35, 24, 0.06);
          flex-wrap: wrap;
        }
        .badge-glow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-emerald);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--color-emerald);
        }
        .badge-fluvial-tag {
          font-size: 0.72rem;
          background: var(--color-mint-light);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
          color: var(--color-primary-dark);
        }
        .hero-title {
          font-size: 3.6rem;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin-bottom: 1.4rem;
          color: var(--color-primary-dark);
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
        .hero-title-highlight {
          font-style: italic;
          display: inline-block;
        }
        .hero-description {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2.2rem;
          max-width: 640px;
        }
        .hero-description strong {
          color: var(--color-primary-dark);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-bottom: 2.2rem;
        }
        .hero-cta-btn {
          box-shadow: var(--shadow-sunset);
        }
        /* Simulator Card */
        .hero-simulator-box {
          padding: 1.4rem 1.6rem;
          margin-bottom: 2.2rem;
          border: 1px solid rgba(82, 183, 136, 0.35);
        }
        .simulator-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.9rem;
        }
        .sim-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--color-forest);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sim-amount-display {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--color-terracotta);
          line-height: 1;
        }
        .sim-presets-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .sim-preset-pill {
          flex: 1;
          min-width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-md);
          background: #f7f3ec;
          border: 1.5px solid var(--border-light);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sim-preset-pill span {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .sim-preset-pill small {
          font-size: 0.74rem;
          color: var(--color-forest-medium);
          font-weight: 800;
        }
        .sim-preset-pill.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        .sim-preset-pill.active span, .sim-preset-pill.active small {
          color: #ffffff;
        }
        .sim-impact-result {
          background: #ffffff;
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border: 1px solid var(--border-light);
        }
        @media (max-width: 600px) {
          .sim-impact-result {
            flex-direction: column;
            align-items: flex-start;
          }
          .sim-direct-btn {
            width: 100%;
          }
        }
        .impact-check-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-mint-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .impact-text {
          font-size: 0.85rem;
          color: var(--text-main);
          line-height: 1.4;
          flex-grow: 1;
        }
        .impact-text strong {
          color: var(--color-forest);
        }
        .sim-direct-btn {
          white-space: nowrap;
          flex-shrink: 0;
        }
        /* Trust bar */
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
          gap: 0.55rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .trust-icon {
          color: var(--color-emerald);
        }
        /* Visual side */
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
          height: 520px;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }
        .hero-image-card:hover .hero-main-img {
          transform: scale(1.03);
        }
        .hero-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem 1.8rem;
          background: linear-gradient(180deg, rgba(10, 35, 24, 0) 0%, rgba(10, 35, 24, 0.92) 100%);
          color: #ffffff;
        }
        .overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(10px);
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .overlay-caption {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.45;
          color: #f7fbf8;
        }
        .floating-stat-card {
          position: absolute;
          top: -24px;
          left: -24px;
          padding: 1rem 1.4rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 0.95rem;
          animation: floatGentle 4.5s ease-in-out infinite;
          border: 1px solid rgba(82, 183, 136, 0.4);
        }
        .floating-stat-icon {
          width: 48px;
          height: 48px;
          background: var(--color-mint-light);
          color: var(--color-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floating-stat-val {
          display: block;
          font-size: 1.15rem;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }
        .floating-stat-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .floating-volunteer-card {
          position: absolute;
          bottom: -24px;
          right: -18px;
          padding: 0.95rem 1.35rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 0.95rem;
          border: 1px solid rgba(82, 183, 136, 0.4);
        }
        .avatar-group {
          display: flex;
        }
        .avatar-group img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          margin-left: -10px;
          object-fit: cover;
        }
        .avatar-group img:first-child {
          margin-left: 0;
        }
        .floating-vol-text strong {
          display: block;
          font-size: 0.98rem;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }
        .floating-vol-text span {
          font-size: 0.76rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .floating-stat-card, .floating-volunteer-card {
            display: none;
          }
        }
        /* Impact Strip */
        .hero-impact-strip {
          padding: 2.4rem 2.8rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          border: 1px solid var(--border-light);
        }
        @media (max-width: 900px) {
          .hero-impact-strip {
            grid-template-columns: repeat(2, 1fr);
            padding: 2rem;
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
          gap: 0.3rem;
          border-right: 1px solid var(--border-light);
          padding-right: 1.2rem;
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
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
        }
        .metric-label {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .metric-detail {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};
