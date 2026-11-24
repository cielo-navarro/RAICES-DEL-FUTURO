import React from 'react';
import { IconBoat, IconHeart, IconBook, IconSprout, IconSparkles } from './Icons';

export const MarqueeStrip = () => {
  const items = [
    { icon: <IconBoat size={16} />, text: "Expedición activa: Navegando el Río Nanay" },
    { icon: <IconHeart size={16} fill={true} />, text: "3,420 escolares equipados en Loreto" },
    { icon: <IconBook size={16} />, text: "Biblioteca comunitaria en Padre Cocha en marcha" },
    { icon: <IconSprout size={16} />, text: "18 comunidades rurales conectadas" },
    { icon: <IconSparkles size={16} />, text: "Sembrando oportunidades, construyendo futuros" },
    { icon: <IconBoat size={16} />, text: "Próximo zarpe fluvial: 15 de Enero 2027" },
    { icon: <IconHeart size={16} fill={true} />, text: "Centros de acopio en Iquitos y Lima listos" },
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.text}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-wrapper {
          background: linear-gradient(90deg, #0a2318 0%, #163829 50%, #0a2318 100%);
          color: #d8f3dc;
          overflow: hidden;
          padding: 0.85rem 0;
          white-space: nowrap;
          border-top: 1px solid rgba(82, 183, 136, 0.25);
          border-bottom: 1px solid rgba(82, 183, 136, 0.25);
          position: relative;
          z-index: 10;
        }
        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          animation: marqueeScroll 38s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .marquee-icon {
          color: var(--color-sunset-gold);
          display: flex;
          align-items: center;
        }
        .marquee-text {
          color: #f7fbf8;
        }
        .marquee-dot {
          color: var(--color-emerald);
          margin-left: 1.5rem;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};
