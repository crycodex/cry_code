import type { Language } from "../utils/i18n";
import { getTranslations } from "../utils/i18n";

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
  {
    id: "1",
    image: "/img/projects/1.png",
    technologies: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/crycodex/ChullaCash-App",
    demo: "https://play.google.com/store/apps/details?id=com.chullacash.app",
  },
  {
    id: "2",
    image: "/img/projects/2.png",
    technologies: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/crycodex/SwapMe---Code-0",
    demo: "https://play.google.com/store/apps/details?id=com.company.swapme",
  },
  {
    id: "3",
    image: "/img/projects/3.png",
    technologies: ["Adobe XD", "UX/UI", "Prototyping", "User Research"],
    github: "https://github.com/crycodex/Nike-App-AdobeXd",
  },
  {
    id: "4",
    image: "/img/projects/4.png",
    technologies: ["Figma", "UX/UI", "Prototyping", "Accessibility"],
    github: "https://github.com/crycodex/Desgin-Nike-App",
  },
  {
    id: "5",
    image: "/img/projects/5.png",
    technologies: ["Web", "PHP", "MySQL", "Backend"],
    github: "https://github.com/crycodex/candidatos_2023Imbabura.github.io",
    demo: "https://crycodex.github.io/candidatos_2023Imbabura.github.io/",
  },
  {
    id: "6",
    image: "/img/projects/6.png",
    technologies: ["HTML", "CSS", "JavaScript", "Formularios"],
    github: "https://github.com/crycodex/diigo.github.io",
    demo: "https://crycodex.github.io/diigo.github.io/",
  },
  {
    id: "7",
    image: "/img/projects/7.png",
    technologies: ["Web", "Base de datos", "Backend"],
    github: "https://github.com/crycodex/spicy.github.io",
    demo: "https://crycodex.github.io/spicy.github.io/",
  },
  {
    id: "8",
    image: "/img/projects/8.png",
    technologies: ["Web", "Firebase", "Autenticación"],
    github: "https://crycodex.github.io/spicy.github.io/",
    demo: "https://crycodex.github.io/WalkyDogs.github.io/",
  },
  {
    id: "9",
    image: "/img/projects/9.png",
    technologies: ["Vue.js", "API", "Vercel", "TypeScript"],
    github:
      "https://github.com/crycodex/curso_vuejs3/tree/main/08_buscadorGifs",
    demo: "https://giftsearch-isnotcristhianrs-projects.vercel.app/",
  },
  {
    id: "10",
    image: "/img/projects/10.png",
    technologies: ["Vue.js", "API", "Vercel", "TypeScript"],
    github:
      "https://github.com/crycodex/curso_vuejs3/tree/main/07_criptocotizador",
    demo: "https://criptocotizador-isnotcristhianrs-projects.vercel.app/",
  },
  {
    id: "11",
    image: "/img/projects/11.png",
    technologies: ["Vue.js", "Pinia", "Vercel", "Ecommerce"],
    demo: "https://01-vue-js.vercel.app/",
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/10_pinieaStore",
  },
  {
    id: "12",
    image: "/img/projects/12.png",
    technologies: ["Laravel", "PHP", "MySQL", "Backend"],
    github: "https://github.com/crycodex/Laravel-Hotel",
  },
  {
    id: "13",
    image: "/img/projects/13.png",
    technologies: ["Web", "Base de datos", "Gestión académica"],
    demo: "https://cieloverdespanishschool.com/",
    github: "https://github.com/crycodex/CieloVerde",
  },
  {
    id: "14",
    image: "/img/projects/14.png",
    technologies: ["MongoDB", "Node.js", "Backend"],
    demo: "https://hotel-booking-web-app.vercel.app/",
    github: "https://github.com/crycodex/sistema-hotel-mongo",
  },
  {
    id: "15",
    image: "/img/projects/15.png",
    technologies: [
      "Backend",
      "Base de datos",
      "Reportes",
      "Gestión documental",
    ],
    demo: "https://www.pucei.edu.ec:441/DirectorioAplicaciones/",
    github: "https://github.com/crycodex/SistemaGestionDocumental",
  },
  {
    id: "16",
    image: "/img/projects/16.png",
    technologies: ["React", "API", "Pokemon API", "TypeScript"],
    demo: "https://crycodex.github.io/apiPokemon/",
    github: "https://github.com/crycodex/apiPokemon",
  },
  {
    id: "17",
    image: "/img/projects/17.png",
    technologies: ["React", "Firebase", "Firebase Hosting", "Autenticación"],
    demo: "https://instagram-clone-eta-inky.vercel.app/",
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/11_Instagram",
  },
  {
    id: "18",
    image: "/img/projects/18.png",
    technologies: ["Figma", "UX/UI", "Prototyping", "Accessibility"],
    github: "https://github.com/crycodex/GDG-Guayaquill-Figma",
  },
  {
    id: "19",
    image: "/img/projects/19.png",
    technologies: ["Firebase", "Node.js", "API", "Autenticación"],
  },
  {
    id: "20",
    image: "/img/projects/20.png",
    technologies: ["Firebase", "Firebase Hosting", "CI/CD"],
  },
  {
    id: "21",
    image: "/img/projects/21.png",
    technologies: ["Web", "Formularios", "Registro"],
    demo: "https://www.pucesi.edu.ec/web/noticias/?p=4706",
  },
  {
    id: "22",
    image: "/img/projects/22.png",
    technologies: [
      "Spark AR",
      "Instagram",
      "Facebook",
      "Procesamiento de imágenes",
    ],
    github: "https://github.com/crycodex/Filtro-Vintage-Instagram",
  },
  {
    id: "23",
    image: "/img/projects/23.png",
    technologies: [
      "Spark AR",
      "Instagram",
      "Facebook",
      "Procesamiento de imágenes",
    ],
    github: "https://github.com/crycodex/Filtro-Indie-Instagram",
  },
  {
    id: "24",
    image: "/img/projects/24.png",
    technologies: [
      "Spark AR",
      "Instagram",
      "Facebook",
      "Procesamiento de imágenes",
    ],
    github: "https://github.com/crycodex/Flitro-Glitch-Instagram",
  },
  {
    id: "25",
    image: "/img/projects/25.png",
    technologies: [
      "Spark AR",
      "Instagram",
      "Facebook",
      "Procesamiento de imágenes",
    ],
    demo: "https://github.com/crycodex/Filtro-Astigma-Instagram",

  },
  {
    id: "26",
    image: "/img/projects/26.png",
    technologies: [
      "React",
      "TypeScript",
      "Vercel",
      "API",
      "Datos estadísticos",
    ],
    demo: "https://venturex-seven.vercel.app/",
    github: "https://github.com/rszaldumbide/venturex",

  },
  {
    id: "27",
    image: "/img/projects/27.png",
    technologies: ["Web", "Formularios", "Almacenamiento"],
    demo: "https://binesai.vercel.app/",
    github: "https://github.com/crycodex/binesai",
  },
  {
    id: "28",
    image: "/img/projects/28.png",
    technologies: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
    destacado: true,
    demo: "https://play.google.com/store/apps/details?id=com.swapapp.me",
    github: "https://github.com/crycodex/swapme",
  },
  {
    id: "29",
    image: "/img/projects/29.png",
    technologies: ["Flutter", "Dart", "LocalStorage"],
    demo: "",
    github: "",
  },
  {
    id: "30",
    image: "/img/projects/30.png",
    technologies: ["Flutter", "Dart", "LocalStorage", "Android", "iOS"],
    demo: "https://play.google.com/store/apps/details?id=com.isnotcristhianr.app_counter",
    github: "https://github.com/crycodex/App-Counter",
  },
  {
    id: "31",
    image: "/img/projects/31.png",
    technologies: ["React", "TypeScript", "Vercel", "API", "Chatbot"],
    destacado: true,
    demo: "https://hand-ia-landing-5jxg.vercel.app/",
    github: "https://github.com/crycodex/handIA_landing",
  },
  {
    id: "32",
    image: "/img/projects/32.png",
    technologies: ["React", "TypeScript", "Vercel", "API", "Spotify"],
    demo: "https://spotify-clon-khaki.vercel.app/",
    github: "https://github.com/crycodex/spotify_clon",
  },
  {
    id: "33",
    image: "/img/projects/33.png",
    technologies: ["React", "TypeScript", "Vercel", "API", "Spotify"],
    demo: "https://www.agroindustriasequatorial.com/",
    github: "https://github.com/crycodex/agreqtlr",
  },
  {
    id: "34",
    image: "/img/projects/34.png",
    technologies: ["Vue.js", "TypeScript", "Vercel", "Tailwind CSS", "Pinia"],
    demo: "https://simulador-rho.vercel.app/",
    github: "https://github.com/crycodex/simulador",
  },
  {
    id: "35",
    image: "/img/projects/35.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
    ],
    demo:"https://tribbe-landing.vercel.app/",
    github:"https://github.com/crycodex/tribbe_landing",
  },
  {
    id: "36",
    image: "/img/projects/36.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
    ],
    demo:"https://swapme-landing.vercel.app/",
    github:"https://github.com/crycodex/swapme-landing",
  },
  {
    id: "37",
    image: "/img/projects/37.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    demo:"https://cinespot-light.vercel.app/",
    github:"https://github.com/crycodex/cinespot-light",
  },
  {
    id: "38",
    image: "/img/projects/38.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    destacado: true,
    demo:"https://github.com/crycodex/ionos-hub-connect",
    github:"https://github.com/crycodex/ionos-hub-connect",
  },
  {
    id: "39",
    image: "/img/projects/39.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "localStorage",
    ],
    demo:"https://kp8.vercel.app/",
    github:"https://github.com/crycodex/kp8",
  },
  {
    id: "40",
    image: "/img/projects/40.png",
    technologies: [
      "Astro",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "Server Side Rendering",
    ],
    demo:"https://spacex-launch-iota.vercel.app/",
    github:"https://github.com/crycodex/astro-demo",
  },
  {
    id: "41",
    image: "/img/projects/41.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    demo:"https://iglu-sweet-spot.vercel.app/",
    github:"https://github.com/crycodex/iglu-sweet-spot",
  },
  {
    id: "42",
    image: "/img/projects/42.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    demo:"https://el-chipotle.vercel.app//",
    github:"https://github.com/crycodex/el-chipotle",
  },
  {
    id: "43",
    image: "/img/projects/43.png",
    technologies: ["Flutter", "Dart", "Firebase", "iOS"],
    destacado: true,
    demo:"https://apps.apple.com/no/app/tribbe/id6754004167",
    github:"https://github.com/crycodex/tribbe_app",
  },
];

export function getProjects(lang: Language): Project[] {
  const t = getTranslations(lang);
  const listByKey = Object.fromEntries(
    t.projects.list.map((item) => [item.id, item])
  );
  return allProjectsData.map((data) => {
    const text = listByKey[data.id];
    if (!text) {
      return {
        ...data,
        title: "",
        description: "",
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
  return getProjects(lang)
    .filter((p) => p.destacado)
    .slice(0, 5);
}
