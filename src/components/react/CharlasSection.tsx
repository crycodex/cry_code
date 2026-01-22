import { useLanguage } from './LanguageContext';
import TalksBentoGrid from './ui/talks-bento-grid';

interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  url?: string;
  type: 'attended' | 'speaker';
}

const talks: Talk[] = [
  {
    id: '1',
    title: 'React Conference 2024',
    event: 'ReactConf',
    date: 'Marzo 2024',
    url: 'https://reactconf.com',
    type: 'attended',
  },
  {
    id: '2',
    title: 'JavaScript Summit',
    event: 'JS Summit',
    date: 'Noviembre 2023',
    url: 'https://jssummit.com',
    type: 'attended',
  },
  {
    id: '3',
    title: 'DevFest Local',
    event: 'GDG DevFest',
    date: 'Octubre 2023',
    url: 'https://devfest.com',
    type: 'speaker',
  },
  {
    id: '4',
    title: 'Web Development Meetup',
    event: 'Local Meetup',
    date: 'Septiembre 2023',
    type: 'attended',
  },
  {
    id: '5',
    title: 'TypeScript Deep Dive',
    event: 'TS Conf',
    date: 'Agosto 2023',
    url: 'https://tsconf.com',
    type: 'attended',
  },
  {
    id: '6',
    title: 'Node.js Community',
    event: 'NodeConf',
    date: 'Julio 2023',
    url: 'https://nodeconf.com',
    type: 'speaker',
  },
  {
    id: '7',
    title: 'Frontend Masters',
    event: 'FEM Conference',
    date: 'Junio 2023',
    type: 'attended',
  },
  {
    id: '8',
    title: 'Cloud Architecture',
    event: 'Cloud Summit',
    date: 'Mayo 2023',
    url: 'https://cloudsummit.com',
    type: 'attended',
  },
];

// Generate span classes for bento grid layout
const generateSpans = (index: number): string => {
  const spans = [
    'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
    'md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2',
    'md:col-span-1 md:row-span-2 sm:col-span-2 sm:row-span-2',
    'md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-2',
    'md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1',
    'md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2',
    'md:col-span-2 md:row-span-1 sm:col-span-2 sm:row-span-1',
    'md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1',
  ];
  return spans[index % spans.length];
};

export default function CharlasSection() {
  const { translations } = useLanguage();

  const talksWithSpans = talks.map((talk, index) => ({
    ...talk,
    span: generateSpans(index),
  }));

  return (
    <section
      id="charlas"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4 transition-colors duration-300">
          {translations.talks.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto transition-colors duration-300">
          {translations.talks.description}
        </p>

        <TalksBentoGrid talks={talksWithSpans} />
      </div>
    </section>
  );
}
