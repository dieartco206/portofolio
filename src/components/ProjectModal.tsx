import { useEffect, useState, type FC } from 'react';
import type { Project } from '../types/portfolio';
import { X, Check, Copy, CheckCheck, Cpu, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 z-10 max-h-[92vh] flex flex-col">
        {/* Top Gradient Ribbon */}
        <div className={`h-2.5 sm:h-3 w-full bg-gradient-to-r ${project.colorTheme.gradient}`} />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 bg-white sticky top-0 z-20">
          <div className="pr-2">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-semibold border ${project.colorTheme.badgeBg}`}>
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-mono font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-2xl font-black text-zinc-950 tracking-tight leading-snug break-words">
              {project.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-500 font-mono mt-0.5">
              Peran: <span className="font-semibold text-zinc-800">{project.role}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-700 rounded-xl hover:bg-zinc-100 transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto">
          {/* Main Screenshot Showcase */}
          <div className="space-y-2.5">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-zinc-950 max-h-[250px] sm:max-h-[420px] flex items-center justify-center">
              <img
                src={activeImage || project.image}
                alt={project.title}
                className="w-full h-auto max-h-[250px] sm:max-h-[420px] object-contain"
              />
            </div>

            {/* Thumbnail Gallery Strip */}
            {gallery.length > 1 && (
              <div>
                <p className="text-[11px] sm:text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Tangkapan Layar Sistem (Klik untuk melihat):</span>
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-12 sm:w-24 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImage === img
                          ? 'border-indigo-600 ring-2 ring-indigo-400/30 scale-105'
                          : 'border-zinc-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Gambaran Proyek
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/50 border border-rose-200/80">
              <h4 className="text-xs sm:text-sm font-bold text-rose-950 mb-1">
                Tantangan / Problem:
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-950 mb-1">
                Solusi yang Diimplementasikan:
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Box */}
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200">
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-1">
              Arsitektur Alur Sistem
            </h4>
            <div className="font-mono text-xs sm:text-sm text-zinc-800 break-words leading-relaxed font-semibold">
              {project.architecture}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Poin Kunci & Keunggulan Teknis
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Metrik & Hasil Uji
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-zinc-200 ${project.colorTheme.lightBg}`}
                >
                  <div className={`text-xs sm:text-sm font-bold font-mono ${project.colorTheme.accentText}`}>{metric.value}</div>
                  <div className="text-[10px] text-zinc-600 font-medium mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Peek */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 truncate mr-2">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="font-semibold truncate">{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-mono text-zinc-700 font-medium transition-colors shrink-0"
                >
                  {copiedCode ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-950 text-zinc-200 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed shadow-xl border border-zinc-800">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Teknologi Terkait
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-end gap-3 sticky bottom-0 z-20">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-2xs transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
