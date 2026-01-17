import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Proyecto Ejemplo 1',
    description: 'Descripción del proyecto que muestra las capacidades técnicas y de diseño.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '2',
    title: 'Proyecto Ejemplo 2',
    description: 'Otro proyecto destacado que demuestra experiencia en desarrollo web.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '3',
    title: 'Proyecto Ejemplo 3',
    description: 'Tercer proyecto que completa el portafolio con variedad tecnológica.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    github: 'https://github.com',
  },
];

export default function ProyectosSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="proyectos"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
          {translations.projects.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto">
          {translations.projects.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-black/10 dark:border-white/10 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-black/70 dark:text-white/70 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">{translations.projects.code}</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">{translations.projects.demo}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/proyectos"
            className="inline-block px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            {translations.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
