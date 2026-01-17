import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

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
    title: 'Certificación en Desarrollo Web',
    issuer: 'Plataforma de Certificación',
    date: '2024',
    credentialId: 'ABC123',
    url: 'https://example.com',
  },
  {
    id: '2',
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    credentialId: 'XYZ789',
    url: 'https://example.com',
  },
  {
    id: '3',
    title: 'Cloud Architecture Certificate',
    issuer: 'AWS',
    date: '2023',
    credentialId: 'DEF456',
  },
];

export default function CertificacionesSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="certificaciones"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
          {translations.certifications.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto">
          {translations.certifications.description}
        </p>

        <div className="space-y-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-6 p-6 border border-black/10 dark:border-white/10 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all group"
            >
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 dark:text-white/60">
                  <span>{cert.date}</span>
                  {cert.credentialId && (
                    <span className="font-mono">ID: {cert.credentialId}</span>
                  )}
                </div>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/certificaciones"
            className="inline-block px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            {translations.certifications.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
