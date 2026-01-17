export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    trajectory: string;
    projects: string;
    about: string;
    certifications: string;
    talks: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    subtitleHighlight: string;
    description: string;
    contactButton: string;
  };
  visitorCounter: {
    visits: string;
  };
  trajectory: {
    title: string;
  };
  projects: {
    title: string;
    description: string;
    viewAll: string;
    code: string;
    demo: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: {
      years: string;
      projects: string;
      technologies: string;
      dedication: string;
    };
  };
  certifications: {
    title: string;
    description: string;
    viewAll: string;
  };
    talks: {
      title: string;
      description: string;
      speaker: string;
      viewAll: string;
    };
  contact: {
    title: string;
    description: string;
    info: {
      title: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    success: string;
  };
  footer: {
    rights: string;
  };
  backButton: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      trajectory: 'Trayectoria',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      certifications: 'Certificaciones',
      talks: 'Charlas',
      contact: 'Contacto',
    },
    hero: {
      title: 'Desarrollador',
      subtitle: 'Full Stack',
      subtitleHighlight: 'Full Stack',
      description: 'Creando experiencias digitales con código limpio y diseño minimalista',
      contactButton: 'Contactame',
    },
    visitorCounter: {
      visits: 'visitas',
    },
    trajectory: {
      title: 'Trayectoria',
    },
    projects: {
      title: 'Proyectos',
      description: 'Algunos de mis proyectos destacados que demuestran mi experiencia y habilidades',
      viewAll: 'Ver Todos los Proyectos',
      code: 'Código',
      demo: 'Demo',
    },
    about: {
      title: 'Sobre Mí',
      paragraph1: 'Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y funcionales. Mi enfoque está en escribir código limpio, mantenible y escalable que no solo funcione, sino que también proporcione una excelente experiencia de usuario.',
      paragraph2: 'Trabajo principalmente con tecnologías modernas como React, Node.js, TypeScript y diversas herramientas de desarrollo que me permiten construir aplicaciones robustas y de alto rendimiento.',
      paragraph3: 'Además del desarrollo, disfruto aprendiendo continuamente, compartiendo conocimiento en comunidades tecnológicas y contribuyendo a proyectos open source cuando es posible.',
      stats: {
        years: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        technologies: 'Tecnologías',
        dedication: 'Dedicación',
      },
    },
    certifications: {
      title: 'Certificaciones',
      description: 'Certificaciones y credenciales que validan mis conocimientos y habilidades',
      viewAll: 'Ver Todas las Certificaciones',
    },
    talks: {
      title: 'Charlas y Eventos Dev',
      description: 'Eventos tecnológicos, conferencias y meetups a los que he asistido o en los que he participado',
      speaker: 'Ponente',
      viewAll: 'Ver Todas las Charlas',
    },
    contact: {
      title: 'Contacto',
      description: '¿Tienes un proyecto en mente? Estoy disponible para colaborar y crear algo increíble juntos.',
      info: {
        title: 'Información de Contacto',
      },
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: 'Tu mensaje...',
      },
      success: '¡Gracias por tu mensaje! Te contactaré pronto.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    backButton: {
      text: 'Volver al inicio',
    },
  },
  en: {
    nav: {
      home: 'Home',
      trajectory: 'Trajectory',
      projects: 'Projects',
      about: 'About Me',
      certifications: 'Certifications',
      talks: 'Talks',
      contact: 'Contact',
    },
    hero: {
      title: 'Full Stack',
      subtitle: 'Developer',
      subtitleHighlight: 'Full Stack',
      description: 'Creating digital experiences with clean code and minimalist design',
      contactButton: 'Contact Me',
    },
    visitorCounter: {
      visits: 'visits',
    },
    trajectory: {
      title: 'Trajectory',
    },
    projects: {
      title: 'Projects',
      description: 'Some of my featured projects that demonstrate my experience and skills',
      viewAll: 'View All Projects',
      code: 'Code',
      demo: 'Demo',
    },
    about: {
      title: 'About Me',
      paragraph1: 'I am a Full Stack developer passionate about creating elegant and functional digital solutions. My focus is on writing clean, maintainable, and scalable code that not only works but also provides an excellent user experience.',
      paragraph2: 'I primarily work with modern technologies such as React, Node.js, TypeScript, and various development tools that allow me to build robust and high-performance applications.',
      paragraph3: 'In addition to development, I enjoy continuous learning, sharing knowledge in tech communities, and contributing to open source projects when possible.',
      stats: {
        years: 'Years of Experience',
        projects: 'Completed Projects',
        technologies: 'Technologies',
        dedication: 'Dedication',
      },
    },
    certifications: {
      title: 'Certifications',
      description: 'Certifications and credentials that validate my knowledge and skills',
      viewAll: 'View All Certifications',
    },
    talks: {
      title: 'Dev Talks & Events',
      description: 'Tech events, conferences, and meetups I have attended or participated in',
      speaker: 'Speaker',
      viewAll: 'View All Talks',
    },
    contact: {
      title: 'Contact',
      description: 'Have a project in mind? I am available to collaborate and create something amazing together.',
      info: {
        title: 'Contact Information',
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'Your message...',
      },
      success: 'Thank you for your message! I will contact you soon.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    backButton: {
      text: 'Back to home',
    },
  },
};

export const getLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('language') as Language | null;
  if (stored && (stored === 'es' || stored === 'en')) {
    return stored;
  }
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
};

export const setLanguage = (lang: Language): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
};

export const toggleLanguage = (): Language => {
  const currentLang = getLanguage();
  const newLang: Language = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
  return newLang;
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang];
};
