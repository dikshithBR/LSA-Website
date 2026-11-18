import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { NavSectionId, Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { ScheduleSection } from './components/ScheduleSection';

const SECTION_IDS: NavSectionId[] = ['home', 'schedule', 'pricing', 'about'];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as NavSectionId;
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <ScheduleSection />
        <PricingSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
