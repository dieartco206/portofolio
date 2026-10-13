import { useState, type FC } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Code2 } from 'lucide-react';

export const FeaturedProjects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'Semua Proyek', value: 'all' },
    { label: 'Enterprise & Biometrik', value: 'enterprise' },
    { label: 'Golang & Concurrency', value: 'golang' },
    { label: 'SaaS & FinTech', value: 'saas' },
    { label: 'Frontend & Desain', value: 'frontend' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Studi Kasus Proyek Riil
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Setiap proyek dibangun dengan arsitektur production-grade: mengutamakan integritas data atomik, skalabilitas konkurensi, dan pengalaman pengguna presisi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#12151c] border border-white/[0.08] shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-brand-500 text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isHeroCard = project.featured;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-3xl bg-[#0f1116] border border-white/[0.08] hover:border-brand-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10 cursor-pointer overflow-hidden ${
                  isHeroCard ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Ambient Card Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/[0.03] group-hover:bg-brand-500/[0.08] rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/30">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Short Narrative */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                    {project.metrics.slice(0, 3).map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08]"
                      >
                        <div className="text-sm font-bold text-white font-mono">{metric.value}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5 truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip: Tags & Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 group-hover:text-brand-300 shrink-0">
                    <span>Kasus Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
