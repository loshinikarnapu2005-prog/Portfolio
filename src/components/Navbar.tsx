import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active link
      const scrollPosition = window.scrollY + 140;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-[#090D16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
              : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-display text-lg font-bold tracking-tight text-left transition-colors ${
              isDark ? 'text-white hover:text-teal-400' : 'text-slate-900 hover:text-teal-600'
            }`}
          >
            {PERSONAL_INFO.name}
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? isDark
                        ? 'text-teal-400'
                        : 'text-teal-600'
                      : isDark
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full transition-all ${
                        isDark ? 'bg-teal-400' : 'bg-teal-600'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                isDark
                  ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20'
                  : 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3 opacity-70" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden flex h-9 w-9 items-center justify-center rounded-lg border ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-x-0 top-16 z-30 border-b p-6 md:hidden shadow-xl ${
            isDark
              ? 'bg-[#0B1120] border-slate-800 text-slate-200'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`py-2 text-left text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? isDark
                      ? 'text-teal-400 font-semibold'
                      : 'text-teal-600 font-semibold'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className={`flex w-full items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg ${
                  isDark
                    ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
