import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { TechStackBento } from './components/TechStackBento';
import { EngineeringPrinciples } from './components/EngineeringPrinciples';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col selection:bg-brand-500 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <ArchitectureShowcase />
        <InteractiveTerminal />
        <TechStackBento />
        <EngineeringPrinciples />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
