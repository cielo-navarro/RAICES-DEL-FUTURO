import React, { useState } from 'react';
import { IconHeart, IconGift, IconCheck, IconShield } from './Icons';

export const DonationSection = ({ onDonationRegistered, preselectedResource }) => {
  const [donationType, setDonationType] = useState('materiales'); // 'materiales' or 'economico'

  // Material donation state
  const [matForm, setMatForm] = useState({
    donorName: '',
    donorContact: '',
    itemType: preselectedResource ? preselectedResource.title : 'Kits de útiles escolares',
    quantity: '10 unidades',
    dropoffCity: 'Iquitos',
    deliveryDate: '',
    notes: ''
  });

  // Monetary donation calculator
  const [selectedTier, setSelectedTier] = useState(75);
  const [customAmount, setCustomAmount] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const donationTiers = [
    {
      amount: 35,
      title: "1 Kit Escolar Integral",
      desc: "4 cuadernos, lápices 2B, regla, colores resistentes al agua y tajador con depósito para 1 niño."
    },
    {
      amount: 75,
      title: "Kit + Mochila Impermeable",
      desc: "Protege los útiles del niño durante los viajes en lancha 'peque-peque' bajo lluvias tropicales."
    },
    {
      amount: 150,
      title: "Padrinazgo Anual de 1 Escolar",
      desc: "Cobertura de útiles de todo el año, 3 libros de lectura, calzado escolar y seguimiento pedagógico."
    },
    {
      amount: 450,
      title: "1 Rincón de Lectura Comunal",
      desc: "Estantería de madera tratada, 30 libros de literatura infantil y alfombra para el aula rural."
    }
  ];

  const handleMatSubmit = (e) => {
    e.preventDefault();
    if (!matForm.donorName.trim() || !matForm.donorContact.trim()) {
      alert("Por favor ingresa tu nombre y un contacto (teléfono o correo).");
      return;
    }
    setIsSuccessMessage(true);
    onDonationRegistered({
      type: 'material',
      ...matForm
    });
    setTimeout(() => {
      setIsSuccessMessage(false);
      setMatForm({
        donorName: '',
        donorContact: '',
        itemType: 'Kits de útiles escolares',
        quantity: '10 unidades',
        dropoffCity: 'Iquitos',
        deliveryDate: '',
        notes: ''
      });
    }, 4000);
  };

  const handleEcoSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : selectedTier;
    if (!matForm.donorName.trim() || !matForm.donorContact.trim()) {
      alert("Por favor ingresa tu nombre y teléfono para registrar tu constancia de donación.");
      return;
    }
    setIsSuccessMessage(true);
    onDonationRegistered({
      type: 'economico',
      amount: finalAmount,
      donorName: matForm.donorName,
      donorContact: matForm.donorContact
    });
    setTimeout(() => {
      setIsSuccessMessage(false);
      setCustomAmount('');
    }, 4000);
  };

  return (
    <section id="donaciones" className="donations-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconHeart size={16} fill={true} />
            <span>Registro de Donaciones</span>
          </span>
          <h2 className="section-title">
            Tu generosidad se convierte en educación viva
          </h2>
          <p className="section-subtitle">
            Cada aporte llega directamente a las escuelas ribereñas de Loreto. Elige si deseas registrar donación de materiales físicos o apadrinar recursos con un aporte solidario.
          </p>
        </div>

        {/* Toggle Type Selector */}
        <div className="donation-type-selector">
          <button
            type="button"
            className={`type-btn ${donationType === 'materiales' ? 'active' : ''}`}
            onClick={() => setDonationType('materiales')}
          >
            <IconGift size={20} />
            <span>Donar Materiales y Recursos Físicos</span>
          </button>
          <button
            type="button"
            className={`type-btn ${donationType === 'economico' ? 'active' : ''}`}
            onClick={() => setDonationType('economico')}
          >
            <IconHeart size={20} fill={true} />
            <span>Aporte Económico / Padrinazgo</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        {isSuccessMessage && (
          <div className="donation-success-banner animate-pulse-subtle">
            <div className="success-badge"><IconCheck size={20} /></div>
            <div>
              <strong>¡Muchísimas gracias por tu gran corazón!</strong>
              <p>Hemos registrado tu compromiso de donación. Un coordinador de Raíces del Futuro te escribirá para coordinar los detalles.</p>
            </div>
          </div>
        )}

        {/* MODE 1: Material Donations */}
        {donationType === 'materiales' && (
          <div className="donation-grid">
            <div className="donation-info-card card-base">
              <h3>¿Cómo funciona la donación de materiales?</h3>
              <p className="lead-text">
                Recibimos útiles nuevos y libros en buen estado. Todo el material es inventariado y sellado en fundas impermeables para protegerlo de la humedad amazónica.
              </p>

              <div className="dropoff-points-box">
                <h4>Puntos oficiales de acopio:</h4>
                <div className="dropoff-item">
                  <div className="dropoff-badge">Sede Iquitos</div>
                  <div>
                    <strong>Centro Comunitario Raíces del Futuro</strong>
                    <p>Jr. Putumayo N° 458 (a 2 cuadras de Plaza de Armas), Iquitos.</p>
                    <span className="dropoff-hours">Lunes a Sábado: 8:30 am – 6:00 pm</span>
                  </div>
                </div>

                <div className="dropoff-item">
                  <div className="dropoff-badge">Punto Lima</div>
                  <div>
                    <strong>Punto de Acopio Aliado (Miraflores)</strong>
                    <p>Av. Larco 812, Of. 402, Miraflores, Lima.</p>
                    <span className="dropoff-hours">Previa coordinación por WhatsApp para consolidado</span>
                  </div>
                </div>
              </div>

              <div className="transparency-pill">
                <IconShield size={20} className="shield-icon" />
                <span>Emitimos Acta de Recepción y fotografiamos el momento de la entrega escolar.</span>
              </div>
            </div>

            <div className="donation-form-card card-base">
              <div className="form-card-title">
                <h4>Registrar Donación de Materiales</h4>
                <p>Regístralo para coordinar la recepción o recojo en acopio.</p>
              </div>

              <form onSubmit={handleMatSubmit}>
                <div className="form-group">
                  <label className="form-label">Nombre del donante o institución *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Familia Navarro o Colegio San Martín"
                    className="form-input"
                    value={matForm.donorName}
                    onChange={(e) => setMatForm({ ...matForm, donorName: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+51 987 654 321"
                      className="form-input"
                      value={matForm.donorContact}
                      onChange={(e) => setMatForm({ ...matForm, donorContact: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Ciudad de entrega</label>
                    <select
                      className="form-select"
                      value={matForm.dropoffCity}
                      onChange={(e) => setMatForm({ ...matForm, dropoffCity: e.target.value })}
                    >
                      <option value="Iquitos">Iquitos (Sede Jr. Putumayo)</option>
                      <option value="Lima">Lima (Punto Miraflores)</option>
                      <option value="Envio-Courier">Envío por Courier desde otra ciudad</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Tipo de recurso a donar</label>
                    <select
                      className="form-select"
                      value={matForm.itemType}
                      onChange={(e) => setMatForm({ ...matForm, itemType: e.target.value })}
                    >
                      <option value="Kits de útiles escolares">Kits de útiles escolares completos</option>
                      <option value="Cuadernos y lápices">Cuadernos, lápices y colores sueltos</option>
                      <option value="Mochilas impermeables">Mochilas escolares o de lona</option>
                      <option value="Libros y cuentos infantiles">Libros y literatura infantil</option>
                      <option value="Material didáctico / juegos">Material didáctico y juegos lógicos</option>
                      <option value="Lámparas solares">Lámparas o linternas solares</option>
                      <option value="Botiquín escolar">Medicinas básicas y botiquín</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cantidad aproximada</label>
                    <input
                      type="text"
                      placeholder="Ej. 15 cuadernos, 5 mochilas"
                      className="form-input"
                      value={matForm.quantity}
                      onChange={(e) => setMatForm({ ...matForm, quantity: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Fecha estimada de entrega o notas</label>
                  <textarea
                    rows="2"
                    placeholder="Indícanos si necesitas que pasemos a recogerlo o el día aproximado que lo dejarás..."
                    className="form-textarea"
                    value={matForm.notes}
                    onChange={(e) => setMatForm({ ...matForm, notes: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  <IconGift size={18} />
                  <span>Confirmar registro de donación</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* MODE 2: Monetary Padrinazgo Calculator */}
        {donationType === 'economico' && (
          <div className="economic-flow">
            {/* Tiers Grid */}
            <div className="tiers-grid">
              {donationTiers.map((tier) => (
                <div
                  key={tier.amount}
                  className={`tier-card card-base ${selectedTier === tier.amount && !customAmount ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedTier(tier.amount);
                    setCustomAmount('');
                  }}
                >
                  <span className="tier-amount">S/. {tier.amount}</span>
                  <h4 className="tier-title">{tier.title}</h4>
                  <p className="tier-desc">{tier.desc}</p>
                  <span className="tier-select-badge">
                    {selectedTier === tier.amount && !customAmount ? 'Seleccionado' : 'Elegir este monto'}
                  </span>
                </div>
              ))}
            </div>

            {/* Custom Amount option */}
            <div className="custom-amount-box">
              <label>O ingresa un monto personalizado (Soles):</label>
              <div className="custom-input-wrap">
                <span className="currency-prefix">S/.</span>
                <input
                  type="number"
                  min="5"
                  step="5"
                  placeholder="Ej. 100"
                  className="form-input custom-inp"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Banking Details and Pledge Confirmation */}
            <div className="economic-bottom-grid">
              <div className="banking-card card-base">
                <h4>Cuentas oficiales de Raíces del Futuro</h4>
                <p className="bank-sub">Puedes realizar tu transferencia o pago móvil directamente:</p>

                <div className="payment-methods-list">
                  <div className="pay-method-item">
                    <span className="pay-label yape-label">Yape / Plin</span>
                    <strong className="pay-number">982 451 092</strong>
                    <span className="pay-holder">A nombre de: Raíces del Futuro Loreto</span>
                  </div>

                  <div className="pay-method-item">
                    <span className="pay-label bcp-label">Banco de Crédito (BCP)</span>
                    <strong className="pay-number">Cuenta Soles: 310-98451203-0-18</strong>
                    <span className="pay-holder">CCI: 002-310-009845120301-18</span>
                  </div>

                  <div className="pay-method-item">
                    <span className="pay-label bn-label">Banco de la Nación</span>
                    <strong className="pay-number">Cuenta Corriente: 04-032-198420</strong>
                    <span className="pay-holder">Para transferencias interbancarias y desde provincias</span>
                  </div>
                </div>
              </div>

              <div className="pledge-form-card card-base">
                <h4>Notificar mi aporte o solicitar recibo</h4>
                <p>Regístralo para enviarte tu carta de agradecimiento, fotos de la entrega y reporte contable.</p>

                <form onSubmit={handleEcoSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nombre del donante *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre o seudónimo"
                      className="form-input"
                      value={matForm.donorName}
                      onChange={(e) => setMatForm({ ...matForm, donorName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">WhatsApp o Correo para envío de fotos *</label>
                    <input
                      type="text"
                      required
                      placeholder="+51 987 654 321 o tu@correo.com"
                      className="form-input"
                      value={matForm.donorContact}
                      onChange={(e) => setMatForm({ ...matForm, donorContact: e.target.value })}
                    />
                  </div>

                  <div className="selected-summary-box">
                    <span>Monto registrado:</span>
                    <strong>S/. {customAmount ? customAmount : selectedTier} Soles</strong>
                  </div>

                  <button type="submit" className="btn btn-accent btn-lg w-full">
                    <IconHeart size={18} fill={true} />
                    <span>Registrar mi aporte solidario</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .donations-section {
          background-color: var(--color-sand-light);
        }
        .donation-type-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .type-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 1rem 2rem;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-light);
          background: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }
        .type-btn:hover {
          border-color: var(--color-forest);
          color: var(--color-primary-dark);
        }
        .type-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(27, 67, 50, 0.22);
        }
        .donation-success-banner {
          background-color: #d1fae5;
          border: 1px solid #6ee7b7;
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          max-width: 800px;
          margin: 0 auto 2.5rem auto;
          color: #065f46;
        }
        .success-badge {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #10b981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .donation-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .donation-grid {
            grid-template-columns: 1fr;
          }
        }
        .donation-info-card {
          padding: 2.4rem;
        }
        .donation-info-card h3 {
          font-size: 1.5rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.8rem;
        }
        .lead-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.8rem;
        }
        .dropoff-points-box {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 1.8rem;
        }
        .dropoff-item {
          background-color: #faf7f2;
          padding: 1.1rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .dropoff-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          background-color: var(--color-mint-light);
          color: var(--color-primary-dark);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }
        .dropoff-hours {
          font-size: 0.78rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .transparency-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-main);
          background-color: #eaf5ed;
          padding: 0.9rem 1.2rem;
          border-radius: var(--radius-md);
        }
        .shield-icon {
          color: var(--color-forest);
          flex-shrink: 0;
        }
        .donation-form-card {
          padding: 2.6rem;
        }
        .form-card-title {
          margin-bottom: 1.6rem;
        }
        .form-card-title h4 {
          font-size: 1.45rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.25rem;
        }
        /* Economic Flow */
        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 992px) {
          .tiers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .tiers-grid {
            grid-template-columns: 1fr;
          }
        }
        .tier-card {
          padding: 1.8rem 1.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 2px solid transparent;
        }
        .tier-card.selected {
          border-color: var(--color-terracotta);
          background: #fff9f5;
          box-shadow: 0 8px 24px rgba(200, 100, 50, 0.15);
        }
        .tier-amount {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-terracotta);
          line-height: 1;
          margin-bottom: 0.6rem;
        }
        .tier-title {
          font-size: 1.05rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.5rem;
        }
        .tier-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }
        .tier-select-badge {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background-color: #f0e9df;
          color: var(--text-main);
        }
        .tier-card.selected .tier-select-badge {
          background-color: var(--color-terracotta);
          color: #ffffff;
        }
        .custom-amount-box {
          background: #ffffff;
          padding: 1.25rem 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .custom-amount-box label {
          font-weight: 700;
          color: var(--color-primary-dark);
          font-size: 0.95rem;
        }
        .custom-input-wrap {
          display: flex;
          align-items: center;
          position: relative;
        }
        .currency-prefix {
          position: absolute;
          left: 12px;
          font-weight: 700;
          color: var(--color-forest);
        }
        .custom-inp {
          padding-left: 2.5rem;
          width: 140px;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .economic-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 860px) {
          .economic-bottom-grid {
            grid-template-columns: 1fr;
          }
        }
        .banking-card {
          padding: 2.2rem;
        }
        .banking-card h4 {
          font-size: 1.35rem;
          margin-bottom: 0.3rem;
        }
        .bank-sub {
          font-size: 0.88rem;
          margin-bottom: 1.4rem;
        }
        .payment-methods-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pay-method-item {
          background-color: #faf7f2;
          padding: 1rem 1.2rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .pay-label {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          width: fit-content;
        }
        .yape-label { background: #6b21a8; color: #ffffff; }
        .bcp-label { background: #002e6c; color: #ffffff; }
        .bn-label { background: #991b1b; color: #ffffff; }
        .pay-number {
          font-size: 1.05rem;
          color: var(--color-primary-dark);
          letter-spacing: 0.03em;
        }
        .pay-holder {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .pledge-form-card {
          padding: 2.2rem;
        }
        .pledge-form-card h4 {
          font-size: 1.35rem;
          margin-bottom: 0.3rem;
        }
        .pledge-form-card p {
          font-size: 0.88rem;
          margin-bottom: 1.4rem;
        }
        .selected-summary-box {
          background-color: #f7f2ea;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .selected-summary-box strong {
          color: var(--color-terracotta);
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
};
