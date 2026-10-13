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
    <section id="projects" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-zinc-200/80 mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Koleksi Proyek Produksi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Proyek yang Pernah Saya Bangun
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl leading-relaxed">
              Berikut adalah beberapa sistem dan aplikasi nyata yang saya kembangkan dari tahap perancangan database, arsitektur backend, hingga antarmuka pengguna.
            </p>
          </div>

          {/* Filter Pills with Colors */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-zinc-200 shadow-xs shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group bg-white rounded-3xl border border-zinc-200/90 ${project.colorTheme.cardBorder} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden relative ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Top Colorful Gradient Ribbon */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${project.colorTheme.gradient}`} />

                <div className="p-6 sm:p-7">
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.colorTheme.badgeBg}`}>
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200/60">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-lg sm:text-xl font-extrabold text-zinc-950 group-hover:${project.colorTheme.accentText} transition-colors tracking-tight`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1 mb-4">
                    {project.subtitle} • <span className="text-zinc-700 font-semibold">{project.role}</span>
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Pills with Colorful Accents */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl border border-zinc-200/80 ${project.colorTheme.lightBg}`}
                      >
                        <div className={`text-xs font-bold font-mono ${project.colorTheme.accentText}`}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-zinc-600 font-medium mt-0.5 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3 bg-zinc-50/50">
                  <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-zinc-700 border border-zinc-200 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`inline-flex items-center gap-1 text-xs font-bold ${project.colorTheme.accentText} group-hover:translate-x-0.5 transition-transform shrink-0`}>
                    <span>Lihat Kasus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
