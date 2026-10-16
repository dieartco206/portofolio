import type { FC } from 'react';
import { skillGroupsData } from '../data/skills';
import { Server, Layout, Database, Terminal, Cpu } from 'lucide-react';

export const TechStackBento: FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-4 h-4 text-zinc-900" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-zinc-900" />;
      case 'Database':
        return <Database className="w-4 h-4 text-zinc-900" />;
      case 'Terminal':
      default:
        return <Terminal className="w-4 h-4 text-zinc-900" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-zinc-500" />
            <span>Keahlian & Tooling Produksi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
            Teknologi yang Saya Kuasai
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
            Perangkat lunak, bahasa pemrograman, dan infrastruktur yang saya operasikan setiap hari di lingkungan kerja produksi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.id}
              className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-400/80 transition-all card-elevation flex flex-col justify-between"
            >
              <div>
                {/* Title Bar */}
                <div className="flex items-center gap-3 pb-3.5 mb-3.5 border-b border-zinc-100">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono">{group.subtitle}</p>
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
                        <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
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
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-zinc-700 border border-zinc-200 font-medium shadow-2xs"
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
