import { useEffect, useState, type FC } from 'react';
import type { Project } from '../types/portfolio';
import { X, Check, Copy, Terminal, Image as ImageIcon } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 z-10 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 bg-white sticky top-0 z-20">
          <div className="pr-3">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-zinc-950 tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              Peran: <strong className="text-zinc-800 font-semibold">{project.role}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-950 rounded-xl hover:bg-zinc-100 transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
          {/* Main Screenshot Stage */}
          <div className="space-y-3">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-950 max-h-[260px] sm:max-h-[440px] flex items-center justify-center">
              <img
                src={activeImage || project.image}
                alt={project.title}
                className="w-full h-auto max-h-[260px] sm:max-h-[440px] object-contain"
              />
            </div>

            {/* Thumbnail Strip with Clean Indicators */}
            {gallery.length > 1 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-zinc-700" />
                    <span>Tangkapan Layar Sistem ({gallery.length} Halaman)</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Klik untuk melihat detail
                  </span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-14 sm:w-28 sm:h-18 rounded-lg sm:rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImage === img
                          ? 'border-zinc-950 ring-2 ring-zinc-900/30 scale-102 opacity-100'
                          : 'border-zinc-200 opacity-60 hover:opacity-100'
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

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
              Gambaran Sistem
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-xs sm:text-sm font-bold text-zinc-950 mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Tantangan / Problem:</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-xs sm:text-sm font-bold text-zinc-950 mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Solusi Arsitektur:</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Box */}
          <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Arsitektur Alur Sistem</span>
            </h4>
            <div className="font-mono text-xs sm:text-sm text-zinc-200 break-words leading-relaxed font-semibold">
              {project.architecture}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
              Poin Kunci & Keunggulan Rekayasa
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <div className="w-4 h-4 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0 mt-0.5 border border-zinc-200">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
              Metrik Sistem & Skalabilitas
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">{metric.label}</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-zinc-950 mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Preview (if provided) */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Snippet Kode Produksi ({project.codeSnippet.filename})</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-900 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <span>{project.codeSnippet.filename}</span>
                  <span className="uppercase text-zinc-500">{project.codeSnippet.language}</span>
                </div>
                <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="pt-3 border-t border-zinc-100">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
              Stack Teknologi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
