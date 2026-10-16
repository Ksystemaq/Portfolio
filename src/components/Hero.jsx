import React from 'react';
import Typewriter from './Typewriter';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
  const { personal } = portfolioData;
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-36 sm:pt-44 md:pt-48 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background radial nebula glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          isDark ? 'hero-glow-dark' : 'hero-glow-light'
        }`}
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">

          {/* Hero Main Heading with Typewriter */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            <span>Hi, I'm </span>
            <Typewriter words={personal.typewriterWords} />
          </h1>

          {/* Bio Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl font-normal max-w-2xl leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>View My Work</span>
            </a>

            <a
              href={resumePdf}
              download="John_Alexis_Batuigas_Resume.pdf"
              className={`inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-base shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ${
                isDark
                  ? 'bg-[#0f172a]/90 hover:bg-[#1e293b] border border-teal-500/40 hover:border-teal-400 text-teal-300 hover:text-white'
                  : 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 hover:border-slate-400'
              }`}
            >
              <span>Download Resume</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
