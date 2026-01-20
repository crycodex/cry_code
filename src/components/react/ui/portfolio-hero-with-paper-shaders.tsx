"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState, useEffect } from "react"
import { useLanguage } from "../LanguageContext"
import { getTheme, toggleTheme } from "../../../utils/theme"
import { Sun, Moon, Mail, Download, Github } from "lucide-react"
import { TextRoll } from "./text-roll"

interface PortfolioHeroWithPaperShadersProps {
  cvUrl?: string
  githubUrl?: string
  emailUrl?: string
}

export default function PortfolioHeroWithPaperShaders({
  cvUrl = "#",
  githubUrl = "https://github.com",
  emailUrl = "mailto:contacto@ejemplo.com",
}: PortfolioHeroWithPaperShadersProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentTitle, setCurrentTitle] = useState(0)
  const { translations, language } = useLanguage()

  const titles: string[] = [translations.hero.title, 'cry.code']

  useEffect(() => {
    const currentTheme = getTheme()
    setIsDarkMode(currentTheme === 'dark')
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = getTheme()
      setIsDarkMode(currentTheme === 'dark')
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  // Rotate titles every 5 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [titles.length])

  const handleThemeToggle = () => {
    const newTheme = toggleTheme()
    setIsDarkMode(newTheme === 'dark')
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Panel */}
      <div
        className={`w-full md:w-1/2 p-8 md:p-12 lg:p-16 relative z-10 transition-colors duration-300 flex flex-col justify-between min-h-screen md:min-h-0 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Theme toggle button in top right */}
        <button
          onClick={handleThemeToggle}
          className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
            isDarkMode ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-black"
          }`}
          aria-label={language === 'es' ? 'Cambiar tema' : 'Toggle theme'}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>

        {/* Main Content */}
        <div className="flex flex-col gap-8 mt-16">
          {/* Available for work badge */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDarkMode 
                ? "border-green-500/50 bg-green-500/10" 
                : "border-green-600 bg-green-50"
            }`}>
              <span className="text-sm font-medium">
                {translations.hero.availableForWork}
              </span>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Greeting and Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className={isDarkMode ? "text-white" : "text-black"}>{translations.hero.greeting} </span>
              <span className="text-blue-500 inline-block min-w-[200px]">
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
            <p className={`text-lg md:text-xl leading-relaxed max-w-2xl font-light ${
              isDarkMode ? "text-white/90" : "text-black/80"
            }`}>
              {translations.hero.bioDescription}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={emailUrl}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
              isDarkMode
                ? "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/50 text-white"
                : "border-cyan-500/30 bg-cyan-50 hover:bg-cyan-100 hover:border-cyan-500/50 text-black"
            }`}
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">{translations.hero.contactButton}</span>
          </a>

          <a
            href={cvUrl}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
              isDarkMode
                ? "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/50 text-white"
                : "border-cyan-500/30 bg-cyan-50 hover:bg-cyan-100 hover:border-cyan-500/50 text-black"
            }`}
            download
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">{translations.hero.downloadCV}</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
              isDarkMode
                ? "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/50 text-white"
                : "border-cyan-500/30 bg-cyan-50 hover:bg-cyan-100 hover:border-cyan-500/50 text-black"
            }`}
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      {/* Right Panel - Background and dots change by theme */}
      <div className="w-full md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-screen">
        {/* Shader Background */}
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 100%)"}
          colorFront="hsl(188, 94%, 67%)"
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
        <div className="absolute inset-0 flex items-end justify-center z-10 pb-4 md:pb-8 lg:pb-12">
          <img
            src="/img/me/me_removed_cut.png"
            alt="Cristhian Recalde"
            className="w-full h-auto filter object-contain object-bottom max-w-[90%] md:max-w-[85%] lg:max-w-[80%] max-h-[95%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] grayscale"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/img/me/me_cut.png';
            }}
          />
        </div>
      </div>
    </div>
  )
}