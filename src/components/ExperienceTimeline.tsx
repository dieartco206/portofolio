import type { FC } from 'react';
import { experienceTimelineData, educationData } from '../data/skills';
import { Calendar, MapPin, Check, Briefcase, GraduationCap, Building2, Layers, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-24 bg-[#090a0f] border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Pengalaman & Rekam Jejak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
            Pengalaman 4+ tahun dalam pengembangan aplikasi web, backend API, dan pengelolaan server VPS.
          </p>
        </motion.div>

        {/* Timeline Items with Smooth Slide-in */}
        <div className="relative border-l-2 border-blue-500/30 ml-2 sm:ml-4 space-y-8 sm:space-y-12">
          {experienceTimelineData.map((item, index) => {
            const isLatest = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-5 sm:pl-8 group"
              >
                {/* Glowing Laser Bullet Node */}
                <div
                  className={`absolute -left-[7px] sm:-left-[9px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#090a0f] shadow-lg group-hover:scale-125 transition-transform ${
                    isLatest
                      ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] ring-4 ring-emerald-500/20'
                      : 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] ring-4 ring-blue-500/20'
                  }`}
                />

                {/* Content Box in Dark Luxury */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-blue-500/40 transition-all luxury-card"
                >
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-950/80 border border-blue-500/30 text-blue-400 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-zinc-400 font-medium">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Role & Context */}
                  <h3 className="text-base sm:text-xl font-bold text-white mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-3 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                    <span>{item.companyOrContext}</span>
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Highlights Breakdown (from CV) */}
                  {item.projectHighlights && item.projectHighlights.length > 0 && (
                    <div className="mb-4 pt-4 border-t border-white/[0.08]">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        <span>Proyek Terkait:</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.projectHighlights.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3.5 rounded-xl bg-zinc-950/70 border border-white/[0.06] hover:border-blue-500/30 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <h4 className="text-xs font-bold text-white">{proj.name}</h4>
                              {proj.tech && (
                                <p className="text-[10px] sm:text-[11px] font-semibold text-blue-400 mt-0.5 mb-1.5">
                                  {proj.tech}
                                </p>
                              )}
                              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                                {proj.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {item.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] bg-zinc-950 text-zinc-300 border border-white/[0.08] hover:border-white/20 font-medium transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section from CV with Warm Amber Accent in Dark Luxury */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08]"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Pendidikan Formal
            </h3>
          </div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/20 luxury-card flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-base font-bold text-white">
                  {educationData.degree}
                </span>
                <span className="text-xs font-semibold text-zinc-300 bg-zinc-950 px-2 py-0.5 rounded border border-white/10">
                  {educationData.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                {educationData.campus}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-white/[0.08]">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/30 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{educationData.grade}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
