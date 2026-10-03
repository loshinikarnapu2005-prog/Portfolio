import React from 'react';
import {
  GraduationCap,
  Target,
  Compass,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Candidate Profile
          </span>
          <h2
            className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Me
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* 4 Core Narrative Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Who I Am */}
          <div
            className={`rounded-2xl p-6 border transition-all ${
              isDark
                ? 'bg-[#0E1526]/80 border-slate-800/80 hover:border-slate-700'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'
                }`}
              >
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3
                className={`font-display text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Who I Am & Education
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio.whoIAm}
            </p>
            <div
              className={`mt-4 pt-4 border-t text-xs ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="font-semibold text-teal-400">Current Standing:</span> B.Tech (2023 - 2027) at Satya Institute of Technology and Management, Vizianagaram.
            </div>
          </div>

          {/* Technical Interests */}
          <div
            className={`rounded-2xl p-6 border transition-all ${
              isDark
                ? 'bg-[#0E1526]/80 border-slate-800/80 hover:border-slate-700'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isDark ? 'bg-sky-500/10 text-sky-400' : 'bg-sky-50 text-sky-600'
                }`}
              >
                <Compass className="h-5 w-5" />
              </div>
              <h3
                className={`font-display text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Technical Interests
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio.technicalInterests}
            </p>
            <div
              className={`mt-4 pt-4 border-t text-xs ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="font-semibold text-sky-400">Core Focus:</span> Writing maintainable, automated test suites that safeguard product flows before production release.
            </div>
          </div>

          {/* What I Am Learning */}
          <div
            className={`rounded-2xl p-6 border transition-all ${
              isDark
                ? 'bg-[#0E1526]/80 border-slate-800/80 hover:border-slate-700'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'
                }`}
              >
                <BookOpen className="h-5 w-5" />
              </div>
              <h3
                className={`font-display text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Continuous Learning
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio.currentlyLearning}
            </p>
            <div
              className={`mt-4 pt-4 border-t text-xs ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="font-semibold text-amber-400">Methodology:</span> Hands-on script validation with Playwright assertions and Pytest reporting structures.
            </div>
          </div>

          {/* Career Goal */}
          <div
            className={`rounded-2xl p-6 border transition-all ${
              isDark
                ? 'bg-[#0E1526]/80 border-slate-800/80 hover:border-slate-700'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}
              >
                <Target className="h-5 w-5" />
              </div>
              <h3
                className={`font-display text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Career Goal
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio.careerGoal}
            </p>
            <div
              className={`mt-4 pt-4 border-t text-xs ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="font-semibold text-emerald-400">Target Roles:</span> QA Automation Engineer, Software Test Engineer, SDET Intern / Entry-Level.
            </div>
          </div>
        </div>

        {/* Factual Quick Info Row */}
        <div
          className={`mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl p-6 border ${
            isDark
              ? 'bg-[#080D1A] border-slate-800/80 text-slate-300'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-teal-400 shrink-0" />
            <div>
              <span className="text-[11px] block text-slate-500 uppercase font-semibold">Location</span>
              <span className="text-xs font-medium">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-teal-400 shrink-0" />
            <div className="truncate">
              <span className="text-[11px] block text-slate-500 uppercase font-semibold">Email</span>
              <a
                href={PERSONAL_INFO.socials.email}
                className="text-xs font-medium hover:underline hover:text-teal-400 truncate block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-teal-400 shrink-0" />
            <div>
              <span className="text-[11px] block text-slate-500 uppercase font-semibold">Phone</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-xs font-medium hover:underline hover:text-teal-400"
              >
                {PERSONAL_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="h-4 w-4 text-teal-400 shrink-0" />
            <div>
              <span className="text-[11px] block text-slate-500 uppercase font-semibold">University</span>
              <span className="text-xs font-medium">SITAM (2023 - 2027)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
