import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  theme: 'dark' | 'light';
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onScrollToTop }) => {
  const isDark = theme === 'dark';
  const currentYear = 2026;

  return (
    <footer
      className={`relative z-10 border-t py-12 transition-colors ${
        isDark
          ? 'bg-[#070B14] border-slate-800/80 text-slate-400'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark and Subtitle */}
          <div>
            <span
              className={`font-display text-base font-bold tracking-tight block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Software Testing & QA Automation Engineer · Satya Institute of Technology and Management
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-xs hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-xs hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs hover:text-teal-400 transition-colors"
            >
              Email
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1 text-xs hover:text-teal-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All portfolio contents verified against official academic and internship records.
          </div>
          <div className="font-mono-code text-[11px]">
            Vizianagaram, India
          </div>
        </div>
      </div>
    </footer>
  );
};
