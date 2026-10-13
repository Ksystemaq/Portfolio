import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const { isDark } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              Get In Touch
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out. Let's create something amazing together!
            </p>
          </div>

          {/* Right Column: Contact Card matching screenshot */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl p-6 sm:p-9 space-y-6 border transition-all duration-300 ${
                isDark
                  ? 'bg-[#141d2e] border-slate-800/90 shadow-2xl shadow-black/40'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${personal.email}`}
                      className={`text-base sm:text-lg font-bold transition-colors truncate ${
                        isDark ? 'text-white hover:text-teal-300' : 'text-slate-900 hover:text-teal-600'
                      }`}
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={() => handleCopy(personal.email, 'email')}
                      className="p-1 text-slate-400 hover:text-teal-400 transition-colors"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-teal-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isDark ? 'text-white hover:text-teal-300' : 'text-slate-900 hover:text-teal-600'
                      }`}
                    >
                      {personal.phone}
                    </a>
                    <button
                      onClick={() => handleCopy(personal.phone, 'phone')}
                      className="p-1 text-slate-400 hover:text-teal-400 transition-colors"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-teal-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle divider between direct contact and social profiles */}
              <div className={`border-t pt-2 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`} />

              {/* GitHub */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Github className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>GitHub</div>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-base sm:text-lg font-bold transition-colors mt-0.5 group/link ${
                      isDark ? 'text-white hover:text-teal-300' : 'text-slate-900 hover:text-teal-600'
                    }`}
                  >
                    <span>{personal.githubDisplay || 'github.com'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-teal-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Linkedin className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>LinkedIn</div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-base sm:text-lg font-bold transition-colors mt-0.5 group/link truncate ${
                      isDark ? 'text-white hover:text-teal-300' : 'text-slate-900 hover:text-teal-600'
                    }`}
                  >
                    <span className="truncate">{personal.linkedinDisplay || 'linkedin.com'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-teal-400 transition-colors shrink-0" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
