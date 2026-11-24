import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { IconMail, IconPhone, IconMapPin, IconCheck } from './Icons';

export const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'informacion',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      alert("Por favor completa todos los campos del formulario.");
      return;
    }
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactForm({
        name: '',
        email: '',
        subject: 'informacion',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contacto" className="contact-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconMail size={16} />
            <span>Contacto y Preguntas Frecuentes</span>
          </span>
          <h2 className="section-title">
            Estamos a tu disposición para sembrar juntos
          </h2>
          <p className="section-subtitle">
            ¿Tienes dudas sobre cómo colaborar, enviar donaciones o sumarte a una expedición fluvial? Escríbenos o visítanos en Iquitos.
          </p>
        </div>

        {/* Top Info Cards */}
        <div className="contact-info-grid">
          <div className="contact-card card-base">
            <div className="contact-icon-box">
              <IconMapPin size={24} />
            </div>
            <h4>Sede Central en Iquitos</h4>
            <p>Jr. Putumayo N° 458, Iquitos, Loreto, Perú</p>
            <span className="contact-note">A 2 cuadras de la Plaza de Armas</span>
          </div>

          <div className="contact-card card-base">
            <div className="contact-icon-box">
              <IconPhone size={24} />
            </div>
            <h4>WhatsApp y Teléfono</h4>
            <p><strong>+51 982 451 092</strong></p>
            <span className="contact-note">Atención de Lunes a Sábado 8am – 7pm</span>
          </div>

          <div className="contact-card card-base">
            <div className="contact-icon-box">
              <IconMail size={24} />
            </div>
            <h4>Correo Institucional</h4>
            <p><strong>contacto@raicesdelfuturo.org.pe</strong></p>
            <span className="contact-note">Respuesta en menos de 24 horas</span>
          </div>
        </div>

        {/* Dual Layout: Contact Form & FAQ Accordion */}
        <div className="contact-faq-grid">
          {/* Form */}
          <div className="contact-form-card card-base">
            <h3>Envíanos un mensaje directo</h3>
            <p className="form-sub">Escríbenos para alianzas corporativas, voluntariado o dudas sobre donaciones.</p>

            {formSent && (
              <div className="contact-alert-success animate-pulse-subtle">
                <IconCheck size={18} />
                <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label">Nombre y Apellidos *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="form-input"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Correo electrónico de contacto *</label>
                <input
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  className="form-input"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Asunto de interés</label>
                <select
                  className="form-select"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                >
                  <option value="informacion">Información general del proyecto</option>
                  <option value="donacion-grande">Donación institucional o corporativa</option>
                  <option value="voluntariado">Pregunta sobre voluntariado</option>
                  <option value="escuela">Quiero registrar una nueva escuela rural</option>
                  <option value="prensa">Prensa y difusión</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tu mensaje *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Escribe aquí tu consulta o propuesta..."
                  className="form-textarea"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full">
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-container">
            <h3>Preguntas Frecuentes</h3>
            <p className="faq-sub">Conoce más detalles sobre nuestra labor fluvial y transparencia.</p>

            <div className="faq-accordion">
              {FAQS.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item card-base ${openFaq === faq.id ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {openFaq === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #ffffff;
        }
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 860px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
        }
        .contact-card {
          padding: 2.2rem 1.8rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--color-mint-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
        }
        .contact-card h4 {
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
        }
        .contact-card p {
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }
        .contact-note {
          font-size: 0.8rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .contact-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .contact-faq-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .contact-form-card {
          padding: 2.6rem;
        }
        @media (max-width: 600px) {
          .contact-form-card {
            padding: 1.8rem 1.4rem;
          }
        }
        .contact-form-card h3 {
          font-size: 1.55rem;
          margin-bottom: 0.35rem;
        }
        .form-sub {
          font-size: 0.9rem;
          margin-bottom: 1.6rem;
        }
        .contact-alert-success {
          background-color: #d1fae5;
          color: #065f46;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }
        .faq-container h3 {
          font-size: 1.55rem;
          margin-bottom: 0.35rem;
        }
        .faq-sub {
          font-size: 0.9rem;
          margin-bottom: 1.6rem;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .faq-item {
          padding: 0;
          overflow: hidden;
        }
        .faq-question-btn {
          width: 100%;
          padding: 1.3rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          text-align: left;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .faq-question-btn:hover {
          background-color: #faf7f2;
        }
        .faq-toggle-icon {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--color-forest);
          flex-shrink: 0;
        }
        .faq-answer {
          padding: 0 1.5rem 1.4rem 1.5rem;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </section>
  );
};
