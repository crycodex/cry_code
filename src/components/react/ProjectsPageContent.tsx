import { useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import BackButton from './BackButton';
import ProjectsList from './ProjectsList';
import { getProjects } from '../../data/projects';

export default function ProjectsPageContent() {
  const { language, translations } = useLanguage();
  const projects = useMemo(() => getProjects(language), [language]);

  return (
    <>
      <BackButton />
      <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
        {translations.projects.pageTitle}
      </h1>
      <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto">
        {translations.projects.pageDescription}
      </p>
      <ProjectsList projects={projects} />
    </>
  );
}
