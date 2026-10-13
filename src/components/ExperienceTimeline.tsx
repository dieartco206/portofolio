import type { FC } from 'react';
import { experienceTimelineData, educationData } from '../data/skills';
import { Calendar, MapPin, Check, Briefcase, GraduationCap, Building2, Layers, Award } from 'lucide-react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pengalaman Kerja & Pendidikan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Rekam Jejak Profesional
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Pengalaman kerja 4+ tahun dalam membangun sistem berskala produksi, platform e-commerce, RESTful API high-throughput, serta otomasi DevOps dan manajemen server Linux VPS live.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-indigo-200 ml-3 sm:ml-4 space-y-12">
          {experienceTimelineData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Bullet Node with gradient */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 border-2 border-white shadow-md group-hover:scale-125 transition-transform" />

              {/* Content Box */}
              <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Context */}
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 mb-0.5">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-700 font-mono mb-3 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-indigo-500" />
                  <span>{item.companyOrContext}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Project Highlights Breakdown (from CV) */}
                {item.projectHighlights && item.projectHighlights.length > 0 && (
                  <div className="mb-5 pt-4 border-t border-zinc-200/80">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Proyek & Modul Utama yang Ditangani:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.projectHighlights.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-indigo-300 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-zinc-950">{proj.name}</h4>
                            {proj.tech && (
                              <p className="text-[11px] font-mono font-semibold text-indigo-600 mt-0.5 mb-1.5">
                                {proj.tech}
                              </p>
                            )}
                            <p className="text-xs text-zinc-600 leading-relaxed">
                              {proj.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white text-zinc-700 border border-zinc-200 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-14 pt-10 border-t border-zinc-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 border border-indigo-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
                    Pendidikan Formal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>{educationData.grade}</span>
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                  {educationData.period}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base font-bold text-zinc-800 mb-2 flex flex-wrap items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{educationData.campus}</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                {educationData.status}
              </span>
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
              {educationData.description}
            </p>

            <div className="space-y-2 pt-3 border-t border-indigo-100/80">
              {educationData.highlights.map((hl: string, hIdx: number) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
