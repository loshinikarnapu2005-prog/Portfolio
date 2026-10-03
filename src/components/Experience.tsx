import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Laptop } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Professional Experience
          </span>
          <h2
            className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Work Experience & Internship
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Real-world testing and automation engineering experience delivered during an intensive 2-month internship.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                isDark
                  ? 'bg-[#0B1326] border-slate-800/80 shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'
                      }`}
                    >
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-display text-xl font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-teal-400">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata in unboxed text */}
                <div
                  className={`flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono-code ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-teal-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className={`mt-5 text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 space-y-3">
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs leading-relaxed ${
                        isDark
                          ? 'bg-[#0E172F]/60 border-slate-800/80 text-slate-300'
                          : 'bg-slate-50/80 border-slate-200 text-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div
                className={`mt-6 pt-5 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Laptop className="h-3.5 w-3.5 text-teal-400" />
                  <span className="font-semibold text-slate-300">Toolchain Used:</span>
                  <span className="font-mono-code">
                    {exp.technologies.join(' · ')}
                  </span>
                </div>

                <div className="text-[11px] font-mono-code text-teal-400">
                  Verified Internship Credentials
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
