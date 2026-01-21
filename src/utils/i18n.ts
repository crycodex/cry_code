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
    availableForWork: string;
    greeting: string;
    bioDescription: string;
    downloadCV: string;
  };
  visitorCounter: {
    visits: string;
  };
  trajectory: {
    title: string;
    timeline: Array<{
      type: 'work' | 'education' | 'freelance';
      company: string;
      companyPeriod: string;
      location: string;
      contractType?: string;
      roles: Array<{
        title: string;
        period: string;
        location: string;
        description: string;
      }>;
    }>;
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
      title: 'Cristhian',
      subtitle: 'Desarrollador Web - Mobile',
      subtitleHighlight: 'Full Stack',
      description: 'Dando vida a tus ideas mediante experiencias digitales únicas',
      contactButton: 'Contáctame',
      availableForWork: 'Disponible',
      greeting: 'Hola, soy',
      bioDescription: 'Ingeniero en Tecnologías de la Información, Desarrollador de Software Full Stack y Creador de contenido de programación de Ecuador, Ibarra. Especializado en el desarrollo web, móvil y de aplicaciones de impacto.',
      downloadCV: 'CV',
    },
    visitorCounter: {
      visits: 'visitas',
    },
    trajectory: {
      title: 'Trayectoria',
      timeline: [
        {
          type: 'work',
          company: 'HomeTeam Network',
          companyPeriod: 'dic. 2025 - actualidad',
          location: 'Ecuador · En remoto',
          contractType: 'Jornada completa',
          roles: [
            {
              title: 'Mobile Developer',
              period: 'dic. 2025 - actualidad',
              location: 'Ecuador · En remoto',
              description: 'Desarrollador Mobile Flutter, Swift y Kotlin enfocado a dar mantenimiento a los productos existentes, resolviendo bugs y actualizando las mismas para garantizar su mantenibilidad; además, liderar el desarrollo mobile la nueva app iScore.',
            },
          ],
        },
        {
          type: 'education',
          company: 'Instituto Tecnologico Superior Ibarra',
          companyPeriod: 'may. 2025 - dic. 2025 · 8 meses',
          location: 'Ibarra, Imbabura, Ecuador · Presencial',
          contractType: 'Contrato temporal',
          roles: [
            {
              title: 'Docente Apps Móviles Multiplataforma',
              period: 'may. 2025 - nov. 2025 · 7 meses',
              location: 'Ibarra, Imbabura, Ecuador · Presencial',
              description: 'Dirigí la formación de la nueva generación de desarrolladores móviles, impartiendo la asignatura de Aplicaciones Móviles con un enfoque práctico y orientado a proyectos. Diseñé e implementé un plan de estudios moderno centrado en Flutter y Firebase, guiando a los estudiantes en el ciclo completo de desarrollo, desde la arquitectura en capas y el diseño UI/UX hasta el consumo de APIs y la publicación en la Play Store.',
            },
            {
              title: 'Docente Sistemas Operativos, Gestión Base de Datos y Tecnologías de la Información',
              period: 'oct. 2025 - dic. 2025 · 3 meses',
              location: 'Ibarra, Imbabura, Ecuador · Presencial',
              description: 'Docente de Sistemas Operativos, Gestión Base de Datos y Tecnologías de la Información; enfocado en calidad de clases prácticas donde se realizó entregas de calidad, planificación de clases, control de estudiantes y mentorías personalizadas.',
            },
          ],
        },
        {
          type: 'work',
          company: 'NeaterNotes',
          companyPeriod: 'sept. 2024 - sept. 2025 · 1 año 1 mes',
          location: 'En remoto',
          contractType: 'Jornada completa',
          roles: [
            {
              title: 'Teach Lead Mobile Flutter',
              period: 'feb. 2025 - sept. 2025 · 8 meses',
              location: 'Ibarra, Imbabura, Ecuador',
              description: 'Integración de modelos con IA (Open IA, Gemini). Publicación de versiones estables, PlayStore y AppStore. Integración de chatbots y automatizaciones dentro de la aplicación. Control de suscripciones y roles con stripe, y pagos internos en la tienda.',
            },
            {
              title: 'Desarrollador Mobile Flutter Full Stack',
              period: 'nov. 2024 - feb. 2025 · 4 meses',
              location: 'Ibarra, Imbabura, Ecuador',
              description: 'Integración de Api REST. Servicios de autenticación a la app con Firebase. Modelos de visión por computadora OCR para scanner.',
            },
            {
              title: 'Desarrollador Mobile Flutter',
              period: 'sept. 2024 - nov. 2024 · 3 meses',
              location: 'Estados Unidos',
              description: 'Diseño de MVP de App NeaterNotes en flutter. Integración de control de versiones. Primeras versiones de prueba de la app.',
            },
          ],
        },
        {
          type: 'freelance',
          company: 'IsnotCristhianr · Profesional independiente',
          companyPeriod: 'may. 2022 - nov. 2024 · 2 años 7 meses',
          location: 'Ecuador',
          roles: [
            {
              title: 'Desarrollador de Software',
              period: 'may. 2022 - nov. 2024 · 2 años 7 meses',
              location: 'Ecuador',
              description: 'Lideré esta iniciativa de desarrollo tecnológico independiente, supervisando el ciclo completo de vida de proyectos de software, desde la conceptualización hasta el despliegue. Me especialicé en la creación de aplicaciones web y móviles personalizadas para resolver problemas específicos del mercado. Además, gestioné estrategias de marketing digital y desarrollo creativo, incluyendo la producción de filtros de Realidad Aumentada para redes sociales.',
            },
          ],
        },
      ],
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
      title: 'Cristhian',
      subtitle: 'Web - Mobile Developer',
      subtitleHighlight: 'Full Stack',
      description: 'Bringing your ideas to life through unique digital experiences',
      contactButton: 'Contact Me',
      availableForWork: 'Available',
      greeting: "Hello, I'm",
      bioDescription: 'Information Technology Engineer, Software Developer and Programming Content Creator from Ecuador, Ibarra 🇪🇨. Specialized in impactful web, mobile and app development.',
      downloadCV: 'CV',
    },
    visitorCounter: {
      visits: 'visits',
    },
    trajectory: {
      title: 'Trajectory',
      timeline: [
        {
          type: 'work',
          company: 'HomeTeam Network',
          companyPeriod: 'Dec 2025 - Present',
          location: 'Ecuador · Remote',
          contractType: 'Full-time',
          roles: [
            {
              title: 'Mobile Developer',
              period: 'Dec 2025 - Present',
              location: 'Ecuador · Remote',
              description: 'Mobile Developer specializing in Flutter, Swift, and Kotlin, focused on maintaining existing products, resolving bugs, and updating applications to ensure maintainability; also leading mobile development for the new iScore app.',
            },
          ],
        },
        {
          type: 'education',
          company: 'Instituto Tecnologico Superior Ibarra',
          companyPeriod: 'May 2025 - Dec 2025 · 8 months',
          location: 'Ibarra, Imbabura, Ecuador · On-site',
          contractType: 'Temporary contract',
          roles: [
            {
              title: 'Lecturer in Cross-Platform Mobile Applications',
              period: 'May 2025 - Nov 2025 · 7 months',
              location: 'Ibarra, Imbabura, Ecuador · On-site',
              description: 'Led the training of a new generation of mobile developers, teaching Mobile Applications with a practical, project-oriented approach. Designed and implemented a modern curriculum focused on Flutter and Firebase, guiding students through the complete development cycle, from layered architecture and UI/UX design to API consumption and Play Store publication.',
            },
            {
              title: 'Lecturer in Operating Systems, Database Management and Information Technologies',
              period: 'Oct 2025 - Dec 2025 · 3 months',
              location: 'Ibarra, Imbabura, Ecuador · On-site',
              description: 'Lecturer in Operating Systems, Database Management and Information Technologies; focused on quality practical classes with quality deliverables, class planning, student management, and personalized mentoring.',
            },
          ],
        },
        {
          type: 'work',
          company: 'NeaterNotes',
          companyPeriod: 'Sept 2024 - Sept 2025 · 1 year 1 month',
          location: 'Remote',
          contractType: 'Full-time',
          roles: [
            {
              title: 'Teach Lead Mobile Flutter',
              period: 'Feb 2025 - Sept 2025 · 8 months',
              location: 'Ibarra, Imbabura, Ecuador',
              description: 'Integration of AI models (Open AI, Gemini). Publication of stable versions on PlayStore and AppStore. Integration of chatbots and automation within the application. Subscription and role management with Stripe, and internal store payments.',
            },
            {
              title: 'Mobile Flutter Full Stack Developer',
              period: 'Nov 2024 - Feb 2025 · 4 months',
              location: 'Ibarra, Imbabura, Ecuador',
              description: 'REST API integration. Authentication services for the app with Firebase. Computer vision OCR models for scanner.',
            },
            {
              title: 'Mobile Flutter Developer',
              period: 'Sept 2024 - Nov 2024 · 3 months',
              location: 'United States',
              description: 'MVP design of NeaterNotes app in Flutter. Version control integration. Initial app testing versions.',
            },
          ],
        },
        {
          type: 'freelance',
          company: 'cry.code · Independent Professional',
          companyPeriod: 'May 2022 - Nov 2024 · 2 years 7 months',
          location: 'Ecuador',
          roles: [
            {
              title: 'Software Developer',
              period: 'May 2022 - Nov 2024 · 2 years 7 months',
              location: 'Ecuador',
              description: 'Led this independent technology development initiative, overseeing the complete software project lifecycle from conceptualization to deployment. Specialized in creating custom web and mobile applications to solve specific market problems. Additionally, managed digital marketing strategies and creative development, including producing Augmented Reality filters for social networks.',
            },
          ],
        },
      ],
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
