import { Icon } from '@iconify/react';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import HolographicCard from './ui/holographic-card';
import { featuredCertifications } from '../../data/certifications';

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
          {featuredCertifications.map((cert) => (
            <HolographicCard
              key={cert.id}
              className="p-6 min-h-[180px]"
            >
              <div className="flex flex-col h-full holographic-card-content">
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 p-2 rounded-lg bg-black/5 dark:bg-white/10">
                    {cert.icon ? (
                      <Icon
                        icon={cert.icon}
                        className="w-5 h-5 text-black dark:text-white"
                      />
                    ) : (
                      <Award className="w-5 h-5 text-black dark:text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold line-clamp-2 flex-1 pt-0.5">
                    {cert.title}
                  </h3>
                </div>
                {cert.issuer && (
                  <p className="text-sm mb-3 flex-1">
                    {cert.issuer}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto">
                  {cert.date && (
                    <span className="text-xs">
                      {cert.date}
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certification`}
                      className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300 ml-auto"
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
