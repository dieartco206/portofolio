import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers, Globe } from 'lucide-react';
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

  return (
    <section id="projects" className="py-14 sm:py-24 bg-[#0c0e17] border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-6 border-b border-white/[0.08]"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Portofolio Proyek</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Daftar Proyek Pilihan
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
              Sistem web produksi, arsitektur backend API, dan aplikasi enterprise yang telah dideploy.
            </p>
          </div>

          {/* Clean Segmented Tab Control in Dark Luxury */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 p-1 rounded-xl bg-zinc-900/90 border border-white/10 shadow-lg max-w-full backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative whitespace-nowrap px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-colors shrink-0 z-10 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[10px] font-semibold px-1.5 py-0.2 rounded transition-colors ${
                      isActive ? 'bg-blue-700/80 text-blue-100' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2-Column Responsive Projects Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const galleryCount = project.gallery?.length || 1;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-zinc-900/60 rounded-2xl border border-white/[0.08] hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 luxury-card cursor-pointer overflow-hidden relative shadow-2xl"
                >
                  {/* Browser Chrome Header Mockup */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-950/80 border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-zinc-900 border border-white/[0.06] text-[10px] text-zinc-400 font-mono truncate max-w-[200px]">
                      <Globe className="w-3 h-3 text-zinc-500 shrink-0" />
                      <span className="truncate">{project.title.toLowerCase().replace(/\s+/g, '-')}.local</span>
                    </div>
                    <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Screenshot Preview with Clean Dark Framing */}
                  <div className="relative w-full h-48 sm:h-64 bg-zinc-950 overflow-hidden border-b border-white/[0.06] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Subtle Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Badge over photo */}
                    {project.badge && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="text-[10px] font-bold text-white bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-lg">
                          {project.badge}
                        </span>
                      </div>
                    )}

                    {/* Photo count indicator if gallery has multiple photos */}
                    {galleryCount > 1 && (
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[11px] font-semibold text-zinc-200 bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-white/10 shadow-lg backdrop-blur-md flex items-center gap-1.5">
                          <span>{galleryCount} Foto</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/[0.06] text-zinc-300 border border-white/10">
                          Peran: <strong className="text-white font-bold">{project.role}</strong>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium mt-0.5 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technical Metric Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.metrics.slice(0, 2).map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2.5 sm:p-3 rounded-xl bg-zinc-950/60 border border-white/[0.08] group-hover:border-blue-500/30 transition-colors"
                          >
                            <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">{metric.label}</div>
                            <div className="text-xs sm:text-sm font-bold text-blue-400 mt-0.5">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action Link */}
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] bg-zinc-900 text-zinc-300 border border-white/[0.08] font-medium group-hover:border-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] text-zinc-500 bg-zinc-900 border border-white/[0.06] font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-bold text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Detail Sistem</span>
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
