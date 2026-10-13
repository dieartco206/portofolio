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
      {/* Dark backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0e1117] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/[0.08] bg-[#12151c]/90 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/30">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-mono">
              Peran: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Ringkasan Sistem
            </h4>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Tantangan & Masalah</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Solusi Arsitektur</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Flow */}
          <div className="p-5 rounded-2xl bg-[#090b0f] border border-white/[0.08]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400 mb-2">
              Topologi Arsitektur
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Achievements & Highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Pencapaian Rekayasa Kunci
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Bento Row */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Metrik Kinerja Riil
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-lg font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-[11px] text-zinc-400 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Code Snippet Peek */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Cpu className="w-3.5 h-3.5 text-brand-400" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-brand-400" />
                      <span className="text-brand-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-2xl bg-[#06080a] border border-white/[0.08] overflow-x-auto text-xs font-mono text-zinc-300 leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#12151c]/90 border-t border-white/[0.08] flex items-center justify-end gap-3 sticky bottom-0 z-20 backdrop-blur-md">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 transition-colors"
          >
            Tutup
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-500 hover:bg-brand-400 text-black transition-colors"
          >
            Diskusi Sistem Serupa
          </a>
        </div>
      </div>
    </div>
  );
};
