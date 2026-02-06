import { useMemo, useState, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import BackButton from './BackButton';
import ProjectsList from './ProjectsList';
import ProjectsFilter from './ProjectsFilter';
import { getProjects, getAllTechnologies } from '../../data/projects';
import type { ProjectCategory, Project } from '../../data/projects';

export default function ProjectsPageContent() {
  const { language, translations } = useLanguage();
  const projects = useMemo(() => getProjects(language), [language]);
  const allTechnologies = useMemo(() => getAllTechnologies(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleTechnologyToggle = useCallback((tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTechnologies([]);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project: Project) => {
      const matchesSearch = searchQuery === '' || matchesSearchQuery(project, searchQuery);
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesTech = selectedTechnologies.length === 0 ||
        selectedTechnologies.every((tech) => project.technologies.includes(tech));
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [projects, searchQuery, selectedCategory, selectedTechnologies]);

  return (
    <>
      <BackButton />
      <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
        {translations.projects.pageTitle}
      </h1>
      <p className="text-center text-black/70 dark:text-white/70 mb-10 max-w-2xl mx-auto">
        {translations.projects.pageDescription}
      </p>
      <ProjectsFilter
        translations={translations}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedTechnologies={selectedTechnologies}
        allTechnologies={allTechnologies}
        resultsCount={filteredProjects.length}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onTechnologyToggle={handleTechnologyToggle}
        onClearFilters={handleClearFilters}
      />
      <ProjectsList
        projects={filteredProjects}
        noResultsTitle={translations.projects.noResults}
        noResultsDescription={translations.projects.noResultsDescription}
        clearFiltersLabel={translations.projects.clearFilters}
        onClearFilters={handleClearFilters}
        hasActiveFilters={searchQuery !== '' || selectedCategory !== 'all' || selectedTechnologies.length > 0}
      />
    </>
  );
}

function matchesSearchQuery(project: Project, query: string): boolean {
  const normalizedQuery = query.toLowerCase().trim();
  const searchableText = [
    project.title,
    project.description,
    project.longDescription ?? '',
    ...project.technologies,
  ]
    .join(' ')
    .toLowerCase();
  return normalizedQuery.split(' ').every((word) => searchableText.includes(word));
}
