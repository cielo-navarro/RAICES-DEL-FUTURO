import React, { useState } from 'react';
import { COMMUNITIES } from '../data/mockData';
import { IconMapPin, IconUsers, IconBoat, IconHeart, IconGraduation, IconArrowRight } from './Icons';

export const Communities = ({ onSelectCommunity, onDonateToCommunity }) => {
  const [selectedCuenca, setSelectedCuenca] = useState('all');

  const cuencas = [
    { id: 'all', label: 'Todas las Cuencas' },
    { id: 'Río Nanay', label: 'Cuenca Río Nanay' },
    { id: 'Río Amazonas', label: 'Cuenca Río Amazonas' },
    { id: 'Río Ucayali', label: 'Cuenca Río Ucayali' },
  ];

  const filteredCommunities = selectedCuenca === 'all'
    ? COMMUNITIES
    : COMMUNITIES.filter(c => c.cuenca.toLowerCase().includes(selectedCuenca.toLowerCase()));

  return (
    <section id="comunidades" className="communities-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconMapPin size={16} />
            <span>Nuestras Comunidades</span>
          </span>
          <h2 className="section-title">
            Comunidades rurales de Loreto que acompañamos
          </h2>
          <p className="section-subtitle">
            Conoce a las escuelas, docentes y escolares que forman parte de la familia de Raíces del Futuro.
            Cada comunidad tiene características geográficas y requerimientos prioritarios únicos.
          </p>
        </div>

        {/* Filter Tabs by Cuenca */}
        <div className="cuenca-filter-tabs">
          {cuencas.map((cuenca) => (
            <button
              key={cuenca.id}
              type="button"
              className={`filter-tab ${selectedCuenca === cuenca.id ? 'active' : ''}`}
              onClick={() => setSelectedCuenca(cuenca.id)}
            >
              <IconBoat size={15} />
              <span>{cuenca.label}</span>
            </button>
          ))}
        </div>

        {/* Communities Grid */}
        <div className="communities-grid">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="community-card card-base">
              {/* Image & Urgency */}
              <div className="comm-img-box">
                <img
                  src={community.image}
                  alt={community.name}
                  className="comm-img"
                  loading="lazy"
                />
                <span className={`comm-urgency-badge ${community.urgencyClass}`}>
                  Urgencia: {community.urgency}
                </span>
                <span className="comm-cuenca-tag">
                  {community.cuenca}
                </span>
              </div>

              {/* Card Body */}
              <div className="comm-body">
                <div className="comm-school-header">
                  <h3 className="comm-name">{community.name}</h3>
                  <span className="comm-school-name">{community.schoolName}</span>
                </div>

                <p className="comm-desc">{community.description}</p>

                {/* Key specs */}
                <div className="comm-specs">
                  <div className="spec-row">
                    <IconBoat size={16} className="spec-icon" />
                    <span><strong>Acceso:</strong> {community.distance}</span>
                  </div>
                  <div className="spec-row">
                    <IconUsers size={16} className="spec-icon" />
                    <span><strong>Escolares:</strong> {community.students}</span>
                  </div>
                  <div className="spec-row">
                    <IconGraduation size={16} className="spec-icon" />
                    <span><strong>Docente a cargo:</strong> {community.teacher}</span>
                  </div>
                </div>

                {/* Needs Preview Pills */}
                <div className="comm-needs-box">
                  <span className="needs-label">Necesidades prioritarias:</span>
                  <div className="needs-pills">
                    {community.mainNeeds.map((need, idx) => (
                      <span key={idx} className="need-pill">
                        • {need}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="comm-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm w-full"
                    onClick={() => onSelectCommunity(community)}
                  >
                    <span>Ver detalles y lista</span>
                    <IconArrowRight size={15} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm w-full"
                    onClick={() => onDonateToCommunity(community)}
                  >
                    <IconHeart size={15} fill={true} />
                    <span>Apoyar a esta escuela</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .communities-section {
          background-color: #ffffff;
        }
        .cuenca-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .filter-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.35rem;
          border-radius: var(--radius-full);
          background: #f7f3ec;
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover {
          background: #efe9de;
          color: var(--color-primary-dark);
        }
        .filter-tab.active {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(27, 67, 50, 0.2);
        }
        .communities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .communities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .communities-grid {
            grid-template-columns: 1fr;
          }
        }
        .community-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .comm-img-box {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .comm-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .community-card:hover .comm-img {
          transform: scale(1.05);
        }
        .comm-urgency-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .comm-cuenca-tag {
          position: absolute;
          bottom: 12px;
          left: 14px;
          background: rgba(19, 51, 36, 0.82);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }
        .comm-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .comm-school-header {
          margin-bottom: 0.9rem;
        }
        .comm-name {
          font-size: 1.35rem;
          color: var(--color-primary-dark);
          line-height: 1.25;
          margin-bottom: 0.25rem;
        }
        .comm-school-name {
          font-size: 0.85rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .comm-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }
        .comm-specs {
          background-color: #faf7f2;
          padding: 0.9rem 1.1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.2rem;
        }
        .spec-row {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.83rem;
          color: var(--text-main);
          line-height: 1.4;
        }
        .spec-icon {
          color: var(--color-forest);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .comm-needs-box {
          margin-bottom: 1.4rem;
        }
        .needs-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.45rem;
        }
        .needs-pills {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .need-pill {
          font-size: 0.82rem;
          color: var(--color-primary);
          background-color: var(--color-mint-light);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          display: inline-block;
          font-weight: 600;
        }
        .comm-actions {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};
