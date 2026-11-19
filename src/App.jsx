import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import PortfolioVideoSection from './components/sections/PortfolioVideoSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 dark:selection:bg-amber-900 dark:selection:text-amber-100 text-slate-800 dark:text-slate-100 bg-[#fffdf7] dark:bg-slate-950 transition-colors duration-300">
        {/* Sticky Navigation Bar */}
        <Navbar />

        {/* Main Content Layout */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <PortfolioVideoSection />
          <ExperienceSection />
          <EducationSection />
          <CertificatesSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
