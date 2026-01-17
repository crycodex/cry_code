import VisitorCounter from './VisitorCounter';
import { useLanguage } from './LanguageContext';

export default function HeroSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-32 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white">
          {translations.hero.title}
          <span className="block text-blue-600 dark:text-blue-400">{translations.hero.subtitle}</span>
        </h1>
        <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          {translations.hero.description}
        </p>
        <div className="pt-8">
          <VisitorCounter />
        </div>
        <div className="pt-12">
          <a
            href="#contacto"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors"
          >
            {translations.hero.contactButton}
          </a>
        </div>
      </div>
    </section>
  );
}
