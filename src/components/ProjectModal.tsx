import { useEffect, useState, useRef, type FC } from 'react';
import type { Project } from '../types/portfolio';
import { X, Check, Image as ImageIcon, ChevronLeft, ChevronRight, ExternalLink, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
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

  const getCleanTitle = (path?: string | null) => {
    if (!path) return '';
    const filename = path.split('/').pop() || '';
    return filename
      .replace(/\.png|\.jpg|\.jpeg/i, '')
      .replace(/^\d+[a-z]?_/, '')
      .replace(/_/g, ' ');
  };

  const currentPhotoTitle = getCleanTitle(activeImage || project?.image);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container with Scale & Slide Up Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0c0e17] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 z-10 max-h-[92vh] flex flex-col text-white"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-6 border-b border-white/[0.08] bg-[#0c0e17]/95 backdrop-blur-xl sticky top-0 z-30">
              <div className="pr-2 sm:pr-3 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.badge}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-zinc-900 text-zinc-300 border border-white/10">
                    {gallery.length} Screenshot
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-xl lg:text-2xl font-black text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-0.5">
                  Peran: <strong className="text-white font-semibold">{project.role}</strong>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors shrink-0"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
              {/* Main Interactive Screenshot Carousel Stage */}
              <div className="space-y-3">
                <div
                  className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black min-h-[220px] sm:min-h-[420px] max-h-[300px] sm:max-h-[500px] flex items-center justify-center group select-none"
                  onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                  onTouchEnd={(e) => {
                    if (touchStartX === null) return;
                    const diff = touchStartX - e.changedTouches[0].clientX;
                    if (diff > 40) handleNext();
                    else if (diff < -40) handlePrev();
                    setTouchStartX(null);
                  }}
                >
                  {/* Active Image with Fade In Motion */}
                  <motion.img
                    key={activeImage || project.image}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    src={activeImage || project.image}
                    alt={currentPhotoTitle || project.title}
                    decoding="async"
                    className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-contain"
                  />

                  {/* Navigation Arrow: Previous (Left) */}
                  {gallery.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-xl transition-colors z-20"
                      aria-label="Foto sebelumnya"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  )}

                  {/* Navigation Arrow: Next (Right) */}
                  {gallery.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-colors z-20"
                      aria-label="Foto berikutnya"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  )}

                  {/* Floating Counter & Caption Badge */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center px-4 pointer-events-none z-20">
                    <div className="bg-black/85 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-white/15 shadow-xl max-w-full">
                      <span className="font-bold text-blue-400 shrink-0">
                        {safeIndex + 1} / {gallery.length}
                      </span>
                      {currentPhotoTitle && (
                        <>
                          <span className="text-zinc-600">•</span>
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
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white backdrop-blur-xs border border-white/20 shadow-xs transition-all z-20"
                    title="Buka gambar ukuran penuh di tab baru"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Thumbnail Strip with Explicit Controls */}
                {gallery.length > 1 && (
                  <div className="bg-zinc-900/60 p-3 rounded-2xl border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2 px-1">
                      <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                        <span>Galeri Screenshots ({gallery.length})</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-zinc-500 hidden sm:inline">
                          Geser Galeri:
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => scrollThumbnails('left')}
                          className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-zinc-300 transition-colors"
                          aria-label="Geser thumbnail ke kiri"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => scrollThumbnails('right')}
                          className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-zinc-300 transition-colors"
                          aria-label="Geser thumbnail ke kanan"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    <div
                      ref={thumbnailContainerRef}
                      className="flex items-center gap-2.5 overflow-x-auto py-1 px-1 scroll-smooth no-scrollbar"
                      style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                      {gallery.map((img, idx) => {
                        const isSelected = (activeImage || project.image) === img;
                        const thumbTitle = getCleanTitle(img);
                        return (
                          <motion.button
                            key={idx}
                            ref={isSelected ? activeThumbRef : null}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() => setActiveImage(img)}
                            className={`relative shrink-0 w-20 sm:w-28 h-14 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                              isSelected
                                ? 'border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] ring-2 ring-blue-500/30'
                                : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                            }`}
                            aria-label={`Pilih foto ${idx + 1}`}
                          >
                            <img
                              src={img}
                              alt={thumbTitle || `Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-black/75 text-white text-[9px] font-medium px-1 py-0.5 truncate pointer-events-none">
                              {idx + 1}. {thumbTitle}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Ringkasan Sistem
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <h4 className="text-xs sm:text-sm font-bold text-rose-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]" />
                    <span>Tantangan Teknis:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span>Solusi Rekayasa:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Pipeline Box */}
              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-blue-400" />
                  <span>Arsitektur & Alur Sistem</span>
                </h4>
                <div className="text-xs sm:text-sm text-zinc-300 break-words leading-relaxed font-mono">
                  {project.architecture}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5">
                  Fitur Utama
                </h4>
                <div className="space-y-2">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5">
                  Spesifikasi & Kinerja
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-2 sm:p-3 rounded-xl bg-zinc-900/80 border border-white/[0.08]">
                      <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-zinc-400">{metric.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-blue-400 mt-0.5 truncate">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-3 border-t border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Teknologi
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs bg-zinc-900 text-zinc-200 border border-white/10 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 border-t border-white/[0.08] bg-zinc-950/90 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
                  Foto {safeIndex + 1} dari {gallery.length}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                {gallery.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handlePrev}
                      className="flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-bold border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 transition-colors text-center whitespace-nowrap"
                    >
                      ← Sebelumnya
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleNext}
                      className="flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/30 transition-colors text-center whitespace-nowrap"
                    >
                      Selanjutnya →
                    </motion.button>
                  </>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-800 text-white hover:bg-zinc-700 border border-white/10 transition-colors whitespace-nowrap"
                >
                  Tutup
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
