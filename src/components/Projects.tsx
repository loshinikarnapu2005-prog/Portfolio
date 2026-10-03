import React, { useState, useEffect } from 'react';
import {
  Play,
  CheckCircle,
  Terminal,
  Code2,
  Github,
  ExternalLink,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Check,
  ChevronRight,
  Layers,
  Clock,
  Laptop
} from 'lucide-react';
import { PROJECTS, CODE_SNIPPET_SAMPLE } from '../data/portfolioData';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const project = PROJECTS[0];

  const [activeTab, setActiveTab] = useState<'visualizer' | 'code' | 'features'>('visualizer');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'pytest test_web_automation.py --headed -v',
    'platform linux -- Python 3.11.x, pytest-8.x.x, playwright-1.40.x',
    'rootdir: /workspace/automation-suite',
    'collected 5 items'
  ]);

  const runTestSuite = () => {
    if (isRunningTests) return;
    setIsRunningTests(true);
    setCompletedSteps([]);
    setActiveStepIndex(0);
    setTerminalLogs([
      'pytest test_web_automation.py -v',
      'collected 5 items'
    ]);

    const steps = project.testScenarios;

    steps.forEach((scenario, index) => {
      setTimeout(() => {
        setActiveStepIndex(index);
        setTerminalLogs((prev) => [
          ...prev,
          `RUNNING: [Scenario ${index + 1}/5] ${scenario.name}...`,
          `  -> Locating elements via Playwright locators...`,
          `  -> PASSED: ${scenario.name} (${scenario.duration})`
        ]);
        setCompletedSteps((prev) => [...prev, index]);

        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsRunningTests(false);
            setActiveStepIndex(-1);
            setTerminalLogs((prev) => [
              ...prev,
              '======================== 5 passed in 1.42s ========================',
              'STATUS: 100% assertions satisfied. All web workflows validated.'
            ]);
          }, 400);
        }
      }, (index + 1) * 600);
    });
  };

  const resetTestSuite = () => {
    setIsRunningTests(false);
    setCompletedSteps([]);
    setActiveStepIndex(-1);
    setTerminalLogs([
      'pytest test_web_automation.py --headed -v',
      'collected 5 items',
      'Ready to execute end-to-end automation test suite.'
    ]);
  };

  return (
    <section id="projects" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Featured Engineering Work
          </span>
          <h2
            className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Projects Showcase
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            High-impact web automation test engineering project designed to validate complex browser workflows with resilient assertions.
          </p>
        </div>

        {/* Major Showcase Card */}
        <div
          className={`mt-12 overflow-hidden rounded-3xl border transition-all duration-300 ${
            isDark
              ? 'bg-[#0B1326] border-slate-800/80 shadow-2xl shadow-black/40'
              : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60'
          }`}
        >
          {/* Card Top: Banner & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800/60">
            {/* Visual Media Column */}
            <div className="relative lg:col-span-6 bg-slate-950 overflow-hidden min-h-[300px] lg:min-h-[380px]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('project-img-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div
                id="project-img-fallback"
                className="hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-300 p-6"
              >
                <Laptop className="h-16 w-16 text-teal-400 mb-2" />
                <span className="font-bold text-lg text-white">{project.title}</span>
                <span className="text-xs text-slate-400">Playwright & Python Suite</span>
              </div>

              {/* Gradient scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Overlay metadata */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono-code text-teal-400 font-semibold block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white drop-shadow">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-mono-code bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-slate-300 border border-slate-700/50">
                  {project.period}
                </span>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Tech metadata - unboxed text */}
                <div
                  className={`flex flex-wrap items-center gap-2 text-xs font-mono-code ${
                    isDark ? 'text-teal-400' : 'text-teal-600'
                  }`}
                >
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <h3
                  className={`mt-3 font-display text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {project.subtitle}
                </h3>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Key features checklist */}
                <div className="mt-6 space-y-2.5">
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Key Architecture & Implementations
                  </h4>
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                    isDark
                      ? 'border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700'
                      : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => {
                    setActiveTab('visualizer');
                    const el = document.getElementById('demo-simulator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                    isDark
                      ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Live Test Suite Simulation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Inspection Workspace (Tabs) */}
          <div id="demo-simulator" className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/50">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-teal-400" />
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Interactive Test Suite & Code Inspection
                </h4>
              </div>

              {/* Tabs */}
              <div
                className={`inline-flex items-center gap-1 p-1 rounded-xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveTab('visualizer')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeTab === 'visualizer'
                      ? isDark
                        ? 'bg-teal-500 text-slate-950 font-semibold'
                        : 'bg-white text-slate-900 font-semibold shadow-sm'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Live Test Runner
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeTab === 'code'
                      ? isDark
                        ? 'bg-teal-500 text-slate-950 font-semibold'
                        : 'bg-white text-slate-900 font-semibold shadow-sm'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Python Test Code
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeTab === 'features'
                      ? isDark
                        ? 'bg-teal-500 text-slate-950 font-semibold'
                        : 'bg-white text-slate-900 font-semibold shadow-sm'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Test Scenarios List
                </button>
              </div>
            </div>

            {/* Tab 1: Live Interactive Test Runner */}
            {activeTab === 'visualizer' && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Test Cases Progress Tracker */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Automated Test Scenarios ({completedSteps.length}/{project.testScenarios.length} Passed)
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={runTestSuite}
                        disabled={isRunningTests}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all ${
                          isRunningTests
                            ? 'bg-teal-500/50 text-slate-950 cursor-not-allowed'
                            : isDark
                            ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                            : 'bg-teal-600 text-white hover:bg-teal-700'
                        }`}
                      >
                        <Play className="h-3 w-3 fill-current" />
                        <span>{isRunningTests ? 'Executing...' : 'Run Test Suite'}</span>
                      </button>

                      <button
                        onClick={resetTestSuite}
                        disabled={isRunningTests}
                        title="Reset simulation"
                        className={`p-1.5 rounded-lg border ${
                          isDark
                            ? 'border-slate-800 text-slate-400 hover:text-white'
                            : 'border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {project.testScenarios.map((scenario, idx) => {
                    const isDone = completedSteps.includes(idx);
                    const isRunning = activeStepIndex === idx;

                    return (
                      <div
                        key={scenario.name}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isRunning
                            ? 'border-teal-400 bg-teal-500/10'
                            : isDone
                            ? isDark
                              ? 'border-emerald-500/40 bg-emerald-500/5'
                              : 'border-emerald-200 bg-emerald-50/50'
                            : isDark
                            ? 'border-slate-800 bg-slate-900/40'
                            : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {isDone ? (
                              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                            ) : isRunning ? (
                              <div className="h-4 w-4 rounded-full border-2 border-teal-400 border-t-transparent animate-spin shrink-0" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-slate-600 shrink-0" />
                            )}
                            <span
                              className={`text-xs font-semibold ${
                                isDone
                                  ? isDark
                                    ? 'text-emerald-300'
                                    : 'text-emerald-800'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-slate-800'
                              }`}
                            >
                              {scenario.name}
                            </span>
                          </div>

                          <span className="font-mono tabular-nums text-[11px] text-slate-500">
                            {scenario.duration}
                          </span>
                        </div>
                        <p
                          className={`mt-1.5 ml-6.5 text-[11px] leading-relaxed ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {scenario.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Simulated Pytest Execution Terminal */}
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center justify-between rounded-t-xl bg-slate-950 px-4 py-2.5 border border-b-0 border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono-code text-[11px] text-slate-400">
                        pytest terminal · Playwright v1.40
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-code text-teal-400">bash</span>
                  </div>

                  <div className="flex-1 rounded-b-xl bg-[#070B14] p-4 font-mono-code text-xs text-slate-300 border border-slate-800 min-h-[260px] max-h-[340px] overflow-y-auto space-y-1">
                    {terminalLogs.map((log, i) => {
                      const isSuccess = log.includes('PASSED') || log.includes('passed');
                      const isRunning = log.includes('RUNNING');
                      return (
                        <div
                          key={i}
                          className={`${
                            isSuccess
                              ? 'text-emerald-400'
                              : isRunning
                              ? 'text-teal-300'
                              : 'text-slate-400'
                          }`}
                        >
                          {log}
                        </div>
                      );
                    })}
                    {isRunningTests && (
                      <div className="flex items-center gap-2 text-teal-400 animate-pulse">
                        <span>Executing browser event loop...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Python Code Preview */}
            {activeTab === 'code' && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 border-b border-slate-800 text-xs font-mono-code text-slate-400">
                  <span className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-teal-400" />
                    <span>test_web_automation.py</span>
                  </span>
                  <span className="text-teal-400">Python 3.11 · Playwright</span>
                </div>
                <pre className="p-4 bg-[#070B14] text-xs font-mono-code text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{CODE_SNIPPET_SAMPLE}</code>
                </pre>
              </div>
            )}

            {/* Tab 3: Detailed Scenarios Breakdown */}
            {activeTab === 'features' && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.testScenarios.map((scenario, i) => (
                  <div
                    key={scenario.name}
                    className={`p-4 rounded-xl border ${
                      isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-code text-teal-400 font-bold">
                        Scenario 0{i + 1}
                      </span>
                      <span className="font-mono tabular-nums text-xs text-slate-500">
                        {scenario.duration}
                      </span>
                    </div>
                    <h5
                      className={`mt-1 font-bold text-sm ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {scenario.name}
                    </h5>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {scenario.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
