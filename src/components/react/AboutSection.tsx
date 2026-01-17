import { useLanguage } from './LanguageContext';

export default function AboutSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-16">
          {translations.about.title}
        </h2>

        <div className="space-y-8 text-lg text-black/80 dark:text-white/80 leading-relaxed">
          <p>{translations.about.paragraph1}</p>
          <p>{translations.about.paragraph2}</p>
          <p>{translations.about.paragraph3}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div className="text-sm text-black/60 dark:text-white/60">{translations.about.stats.years}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
            <div className="text-sm text-black/60 dark:text-white/60">{translations.about.stats.projects}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div className="text-sm text-black/60 dark:text-white/60">{translations.about.stats.technologies}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <div className="text-sm text-black/60 dark:text-white/60">{translations.about.stats.dedication}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
