import React, { useState, useEffect } from 'react';
import { IconSprout, IconMenu, IconClose, IconHeart } from './Icons';

export const Navbar = ({ onOpenHelpModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#mision", label: "Misión" },
    { href: "#ruta-fluvial", label: "Ruta Fluvial" },
    { href: "#comunidades", label: "Comunidades" },
    { href: "#necesidades", label: "Necesidades" },
    { href: "#voluntariado", label: "Voluntariado" },
    { href: "#donaciones", label: "Donaciones" },
    { href: "#campanas", label: "Campañas" },
    { href: "#resultados", label: "Resultados" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#inicio" className="brand-logo" onClick={(e) => handleLinkClick(e, '#inicio')}>
          <div className="logo-icon-box">
            <IconSprout size={26} className="logo-sprout" />
          </div>
          <div className="logo-text-box">
            <span className="logo-title">RAÍCES DEL FUTURO</span>
            <span className="logo-subtitle">Loreto • Amazonía Peruana</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-item ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-accent btn-sm header-cta"
            onClick={onOpenHelpModal}
          >
            <IconHeart size={16} fill={true} />
            <span>Quiero ayudar</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <IconClose size={26} /> : <IconMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="mobile-nav-item"
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-drawer-cta">
              <button
                type="button"
                className="btn btn-accent btn-lg w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHelpModal();
                }}
              >
                <IconHeart size={18} fill={true} />
                <span>Quiero ayudar ahora</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background-color: rgba(250, 246, 240, 0.94);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(226, 222, 213, 0.7);
        }
        .navbar-wrapper.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(19, 51, 36, 0.08);
          border-bottom-color: rgba(226, 222, 213, 0.9);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 82px;
          gap: 1rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-forest) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(27, 67, 50, 0.25);
        }
        .logo-text-box {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
          color: var(--color-primary-dark);
          line-height: 1.1;
        }
        .logo-subtitle {
          font-size: 0.72rem;
          color: var(--color-forest);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
        }
        .nav-item {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.2s ease;
          position: relative;
          padding: 0.4rem 0;
        }
        .nav-item:hover, .nav-item.active {
          color: var(--color-primary-dark);
        }
        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-forest);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .header-cta {
          padding: 0.65rem 1.35rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary-dark);
          cursor: pointer;
          padding: 0.5rem;
        }
        @media (max-width: 1080px) {
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .mobile-drawer {
          position: fixed;
          top: 82px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.99);
          backdrop-filter: blur(20px);
          padding: 1.5rem 2rem 2.5rem 2rem;
          overflow-y: auto;
          border-top: 1px solid var(--border-light);
          animation: slideDown 0.2s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .mobile-nav-item {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0ede6;
        }
        .mobile-drawer-cta {
          margin-top: 1rem;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
