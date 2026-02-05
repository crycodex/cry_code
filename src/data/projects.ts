import type { Language } from '../utils/i18n';
import { getTranslations } from '../utils/i18n';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  destacado?: boolean;
}

export interface ProjectData {
  id: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  destacado?: boolean;
}

const allProjectsData: ProjectData[] = [
  { id: '1', technologies: ['Flutter', 'Dart', 'Firebase', 'Android'], destacado: true },
  { id: '2', technologies: ['Flutter', 'Dart', 'Firebase', 'Android'], destacado: true },
  { id: '3', technologies: ['Figma', 'UX/UI', 'Prototyping', 'User Research'] },
  { id: '4', technologies: ['Figma', 'UX/UI', 'Prototyping', 'Accessibility'] },
  { id: '5', technologies: ['Web', 'Base de datos', 'Backend'], destacado: true },
  { id: '6', technologies: ['HTML', 'CSS', 'JavaScript', 'Formularios'] },
  { id: '7', technologies: ['Web', 'Base de datos', 'Backend'] },
  { id: '8', technologies: ['Web', 'Firebase', 'Autenticación'] },
  { id: '9', technologies: ['React', 'API', 'Vercel', 'TypeScript'] },
  { id: '10', technologies: ['React', 'API', 'Vercel', 'TypeScript'] },
  { id: '11', technologies: ['Vue.js', 'Pinia', 'Vercel', 'Ecommerce'], destacado: true },
  { id: '12', technologies: ['Laravel', 'PHP', 'MySQL', 'Backend'] },
  { id: '13', technologies: ['Web', 'Base de datos', 'Gestión académica'], destacado: true },
  { id: '14', technologies: ['MongoDB', 'Node.js', 'Backend'] },
  { id: '15', technologies: ['Backend', 'Base de datos', 'Reportes', 'Gestión documental'], destacado: true },
  { id: '16', technologies: ['React', 'API', 'Pokemon API', 'TypeScript'] },
  { id: '17', technologies: ['React', 'Firebase', 'Firebase Hosting', 'Autenticación'] },
  { id: '18', technologies: ['Figma', 'UX/UI', 'Prototyping', 'Accessibility'] },
  { id: '19', technologies: ['Firebase', 'Node.js', 'API', 'Autenticación'] },
  { id: '20', technologies: ['Firebase', 'Firebase Hosting', 'CI/CD'] },
  { id: '21', technologies: ['Web', 'Formularios', 'Registro'] },
  { id: '22', technologies: ['Spark AR', 'Instagram', 'Facebook', 'Procesamiento de imágenes'] },
  { id: '23', technologies: ['Spark AR', 'Instagram', 'Facebook', 'Procesamiento de imágenes'] },
  { id: '24', technologies: ['Spark AR', 'Instagram', 'Facebook', 'Procesamiento de imágenes'] },
  { id: '25', technologies: ['Spark AR', 'Instagram', 'Facebook', 'Procesamiento de imágenes'] },
  { id: '26', technologies: ['React', 'TypeScript', 'Vercel', 'API', 'Datos estadísticos'], destacado: true },
  { id: '27', technologies: ['Web', 'Formularios', 'Almacenamiento'], destacado: true },
];

export function getProjects(lang: Language): Project[] {
  const t = getTranslations(lang);
  const listByKey = Object.fromEntries(t.projects.list.map((item) => [item.id, item]));
  return allProjectsData.map((data) => {
    const text = listByKey[data.id];
    if (!text) {
      return {
        ...data,
        title: '',
        description: '',
      } as Project;
    }
    return {
      ...data,
      title: text.title,
      description: text.description,
      longDescription: text.longDescription,
    } as Project;
  });
}

export function getDestacadosProjects(lang: Language): Project[] {
  return getProjects(lang).filter((p) => p.destacado).slice(0, 5);
}
