import React from 'react';
import { IconSprout, IconBook, IconUsers, IconBoat, IconCheck } from './Icons';

export const Mission = ({ onOpenHelpModal }) => {
  const pillars = [
    {
      icon: <IconBook size={28} />,
      title: "Equipamiento Escolar Digno",
      desc: "Entregamos mochilas impermeables, cuadernos resistentes a la humedad, libros ilustrados y kits que permiten a los niños estudiar sin limitaciones materiales."
    },
    {
      icon: <IconUsers size={28} />,
      title: "Acompañamiento Pedagógico",
      desc: "Voluntarios docentes y universitarios viajan en lancha para dictar talleres de lectura, ciencias, arte y estimulación socioemocional junto a los maestros rurales."
    },
    {
      icon: <IconBoat size={28} />,
      title: "Logística y Puentes Fluviales",
      desc: "Superamos el aislamiento de las cuencas del Amazonas, Nanay e Itaya, llevando recursos directamente hasta los caseríos más alejados con total transparencia."
    },
    {
      icon: <IconSprout size={28} />,
      title: "Identidad y Sostenibilidad",
      desc: "Fomentamos la literatura bilingüe en lenguas originarias (Kukama, Kichwa) y apoyamos a los huertos escolares para fortalecer el arraigo cultural y comunitario."
    }
  ];

  return (
    <section id="mision" className="mission-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconSprout size={16} />
            <span>Nuestra Misión</span>
          </span>
          <h2 className="section-title">
            Transformar la distancia en oportunidades para la niñez de Loreto
          </h2>
          <p className="section-subtitle">
            En la región más extensa del Perú, el río es vida pero también una frontera que aísla. 
            Trabajamos cada día para que nacer en una comunidad amazónica no limite los sueños de ningún niño.
          </p>
        </div>

        {/* Problem vs Proposal Grid */}
        <div className="mission-narrative-card">
          <div className="narrative-grid">
            <div className="narrative-col problem-col">
              <div className="col-badge problem-badge">La Realidad en Loreto</div>
              <h3>La brecha educativa que no podemos ignorar</h3>
              <p>
                En Loreto, más del <strong>70% de las escuelas rurales son multigrado o unidocentes</strong>, donde un solo maestro enseña a niños de diferentes edades a la vez.
              </p>
              <ul className="narrative-list">
                <li>
                  <span className="bullet bullet-red">✕</span>
                  <span>Aislamiento fluvial: de 2 a 8 horas navegando para acceder a una librería o centro de salud.</span>
                </li>
                <li>
                  <span className="bullet bullet-red">✕</span>
                  <span>Familias de subsistencia que deben priorizar la alimentación sobre cuadernos y uniformes.</span>
                </li>
                <li>
                  <span className="bullet bullet-red">✕</span>
                  <span>Las lluvias y crecientes dañan los pocos textos y mochilas no impermeables.</span>
                </li>
              </ul>
            </div>

            <div className="narrative-col solution-col">
              <div className="col-badge solution-badge">Nuestra Respuesta</div>
              <h3>El poder de sembrar en comunidad</h3>
              <p>
                <strong>RAÍCES DEL FUTURO</strong> no es una ayuda asistencial pasajera; es un modelo participativo donde la comunidad, los maestros rurales y los voluntarios construyen juntos el cambio.
              </p>
              <ul className="narrative-list">
                <li>
                  <span className="bullet bullet-green"><IconCheck size={14} /></span>
                  <span>Alianzas con los Apus (líderes comunales) y asociaciones de padres de familia.</span>
                </li>
                <li>
                  <span className="bullet bullet-green"><IconCheck size={14} /></span>
                  <span>Materiales de alta durabilidad adaptados a las condiciones de alta humedad de la selva.</span>
                </li>
                <li>
                  <span className="bullet bullet-green"><IconCheck size={14} /></span>
                  <span>Monitoreo constante de la permanencia y motivación escolar durante todo el año lectivo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card card-base">
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Motivational Banner */}
        <div className="mission-banner">
          <div className="banner-content">
            <span className="banner-badge">Sembrando futuro</span>
            <h3>«La educación es la semilla más fértil que podemos plantar en la Amazonía»</h3>
            <p>Únete hoy a esta red de amor y solidaridad por los niños de Loreto.</p>
          </div>
          <button
            type="button"
            className="btn btn-white btn-lg banner-btn"
            onClick={onOpenHelpModal}
          >
            Sumarme a la causa
          </button>
        </div>
      </div>

      <style>{`
        .mission-section {
          background-color: var(--color-beige-bg);
          position: relative;
        }
        .mission-narrative-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          margin-bottom: 4rem;
        }
        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 860px) {
          .narrative-grid {
            grid-template-columns: 1fr;
          }
        }
        .narrative-col {
          padding: 3rem 2.8rem;
        }
        @media (max-width: 600px) {
          .narrative-col {
            padding: 2rem 1.5rem;
          }
        }
        .problem-col {
          background-color: #faf7f4;
          border-right: 1px solid var(--border-light);
        }
        @media (max-width: 860px) {
          .problem-col {
            border-right: none;
            border-bottom: 1px solid var(--border-light);
          }
        }
        .solution-col {
          background-color: #f7faf8;
        }
        .col-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.2rem;
        }
        .problem-badge {
          background-color: #fee2e2;
          color: #991b1b;
        }
        .solution-badge {
          background-color: var(--color-mint-light);
          color: var(--color-primary-dark);
        }
        .narrative-col h3 {
          font-size: 1.55rem;
          margin-bottom: 1rem;
          color: var(--color-primary-dark);
        }
        .narrative-col p {
          font-size: 1.02rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .narrative-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .narrative-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }
        .bullet {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bullet-red {
          background-color: #fee2e2;
          color: #dc2626;
        }
        .bullet-green {
          background-color: var(--color-mint-light);
          color: var(--color-forest);
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.8rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
        .pillar-card {
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .pillar-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--color-mint-light) 0%, #c1ebd0 100%);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.4rem;
        }
        .pillar-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-primary-dark);
        }
        .pillar-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .mission-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, var(--color-forest) 100%);
          border-radius: var(--radius-xl);
          padding: 3.2rem 3.5rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          box-shadow: var(--shadow-lg);
        }
        @media (max-width: 860px) {
          .mission-banner {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.8rem;
          }
        }
        .banner-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.18);
          padding: 0.25rem 0.8rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.8rem;
        }
        .banner-content h3 {
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }
        .banner-content p {
          color: #d8f3dc;
          font-size: 1.05rem;
        }
        .banner-btn {
          flex-shrink: 0;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};
