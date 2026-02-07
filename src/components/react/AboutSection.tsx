import React, { useState, type ComponentType } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Marquee } from './ui/marquee';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiPrisma,
  SiVuedotjs,
  SiPython,
  SiDjango,
  SiFlutter,
  SiKotlin,
  SiDart,
  SiSwift,
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

const technologies: Technology[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Kotlin', icon: SiKotlin, color: '#02569B' },
  { name: 'Swift', icon: SiSwift, color: '#FF5D01' },
  { name: 'Dart', icon: SiDart, color: '#02569B' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#0C4B33' },
];

export default function AboutSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-base-content dark:text-white/80 text-center mb-16">
          {translations.about.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
          {/* Image on the left */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <img
              src="/img/me/meoriginal.jpeg"
              alt="About me"
              className="w-full max-w-md rounded-lg shadow-lg dark:shadow-white/10 object-cover transition-opacity duration-300"
            />
          </div>

          {/* Text content on the right */}
          <div className="order-1 md:order-2 space-y-8 text-lg text-base-content/80 leading-relaxed">
            <p className="text-base-content/90 dark:text-white/90">{translations.about.paragraph1}</p>
            <p className="text-base-content/90 dark:text-white/90">{translations.about.paragraph2}</p>
            <p className="text-base-content/90 dark:text-white/90">{translations.about.paragraph3}</p>
          </div>
        </div>

        {/* Technology Marquee */}
        <Marquee pauseOnHover speed={30}>
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <TechnologyItem key={`${tech.name}-${index}`} tech={tech} Icon={Icon} />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

interface TechnologyItemProps {
  tech: Technology;
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

function TechnologyItem({ tech, Icon }: TechnologyItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full w-fit mx-8 flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.5, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="flex items-center gap-2 px-3 py-2 rounded-lg"
        style={{
          backgroundColor: isHovered ? `${tech.color}15` : 'transparent',
        }}
        animate={{
          paddingLeft: isHovered ? '0.75rem' : '0',
          paddingRight: isHovered ? '0.75rem' : '0',
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Icon 
            className="w-8 h-8 shrink-0 transition-all duration-300" 
            style={{ color: tech.color }}
          />
        </motion.div>
        <motion.span
          className="text-sm font-medium whitespace-nowrap overflow-hidden"
          style={{ color: tech.color }}
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? 'auto' : 0,
            marginLeft: isHovered ? '0.5rem' : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
