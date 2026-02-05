'use client';

import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { MouseEvent } from 'react';

interface BackButtonProps {
  href?: string;
  onClick?: () => void;
  useHistory?: boolean;
  className?: string;
}

export default function BackButton({ 
  href = '/', 
  onClick, 
  useHistory = true,
  className = '' 
}: BackButtonProps) {
  let translations;
  let backText = 'Volver al inicio';
  
  try {
    const context = useLanguage();
    translations = context?.translations;
    backText = translations?.backButton?.text || 'Volver al inicio';
  } catch (error) {
    // Si el contexto no está disponible, usar texto por defecto
    console.warn('LanguageContext not available, using default text');
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
    if (onClick) {
      onClick();
      return;
    }

    e.preventDefault();

    // Si useHistory está activado y hay historial, usar el historial del navegador
    if (useHistory && typeof window !== 'undefined') {
      const referrer = document.referrer;
      const currentOrigin = window.location.origin;
      
      // Si venimos de otra página del mismo sitio, usar history.back
      if (referrer && referrer.startsWith(currentOrigin) && window.history.length > 1) {
        window.history.back();
        return;
      }
    }

    // Si no hay historial o venimos de otro sitio, ir al home
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  const baseClasses = "inline-flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (onClick) {
    return (
      <button
        onClick={handleClick}
        className={combinedClasses}
        type="button"
        aria-label={backText}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">{backText}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={combinedClasses}
      aria-label={backText}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium">{backText}</span>
    </a>
  );
}
