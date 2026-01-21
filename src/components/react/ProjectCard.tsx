import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg flex flex-col bg-white dark:bg-gray-900">
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
          {project.title}
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4 flex-1">
          {project.longDescription || project.description}
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
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
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
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
