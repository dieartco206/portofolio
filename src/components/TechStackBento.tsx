import type { FC } from 'react';
import { skillGroupsData } from '../data/skills';
import { Server, Layout, Database, Terminal, Cpu } from 'lucide-react';

export const TechStackBento: FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />;
      case 'Layout':
        return <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
      case 'Database':
        return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />;
      case 'Terminal':
      default:
        return <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />;
    }
  };

  const getPillTheme = (groupId: string) => {
    switch (groupId) {
      case 'backend':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'frontend':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'database':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'devops':
      default:
        return 'bg-purple-50 text-purple-800 border-purple-200';
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2.5 shadow-2xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian & Tooling</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
            Teknologi yang Saya Gunakan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
            Perangkat lunak dan bahasa pemrograman yang saya gunakan secara aktif untuk membangun dan mengoperasikan sistem di lingkungan produksi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.id}
              className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white border ${group.borderTheme} shadow-xs hover:shadow-lg transition-all flex flex-col justify-between`}
            >
              <div>
                {/* Title */}
                <div className="flex items-center gap-3 pb-3.5 mb-3.5 border-b border-zinc-100">
                  <div className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl ${group.bgTheme} border border-zinc-200/60`}>
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base lg:text-lg font-extrabold ${group.themeColor}`}>
                      {group.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-medium">{group.subtitle}</p>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl ${group.bgTheme} border border-zinc-200/60 hover:border-zinc-300 transition-colors`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                        <span className="font-bold text-xs sm:text-sm text-zinc-950">{item.name}</span>
                        <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border ${getPillTheme(group.id)}`}>
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
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
