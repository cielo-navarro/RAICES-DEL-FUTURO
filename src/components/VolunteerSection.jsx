import React, { useState } from 'react';
import { IconUsers, IconHeart, IconCheck, IconSparkles, IconSprout, IconShield } from './Icons';

export const VolunteerSection = ({ onVolunteerSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    city: 'Iquitos',
    modality: 'presencial',
    area: 'pedagogia',
    availability: 'fines-de-semana',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Por favor completa los campos requeridos: Nombre, Correo y WhatsApp.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onVolunteerSuccess(formData);
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        city: 'Iquitos',
        modality: 'presencial',
        area: 'pedagogia',
        availability: 'fines-de-semana',
        motivation: ''
      });
    }, 600);
  };

  const getAreaLabel = (area) => {
    switch (area) {
      case 'pedagogia': return 'Talleres Pedagógicos y Lectura';
      case 'arte': return 'Arte y Expresión Infantil';
      case 'logistica': return 'Logística y Navegación Fluvial';
      case 'fotografia': return 'Fotografía y Comunicación';
      case 'salud': return 'Salud Básica y Emocional';
      default: return 'Alianzas y Difusión';
    }
  };

  return (
    <section id="voluntariado" className="volunteer-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconUsers size={16} />
            <span>Voluntariado Amazónico</span>
          </span>
          <h2 className="section-title">
            Únete a la tripulación que transforma vidas por el río
          </h2>
          <p className="section-subtitle">
            No necesitas experiencia previa en selva, solo pasión y ganas de sembrar futuro. Participa en expediciones en Loreto o colabora de manera 100% remota.
          </p>
        </div>

        <div className="volunteer-interactive-grid">
          {/* Left Column: Live Interactive Volunteer ID Card */}
          <div className="vol-preview-col">
            <div className="badge-preview-title">
              <span className="badge badge-warm">
                <IconSparkles size={14} />
                <span>Vista Previa en Vivo de tu Carné</span>
              </span>
              <h3>Tu Credencial de Voluntario</h3>
              <p>Se actualiza en tiempo real mientras completas tu postulación:</p>
            </div>

            {/* The Live Card */}
            <div className="live-id-card card-base">
              <div className="id-card-top-pattern"></div>
              <div className="id-card-header">
                <div className="id-brand">
                  <div className="id-logo-box">
                    <IconSprout size={20} />
                  </div>
                  <div>
                    <strong>RAÍCES DEL FUTURO</strong>
                    <span>Loreto • Voluntariado Fluvial</span>
                  </div>
                </div>
                <div className="id-chip">
                  <IconShield size={16} />
                  <span>PERÚ 2026</span>
                </div>
              </div>

              <div className="id-card-body">
                <div className="id-user-avatar">
                  <div className="avatar-placeholder">
                    {formData.fullName ? formData.fullName.charAt(0).toUpperCase() : 'V'}
                  </div>
                </div>

                <div className="id-user-info">
                  <span className="id-label">Nombre del Voluntario/a:</span>
                  <h4 className="id-name">
                    {formData.fullName || 'Tu Nombre y Apellido'}
                  </h4>

                  <div className="id-tags-grid">
                    <div className="id-tag-item">
                      <span className="tag-k">Sede / Ciudad:</span>
                      <strong className="tag-v">{formData.city}</strong>
                    </div>
                    <div className="id-tag-item">
                      <span className="tag-k">Modalidad:</span>
                      <strong className="tag-v">{formData.modality.toUpperCase()}</strong>
                    </div>
                  </div>

                  <div className="id-tag-item full">
                    <span className="tag-k">Misión Asignada:</span>
                    <strong className="tag-v text-forest">{getAreaLabel(formData.area)}</strong>
                  </div>
                </div>
              </div>

              <div className="id-card-footer">
                <span className="id-slogan">«Sembrando oportunidades, construyendo futuros»</span>
                <span className="id-code">ID-RDF-{Math.abs((formData.fullName.length * 97) % 9000 + 1000)}</span>
              </div>
            </div>

            {/* Benefits pills */}
            <div className="vol-perks-list">
              <div className="perk-item">
                <IconCheck size={16} className="perk-ico" />
                <span>Constancia oficial acreditando horas de labor comunitaria</span>
              </div>
              <div className="perk-item">
                <IconCheck size={16} className="perk-ico" />
                <span>Inducción previa y talleres de seguridad fluvial en Iquitos</span>
              </div>
              <div className="perk-item">
                <IconCheck size={16} className="perk-ico" />
                <span>Convivencia enriquecedora con sabios y familias Kukama</span>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="vol-form-col">
            <div className="volunteer-form-card card-base glass-card">
              <div className="form-card-header">
                <h3>Formulario de Inscripción</h3>
                <p>Completa tus datos para coordinar tu incorporación al equipo.</p>
              </div>

              {errorMessage && (
                <div className="form-alert-error">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Nombre y Apellidos completos *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Ej. Cielo Navarro"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="tu@correo.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="whatsapp">
                      WhatsApp de contacto *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      placeholder="+51 987 654 321"
                      className="form-input"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">
                      Ciudad de residencia *
                    </label>
                    <select
                      id="city"
                      name="city"
                      className="form-select"
                      value={formData.city}
                      onChange={handleChange}
                    >
                      <option value="Iquitos">Iquitos (Loreto)</option>
                      <option value="Nauta">Nauta (Loreto)</option>
                      <option value="Yurimaguas">Yurimaguas (Loreto)</option>
                      <option value="Lima">Lima Metropolitana</option>
                      <option value="Arequipa">Arequipa</option>
                      <option value="Trujillo">Trujillo</option>
                      <option value="Otra Ciudad Perú">Otra provincia del Perú</option>
                      <option value="Internacional">Fuera del Perú</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modality">
                      Modalidad de apoyo *
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      className="form-select"
                      value={formData.modality}
                      onChange={handleChange}
                    >
                      <option value="presencial">Presencial en Loreto (Expedición Fluvial)</option>
                      <option value="remoto">100% Remoto (Digital / Apoyo a distancia)</option>
                      <option value="mixto">Mixto (Remoto y viajo en campañas)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="area">
                      Área de mayor interés *
                    </label>
                    <select
                      id="area"
                      name="area"
                      className="form-select"
                      value={formData.area}
                      onChange={handleChange}
                    >
                      <option value="pedagogia">Talleres Pedagógicos y Lectura</option>
                      <option value="arte">Arte, Música y Teatro Infantil</option>
                      <option value="logistica">Logística Fluvial y Empaquetado</option>
                      <option value="fotografia">Fotografía y Redes Sociales</option>
                      <option value="salud">Apoyo Psicológico y Salud Básica</option>
                      <option value="fondos">Alianzas y Búsqueda de Donantes</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="availability">
                      Disponibilidad de tiempo *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="form-select"
                      value={formData.availability}
                      onChange={handleChange}
                    >
                      <option value="fines-de-semana">Fines de semana</option>
                      <option value="campana-intensiva">Expediciones de 3 a 5 días</option>
                      <option value="horas-semanales">4 a 6 horas por semana (Remoto)</option>
                      <option value="flexible">Horarios flexibles</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="motivation">
                    ¿Qué te motiva a sumarte a Raíces del Futuro?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows="3"
                    className="form-textarea"
                    placeholder="Cuéntanos tus ideas, experiencias o qué te inspira a ayudar a los niños de la selva..."
                    value={formData.motivation}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-full"
                >
                  <IconHeart size={20} fill={true} />
                  <span>{isSubmitting ? 'Generando tu credencial...' : 'Enviar mi postulación y obtener carné'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .volunteer-section {
          background: #ffffff;
        }
        .volunteer-interactive-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .volunteer-interactive-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .vol-preview-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .badge-preview-title h3 {
          font-size: 1.7rem;
          margin-top: 0.5rem;
          color: var(--color-primary-dark);
        }
        .badge-preview-title p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        /* Live ID Card Styling */
        .live-id-card {
          background: linear-gradient(135deg, #0a2318 0%, #163829 60%, #1f4e38 100%);
          border-radius: var(--radius-xl);
          padding: 2.2rem 2.4rem;
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(10, 35, 24, 0.35);
          border: 2px solid #52b788;
          position: relative;
          overflow: hidden;
        }
        .id-card-top-pattern {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(231, 111, 81, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .id-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          margin-bottom: 1.5rem;
        }
        .id-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .id-logo-box {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--color-emerald) 0%, var(--color-forest) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }
        .id-brand strong {
          display: block;
          font-size: 0.92rem;
          letter-spacing: 0.04em;
        }
        .id-brand span {
          display: block;
          font-size: 0.72rem;
          color: var(--color-mint-light);
        }
        .id-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.12);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--color-sunset-gold);
        }
        .id-card-body {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 1.6rem;
        }
        @media (max-width: 500px) {
          .id-card-body {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        .avatar-placeholder {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(231, 111, 81, 0.35);
          border: 2px solid #ffffff;
        }
        .id-user-info {
          flex-grow: 1;
        }
        .id-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #74c69d;
          display: block;
        }
        .id-name {
          font-size: 1.45rem;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .id-tags-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .id-tag-item {
          display: flex;
          flex-direction: column;
        }
        .tag-k {
          font-size: 0.68rem;
          color: #92b19e;
          text-transform: uppercase;
        }
        .tag-v {
          font-size: 0.84rem;
          color: #ffffff;
        }
        .text-forest {
          color: #74c69d !important;
        }
        .id-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.76rem;
        }
        .id-slogan {
          font-family: var(--font-heading);
          font-style: italic;
          color: #d8f3dc;
        }
        .id-code {
          color: var(--color-sunset-gold);
          font-weight: 800;
          letter-spacing: 0.05em;
        }
        .vol-perks-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--text-main);
          font-weight: 600;
        }
        .perk-ico {
          color: var(--color-emerald);
          flex-shrink: 0;
        }
        .volunteer-form-card {
          padding: 2.8rem 3rem;
        }
        @media (max-width: 600px) {
          .volunteer-form-card {
            padding: 1.8rem 1.4rem;
          }
        }
        .form-card-header {
          margin-bottom: 1.8rem;
        }
        .form-card-header h3 {
          font-size: 1.7rem;
          margin-bottom: 0.35rem;
        }
        .form-card-header p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .form-alert-error {
          background: #fee2e2;
          color: #991b1b;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};
