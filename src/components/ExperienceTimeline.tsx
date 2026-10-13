import type { FC } from 'react';
import { experienceTimelineData } from '../data/skills';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#08090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Perjalanan & Rekam Jejak
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Pengalaman dalam memimpin implementasi sistem produksi dan arsitektur perangkat lunak.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 space-y-12">
          {experienceTimelineData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090b] border-2 border-brand-400 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0f1116] border border-white/[0.08] hover:border-brand-500/30 transition-all">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-emerald-400 font-mono mb-4">
                  {item.companyOrContext}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
