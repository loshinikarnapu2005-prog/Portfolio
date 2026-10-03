import React, { useState, useEffect } from 'react';
import { METRICS } from '../data/portfolioData';

interface MetricsBarProps {
  theme: 'dark' | 'light';
}

export const MetricsBar: React.FC<MetricsBarProps> = ({ theme }) => {
  const [counts, setCounts] = useState<number[]>(METRICS.map(() => 0));
  const isDark = theme === 'dark';

  useEffect(() => {
    const duration = 1600; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        METRICS.map((metric) => {
          const val = metric.value * ease;
          return Number(val.toFixed(1));
        })
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(METRICS.map((m) => m.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section aria-label="Key Academic & Professional Milestones" className="relative z-10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4 sm:gap-6 lg:p-8 border transition-all ${
            isDark
              ? 'bg-[#0E1526]/80 border-slate-800/80 shadow-xl shadow-black/20'
              : 'bg-white/90 border-slate-200/90 shadow-sm'
          }`}
        >
          {METRICS.map((metric, index) => {
            const displayedNumber =
              metric.value % 1 === 0
                ? Math.floor(counts[index])
                : counts[index].toFixed(1);

            return (
              <div key={metric.label} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-mono tabular-nums text-3xl font-extrabold tracking-tight sm:text-4xl ${
                      isDark ? 'text-teal-400' : 'text-teal-600'
                    }`}
                  >
                    {metric.prefix}
                    {displayedNumber}
                  </span>
                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {metric.suffix}
                  </span>
                </div>
                <h4
                  className={`mt-1.5 text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {metric.label}
                </h4>
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isDark ? 'text-slate-500' : 'text-slate-600'
                  }`}
                >
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
