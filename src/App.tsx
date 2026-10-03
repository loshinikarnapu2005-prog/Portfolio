import React, { useState, useEffect } from 'react';
import { TechBackground } from './components/TechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleNavigateToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-300 ${
        theme === 'dark'
          ? 'dark bg-[#090D16] text-slate-100'
          : 'light bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Interactive Tech/Circuit Background */}
      <TechBackground theme={theme} />

      {/* Sticky Top Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          theme={theme}
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateToProjects={handleNavigateToProjects}
        />

        <MetricsBar theme={theme} />

        <About theme={theme} />

        <Skills theme={theme} />

        <Projects theme={theme} />

        <Experience theme={theme} />

        <Education theme={theme} />

        <ResumeSection
          theme={theme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} onScrollToTop={handleScrollToTop} />

      {/* Floating Action Button */}
      <BackToTop theme={theme} />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        theme={theme}
      />
    </div>
  );
}
