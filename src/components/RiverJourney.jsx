import React, { useState } from 'react';
import { IconBoat, IconHeart, IconMapPin, IconUsers, IconBook } from './Icons';

export const RiverJourney = ({ onDonateToStop }) => {
  const [activeStopIndex, setActiveStopIndex] = useState(1);

  const riverStops = [
    {
      id: "zarpe",
      name: "Puerto Bellavista Nanay (Iquitos)",
      river: "Río Nanay • Km 0",
      time: "Punto de Partida",
      badge: "Centro Logístico",
      badgeClass: "badge-green",
      students: "Hub de Acopio y Clasificación",
      teacher: "Equipo de Voluntarios en Puerto",
      suppliesNeeded: "Combustible fluvial, toldos impermeables y cajas selladas",
      quote: "Desde aquí zarpan las embarcaciones con los cargamentos de esperanza hacia las comunidades más apartadas.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80",
      distancePct: 5
    },
    {
      id: "padre-cocha",
      name: "Comunidad Nativa Padre Cocha",
      river: "Río Nanay",
      time: "45 minutos en peque-peque",
      badge: "Urgencia Alta",
      badgeClass: "badge-urgent",
      students: "280 escolares (Primaria y Secundaria)",
      teacher: "Prof. Manuel Shahuano",
      suppliesNeeded: "35 mochilas impermeables, 120 cuadernos, lámparas solares",
      quote: "Los niños navegan cada mañana en canoa. Verlos recibir sus libros es la mayor recompensa para un docente rural.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
      distancePct: 24
    },
    {
      id: "san-rafael",
      name: "Comunidad Campesina San Rafael",
      river: "Río Amazonas",
      time: "2 horas y media río abajo",
      badge: "Urgencia Crítica",
      badgeClass: "badge-urgent",
      students: "195 estudiantes",
      teacher: "Prof. Gladis Murayari",
      suppliesNeeded: "195 kits escolares integrales y 4 pizarras acrílicas",
      quote: "Las inundaciones de creciente dañan los cuadernos. Necesitamos mochilas que mantengan los útiles secos.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      distancePct: 44
    },
    {
      id: "oran",
      name: "Comunidad Ribereña Orán",
      river: "Bajo Amazonas",
      time: "3 horas y media en lancha",
      badge: "Rincón de Lectura",
      badgeClass: "badge-warm",
      students: "220 niños y jóvenes",
      teacher: "Prof. Jorge Inuma",
      suppliesNeeded: "Cuentos infantiles ilustrados y enciclopedias amazónicas",
      quote: "Impulsamos huertos escolares pero nos faltan libros de consulta para que los chicos investiguen.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
      distancePct: 65
    },
    {
      id: "dos-de-mayo",
      name: "Caserío Dos de Mayo",
      river: "Río Ucayali",
      time: "5 horas en motonave",
      badge: "Escuela Unidocente",
      badgeClass: "badge-urgent",
      students: "140 escolares",
      teacher: "Prof. Nery Tapullima",
      suppliesNeeded: "Calzado escolar resistente, botiquín comunal y cuadernos",
      quote: "Enseño a 6 grados en un solo salón de madera. Todo cuaderno y color aquí se cuida como un tesoro.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
      distancePct: 83
    },
    {
      id: "santa-rosa",
      name: "Comunidad Santa Rosa del Amazonas",
      river: "Río Amazonas (Frontera)",
      time: "8 horas en deslizador",
      badge: "Frontera Viva",
      badgeClass: "badge-warm",
      students: "310 estudiantes",
      teacher: "Prof. Carlos Pizango",
      suppliesNeeded: "Material didáctico para ciencias, diccionarios y lupas",
      quote: "Hacer patria en la frontera de Loreto es educar con dignidad a nuestros niños ribereños.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80",
      distancePct: 98
    }
  ];

  const currentStop = riverStops[activeStopIndex];

  return (
    <section id="ruta-fluvial" className="river-journey-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconBoat size={16} />
            <span>Mapa Fluvial Interactivo</span>
          </span>
          <h2 className="section-title">
            La Ruta de la Esperanza: Navegando los ríos de Loreto
          </h2>
          <p className="section-subtitle">
            Haz clic en los puertos y comunidades a lo largo del río para seguir la trayectoria de nuestras lanchas y ver las necesidades en cada orilla.
          </p>
        </div>

        {/* River Track Navigation Bar */}
        <div className="river-track-wrapper">
          <div className="river-track-line">
            <div
              className="river-track-progress"
              style={{ width: `${currentStop.distancePct}%` }}
            ></div>

            {/* Animated Boat Marker */}
            <div
              className="river-boat-indicator"
              style={{ left: `${currentStop.distancePct}%` }}
            >
              <div className="boat-icon-bubble animate-float">
                <IconBoat size={22} />
              </div>
              <span className="boat-tag-label">{currentStop.time}</span>
            </div>
          </div>

          {/* River Ports / Stops clickable points */}
          <div className="river-stops-bar">
            {riverStops.map((stop, idx) => (
              <button
                key={stop.id}
                type="button"
                className={`river-stop-btn ${activeStopIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveStopIndex(idx)}
              >
                <div className="stop-marker-circle">
                  <span className="stop-index-num">{idx + 1}</span>
                </div>
                <div className="stop-meta-text">
                  <span className="stop-name-label">{stop.name.split(' (')[0]}</span>
                  <span className="stop-river-label">{stop.river}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active River Port Showcase Card */}
        <div className="river-active-showcase card-base">
          <div className="showcase-visual-col">
            <img
              src={currentStop.image}
              alt={currentStop.name}
              className="showcase-photo"
            />
            <div className="showcase-badge-overlay">
              <span className={`badge ${currentStop.badgeClass}`}>
                {currentStop.badge}
              </span>
              <span className="showcase-time-pill">
                <IconBoat size={14} />
                {currentStop.time}
              </span>
            </div>
          </div>

          <div className="showcase-info-col">
            <div className="showcase-header">
              <div className="showcase-river-tag">
                <IconMapPin size={16} />
                <span>{currentStop.river}</span>
              </div>
              <h3 className="showcase-title">{currentStop.name}</h3>
            </div>

            <div className="showcase-quote-box">
              <p>«{currentStop.quote}»</p>
              <span className="quote-author">— {currentStop.teacher}</span>
            </div>

            <div className="showcase-specs-list">
              <div className="showcase-spec">
                <IconUsers size={18} className="spec-ico" />
                <div>
                  <strong>Población estudiantil:</strong>
                  <span>{currentStop.students}</span>
                </div>
              </div>
              <div className="showcase-spec">
                <IconBook size={18} className="spec-ico" />
                <div>
                  <strong>Cargamento prioritario en ruta:</strong>
                  <span>{currentStop.suppliesNeeded}</span>
                </div>
              </div>
            </div>

            <div className="showcase-actions">
              <button
                type="button"
                className="btn btn-accent btn-md"
                onClick={() => onDonateToStop(currentStop)}
              >
                <IconHeart size={18} fill={true} />
                <span>Enviar materiales a este puerto</span>
              </button>

              <button
                type="button"
                className="btn btn-outline btn-md"
                onClick={() => setActiveStopIndex((activeStopIndex + 1) % riverStops.length)}
              >
                <span>Navegar al siguiente puerto →</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .river-journey-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7f3ec 50%, #ffffff 100%);
          position: relative;
        }
        .river-track-wrapper {
          position: relative;
          margin-bottom: 3.5rem;
          padding: 3rem 1.5rem 1.5rem 1.5rem;
          background: #0a2318;
          border-radius: var(--radius-xl);
          box-shadow: 0 16px 40px rgba(10, 35, 24, 0.25);
          border: 1px solid rgba(82, 183, 136, 0.3);
          overflow-x: auto;
        }
        .river-track-line {
          position: relative;
          height: 8px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          margin-bottom: 3.5rem;
          margin-top: 2rem;
        }
        .river-track-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #52b788 0%, #e76f51 100%);
          border-radius: var(--radius-full);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .river-boat-indicator {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 5;
        }
        .boat-icon-bubble {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e76f51 0%, #c04d30 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(231, 111, 81, 0.65);
          border: 3px solid #ffffff;
        }
        .boat-tag-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #ffffff;
          background: rgba(10, 35, 24, 0.95);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          margin-top: 0.35rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .river-stops-bar {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          min-width: 780px;
        }
        .river-stop-btn {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          gap: 0.6rem;
          transition: transform 0.2s ease;
        }
        .river-stop-btn:hover {
          transform: translateY(-2px);
        }
        .stop-marker-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }
        .river-stop-btn.active .stop-marker-circle {
          background: #52b788;
          border-color: #ffffff;
          box-shadow: 0 0 16px rgba(82, 183, 136, 0.7);
          transform: scale(1.15);
        }
        .stop-name-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.2rem;
        }
        .stop-river-label {
          display: block;
          font-size: 0.7rem;
          color: #74c69d;
        }
        /* Showcase card */
        .river-active-showcase {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-xl);
        }
        @media (max-width: 900px) {
          .river-active-showcase {
            grid-template-columns: 1fr;
          }
        }
        .showcase-visual-col {
          position: relative;
          min-height: 360px;
        }
        .showcase-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .showcase-badge-overlay {
          position: absolute;
          top: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .showcase-time-pill {
          background: rgba(10, 35, 24, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .showcase-info-col {
          padding: 3rem 3.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .showcase-info-col {
            padding: 2rem 1.6rem;
          }
        }
        .showcase-river-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-forest-medium);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.4rem;
        }
        .showcase-title {
          font-size: 2rem;
          color: var(--color-primary-dark);
          margin-bottom: 1.2rem;
        }
        .showcase-quote-box {
          background: #fcf9f4;
          border-left: 4px solid var(--color-sunset-gold);
          padding: 1.1rem 1.4rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }
        .showcase-quote-box p {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--color-primary-dark);
          line-height: 1.5;
          margin-bottom: 0.35rem;
        }
        .quote-author {
          font-size: 0.82rem;
          color: var(--color-terracotta);
          font-weight: 700;
        }
        .showcase-specs-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 2rem;
        }
        .showcase-spec {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
        }
        .spec-ico {
          color: var(--color-forest);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .showcase-spec strong {
          display: block;
          color: var(--color-primary-dark);
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .showcase-spec span {
          color: var(--text-muted);
        }
        .showcase-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};
