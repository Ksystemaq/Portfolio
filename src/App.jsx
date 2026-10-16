import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioApp() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative ${
        isDark
          ? 'bg-[#0b1120] text-slate-100 selection:bg-teal-500/30 selection:text-teal-300'
          : 'bg-[#f8fafc] text-slate-900 selection:bg-teal-500/30 selection:text-teal-700'
      }`}
    >
      {/* Ambient background particles */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
