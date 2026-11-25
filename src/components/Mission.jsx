import React from 'react';
import { IconSprout, IconCheck } from './Icons';

export const Mission = ({ onOpenHelpModal }) => {
  const pillars = [
    {
      emoji: '🎒',
      title: 'Equipamiento Escolar Digno',
      desc: 'Mochilas impermeables, cuadernos resistentes a la humedad, libros ilustrados y kits que permiten a los niños estudiar sin límites materiales.',
    },
    {
      emoji: '👩‍🏫',
      title: 'Acompañamiento Pedagógico',
      desc: 'Voluntarios docentes y universitarios viajan en lancha para dictar talleres de lectura, ciencias, arte y estimulación socioemocional.',
    },
    {
      emoji: '⛵',
      title: 'Logística Fluvial',
      desc: 'Superamos el aislamiento de las cuencas del Amazonas, Nanay e Itaya llevando recursos directamente a los caseríos más alejados.',
    },
    {
      emoji: '🌱',
      title: 'Identidad y Raíces',
      desc: 'Fomentamos literatura bilingüe en lenguas originarias (Kukama, Kichwa) y huertos escolares para fortalecer el arraigo cultural.',
    },
  ];

  return (
    <section id="mision" className="mission-section section-padding">
      {/* Decorative top wave */}
      <div className="mission-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" fill="#050f09"/>
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag"><IconSprout size={15} /> Nuestra Misión</span>
          <h2 className="section-title">
            Transformar la distancia en{' '}
            <span className="gradient-text-forest">oportunidades</span>
          </h2>
          <p className="section-subtitle">
            En la región más extensa del Perú, el río es vida pero también una frontera que aísla.
            Trabajamos cada día para que nacer en la Amazonía no limite los sueños de ningún niño.
          </p>
        </div>

        {/* Big Split Card: Problem vs Solution */}
        <div className="mission-split-card">
          {/* Problem side */}
          <div className="split-side problem-side">
            <div className="side-tag side-tag-red">🔴 La realidad en Loreto</div>
            <h3>La brecha que no podemos ignorar</h3>
            <p>
              En Loreto, más del <strong>70% de las escuelas rurales son multigrado o unidocentes</strong>,
              donde un solo maestro enseña a niños de diferentes edades.
            </p>
            <ul className="problem-list">
              <li>
                <span className="prob-icon">✕</span>
                <span>De 2 a 8 horas navegando para acceder a una librería o posta médica.</span>
              </li>
              <li>
                <span className="prob-icon">✕</span>
                <span>Familias priorizan la alimentación sobre cuadernos y uniformes.</span>
              </li>
              <li>
                <span className="prob-icon">✕</span>
                <span>Las crecientes destruyen los pocos libros y mochilas no impermeables.</span>
              </li>
            </ul>

            {/* Big stat */}
            <div className="mission-big-stat">
              <span className="big-num">70%</span>
              <span className="big-label">de escuelas rurales de Loreto<br />son unidocentes o multigrado</span>
            </div>
          </div>

          {/* Divider */}
          <div className="split-divider">
            <div className="divider-line" />
            <div className="divider-circle">VS</div>
            <div className="divider-line" />
          </div>

          {/* Solution side */}
          <div className="split-side solution-side">
            <div className="side-tag side-tag-green">🟢 Nuestra Respuesta</div>
            <h3>El poder de sembrar en comunidad</h3>
            <p>
              <strong>RAÍCES DEL FUTURO</strong> no es asistencia pasajera; es un modelo participativo
              donde la comunidad, maestros y voluntarios construyen juntos el cambio.
            </p>
            <ul className="solution-list">
              <li>
                <span className="check-icon"><IconCheck size={14} /></span>
                <span>Alianzas con los Apus (líderes comunales) y asociaciones de padres.</span>
              </li>
              <li>
                <span className="check-icon"><IconCheck size={14} /></span>
                <span>Materiales de alta durabilidad adaptados a la humedad amazónica.</span>
              </li>
              <li>
                <span className="check-icon"><IconCheck size={14} /></span>
                <span>Monitoreo constante de la permanencia escolar durante todo el año.</span>
              </li>
            </ul>

            <button type="button" className="btn btn-accent btn-lg mission-cta" onClick={onOpenHelpModal}>
              <IconCheck size={18} />
              Sumarme a la causa
            </button>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-emoji">{p.emoji}</div>
              <h4 className="pillar-title">{p.title}</h4>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width CTA banner */}
        <div className="mission-banner">
          <div className="banner-bg-leaves">🌿🌿🌿</div>
          <div className="banner-content">
            <span className="banner-eyebrow">Sembrando futuro</span>
            <h3>«La educación es la semilla más fértil<br />que podemos plantar en la Amazonía»</h3>
            <p>Únete hoy a esta red de amor y solidaridad por los niños de Loreto.</p>
          </div>
          <button type="button" className="btn btn-white btn-lg" onClick={onOpenHelpModal}>
            Quiero ayudar ahora →
          </button>
        </div>
      </div>

      <style>{`
        .mission-section {
          background: var(--c-cream);
          position: relative;
        }
        .mission-wave-top {
          position: absolute;
          top: -1px; left: 0; width: 100%;
          line-height: 0;
        }
        .mission-wave-top svg { width: 100%; height: 60px; display: block; }

        /* Section title override for light bg */
        .mission-section .section-title { color: var(--c-forest); }
        .mission-section .section-subtitle { color: var(--c-text-muted); }

        /* ── SPLIT CARD ── */
        .mission-split-card {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(5,15,9,0.12);
          margin-bottom: 5rem;
          border: 1px solid rgba(0,0,0,0.07);
        }
        @media (max-width: 900px) {
          .mission-split-card {
            grid-template-columns: 1fr;
          }
          .split-divider { flex-direction: row; padding: 0.5rem 2rem; }
          .divider-line { flex: 1; height: 1px; width: auto !important; }
        }

        .split-side { padding: 3.5rem 3rem; }
        @media (max-width: 600px) { .split-side { padding: 2.5rem 1.75rem; } }

        .problem-side {
          background: #fdfaf7;
          border-right: 1px solid #f0ebe2;
        }
        .solution-side { background: #f4fdf8; }

        .side-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1.2rem;
        }
        .side-tag-red   { background: #fff0ee; color: #c0200a; border: 1px solid #fbb0a4; }
        .side-tag-green { background: #e6faf0; color: #0d2b1a; border: 1px solid #c8f5df; }

        .split-side h3 {
          font-size: 1.6rem;
          color: var(--c-forest);
          margin-bottom: 0.9rem;
        }
        .split-side p {
          font-size: 1rem;
          color: var(--c-text-muted);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .split-side strong { color: var(--c-forest); }

        .problem-list, .solution-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 2rem;
        }
        .problem-list li, .solution-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--c-text);
          line-height: 1.5;
        }
        .prob-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: #fff0ee; color: #dc2626;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 800; flex-shrink: 0; margin-top: 1px;
        }
        .check-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: #e6faf0; color: #0d2b1a;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        .mission-big-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem 1.8rem;
          background: linear-gradient(135deg, #fff0ee, #fde8e4);
          border-radius: 16px;
          border: 1px solid #fbb0a4;
        }
        .big-num {
          font-family: var(--font-h);
          font-size: 3.5rem;
          font-weight: 900;
          color: #c0200a;
          line-height: 1;
          flex-shrink: 0;
        }
        .big-label { font-size: 0.88rem; color: #7c2a1a; line-height: 1.4; font-weight: 600; }

        .split-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
          background: #ffffff;
          border-left: 1px solid #f0ebe2;
          border-right: 1px solid #f0ebe2;
        }
        .divider-line { flex: 1; width: 1px; background: rgba(0,0,0,0.1); }
        .divider-circle {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: var(--c-forest);
          color: #ffffff;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          flex-shrink: 0;
          margin: 0.75rem 0;
        }

        .mission-cta { margin-top: 1rem; }

        /* ── PILLARS ── */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }
        @media (max-width: 1024px) { .pillars-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px)  { .pillars-grid { grid-template-columns: 1fr; } }

        .pillar-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2.2rem 1.8rem;
          border: 1.5px solid rgba(0,0,0,0.07);
          box-shadow: 0 8px 24px rgba(5,15,9,0.06);
          transition: all 0.35s var(--ease);
          position: relative;
          overflow: hidden;
        }
        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #22a05a, #4ecb84);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .pillar-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(5,15,9,0.12); border-color: rgba(34,160,90,0.3); }
        .pillar-card:hover::before { transform: scaleX(1); }

        .pillar-emoji { font-size: 2.4rem; margin-bottom: 1.2rem; }
        .pillar-title { font-size: 1.15rem; color: var(--c-forest); margin-bottom: 0.65rem; }
        .pillar-desc  { font-size: 0.88rem; color: var(--c-text-muted); line-height: 1.6; }

        /* ── BANNER ── */
        .mission-banner {
          position: relative;
          background: linear-gradient(135deg, #0d2b1a 0%, #174730 50%, #0b3326 100%);
          border-radius: 24px;
          padding: 4rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(5,15,9,0.25);
        }
        @media (max-width: 860px) {
          .mission-banner { flex-direction: column; text-align: center; padding: 3rem 2rem; }
        }
        .banner-bg-leaves {
          position: absolute;
          top: -20px; right: -20px;
          font-size: 8rem;
          opacity: 0.08;
          pointer-events: none;
          line-height: 1;
          letter-spacing: -1rem;
        }
        .banner-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(78,203,132,0.2);
          color: #a8f0c6;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }
        .banner-content h3 {
          font-size: 1.9rem;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 0.6rem;
        }
        .banner-content p { color: rgba(255,255,255,0.65); font-size: 1.05rem; }
      `}</style>
    </section>
  );
};
