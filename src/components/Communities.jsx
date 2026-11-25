import React, { useState } from 'react';
import { COMMUNITIES } from '../data/mockData';
import { IconMapPin, IconUsers, IconBoat, IconHeart, IconArrowRight } from './Icons';

export const Communities = ({ onSelectCommunity, onDonateToCommunity }) => {
  const [selectedCuenca, setSelectedCuenca] = useState('all');

  const cuencas = [
    { id: 'all', label: 'Todas', emoji: '🌊' },
    { id: 'Río Nanay', label: 'Río Nanay', emoji: '🛶' },
    { id: 'Río Amazonas', label: 'Río Amazonas', emoji: '⛵' },
    { id: 'Río Ucayali', label: 'Río Ucayali', emoji: '🚤' },
  ];

  const filteredCommunities = selectedCuenca === 'all'
    ? COMMUNITIES
    : COMMUNITIES.filter(c => c.cuenca.toLowerCase().includes(selectedCuenca.toLowerCase()));

  return (
    <section id="comunidades" className="communities-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><IconMapPin size={15} /> Nuestras Comunidades</span>
          <h2 className="section-title">
            Comunidades rurales que{' '}
            <span className="gradient-text-forest">acompañamos</span>
          </h2>
          <p className="section-subtitle">
            Conoce las escuelas, docentes y niños que forman parte de la familia de Raíces del Futuro.
            Cada comunidad tiene necesidades únicas que tú puedes ayudar a cubrir.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="cuenca-tabs">
          {cuencas.map(c => (
            <button
              key={c.id}
              type="button"
              className={`cuenca-tab ${selectedCuenca === c.id ? 'active' : ''}`}
              onClick={() => setSelectedCuenca(c.id)}
            >
              <span>{c.emoji}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="comm-grid">
          {filteredCommunities.map(comm => (
            <div key={comm.id} className="comm-card">
              {/* Image */}
              <div className="comm-img-wrap">
                <img src={comm.image} alt={comm.name} className="comm-img" loading="lazy" />
                <div className="comm-img-overlay" />
                <span className={`comm-urgency ${comm.urgencyClass}`}>
                  {comm.urgency === 'Crítica' ? '🔴' : comm.urgency === 'Alta' ? '🟡' : '🟢'} {comm.urgency}
                </span>
                <span className="comm-cuenca-pill">
                  <IconBoat size={12} /> {comm.cuenca}
                </span>
                {/* Hover CTA overlay */}
                <div className="comm-hover-overlay">
                  <button
                    type="button"
                    className="btn btn-white btn-sm"
                    onClick={() => onSelectCommunity(comm)}
                  >
                    Ver detalles <IconArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="comm-body">
                <div className="comm-header-row">
                  <div>
                    <h3 className="comm-name">{comm.name}</h3>
                    <span className="comm-school">{comm.schoolName}</span>
                  </div>
                  <div className="comm-students-badge">
                    <IconUsers size={14} />
                    <span>{comm.students}</span>
                  </div>
                </div>

                <p className="comm-desc">{comm.description}</p>

                {/* Needs */}
                <div className="comm-needs">
                  <span className="needs-title">🎯 Necesidades prioritarias</span>
                  <div className="needs-list">
                    {comm.mainNeeds.slice(0, 3).map((n, i) => (
                      <span key={i} className="need-tag">{n}</span>
                    ))}
                  </div>
                </div>

                {/* Access info */}
                <div className="comm-access">
                  <IconBoat size={14} />
                  <span>{comm.distance}</span>
                </div>

                {/* Actions */}
                <div className="comm-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => onSelectCommunity(comm)}
                    style={{ flex: 1 }}
                  >
                    Ver detalles
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onDonateToCommunity(comm)}
                    style={{ flex: 1 }}
                  >
                    <IconHeart size={14} fill={true} />
                    Apoyar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .communities-section {
          background: linear-gradient(180deg, #f4fdf8 0%, #ffffff 100%);
        }
        .communities-section .section-title { color: var(--c-forest); }

        /* Filter tabs */
        .cuenca-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .cuenca-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          border-radius: 999px;
          background: #f4f8f5;
          border: 1.5px solid rgba(0,0,0,0.08);
          color: var(--c-text-muted);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cuenca-tab:hover {
          background: #e6faf0;
          border-color: rgba(34,160,90,0.3);
          color: var(--c-forest);
        }
        .cuenca-tab.active {
          background: var(--c-forest);
          border-color: var(--c-forest);
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(13,43,26,0.25);
        }

        /* Grid */
        .comm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) { .comm-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 680px)  { .comm-grid { grid-template-columns: 1fr; } }

        /* Card */
        .comm-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(0,0,0,0.07);
          background: #ffffff;
          box-shadow: 0 8px 28px rgba(5,15,9,0.07);
          transition: all 0.4s var(--ease);
          display: flex;
          flex-direction: column;
        }
        .comm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(5,15,9,0.15);
          border-color: rgba(34,160,90,0.3);
        }

        /* Image */
        .comm-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .comm-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .comm-card:hover .comm-img { transform: scale(1.08); }
        .comm-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(5,15,9,0.5) 100%);
        }
        .comm-urgency {
          position: absolute; top: 14px; right: 14px;
          font-size: 0.75rem; font-weight: 800;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.95);
          color: var(--c-text);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .comm-cuenca-pill {
          position: absolute; bottom: 14px; left: 14px;
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(13,43,26,0.85);
          backdrop-filter: blur(8px);
          color: #a8f0c6;
          font-size: 0.75rem; font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        /* Hover overlay */
        .comm-hover-overlay {
          position: absolute; inset: 0;
          background: rgba(13,43,26,0.6);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .comm-card:hover .comm-hover-overlay { opacity: 1; }

        /* Body */
        .comm-body { padding: 1.6rem; display: flex; flex-direction: column; flex-grow: 1; gap: 1rem; }

        .comm-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .comm-name { font-size: 1.2rem; color: var(--c-forest); line-height: 1.25; margin-bottom: 0.2rem; }
        .comm-school { font-size: 0.8rem; color: var(--c-emerald); font-weight: 700; }
        .comm-students-badge {
          display: inline-flex; align-items: center; gap: 0.3rem;
          background: #e6faf0; color: var(--c-forest);
          font-size: 0.78rem; font-weight: 800;
          padding: 0.3rem 0.7rem; border-radius: 999px;
          flex-shrink: 0;
          border: 1px solid #c8f5df;
        }

        .comm-desc { font-size: 0.88rem; color: var(--c-text-muted); line-height: 1.55; }

        .comm-needs { display: flex; flex-direction: column; gap: 0.5rem; }
        .needs-title { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--c-forest); }
        .needs-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .need-tag {
          font-size: 0.75rem; font-weight: 600;
          background: #e6faf0; color: var(--c-forest);
          padding: 0.2rem 0.65rem; border-radius: 6px;
          border: 1px solid #c8f5df;
        }

        .comm-access {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.8rem; color: var(--c-text-muted); font-weight: 600;
          background: #f8faf9; padding: 0.5rem 0.8rem; border-radius: 8px;
        }

        .comm-actions {
          display: flex; gap: 0.6rem;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};
