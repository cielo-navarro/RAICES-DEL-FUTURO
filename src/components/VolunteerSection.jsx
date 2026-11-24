import React, { useState } from 'react';
import { IconUsers, IconHeart, IconCheck, IconSparkles } from './Icons';

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
      setErrorMessage('Por favor completa los campos obligatorios: Nombre, Correo y WhatsApp.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onVolunteerSuccess(formData);
      // Reset form
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
    }, 700);
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
            Sé parte de la tripulación de la esperanza
          </h2>
          <p className="section-subtitle">
            Buscamos personas apasionadas, comprometidas y solidarias. Puedes sumarte en expediciones fluviales en Loreto o apoyar de forma remota desde cualquier ciudad del país.
          </p>
        </div>

        <div className="volunteer-grid">
          {/* Left Column: Modalities & Testimonial Info */}
          <div className="vol-info-col">
            <div className="vol-modality-card card-base">
              <div className="modality-badge">Modalidad 1</div>
              <h3 className="modality-title">Voluntariado en Terreno (Loreto)</h3>
              <p className="modality-desc">
                Viaja en nuestras expediciones fluviales por los ríos Nanay, Itaya y Amazonas. Participarás en la entrega directa, clasificación de materiales y talleres didácticos con niños y maestros.
              </p>
              <ul className="modality-checks">
                <li><IconCheck size={16} className="check-icon" /> Talleres de animación a la lectura y cuentacuentos</li>
                <li><IconCheck size={16} className="check-icon" /> Dinámicas lúdicas, pintura y expresión artística</li>
                <li><IconCheck size={16} className="check-icon" /> Logística fluvial, carga y clasificación en puerto</li>
              </ul>
            </div>

            <div className="vol-modality-card card-base">
              <div className="modality-badge">Modalidad 2</div>
              <h3 className="modality-title">Voluntariado Digital y Remoto</h3>
              <p className="modality-desc">
                Si estás en Lima, Trujillo, Arequipa o el extranjero, tu talento también construye futuros. Apoya desde casa en nuestras áreas estratégicas.
              </p>
              <ul className="modality-checks">
                <li><IconCheck size={16} className="check-icon" /> Diseño gráfico, redes sociales y campañas de difusión</li>
                <li><IconCheck size={16} className="check-icon" /> Alianzas corporativas y recaudación de fondos</li>
                <li><IconCheck size={16} className="check-icon" /> Monitoreo de impacto y redacción de informes</li>
              </ul>
            </div>

            <div className="vol-perk-box">
              <IconSparkles size={24} className="perk-icon" />
              <div>
                <strong>Certificación Oficial de Voluntariado</strong>
                <p>Otorgamos constancia institucional acreditando horas de labor comunitaria y proyección social.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration Form */}
          <div className="vol-form-col">
            <div className="volunteer-form-card card-base">
              <div className="form-card-header">
                <h3>Formulario de Inscripción de Voluntarios</h3>
                <p>Completa tus datos y nuestro equipo de coordinación se contactará contigo por WhatsApp.</p>
              </div>

              {errorMessage && (
                <div className="form-alert-error">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Nombre completo *
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
                      placeholder="tu@email.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="whatsapp">
                      Teléfono / WhatsApp *
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
                      <option value="Otra Ciudad Perú">Otra ciudad del Perú</option>
                      <option value="Internacional">Fuera del Perú</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modality">
                      Preferencia de participación *
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      className="form-select"
                      value={formData.modality}
                      onChange={handleChange}
                    >
                      <option value="presencial">Presencial en Loreto (Expediciones)</option>
                      <option value="remoto">100% Remoto (Digital / Logística)</option>
                      <option value="mixto">Ambas modalidades</option>
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
                      <option value="arte">Arte, Música y Teatro Comunitario</option>
                      <option value="logistica">Logística Fluvial y Acopio</option>
                      <option value="fotografia">Fotografía y Comunicación</option>
                      <option value="salud">Apoyo Psicológico y Salud Básica</option>
                      <option value="fondos">Recaudación y Alianzas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="availability">
                      Disponibilidad *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="form-select"
                      value={formData.availability}
                      onChange={handleChange}
                    >
                      <option value="fines-de-semana">Fines de semana</option>
                      <option value="campana-intensiva">Campañas intensivas (3 a 5 días)</option>
                      <option value="horas-semanales">4 a 6 horas semanales (remoto)</option>
                      <option value="flexible">Horario flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="motivation">
                    ¿Qué te motiva a sumarte a Raíces del Futuro? (Opcional)
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows="3"
                    className="form-textarea"
                    placeholder="Cuéntanos brevemente tu experiencia, habilidades o qué te inspira a apoyar a las comunidades amazónicas..."
                    value={formData.motivation}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-full submit-vol-btn"
                >
                  <IconHeart size={18} fill={true} />
                  <span>{isSubmitting ? 'Procesando postulación...' : 'Enviar postulación de voluntariado'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .volunteer-section {
          background-color: #ffffff;
        }
        .volunteer-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .volunteer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .vol-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .vol-modality-card {
          padding: 2.2rem;
          position: relative;
        }
        .modality-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          background-color: var(--color-mint-light);
          color: var(--color-primary-dark);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.8rem;
        }
        .modality-title {
          font-size: 1.35rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.6rem;
        }
        .modality-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.1rem;
        }
        .modality-checks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .modality-checks li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 600;
        }
        .check-icon {
          color: var(--color-forest);
          flex-shrink: 0;
        }
        .vol-perk-box {
          background-color: #faf7f2;
          border: 1px dashed var(--color-sage);
          padding: 1.25rem 1.6rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .perk-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .vol-perk-box strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.2rem;
        }
        .vol-perk-box p {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .volunteer-form-card {
          padding: 2.6rem 2.8rem;
          border: 1px solid var(--border-light);
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
          font-size: 1.6rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.4rem;
        }
        .form-card-header p {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .form-alert-error {
          background-color: #fee2e2;
          color: #991b1b;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        .submit-vol-btn {
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
};
