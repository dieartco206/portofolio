import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const FeaturedProjects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; activeColor: string }[] = [
    { label: 'Semua Proyek', value: 'all', activeColor: 'bg-zinc-900 text-white' },
    { label: 'Sistem Presensi & Biometrik', value: 'enterprise', activeColor: 'bg-emerald-600 text-white shadow-emerald-500/20' },
    { label: 'Backend & Konkurensi Go', value: 'golang', activeColor: 'bg-indigo-600 text-white shadow-indigo-500/20' },
    { label: 'FinTech & Bisnis', value: 'saas', activeColor: 'bg-amber-600 text-white shadow-amber-500/20' },
    { label: 'Web & Desain', value: 'frontend', activeColor: 'bg-rose-600 text-white shadow-rose-500/20' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-14 sm:py-24 bg-[#f8fafc] border-b border-zinc-200/80 mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 pb-6 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Koleksi Proyek Produksi</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
              Proyek yang Pernah Saya Bangun
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-2xl leading-relaxed">
              Berikut adalah beberapa sistem dan aplikasi nyata yang saya kembangkan dari tahap perancangan database, arsitektur backend, hingga antarmuka pengguna.
            </p>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-white border border-zinc-200 shadow-xs max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`whitespace-nowrap px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
                    isActive
                      ? `${cat.activeColor} shadow-md`
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious 2-Column Projects Grid with Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 ${project.colorTheme.cardBorder} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer overflow-hidden relative`}
              >
                {/* Top Colorful Gradient Ribbon */}
                <div className={`h-2.5 sm:h-3 w-full bg-gradient-to-r ${project.colorTheme.gradient}`} />

                {/* Screenshot Preview Image Container */}
                <div className="relative w-full h-44 sm:h-60 lg:h-64 bg-zinc-100 overflow-hidden border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating category tag on top of image */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold border backdrop-blur-md shadow-sm ${project.colorTheme.badgeBg}`}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {project.badge && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-800 bg-white/95 px-2.5 py-1 rounded-lg sm:rounded-xl border border-zinc-200 shadow-sm backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className={`text-base sm:text-xl lg:text-2xl font-black text-zinc-950 group-hover:${project.colorTheme.accentText} transition-colors tracking-tight leading-snug break-words`}>
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-mono mt-1 mb-3">
                      {project.subtitle} • <span className="text-zinc-800 font-bold">{project.role}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 sm:mb-5">
                      {project.description}
                    </p>
                  </div>

                  {/* Spacious 2x2 Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-zinc-200/80 ${project.colorTheme.lightBg} flex flex-col justify-between`}
                      >
                        <div className={`text-xs sm:text-sm font-bold font-mono ${project.colorTheme.accentText}`}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-zinc-600 font-medium mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-4 sm:px-6 lg:px-7 pb-4 sm:pb-5 pt-3 sm:pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 bg-zinc-50/60">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 overflow-hidden">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono bg-white text-zinc-700 border border-zinc-200 shadow-2xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${project.colorTheme.accentText} group-hover:translate-x-1 transition-transform shrink-0 self-end sm:self-auto`}>
                    <span>Detail & Foto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
