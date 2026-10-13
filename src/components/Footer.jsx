import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`border-t pt-14 pb-10 px-6 sm:px-8 lg:px-12 relative z-10 transition-colors duration-300 ${
        isDark
          ? 'border-slate-800/90 bg-[#090e18] text-slate-400'
          : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 3-Column Footer */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-300'}`}>
          
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-base font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`transition-colors inline-block ${
                      isDark ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600 font-medium'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Get In Touch */}
          <div className="space-y-4">
            <h3 className={`text-base font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className={`flex items-center gap-2.5 transition-colors ${
                    isDark ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600 font-medium'
                  }`}
                >
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="truncate">{personal.email}</span>
                </a>
              </li>
              {personal.phone && (
                <li>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className={`flex items-center gap-2.5 transition-colors ${
                      isDark ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600 font-medium'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{personal.phone}</span>
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-4">
            <h3 className={`text-base font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Social Links
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 transition-colors ${
                  isDark ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600 font-medium'
                }`}
              >
                <Github className="w-4 h-4 text-teal-500 shrink-0" />
                <span>GitHub ({personal.githubDisplay || 'Ksystemaq'})</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 transition-colors ${
                  isDark ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600 font-medium'
                }`}
              >
                <Linkedin className="w-4 h-4 text-teal-500 shrink-0" />
                <span>LinkedIn ({personal.linkedinDisplay || 'john-alexis-batuigas'})</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:scale-105 ${
                  isDark
                    ? 'bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/30 text-teal-400'
                    : 'bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/40 text-teal-700'
                }`}
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div>
            {personal.degree} • {personal.school}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
