import PortfolioHeroWithPaperShaders from './ui/portfolio-hero-with-paper-shaders';

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <PortfolioHeroWithPaperShaders
        cvUrl="#"
        githubUrl="https://github.com"
        emailUrl="mailto:contacto@ejemplo.com"
      />
    </section>
  );
}
