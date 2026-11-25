import React, { useState } from 'react';
import { NEED_CATEGORIES, RESOURCE_NEEDS, COMMUNITIES } from '../data/mockData';
import { IconGift, IconHeart, IconPencil, IconBackpack, IconBook, IconSun, IconGraduation, IconBoat } from './Icons';

export const NeedsCatalog = ({ onDonateItem }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterCommunity, setFilterCommunity] = useState('all');

  const filteredResources = RESOURCE_NEEDS.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesCommunity = filterCommunity === 'all' || 
      resource.associatedCommunities.some(c => c.toLowerCase().includes(filterCommunity.toLowerCase())) ||
      resource.associatedCommunities.includes("Todas las 18 comunidades");
    return matchesCategory && matchesCommunity;
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'pencil': return <IconPencil size={24} />;
      case 'backpack': return <IconBackpack size={24} />;
      case 'book': return <IconBook size={24} />;
      case 'sun': return <IconSun size={24} />;
      case 'graduation': return <IconGraduation size={24} />;
      case 'boat': return <IconBoat size={24} />;
      default: return <IconGift size={24} />;
    }
  };

  return (
    <section id="necesidades" className="needs-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconGift size={16} />
            <span>Necesitamos tu Ayuda</span>
          </span>
          <h2 className="section-title">
            Lista de útiles, materiales y recursos indispensables
          </h2>
          <p className="section-subtitle">
            Cada cuaderno, mochila impermeable o libro abre un universo de posibilidades.
            Revisa las metas de recolección y elige el recurso que deseas apadrinar.
          </p>
        </div>

        {/* Dual Filters: Categories & Community Dropdown */}
        <div className="filters-wrapper">
          <div className="category-tabs">
            {NEED_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="community-dropdown-box">
            <label htmlFor="filter-comm" className="dropdown-label">
              Filtrar por comunidad:
            </label>
            <select
              id="filter-comm"
              className="form-select comm-select"
              value={filterCommunity}
              onChange={(e) => setFilterCommunity(e.target.value)}
            >
              <option value="all">Todas las comunidades</option>
              {COMMUNITIES.map((c) => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="resources-grid">
          {filteredResources.map((res) => {
            const percentage = Math.min(100, Math.round((res.collected / res.goal) * 100));

            return (
              <div key={res.id} className="resource-card card-base">
                <div className="res-header">
                  <div className="res-icon-wrap">
                    {getIcon(res.icon)}
                  </div>
                  <div className="res-badge-wrap">
                    <span className="badge badge-warm">{res.costEstimate}</span>
                    <span className={`badge ${res.urgency === 'Crítica' ? 'badge-urgent' : 'badge-green'}`}>
                      {res.urgency}
                    </span>
                  </div>
                </div>

                <h3 className="res-title">{res.title}</h3>
                <p className="res-description">{res.description}</p>

                {/* Progress bar */}
                <div className="res-progress-block">
                  <div className="progress-labels">
                    <span className="progress-collected">
                      <strong>{res.collected.toLocaleString()}</strong> de {res.goal.toLocaleString()} {res.unit}
                    </span>
                    <span className="progress-pct">{percentage}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Communities destination list */}
                <div className="res-destination">
                  <span className="dest-title">Destinado a:</span>
                  <div className="dest-chips">
                    {res.associatedCommunities.map((cName, i) => (
                      <span key={i} className="dest-chip">{cName}</span>
                    ))}
                  </div>
                </div>

                {/* Donate CTA button */}
                <button
                  type="button"
                  className="btn btn-accent btn-sm res-cta"
                  onClick={() => onDonateItem(res)}
                >
                  <IconHeart size={16} fill={true} />
                  <span>Donar este recurso</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Summary Note */}
        <div className="materials-note-card">
          <div className="note-icon">
            <IconHeart size={28} />
          </div>
          <div className="note-text">
            <h4>¿Tienes materiales educativos físicos para donar?</h4>
            <p>
              Recibimos útiles escolares nuevos y libros de cuentos/literatura infantil en buen estado en nuestros centros de acopio en Iquitos y Lima. ¡Nosotros nos encargamos del empaquetado impermeable y el traslado por río!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .needs-section {
          background: #ffffff;
        }
        .needs-section .section-title { color: var(--c-forest); }
        .filters-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
          background: #ffffff;
          padding: 1.25rem 1.75rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .category-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .cat-btn {
          background: #faf7f2;
          border: 1px solid var(--border-light);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .cat-btn:hover {
          background: #f0e9df;
          color: var(--color-primary-dark);
        }
        .cat-btn.active {
          background: var(--color-forest);
          color: #ffffff;
          border-color: var(--color-forest);
        }
        .community-dropdown-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dropdown-label {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          white-space: nowrap;
        }
        .comm-select {
          padding: 0.45rem 1rem;
          font-size: 0.86rem;
          min-width: 200px;
        }
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
        .resource-card {
          padding: 2rem 1.8rem;
          display: flex;
          flex-direction: column;
        }
        .res-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .resource-card {
          transition: all 0.4s var(--ease) !important;
        }
        .resource-card:hover {
          border-color: rgba(34,160,90,0.4) !important;
          box-shadow: 0 30px 60px rgba(5,15,9,0.14) !important;
        }
        .res-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, #e6faf0, #c8f5df);
          color: var(--c-forest);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(34,160,90,0.2);
        }
        .res-badge-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }
        .res-title {
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: var(--color-primary-dark);
          line-height: 1.3;
        }
        .res-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.3rem;
          flex-grow: 1;
        }
        .res-progress-block {
          background-color: #faf7f2;
          padding: 0.9rem 1.1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.2rem;
        }
        .progress-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          margin-bottom: 0.45rem;
        }
        .progress-collected {
          color: var(--text-main);
        }
        .progress-pct {
          font-weight: 800;
          color: var(--color-forest);
        }
        .progress-track {
          height: 10px;
          background: rgba(0,0,0,0.08);
          border-radius: var(--r-full);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #22a05a 0%, #4ecb84 100%);
          border-radius: var(--r-full);
          transition: width 0.9s ease;
          box-shadow: 0 2px 8px rgba(34,160,90,0.4);
        }
        .res-destination {
          margin-bottom: 1.4rem;
        }
        .dest-title {
          display: block;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.4rem;
        }
        .dest-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .dest-chip {
          font-size: 0.78rem;
          background-color: #eef5f0;
          color: var(--color-primary);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
        }
        .res-cta {
          width: 100%;
          margin-top: auto;
        }
        .materials-note-card {
          background: linear-gradient(135deg, #0d2b1a 0%, #174730 60%, #22a05a 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          padding: 2.2rem 2.8rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 768px) {
          .materials-note-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
          }
        }
        .note-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #d8f3dc;
        }
        .note-text h4 {
          color: #ffffff;
          font-size: 1.35rem;
          margin-bottom: 0.4rem;
        }
        .note-text p {
          color: #e2f4e8;
          font-size: 0.98rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
