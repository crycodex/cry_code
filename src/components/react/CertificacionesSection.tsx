import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import HolographicCard from './ui/holographic-card';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Microsoft AZ-900: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    credentialId: '10D25DF28F252BB7',
    url: 'https://learn.microsoft.com/es-es/users/CristhianRecalde-4665/credentials/10D25DF28F252BB7',
  },
  {
    id: '2',
    title: 'Google Web Developmet II',
    issuer: 'Meta',
    date: '2022',
    credentialId: '6WC YWK CUF',
    url: 'https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing',
  },
  {
    id: '3',
    title: 'Unesco IA Certified',
    issuer: 'Unesco',
    date: '2022',
    credentialId: '236568133ed143e1978fa881365676b5',
    url: 'https://drive.google.com/file/d/1jyAMjhspcFqi5fYIKF2L9ude47x8SvDc/view',
  },
];

export default function CertificacionesSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="certificaciones"
      className="certificaciones-section min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black  dark:text-white  text-center mb-4 transition-colors duration-300">
          {translations.certifications.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto transition-colors duration-300">
          {translations.certifications.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <HolographicCard
              key={cert.id}
              className="p-6 min-h-[180px]"
            >
              <div className="flex flex-col h-full holographic-card-content">
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 p-2 rounded-lg bg-black/5 dark:bg-white/10">
                    <Award className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h3 className="text-lg font-bold line-clamp-2 flex-1 pt-0.5">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm mb-3 flex-1">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs">
                    {cert.date}
                  </span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certification`}
                      className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </HolographicCard>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/certificaciones"
            className="inline-block px-8 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
          >
            {translations.certifications.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
