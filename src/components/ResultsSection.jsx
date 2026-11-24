import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { IconSparkles, IconCheck } from './Icons';

export const ResultsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
      caption: "Alegría en la entrega de mochilas en la I.E. Padre Cocha, Río Nanay"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      caption: "Clase de lectura compartida en el aula rural de San Rafael"
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
      caption: "Estudiante de primaria con su primer libro de cuentos ilustrados"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80",
      caption: "Taller pedagógico con docentes de escuelas multigrado de la cuenca"
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80",
      caption: "Brigada de voluntarios clasificando materiales en el puerto de Bellavista"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
      caption: "Inauguración del rincón de lectura infantil en la comunidad de Orán"
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

        {/* Photo Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item card-base">
              <img src={img.url} alt={img.caption} className="gallery-photo" loading="lazy" />
              <div className="gallery-caption-overlay">
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider / Showcase */}
        <div className="testimonials-card card-base">
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
        <div className="transparency-strip">
          <div className="transparency-content">
            <h4>Transparencia y Rendición de Cuentas 2026</h4>
            <p>
              Publicamos semestralmente el desglose financiero de cada donación, listas de cotejo de recepción en comunidades con firma de los Apus y el registro fotográfico de cada expedición.
            </p>
          </div>
          <div className="transparency-badge-box">
            <div className="t-badge-item">
              <IconCheck size={18} className="t-icon" />
              <span>100% de entregas auditables</span>
            </div>
            <div className="t-badge-item">
              <IconCheck size={18} className="t-icon" />
              <span>Alianzas con directores DRE Loreto</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .results-section {
          background-color: var(--color-beige-bg);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
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
          height: 250px;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }
        .gallery-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover .gallery-photo {
          transform: scale(1.06);
        }
        .gallery-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.2rem 1rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(19, 51, 36, 0.9) 100%);
          color: #ffffff;
          font-size: 0.82rem;
          line-height: 1.4;
          opacity: 0.92;
          transition: opacity 0.3s ease;
        }
        .testimonials-card {
          padding: 3.5rem 3.5rem 2.5rem 3.5rem;
          margin-bottom: 3.5rem;
          background: #ffffff;
          border-radius: var(--radius-xl);
          position: relative;
        }
        @media (max-width: 768px) {
          .testimonials-card {
            padding: 2.2rem 1.6rem 2rem 1.6rem;
          }
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 2.2rem;
        }
        .testimonials-header h3 {
          font-size: 1.8rem;
          color: var(--color-primary-dark);
          margin-top: 0.5rem;
        }
        .testimonial-body {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .quote-mark {
          font-family: var(--font-heading);
          font-size: 4rem;
          line-height: 1;
          color: var(--color-mint-light);
          margin-bottom: -1rem;
        }
        .quote-text {
          font-size: 1.2rem;
          font-family: var(--font-heading);
          font-style: italic;
          color: var(--color-primary-dark);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        @media (max-width: 600px) {
          .quote-text {
            font-size: 1.05rem;
          }
        }
        .author-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.1rem;
          text-align: left;
          margin-bottom: 1.5rem;
        }
        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-forest);
        }
        .author-name {
          display: block;
          font-size: 1.05rem;
          color: var(--color-primary-dark);
        }
        .author-role {
          display: block;
          font-size: 0.82rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .author-comm {
          font-size: 0.78rem;
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
          transition: all 0.2s ease;
        }
        .dot-btn.active {
          width: 28px;
          border-radius: 12px;
          background: var(--color-forest);
        }
        .transparency-strip {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 2.2rem 2.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }
        @media (max-width: 860px) {
          .transparency-strip {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.6rem;
          }
        }
        .transparency-content h4 {
          font-size: 1.35rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.4rem;
        }
        .transparency-content p {
          font-size: 0.92rem;
          color: var(--text-muted);
          max-width: 650px;
        }
        .transparency-badge-box {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex-shrink: 0;
        }
        .t-badge-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .t-icon {
          color: var(--color-forest);
        }
      `}</style>
    </section>
  );
};
