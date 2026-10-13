import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Folder, CheckCircle, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Web Applications', 'IT Systems', 'Tools'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-teal-400 font-mono text-sm tracking-wider uppercase mb-2">
            03. Portfolio Showcase
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mt-4" />
          <p className={`text-base max-w-xl mt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A selection of academic capstone projects, full-stack systems, and web applications developed with modern toolchains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === opt
                  ? 'bg-teal-400 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : isDark
                    ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden ${
                isDark
                  ? 'bg-[#141d2e] border-slate-800 hover:border-teal-500/40 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-teal-500/40 shadow-md'
              }`}
            >
              {/* Card top accent subtle line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent group-hover:via-teal-400 transition-all" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Folder className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {proj.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800/80">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors mb-2.5">
                  {proj.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                  {proj.description}
                </p>

                {/* Highlights */}
                {proj.highlights && (
                  <div className="space-y-1.5 mb-5 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                    {proj.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-400 font-medium">
                        <CheckCircle className="w-3 h-3 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Footer: Tags & Action Links */}
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800/90 dark:text-teal-300/90 dark:border-slate-700/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-700 hover:text-teal-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-teal-300 dark:hover:bg-slate-800 rounded-md transition-all"
                      title="View Source Code on GitHub"
                      aria-label="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 transition-all"
                      title="Live Demo"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick View Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-teal-500/30 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono mb-2">
              <span>{selectedProject.category}</span>
              <span>•</span>
              <span>Project Details</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Key Features & Architectural Highlights
            </h4>
            <div className="space-y-2 mb-6">
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-teal-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 text-sm font-bold transition-colors"
              >
                <span>Launch Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;

