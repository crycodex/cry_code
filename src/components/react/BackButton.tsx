import { ArrowLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface BackButtonProps {
  href?: string;
  onClick?: () => void;
}

export default function BackButton({ href = '/', onClick }: BackButtonProps) {
  const { translations } = useLanguage();
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Volver al inicio</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium">{translations.backButton.text}</span>
    </a>
  );
}
