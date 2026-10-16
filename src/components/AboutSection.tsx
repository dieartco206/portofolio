import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Smartphone, ShieldCheck } from 'lucide-react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Clean Architecture & Modular Go',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      tag: 'Reliabilitas',
      desc: 'Memisahkan business logic dari database layer menggunakan Clean Architecture / Hexagonal. Kode mudah dibaca tim, teruji, dan siap diskalakan tanpa refactoring masif.',
    },
    {
      title: 'Integritas Data & Concurrency Safety',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      tag: 'Zero Race Condition',
      desc: 'Mencegah double check-in, selisih stok, dan data race pada lonjakan traffic tinggi menggunakan database transactional locking (ACID) dan Go sync primitives.',
    },
    {
      title: 'Optimasi Latensi & Indeks Database',
      icon: <Zap className="w-4 h-4 text-amber-600" />,
      tag: 'Throughput',
      desc: 'Merancang schema relational dengan composite indexes, Redis in-memory cache, dan payload JSON ramping agar response time API konsisten di bawah 50 milidetik.',
    },
    {
      title: 'Ergonomi & Aksesibilitas Mobile-First',
      icon: <Smartphone className="w-4 h-4 text-purple-600" />,
      tag: 'Apple HIG / WCAG',
      desc: 'Antarmuka web modern yang responsif dengan target sentuh jari minimal 44x44px, fluid typography yang tidak pernah patah, dan waktu muat cepat di smartphone.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
              <span>Prinsip Rekayasa Sistem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Fokus pada solusi praktis yang memecahkan masalah nyata.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed">
              <p>
                Dengan pengalaman <strong>4+ tahun</strong> dalam rekayasa perangkat lunak skala produksi—termasuk rekam jejak di PT Dowlat Alib Indonesia dalam mengembangkan platform e-commerce logam mulia dan API berkecepatan tinggi—saya menyukai proses membangun software dari hulu ke hilir: mulai dari backend di <span className="font-semibold text-zinc-900 bg-zinc-100 px-1 py-0.5 rounded">Golang & Laravel</span>, antarmuka modern di <span className="font-semibold text-zinc-900 bg-zinc-100 px-1 py-0.5 rounded">Vue 3 & React</span>, hingga orkestrasi di <span className="font-semibold text-zinc-900 bg-zinc-100 px-1 py-0.5 rounded">Linux VPS & Docker</span>.
              </p>
              <p>
                Saya secara aktif menerapkan metodologi <strong>AI-Assisted Development & Agentic Coding Workflows</strong> untuk mengakselerasi siklus pengembangan secara eksponensial—dari perancangan arsitektur, rapid prototyping, hingga pengujian dan deployment tanpa mengorbankan kualitas maupun keamanan data.
              </p>
              <p>
                Bagi saya, sistem yang hebat adalah yang <strong>dapat diandalkan setiap hari oleh pengguna</strong>: stabil di traffic tinggi, minim latensi, dan terstruktur rapi untuk pemeliharaan jangka panjang.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Engineering Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs hover:border-zinc-400/80 transition-all card-elevation flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-white shadow-2xs border border-zinc-200/80">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
