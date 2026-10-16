import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers } from 'lucide-react';

export const FeaturedProjects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: 'Semua Proyek', value: 'all', count: projectsData.length },
    { label: 'Enterprise & Presensi', value: 'enterprise', count: projectsData.filter(p => p.category === 'enterprise').length },
    { label: 'FinTech & Donasi', value: 'golang', count: projectsData.filter(p => p.category === 'golang').length },
    { label: 'E-Commerce & Supply', value: 'saas', count: projectsData.filter(p => p.category === 'saas').length },
    { label: 'HealthTech & Web', value: 'frontend', count: projectsData.filter(p => p.category === 'frontend').length },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  const getCategoryBadgeClass = (category: ProjectCategory) => {
    switch (category) {
      case 'enterprise':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200';
      case 'golang':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      case 'saas':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'frontend':
        return 'text-rose-800 bg-rose-50 border-rose-200';
      default:
        return 'text-zinc-700 bg-zinc-100 border-zinc-200';
    }
  };

  return (
    <section id="projects" className="py-14 sm:py-24 bg-[#f8fafc] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 pb-6 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Sistem Skala Produksi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
              Proyek yang Pernah Saya Bangun
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-2xl leading-relaxed">
              Arsitektur sistem perangkat lunak nyata yang dibangun dari perancangan database relasional, logika backend mikroservis, hingga antarmuka pengguna interaktif.
            </p>
          </div>

          {/* Clean Segmented Tab Control with Vibrant Active State */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 p-1 rounded-xl bg-white border border-zinc-200 shadow-2xs max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`whitespace-nowrap px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-medium transition-all shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 font-semibold'
                      : 'text-zinc-600 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 text-[10px] font-mono px-1.5 py-0.2 rounded ${isActive ? 'bg-blue-700 text-blue-100' : 'bg-zinc-100 text-zinc-500'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const galleryCount = project.gallery?.length || 1;
            const badgeClass = getCategoryBadgeClass(project.category);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-blue-400/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden relative card-elevation"
              >
                {/* Modern Browser Frame Header with Authentic Mac Traffic Lights */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-50 border-b border-zinc-200/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/30" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-500 max-w-[210px] sm:max-w-xs truncate">
                    <span className="text-blue-500 font-bold">app://</span>
                    <span className="text-zinc-800 font-medium truncate">{project.id}.production</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {project.badge && (
                      <span className="text-[10px] font-mono font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Screenshot Preview with Clean Framing */}
                <div className="relative w-full h-48 sm:h-64 bg-zinc-950 overflow-hidden border-b border-zinc-100 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Floating Screenshot Count Pill */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-mono font-semibold text-zinc-900 bg-white/95 px-2.5 py-1 rounded-lg border border-zinc-200 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                      <span>{galleryCount} Foto UI Asli</span>
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${badgeClass}`}>
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        Peran: <strong className="text-zinc-700 font-semibold">{project.role}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technical Metric Badges with Colorful Values */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx} className="p-2 sm:p-2.5 rounded-xl bg-zinc-50/80 border border-zinc-200/80 group-hover:bg-blue-50/40 group-hover:border-blue-200/60 transition-colors">
                          <div className="text-[10px] font-mono text-zinc-500 uppercase">{metric.label}</div>
                          <div className="text-xs sm:text-sm font-bold font-mono text-blue-700 mt-0.5">{metric.value}</div>
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
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-50 text-zinc-700 border border-zinc-200/80 font-medium group-hover:border-zinc-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-50 border border-zinc-100">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 underline underline-offset-4 decoration-blue-200 group-hover:decoration-blue-600 transition-all">
                      <span>Detail Sistem</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with Full Real Gallery */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
