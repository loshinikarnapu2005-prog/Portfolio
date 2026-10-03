import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  theme: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Get In Touch
          </span>
          <h2
            className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Contact & Recruitment Inquiries
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Interested in discussing an entry-level QA, Software Testing, or Automation role? Reach out directly or send a message below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div
              className={`rounded-2xl p-5 border transition-all ${
                isDark
                  ? 'bg-[#0B1326] border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'
                    }`}
                  >
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className={`text-sm font-semibold block hover:underline ${
                        isDark ? 'text-white hover:text-teal-400' : 'text-slate-900 hover:text-teal-600'
                      }`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className={`p-2 rounded-lg border transition-colors ${
                    isDark
                      ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`rounded-2xl p-5 border transition-all ${
                isDark
                  ? 'bg-[#0B1326] border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isDark ? 'bg-sky-500/10 text-sky-400' : 'bg-sky-50 text-sky-600'
                    }`}
                  >
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className={`text-sm font-semibold font-mono-code block hover:underline ${
                        isDark ? 'text-white hover:text-teal-400' : 'text-slate-900 hover:text-teal-600'
                      }`}
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  title="Copy phone to clipboard"
                  className={`p-2 rounded-lg border transition-colors ${
                    isDark
                      ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {copiedPhone ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`rounded-2xl p-5 border ${
                isDark ? 'bg-[#0B1326] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Location & Relocation
                  </span>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.location}
                  </p>
                  <span className="text-xs text-slate-500">
                    Open to Remote, Hybrid, & On-site Relocation across India
                  </span>
                </div>
              </div>
            </div>

            {/* Profiles & Links */}
            <div
              className={`rounded-2xl p-5 border flex items-center justify-between ${
                isDark ? 'bg-[#0B1326] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Professional Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    isDark
                      ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white'
                      : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    isDark
                      ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white'
                      : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                isDark
                  ? 'bg-[#0B1326] border-slate-800/80 shadow-2xl shadow-black/40'
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              <h3
                className={`font-display text-xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Send a Direct Message
              </h3>
              <p
                className={`mt-1 text-xs ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Please fill in the details below. I usually respond within 24 hours.
              </p>

              {isSuccess && (
                <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400">
                      Message Sent Successfully!
                    </h4>
                    <p className="mt-1 text-xs text-slate-300">
                      Thank you for reaching out, your message has been recorded. You can also contact me directly at {PERSONAL_INFO.email}.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-3 text-xs font-semibold text-emerald-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {!isSuccess && (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-semibold mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. John Doe / Recruiter"
                        className={`w-full rounded-xl px-4 py-2.5 text-xs border transition-colors outline-none ${
                          errors.name
                            ? 'border-red-500 bg-red-500/5'
                            : isDark
                            ? 'border-slate-800 bg-slate-900/60 text-white focus:border-teal-500'
                            : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-600'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-xs font-semibold mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@company.com"
                        className={`w-full rounded-xl px-4 py-2.5 text-xs border transition-colors outline-none ${
                          errors.email
                            ? 'border-red-500 bg-red-500/5'
                            : isDark
                            ? 'border-slate-800 bg-slate-900/60 text-white focus:border-teal-500'
                            : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. Job Opportunity / Interview Invitation"
                      className={`w-full rounded-xl px-4 py-2.5 text-xs border transition-colors outline-none ${
                        errors.subject
                          ? 'border-red-500 bg-red-500/5'
                          : isDark
                          ? 'border-slate-800 bg-slate-900/60 text-white focus:border-teal-500'
                          : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-600'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share details about the role, technical requirements, or schedule a discussion..."
                      className={`w-full rounded-xl px-4 py-2.5 text-xs border transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-red-500 bg-red-500/5'
                          : isDark
                          ? 'border-slate-800 bg-slate-900/60 text-white focus:border-teal-500'
                          : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 text-xs font-semibold rounded-xl transition-all shadow-md ${
                        isSubmitting
                          ? 'bg-teal-500/50 text-slate-950 cursor-not-allowed'
                          : isDark
                          ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-teal-500/20'
                          : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-600/20'
                      }`}
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
