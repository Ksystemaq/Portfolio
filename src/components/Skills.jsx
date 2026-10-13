import React from 'react';

const techStack = [
  {
    name: 'React',
    glowColor: 'rgba(97, 218, 251, 0.3)',
    borderColor: 'hover:border-[#61dafb]/60',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-14 h-14">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    glowColor: 'rgba(49, 120, 198, 0.3)',
    borderColor: 'hover:border-[#3178c6]/60',
    icon: (
      <svg viewBox="0 0 100 100" className="w-13 h-13 rounded-xl overflow-hidden shadow-sm">
        <rect width="100" height="100" rx="14" fill="#3178C6" />
        <path fill="#ffffff" d="M22 34h24v8.5H36.5v32h-9.5v-32H22V34zm29 20.5c1.8-1.5 4.5-2.8 8-2.8 5.6 0 9.2 3.1 9.2 7.9 0 5.2-3.8 7.8-9.9 10.2-5.4 2-7.7 3.9-7.7 7.4 0 4.2 3.5 7 8.7 7 3.6 0 6.6-1.1 8.7-2.8l3.8 7.8c-3.1 2.3-7.7 3.8-13 3.8-11.3 0-18.7-6.4-18.7-16.2 0-8.6 6-13.7 14.3-17 4.6-1.9 7-3.3 7-6.1 0-2.9-2.3-4.7-5.9-4.7-3.3 0-6.1 1.1-8 2.7l-4.5-7.4z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    glowColor: 'rgba(247, 223, 30, 0.3)',
    borderColor: 'hover:border-[#f7df1e]/60',
    icon: (
      <svg viewBox="0 0 100 100" className="w-13 h-13 rounded-xl overflow-hidden shadow-sm">
        <rect width="100" height="100" rx="14" fill="#F7DF1E" />
        <path fill="#000000" d="M38 66c0 7.8-4.6 12.4-11.8 12.4-6.2 0-10.2-3.3-12-7.5l7.3-4.3c1 2.1 2.5 3.7 4.6 3.7 2.5 0 3.8-1.3 3.8-4.3V35H38v31zm39-6.5c0 11.8-8.4 20.8-21.6 20.8-9.8 0-16.6-4.4-19.6-10.8l7.6-4.4c1.9 3.8 5.8 6.6 11.6 6.6 7 0 11.8-4.4 11.8-10.1 0-6.6-5.2-8.9-12.8-12.2-9.5-4-15.7-8.7-15.7-18.3 0-10.8 8.2-18.9 19.9-18.9 8.6 0 14.5 3.5 17.8 9.4l-7.4 4.5c-1.8-3.3-5.2-5.4-10-5.4-6.1 0-10.4 3.8-10.4 8.9 0 5.8 4.3 8 11.6 11.2 10.8 4.5 17.3 8.8 17.3 19.7z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    glowColor: 'rgba(104, 160, 99, 0.35)',
    borderColor: 'hover:border-[#68a063]/60',
    icon: (
      <svg viewBox="0 0 128 128" className="w-14 h-14">
        <path fill="#539e43" d="M64 10L14 39v50l50 29 50-29V39L64 10z" />
        <path fill="#68a063" d="M64 10v58l50-29V39L64 10z" />
        <path fill="#3e863d" d="M64 68v50l50-29V39L64 68z" />
        <path fill="#83cd29" d="M64 10L14 39v50l50-21V10z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    glowColor: 'rgba(56, 189, 248, 0.3)',
    borderColor: 'hover:border-[#38bdf8]/60',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 10.5C18.6 10.5 15.2 13.2 13.8 18.6C16.5 15.9 19.5 14.8 22.8 15.3C24.7 15.6 26.1 17 27.6 18.5C30 21 32.8 24 39 24C44.4 24 47.8 21.3 49.2 15.9C46.5 18.6 43.5 19.7 40.2 19.2C38.3 18.9 36.9 17.5 35.4 16C33 13.5 30.2 10.5 24 10.5ZM13.8 24C8.4 24 5 26.7 3.6 32.1C6.3 29.4 9.3 28.3 12.6 28.8C14.5 29.1 15.9 30.5 17.4 32C19.8 34.5 22.6 37.5 28.8 37.5C34.2 37.5 37.6 34.8 39 29.4C36.3 32.1 33.3 33.2 30 32.7C28.1 32.4 26.7 31 25.2 29.5C22.8 27 20 24 13.8 24Z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: 'Vite',
    glowColor: 'rgba(189, 52, 254, 0.3)',
    borderColor: 'hover:border-[#bd34fe]/60',
    icon: (
      <svg viewBox="0 0 32 32" className="w-14 h-14">
        <defs>
          <linearGradient id="vite-a" x1="-3.45%" y1="105.74%" x2="98.39%" y2="7.09%">
            <stop stopColor="#41D1FF" offset="0%" />
            <stop stopColor="#BD34FE" offset="100%" />
          </linearGradient>
          <linearGradient id="vite-b" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stopColor="#FFEA83" offset="0%" />
            <stop stopColor="#FFDD35" offset="8.33%" />
            <stop stopColor="#FFA800" offset="100%" />
          </linearGradient>
        </defs>
        <path d="M29.5 5.5L16.7 28.2c-.4.7-1.4.7-1.8 0L2.1 5.5c-.5-.9.2-2 1.2-1.9l13.1 1.6 11.9-1.6c1.1-.1 1.8 1 1.2 1.9z" fill="url(#vite-a)" />
        <path d="M20.9 2.5l-9.3 16.3c-.2.4.1.9.6.9h5.1l-2.6 9c-.2.7.7 1.2 1.2.6l11.4-15.6c.3-.5 0-1.1-.6-1.1h-5.2l3-9c.2-.7-.6-1.3-1.2-.7z" fill="url(#vite-b)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    glowColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: 'hover:border-white/60',
    icon: (
      <svg viewBox="0 0 180 180" className="w-14 h-14">
        <circle cx="90" cy="90" r="90" fill="#ffffff" />
        <path d="M149.5 145.5L78.8 54.4H58v71.2h14.8V75.8l63.5 81.6c4.6-3.8 8.8-7.8 12.6-12.2l.6.3z" fill="#000000" />
        <path d="M118 54.4h14.8v48.6L118 83.8V54.4z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    glowColor: 'rgba(51, 103, 145, 0.35)',
    borderColor: 'hover:border-[#336791]/60',
    icon: (
      <svg viewBox="0 0 128 128" className="w-14 h-14">
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M64 22c-19 0-33 13-33 30 0 10 5 18 13 24v22l11-8 9 8V76c8-5 13-13 13-24 0-17-14-30-33-30z"
        />
        <path
          fill="#336791"
          d="M64 28c-15.5 0-27 10.5-27 24 0 7.8 4 14.5 10.5 19v18l9-6.5 7.5 6.5V71c6.5-4.5 10.5-11.2 10.5-19 0-13.5-11.5-24-27-24z"
        />
        <circle cx="55" cy="48" r="3.5" fill="#ffffff" />
        <circle cx="73" cy="48" r="3.5" fill="#ffffff" />
        <path
          d="M52 64c3.5 4 8 6 12 6s8.5-2 12-6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Git',
    glowColor: 'rgba(240, 80, 50, 0.35)',
    borderColor: 'hover:border-[#f05032]/60',
    icon: (
      <svg viewBox="0 0 128 128" className="w-14 h-14">
        <path
          fill="#F05032"
          d="M125.6 57.3L70.7 2.4c-3.2-3.2-8.4-3.2-11.6 0L45.4 16.1l14.7 14.7c3.4-1.2 7.4-.3 10 2.3 2.6 2.6 3.5 6.6 2.3 10l14.2 14.2c3.4-1.2 7.4-.3 10 2.3 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-2.8-2.8-3.6-7-2.1-10.6L67.5 59.4v30.7c.8.4 1.6.9 2.3 1.6 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8.9-.9 2-1.5 3.2-1.9V58.7c-1.2-.4-2.3-1-3.2-1.9-2.9-2.9-3.6-7.3-2-10.9L39.8 31.6 2.4 69.1c-3.2 3.2-3.2 8.4 0 11.6l54.9 54.9c3.2 3.2 8.4 3.2 11.6 0l56.7-56.7c3.2-3.2 3.2-8.4 0-11.6z"
        />
        <circle cx="89.1" cy="74" r="6.5" fill="#ffffff" />
        <circle cx="59.8" cy="104.5" r="6.5" fill="#ffffff" />
        <circle cx="59.8" cy="38.7" r="6.5" fill="#ffffff" />
        <path stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" d="M59.8 44.7v53.8M59.8 44.7l23.5 23.5" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    glowColor: 'rgba(162, 89, 255, 0.35)',
    borderColor: 'hover:border-[#a259ff]/60',
    icon: (
      <svg viewBox="0 0 38 57" className="w-10 h-14">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
      </svg>
    ),
  },
];

import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matching screenshot */}
        <div className="text-center mb-14">
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight inline-block relative ${
            isDark ? 'text-teal-400' : 'text-teal-600'
          }`}>
            My Tech Stack
          </h2>
        </div>

        {/* 5-Column Grid matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`group relative flex flex-col items-center justify-center p-6 sm:py-8 rounded-2xl border ${tech.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default ${
                isDark
                  ? 'bg-[#141d2e] border-slate-800/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)]'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Subtle hover glow behind icon matching Node.js card in screenshot */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.glowColor} 0%, rgba(20, 29, 46, 0) 70%)`,
                }}
              />

              {/* Icon Container */}
              <div className="relative z-10 h-16 w-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Tech Label */}
              <span className={`relative z-10 font-bold text-base sm:text-lg tracking-wide text-center transition-colors ${
                isDark ? 'text-white group-hover:text-teal-300' : 'text-slate-900 group-hover:text-teal-600'
              }`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
