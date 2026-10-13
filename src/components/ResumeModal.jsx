import React, { useEffect } from 'react';
import { X, Download, Printer, GraduationCap, Briefcase, Award, CheckCircle, MapPin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, resume, skills } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate downloadable text representation or print trigger
    const element = document.createElement("a");
    const resumeText = `
${personal.fullName || personal.name} - Resume
${personal.title}
Location: ${personal.location}
Email: ${personal.email}

CAREER OBJECTIVE
${resume.summary}

EDUCATION
${resume.education.degree}
${resume.education.institution}, ${resume.education.campus} (${resume.education.period})
${resume.education.highlights.map(h => `- ${h}`).join('\n')}

TECHNICAL SKILLS
- Frontend: ${skills.frontend.map(s => s.name).join(', ')}
- Backend: ${skills.backend.map(s => s.name).join(', ')}
- Databases: ${skills.database.map(s => s.name).join(', ')}
- Tools: ${skills.tools.map(s => s.name).join(', ')}

EXPERIENCE
${resume.experience.map(exp => `
${exp.role} - ${exp.company} (${exp.period})
${exp.responsibilities.map(r => `  * ${r}`).join('\n')}
`).join('\n')}

CERTIFICATIONS
${resume.certifications.map(c => `- ${c.name} (${c.issuer}, ${c.year})`).join('\n')}
`;
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${personal.name}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0f172a] border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0b1120]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-sm text-teal-400 font-semibold">
              {personal.name}_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-400 hover:bg-teal-300 text-slate-950 rounded-lg text-xs font-bold transition-all"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {personal.name}
            </h2>
            <p className="text-teal-400 font-mono text-sm mt-1">
              {personal.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                {personal.email}
              </span>
              <span>• Graduated {personal.graduationYear}</span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resume.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="glass-card rounded-xl p-4 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-base font-semibold text-white">
                  {resume.education.degree}
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  {resume.education.period}
                </span>
              </div>
              <p className="text-sm text-teal-300/90 mt-0.5">
                {resume.education.institution} – {resume.education.campus}
              </p>
              <ul className="mt-3 space-y-1.5">
                {resume.education.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Internship & Industry Experience
            </h3>
            <div className="space-y-3">
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-base font-semibold text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-teal-300/90 mt-0.5">{exp.company}</p>
                  <ul className="mt-2.5 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-slate-300 list-disc list-inside">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resume.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-sm font-medium text-white">{cert.name}</div>
                  <div className="text-xs text-slate-400 flex items-center justify-between mt-1">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-teal-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;

