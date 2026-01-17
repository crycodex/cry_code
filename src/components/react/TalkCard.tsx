import { Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface TalkCardProps {
  talk: {
    id: string;
    title: string;
    event: string;
    location: string;
    date: string;
    type: 'attended' | 'speaker';
    description?: string;
    slidesUrl?: string;
    videoUrl?: string;
    attendees?: number;
  };
}

export default function TalkCard({ talk }: TalkCardProps) {
  const { translations } = useLanguage();

  return (
    <article className="p-6 border border-black/10 dark:border-white/10 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-black dark:text-white">
              {talk.title}
            </h2>
            {talk.type === 'speaker' && (
              <span className="px-3 py-1 text-xs font-medium bg-blue-600 dark:bg-blue-400 text-white rounded-full">
                {translations.talks.speaker}
              </span>
            )}
          </div>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
            {talk.event}
          </p>
          {talk.description && (
            <p className="text-black/70 dark:text-white/70 mb-4">
              {talk.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6 text-sm text-black/60 dark:text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{talk.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{talk.date}</span>
            </div>
            {talk.attendees && talk.attendees > 0 && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{talk.attendees} {talk.attendees === 1 ? 'asistente' : 'asistentes'}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {(talk.slidesUrl || talk.videoUrl) && (
        <div className="flex gap-4 mt-4 pt-4 border-t border-black/10 dark:border-white/10">
          {talk.slidesUrl && (
            <a
              href={talk.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Ver Presentación
            </a>
          )}
          {talk.videoUrl && (
            <a
              href={talk.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Ver Video
            </a>
          )}
        </div>
      )}
    </article>
  );
}
