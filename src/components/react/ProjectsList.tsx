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
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
