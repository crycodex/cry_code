import { useMemo, useState, useEffect, useCallback, type ReactElement } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { getTheme, toggleTheme, setTheme } from '../../utils/theme';
import { useLanguage } from '../../hooks/useLanguage';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

type NavigationItem = Readonly<{ readonly id: string; readonly label: string }>;

const DESKTOP_MEDIA_QUERY: string = '(min-width: 768px)';
const MOBILE_MENU_ID: string = 'mobile-navigation';

export default function Navbar() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');
  const { language, translations, setLanguage: setLang } = useLanguage();

  const isHome = pathname === '/';

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const navigationItems = useMemo<ReadonlyArray<NavigationItem>>(() => {
    return [
      { id: 'trayectoria', label: translations.nav.trajectory },
      { id: 'proyectos', label: translations.nav.projects },
      { id: 'contacto', label: translations.nav.contact },
    ];
  }, [translations.nav.trajectory, translations.nav.projects, translations.nav.contact]);

  const pageTitleByPath: Record<string, string> = useMemo(
    () => ({
      '/proyectos': translations.nav.projects,
      '/certificaciones': translations.nav.certifications,
    }),
    [translations.nav.projects, translations.nav.certifications],
  );

  const currentPageTitle = pathname ? pageTitleByPath[pathname] ?? pathname : '';

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
    const mediaQueryList = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }
      setIsLangMenuOpen(false);
      setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleThemeToggle = useCallback((): void => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  }, []);

  const scrollToSection = useCallback((id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsLangMenuOpen(false);
    }
  }, []);

  const handleToggleLanguageMenu = useCallback((): void => {
    setIsLangMenuOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleToggleMobileMenu = useCallback((): void => {
    setIsLangMenuOpen(false);
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleSelectLanguage = useCallback(
    (newLanguage: 'es' | 'en'): void => {
      setLang(newLanguage);
      setIsLangMenuOpen(false);
    },
    [setLang],
  );

  const renderNavigationButton = useCallback(
    (item: NavigationItem, isMobile: boolean): ReactElement => {
      const baseClass = isMobile
        ? 'min-h-11 w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-base-content transition-colors hover:bg-base-200/70 hover:text-primary active:bg-base-200 sm:min-h-0 sm:py-2'
        : 'transition-colors hover:text-blue-600 dark:hover:text-blue-400';
      return (
        <button key={item.id} onClick={() => scrollToSection(item.id)} className={baseClass}>
          {item.label}
        </button>
      );
    },
    [scrollToSection],
  );

  const languageToggleContent = (
    <>
      <Languages className="h-5 w-5 shrink-0 text-base-content" />
      <span className="hidden text-xs font-medium text-base-content sm:inline">
        {language.toUpperCase()}
      </span>
    </>
  );

  return (
    <nav className="fixed left-1/2 top-[max(1rem,env(safe-area-inset-top))] z-50 w-[95%] max-w-4xl -translate-x-1/2 sm:top-[max(1.25rem,env(safe-area-inset-top))] sm:w-[90%] md:top-[max(1.5rem,env(safe-area-inset-top))]">
      <div className="relative">
        <div className="bg-base-100/40 backdrop-blur-lg rounded-full border border-base-300 dark:border-white/10 shadow-lg overflow-visible">
          <div className="flex items-center justify-between gap-1.5 overflow-visible pl-5 pr-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3 md:px-6 md:py-3">
          {/* Logo at the beginning */}
          <div className="flex shrink-0 items-center overflow-visible">
            {isHome ? (
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
            ) : (
              <a
                href="/"
                className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full hover:opacity-80 hover:bg-base-200/50 transition-all sm:min-h-0 sm:min-w-0 sm:bg-transparent sm:hover:bg-transparent"
                aria-label="Go to home"
              >
                <img
                  src="/img/logo/logo_remove.png"
                  alt="cry.code logo"
                  className="h-6 max-w-[120px] shrink-0 object-contain object-left sm:max-w-none sm:h-7 md:h-8"
                />
              </a>
            )}
          </div>

          {/* Center: nav links on home, page title on other pages */}
          {isHome ? (
            <Breadcrumb className="hidden flex-1 justify-center md:flex">
              <BreadcrumbList>
                {navigationItems.map((item, index) => {
                  const shouldRenderSeparator = index !== navigationItems.length - 1;
                  return (
                    <span key={item.id} className="contents">
                      <BreadcrumbItem>{renderNavigationButton(item, false)}</BreadcrumbItem>
                      {shouldRenderSeparator ? <BreadcrumbSeparator /> : null}
                    </span>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          ) : (
            <div className="flex flex-1 justify-center">
              <span className="text-sm font-medium text-base-content">
                {currentPageTitle}
              </span>
            </div>
          )}

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
                  onClick={handleToggleLanguageMenu}
                  className="flex min-h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-full p-1.5 hover:bg-base-200 transition-colors sm:min-h-0 sm:min-w-0 sm:p-2"
                  aria-label="Toggle language"
                  aria-expanded="true"
                >
                  {languageToggleContent}
                </button>
              ) : (
                <button
                  onClick={handleToggleLanguageMenu}
                  className="flex min-h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-full p-1.5 hover:bg-base-200 transition-colors sm:min-h-0 sm:min-w-0 sm:p-2"
                  aria-label="Toggle language"
                  aria-expanded="false"
                >
                  {languageToggleContent}
                </button>
              )}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 z-50 mt-2 min-w-28 overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-lg">
                  <button
                    onClick={() => handleSelectLanguage('es')}
                    className={`flex min-h-11 w-full items-center px-4 py-2.5 text-left text-sm font-medium transition-colors active:bg-base-200 sm:min-h-0 sm:py-2 ${
                      language === 'es'
                        ? 'bg-blue-600 text-white dark:bg-blue-400'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                  🇪🇸  ES
                  </button>
                  <button
                    onClick={() => handleSelectLanguage('en')}
                    className={`flex min-h-11 w-full items-center px-4 py-2.5 text-left text-sm font-medium transition-colors active:bg-base-200 sm:min-h-0 sm:py-2 ${
                      language === 'en'
                        ? 'bg-blue-600 text-white dark:bg-blue-400'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                </div>
              )}
            </div>
            {isMenuOpen ? (
              <button
                onClick={handleToggleMobileMenu}
                className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full p-1.5 hover:bg-base-200 transition-colors md:hidden md:min-h-0 md:min-w-0 md:p-2"
                aria-label="Toggle menu"
                aria-controls={MOBILE_MENU_ID}
                aria-expanded="true"
              >
                <X className="h-5 w-5 text-base-content" />
              </button>
            ) : (
              <button
                onClick={handleToggleMobileMenu}
                className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full p-1.5 hover:bg-base-200 transition-colors md:hidden md:min-h-0 md:min-w-0 md:p-2"
                aria-label="Toggle menu"
                aria-controls={MOBILE_MENU_ID}
                aria-expanded="false"
              >
                <Menu className="h-5 w-5 text-base-content" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id={MOBILE_MENU_ID}
        className={`absolute left-0 right-0 top-full z-50 mt-2 rounded-3xl border border-base-300 bg-base-100/90 backdrop-blur-lg shadow-lg transition-all duration-200 ease-out md:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-3 px-4 sm:py-4 sm:px-5">
          <div className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            {isHome ? (
              navigationItems.map((item) => renderNavigationButton(item, true))
            ) : (
              <a
                href="/"
                className="min-h-11 w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-base-content transition-colors hover:bg-base-200/70 hover:text-primary active:bg-base-200"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLangMenuOpen(false);
                }}
              >
                {translations.nav.home}
              </a>
            )}
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}
