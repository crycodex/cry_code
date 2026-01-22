import { useState, useCallback } from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TrayectoriaSection from './TrayectoriaSection';
import ProyectosSection from './ProyectosSection';
import AboutSection from './AboutSection';
import CertificacionesSection from './CertificacionesSection';
import CharlasSection from './CharlasSection';
import ContactSection from './ContactSection';
import CrowdSection from './CrowdSection';
import Footer from './Footer';
import Preloader from './ui/preloader';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handleComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <LanguageProvider>
        <Navbar />
        <HeroSection />
        <TrayectoriaSection />
        <ProyectosSection />
        <AboutSection />
        <CertificacionesSection />
        <CharlasSection />
        <ContactSection />
        <CrowdSection />
        <Footer />
      </LanguageProvider>
    </>
  );
}
