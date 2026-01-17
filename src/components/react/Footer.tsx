import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-black/60 dark:text-white/60 text-sm">
              © {currentYear} Tu Nombre. {translations.footer.rights}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
