import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { getTheme, toggleTheme, setTheme } from '../../utils/theme';
import { useLanguage } from './LanguageContext';
import {
  Breadcrumb,
  BreadcrumbItem,
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <nav className="fixed left-1/2 top-[max(1rem,env(safe-area-inset-top))] z-50 w-[95%] max-w-4xl -translate-x-1/2 sm:top-[max(1.25rem,env(safe-area-inset-top))] sm:w-[90%] md:top-[max(1.5rem,env(safe-area-inset-top))]">
      <div className="bg-base-100/80 backdrop-blur-lg rounded-full border border-base-300 shadow-lg overflow-visible">
        <div className="flex items-center justify-between gap-1.5 overflow-visible pl-5 pr-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3 md:px-6 md:py-3">
          {/* Logo at the beginning */}
          <div className="flex shrink-0 items-center overflow-visible">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full hover:opacity-80 hover:bg-base-200/50 transition-all sm:min-h-0 sm:min-w-0 sm:bg-transparent sm:hover:bg-transparent"
              aria-label="Go to home"
            >
              <img
                src="/img/logo/logo_remove.png"
                alt="cry.code logo"
                className="h-6 max-w-[120px] shrink-0 object-contain object-left sm:max-w-none sm:h-7 md:h-8"
              />
            </button>
          </div>

          {/* Navigation links in the center with breadcrumb style */}
          <Breadcrumb className="hidden flex-1 justify-center md:flex">
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
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            <button
              onClick={handleThemeToggle}
              className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full p-1.5 hover:bg-base-200 transition-colors sm:min-h-0 sm:min-w-0 sm:p-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-base-content" />
              ) : (
                <Sun className="h-5 w-5 text-base-content" />
              )}
            </button>
            <div className="relative" data-lang-menu>
              {isLangMenuOpen ? (
                <button
                  onClick={() => setIsLangMenuOpen(false)}
                  className="flex min-h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-full p-1.5 hover:bg-base-200 transition-colors sm:min-h-0 sm:min-w-0 sm:p-2"
                  aria-label="Toggle language"
                  aria-expanded="true"
                >
                  <Languages className="h-5 w-5 shrink-0 text-base-content" />
                  <span className="hidden text-xs font-medium text-base-content sm:inline">{language.toUpperCase()}</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsLangMenuOpen(true)}
                  className="flex min-h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-full p-1.5 hover:bg-base-200 transition-colors sm:min-h-0 sm:min-w-0 sm:p-2"
                  aria-label="Toggle language"
                  aria-expanded="false"
                >
                  <Languages className="h-5 w-5 shrink-0 text-base-content" />
                  <span className="hidden text-xs font-medium text-base-content sm:inline">{language.toUpperCase()}</span>
                </button>
              )}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 z-50 mt-2 min-w-28 overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-lg">
                  <button
                    onClick={() => {
                      setLang('es');
                      setIsLangMenuOpen(false);
                    }}
                    className={`flex min-h-11 w-full items-center px-4 py-2.5 text-left text-sm font-medium transition-colors active:bg-base-200 sm:min-h-0 sm:py-2 ${
                      language === 'es'
                        ? 'bg-blue-600 text-white dark:bg-blue-400'
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
                    className={`flex min-h-11 w-full items-center px-4 py-2.5 text-left text-sm font-medium transition-colors active:bg-base-200 sm:min-h-0 sm:py-2 ${
                      language === 'en'
                        ? 'bg-blue-600 text-white dark:bg-blue-400'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            {isMenuOpen ? (
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full p-1.5 hover:bg-base-200 transition-colors md:hidden md:min-h-0 md:min-w-0 md:p-2"
                aria-label="Toggle menu"
                aria-expanded="true"
              >
                <X className="h-5 w-5 text-base-content" />
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full p-1.5 hover:bg-base-200 transition-colors md:hidden md:min-h-0 md:min-w-0 md:p-2"
                aria-label="Toggle menu"
                aria-expanded="false"
              >
                <Menu className="h-5 w-5 text-base-content" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
            isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-base-300 py-3 pl-5 pr-4 sm:py-4 sm:px-5 md:px-6">
              <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
                <button
                  onClick={() => scrollToSection('trayectoria')}
                  className="min-h-11 w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-base-content transition-colors hover:bg-base-200 hover:text-primary active:bg-base-200 sm:min-h-0 sm:py-2"
                >
                  {translations.nav.trajectory}
                </button>
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="min-h-11 w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-base-content transition-colors hover:bg-base-200 hover:text-primary active:bg-base-200 sm:min-h-0 sm:py-2"
                >
                  {translations.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="min-h-11 w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-base-content transition-colors hover:bg-base-200 hover:text-primary active:bg-base-200 sm:min-h-0 sm:py-2"
                >
                  {translations.nav.contact}
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
