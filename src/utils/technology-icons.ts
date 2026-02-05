/**
 * Map project technology names to Iconify icon IDs.
 * Used for consistent tech icons in project cards (home + /proyectos).
 */
export const TECHNOLOGY_ICONS: Record<string, string> = {
  'React': 'simple-icons:react',
  'TypeScript': 'simple-icons:typescript',
  'Flutter': 'simple-icons:flutter',
  'Dart': 'simple-icons:dart',
  'Firebase': 'simple-icons:firebase',
  'Android': 'simple-icons:android',
  'Vue.js': 'simple-icons:vuedotjs',
  'Node.js': 'simple-icons:nodedotjs',
  'MongoDB': 'simple-icons:mongodb',
  'Laravel': 'simple-icons:laravel',
  'PHP': 'simple-icons:php',
  'MySQL': 'simple-icons:mysql',
  'Figma': 'simple-icons:figma',
  'HTML': 'simple-icons:html5',
  'CSS': 'simple-icons:css3',
  'JavaScript': 'simple-icons:javascript',
  'Vercel': 'simple-icons:vercel',
  'Instagram': 'simple-icons:instagram',
  'Facebook': 'simple-icons:facebook',
  'Pinia': 'simple-icons:vuedotjs',
  'Ecommerce': 'mdi:cart',
  'API': 'mdi:api',
  'Backend': 'mdi:server',
  'Web': 'mdi:web',
  'Base de datos': 'mdi:database',
  'Formularios': 'mdi:form-select',
  'Registro': 'mdi:account-plus',
  'Autenticación': 'mdi:lock',
  'UX/UI': 'mdi:palette-outline',
  'Prototyping': 'mdi:draw',
  'User Research': 'mdi:account-search',
  'Accessibility': 'mdi:accessibility',
  'Gestión académica': 'mdi:school',
  'Reportes': 'mdi:chart-box',
  'Gestión documental': 'mdi:file-document-multiple',
  'Pokemon API': 'mdi:pokemon-go',
  'Firebase Hosting': 'simple-icons:firebase',
  'CI/CD': 'mdi:pipe',
  'Spark AR': 'mdi:augmented-reality',
  'Procesamiento de imágenes': 'mdi:image-filter',
  'Datos estadísticos': 'mdi:chart-line',
  'Almacenamiento': 'mdi:database-outline',
};

const DEFAULT_ICON = 'mdi:code-tags';

export function getTechnologyIcon(techName: string): string {
  return TECHNOLOGY_ICONS[techName] ?? DEFAULT_ICON;
}
