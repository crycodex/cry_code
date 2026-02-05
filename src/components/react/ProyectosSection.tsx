import { useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import { MorphingCardStack, type CardData } from './ui/morphing-card-stack';
import { getDestacadosProjects } from '../../data/projects';

export default function ProyectosSection() {
  const { language, translations } = useLanguage();
  const destacadosProjects = useMemo(() => getDestacadosProjects(language), [language]);

  // Transform projects to card data format
  const projectCards: CardData[] = destacadosProjects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    technologies: project.technologies,
    github: project.github,
    demo: project.demo,
  }));

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

        <div className="mb-12">
          <MorphingCardStack 
            cards={projectCards} 
            defaultLayout="stack"
            className="mb-8"
          />
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
