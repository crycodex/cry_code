import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function TrayectoriaSection() {
  const { translations } = useLanguage();
  const timelineData = translations.trajectory.timeline;

  const getIcon = (type: 'work' | 'education' | 'freelance') => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 p-1 rounded-full" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 p-1 rounded-full" />;
      case 'freelance':
        return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400 p-1 rounded-full" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 p-1 rounded-full" />;
    }
  };

  return (
    <section
      id="trayectoria"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-base-content text-center mb-16">
          {translations.trajectory.title}
        </h2>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12 border-l-2 border-base-content/20">
              <div className="absolute -left-3 top-0">
                {getIcon(item.type)}
              </div>
              <div className="space-y-4">
                {/* Company Header */}
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-primary font-bold">
                    {item.company}
                  </p>
                  {item.contractType && (
                    <p className="text-sm text-base-content/70 font-medium">
                      {item.contractType} · {item.companyPeriod}
                    </p>
                  )}
                  {!item.contractType && (
                    <p className="text-sm text-base-content/70 font-medium">
                      {item.companyPeriod}
                    </p>
                  )}
                  <p className="text-sm text-base-content/60 italic">
                    {item.location}
                  </p>
                </div>

                {/* Roles within the company */}
                <div className="space-y-6 ml-4 pl-4 border-l border-base-content/10">
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-base-content/40"></div>
                        <h3 className="text-lg md:text-xl font-bold text-base-content">
                          {role.title}
                        </h3>
                      </div>
                      <p className="text-sm text-base-content/60 ml-4">
                        {role.period}
                      </p>
                      {role.location !== item.location && (
                        <p className="text-sm text-base-content/60 italic ml-4">
                          {role.location}
                        </p>
                      )}
                      <p className="text-base-content/80 pt-1 leading-relaxed ml-4">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
