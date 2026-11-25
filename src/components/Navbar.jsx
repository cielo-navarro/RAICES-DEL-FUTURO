import React, { useState, useEffect } from 'react';
import { IconSprout, IconMenu, IconClose, IconHeart } from './Icons';

export const Navbar = ({ onOpenHelpModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio',       label: 'Inicio' },
    { href: '#mision',       label: 'Misión' },
    { href: '#ruta-fluvial', label: 'Ruta Fluvial' },
    { href: '#comunidades',  label: 'Comunidades' },
    { href: '#necesidades',  label: 'Necesidades' },
    { href: '#voluntariado', label: 'Voluntariado' },
    { href: '#donaciones',   label: 'Donaciones' },
    { href: '#campanas',     label: 'Campañas' },
    { href: '#resultados',   label: 'Resultados' },
    { href: '#contacto',     label: 'Contacto' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand */}
        <a href="#inicio" className="nav-brand" onClick={e => handleLinkClick(e, '#inicio')}>
          <div className="nav-logo-box">
            <IconSprout size={22} />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-title">RAÍCES DEL FUTURO</span>
            <span className="nav-logo-sub">Loreto · Amazonía Peruana</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => handleLinkClick(e, l.href)}
              className={`nav-link ${activeSection === l.href.replace('#', '') ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button type="button" className="btn btn-accent btn-sm nav-cta" onClick={onOpenHelpModal}>
            <IconHeart size={15} fill={true} />
            <span>Ayudar</span>
          </button>
          <button
            type="button"
            className="nav-burger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => handleLinkClick(e, l.href)}
              className="mobile-link"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-accent w-full"
            onClick={() => { setMobileMenuOpen(false); onOpenHelpModal(); }}
          >
            <IconHeart size={18} fill={true} />
            Quiero ayudar ahora
          </button>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          padding: 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(5,15,9,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(78,203,132,0.15);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .nav-inner {
          display: flex; align-items: center;
          justify-content: space-between;
          height: 80px; gap: 1rem;
        }

        /* Brand */
        .nav-brand {
          display: flex; align-items: center; gap: 0.75rem; text-decoration: none; flex-shrink: 0;
        }
        .nav-logo-box {
          width: 40px; height: 40px; border-radius: 10px;
          background: linear-gradient(135deg, #22a05a, #4ecb84);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(34,160,90,0.4);
        }
        .nav-logo-title {
          display: block;
          font-family: var(--font-h);
          font-weight: 800; font-size: 1.1rem;
          color: #ffffff; line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .nav-logo-sub {
          display: block;
          font-size: 0.65rem; font-weight: 700;
          color: rgba(78,203,132,0.9);
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* Desktop nav */
        .desktop-nav {
          display: flex; align-items: center; gap: 0.1rem; flex-grow: 1;
          justify-content: center;
        }
        @media (max-width: 1100px) { .desktop-nav { display: none; } }

        .nav-link {
          font-size: 0.84rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover { color: #ffffff; background: rgba(255,255,255,0.08); }
        .nav-link.active {
          color: #4ecb84;
          background: rgba(78,203,132,0.12);
        }
        .nav-link.active::after {
          content: '';
          position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 20px; height: 2px;
          background: #4ecb84;
          border-radius: 2px;
        }

        /* Actions */
        .nav-actions { display: flex; align-items: center; gap: 0.6rem; flex-shrink: 0; }
        .nav-cta { padding: 0.6rem 1.2rem; }

        .nav-burger {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          border-radius: 8px;
          padding: 0.4rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-burger:hover { background: rgba(255,255,255,0.18); }
        @media (max-width: 1100px) { .nav-burger { display: flex; align-items: center; } }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 80px; left: 0; right: 0; bottom: 0;
          background: rgba(5,15,9,0.98);
          backdrop-filter: blur(24px);
          padding: 2rem 1.5rem 3rem;
          overflow-y: auto;
          border-top: 1px solid rgba(78,203,132,0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          animation: fadeIn 0.2s ease-out;
        }
        .mobile-link {
          font-size: 1.15rem;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s ease;
        }
        .mobile-link:hover { color: #4ecb84; }
        .w-full { width: 100%; }
      `}</style>
    </header>
  );
};
