import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? scrolled
            ? 'bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-800/90 shadow-2xl py-4'
            : 'bg-[#0b1120]/80 backdrop-blur-md border-b border-slate-800/40 py-5 sm:py-6'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-lg py-4'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo - Bigger & Bolder */}
        <a
          href="#home"
          className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2 group"
        >
          <span className="text-teal-400 group-hover:scale-105 transition-transform duration-200">
            {portfolioData.personal.brandName}
          </span>
        </a>

        {/* Desktop Navigation - Bigger text & comfortable spacing */}
        <nav className="hidden md:flex items-center space-x-8 sm:space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-base sm:text-lg font-semibold transition-all duration-200 relative py-1.5 px-1 ${
                  isActive
                    ? 'text-teal-400'
                    : isDark
                      ? 'text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]'
                      : 'text-slate-700 hover:text-teal-600'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
                )}
              </a>
            );
          })}

          {/* Theme Toggle Button - Bigger & Interactive */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 active:scale-95 ${
              isDark
                ? 'bg-slate-800/80 border-slate-700/80 text-teal-400 hover:bg-slate-700 shadow-md shadow-teal-500/10'
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 shadow-sm'
            }`}
            title={isDark ? "Switch to light mode" : "Switch to night mode"}
          >
            {isDark ? (
              <Sun className="w-6 h-6 transition-transform hover:rotate-45 duration-300 text-teal-400" />
            ) : (
              <Moon className="w-6 h-6 text-slate-800 hover:text-teal-600 transition-transform -rotate-12 duration-300" />
            )}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-xl border ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-teal-400'
                : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-800" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-lg ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-black'}`}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 py-5 space-y-3 animate-in slide-in-from-top duration-200 ${
            isDark ? 'bg-[#0b1120] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xl'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 text-lg font-semibold rounded-lg px-3 transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? 'bg-teal-500/15 text-teal-400 font-bold'
                  : isDark
                    ? 'text-slate-300 hover:bg-slate-800/40 hover:text-teal-300'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-teal-600'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={resumePdf}
            download="John_Alexis_Batuigas_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500/10 border border-teal-500/40 text-teal-400 text-base font-semibold hover:bg-teal-500/20 transition-all"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
