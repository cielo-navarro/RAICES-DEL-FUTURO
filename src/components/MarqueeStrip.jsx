import React from 'react';
import { IconBoat, IconHeart, IconBook, IconSprout, IconSparkles } from './Icons';

export const MarqueeStrip = () => {
  const items = [
    { icon: <IconBoat size={15} />, text: 'Expedición activa · Navegando el Río Nanay' },
    { icon: <IconHeart size={15} fill={true} />, text: '3,420 escolares equipados en Loreto' },
    { icon: <IconBook size={15} />, text: 'Biblioteca comunitaria en Padre Cocha' },
    { icon: <IconSprout size={15} />, text: '18 comunidades rurales conectadas' },
    { icon: <IconSparkles size={15} />, text: 'Sembrando oportunidades, construyendo futuros' },
    { icon: <IconBoat size={15} />, text: 'Próximo zarpe fluvial · 15 Enero 2027' },
    { icon: <IconHeart size={15} fill={true} />, text: 'Centros de acopio en Iquitos y Lima' },
    { icon: <IconBook size={15} />, text: '145 voluntarios activos en campo' },
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.text}</span>
            <span className="marquee-sep">◆</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-wrapper {
          background: linear-gradient(90deg, #0d2b1a 0%, #1a6640 50%, #0d2b1a 100%);
          overflow: hidden;
          padding: 1rem 0;
          white-space: nowrap;
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(78,203,132,0.2);
          border-bottom: 1px solid rgba(78,203,132,0.2);
        }
        /* Fade edges */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before { left: 0; background: linear-gradient(90deg, #0d2b1a, transparent); }
        .marquee-wrapper::after  { right: 0; background: linear-gradient(270deg, #0d2b1a, transparent); }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          animation: riverDrift 42s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .marquee-icon  { color: #f5a623; display: flex; align-items: center; }
        .marquee-text  { color: rgba(255,255,255,0.9); }
        .marquee-sep   { color: #4ecb84; font-size: 0.6rem; margin: 0 0.5rem; }
      `}</style>
    </div>
  );
};
