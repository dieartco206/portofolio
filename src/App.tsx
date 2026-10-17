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
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white relative">
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
  );
}

export default App;
