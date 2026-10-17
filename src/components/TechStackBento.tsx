import type { FC } from 'react';
import { skillGroupsData } from '../data/skills';
import { Server, Layout, Database, Cloud, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const TechStackBento: FC = () => {
  const getGroupVisuals = (id: string) => {
    switch (id) {
      case 'backend':
        return {
          icon: <Server className="w-5 h-5 text-emerald-600" />,
          cardBg: 'bg-white hover:border-emerald-300',
          headerBg: 'bg-emerald-50/70 border-emerald-200/80',
          badge: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
          tag: 'bg-emerald-50/50 text-emerald-900 border-emerald-200/70',
        };
      case 'frontend':
        return {
          icon: <Layout className="w-5 h-5 text-blue-600" />,
          cardBg: 'bg-white hover:border-blue-300',
          headerBg: 'bg-blue-50/70 border-blue-200/80',
          badge: 'bg-blue-100/80 text-blue-800 border-blue-200',
          tag: 'bg-blue-50/50 text-blue-900 border-blue-200/70',
        };
      case 'database':
        return {
          icon: <Database className="w-5 h-5 text-amber-600" />,
          cardBg: 'bg-white hover:border-amber-300',
          headerBg: 'bg-amber-50/70 border-amber-200/80',
          badge: 'bg-amber-100/80 text-amber-800 border-amber-200',
          tag: 'bg-amber-50/50 text-amber-900 border-amber-200/70',
        };
      case 'devops':
      default:
        return {
          icon: <Cloud className="w-5 h-5 text-purple-600" />,
          cardBg: 'bg-white hover:border-purple-300',
          headerBg: 'bg-purple-50/70 border-purple-200/80',
          badge: 'bg-purple-100/80 text-purple-800 border-purple-200',
          tag: 'bg-purple-50/50 text-purple-900 border-purple-200/70',
        };
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-24 bg-[#fafbfc] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
            Keahlian Teknis
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
            Teknologi yang digunakan dalam pengembangan sistem produksi harian.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered In-View Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillGroupsData.map((group, idx) => {
            const visual = getGroupVisuals(group.id);
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 sm:p-6 lg:p-7 rounded-2xl border border-zinc-200/90 shadow-2xs transition-shadow duration-300 hover:shadow-lg card-elevation flex flex-col justify-between ${visual.cardBg}`}
              >
                <div>
                  {/* Title Bar */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100">
                    <div className={`p-2.5 sm:p-3 rounded-xl border shadow-2xs ${visual.headerBg}`}>
                      {visual.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                        {group.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium">{group.subtitle}</p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3 sm:p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80 hover:border-zinc-300 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                          <span className="font-bold text-xs sm:text-sm text-zinc-950">{item.name}</span>
                          <span className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded border ${visual.badge}`}>
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed mb-2.5">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-0.5 rounded text-[10px] font-medium border shadow-2xs ${visual.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
