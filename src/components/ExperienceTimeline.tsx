import type { FC } from 'react';
import { experienceTimelineData, educationData } from '../data/skills';
import { Calendar, MapPin, Check, Briefcase, GraduationCap, Building2, Layers, Award } from 'lucide-react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
            <span>Pengalaman Kerja & Pendidikan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
            Rekam Jejak Profesional
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
            Pengalaman kerja 4+ tahun dalam membangun sistem berskala produksi, platform e-commerce, RESTful API high-throughput, serta otomasi DevOps dan manajemen server Linux VPS live.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-200 ml-2 sm:ml-4 space-y-8 sm:space-y-12">
          {experienceTimelineData.map((item, index) => (
            <div key={index} className="relative pl-5 sm:pl-8 group">
              {/* Bullet Node */}
              <div className="absolute -left-[7px] sm:-left-[9px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-zinc-950 border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />

              {/* Content Box */}
              <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs hover:border-zinc-400/80 transition-all card-elevation">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-800">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Context */}
                <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-0.5">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-700 font-mono mb-3 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 shrink-0" />
                  <span>{item.companyOrContext}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0 mt-0.5 border border-zinc-200">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Project Highlights Breakdown (from CV) */}
                {item.projectHighlights && item.projectHighlights.length > 0 && (
                  <div className="mb-4 pt-4 border-t border-zinc-200/80">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-zinc-600" />
                      <span>Proyek & Modul yang Ditangani:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.projectHighlights.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-zinc-950">{proj.name}</h4>
                            {proj.tech && (
                              <p className="text-[10px] sm:text-[11px] font-mono font-medium text-zinc-500 mt-0.5 mb-1.5">
                                {proj.tech}
                              </p>
                            )}
                            <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed">
                              {proj.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60">
                  {item.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-white text-zinc-700 border border-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section from CV */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-200">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-zinc-700" />
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
              Pendidikan Formal
            </h3>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/90 card-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-base font-bold text-zinc-950">
                  {educationData.degree}
                </span>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {educationData.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                {educationData.campus}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-200">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-950 bg-white px-3 py-1.5 rounded-xl border border-zinc-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{educationData.grade}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
