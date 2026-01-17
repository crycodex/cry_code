import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: 'attended' | 'speaker';
}

const talks: Talk[] = [
  {
    id: '1',
    title: 'React Conference 2024',
    event: 'ReactConf',
    location: 'Barcelona, España',
    date: 'Marzo 2024',
    type: 'attended',
  },
  {
    id: '2',
    title: 'JavaScript Summit',
    event: 'JS Summit',
    location: 'Madrid, España',
    date: 'Noviembre 2023',
    type: 'attended',
  },
  {
    id: '3',
    title: 'DevFest Local',
    event: 'GDG DevFest',
    location: 'Valencia, España',
    date: 'Octubre 2023',
    type: 'speaker',
  },
  {
    id: '4',
    title: 'Web Development Meetup',
    event: 'Local Meetup',
    location: 'Online',
    date: 'Septiembre 2023',
    type: 'attended',
  },
];

export default function CharlasSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="charlas"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
          {translations.talks.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto">
          {translations.talks.description}
        </p>

        <div className="space-y-6 mb-12">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {talk.title}
                    </h3>
                    {talk.type === 'speaker' && (
                      <span className="px-3 py-1 text-xs font-medium bg-blue-600 dark:bg-blue-400 text-white rounded-full">
                        {translations.talks.speaker}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {talk.event}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-black/60 dark:text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{talk.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{talk.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/charlas"
            className="inline-block px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            {translations.talks.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
