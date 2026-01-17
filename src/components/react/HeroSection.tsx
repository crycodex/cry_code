import { useLanguage } from './LanguageContext';
import { MinimalistHero } from './ui/minimalist-hero';
import { Github, Linkedin, Mail } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

export default function HeroSection() {
  const { translations, language } = useLanguage();

  const navLinks = [
    { label: translations.nav.home.toUpperCase(), href: '#hero' },
    { label: translations.nav.projects.toUpperCase(), href: '#proyectos' },
    { label: translations.nav.about.toUpperCase(), href: '#about' },
    { label: translations.nav.contact.toUpperCase(), href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Mail, href: 'mailto:contacto@ejemplo.com' },
  ];

  const overlayText = {
    part1: language === 'es' ? translations.hero.title : 'Full Stack',
    part2: language === 'es' ? translations.hero.subtitle : 'Developer',
  };

  return (
    <section id="hero" className="relative">
      <MinimalistHero
        logoText="cry.code"
        navLinks={navLinks}
        mainText={translations.hero.description}
        readMoreLink="#about"
        imageSrc="/img/me/me_cut.png"
        imageAlt="Cristian Armas - Desarrollador Full Stack"
        overlayText={overlayText}
        socialLinks={socialLinks}
        locationText={
          <div className="flex items-center gap-2">
            <VisitorCounter />
          </div>
        }
      />
    </section>
  );
}
