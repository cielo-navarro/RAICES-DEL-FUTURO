import React, { useState } from 'react';
import { IconHeart, IconGift, IconCheck, IconShield } from './Icons';

export const DonationSection = ({ onDonationRegistered, preselectedResource }) => {
  const [donationType, setDonationType] = useState('materiales');

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
  const [copiedBank, setCopiedBank] = useState('');

  const donationTiers = [
    {
      amount: 35,
      title: "1 Kit Escolar Integral",
      desc: "4 cuadernos A4, lápices 2B, regla, colores impermeables y tajador con depósito para 1 niño."
    },
    {
      amount: 75,
      title: "Mochila Impermeable + Kit",
      desc: "Protege los libros durante los viajes en canoa peque-peque bajo lluvias torrenciales."
    },
    {
      amount: 150,
      title: "Padrinazgo Anual de 1 Escolar",
      desc: "Útiles de todo el año, 3 libros infantiles bilingües, calzado resistente y tutoría pedagógica."
    },
    {
      amount: 450,
      title: "1 Rincón de Lectura Comunal",
      desc: "Estantería de madera tratada, 30 libros de literatura infantil y alfombra para el aula rural."
    }
  ];

  const handleCopyAccount = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(name);
    setTimeout(() => setCopiedBank(''), 2500);
  };

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
            <span>Registro y Padrinazgo</span>
          </span>
          <h2 className="section-title">
            Tu generosidad se convierte en educación viva en la selva
          </h2>
          <p className="section-subtitle">
            Garantizamos trazabilidad y transparencia comunal en cada sol o material donado. Elige tu forma de colaboración:
          </p>
        </div>

        {/* Toggle Type Selector */}
        <div className="donation-type-selector">
          <button
            type="button"
            className={`type-btn ${donationType === 'materiales' ? 'active' : ''}`}
            onClick={() => setDonationType('materiales')}
          >
            <IconGift size={22} />
            <span>Donar Materiales y Recursos Físicos</span>
          </button>
          <button
            type="button"
            className={`type-btn ${donationType === 'economico' ? 'active' : ''}`}
            onClick={() => setDonationType('economico')}
          >
            <IconHeart size={22} fill={true} />
            <span>Aporte Económico / Padrinazgo Escolar</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        {isSuccessMessage && (
          <div className="donation-success-banner animate-pulse-glow">
            <div className="success-badge"><IconCheck size={24} /></div>
            <div>
              <strong>¡Muchísimas gracias por tu hermoso gesto!</strong>
              <p>Hemos registrado tu compromiso. Un coordinador de Raíces del Futuro te escribirá para validar el envío y remitirte tu constancia.</p>
            </div>
          </div>
        )}

        {/* MODE 1: Material Donations */}
        {donationType === 'materiales' && (
          <div className="donation-grid">
            <div className="donation-info-card card-base glass-card">
              <h3>Centros Oficiales de Acopio</h3>
              <p className="lead-text">
                Recibimos útiles nuevos y libros en buen estado. Todo material es inventariado, pesado y empacado en fundas herméticas a prueba de lluvias fluviales.
              </p>

              <div className="dropoff-points-box">
                <div className="dropoff-item">
                  <div className="dropoff-header-row">
                    <span className="dropoff-badge">Sede Iquitos (Loreto)</span>
                    <span className="dropoff-status">Recepción Abierta</span>
                  </div>
                  <strong>Centro Comunitario Raíces del Futuro</strong>
                  <p>Jr. Putumayo N° 458 (a 2 cuadras de la Plaza de Armas), Iquitos.</p>
                  <span className="dropoff-hours">⏰ Lunes a Sábado: 8:30 am – 6:30 pm</span>
                </div>

                <div className="dropoff-item">
                  <div className="dropoff-header-row">
                    <span className="dropoff-badge">Punto Lima (Aliado)</span>
                    <span className="dropoff-status">Consolidado Quincenal</span>
                  </div>
                  <strong>Almacén Logístico Miraflores</strong>
                  <p>Av. Larco 812, Of. 402, Miraflores, Lima.</p>
                  <span className="dropoff-hours">⏰ Coordinación previa vía WhatsApp para entrega consolidada</span>
                </div>
              </div>

              <div className="transparency-pill">
                <IconShield size={22} className="shield-icon" />
                <div>
                  <strong>Auditoría y Acta Comunal</strong>
                  <p>Cada entrega cuenta con acta firmada por el Apu de la comunidad y fotografía nominal de recepción.</p>
                </div>
              </div>
            </div>

            <div className="donation-form-card card-base glass-card">
              <div className="form-card-title">
                <h4>Registrar Donación de Materiales</h4>
                <p>Ingresa los detalles para generar tu número de guía de acopio.</p>
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
                    <label className="form-label">WhatsApp o Teléfono *</label>
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
                    <label className="form-label">Punto de acopio elegido</label>
                    <select
                      className="form-select"
                      value={matForm.dropoffCity}
                      onChange={(e) => setMatForm({ ...matForm, dropoffCity: e.target.value })}
                    >
                      <option value="Iquitos">Sede Iquitos (Jr. Putumayo)</option>
                      <option value="Lima">Punto Lima (Miraflores)</option>
                      <option value="Courier">Envío por Courier desde otra región</option>
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
                      <option value="Cuadernos y lápices">Cuadernos A4, lápices y colores</option>
                      <option value="Mochilas impermeables">Mochilas de lona o impermeables</option>
                      <option value="Libros y cuentos infantiles">Libros y literatura infantil</option>
                      <option value="Material didáctico / juegos">Material didáctico de ciencias y matemáticas</option>
                      <option value="Lámparas solares">Lámparas solares para estudio nocturno</option>
                      <option value="Botiquín escolar">Botiquín y medicinas básicas para aula</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cantidad estimada</label>
                    <input
                      type="text"
                      placeholder="Ej. 12 cuadernos, 3 mochilas"
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
                    placeholder="Indícanos si necesitas coordinación de recojo o el día estimado de entrega..."
                    className="form-textarea"
                    value={matForm.notes}
                    onChange={(e) => setMatForm({ ...matForm, notes: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  <IconGift size={20} />
                  <span>Confirmar registro de donación</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* MODE 2: Monetary Padrinazgo Calculator */}
        {donationType === 'economico' && (
          <div className="economic-flow">
            {/* Interactive Tiers Grid */}
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
                    {selectedTier === tier.amount && !customAmount ? '✓ Seleccionado' : 'Elegir este monto'}
                  </span>
                </div>
              ))}
            </div>

            {/* Custom Amount option */}
            <div className="custom-amount-box card-base">
              <label>O ingresa un monto libre a tu alcance (Soles):</label>
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
              <div className="banking-card card-base glass-card">
                <h4>Cuentas Oficiales y Billeteras Digitales</h4>
                <p className="bank-sub">Haz clic para copiar el número de cuenta o billetera móvil:</p>

                <div className="payment-methods-list">
                  <div
                    className="pay-method-item copyable"
                    onClick={() => handleCopyAccount('982451092', 'Yape / Plin')}
                  >
                    <div className="pay-top-row">
                      <span className="pay-label yape-label">Yape / Plin</span>
                      <span className="copy-indicator">{copiedBank === 'Yape / Plin' ? '✓ Copiado' : 'Copiar'}</span>
                    </div>
                    <strong className="pay-number">982 451 092</strong>
                    <span className="pay-holder">Titular: Raíces del Futuro Loreto</span>
                  </div>

                  <div
                    className="pay-method-item copyable"
                    onClick={() => handleCopyAccount('31098451203018', 'BCP')}
                  >
                    <div className="pay-top-row">
                      <span className="pay-label bcp-label">Banco de Crédito (BCP)</span>
                      <span className="copy-indicator">{copiedBank === 'BCP' ? '✓ Copiado' : 'Copiar'}</span>
                    </div>
                    <strong className="pay-number">Cta Soles: 310-98451203-0-18</strong>
                    <span className="pay-holder">CCI: 002-310-009845120301-18</span>
                  </div>

                  <div
                    className="pay-method-item copyable"
                    onClick={() => handleCopyAccount('04032198420', 'Banco de la Nación')}
                  >
                    <div className="pay-top-row">
                      <span className="pay-label bn-label">Banco de la Nación</span>
                      <span className="copy-indicator">{copiedBank === 'Banco de la Nación' ? '✓ Copiado' : 'Copiar'}</span>
                    </div>
                    <strong className="pay-number">Cta Corriente: 04-032-198420</strong>
                    <span className="pay-holder">Para transferencias desde agencias provinciales</span>
                  </div>
                </div>
              </div>

              <div className="pledge-form-card card-base glass-card">
                <h4>Notificar mi aporte y solicitar recibo</h4>
                <p>Regístralo para enviarte el reporte fotográfico y agradecimiento personalizado.</p>

                <form onSubmit={handleEcoSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nombre del donante *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre o institución"
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
                    <span>Monto que apadrinas:</span>
                    <strong>S/. {customAmount ? customAmount : selectedTier} Soles</strong>
                  </div>

                  <button type="submit" className="btn btn-accent btn-lg w-full">
                    <IconHeart size={20} fill={true} />
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
          background: linear-gradient(180deg, #faf6f0 0%, #f4ede3 50%, #faf6f0 100%);
        }
        .donation-type-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .type-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1.1rem 2.2rem;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-light);
          background: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .type-btn:hover {
          border-color: var(--color-emerald);
          color: var(--color-primary-dark);
          transform: translateY(-2px);
        }
        .type-btn.active {
          background: linear-gradient(135deg, #1b4d36 0%, #0a2318 100%);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 12px 30px rgba(10, 35, 24, 0.28);
        }
        .donation-success-banner {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border: 1px solid #6ee7b7;
          border-radius: var(--radius-xl);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.4rem;
          max-width: 850px;
          margin: 0 auto 3rem auto;
          color: #065f46;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
        }
        .success-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #10b981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }
        .donation-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .donation-grid {
            grid-template-columns: 1fr;
          }
        }
        .donation-info-card {
          padding: 2.8rem;
        }
        .donation-info-card h3 {
          font-size: 1.7rem;
          margin-bottom: 0.8rem;
        }
        .lead-text {
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .dropoff-points-box {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          margin-bottom: 2rem;
        }
        .dropoff-item {
          background: #faf7f2;
          padding: 1.25rem 1.4rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .dropoff-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .dropoff-badge {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          background: var(--color-mint-light);
          color: var(--color-primary-dark);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }
        .dropoff-status {
          font-size: 0.72rem;
          color: var(--color-emerald);
          font-weight: 700;
        }
        .dropoff-hours {
          font-size: 0.8rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        .transparency-pill {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: #eaf5ed;
          padding: 1.2rem 1.4rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(82, 183, 136, 0.3);
        }
        .shield-icon {
          color: var(--color-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .transparency-pill strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.2rem;
        }
        .transparency-pill p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .donation-form-card {
          padding: 2.8rem 3rem;
        }
        @media (max-width: 600px) {
          .donation-form-card {
            padding: 1.8rem 1.4rem;
          }
        }
        .form-card-title {
          margin-bottom: 1.8rem;
        }
        .form-card-title h4 {
          font-size: 1.6rem;
          margin-bottom: 0.35rem;
        }
        /* Tiers */
        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.8rem;
          margin-bottom: 2.5rem;
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
          padding: 2rem 1.6rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 2px solid transparent;
        }
        .tier-card.selected {
          border-color: var(--color-terracotta);
          background: #fff8f5;
          box-shadow: 0 12px 32px rgba(231, 111, 81, 0.22);
          transform: translateY(-4px);
        }
        .tier-amount {
          font-family: var(--font-heading);
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--color-terracotta);
          line-height: 1;
          margin-bottom: 0.6rem;
        }
        .tier-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .tier-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.4rem;
          flex-grow: 1;
        }
        .tier-select-badge {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: #f0e9df;
          color: var(--text-main);
          transition: all 0.2s ease;
        }
        .tier-card.selected .tier-select-badge {
          background: var(--color-terracotta);
          color: #ffffff;
        }
        .custom-amount-box {
          padding: 1.4rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .custom-amount-box label {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-primary-dark);
        }
        .custom-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .currency-prefix {
          position: absolute;
          left: 14px;
          font-weight: 800;
          color: var(--color-forest);
        }
        .custom-inp {
          padding-left: 2.8rem;
          width: 160px;
          font-size: 1.15rem;
          font-weight: 800;
        }
        .economic-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 860px) {
          .economic-bottom-grid {
            grid-template-columns: 1fr;
          }
        }
        .banking-card {
          padding: 2.6rem;
        }
        .banking-card h4 {
          font-size: 1.45rem;
          margin-bottom: 0.35rem;
        }
        .bank-sub {
          font-size: 0.9rem;
          margin-bottom: 1.6rem;
        }
        .payment-methods-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .pay-method-item {
          background: #faf7f2;
          padding: 1.1rem 1.3rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pay-method-item:hover {
          border-color: var(--color-forest);
          background: #ffffff;
        }
        .pay-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .copy-indicator {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-forest);
          background: var(--color-mint-light);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
        }
        .pay-label {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
        }
        .yape-label { background: #6b21a8; color: #ffffff; }
        .bcp-label { background: #002e6c; color: #ffffff; }
        .bn-label { background: #991b1b; color: #ffffff; }
        .pay-number {
          font-size: 1.15rem;
          color: var(--color-primary-dark);
          letter-spacing: 0.03em;
        }
        .pay-holder {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .pledge-form-card {
          padding: 2.6rem;
        }
        .pledge-form-card h4 {
          font-size: 1.45rem;
          margin-bottom: 0.35rem;
        }
        .pledge-form-card p {
          font-size: 0.9rem;
          margin-bottom: 1.6rem;
        }
        .selected-summary-box {
          background: #f7f2ea;
          border: 1px dashed var(--color-terracotta);
          padding: 1rem 1.3rem;
          border-radius: var(--radius-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.4rem;
        }
        .selected-summary-box strong {
          color: var(--color-terracotta);
          font-size: 1.35rem;
          font-family: var(--font-heading);
        }
      `}</style>
    </section>
  );
};
