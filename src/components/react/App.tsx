import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TrayectoriaSection from './TrayectoriaSection';
import ProyectosSection from './ProyectosSection';
import AboutSection from './AboutSection';
import CertificacionesSection from './CertificacionesSection';
import CharlasSection from './CharlasSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <TrayectoriaSection />
      <ProyectosSection />
      <AboutSection />
      <CertificacionesSection />
      <CharlasSection />
      <ContactSection />
      <Footer />
    </LanguageProvider>
  );
}
