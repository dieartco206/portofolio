import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers } from 'lucide-react';
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
    <section id="projects" className="py-14 sm:py-20 bg-[#f8fafc] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 pb-5 border-b border-zinc-200"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-2.5 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Portofolio Proyek</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
              Daftar Proyek
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl leading-relaxed">
              Aplikasi web, backend API, dan sistem manajemen yang telah dikembangkan.
            </p>
          </div>

          {/* Clean Segmented Tab Control with Fluid Gliding Spring Motion */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 p-1 rounded-xl bg-white border border-zinc-200 shadow-2xs max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative whitespace-nowrap px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-medium transition-colors shrink-0 z-10 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-600 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm shadow-blue-500/25 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[10px] font-semibold px-1.5 py-0.2 rounded transition-colors ${
                      isActive ? 'bg-blue-700 text-blue-100' : 'bg-zinc-100 text-zinc-500'
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
                  className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-blue-400/80 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl cursor-pointer overflow-hidden relative card-elevation"
                >
                  {/* Screenshot Preview with Clean Framing */}
                  <div className="relative w-full h-48 sm:h-64 bg-zinc-950 overflow-hidden border-b border-zinc-100 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Subtle Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Clean Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-xs backdrop-blur-md bg-white/95 text-zinc-900 border-zinc-200/90">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] font-bold text-blue-800 bg-blue-50/95 backdrop-blur-md border border-blue-200 px-2.5 py-1 rounded-lg shadow-xs">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Photo count indicator if gallery has multiple photos */}
                    {galleryCount > 1 && (
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[11px] font-semibold text-zinc-900 bg-white/95 px-2.5 py-1 rounded-lg border border-zinc-200 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                          <span>{galleryCount} Foto</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-zinc-500">
                          Peran: <strong className="text-zinc-700 font-semibold">{project.role}</strong>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium mt-0.5 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technical Metric Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.metrics.slice(0, 2).map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2 sm:p-2.5 rounded-xl bg-zinc-50/80 border border-zinc-200/80 group-hover:bg-blue-50/40 group-hover:border-blue-200/60 transition-colors"
                          >
                            <div className="text-[10px] font-semibold text-zinc-500 uppercase">{metric.label}</div>
                            <div className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action Link */}
                    <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] bg-zinc-50 text-zinc-700 border border-zinc-200/80 font-medium group-hover:border-zinc-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] text-zinc-400 bg-zinc-50 border border-zinc-100 font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 underline underline-offset-4 decoration-blue-200 group-hover:decoration-blue-600 transition-all">
                        <span>Detail Sistem</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
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
