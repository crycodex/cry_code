"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { getTheme } from "../../../utils/theme";
import { Mail, Download, Github } from "lucide-react";
import { TextRoll } from "./text-roll";
import { Awards } from "./award";

interface PortfolioHeroWithPaperShadersProps {
  cvUrl?: string;
  githubUrl?: string;
  emailUrl?: string;
  linkedinUrl?: string;
}

export default function PortfolioHeroWithPaperShaders({
  cvUrl = "#",
  githubUrl = "https://github.com/crycodex",
  emailUrl = "mailto:recaldecd@gmail.com.co",
  linkedinUrl = "https://www.linkedin.com/in/isnotcristhianr/",
}: PortfolioHeroWithPaperShadersProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTitle, setCurrentTitle] = useState(0);
  const { translations } = useLanguage();

  const titles: string[] = [translations.hero.title, "cry.code"];

  useEffect(() => {
    const currentTheme = getTheme();
    setIsDarkMode(currentTheme === "dark");
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = getTheme();
      setIsDarkMode(currentTheme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Rotate titles every 5 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="relative h-screen overflow-hidden flex flex-row">
      {/* Left Panel - Text Content */}
      <div
        className={`w-[45%] md:w-1/2 mt-20 p-3 md:p-8 lg:p-12 relative z-10 transition-colors duration-300 flex flex-col justify-start h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Content Section - Texts above buttons */}
        <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
          {/* Available for work badge */}
          <div className="flex items-center gap-1.5 mb-1 md:mb-0">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <div
              className={`flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 rounded-full border ${
                isDarkMode
                  ? "border-green-500/50 bg-green-500/10"
                  : "border-green-600 bg-green-50"
              }`}
            >
              <span className="text-[10px] md:text-sm font-medium leading-tight">
                {translations.hero.availableForWork}
              </span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 shrink-0"></div>
            </div>
            </a>
          </div>

          {/* Greeting and Name */}
          <div className="space-y-1.5 md:space-y-3">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] md:leading-tight">
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {translations.hero.greeting}{" "}
                <br />
              </span>
              <span className="text-blue-500 inline-block min-w-[120px] md:min-w-[200px]">
                <TextRoll
                  key={currentTitle}
                  className="text-blue-500"
                  duration={0.25}
                  getEnterDelay={(i) => i * 0.02}
                  getExitDelay={(i) => i * 0.02 + 0.15}
                  transition={{ ease: [0.4, 0, 0.2, 1] }}
                >
                  {`${titles[currentTitle]}`}
                </TextRoll>
              </span>
            </h1>

            {/* Bio Description */}
            <p
              className={`text-xs md:text-base lg:text-lg leading-relaxed max-w-2xl font-light ${
                isDarkMode ? "text-white/90" : "text-black/80"
              }`}
            >
              {translations.hero.bioDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-1.5 md:gap-3 mt-2 md:mt-3">
          <a
            href={emailUrl}
            className={`flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg border transition-all hover:scale-105 text-xs md:text-base ${
              isDarkMode
                ? "border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/50 text-white"
                : "border-blue-500/30 bg-blue-50 hover:bg-blue-100 hover:border-blue-500/50 text-black"
            }`}
          >
            <Mail className="w-3.5 h-3.5 md:w-5 md:h-5" />
            <span className="font-medium">
              {translations.hero.contactButton}
            </span>
          </a>

          <a
            href={cvUrl}
            className={`flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg border transition-all hover:scale-105 text-xs md:text-base ${
              isDarkMode
                ? "border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/50 text-white"
                : "border-blue-500/30 bg-blue-50 hover:bg-blue-100 hover:border-blue-500/50 text-black"
            }`}
            download
          >
            <Download className="w-3.5 h-3.5 md:w-5 md:h-5" />
            <span className="font-medium">{translations.hero.downloadCV}</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg border transition-all hover:scale-105 text-xs md:text-base ${
              isDarkMode
                ? "border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/50 text-white"
                : "border-blue-500/30 bg-blue-50 hover:bg-blue-100 hover:border-blue-500/50 text-black"
            }`}
          >
            <Github className="w-3.5 h-3.5 md:w-5 md:h-5" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
        </div>

        {/* Awards Section - Bottom Left */}
        <div className="absolute bottom-30 left-10 z-20">
          <Awards
            variant="award"
            title={translations.awards.app2023.title}
            subtitle={translations.awards.app2023.subtitle}
            date={translations.awards.app2023.date}
            level="gold"
            className="scale-[0.40] origin-bottom-left"
          />
        </div>
      </div>

      {/* Right Panel - Background and dots change by theme */}
      <div className="w-[55%] md:w-1/2 relative overflow-hidden h-screen">
        {/* Shader Background */}
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 100%)"}
          colorFront="hsl(210, 100%, 56%)" // blue-500 in hsl
          shape="simplex"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />

        {/* Profile Image - Aligned to bottom and responsive */}
        <div className="absolute inset-0 flex items-end justify-center z-10 pb-2 md:pb-4 lg:pb-8">
          <img
            src="/img/me/me_removed_cut.png"
            id="profile-image-hero"
            alt="Cristhian Recalde"
            className="w-full h-auto filter object-contain object-bottom max-w-[85%] md:max-w-[80%] lg:max-w-[75%] max-h-[90%] md:max-h-[95%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] grayscale"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/img/me/me_cut.png";
            }}
          />
        </div>
      </div>
    </div>
  );
}
