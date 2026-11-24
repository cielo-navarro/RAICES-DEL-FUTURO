import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { Mission } from './components/Mission';
import { RiverJourney } from './components/RiverJourney';
import { Communities } from './components/Communities';
import { NeedsCatalog } from './components/NeedsCatalog';
import { VolunteerSection } from './components/VolunteerSection';
import { DonationSection } from './components/DonationSection';
import { CampaignsSection } from './components/CampaignsSection';
import { ResultsSection } from './components/ResultsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommunityModal, HelpModal, VolunteerBadgeModal } from './components/Modals';
import { AmbientAudio } from './components/AmbientAudio';

export function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [volunteerBadgeData, setVolunteerBadgeData] = useState(null);
  const [preselectedResource, setPreselectedResource] = useState(null);

  // Track scroll position to update active nav item
  useEffect(() => {
    const sectionIds = [
      'inicio',
      'mision',
      'ruta-fluvial',
      'comunidades',
      'necesidades',
      'voluntariado',
      'donaciones',
      'campanas',
      'resultados',
      'contacto'
    ];

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navOffset = 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - navOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const handleHelpOptionSelect = (option) => {
    if (option === 'donar-materiales' || option === 'aporte-economico') {
      scrollToId('donaciones');
    } else if (option === 'voluntariado') {
      scrollToId('voluntariado');
    }
  };

  const handleDonateToCommunity = (community) => {
    setPreselectedResource({
      title: `Donación especial para ${community.name} (${community.schoolName || ''})`
    });
    scrollToId('donaciones');
  };

  const handleDonateToStop = (stop) => {
    setPreselectedResource({
      title: `Cargamento fluvial prioritario para ${stop.name} (${stop.river})`
    });
    scrollToId('donaciones');
  };

  const handleQuickPledge = (amount) => {
    setPreselectedResource({
      title: `Padrinazgo Escolar de S/. ${amount} Soles`
    });
    scrollToId('donaciones');
  };

  const handleDonateItem = (item) => {
    setPreselectedResource(item);
    scrollToId('donaciones');
  };

  const handleParticipateCampaign = (_campaign) => {
    scrollToId('voluntariado');
  };

  const handleVolunteerSuccess = (formData) => {
    setVolunteerBadgeData(formData);
  };

  const handleDonationRegistered = (data) => {
    console.log("Donación registrada:", data);
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Navbar
        onOpenHelpModal={handleOpenHelpModal}
        activeSection={activeSection}
      />

      <main>
        {/* 1. Inicio (Hero with simulator) */}
        <Hero
          onOpenHelpModal={handleOpenHelpModal}
          onExploreCommunities={() => scrollToId('comunidades')}
          onQuickPledge={handleQuickPledge}
        />

        {/* Marquee continuous river ticker */}
        <MarqueeStrip />

        {/* 2. Nuestra Misión */}
        <Mission
          onOpenHelpModal={handleOpenHelpModal}
        />

        {/* Interactive WOW: La Ruta Fluvial de la Educación */}
        <RiverJourney
          onDonateToStop={handleDonateToStop}
        />

        {/* 3. Comunidades */}
        <Communities
          onSelectCommunity={(comm) => setSelectedCommunity(comm)}
          onDonateToCommunity={handleDonateToCommunity}
        />

        {/* 4. Necesitamos tu Ayuda */}
        <NeedsCatalog
          onDonateItem={handleDonateItem}
        />

        {/* 5. Voluntariado con Carné en Vivo */}
        <VolunteerSection
          onVolunteerSuccess={handleVolunteerSuccess}
        />

        {/* 6. Donaciones con Calculadora y Cuentas Copiables */}
        <DonationSection
          onDonationRegistered={handleDonationRegistered}
          preselectedResource={preselectedResource}
        />

        {/* 7. Campañas Fluviales */}
        <CampaignsSection
          onParticipateCampaign={handleParticipateCampaign}
        />

        {/* 8. Resultados */}
        <ResultsSection />

        {/* 9. Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenHelpModal={handleOpenHelpModal}
      />

      {/* Interactive Modals */}
      <CommunityModal
        community={selectedCommunity}
        onClose={() => setSelectedCommunity(null)}
        onDonateToCommunity={handleDonateToCommunity}
      />

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        onSelectOption={handleHelpOptionSelect}
      />

      <VolunteerBadgeModal
        volunteerData={volunteerBadgeData}
        onClose={() => setVolunteerBadgeData(null)}
      />

      {/* Ambient Rainforest and River Audio Toggle */}
      <AmbientAudio />
    </div>
  );
}

export default App;
