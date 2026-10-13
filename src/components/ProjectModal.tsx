import { useEffect, useState, type FC } from 'react';
import { X, Check, Copy, CheckCheck, Cpu, AlertCircle, ShieldCheck } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-200 bg-white sticky top-0 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded-md text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              Peran: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Gambaran Proyek
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs mb-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Masalah & Latar Belakang</span>
              </div>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Solusi yang Dibangun</span>
              </div>
              <p className="text-xs text-emerald-900/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
              Alur & Topologi Arsitektur
            </h4>
            <p className="text-xs text-zinc-700 font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
              Poin Penting Implementasi
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Peek */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600">
                  <Cpu className="w-3.5 h-3.5 text-zinc-700" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 hover:bg-zinc-200 text-xs font-mono text-zinc-700 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-200 overflow-x-auto text-xs font-mono leading-relaxed shadow-inner">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Teknologi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-end gap-2.5 sticky bottom-0 z-20">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors"
          >
            Tutup
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
          >
            Diskusikan Proyek Serupa
          </a>
        </div>
      </div>
    </div>
  );
};
