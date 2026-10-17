import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers, Sparkles, CheckCircle2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FeaturedProjects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: 'Semua', value: 'all', count: projectsData.length },
    { label: 'Enterprise', value: 'enterprise', count: projectsData.filter(p => p.category === 'enterprise').length },
    { label: 'FinTech', value: 'golang', count: projectsData.filter(p => p.category === 'golang').length },
    { label: 'E-Commerce', value: 'saas', count: projectsData.filter(p => p.category === 'saas').length },
    { label: 'HealthTech', value: 'frontend', count: projectsData.filter(p => p.category === 'frontend').length },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  const flagshipProject = activeCategory === 'all' ? filteredProjects[0] : null;
  const standardProjects = activeCategory === 'all' ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-[#0c0e17] border-b border-zinc-200/80 dark:border-white/[0.08] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5 pb-6 border-b border-zinc-200 dark:border-white/[0.08]"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Portofolio Rekayasa Perangkat Lunak</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Koleksi Proyek Produksi
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-xl leading-relaxed">
              Arsitektur aplikasi web, API backend terstruktur, dan platform interaktif yang dikembangkan secara hulu-hilir.
            </p>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 p-1 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-lg max-w-full backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative whitespace-nowrap px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-medium transition-colors shrink-0 z-10 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-zinc-200 hover:bg-blue-50/60 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-sm shadow-blue-500/25 dark:shadow-[0_0_15px_rgba(37,99,235,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[10px] font-semibold px-1.5 py-0.2 rounded transition-colors ${
                      isActive ? 'bg-blue-700 text-blue-100' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 1. Flagship Spotlight Showcase (Shown when 'Semua' tab is active) */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-12"
          >
            <div
              onClick={() => setSelectedProject(flagshipProject)}
              className="group bg-white dark:bg-zinc-900/70 rounded-3xl border border-zinc-200/90 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-blue-500/50 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Big Flagship Screenshot Preview */}
              <div className="lg:col-span-7 relative bg-zinc-950 overflow-hidden min-h-[260px] sm:min-h-[360px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-white/[0.08]">
                <img
                  src={flagshipProject.image}
                  alt={flagshipProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Proyek Utama</span>
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-white/95 dark:bg-zinc-900/90 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 backdrop-blur-md shadow-sm">
                    {flagshipProject.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>{flagshipProject.gallery?.length || 1} Foto Galeri</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial System Highlights */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Peran: <span className="text-zinc-900 dark:text-white">{flagshipProject.role}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 mb-4">
                    {flagshipProject.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {flagshipProject.description}
                  </p>

                  {/* Bullet Highlights with Clean Checkmarks */}
                  <div className="space-y-2 mb-6">
                    {flagshipProject.keyHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA Button */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/[0.08] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span>Lihat Detail & Screenshots</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Balanced Grid of Remaining Projects (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {standardProjects.map((project, idx) => {
              const galleryCount = project.gallery?.length || 1;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-zinc-900/60 rounded-2xl border border-zinc-200/90 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 luxury-card cursor-pointer overflow-hidden relative shadow-sm hover:shadow-xl"
                >
                  {/* Clean Framed Media Container with 16:10 Aspect Ratio */}
                  <div className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden border-b border-zinc-100 dark:border-white/[0.06] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-xs backdrop-blur-md bg-white/95 dark:bg-zinc-900/90 text-zinc-900 dark:text-white border-zinc-200 dark:border-white/10">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] font-bold text-blue-800 dark:text-blue-300 bg-blue-50/95 dark:bg-blue-500/20 backdrop-blur-md border border-blue-200 dark:border-blue-500/30 px-2 py-0.5 rounded-lg">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Photo Count Badge */}
                    {galleryCount > 1 && (
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-200 bg-white/95 dark:bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-white/10 shadow-sm backdrop-blur-md flex items-center gap-1.5">
                          <span>{galleryCount} Foto</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                          {project.role}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 mb-2.5 line-clamp-1">
                        {project.subtitle}
                      </p>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Clean Impact Metric Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.metrics.slice(0, 2).map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-50/80 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20"
                          >
                            <span>{metric.label}:</span>
                            <strong className="font-bold text-blue-900 dark:text-blue-200">{metric.value}</strong>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action Link */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/[0.08] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900 font-medium">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Detail</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal with Full Real Gallery */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
