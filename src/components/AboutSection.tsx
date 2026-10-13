import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Smartphone, Sparkles } from 'lucide-react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Kode Bersih & Terstruktur',
      icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />,
      border: 'border-emerald-200 hover:border-emerald-400',
      bg: 'bg-emerald-50/50',
      tag: 'Reliabilitas',
      tagColor: 'text-emerald-700 bg-emerald-100/60',
      desc: 'Menulis kode Go dan frontend yang mudah dipahami rekan engineer lainnya. Memisahkan logika bisnis dari database menggunakan Clean Architecture.',
    },
    {
      title: 'Keamanan Data & Konkurensi',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />,
      border: 'border-indigo-200 hover:border-indigo-400',
      bg: 'bg-indigo-50/50',
      tag: 'Integritas Data',
      tagColor: 'text-indigo-700 bg-indigo-100/60',
      desc: 'Mencegah race condition dan duplikasi data transaksi menggunakan locking atomik di Go dan mekanisme rollback ACID di database relasional.',
    },
    {
      title: 'Performa Cepat & Efisien',
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />,
      border: 'border-amber-200 hover:border-amber-400',
      bg: 'bg-amber-50/50',
      tag: 'Optimasi',
      tagColor: 'text-amber-800 bg-amber-100/60',
      desc: 'Merancang query SQL berindeks komposit, payload JSON ramping, dan proses latar belakang paralel dengan goroutines agar respons API selalu gesit.',
    },
    {
      title: 'Antarmuka Ramah Pengguna',
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />,
      border: 'border-rose-200 hover:border-rose-400',
      bg: 'bg-rose-50/50',
      tag: 'Mobile-First',
      tagColor: 'text-rose-700 bg-rose-100/60',
      desc: 'Desain web modern yang mengutamakan kenyamanan layar HP: touch target standar Apple HIG (minimal 44px), visual rapi, dan cepat dimuat.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Personal Story */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prinsip & Filosofi Kerja</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Fokus pada solusi praktis yang memecahkan masalah nyata.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed">
              <p>
                Dengan pengalaman <strong>4+ tahun</strong> dalam rekayasa perangkat lunak skala produksi—termasuk rekam jejak di PT Dowlat Alib Indonesia dalam mengembangkan platform e-commerce logam mulia dan API berkecepatan tinggi—saya menyukai proses membangun software dari hulu ke hilir: mulai dari backend di <span className="font-semibold text-emerald-700">Golang & Laravel</span>, antarmuka modern di <span className="font-semibold text-indigo-700">Vue 3 & React</span>, hingga orkestrasi di <span className="font-semibold text-purple-700">Linux VPS & Docker</span>.
              </p>
              <p>
                Saya secara aktif menerapkan metodologi <strong>AI-Assisted Development & Agentic Coding Workflows</strong> untuk mengakselerasi siklus pengembangan secara eksponensial—dari perancangan arsitektur, rapid prototyping, hingga pengujian dan deployment tanpa mengorbankan kualitas maupun keamanan data.
              </p>
              <p>
                Bagi saya, sistem yang hebat adalah yang <strong>dapat diandalkan setiap hari oleh pengguna</strong>: stabil di traffic tinggi, minim latensi, dan terstruktur rapi untuk pemeliharaan jangka panjang.
              </p>
            </div>
          </div>

          {/* Right Column: Colorful Philosophy Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl ${item.bg} border ${item.border} shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white shadow-xs border border-zinc-200/60">
                      {item.icon}
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-zinc-950 mb-1">
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
