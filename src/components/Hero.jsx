import React, { useState, useEffect, useRef } from 'react';
import { IconHeart, IconArrowRight, IconSparkles, IconShield, IconBoat } from './Icons';
import { IMPACT_METRICS } from '../data/mockData';

const WORDS = ['voluntario', 'donante', 'aliado', 'héroe', 'impulso'];

export const Hero = ({ onOpenHelpModal, onExploreCommunities, onQuickPledge }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [counters, setCounters] = useState(IMPACT_METRICS.map(() => 0));
  const [pledgeAmount, setPledgeAmount] = useState(75);
  const hasAnimated = useRef(false);

  // Cycling word animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Count-up animation on mount
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const targets = IMPACT_METRICS.map(m => {
      const num = parseFloat(m.number.replace(/[^0-9.]/g, ''));
      return isNaN(num) ? 0 : num;
    });
    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters(targets.map(t => Math.round(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const pledgePresets = [
    { amount: 35, label: 'Kit Escolar', impact: '1 escolar recibe 4 cuadernos, lápices y colores a prueba de humedad.' },
    { amount: 75, label: 'Mochila + Kit', impact: '1 mochila impermeable y útiles protegidos para viajar en canoa.' },
    { amount: 150, label: 'Padrinazgo', impact: 'Útiles de todo el año, 3 libros infantiles y calzado para 1 estudiante.' },
    { amount: 450, label: 'Rincón Lector', impact: '30 libros de literatura y estantería de madera para un aula rural.' },
  ];
  const currentPreset = pledgePresets.find(p => p.amount === pledgeAmount) || pledgePresets[1];

  const formatCounter = (metric, count) => {
    const raw = metric.number;
    const prefix = raw.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = raw.match(/[^0-9]+$/)?.[0] ?? '';
    return `${prefix}${count.toLocaleString('es-PE')}${suffix}`;
  };

  return (
    <section id="inicio" className="hero-section">
      {/* ── Background Particles ── */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="hero-particle" style={{
          left: `${5 + i * 8}%`,
          top: `${20 + (i % 5) * 15}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + (i % 4)}s`,
          width: `${4 + (i % 3) * 3}px`,
          height: `${4 + (i % 3) * 3}px`,
        }} />
      ))}

      {/* ── Ambient Glows ── */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-glow-3" />

      <div className="container">
        <div className="hero-grid">
          {/* ── LEFT COLUMN ── */}
          <div className="hero-left">
            {/* Live badge */}
            <div className="hero-live-badge">
              <span className="live-dot" />
              <span>Expediciones activas · Loreto, Perú</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-h1">
              Sé el{' '}
              <span className={`hero-cycling-word ${wordVisible ? 'visible' : 'hidden'}`}>
                {WORDS[wordIdx]}
              </span>
              <br />
              que la Amazonía<br />
              <span className="hero-h1-line3">necesita hoy.</span>
            </h1>

            <p className="hero-desc">
              En el corazón de Loreto, donde los caminos son ríos y las distancias se miden en horas de navegación,{' '}
              <strong>RAÍCES DEL FUTURO</strong> conecta donantes, voluntarios e instituciones con comunidades rurales que necesitan equipamiento escolar, libros y esperanza.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button type="button" className="btn btn-accent btn-lg hero-cta-pulse" onClick={onOpenHelpModal}>
                <IconHeart size={20} fill={true} />
                <span>Quiero ayudar ahora</span>
              </button>
              <button type="button" className="btn btn-outline btn-lg" onClick={onExploreCommunities}>
                <span>Ver comunidades</span>
                <IconArrowRight size={18} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="hero-trust">
              <div className="trust-pill">
                <IconShield size={16} />
                <span>Entregas verificadas</span>
              </div>
              <div className="trust-pill">
                <IconBoat size={16} />
                <span>Rutas supervisadas</span>
              </div>
              <div className="trust-pill">
                <IconSparkles size={16} />
                <span>100% transparente</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hero-right">
            {/* Main image card */}
            <div className="hero-img-frame">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85"
                alt="Niños de comunidades amazónicas de Loreto con materiales escolares"
                className="hero-img"
              />
              <div className="hero-img-gradient" />
              <div className="hero-img-quote">
                <span className="quote-boat"><IconBoat size={16} /></span>
                <p>«La educación no es un privilegio de la ciudad; es el derecho de cada niño amazónico.»</p>
              </div>
            </div>

            {/* Floating badge: stats */}
            <div className="hero-float-stat glass-card animate-float">
              <div className="float-stat-icon">📚</div>
              <div>
                <strong>+3,400 Kits Escolares</strong>
                <span>Entregados en 18 caseríos</span>
              </div>
            </div>

            {/* Floating badge: volunteers */}
            <div className="hero-float-vol glass-card">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Voluntaria" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Docente" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Donante" />
                <span className="avatar-more">+137</span>
              </div>
              <div>
                <strong>140 Voluntarios</strong>
                <span>Navegando por la educación</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── IMPACT COUNTERS ── */}
        <div className="hero-counters">
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx} className="counter-box">
              <span className="counter-number animate-count" style={{ animationDelay: `${idx * 0.15}s` }}>
                {formatCounter(metric, counters[idx])}
              </span>
              <span className="counter-label">{metric.label}</span>
              <span className="counter-detail">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* ── IMPACT SIMULATOR ── */}
        <div className="hero-simulator glass-card">
          <div className="sim-left">
            <span className="sim-eyebrow">
              <IconSparkles size={14} />
              Simulador de Impacto
            </span>
            <div className="sim-presets">
              {pledgePresets.map(p => (
                <button
                  key={p.amount}
                  type="button"
                  className={`sim-pill ${pledgeAmount === p.amount ? 'active' : ''}`}
                  onClick={() => setPledgeAmount(p.amount)}
                >
                  <span>{p.label}</span>
                  <strong>S/.{p.amount}</strong>
                </button>
              ))}
            </div>
          </div>
          <div className="sim-right">
            <div className="sim-amount">S/. {pledgeAmount}</div>
            <p className="sim-impact-text">
              <strong>Tu aporte:</strong> {currentPreset.impact}
            </p>
            <button type="button" className="btn btn-gold btn-sm" onClick={() => onQuickPledge(pledgeAmount)}>
              Apadrinar este impacto →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* ── HERO SECTION ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 130px;
          padding-bottom: 5rem;
          background: radial-gradient(ellipse 100% 80% at 50% 0%, #0d2b1a 0%, #0b1f12 55%, #050f09 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-section .container { position: relative; z-index: 2; }

        /* Particles */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #4ecb84, transparent);
          pointer-events: none;
          animation: particleFloat linear infinite;
          opacity: 0.5;
        }

        /* Ambient glows */
        .hero-glow-1 {
          position: absolute; top: -10%; left: -15%; width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34,160,90,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute; top: 30%; right: -10%; width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow-3 {
          position: absolute; bottom: -5%; left: 30%; width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(78,203,132,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Live badge */
        .hero-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(78,203,132,0.15);
          border: 1px solid rgba(78,203,132,0.4);
          color: #a8f0c6;
          padding: 0.45rem 1.1rem;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 1.6rem;
        }
        .live-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ecb84;
          box-shadow: 0 0 10px #4ecb84;
          animation: glowPulse 1.6s ease-in-out infinite;
        }

        /* Hero grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Headline */
        .hero-h1 {
          font-family: var(--font-h);
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) { .hero-h1 { font-size: 3rem; } }
        @media (max-width: 480px) { .hero-h1 { font-size: 2.4rem; } }

        .hero-h1-line3 {
          background: linear-gradient(130deg, #22a05a 0%, #4ecb84 60%, #a8f0c6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Cycling word */
        .hero-cycling-word {
          display: inline-block;
          background: linear-gradient(130deg, #f5a623 0%, #f9c74f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .hero-cycling-word.visible  { opacity: 1; transform: translateY(0); }
        .hero-cycling-word.hidden   { opacity: 0; transform: translateY(-12px); }

        /* Description */
        .hero-desc {
          font-size: 1.12rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
          margin-bottom: 2.2rem;
          max-width: 580px;
        }
        .hero-desc strong { color: #a8f0c6; }

        /* Actions */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .hero-cta-pulse {
          box-shadow: 0 8px 32px rgba(232,67,26,0.5), 0 0 0 0 rgba(255,107,53,0.5);
          animation: pulseGlow 2.5s infinite;
        }

        /* Trust */
        .hero-trust {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
        }

        /* Right column */
        .hero-right { position: relative; }
        .hero-img-frame {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(78,203,132,0.2);
          position: relative;
        }
        .hero-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.9s ease;
        }
        .hero-img-frame:hover .hero-img { transform: scale(1.04); }
        .hero-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(5,15,9,0.92) 100%);
        }
        .hero-img-quote {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 1.8rem;
          color: #ffffff;
        }
        .quote-boat {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(78,203,132,0.2);
          border: 1px solid rgba(78,203,132,0.4);
          color: #a8f0c6;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .hero-img-quote p {
          font-family: var(--font-h);
          font-style: italic;
          font-size: 1.08rem;
          line-height: 1.5;
          color: #f4f9f6;
        }

        /* Floating cards */
        .hero-float-stat {
          position: absolute;
          top: -20px; left: -20px;
          padding: 1rem 1.3rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border: 1px solid rgba(78,203,132,0.3);
          animation: floatGentle 4s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .float-stat-icon { font-size: 2rem; }
        .hero-float-stat strong { display: block; font-size: 1rem; color: var(--c-forest); line-height: 1.2; }
        .hero-float-stat span  { font-size: 0.75rem; color: var(--c-text-muted); }

        .hero-float-vol {
          position: absolute;
          bottom: -20px; right: -16px;
          padding: 0.9rem 1.2rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border: 1px solid rgba(78,203,132,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .hero-float-vol strong { display: block; font-size: 0.95rem; color: var(--c-forest); line-height: 1.2; }
        .hero-float-vol span   { font-size: 0.74rem; color: var(--c-emerald); font-weight: 700; }

        .avatar-stack { display: flex; align-items: center; }
        .avatar-stack img {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2.5px solid #fff;
          margin-left: -10px;
          object-fit: cover;
        }
        .avatar-stack img:first-child { margin-left: 0; }
        .avatar-more {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--c-emerald);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -10px;
          border: 2.5px solid #fff;
        }

        @media (max-width: 640px) {
          .hero-float-stat, .hero-float-vol { display: none; }
        }

        /* ── IMPACT COUNTERS ── */
        .hero-counters {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(78,203,132,0.2);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(12px);
        }
        @media (max-width: 900px)  { .hero-counters { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 520px)  { .hero-counters { grid-template-columns: 1fr; } }

        .counter-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          border-right: 1px solid rgba(78,203,132,0.15);
        }
        .counter-box:last-child { border-right: none; }
        @media (max-width: 900px) {
          .counter-box:nth-child(2) { border-right: none; }
          .counter-box { border-bottom: 1px solid rgba(78,203,132,0.15); }
          .counter-box:nth-child(3), .counter-box:last-child { border-bottom: none; }
        }
        @media (max-width: 520px) {
          .counter-box { border-right: none !important; border-bottom: 1px solid rgba(78,203,132,0.15); }
          .counter-box:last-child { border-bottom: none; }
        }
        .counter-number {
          font-family: var(--font-h);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.4rem;
          background: linear-gradient(130deg, #4ecb84, #a8f0c6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .counter-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .counter-detail {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.4;
        }

        /* ── SIMULATOR ── */
        .hero-simulator {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          padding: 2rem 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(78,203,132,0.25);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
        }
        @media (max-width: 768px) {
          .hero-simulator { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
        }
        .sim-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a8f0c6;
          margin-bottom: 1rem;
        }
        .sim-presets {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .sim-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0.8rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 76px;
        }
        .sim-pill span { font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.65); }
        .sim-pill strong { font-size: 0.85rem; font-weight: 800; color: rgba(255,255,255,0.9); }
        .sim-pill.active {
          background: rgba(245,166,35,0.25);
          border-color: #f5a623;
          box-shadow: 0 0 20px rgba(245,166,35,0.3);
        }
        .sim-pill.active span, .sim-pill.active strong { color: #f9c74f; }

        .sim-amount {
          font-family: var(--font-h);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.6rem;
          background: linear-gradient(130deg, #f5a623, #f9c74f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sim-impact-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          margin-bottom: 1.2rem;
        }
        .sim-impact-text strong { color: #a8f0c6; }
        .btn-gold {
          background: linear-gradient(135deg, #f5a623 0%, #f9c74f 100%);
          color: #0b1f12;
          font-weight: 900;
          box-shadow: 0 8px 24px rgba(245,166,35,0.4);
          border: none;
        }
        .btn-gold:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 36px rgba(245,166,35,0.55);
        }
      `}</style>
    </section>
  );
};
