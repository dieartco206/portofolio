import type { FC } from 'react';
import { experienceTimelineData } from '../data/skills';
import { Calendar, MapPin, Check } from 'lucide-react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-t border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200 inline-block mb-3">
            Rekam Jejak
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Pengalaman & Milestone
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Perjalanan saya dalam mengembangkan dan memelihara berbagai proyek software nyata.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-zinc-200 ml-3 sm:ml-4 space-y-10">
          {experienceTimelineData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Bullet Node */}
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-zinc-900 group-hover:scale-125 transition-transform" />

              {/* Content Box */}
              <div className="p-6 rounded-2xl bg-[#fafafa] border border-zinc-200 shadow-xs">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Calendar className="w-3 h-3 text-emerald-600" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Context */}
                <h3 className="text-lg font-bold text-zinc-950 mb-0.5">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-600 font-mono mb-3">
                  {item.companyOrContext}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/80">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-zinc-600 border border-zinc-200"
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
