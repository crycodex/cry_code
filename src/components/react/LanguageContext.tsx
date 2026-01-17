import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language, Translations } from '../../utils/i18n';
import { getLanguage, setLanguage, getTranslations } from '../../utils/i18n';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLangState] = useState<Language>('es');

  useEffect(() => {
    const currentLang = getLanguage();
    setLangState(currentLang);
    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.lang = currentLang;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLangState(lang);
    setLanguage(lang);
    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.lang = lang;
    }
  };

  const handleToggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    handleSetLanguage(newLang);
    return newLang;
  };

  const translations = getTranslations(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        setLanguage: handleSetLanguage,
        toggleLanguage: handleToggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
