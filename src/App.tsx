import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { TechStackBento } from './components/TechStackBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fafbfc] dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-300 relative">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeaturedProjects />
          <AboutSection />
          <TechStackBento />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
