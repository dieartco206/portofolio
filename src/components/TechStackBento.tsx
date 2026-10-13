import type { FC } from 'react';
import { skillGroupsData } from '../data/skills';
import { Server, Layout, Database, Terminal } from 'lucide-react';

export const TechStackBento: FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-600" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-blue-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-amber-600" />;
      case 'Terminal':
      default:
        return <Terminal className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200 inline-block mb-3">
            Keahlian & Tooling
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Teknologi yang Saya Gunakan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Perangkat lunak dan bahasa pemrograman yang saya gunakan secara aktif untuk membangun dan mengoperasikan sistem di lingkungan produksi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100">
                  <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/70">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">{group.title}</h3>
                    <p className="text-xs text-zinc-500">{group.subtitle}</p>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-3.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/60"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-bold text-xs sm:text-sm text-zinc-900">{item.name}</span>
                        <span className="text-[11px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-2.5">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-zinc-600 border border-zinc-200/60"
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
