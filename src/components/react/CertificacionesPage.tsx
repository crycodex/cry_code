import { LanguageProvider } from './LanguageContext';
import { useLanguage } from '../../hooks/useLanguage';
import Navbar from './Navbar';
import Footer from './Footer';
import BackButton from './BackButton';
import CertificationsList from './CertificationsList';
import type { Certification } from '../../data/certifications';

function CertificacionesPageContent({
  certifications,
}: {
  certifications: Certification[];
}) {
  const { translations } = useLanguage();

  return (
    <>
      <BackButton />
      <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4 transition-colors duration-300">
        {translations.certifications.title}
      </h1>
      <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto transition-colors duration-300">
        {translations.certifications.description}
      </p>
      <CertificationsList certifications={certifications} />
    </>
  );
}

interface CertificacionesPageProps {
  certifications: Certification[];
}

export default function CertificacionesPage({ certifications }: CertificacionesPageProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="certificaciones-page min-h-screen pt-32 pb-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <CertificacionesPageContent certifications={certifications} />
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
