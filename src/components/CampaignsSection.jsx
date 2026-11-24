import React from 'react';
import { CAMPAIGNS } from '../data/mockData';
import { IconBoat, IconCalendar, IconHeart } from './Icons';

export const CampaignsSection = ({ onParticipateCampaign }) => {
  const steps = [
    {
      step: "01",
      title: "Recolección y Acopio",
      desc: "Recepción de materiales en nuestros centros de Iquitos y Lima. Clasificación rigurosa por grado y necesidad."
    },
    {
      step: "02",
      title: "Protección Tropical",
      desc: "Empaquetado hermético en plástico resistente y fundas impermeables para soportar lluvias y el oleaje fluvial."
    },
    {
      step: "03",
      title: "Navegación Fluvial",
      desc: "Zarpe en lanchas 'peque-peque' y embarcaciones comunitarias contratadas junto a brigadas de voluntarios."
    },
    {
      step: "04",
      title: "Entrega y Talleres",
      desc: "Llegada al caserío: entrega nominal a cada escolar, lectura comunitaria, dinámicas lúdicas y acta con el Apu."
    }
  ];

  return (
    <section id="campanas" className="campaigns-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconBoat size={16} />
            <span>Nuestras Campañas</span>
          </span>
          <h2 className="section-title">
            De la ciudad al corazón de la selva: cada campaña es una fiesta
          </h2>
          <p className="section-subtitle">
            Conoce el cronograma de actividades de recolección, preparación y expedición por las cuencas amazónicas. Tú puedes sumarte en cualquier etapa.
          </p>
        </div>

        {/* 4 Steps Lifecycle */}
        <div className="campaign-steps-strip">
          {steps.map((st, idx) => (
            <div key={idx} className="campaign-step-item">
              <span className="step-num">{st.step}</span>
              <h4 className="step-title">{st.title}</h4>
              <p className="step-desc">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Active Campaigns Cards */}
        <div className="campaigns-grid">
          {CAMPAIGNS.map((camp) => (
            <div key={camp.id} className="campaign-card card-base">
              <div className="camp-img-box">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="camp-img"
                  loading="lazy"
                />
                <span className={`camp-status-badge ${camp.statusColor}`}>
                  {camp.status}
                </span>
              </div>

              <div className="camp-body">
                <div className="camp-date-meta">
                  <IconCalendar size={15} />
                  <span>{camp.dates}</span>
                </div>

                <h3 className="camp-title">{camp.title}</h3>
                <p className="camp-desc">{camp.description}</p>

                <div className="camp-milestone-box">
                  <IconBoat size={16} className="camp-boat-icon" />
                  <div>
                    <strong>{camp.riverLocation}</strong>
                    <span>{camp.milestone}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="camp-progress-wrap">
                  <div className="camp-progress-labels">
                    <span>Avance de la meta</span>
                    <strong>{camp.progress}%</strong>
                  </div>
                  <div className="camp-track">
                    <div
                      className="camp-fill"
                      style={{ width: `${camp.progress}%` }}
                    ></div>
                  </div>
                  <span className="camp-target-text">{camp.target}</span>
                </div>

                <button
                  type="button"
                  className="btn btn-outline btn-sm camp-btn w-full"
                  onClick={() => onParticipateCampaign(camp)}
                >
                  <IconHeart size={16} fill={true} />
                  <span>Sumarme a esta campaña</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .campaigns-section {
          background-color: #ffffff;
        }
        .campaign-steps-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
          background: #faf7f2;
          padding: 2.2rem 2rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
        }
        @media (max-width: 900px) {
          .campaign-steps-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .campaign-steps-strip {
            grid-template-columns: 1fr;
          }
        }
        .campaign-step-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .step-num {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-forest);
          line-height: 1;
        }
        .step-title {
          font-size: 1.15rem;
          color: var(--color-primary-dark);
        }
        .step-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .campaigns-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .campaigns-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .campaigns-grid {
            grid-template-columns: 1fr;
          }
        }
        .campaign-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .camp-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .camp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .campaign-card:hover .camp-img {
          transform: scale(1.05);
        }
        .camp-status-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .camp-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .camp-date-meta {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-terracotta);
          margin-bottom: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .camp-title {
          font-size: 1.3rem;
          color: var(--color-primary-dark);
          line-height: 1.3;
          margin-bottom: 0.6rem;
        }
        .camp-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }
        .camp-milestone-box {
          background-color: #faf7f2;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1.2rem;
        }
        .camp-boat-icon {
          color: var(--color-forest);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .camp-milestone-box strong {
          display: block;
          font-size: 0.86rem;
          color: var(--color-primary-dark);
        }
        .camp-milestone-box span {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .camp-progress-wrap {
          margin-bottom: 1.4rem;
        }
        .camp-progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          margin-bottom: 0.4rem;
        }
        .camp-progress-labels strong {
          color: var(--color-forest);
        }
        .camp-track {
          height: 8px;
          background-color: #e5ded5;
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: 0.4rem;
        }
        .camp-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-sage) 0%, var(--color-forest) 100%);
          border-radius: var(--radius-full);
        }
        .camp-target-text {
          font-size: 0.78rem;
          color: var(--color-forest);
          font-weight: 600;
          display: block;
        }
        .camp-btn {
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};
