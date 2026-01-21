export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  destacado?: boolean; // Mark featured projects
}

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de e-commerce con sistema de pagos integrado y gestión de inventario en tiempo real.',
    longDescription: 'Solución completa de e-commerce construida con Next.js que incluye sistema de pagos con Stripe, gestión de inventario, panel administrativo, autenticación de usuarios, y optimización SEO. Implementa características avanzadas como búsqueda en tiempo real, recomendaciones personalizadas y análisis de ventas.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    destacado: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicación web y móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.',
    longDescription: 'Aplicación multiplataforma construida con React Native y React que permite gestionar tareas de manera colaborativa. Incluye sincronización en tiempo real con Firebase, notificaciones push, drag and drop, filtros avanzados y reportes de productividad.',
    technologies: ['React Native', 'React', 'Firebase', 'TypeScript', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    destacado: true,
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'Dashboard interactivo para gestión de redes sociales con análisis en tiempo real y programación de publicaciones.',
    longDescription: 'Plataforma web para gestionar múltiples cuentas de redes sociales desde un solo lugar. Incluye programación de publicaciones, análisis de engagement, respuesta a comentarios, y generación de reportes detallados con gráficos interactivos.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    destacado: true,
  },
  {
    id: '4',
    title: 'Learning Management System',
    description: 'Sistema de gestión de aprendizaje con cursos online, evaluaciones interactivas y seguimiento de progreso.',
    longDescription: 'Plataforma educativa completa que permite crear y gestionar cursos online. Incluye video streaming, evaluaciones interactivas, certificaciones automáticas, foros de discusión, y análisis detallado del progreso de los estudiantes.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    destacado: true,
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    description: 'Plataforma inmobiliaria con búsqueda avanzada, mapas interactivos y sistema de reservas online.',
    longDescription: 'Aplicación web completa para el sector inmobiliario con búsqueda avanzada de propiedades, integración con Google Maps, tour virtual 360°, sistema de reservas y citas, chat en vivo con agentes, y calculadora de préstamos hipotecarios.',
    technologies: ['Next.js', 'TypeScript', 'Google Maps API', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    destacado: true,
  },
  {
    id: '6',
    title: 'API RESTful Backend',
    description: 'Backend robusto con autenticación JWT, rate limiting, y documentación automática con Swagger.',
    longDescription: 'API RESTful completa construida con Node.js y Express que incluye autenticación JWT, rate limiting, validación de datos, documentación automática con Swagger, testing completo, y deployment en Docker con CI/CD.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Docker'],
    github: 'https://github.com',
  },
  {
    id: '7',
    title: 'Weather Forecast App',
    description: 'Aplicación meteorológica con predicciones detalladas, alertas y visualización de datos climáticos.',
    longDescription: 'Aplicación web y móvil para consultar el clima con predicciones de 7 días, alertas meteorológicas, mapas interactivos del clima, gráficos de temperatura y humedad, y localización automática.',
    technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'PWA'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '8',
    title: 'Portfolio Website',
    description: 'Sitio web personal con animaciones interactivas, blog integrado y formulario de contacto.',
    longDescription: 'Portafolio personal construido con Astro y React que incluye secciones interactivas, blog con sistema de comentarios, formulario de contacto funcional, y optimización SEO completa.',
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

// Get 5 featured projects
export const destacadosProjects: Project[] = allProjects
  .filter(project => project.destacado)
  .slice(0, 5);
