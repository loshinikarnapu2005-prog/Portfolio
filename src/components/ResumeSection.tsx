import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  theme: 'dark' | 'light';
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';

  return (
    <section id="resume" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border ${
            isDark
              ? 'bg-gradient-to-br from-[#0B142B] via-[#0E172F] to-[#0A1020] border-slate-800 shadow-2xl shadow-black/40'
              : 'bg-gradient-to-br from-teal-50/60 via-white to-sky-50/40 border-slate-200 shadow-xl'
          }`}
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-8">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'text-teal-400' : 'text-teal-600'
                }`}
              >
                Curriculum Vitae
              </span>
              <h2
                className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Official Resume & Qualifications
              </h2>
              <p
                className={`mt-4 text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Looking for a dedicated Software Testing, QA Automation, or SDET candidate? Review my complete chronological resume covering my B.Tech CSE (AI & DS) coursework, Gvpathshala Playwright internship, and automated testing project.
              </p>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Playwright & Pytest E2E Test Suite Mastery
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    2-Month Practical Automation Internship
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    10.0 Secondary & 8.6 Intermediate Academic GPA
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Strong Object-Oriented & Scripting Foundation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <button
                onClick={onOpenResume}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-teal-500/20'
                    : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-600/20'
                }`}
              >
                <Eye className="h-4 w-4" />
                <span>Preview Full Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border transition-all ${
                  isDark
                    ? 'border-slate-700 bg-slate-800/80 text-white hover:bg-slate-800'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Download className="h-4 w-4 text-teal-400" />
                <span>Download / Print PDF</span>
              </button>

              <div
                className={`text-center text-[11px] font-mono-code ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Updated for 2026 Recruitment Season
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
