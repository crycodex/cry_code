export type Language = "es" | "en";

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
      type: "work" | "education" | "freelance";
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
    pageTitle: string;
    pageDescription: string;
    searchPlaceholder: string;
    filterAll: string;
    filterMobile: string;
    filterWeb: string;
    filterBackend: string;
    filterDesign: string;
    filterAR: string;
    techFilterLabel: string;
    resultsCount: string;
    noResults: string;
    noResultsDescription: string;
    clearFilters: string;
    list: Array<{
      id: string;
      title: string;
      description: string;
      longDescription?: string;
    }>;
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
      sending: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    success: string;
    error: string;
  };
  footer: {
    rights: string;
  };
  backButton: {
    text: string;
  };
  awards: {
    app2023: {
      title: string;
      subtitle: string;
      date: string;
    };
  };
  statistics: {
    visits: string;
    visitsSubtitle: string;
    projects: string;
    projectsSubtitle: string;
    languagesFrameworks: string;
    languagesSubtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      trajectory: "Trayectoria",
      projects: "Proyectos",
      about: "Sobre Mí",
      certifications: "Certificaciones",
      talks: "Charlas",
      contact: "Contacto",
    },
    hero: {
      title: "Cristhian",
      subtitle: "Desarrollador Web - Mobile",
      subtitleHighlight: "Full Stack",
      description:
        "Dando vida a tus ideas mediante experiencias digitales únicas",
      contactButton: "Contáctame",
      availableForWork: "Disponible",
      greeting: "Hola, soy",
      bioDescription:
        "Ingeniero en Tecnologías de la Información, Desarrollador de Software Full Stack y Creador de contenido de programación de Ecuador, Ibarra. Especializado en el desarrollo web, móvil y de aplicaciones de impacto.",
      downloadCV: "CV",
    },
    visitorCounter: {
      visits: "visitas",
    },
    trajectory: {
      title: "Trayectoria",
      timeline: [
        {
          type: "work",
          company: "HomeTeam Network",
          companyPeriod: "dic. 2025 - actualidad",
          location: "Ecuador · En remoto",
          contractType: "Jornada completa",
          roles: [
            {
              title: "Mobile Developer",
              period: "dic. 2025 - actualidad",
              location: "Ecuador · En remoto",
              description:
                "Desarrollador Mobile Flutter, Swift y Kotlin enfocado a dar mantenimiento a los productos existentes, resolviendo bugs y actualizando las mismas para garantizar su mantenibilidad; además, liderar el desarrollo mobile la nueva app iScore 2026.",
            },
          ],
        },
        {
          type: "education",
          company: "Instituto Tecnologico Superior Ibarra",
          companyPeriod: "may. 2025 - dic. 2025 · 8 meses",
          location: "Ibarra, Imbabura, Ecuador · Presencial",
          contractType: "Contrato temporal",
          roles: [
            {
              title: "Docente Apps Móviles Multiplataforma",
              period: "may. 2025 - nov. 2025 · 7 meses",
              location: "Ibarra, Imbabura, Ecuador · Presencial",
              description:
                "Dirigí la formación de la nueva generación de desarrolladores móviles, impartiendo la asignatura de Aplicaciones Móviles con un enfoque práctico y orientado a proyectos. Diseñé e implementé un plan de estudios moderno centrado en Flutter y Firebase, guiando a los estudiantes en el ciclo completo de desarrollo, desde la arquitectura en capas y el diseño UI/UX hasta el consumo de APIs y la publicación en la Play Store.",
            },
            {
              title:
                "Docente Sistemas Operativos, Gestión Base de Datos y Tecnologías Aplicadas",
              period: "oct. 2025 - dic. 2025 · 3 meses",
              location: "Ibarra, Imbabura, Ecuador · Presencial",
              description:
                "Docente de Sistemas Operativos, Gestión Base de Datos y Tecnologías Aplicadas; enfocado en calidad de clases prácticas donde se realizó entregas, planificación de clases, control de estudiantes y mentorías personalizadas.",
            },
          ],
        },
        {
          type: "work",
          company: "NeaterNotes",
          companyPeriod: "sept. 2024 - sept. 2025 · 1 año 1 mes",
          location: "En remoto",
          contractType: "Jornada completa",
          roles: [
            {
              title: "Teach Lead Mobile Flutter",
              period: "feb. 2025 - sept. 2025 · 8 meses",
              location: "Ibarra, Imbabura, Ecuador",
              description:
                "Integración de modelos con IA (Open IA, Gemini). Publicación de versiones estables, PlayStore y AppStore. Integración de chatbots y automatizaciones dentro de la aplicación. Control de suscripciones y roles con stripe, y pagos internos en la tienda.",
            },
            {
              title: "Desarrollador Mobile Flutter Full Stack",
              period: "nov. 2024 - feb. 2025 · 4 meses",
              location: "Ibarra, Imbabura, Ecuador",
              description:
                "Integración de Api REST. Servicios de autenticación a la app con Firebase. Modelos de visión por computadora OCR para scanner.",
            },
            {
              title: "Desarrollador Mobile Flutter",
              period: "sept. 2024 - nov. 2024 · 3 meses",
              location: "Estados Unidos",
              description:
                "Diseño de MVP de App NeaterNotes en flutter. Integración de control de versiones. Primeras versiones de prueba de la app.",
            },
          ],
        },
        {
          type: "freelance",
          company: "Cry.code · Profesional independiente",
          companyPeriod: "may. 2022 - actualidad",
          location: "Ecuador",
          roles: [
            {
              title: "Desarrollador de Software",
              period: "may. 2022 - actualidad",
              location: "Ecuador",
              description:
                "Lideré esta iniciativa de desarrollo tecnológico independiente, supervisando el ciclo completo de vida de proyectos de software, desde la conceptualización hasta el despliegue. Me especialicé en la creación de aplicaciones web y móviles personalizadas para resolver problemas específicos del mercado. Además, gestioné estrategias de marketing digital y desarrollo creativo, incluyendo la producción de filtros de Realidad Aumentada para redes sociales.",
            },
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      description:
        "Algunos de mis proyectos destacados que demuestran mi experiencia y habilidades",
      viewAll: "Ver Todos los Proyectos",
      code: "Código",
      demo: "Demo",
      pageTitle: "Todos los Proyectos",
      pageDescription:
        "Una colección completa de mis proyectos y trabajos destacados",
      searchPlaceholder: "Buscar proyectos...",
      filterAll: "Todos",
      filterMobile: "Mobile",
      filterWeb: "Web",
      filterBackend: "Backend",
      filterDesign: "Diseño",
      filterAR: "AR / Filtros",
      techFilterLabel: "Tecnologías",
      resultsCount: "proyectos encontrados",
      noResults: "No se encontraron proyectos",
      noResultsDescription: "Intenta con otros filtros o términos de búsqueda",
      clearFilters: "Limpiar filtros",
      list: [
        {
          id: "1",
          title: "Chulla Cash - Aplicación para Finanzas",
          description:
            "Aplicación para la gestión de finanzas personales. Implementación de servicios de autenticación, almacenamiento, etc. Despliegue en la Play Store",
          longDescription:
            "Aplicación móvil para la gestión de finanzas personales con servicios de autenticación, almacenamiento de datos y despliegue en Google Play Store.",
        },
        {
          id: "2",
          title: "Swapme - Aplicación de intercambio de Prendas de Vestir",
          description:
            "Aplicación movil para intercambio de prendas de vestir. Implementación de servicios de autenticación, almacenamiento, etc. Despliegue en tiendas de aplicaciones Google Play Store",
          longDescription:
            "Aplicación móvil para intercambio de prendas de vestir con servicios de autenticación, almacenamiento y despliegue en Google Play Store.",
        },
        {
          id: "3",
          title: "Diseño UX/UI - App Nike",
          description:
            "Diseño de interfaz de usuario y experiencia de usuario para la aplicación Nike.",
        },
        {
          id: "4",
          title: "Nike App Rediseño - UI/UX",
          description:
            "Rediseño de la aplicación Nike. Implementación de diseño responsivo y accesible. Creación de prototipos y pruebas de usabilidad.",
        },
        {
          id: "5",
          title: "Web Imbabura Candidatos",
          description:
            "Sistema de votación para la provincia de Imbabura. Implementación de votación por candidatos, almacenamiento de votos, etc. Despliegue en la web",
          longDescription:
            "Sistema de votación web para la provincia de Imbabura con votación por candidatos, almacenamiento seguro de votos y despliegue en la web.",
        },
        {
          id: "6",
          title: "Diigo - Landing Page",
          description:
            "Landing Page de la aplicación Diigo. Implementación de formulario de contacto, almacenamiento de correos, etc. Despliegue en la web",
        },
        {
          id: "7",
          title: "Spiccy - Healty Food Recipes",
          description:
            "Pagina Web de recetas de comida saludable. Implementación de formulario de contacto, almacenamiento de recetas, etc. Despliegue en la web",
        },
        {
          id: "8",
          title: "WalkiDogs - WebApp de Paseo de Mascotas",
          description:
            "Aplicación web para el paseo de mascotas. Implementación de servicios de autenticación, almacenamiento, etc. Despliegue en la web",
        },
        {
          id: "9",
          title: "GifSearch - Api de Gifs",
          description:
            "Aplicación de busqueda de gifs. Implementación de busqueda de gifs, almacenamiento de gifs, etc. Despliegue en la web Vercel",
        },
        {
          id: "10",
          title: "CriptoCotizador - Api de Criptomonedas",
          description:
            "Aplicación de cotización de criptomonedas. Implementación de busqueda de criptomonedas, almacenamiento de cotizaciones, etc. Despliegue en la web Vercel",
        },
        {
          id: "11",
          title: "Pinia Store - Ecommerce",
          description:
            "Tienda en linea de productos de tecnología. Implementación de carrito de compras, busqueda de productos, etc. Despliegue en Vercel",
        },
        {
          id: "12",
          title: "Laravel Hotel - Sistema de Reservas",
          description:
            "Sistema de reservas de habitaciones de hotel. Implementación de reservas, busqueda de habitaciones, etc. Despliegue en servidor local",
        },
        {
          id: "13",
          title: "Cielo Verde Escuela de Español",
          description:
            "Sistema de gestión de estudiantes de la escuela de español Cielo Verde. Implementación de matriculas, pagos, etc. Despliegue en servidores web",
        },
        {
          id: "14",
          title: "Hotel Mongo DB",
          description:
            "Sistema de reservas de habitaciones de hotel. Implementación de reservas, busqueda de habitaciones, etc. Despliegue en servidor local",
        },
        {
          id: "15",
          title: "Gestion Documental PUCE-I",
          description:
            "Sistema de gestión documental para la Pontificia Universidad Católica del Ecuador - Ibarra. Implementación de reportes a estudiantes matriculados y egresados desde 1976 hasta 2023. Despliegue en servidores locales",
          longDescription:
            "Sistema de gestión documental para la PUCE-I con reportes de estudiantes matriculados y egresados desde 1976 hasta 2023, desplegado en servidores locales.",
        },
        {
          id: "16",
          title: "Pokedex - Api de Pokemon",
          description:
            "Aplicación de busqueda de pokemones. Implementación de busqueda de pokemones, almacenamiento de pokemones, etc. Despliegue en la web",
        },
        {
          id: "17",
          title: "Instagram Clone - Ideas y Tendencias",
          description:
            "Aplicación de Instagram clone. Implementación de Autenticacion, comentarios y subida de imagenes. Despliegue en FirebaseHosting",
          longDescription:
            "Aplicación de Instagram clone con autenticacion, comentarios y subida de imagenes, despliegue en FirebaseHosting.",
        },
        {
          id: "18",
          title: "GDG Guayaquil - Desing UX/UI",
          description:
            "Diseño de interfaz de usuario y experiencia de usuario para la comunidad de Google Developers Group Guayaquil. Creación de prototipos y pruebas de usabilidad. Implementación de diseño responsivo y accesibilidad.",
        },
        {
          id: "19",
          title: "Backend App Movil",
          description:
            "Aplicación de intercambios. Implementación de servicios de autenticación, almacenamiento, etc. Despliegue en Firebase",
        },
        {
          id: "20",
          title: "Hosting Web Firebase",
          description:
            "Hosting de aplicaciones web en Firebase. Implementación de servicios de autenticación, almacenamiento, etc. Despliegue en Firebase",
        },
        {
          id: "21",
          title: "Creatibot - Web Incripciones",
          description:
            "Web de incripciones. Implementación de servicios de registro y formularios. Despliegue en local",
        },
        {
          id: "22",
          title: "Filtro Vintage Instagram",
          description:
            "Filtro de imagenes de Instagram, implementacion de tools de procesamiento de imágenes. Despliegue en Instagram y Facebook",
        },
        {
          id: "23",
          title: "Filtro Indie Instagram",
          description:
            "Filtro de imagenes de Instagram, implementacion de tools de procesamiento de imágenes. Despliegue en Instagram y Facebook",
        },
        {
          id: "24",
          title: "Filtro Glitch Instagram",
          description:
            "Filtro de imagenes de Instagram, implementacion de tools de procesamiento de imágenes. Despliegue en Instagram y Facebook",
        },
        {
          id: "25",
          title: "Filtro Astigma Instagram",
          description:
            "Filtro de imagenes de Instagram, implementacion de tools de procesamiento de imágenes. Despliegue en Instagram y Facebook",
        },
        {
          id: "26",
          title: "Venturex - Plataforma de Comercio Internacional",
          description:
            "Consultas estadísticas de productos de diferentes paises. Implementación de busquedas globales con datos. Despliegue en Vercel",
          longDescription:
            "Plataforma de comercio internacional con consultas estadísticas de productos de diferentes países, búsquedas globales y despliegue en Vercel.",
        },
        {
          id: "27",
          title: "Binesai - Web Bienal de Arte",
          description:
            "Pagina web de la Bienal de Arte San Antonio de Ibarra 2025. Implementación de formulario de contacto, almacenamiento de datos, etc. Despliegue en la web",
        },
        {
          id: "28",
          title: "Swapme 2.0 - Aplicación de intercambio de Prendas de Vestir",
          description:
            "Aplicación movil para intercambio de prendas de vestir renovada con nuevas funcionalidades.",
          longDescription:
            "Aplicación móvil para intercambio de prendas de vestir renovada con nuevas funcionalidades con servicios de autenticación, almacenamiento y despliegue en Google Play Store y App Store.",
        },
        {
          id: "29",
          title: "Count App - Aplicación de Contadores",
          description:
            "Aplicación movil para la gestión de contadores.",
          longDescription:
            "Aplicación móvil para la gestión de contadores con servicios de almacenamiento el localStorage.",
        },
        {
          id: "30",
          title: "ChatSimulator - Chatbot de Simulación",
          description:
            "Chatbot de simulación. Implementación de chatbot local entre dos usuarios.",
          longDescription:
            "Chatbot de simulación con IA. Implementación de chatbot local entre dos usuarios y despliegue en Apps Store y Google Play Store.",
        },
        {
          id: "31",
          title: "Hand IA - Landing Page",
          description:
            "Landing Page de la aplicación Hand IA.",
          longDescription:
            "Landing Page de la aplicación Hand IA con seccioes de info, políticas de privacidad y terminos de uso, etc. Despliegue en la web",
        },
        {
          id: "32",
          title: "Spotify Clone - Aplicación de Reproducción de Música",
          description:
            "Aplicación de reproducción de música. Implementación de reproducción de música, almacenamiento de música, etc.",
          longDescription:
            "Aplicación de reproducción de música con servicios de autenticación, almacenamiento y despliegue en la web. Integración de API de Spotify.",
        },
        {
          id: "33",
          title: "Agroindustrias Equatorial - Landing Page",
          description:
            "Landing Page de la empresa Agroindustrias Equatorial para k-os licores",
          longDescription:
            "Landing Page de la empresa Agroindustrias Equatorial para k-os licor de la provincia de Imbabura con seccioes de info, productos, etc. Despliegue en la web",
        },
        {
          id: "34",
          title: "Simulador de pruebas repaso Biotecnología",
          description:
            "Simulador de pruebas repaso Biotecnología. Implementación de simulador de pruebas repaso Biotecnología con servicios de autenticación, almacenamiento, etc.",
          longDescription:
            "Simulador de pruebas repaso Biotecnología con servicios de autenticación, almacenamiento, etc. Despliegue en la web",
        },
        {
          id: "35",
          title: "Tribbe App - Landing Page",
          description:
            "Landing Page de la aplicación Tribbe.",
          longDescription:
            "Landing Page de la aplicación Tribbe con seccioes de info, políticas de privacidad y terminos de uso, etc. Despliegue en la web",
        },
        {
          id: "36",
          title: "Swapme 2.0 - Landing Page",
          description:
            "Landing Page de la aplicación Swapme 2.0.",
          longDescription:
            "Landing Page de la aplicación Swapme 2.0 con seccioes de info, políticas de privacidad y terminos de uso, etc. Despliegue en la web",
        },
        {
          id: "37",
          title: "Cinnemapedia App - Landing Page",
          description:
            "Landing Page de la aplicación Cinnemapedia.",
          longDescription:
            "Landing Page de la aplicación Cinnemapedia con seccioes de info, politicas de privacidad y terminos de uso, etc. Despliegue en la web",
        },
        {
          id: "38",
          title: "IonosHub - Landing Page",
          description:
            "Landing Page de IonosHub enfoque en simplicidad y eficiencia .",
          longDescription:
            "Landing Page de IonosHub enfoque en simplicidad y eficiencia para servicios. Despliegue en la web",
        },
        {
          id: "39",
          title: "Dash Board Proyectos - CRUD",
          description:
            "Dashboard de proyectos con CRUD. Implementación de dashboard de proyectos con CRUD con servicios de autenticación, almacenamiento, etc.",
          longDescription:
            "Dashboard de proyectos con CRUD con servicios de autenticación, almacenamiento, etc. Despliegue en la web",
        },
        {
          id: "40",
          title: "Space X - Landing Page",
          description:
            "Landing Page de Space X lanzamientos de cohetes.",
          longDescription:
            "Landing Page de Space X lanzamientos de cohetes. Despliegue en la web",
        },
        {
          id: "41",
          title: "Iglu Coffee - Landing Page",
          description:
            "Landing Page de Iglu Coffee.",
          longDescription:
            "Landing Page de Iglu Coffee con seccioes de info,menu y promociones, etc. Despliegue en la web",
        },
        {
          id: "42",
          title: "El chipotle - Landing Page",
          description:
            "Landing Page de El chipotle.",
          longDescription:
            "Landing Page de El chipotle con seccioes de info,menu y promociones, etc. Despliegue en la web",
        },
        {
          id: "43",
          title: "Tribbe - App",
          description:
            "Aplicación de Tribbe para gymnasios y records.",
          longDescription:
            "Aplicación de Tribbe con seccioes de info,menu y promociones, etc. Despliegue en Google Play Store y App Store",
        },
      ],
    },
    about: {
      title: "Sobre Mí",
      paragraph1:
        "Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y funcionales. Mi enfoque está en escribir código limpio, mantenible y escalable que no solo funcione, sino que también proporcione una excelente experiencia de usuario.",
      paragraph2:
        "Trabajo principalmente con tecnologías modernas que me permitieron construir aplicaciones robustas y de alto rendimiento para StartUps de Estados Unidos y Ecuador.",
      paragraph3:
        "Además del desarrollo, disfruto aprendiendo continuamente, compartiendo conocimiento en comunidades tecnológicas y contribuyendo a proyectos open source cuando es posible.",
      stats: {
        years: "Años de Experiencia",
        projects: "Proyectos Completados",
        technologies: "Tecnologías",
        dedication: "Dedicación",
      },
    },
    certifications: {
      title: "Certificaciones",
      description:
        "Certificaciones y credenciales que validan mis conocimientos y habilidades",
      viewAll: "Ver Todas las Certificaciones",
    },
    talks: {
      title: "Charlas y Eventos",
      description:
        "Eventos tecnológicos, conferencias y meetups a los que he asistido o en los que he participado",
      speaker: "Ponente",
      viewAll: "ver más",
    },
    contact: {
      title: "Contacto",
      description:
        "¿Tienes un proyecto en mente? Estoy disponible para colaborar y crear algo increíble juntos.",
      info: {
        title: "Información de Contacto",
      },
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        messagePlaceholder: "Tu mensaje...",
      },
      success: "¡Gracias por tu mensaje! Te contactaré pronto.",
      error: "Error al enviar el mensaje. Inténtalo de nuevo.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    backButton: {
      text: "Volver al inicio",
    },
    awards: {
      app2023: {
        title: "GANADOR",
        subtitle: "Mención de Honor, Torneo Tu App",
        date: "2023",
      },
    },
    statistics: {
      visits: "Visitas",
      visitsSubtitle: "Desde 2024",
      projects: "Proyectos",
      projectsSubtitle: "↗10 (85%)",
      languagesFrameworks: "Lenguajes/Frameworks",
      languagesSubtitle: "↗ 15 (30%)",
    },
  },
  en: {
    nav: {
      home: "Home",
      trajectory: "Trajectory",
      projects: "Projects",
      about: "About Me",
      certifications: "Certifications",
      talks: "Talks",
      contact: "Contact",
    },
    hero: {
      title: "Cristhian",
      subtitle: "Web - Mobile Developer",
      subtitleHighlight: "Full Stack",
      description:
        "Bringing your ideas to life through unique digital experiences",
      contactButton: "Contact Me",
      availableForWork: "Available",
      greeting: "Hello, I'm",
      bioDescription:
        "Information Technology Engineer, Software Developer and Programming Content Creator from Ecuador, Ibarra 🇪🇨. Specialized in impactful web, mobile and app development.",
      downloadCV: "CV",
    },
    visitorCounter: {
      visits: "visits",
    },
    trajectory: {
      title: "Trajectory",
      timeline: [
        {
          type: "work",
          company: "HomeTeam Network",
          companyPeriod: "Dec 2025 - Present",
          location: "Ecuador · Remote",
          contractType: "Full-time",
          roles: [
            {
              title: "Mobile Developer",
              period: "Dec 2025 - Present",
              location: "Ecuador · Remote",
              description:
                "Mobile Developer specializing in Flutter, Swift, and Kotlin, focused on maintaining existing products, resolving bugs, and updating applications to ensure maintainability; also leading mobile development for the new iScore app 2026.",
            },
          ],
        },
        {
          type: "education",
          company: "Instituto Tecnologico Superior Ibarra",
          companyPeriod: "May 2025 - Dec 2025 · 8 months",
          location: "Ibarra, Imbabura, Ecuador · On-site",
          contractType: "Temporary contract",
          roles: [
            {
              title: "Lecturer in Cross-Platform Mobile Applications",
              period: "May 2025 - Nov 2025 · 7 months",
              location: "Ibarra, Imbabura, Ecuador · On-site",
              description:
                "Led the training of a new generation of mobile developers, teaching Mobile Applications with a practical, project-oriented approach. Designed and implemented a modern curriculum focused on Flutter and Firebase, guiding students through the complete development cycle, from layered architecture and UI/UX design to API consumption and Play Store publication.",
            },
            {
              title:
                "Lecturer in Operating Systems, Database Management and Applied Technologies",
              period: "Oct 2025 - Dec 2025 · 3 months",
              location: "Ibarra, Imbabura, Ecuador · On-site",
              description:
                "Lecturer in Operating Systems, Database Management and Applied Technologies; focused on quality practical classes with deliverables, class planning, student management, and personalized mentoring.",
            },
          ],
        },
        {
          type: "work",
          company: "NeaterNotes",
          companyPeriod: "Sept 2024 - Sept 2025 · 1 year 1 month",
          location: "Remote",
          contractType: "Full-time",
          roles: [
            {
              title: "Teach Lead Mobile Flutter",
              period: "Feb 2025 - Sept 2025 · 8 months",
              location: "Ibarra, Imbabura, Ecuador",
              description:
                "Integration of AI models (Open AI, Gemini). Publication of stable versions on PlayStore and AppStore. Integration of chatbots and automation within the application. Subscription and role management with Stripe, and internal store payments.",
            },
            {
              title: "Mobile Flutter Full Stack Developer",
              period: "Nov 2024 - Feb 2025 · 4 months",
              location: "Ibarra, Imbabura, Ecuador",
              description:
                "REST API integration. Authentication services for the app with Firebase. Computer vision OCR models for scanner.",
            },
            {
              title: "Mobile Flutter Developer",
              period: "Sept 2024 - Nov 2024 · 3 months",
              location: "United States",
              description:
                "MVP design of NeaterNotes app in Flutter. Version control integration. Initial app testing versions.",
            },
          ],
        },
        {
          type: "freelance",
          company: "cry.code · Independent Professional",
          companyPeriod: "May 2022 - Present",
          location: "Ecuador",
          roles: [
            {
              title: "Software Developer",
              period: "May 2022 - Present",
              location: "Ecuador",
              description:
                "Led this independent technology development initiative, overseeing the complete software project lifecycle from conceptualization to deployment. Specialized in creating custom web and mobile applications to solve specific market problems. Additionally, managed digital marketing strategies and creative development, including producing Augmented Reality filters for social networks.",
            },
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      description:
        "Some of my featured projects that demonstrate my experience and skills",
      viewAll: "View All Projects",
      code: "Code",
      demo: "Demo",
      pageTitle: "All Projects",
      pageDescription: "A complete collection of my projects and featured work",
      searchPlaceholder: "Search projects...",
      filterAll: "All",
      filterMobile: "Mobile",
      filterWeb: "Web",
      filterBackend: "Backend",
      filterDesign: "Design",
      filterAR: "AR / Filters",
      techFilterLabel: "Technologies",
      resultsCount: "projects found",
      noResults: "No projects found",
      noResultsDescription: "Try different filters or search terms",
      clearFilters: "Clear filters",
      list: [
        {
          id: "1",
          title: "Chulla Cash - Personal Finance App",
          description:
            "App for personal finance management. Authentication and storage services implementation. Published on Play Store",
          longDescription:
            "Mobile app for personal finance management with authentication, data storage and deployment on Google Play Store.",
        },
        {
          id: "2",
          title: "Swapme - Clothing Swap App",
          description:
            "Mobile app for swapping clothing items. Authentication and storage services implementation. Published on Google Play Store",
          longDescription:
            "Mobile app for clothing swap with authentication, storage and deployment on Google Play Store.",
        },
        {
          id: "3",
          title: "UX/UI Design - Nike App",
          description:
            "User interface and experience design for the Nike app. Prototyping and usability testing. Responsive and accessible design implementation.",
        },
        {
          id: "4",
          title: "Nike App Redesign - UI/UX",
          description:
            "Nike app redesign. Responsive and accessible design implementation. Prototyping and usability testing.",
        },
        {
          id: "5",
          title: "Web Imbabura Candidates",
          description:
            "Voting system for the province of Imbabura. Candidate voting implementation, vote storage, etc. Web deployment",
          longDescription:
            "Web voting system for Imbabura province with candidate voting, secure vote storage and web deployment.",
        },
        {
          id: "6",
          title: "Diigo - Landing Page",
          description:
            "Landing page for the Diigo app. Contact form implementation, email storage, etc. Web deployment",
        },
        {
          id: "7",
          title: "Spiccy - Healthy Food Recipes",
          description:
            "Healthy food recipes website. Contact form implementation, recipe storage, etc. Web deployment",
        },
        {
          id: "8",
          title: "WalkiDogs - Pet Walking WebApp",
          description:
            "Web app for pet walking. Authentication and storage services implementation. Web deployment",
        },
        {
          id: "9",
          title: "GifSearch - Gif API",
          description:
            "Gif search application. Gif search and storage implementation. Deployment on Vercel",
        },
        {
          id: "10",
          title: "CriptoCotizador - Cryptocurrency API",
          description:
            "Cryptocurrency quotation app. Cryptocurrency search and quotation storage implementation. Deployment on Vercel",
        },
        {
          id: "11",
          title: "Pinia Store - Ecommerce",
          description:
            "Online technology products store. Shopping cart and product search implementation. Deployment on Vercel",
        },
        {
          id: "12",
          title: "Laravel Hotel - Booking System",
          description:
            "Hotel room booking system. Reservations and room search implementation. Local server deployment",
        },
        {
          id: "13",
          title: "Cielo Verde Spanish School",
          description:
            "Student management system for Cielo Verde Spanish school. Enrollments, payments, etc. Web server deployment",
        },
        {
          id: "14",
          title: "Hotel Mongo DB",
          description:
            "Hotel room booking system. Reservations and room search implementation. Local server deployment",
        },
        {
          id: "15",
          title: "Document Management PUCE-I",
          description:
            "Document management system for Pontificia Universidad Católica del Ecuador - Ibarra. Reports for enrolled and graduated students from 1976 to 2023. Local server deployment",
          longDescription:
            "Document management system for PUCE-I with reports for enrolled and graduated students from 1976 to 2023, deployed on local servers.",
        },
        {
          id: "16",
          title: "Pokedex - Pokemon API",
          description:
            "Pokemon search application. Pokemon search and storage implementation. Web deployment",
        },
        {
          id: "17",
          title: "Instagram Clone - Ideas and Trends",
          description:
            "Instagram clone application. Authentication, comments and image upload implementation. Deployment on Firebase Hosting",
          longDescription:
            "Instagram clone application with authentication, comments and image upload, deployment on Firebase Hosting.",
        },
        {
          id: "18",
          title: "GDG Guayaquil - UX/UI Design",
          description:
            "User interface and experience design for Google Developers Group Guayaquil community. Prototyping and usability testing. Responsive design and accessibility implementation.",
        },
        {
          id: "19",
          title: "Mobile App Backend",
          description:
            "Exchange application. Authentication and storage services implementation. Firebase deployment",
        },
        {
          id: "20",
          title: "Firebase Web Hosting",
          description:
            "Web application hosting on Firebase. Authentication and storage services implementation. Firebase deployment",
        },
        {
          id: "21",
          title: "Creatibot - Registration Web",
          description:
            "Registration web. Registration services and forms implementation. Local deployment",
        },
        {
          id: "22",
          title: "Vintage Instagram Filter",
          description:
            "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
        },
        {
          id: "23",
          title: "Indie Instagram Filter",
          description:
            "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
        },
        {
          id: "24",
          title: "Glitch Instagram Filter",
          description:
            "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
        },
        {
          id: "25",
          title: "Astigma Instagram Filter",
          description:
            "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
        },
        {
          id: "26",
          title: "Venturex - International Trade Platform",
          description:
            "Statistical product queries from different countries. Global data search implementation. Vercel deployment",
          longDescription:
            "International trade platform with statistical product queries from different countries, global search and Vercel deployment.",
        },
        {
          id: "27",
          title: "Binesai - Art Biennial Web",
          description:
            "Website for the San Antonio de Ibarra Art Biennial 2025. Contact form implementation, data storage, etc. Web deployment",
        },
        {
          id: "28",
          title: "Swapme 2.0 - Clothing Swap App",
          description:
            "Mobile app for clothing swap renewed with new features. Authentication and storage services implementation.",
          longDescription:
            "Mobile app for clothing swap renewed with new features including authentication, storage services and deployment on Google Play Store and App Store.",
        },
        {
          id: "29",
          title: "Count App - Counter Application",
          description:
            "Mobile app for counter management.",
          longDescription:
            "Mobile app for counter management with localStorage storage services.",
        },
        {
          id: "30",
          title: "ChatSimulator - Simulation Chatbot",
          description:
            "Simulation chatbot. Local chatbot implementation between two users.",
          longDescription:
            "AI simulation chatbot. Local chatbot implementation between two users and deployment on App Store and Google Play Store.",
        },
        {
          id: "31",
          title: "Hand IA - Landing Page",
          description:
            "Landing page for the Hand IA application.",
          longDescription:
            "Landing page for the Hand IA application with info sections, privacy policy and terms of use, etc. Web deployment",
        },
        {
          id: "32",
          title: "Spotify Clone - Music Playback App",
          description:
            "Music playback application. Music playback and storage implementation, etc.",
          longDescription:
            "Music playback application with authentication services, storage and web deployment. Spotify API integration.",
        },
        {
          id: "33",
          title: "Agroindustrias Equatorial - Landing Page",
          description:
            "Landing page for Agroindustrias Equatorial for k-os spirits",
          longDescription:
            "Landing page for Agroindustrias Equatorial for k-os spirits from Imbabura province with info sections, products, etc. Web deployment",
        },
        {
          id: "34",
          title: "Biotechnology Review Test Simulator",
          description:
            "Biotechnology review test simulator. Authentication and storage services implementation, etc.",
          longDescription:
            "Biotechnology review test simulator with authentication, storage services, etc. Web deployment",
        },
        {
          id: "35",
          title: "Tribbe App - Landing Page",
          description:
            "Landing page for the Tribbe application.",
          longDescription:
            "Landing page for the Tribbe application with info sections, privacy policy and terms of use, etc. Web deployment",
        },
        {
          id: "36",
          title: "Swapme 2.0 - Landing Page",
          description:
            "Landing page for the Swapme 2.0 application.",
          longDescription:
            "Landing page for the Swapme 2.0 application with info sections, privacy policy and terms of use, etc. Web deployment",
        },
        {
          id: "37",
          title: "Cinnemapedia App - Landing Page",
          description:
            "Landing page for the Cinnemapedia application.",
          longDescription:
            "Landing page for the Cinnemapedia application with info sections, privacy policy and terms of use, etc. Web deployment",
        },
        {
          id: "38",
          title: "IonosHub - Landing Page",
          description:
            "IonosHub landing page focused on simplicity and efficiency.",
          longDescription:
            "IonosHub landing page focused on simplicity and efficiency for services. Web deployment",
        },
        {
          id: "39",
          title: "Projects Dashboard - CRUD",
          description:
            "Projects dashboard with CRUD. Authentication and storage services implementation, etc.",
          longDescription:
            "Projects dashboard with CRUD including authentication, storage services, etc. Web deployment",
        },
        {
          id: "40",
          title: "Space X - Landing Page",
          description:
            "Space X rocket launches landing page.",
          longDescription:
            "Space X rocket launches landing page. Web deployment",
        },
        {
          id: "41",
          title: "Iglu Coffee - Landing Page",
          description:
            "Landing page for Iglu Coffee.",
          longDescription:
            "Landing page for Iglu Coffee with info sections, menu and promotions, etc. Web deployment",
        },
        {
          id: "42",
          title: "El chipotle - Landing Page",
          description:
            "Landing page for El chipotle.",
          longDescription:
            "Landing page for El chipotle with info sections, menu and promotions, etc. Web deployment",
        },
        {
          id: "43",
          title: "Tribbe - App",
          description:
            "Tribbe application for gyms and records.",
          longDescription:
            "Tribbe application with info sections, menu and promotions, etc. Deployment on Google Play Store and App Store",
        },
      ],
    },
    about: {
      title: "About Me",
      paragraph1:
        "I am a Full Stack developer passionate about creating elegant and functional digital solutions. My focus is on writing clean, maintainable, and scalable code that not only works but also provides an excellent user experience.",
      paragraph2:
        "I primarily work with modern technologies that allow me to build robust and high-performance applications for StartUps in the United States and Ecuador.",
      paragraph3:
        "In addition to development, I enjoy continuous learning, sharing knowledge in tech communities, and contributing to open source projects when possible.",
      stats: {
        years: "Years of Experience",
        projects: "Completed Projects",
        technologies: "Technologies",
        dedication: "Dedication",
      },
    },
    certifications: {
      title: "Certifications",
      description:
        "Certifications and credentials that validate my knowledge and skills",
      viewAll: "View All Certifications",
    },
    talks: {
      title: "Talks and Events",
      description:
        "Tech events, conferences, and meetups I have attended or participated in",
      speaker: "Speaker",
      viewAll: "View All Talks",
    },
    contact: {
      title: "Contact",
      description:
        "Have a project in mind? I am available to collaborate and create something amazing together.",
      info: {
        title: "Contact Information",
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Your message...",
      },
      success: "Thank you for your message! I will contact you soon.",
      error: "Error sending message. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    backButton: {
      text: "Back to home",
    },
    awards: {
      app2023: {
        title: "WINNER",
        subtitle: "Honor Mention App 2023, Tu App Tournament",
        date: "2023",
      },
    },
    statistics: {
      visits: "Visits",
      visitsSubtitle: "Since 2024",
      projects: "Projects",
      projectsSubtitle: "↗10 (85%)",
      languagesFrameworks: "Languages/Frameworks",
      languagesSubtitle: "↗ 15 (30%)",
    },
  },
};

export const getLanguage = (): Language => {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem("language") as Language | null;
  if (stored && (stored === "es" || stored === "en")) {
    return stored;
  }
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "es";
};

export const setLanguage = (lang: Language): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
};

export const toggleLanguage = (): Language => {
  const currentLang = getLanguage();
  const newLang: Language = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
  return newLang;
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang];
};
