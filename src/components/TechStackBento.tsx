import type { FC } from 'react';
import { skillGroupsData } from '../data/skills';
import { Server, Layout, Database, Terminal } from 'lucide-react';

export const TechStackBento: FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-brand-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Engineering Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Matriks Keahlian Rekayasa
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Perangkat dan teknologi yang saya kuasai dan gunakan secara aktif dalam ekosistem skala produksi.
          </p>
        </div>

        {/* 4-Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0f1116] border border-white/[0.08] hover:border-brand-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Group Title Header */}
                <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{group.title}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{group.subtitle}</p>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-sm text-zinc-200">{item.name}</span>
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141822] text-zinc-400 border border-white/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
