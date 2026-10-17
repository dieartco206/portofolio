import { useEffect, useState, useRef, type FC } from 'react';
import type { Project } from '../types/portfolio';
import { X, Check, Copy, Terminal, Image as ImageIcon, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbRef = useRef<HTMLButtonElement>(null);

  const gallery = project?.gallery && project.gallery.length > 0 ? project.gallery : (project ? [project.image] : []);
  const currentIndex = gallery.indexOf(activeImage || gallery[0] || '');
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  useEffect(() => {
    if (project) {
      setActiveImage(project.image || (project.gallery && project.gallery[0]) || null);
    }
  }, [project]);

  // Auto-scroll active thumbnail into view smoothly
  useEffect(() => {
    if (activeThumbRef.current && thumbnailContainerRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeImage]);

  const handleNext = () => {
    if (gallery.length <= 1) return;
    const nextIdx = (safeIndex + 1) % gallery.length;
    setActiveImage(gallery[nextIdx]);
  };

  const handlePrev = () => {
    if (gallery.length <= 1) return;
    const prevIdx = (safeIndex - 1 + gallery.length) % gallery.length;
    setActiveImage(gallery[prevIdx]);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({
        left: direction === 'right' ? 280 : -280,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, safeIndex, gallery.length]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getCleanTitle = (path?: string | null) => {
    if (!path) return '';
    const filename = path.split('/').pop() || '';
    return filename
      .replace(/\.png|\.jpg|\.jpeg/i, '')
      .replace(/^\d+[a-z]?_/, '')
      .replace(/_/g, ' ');
  };

  const currentPhotoTitle = getCleanTitle(activeImage || project.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 z-10 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-6 border-b border-zinc-200 bg-white sticky top-0 z-30">
          <div className="pr-2 sm:pr-3 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  {project.badge}
                </span>
              )}
              <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                {gallery.length} Screenshot
              </span>
            </div>
            <h3 className="text-[15px] sm:text-xl lg:text-2xl font-black text-zinc-950 tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-0.5">
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
          {/* Main Interactive Screenshot Carousel Stage */}
          <div className="space-y-3">
            <div
              className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-950 min-h-[220px] sm:min-h-[420px] max-h-[300px] sm:max-h-[500px] flex items-center justify-center group select-none"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return;
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (diff > 40) handleNext(); // swipe left -> slide to right / next
                else if (diff < -40) handlePrev(); // swipe right -> slide to left / prev
                setTouchStartX(null);
              }}
            >
              {/* Active Image */}
              <img
                src={activeImage || project.image}
                alt={currentPhotoTitle || project.title}
                key={activeImage}
                decoding="async"
                className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-contain transition-opacity duration-200"
              />

              {/* Navigation Arrow: Previous (Left) */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110 active:scale-90 z-20"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Navigation Arrow: Next (Right) */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110 active:scale-90 z-20"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Floating Counter & Caption Badge */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center px-4 pointer-events-none z-20">
                <div className="bg-black/80 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-white/15 shadow-lg max-w-full">
                  <span className="font-bold text-blue-400 shrink-0">
                    {safeIndex + 1} / {gallery.length}
                  </span>
                  {currentPhotoTitle && (
                    <>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-200 truncate">{currentPhotoTitle}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Open Full Size Link in new tab */}
              <a
                href={activeImage || project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs border border-white/20 shadow-xs transition-all z-20"
                title="Buka gambar ukuran penuh di tab baru"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Thumbnail Strip with Explicit Left/Right Scroll Controls */}
            {gallery.length > 1 && (
              <div className="bg-zinc-50/80 p-3 rounded-2xl border border-zinc-200/90">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Galeri ({gallery.length})</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-zinc-500 hidden sm:inline">
                      Navigasi:
                    </span>
                    {/* Scroll Left Button */}
                    <button
                      type="button"
                      onClick={() => scrollThumbnails('left')}
                      className="p-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 text-zinc-700 active:scale-95 transition-all shadow-2xs"
                      aria-label="Geser daftar ke kiri"
                      title="Geser ke kiri"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {/* Scroll Right Button */}
                    <button
                      type="button"
                      onClick={() => scrollThumbnails('right')}
                      className="p-1.5 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 active:scale-95 transition-all shadow-2xs font-bold"
                      aria-label="Geser daftar ke kanan"
                      title="Geser ke kanan"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Smooth Horizontal Scrollable Thumbnail Strip */}
                <div
                  ref={thumbnailContainerRef}
                  className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 scroll-smooth"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#93c5fd #f1f5f9',
                  }}
                >
                  {gallery.map((img, idx) => {
                    const isSelected = (activeImage || gallery[0]) === img;
                    const thumbTitle = getCleanTitle(img);
                    return (
                      <button
                        key={idx}
                        ref={isSelected ? activeThumbRef : undefined}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all text-left group ${
                          isSelected
                            ? 'border-blue-600 ring-4 ring-blue-500/25 scale-102 opacity-100 shadow-md'
                            : 'border-zinc-200 opacity-60 hover:opacity-100 hover:border-zinc-300'
                        }`}
                        title={thumbTitle}
                      >
                        <img
                          src={img}
                          alt={thumbTitle || `Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] font-medium px-1 py-0.5 truncate pointer-events-none">
                          {idx + 1}. {thumbTitle}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
              Ringkasan
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-rose-50/60 border border-rose-200/80">
              <h4 className="text-xs sm:text-sm font-bold text-rose-950 mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Tantangan:</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Solusi:</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Box */}
          <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Alur Sistem</span>
            </h4>
            <div className="text-xs sm:text-sm text-zinc-200 break-words leading-relaxed font-semibold">
              {project.architecture}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2.5">
              Fitur Utama
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    <Check className="w-2.5 h-2.5 text-emerald-700" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2.5">
              Spesifikasi & Fitur
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-2 sm:p-3 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-blue-700">{metric.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-blue-900 mt-0.5 truncate">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Preview (if provided) */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5 shrink-0">
                  <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Contoh Kode</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors shrink-0"
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
                <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-900 border-b border-zinc-800 text-[11px] font-medium text-zinc-400">
                  <span>{project.codeSnippet.filename}</span>
                  <span className="uppercase text-zinc-500 font-semibold">{project.codeSnippet.language}</span>
                </div>
                <pre className="p-4 text-xs font-code text-emerald-400 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="pt-3 border-t border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
              Teknologi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 text-zinc-800 border border-zinc-200 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Quick Navigation Tips */}
        <div className="p-3.5 sm:p-5 border-t border-zinc-200 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <span className="inline-block px-1.5 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700 font-bold">←</span>
            <span className="inline-block px-1.5 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700 font-bold">→</span>
            <span>Navigasi keyboard atau klik tombol</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-bold border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors text-center whitespace-nowrap"
                >
                  ← Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-colors text-center whitespace-nowrap"
                >
                  Selanjutnya →
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-colors whitespace-nowrap"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
