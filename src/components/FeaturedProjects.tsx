import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedProjects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'Semua Proyek', value: 'all' },
    { label: 'Sistem Presensi & Biometrik', value: 'enterprise' },
    { label: 'Backend & Konkurensi Go', value: 'golang' },
    { label: 'FinTech & Bisnis', value: 'saas' },
    { label: 'Web & Desain', value: 'frontend' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-zinc-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Koleksi Proyek Produksi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Proyek yang Pernah Saya Bangun
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl leading-relaxed">
              Berikut adalah beberapa sistem dan aplikasi nyata yang saya kembangkan dari tahap perancangan database, arsitektur backend, hingga antarmuka pengguna.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-200/60 border border-zinc-200 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                  activeCategory === cat.value
                    ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
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
                className={`group bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-400 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5 mb-4">
                    {project.subtitle} • {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60"
                      >
                        <div className="text-xs font-bold text-zinc-900 font-mono">{metric.value}</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5 truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-600 border border-zinc-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 group-hover:text-emerald-700 shrink-0">
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
