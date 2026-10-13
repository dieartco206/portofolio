import type { FC } from 'react';
import { experienceTimelineData } from '../data/skills';
import { Calendar, MapPin, Check, Briefcase } from 'lucide-react';

export const ExperienceTimeline: FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Pengalaman</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Perjalanan & Milestone
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Perjalanan saya dalam mengembangkan dan memelihara berbagai proyek software nyata.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-indigo-200 ml-3 sm:ml-4 space-y-10">
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
                <p className="text-xs sm:text-sm font-semibold text-indigo-700 font-mono mb-3">
                  {item.companyOrContext}
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

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-zinc-700 border border-zinc-200 shadow-2xs"
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
