# cry.code — Portfolio Website

Personal portfolio website built with **Astro + React**, featuring a modern UI, **dark/light theme**, and **ES/EN i18n**.

## Features

- **Astro 5** with React islands
- **Tailwind CSS v4** + **daisyUI**
- **Theme toggle** (light/dark) persisted in `localStorage`
- **Language toggle** (Spanish/English) persisted in `localStorage`
- Sections: Hero, Trajectory, Projects, About, Certifications, Talks, Contact, and extra visual sections
- Additional routes for full listings

## Routes

- **`/`**: main landing page (renders the React `App`)
- **`/proyectos`**: all projects listing
- **`/certificaciones`**: certifications listing

## Tech stack

- **Astro** (`astro`)
- **React** (`react`, `react-dom`)
- **Tailwind v4** + **daisyUI**
- **Radix Slot** (`@radix-ui/react-slot`) used by UI primitives
- **Lucide** icons (`lucide-react`)
- Animation libs present in the repo (e.g. **Framer Motion**, **GSAP**)

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Scripts

- **`npm run dev`**: start the dev server
- **`npm run build`**: build to `dist/`
- **`npm run preview`**: preview the production build locally

## Project structure (high level)

```text
/
├── public/                 # static assets (images, icons, etc.)
├── src/
│   ├── components/
│   │   ├── react/           # React components (Navbar, sections, UI)
│   │   └── Welcome.astro
│   ├── data/                # content/data sources (e.g. projects)
│   ├── layouts/             # Astro layouts
│   ├── pages/               # Astro routes
│   ├── styles/              # global styles (Tailwind entry)
│   └── utils/               # i18n + theme utilities
├── astro.config.mjs
└── package.json
```

## Content and configuration

- **Translations (ES/EN)**: `src/utils/i18n.ts`
- **Theme (light/dark)**: `src/utils/theme.ts` (and initial theme script in `src/layouts/Layout.astro`)
- **Projects data**: `src/data/projects.ts`
- **Certifications page data**: currently in `src/pages/certificaciones.astro` (inline array)

## License

This project is licensed under the **MIT License**. See [`LICENSE`](LICENSE).
