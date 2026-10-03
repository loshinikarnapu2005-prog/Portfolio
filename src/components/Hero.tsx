import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Sparkles,
  Terminal,
  ShieldCheck,
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResume: () => void;
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onOpenResume,
  onNavigateToProjects
}) => {
  const isDark = theme === 'dark';

  // Typing animation for roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const currentFullText = PERSONAL_INFO.titles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="relative z-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7">
            {/* Status Availability Indicator */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className={isDark ? 'text-emerald-400' : 'text-emerald-700'}>
                Open to Software Testing / QA & Automation Roles
              </span>
            </div>

            {/* Candidate Name */}
            <h1
              className={`font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Dynamic Typing Title */}
            <div className="mt-3 flex items-center min-h-[44px]">
              <span
                className={`font-mono-code text-xl sm:text-2xl font-semibold ${
                  isDark ? 'text-teal-400' : 'text-teal-600'
                }`}
              >
                {displayText}
              </span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-teal-400" />
            </div>

            {/* Summary from Resume */}
            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed text-pretty max-w-2xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              B.Tech student in Computer Science & Engineering (Artificial Intelligence & Data
              Science) with hands-on experience in{' '}
              <strong className={isDark ? 'text-white font-medium' : 'text-slate-900 font-semibold'}>
                Python and Playwright automation
              </strong>
              . Successfully completed a 2-month automation internship and developed end-to-end web testing suites using Pytest.
            </p>

            {/* Key domain tags - clean unboxed text with typographic separators */}
            <div
              className={`mt-4 flex flex-wrap items-center gap-2 text-xs font-mono-code ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span>Playwright</span>
              <span aria-hidden="true">·</span>
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>Pytest</span>
              <span aria-hidden="true">·</span>
              <span>Functional Testing</span>
              <span aria-hidden="true">·</span>
              <span>E2E Workflows</span>
            </div>

            {/* CTAs & Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={onNavigateToProjects}
                className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-teal-500/20'
                    : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-600/20'
                }`}
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border transition-all transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-slate-700 bg-slate-800/80 text-white hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <FileText className="h-4 w-4 text-teal-400" />
                <span>Download Resume</span>
              </button>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <Github className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Quick Copy Email Button */}
              <button
                onClick={copyEmail}
                title="Click to copy email address"
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium rounded-xl border transition-all ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Mail className="h-3.5 w-3.5 text-teal-400" />
                <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                <span className="sm:hidden">Email</span>
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 opacity-60" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Modern Tech Monogram & Automation Graphic (NO PHOTO) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Ambient Glow */}
              <div
                className={`absolute -inset-2 rounded-3xl blur-2xl opacity-35 transition-all ${
                  isDark
                    ? 'bg-gradient-to-tr from-teal-500/40 via-sky-500/20 to-indigo-500/30'
                    : 'bg-gradient-to-tr from-teal-300/60 via-sky-300/40 to-indigo-200/50'
                }`}
              />

              {/* Glass Frame Card */}
              <div
                className={`relative overflow-hidden rounded-3xl border p-6 sm:p-7 transition-all ${
                  isDark
                    ? 'bg-[#0B132B]/90 border-slate-700/80 shadow-2xl shadow-black/50'
                    : 'bg-white/95 border-slate-200 shadow-xl shadow-slate-200/50'
                }`}
              >
                {/* Central Monogram Circle & Orbital Tech Illustration */}
                <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B152E] to-slate-950 flex flex-col items-center justify-center p-6 border border-slate-800/80 overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(rgba(45, 212, 191, 0.4) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Outer Concentric Animated Ring */}
                  <div className="absolute h-56 w-56 rounded-full border border-teal-500/20 animate-spin [animation-duration:35s]" />
                  <div className="absolute h-72 w-72 rounded-full border border-sky-500/10 [animation-duration:50s] animate-spin" />

                  {/* Floating Tech Chips / Indicators */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-teal-500/30 text-[10px] font-mono-code text-teal-300 shadow-sm">
                    <Code2 className="h-3 w-3 text-teal-400" />
                    <span>Playwright</span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-sky-500/30 text-[10px] font-mono-code text-sky-300 shadow-sm">
                    <Cpu className="h-3 w-3 text-sky-400" />
                    <span>Python 3.11</span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-[10px] font-mono-code text-emerald-300 shadow-sm">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>100% Passed</span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/50 text-[10px] font-mono-code text-slate-300 shadow-sm">
                    <Activity className="h-3 w-3 text-teal-400" />
                    <span>Pytest Suite</span>
                  </div>

                  {/* Central Monogram Circle ("KL") */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500/20 via-sky-500/10 to-indigo-500/20 border-2 border-teal-400/40 shadow-xl shadow-teal-500/10 backdrop-blur-md">
                      {/* Inner glowing pulse ring */}
                      <div className="absolute inset-1 rounded-full border border-teal-400/20 animate-pulse" />

                      {/* Monogram Initials */}
                      <span className="font-display font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-teal-300 via-emerald-200 to-sky-300 bg-clip-text text-transparent select-none drop-shadow-sm">
                        KL
                      </span>

                      {/* Small Orbiting Dot */}
                      <div className="absolute -top-1 right-3 h-3 w-3 rounded-full bg-teal-400 shadow-md shadow-teal-400/80 animate-ping [animation-duration:3s]" />
                      <div className="absolute -top-1 right-3 h-3 w-3 rounded-full bg-teal-400" />
                    </div>

                    <div className="mt-3 text-center">
                      <span className="font-display font-bold text-sm tracking-wide text-white block">
                        Karnapu Loshini
                      </span>
                      <span className="text-[11px] font-mono-code text-teal-400 tracking-wider">
                        QA & Automation Engineer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Details Footer */}
                <div className="mt-4 flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-teal-400" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      Automation Intern @ Gvpathshala
                    </span>
                  </div>
                  <span
                    className={`font-mono-code text-[11px] font-medium ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    2026 - 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
