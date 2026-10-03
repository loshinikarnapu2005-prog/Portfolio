import React, { useState } from 'react';
import {
  Code,
  ShieldCheck,
  Wrench,
  Users,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

interface SkillsProps {
  theme: 'dark' | 'light';
}

type SkillCategory = 'all' | 'automation' | 'programming' | 'tools' | 'competencies';

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all' as SkillCategory, label: 'All Skills' },
    { id: 'automation' as SkillCategory, label: 'Testing & Automation' },
    { id: 'programming' as SkillCategory, label: 'Programming' },
    { id: 'tools' as SkillCategory, label: 'Tools & IDEs' },
    { id: 'competencies' as SkillCategory, label: 'Core Competencies' }
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'automation':
        return <ShieldCheck className="h-4 w-4 text-teal-400" />;
      case 'programming':
        return <Code className="h-4 w-4 text-sky-400" />;
      case 'tools':
        return <Wrench className="h-4 w-4 text-amber-400" />;
      case 'competencies':
        return <Users className="h-4 w-4 text-indigo-400" />;
      default:
        return <Layers className="h-4 w-4 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'text-teal-400' : 'text-teal-600'
              }`}
            >
              Technical Arsenal
            </span>
            <h2
              className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Skills & Expertise
            </h2>
            <p
              className={`mt-3 text-base ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Verified skills derived directly from hands-on Playwright automation testing, Pytest execution, and academic coursework.
            </p>
          </div>

          {/* Interactive Category Segmented Control (Functional Buttons) */}
          <div
            className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border ${
              isDark
                ? 'bg-[#0E1526] border-slate-800'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? isDark
                      ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-white text-slate-900 font-semibold shadow-sm'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                  isSelected
                    ? isDark
                      ? 'bg-[#131D38] border-teal-500/80 shadow-lg shadow-teal-500/10'
                      : 'bg-teal-50/50 border-teal-400 shadow-sm'
                    : isDark
                    ? 'bg-[#0E1526]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#111A30]'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        isDark ? 'bg-slate-800/80' : 'bg-slate-100'
                      }`}
                    >
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h4
                        className={`text-base font-bold font-display ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono-code text-slate-500 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-mono tabular-nums text-xs font-semibold ${
                      isDark ? 'text-teal-400' : 'text-teal-600'
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Skill Indicator Bar */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/50">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      skill.category === 'automation'
                        ? 'bg-teal-400'
                        : skill.category === 'programming'
                        ? 'bg-sky-400'
                        : skill.category === 'tools'
                        ? 'bg-amber-400'
                        : 'bg-indigo-400'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Description */}
                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {skill.description}
                </p>

                {/* Practical Application in Resume */}
                <div
                  className={`mt-3 pt-3 border-t text-[11px] leading-normal flex items-start gap-1.5 ${
                    isDark
                      ? 'border-slate-800 text-slate-400'
                      : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                      Application:
                    </strong>{' '}
                    {skill.appliedIn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Skill Callout */}
        <div
          className={`mt-10 rounded-2xl p-6 border flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-slate-900 border-teal-500/30'
              : 'bg-gradient-to-r from-teal-50 via-white to-sky-50 border-teal-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Verified QA & Automation Core Competency
              </h4>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Specialized in building deterministic test scripts with Playwright locators, handling asynchronous events, and validating state transitions.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
              isDark
                ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            <span>See Project Implementation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
