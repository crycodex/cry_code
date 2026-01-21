import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { getTheme, toggleTheme, setTheme } from '../../utils/theme';
import { useLanguage } from './LanguageContext';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

export default function Navbar() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, translations, setLanguage: setLang } = useLanguage();

  useEffect(() => {
    const currentTheme = getTheme();
    setThemeState(currentTheme);
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-lang-menu]')) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl mx-auto">
      <div className="bg-base-100/80 backdrop-blur-md rounded-full border border-base-300 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo at the beginning */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Go to home"
            >
              <img
                src="/img/logo/logo_remove.png"
                alt="cry.code logo"
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Navigation links in the center with breadcrumb style */}
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <button
                  onClick={() => scrollToSection('trayectoria')}
                  className="transition-colors hover:text-primary"
                >
                  {translations.nav.trajectory}
                </button>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="transition-colors hover:text-primary"
                >
                  {translations.nav.projects}
                </button>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="transition-colors hover:text-primary"
                >
                  {translations.nav.contact}
                </button>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Theme and Language controls at the end */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-base-content" />
              ) : (
                <Sun className="w-5 h-5 text-base-content" />
              )}
            </button>
            <div className="relative" data-lang-menu>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-full hover:bg-base-200 transition-colors flex items-center gap-1"
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5 text-base-content" />
                <span className="text-xs font-medium text-base-content">{language.toUpperCase()}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-base-100 border border-base-300 rounded-lg shadow-lg overflow-hidden min-w-[100px] z-50">
                  <button
                    onClick={() => {
                      setLang('es');
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                      language === 'es'
                        ? 'bg-blue-600 dark:bg-blue-400 text-white'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                      language === 'en'
                        ? 'bg-blue-600 dark:bg-blue-400 text-white'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-base-content" />
              ) : (
                <Menu className="w-5 h-5 text-base-content" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-base-300 py-4 px-6 space-y-3">
            <button
              onClick={() => scrollToSection('trayectoria')}
              className="block w-full text-left text-sm font-medium text-base-content hover:text-primary transition-colors py-2"
            >
              {translations.nav.trajectory}
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="block w-full text-left text-sm font-medium text-base-content hover:text-primary transition-colors py-2"
            >
              {translations.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-sm font-medium text-base-content hover:text-primary transition-colors py-2"
            >
              {translations.nav.contact}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
