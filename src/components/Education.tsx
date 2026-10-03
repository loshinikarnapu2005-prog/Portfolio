import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Star, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

interface EducationProps {
  theme: 'dark' | 'light';
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="education" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Academic Foundation
          </span>
          <h2
            className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education & Academic Track Record
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A consistent academic background emphasizing Artificial Intelligence, computational logic, and mathematics.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="mt-12 space-y-6">
          {EDUCATION_LIST.map((edu, index) => {
            const isPerfectScore = parseFloat(edu.gpa) === 10.0;
            return (
              <div
                key={edu.id}
                className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                  isPerfectScore
                    ? isDark
                      ? 'bg-gradient-to-r from-[#0E1B38] to-[#0A1224] border-teal-500/50 shadow-xl shadow-teal-500/5'
                      : 'bg-gradient-to-r from-teal-50/50 to-white border-teal-300 shadow-md'
                    : isDark
                    ? 'bg-[#0B1326] border-slate-800/80 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        isPerfectScore
                          ? isDark
                            ? 'bg-teal-500/20 text-teal-400 ring-2 ring-teal-500/30'
                            : 'bg-teal-100 text-teal-700 ring-2 ring-teal-300'
                          : isDark
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isPerfectScore ? <Award className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`font-display text-lg sm:text-xl font-bold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {edu.degree}
                        </h3>
                        {isPerfectScore && (
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-mono-code font-bold px-2 py-0.5 rounded ${
                              isDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-800'
                            }`}
                          >
                            <Star className="h-3 w-3 fill-current" />
                            <span>Distinction (10.0 GPA)</span>
                          </span>
                        )}
                      </div>

                      <h4 className="mt-1 text-sm font-semibold text-teal-400">
                        {edu.institution}
                      </h4>

                      {/* Metadata row */}
                      <div
                        className={`mt-2 flex flex-wrap items-center gap-2 text-xs font-mono-code ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-teal-400" />
                          <span>{edu.period}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-teal-400" />
                          <span>{edu.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GPA Box with Tabular Numerals */}
                  <div
                    className={`shrink-0 rounded-2xl px-5 py-3 border text-center self-start ${
                      isDark
                        ? 'bg-slate-900/90 border-slate-800'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                      Cumulative GPA
                    </span>
                    <div className="flex items-baseline justify-center gap-1 mt-0.5">
                      <span
                        className={`font-mono tabular-nums text-2xl font-black ${
                          isPerfectScore
                            ? 'text-teal-400'
                            : isDark
                            ? 'text-white'
                            : 'text-slate-900'
                        }`}
                      >
                        {edu.gpa}
                      </span>
                      <span className="text-xs text-slate-500 font-mono-code">/ {edu.maxGpa}</span>
                    </div>
                  </div>
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800/40 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Achievements Spotlight */}
        <div className="mt-12">
          <h3
            className={`font-display text-xl font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Key Academic Achievements
          </h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className={`rounded-2xl p-5 border ${
                isDark ? 'bg-[#0E1526] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <Award className="h-6 w-6 text-teal-400 mb-2" />
              <div className="font-mono tabular-nums text-2xl font-black text-teal-400">10.0 GPA</div>
              <h4 className={`text-sm font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Secondary Education Distinction
              </h4>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Achieved top percentile cumulative score at New Central School.
              </p>
            </div>

            <div
              className={`rounded-2xl p-5 border ${
                isDark ? 'bg-[#0E1526] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <Award className="h-6 w-6 text-sky-400 mb-2" />
              <div className="font-mono tabular-nums text-2xl font-black text-sky-400">8.6 GPA</div>
              <h4 className={`text-sm font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Intermediate MPC Excellence
              </h4>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Strong performance in Mathematics, Physics, and Chemistry foundation.
              </p>
            </div>

            <div
              className={`rounded-2xl p-5 border ${
                isDark ? 'bg-[#0E1526] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <Award className="h-6 w-6 text-indigo-400 mb-2" />
              <div className="font-mono tabular-nums text-2xl font-black text-indigo-400">2-Month</div>
              <h4 className={`text-sm font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Automation Industry Internship
              </h4>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Practical engineering experience in Playwright automation test suites at Gvpathshala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
