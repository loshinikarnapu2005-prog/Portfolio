import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  theme: 'dark' | 'light';
}

export const BackToTop: React.FC<BackToTopProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        isDark
          ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-teal-500/20'
          : 'bg-slate-900 text-white hover:bg-teal-600 shadow-slate-900/20'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
