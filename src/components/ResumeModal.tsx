import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, FileText } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION_LIST, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.email} | ${PERSONAL_INFO.phoneDisplay} | ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

SKILLS
${SKILLS.map((s) => s.name).join(', ')}

EDUCATION
${EDUCATION_LIST.map(
  (e) => `• ${e.degree} - ${e.institution} (${e.period}) | GPA: ${e.gpa}/${e.maxGpa}`
).join('\n')}

WORK EXPERIENCE
${EXPERIENCES.map(
  (exp) =>
    `• ${exp.role} at ${exp.company} (${exp.period})\n${exp.bullets
      .map((b) => `  - ${b}`)
      .join('\n')}`
).join('\n\n')}

PROJECTS
${PROJECTS.map(
  (p) =>
    `• ${p.title} (${p.technologies.join(', ')})\n  ${p.description}\n${p.keyFeatures
      .map((kf) => `  - ${kf}`)
      .join('\n')}`
).join('\n\n')}
    `.trim();

    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Karnapu_Loshini_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-teal-400" />
            <h3 className="font-display font-bold text-sm sm:text-base">
              Karnapu Loshini - Official Resume Document
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-slate-800 space-y-6">
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-200">
            <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 font-mono-code">
              <span>{PERSONAL_INFO.email}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.phoneDisplay}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b pb-1 mb-2 font-mono-code">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b pb-1 mb-2 font-mono-code">
              Skills
            </h2>
            <div className="text-xs sm:text-sm text-slate-800 space-y-1">
              <div>
                <strong className="text-slate-900">Technical & Automation:</strong> Python, Java, Playwright, Pytest, Web Automation, Functional Testing, Locators, Assertions, VS Code
              </div>
              <div>
                <strong className="text-slate-900">Professional Competencies:</strong> Communication, Teamwork, Adaptability, Leadership
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b pb-1 mb-3 font-mono-code">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{edu.degree}</span>
                    <span className="font-mono-code text-teal-700">GPA: {edu.gpa} / {edu.maxGpa}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 text-xs">
                    <span>{edu.institution}</span>
                    <span className="font-mono-code">{edu.period} · {edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b pb-1 mb-3 font-mono-code">
              Work Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{exp.role}</span>
                  <span className="font-mono-code text-slate-600">{exp.period}</span>
                </div>
                <div className="text-xs text-teal-700 font-semibold mb-2">
                  {exp.company} ({exp.duration})
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs leading-relaxed">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b pb-1 mb-3 font-mono-code">
              Projects
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{proj.title}</span>
                  <span className="font-mono-code text-slate-600">{proj.technologies.join(' · ')}</span>
                </div>
                <p className="text-xs text-slate-700 my-1">{proj.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs leading-relaxed">
                  {proj.keyFeatures.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
