import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    title: 'Desarrollador Full Stack',
    company: 'Empresa Tecnológica',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web modernas usando React, Node.js y tecnologías cloud.',
  },
  {
    type: 'education',
    title: 'Ingeniería en Sistemas',
    company: 'Universidad',
    period: '2019 - 2023',
    description: 'Especialización en desarrollo de software y arquitectura de sistemas.',
  },
];

export default function TrayectoriaSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="trayectoria"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-16">
          {translations.trajectory.title}
        </h2>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12 border-l-2 border-black/20 dark:border-white/20">
              <div className="absolute -left-3 top-0">
                {item.type === 'work' ? (
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 bg-white dark:bg-black p-1 rounded-full" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 bg-white dark:bg-black p-1 rounded-full" />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {item.company}
                </p>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {item.period}
                </p>
                <p className="text-black/70 dark:text-white/70 pt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
