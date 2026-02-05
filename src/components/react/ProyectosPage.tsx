import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectsPageContent from './ProjectsPageContent';

export default function ProyectosPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectsPageContent />
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
