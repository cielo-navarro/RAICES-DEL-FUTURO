import React from 'react';
import { IconClose, IconHeart, IconGift, IconUsers, IconSprout } from './Icons';

// Modal for community detailed view
export const CommunityModal = ({ community, onClose, onDonateToCommunity }) => {
  if (!community) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content comm-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
          <IconClose size={22} />
        </button>

        <div className="modal-header-visual">
          <img src={community.image} alt={community.name} className="modal-hero-img" />
          <div className="modal-hero-tag">
            <span>{community.cuenca}</span>
          </div>
        </div>

        <div className="modal-body-content">
          <div className="modal-title-row">
            <div>
              <h3 className="modal-comm-name">{community.name}</h3>
              <span className="modal-school-name">{community.schoolName}</span>
            </div>
            <span className={`badge ${community.urgencyClass}`}>
              Urgencia: {community.urgency}
            </span>
          </div>

          <p className="modal-comm-desc">{community.description}</p>

          <div className="modal-specs-grid">
            <div className="modal-spec-cell">
              <strong>Población:</strong>
              <span>{community.population}</span>
            </div>
            <div className="modal-spec-cell">
              <strong>Estudiantes:</strong>
              <span>{community.students}</span>
            </div>
            <div className="modal-spec-cell">
              <strong>Acceso Fluvial:</strong>
              <span>{community.distance}</span>
            </div>
            <div className="modal-spec-cell">
              <strong>Docente / Coordinador:</strong>
              <span>{community.teacher}</span>
            </div>
          </div>

          <div className="modal-wishlist-box">
            <h4>Detalle de Recursos Solicitados para esta Escuela:</h4>
            <p className="wishlist-text">{community.wishlistDetails}</p>
          </div>

          <div className="modal-actions-row">
            <button
              type="button"
              className="btn btn-outline btn-md"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary btn-md flex-grow"
              onClick={() => {
                onClose();
                onDonateToCommunity(community);
              }}
            >
              <IconHeart size={16} fill={true} />
              <span>Apadrinar materiales para {community.name}</span>
            </button>
          </div>
        </div>

        <style>{`
          .comm-modal-box {
            padding: 0;
            overflow: hidden;
            max-width: 650px;
          }
          .modal-close-btn {
            position: absolute;
            top: 14px;
            right: 14px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary-dark);
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }
          .modal-header-visual {
            position: relative;
            height: 240px;
            overflow: hidden;
          }
          .modal-hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .modal-hero-tag {
            position: absolute;
            bottom: 14px;
            left: 18px;
            background: rgba(19, 51, 36, 0.85);
            backdrop-filter: blur(6px);
            color: #ffffff;
            font-size: 0.82rem;
            font-weight: 700;
            padding: 0.3rem 0.85rem;
            border-radius: var(--radius-full);
          }
          .modal-body-content {
            padding: 2rem 2.2rem 2.4rem 2.2rem;
          }
          .modal-title-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .modal-comm-name {
            font-size: 1.55rem;
            color: var(--color-primary-dark);
            line-height: 1.2;
          }
          .modal-school-name {
            font-size: 0.9rem;
            color: var(--color-forest);
            font-weight: 600;
          }
          .modal-comm-desc {
            font-size: 0.94rem;
            color: var(--text-muted);
            line-height: 1.6;
            margin-bottom: 1.4rem;
          }
          .modal-specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.9rem;
            background-color: #faf7f2;
            padding: 1.1rem 1.3rem;
            border-radius: var(--radius-md);
            margin-bottom: 1.5rem;
          }
          @media (max-width: 500px) {
            .modal-specs-grid {
              grid-template-columns: 1fr;
            }
          }
          .modal-spec-cell strong {
            display: block;
            font-size: 0.78rem;
            text-transform: uppercase;
            color: var(--text-light);
            letter-spacing: 0.03em;
          }
          .modal-spec-cell span {
            font-size: 0.88rem;
            color: var(--text-main);
            font-weight: 600;
          }
          .modal-wishlist-box {
            background-color: #f0f7f2;
            border-left: 4px solid var(--color-forest);
            padding: 1rem 1.25rem;
            border-radius: 4px;
            margin-bottom: 1.8rem;
          }
          .modal-wishlist-box h4 {
            font-size: 0.95rem;
            color: var(--color-primary-dark);
            margin-bottom: 0.35rem;
          }
          .wishlist-text {
            font-size: 0.9rem;
            color: var(--color-forest);
            line-height: 1.5;
          }
          .modal-actions-row {
            display: flex;
            gap: 1rem;
          }
          .flex-grow {
            flex-grow: 1;
          }
        `}</style>
      </div>
    </div>
  );
};

// Quick Help Chooser Modal («Quiero ayudar»)
export const HelpModal = ({ isOpen, onClose, onSelectOption }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content help-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
          <IconClose size={22} />
        </button>

        <div className="help-modal-header">
          <span className="badge badge-green">¿Cómo te gustaría colaborar?</span>
          <h2>Únete a Raíces del Futuro</h2>
          <p>Elige la forma en la que deseas sumar tu corazón por la educación en Loreto:</p>
        </div>

        <div className="help-options-grid">
          <div
            className="help-opt-card card-base"
            onClick={() => {
              onClose();
              onSelectOption('donar-materiales');
            }}
          >
            <div className="opt-icon-circle opt-green">
              <IconGift size={28} />
            </div>
            <h3>Donar Materiales y Útiles</h3>
            <p>Entrega mochilas, cuadernos, libros o lápices en nuestros centros de acopio en Iquitos y Lima.</p>
            <span className="opt-btn-text">Ir a donación de materiales →</span>
          </div>

          <div
            className="help-opt-card card-base"
            onClick={() => {
              onClose();
              onSelectOption('aporte-economico');
            }}
          >
            <div className="opt-icon-circle opt-terracotta">
              <IconHeart size={28} fill={true} />
            </div>
            <h3>Padrinazgo o Aporte Económico</h3>
            <p>Desde S/. 35 financia un kit escolar integral o apadrina a un niño amazónico para todo su año.</p>
            <span className="opt-btn-text">Ver opciones de aporte →</span>
          </div>

          <div
            className="help-opt-card card-base"
            onClick={() => {
              onClose();
              onSelectOption('voluntariado');
            }}
          >
            <div className="opt-icon-circle opt-sage">
              <IconUsers size={28} />
            </div>
            <h3>Sumarme como Voluntario/a</h3>
            <p>Participa en expediciones fluviales con talleres didácticos o colabora de forma 100% remota.</p>
            <span className="opt-btn-text">Inscribirme como voluntario →</span>
          </div>
        </div>

        <style>{`
          .help-modal-box {
            max-width: 680px;
            padding: 2.8rem;
          }
          .help-modal-header {
            text-align: center;
            margin-bottom: 2.2rem;
          }
          .help-modal-header h2 {
            font-size: 2rem;
            color: var(--color-primary-dark);
            margin: 0.6rem 0 0.4rem 0;
          }
          .help-modal-header p {
            font-size: 1rem;
            color: var(--text-muted);
          }
          .help-options-grid {
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
          }
          .help-opt-card {
            padding: 1.5rem 1.8rem;
            cursor: pointer;
            display: grid;
            grid-template-columns: 56px 1fr;
            grid-template-areas:
              "icon title"
              "icon desc"
              "icon btn";
            column-gap: 1.25rem;
            align-items: center;
          }
          .opt-icon-circle {
            grid-area: icon;
            width: 56px;
            height: 56px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .opt-green { background: #d8f3dc; color: #1b4332; }
          .opt-terracotta { background: #fde8dc; color: #c86432; }
          .opt-sage { background: #e0f2fe; color: #0284c7; }
          .help-opt-card h3 {
            grid-area: title;
            font-size: 1.25rem;
            color: var(--color-primary-dark);
            margin-bottom: 0.2rem;
          }
          .help-opt-card p {
            grid-area: desc;
            font-size: 0.88rem;
            color: var(--text-muted);
            line-height: 1.45;
            margin-bottom: 0.35rem;
          }
          .opt-btn-text {
            grid-area: btn;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--color-forest);
          }
        `}</style>
      </div>
    </div>
  );
};

// Volunteer Success Badge Modal
export const VolunteerBadgeModal = ({ volunteerData, onClose }) => {
  if (!volunteerData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content badge-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
          <IconClose size={22} />
        </button>

        <div className="badge-visual-card">
          <div className="badge-card-header">
            <div className="badge-org-logo">
              <IconSprout size={22} />
              <span>RAÍCES DEL FUTURO</span>
            </div>
            <span className="badge-status-pill">Voluntario Inscrito</span>
          </div>

          <div className="badge-card-body">
            <h3 className="volunteer-name-display">{volunteerData.fullName}</h3>
            <span className="volunteer-city-role">{volunteerData.city} • Modalidad {volunteerData.modality.toUpperCase()}</span>

            <div className="badge-details-box">
              <div className="badge-detail-row">
                <span>Área asignada:</span>
                <strong>{volunteerData.area}</strong>
              </div>
              <div className="badge-detail-row">
                <span>Disponibilidad:</span>
                <strong>{volunteerData.availability}</strong>
              </div>
              <div className="badge-detail-row">
                <span>WhatsApp:</span>
                <strong>{volunteerData.whatsapp}</strong>
              </div>
            </div>

            <div className="badge-motto">
              «Sembrando oportunidades, construyendo futuros en Loreto»
            </div>
          </div>
        </div>

        <div className="badge-modal-text">
          <h3>¡Bienvenido/a a la tripulación, {volunteerData.fullName.split(' ')[0]}!</h3>
          <p>
            Tu postulación ha sido registrada con éxito en nuestra base comunitaria. Un coordinador regional te escribirá en breve por WhatsApp para invitarte a la sesión de bienvenida.
          </p>
          <div className="badge-modal-actions">
            <a
              href={`https://wa.me/51982451092?text=Hola,%20soy%20${encodeURIComponent(volunteerData.fullName)}%20y%20acabo%20de%20inscribirme%20como%20voluntario/a%20en%20Raíces%20del%20Futuro.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md w-full"
            >
              Contactar por WhatsApp ahora
            </a>
            <button type="button" className="btn btn-outline btn-md w-full" onClick={onClose}>
              Entendido, gracias
            </button>
          </div>
        </div>

        <style>{`
          .badge-modal-box {
            max-width: 520px;
            padding: 2.2rem;
            text-align: center;
          }
          .badge-visual-card {
            background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
            border-radius: var(--radius-lg);
            color: #ffffff;
            padding: 1.8rem;
            margin-bottom: 1.8rem;
            box-shadow: 0 8px 24px rgba(27, 67, 50, 0.25);
            text-align: left;
            position: relative;
            border: 2px solid #52b788;
          }
          .badge-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.2rem;
          }
          .badge-org-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 800;
            font-size: 0.88rem;
            letter-spacing: 0.04em;
          }
          .badge-status-pill {
            background: #d8f3dc;
            color: #1b4332;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 0.2rem 0.6rem;
            border-radius: var(--radius-full);
            text-transform: uppercase;
          }
          .volunteer-name-display {
            font-size: 1.5rem;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 0.2rem;
          }
          .volunteer-city-role {
            font-size: 0.84rem;
            color: #b5cebf;
            display: block;
            margin-bottom: 1.2rem;
          }
          .badge-details-box {
            background: rgba(255, 255, 255, 0.12);
            padding: 0.85rem 1rem;
            border-radius: var(--radius-md);
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
            margin-bottom: 1.1rem;
          }
          .badge-detail-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.82rem;
          }
          .badge-detail-row span {
            color: #d8f3dc;
          }
          .badge-detail-row strong {
            color: #ffffff;
            text-transform: capitalize;
          }
          .badge-motto {
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 0.82rem;
            color: #eaf5ed;
            text-align: center;
          }
          .badge-modal-text h3 {
            font-size: 1.4rem;
            color: var(--color-primary-dark);
            margin-bottom: 0.5rem;
          }
          .badge-modal-text p {
            font-size: 0.92rem;
            color: var(--text-muted);
            line-height: 1.55;
            margin-bottom: 1.5rem;
          }
          .badge-modal-actions {
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
          }
        `}</style>
      </div>
    </div>
  );
};
