import { SearchX } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

interface ProjectsListProps {
  projects: Project[];
  noResultsTitle: string;
  noResultsDescription: string;
  clearFiltersLabel: string;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function ProjectsList({
  projects,
  noResultsTitle,
  noResultsDescription,
  clearFiltersLabel,
  onClearFilters,
  hasActiveFilters,
}: ProjectsListProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center mb-6">
          <SearchX className="w-8 h-8 text-black/30 dark:text-white/30" />
        </div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
          {noResultsTitle}
        </h3>
        <p className="text-black/50 dark:text-white/50 mb-6 max-w-md">
          {noResultsDescription}
        </p>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {clearFiltersLabel}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
