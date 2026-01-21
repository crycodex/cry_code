import PortfolioHeroWithPaperShaders from './ui/portfolio-hero-with-paper-shaders';

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <PortfolioHeroWithPaperShaders
        cvUrl="#"
        githubUrl="https://github.com/crycodex"
        emailUrl="mailto:recaldecd@gmail.com.co"
        linkedinUrl="https://www.linkedin.com/in/isnotcristhianr/"
      />
    </section>
  );
}
