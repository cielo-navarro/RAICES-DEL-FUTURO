import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { IconSparkles, IconCheck, IconClose } from './Icons';

export const ResultsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePhotoModal, setActivePhotoModal] = useState(null);
  const [beforeAfterMode, setBeforeAfterMode] = useState('despues'); // 'antes' or 'despues'

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      caption: "Alegría en la entrega de mochilas en la I.E. Padre Cocha, Río Nanay",
      community: "Padre Cocha"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      caption: "Clase de lectura compartida en el aula rural de San Rafael",
      community: "San Rafael"
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      caption: "Estudiante de primaria con su primer libro de cuentos ilustrados",
      community: "Dos de Mayo"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      caption: "Taller pedagógico con docentes de escuelas multigrado de la cuenca",
      community: "Santa Rosa"
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      caption: "Brigada de voluntarios clasificando materiales en el puerto de Bellavista",
      community: "Puerto Nanay"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      caption: "Inauguración del rincón de lectura infantil en la comunidad de Orán",
      community: "Orán"
    }
  ];

  return (
    <section id="resultados" className="results-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconSparkles size={16} />
            <span>Resultados e Impacto</span>
          </span>
          <h2 className="section-title">
            Historias reales, sonrisas sembradas en la Amazonía
          </h2>
          <p className="section-subtitle">
            Cada cifra representa una vida transformada, un niño que no abandonó sus estudios y un maestro rural que sintió que no estaba solo.
          </p>
        </div>

        {/* WOW Feature: Antes vs Después Interactivo */}
        <div className="before-after-card card-base glass-card">
          <div className="ba-header">
            <div>
              <span className="badge badge-warm">Transformación en las Escuelas Rurales</span>
              <h3>El Impacto Visible de tu Ayuda</h3>
            </div>
            <div className="ba-toggle-tabs">
              <button
                type="button"
                className={`ba-tab-btn ${beforeAfterMode === 'antes' ? 'active-red' : ''}`}
                onClick={() => setBeforeAfterMode('antes')}
              >
                La Realidad Anterior (Antes)
              </button>
              <button
                type="button"
                className={`ba-tab-btn ${beforeAfterMode === 'despues' ? 'active-green' : ''}`}
                onClick={() => setBeforeAfterMode('despues')}
              >
                Con Raíces del Futuro (Hoy)
              </button>
            </div>
          </div>

          <div className="ba-content-grid">
            {beforeAfterMode === 'antes' ? (
              <div className="ba-state-view red-state">
                <div className="ba-badge-row">
                  <span className="ba-badge-alert">Escuelas en Abandono Fluvial</span>
                </div>
                <div className="ba-items-list">
                  <div className="ba-item">
                    <span className="ba-cross">✕</span>
                    <div>
                      <strong>1 libro compartido entre 5 o 6 niños</strong>
                      <p>Los alumnos debían turnarse para copiar textos a mano en hojas sueltas.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-cross">✕</span>
                    <div>
                      <strong>Mochilas deterioradas por el agua</strong>
                      <p>Al navegar en canoa bajo chubascos tropicales, los cuadernos quedaban inservibles.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-cross">✕</span>
                    <div>
                      <strong>Estudio con mecheros de kerosene</strong>
                      <p>Humo tóxico y baja iluminación nocturna que causaba deserción en secundaria.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-cross">✕</span>
                    <div>
                      <strong>Aislamiento total de los docentes</strong>
                      <p>Maestros rurales que debían viajar horas por río costeando sus propios materiales.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="ba-state-view green-state">
                <div className="ba-badge-row">
                  <span className="ba-badge-success">Comunidades con Esperanza y Recursos</span>
                </div>
                <div className="ba-items-list">
                  <div className="ba-item">
                    <span className="ba-check"><IconCheck size={16} /></span>
                    <div>
                      <strong>Kits individuales completos y cuadernos propios</strong>
                      <p>Cada escolar tiene sus 4 cuadernos, estuche de colores y lápices para todo el año.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-check"><IconCheck size={16} /></span>
                    <div>
                      <strong>Mochilas de lona hermética e impermeable</strong>
                      <p>Materiales secos y protegidos aún en los días de creciente y lluvia torrencial.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-check"><IconCheck size={16} /></span>
                    <div>
                      <strong>Lámparas solares de estudio y bibliotecas comunitarias</strong>
                      <p>Luz limpia para hacer las tareas al anochecer y más de 30 libros por rincón de lectura.</p>
                    </div>
                  </div>
                  <div className="ba-item">
                    <span className="ba-check"><IconCheck size={16} /></span>
                    <div>
                      <strong>Acompañamiento pedagógico constante</strong>
                      <p>Brigadas de voluntarios universitarios que viajan en lancha para reforzar aprendizajes.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="gallery-header-row">
          <h3 className="gallery-heading">Galería de Expediciones y Entregas</h3>
          <span className="gallery-tip">Haz clic sobre cualquier foto para ampliarla</span>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item card-base"
              onClick={() => setActivePhotoModal(img)}
            >
              <img src={img.url} alt={img.caption} className="gallery-photo" loading="lazy" />
              <div className="gallery-comm-tag">{img.community}</div>
              <div className="gallery-caption-overlay">
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider / Showcase */}
        <div className="testimonials-card card-base glass-card">
          <div className="testimonials-header">
            <span className="badge badge-warm">Testimonios de Nuestra Comunidad</span>
            <h3>Voces desde el río y la ciudad</h3>
          </div>

          <div className="testimonial-body">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              {TESTIMONIALS[activeTestimonial].quote}
            </p>
            <div className="author-box">
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="author-avatar"
              />
              <div>
                <strong className="author-name">{TESTIMONIALS[activeTestimonial].name}</strong>
                <span className="author-role">{TESTIMONIALS[activeTestimonial].role}</span>
                <span className="author-comm">({TESTIMONIALS[activeTestimonial].community})</span>
              </div>
            </div>
          </div>

          {/* Testimonial Nav Dots */}
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`dot-btn ${activeTestimonial === i ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Ver testimonio ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Transparency Report Strip */}
        <div className="transparency-strip card-base glass-card">
          <div className="transparency-content">
            <h4>Transparencia y Rendición de Cuentas Loreto 2026</h4>
            <p>
              Publicamos semestralmente el desglose financiero de cada donación, listas de cotejo de recepción en comunidades con firma y huella de los Apus, y el registro audiovisual de cada expedición.
            </p>
          </div>
          <div className="transparency-badge-box">
            <div className="t-badge-item">
              <IconCheck size={18} className="t-icon" />
              <span>100% de entregas auditadas con actas comunales</span>
            </div>
            <div className="t-badge-item">
              <IconCheck size={18} className="t-icon" />
              <span>Alianzas con directores DRE Loreto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {activePhotoModal && (
        <div className="modal-overlay" onClick={() => setActivePhotoModal(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActivePhotoModal(null)}
            >
              <IconClose size={24} />
            </button>
            <img src={activePhotoModal.url} alt={activePhotoModal.caption} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-badge">{activePhotoModal.community}</span>
              <p>{activePhotoModal.caption}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .results-section {
          background-color: var(--color-beige-bg);
        }
        /* Before / After Card */
        .before-after-card {
          padding: 2.8rem 3rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 600px) {
          .before-after-card {
            padding: 1.8rem 1.4rem;
          }
        }
        .ba-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .ba-header h3 {
          font-size: 1.8rem;
          margin-top: 0.4rem;
        }
        .ba-toggle-tabs {
          display: flex;
          gap: 0.5rem;
          background: #faf7f2;
          padding: 0.35rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
        }
        .ba-tab-btn {
          border: none;
          background: none;
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ba-tab-btn.active-red {
          background: #fee2e2;
          color: #991b1b;
          box-shadow: 0 2px 8px rgba(153, 27, 27, 0.15);
        }
        .ba-tab-btn.active-green {
          background: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(10, 35, 24, 0.2);
        }
        .ba-badge-row {
          margin-bottom: 1.4rem;
        }
        .ba-badge-alert {
          background: #fee2e2;
          color: #991b1b;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
        }
        .ba-badge-success {
          background: var(--color-mint-light);
          color: var(--color-primary-dark);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
        }
        .ba-items-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .ba-items-list {
            grid-template-columns: 1fr;
          }
        }
        .ba-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: #ffffff;
          padding: 1.2rem 1.4rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }
        .ba-cross {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ba-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-mint-light);
          color: var(--color-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ba-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.25rem;
        }
        .ba-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        /* Gallery */
        .gallery-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .gallery-heading {
          font-size: 1.6rem;
        }
        .gallery-tip {
          font-size: 0.82rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
        .gallery-item {
          position: relative;
          height: 270px;
          overflow: hidden;
          cursor: pointer;
        }
        .gallery-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .gallery-item:hover .gallery-photo {
          transform: scale(1.08);
        }
        .gallery-comm-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(10, 35, 24, 0.85);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          z-index: 2;
        }
        .gallery-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.4rem 1.1rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10, 35, 24, 0.94) 100%);
          color: #ffffff;
          font-size: 0.84rem;
          line-height: 1.4;
        }
        /* Lightbox */
        .lightbox-content {
          background: #000000;
          border-radius: var(--radius-xl);
          overflow: hidden;
          max-width: 850px;
          width: 100%;
          position: relative;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
        }
        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.25);
          border: none;
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        .lightbox-img {
          width: 100%;
          max-height: 550px;
          object-fit: contain;
          display: block;
        }
        .lightbox-caption {
          padding: 1.4rem 1.8rem;
          background: #111111;
          color: #ffffff;
        }
        .lightbox-badge {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 800;
          background: var(--color-emerald);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.4rem;
        }
        .lightbox-caption p {
          color: #e5e5e5;
          font-size: 0.95rem;
        }
        /* Testimonials */
        .testimonials-card {
          padding: 3.5rem 3.5rem 2.5rem 3.5rem;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .testimonials-card {
            padding: 2.2rem 1.6rem 2rem 1.6rem;
          }
        }
        .testimonials-header {
          margin-bottom: 2.2rem;
        }
        .testimonials-header h3 {
          font-size: 2rem;
          margin-top: 0.5rem;
        }
        .testimonial-body {
          max-width: 820px;
          margin: 0 auto;
        }
        .quote-mark {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          line-height: 1;
          color: var(--color-mint-light);
          margin-bottom: -1.2rem;
        }
        .quote-text {
          font-size: 1.25rem;
          font-family: var(--font-heading);
          font-style: italic;
          color: var(--color-primary-dark);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        @media (max-width: 600px) {
          .quote-text {
            font-size: 1.1rem;
          }
        }
        .author-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          text-align: left;
          margin-bottom: 1.8rem;
        }
        .author-avatar {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-forest);
        }
        .author-name {
          display: block;
          font-size: 1.1rem;
          color: var(--color-primary-dark);
        }
        .author-role {
          display: block;
          font-size: 0.85rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        .author-comm {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .testimonial-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }
        .dot-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e2ded5;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dot-btn.active {
          width: 32px;
          border-radius: 12px;
          background: var(--color-forest);
        }
        /* Transparency */
        .transparency-strip {
          padding: 2.4rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        @media (max-width: 860px) {
          .transparency-strip {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.6rem;
          }
        }
        .transparency-content h4 {
          font-size: 1.45rem;
          margin-bottom: 0.4rem;
        }
        .transparency-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 680px;
        }
        .transparency-badge-box {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .t-badge-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .t-icon {
          color: var(--color-emerald);
        }
      `}</style>
    </section>
  );
};
