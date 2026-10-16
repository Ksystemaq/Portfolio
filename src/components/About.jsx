import React from 'react';
import { GraduationCap, Code2, Users, Compass, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal, about } = portfolioData;
  const { isDark } = useTheme();

  const iconMap = [
    <GraduationCap className="w-6 h-6 text-teal-400" />,
    <Code2 className="w-6 h-6 text-teal-400" />,
    <Compass className="w-6 h-6 text-teal-400" />,
    <Users className="w-6 h-6 text-teal-400" />
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-teal-400 font-mono text-sm tracking-wider uppercase mb-2">
            01. Background & Profile
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mt-4" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>
              <span>Fresh Perspective, Driven by Tech Innovation</span>
            </h3>

            <div className={`space-y-4 leading-relaxed text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Quick bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                `Degree: ${personal.degree}`,
                `Alma Mater: ${personal.school}`,
                "Focus: Web & Full-Stack Apps",
                "Status: Available for Full-Time",
              ].map((text, i) => (
                <div key={i} className={`flex items-center gap-2 font-medium text-sm ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-5 border transition-all duration-300 group ${
                  isDark
                    ? 'bg-[#141d2e] border-slate-800 hover:border-teal-500/40 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-teal-500/40 shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 group-hover:scale-110 transition-transform">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold transition-colors ${isDark ? 'text-white group-hover:text-teal-300' : 'text-slate-950 group-hover:text-teal-600'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm mt-1 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
