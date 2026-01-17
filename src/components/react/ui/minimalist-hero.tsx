import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface MinimalistHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string | React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-base-content/60 transition-colors hover:text-base-content"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-base-content/60 transition-colors hover:text-base-content"
    aria-label="Social media link"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText = 'cry.code',
  navLinks = [],
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className = '',
}: MinimalistHeroProps) => {
  return (
    <div
      className={`relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-base-100 p-6 md:p-8 lg:p-12 font-sans ${className}`}
    >
      {/* Header oculto - ya tenemos Navbar flotante */}
      <div className="h-0"></div>

      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 px-2 md:px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left flex flex-col justify-center"
        >
          <p className="mx-auto max-w-xs text-lg leading-relaxed text-base-content md:mx-0 mb-6 font-light">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-2 inline-block text-sm font-medium text-base-content underline decoration-from-font hover:text-primary transition-colors"
          >
            Read More
          </a>
        </motion.div>

        <div className="relative order-1 md:order-2 flex justify-center items-center h-full py-8 min-h-[400px] md:min-h-[500px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            className="absolute z-0 h-[380px] w-[380px] rounded-full bg-blue-600 md:h-[480px] md:w-[480px] lg:h-[580px] lg:w-[580px]"
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-72 md:w-80 lg:w-96 max-h-[600px] object-contain object-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/2563eb/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start px-2 md:pl-4 md:pr-2 lg:pr-4"
        >
          <h1 className="text-5xl font-extrabold text-base-content md:text-6xl lg:text-7xl leading-tight tracking-tight">
            <span className="block">{overlayText.part1}</span>
            <span className="block">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-base-content/80"
        >
          {typeof locationText === 'string' ? locationText : locationText}
        </motion.div>
      </footer>
    </div>
  );
};
