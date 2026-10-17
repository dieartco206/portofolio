import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Smartphone, ShieldCheck } from 'lucide-react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Clean Architecture & Go',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      tag: 'Reliabilitas',
      themeBg: 'bg-emerald-50/50 hover:bg-emerald-50/80 border-emerald-200/90 hover:border-emerald-400',
      tagColor: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-100/80 border-emerald-200/80',
      desc: 'Pemisahan logika bisnis dan database agar kode mudah diuji, dibaca tim, dan siap scale.',
    },
    {
      title: 'Integritas Data & Database',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      tag: 'Integritas Data',
      themeBg: 'bg-blue-50/50 hover:bg-blue-50/80 border-blue-200/90 hover:border-blue-400',
      tagColor: 'bg-blue-100/90 text-blue-800 border-blue-200',
      iconBg: 'bg-blue-100/80 border-blue-200/80',
      desc: 'Penanganan transaksi database ACID dan validasi data terstruktur untuk menjaga konsistensi data.',
    },
    {
      title: 'Optimasi Query & Caching',
      icon: <Zap className="w-4 h-4 text-amber-600" />,
      tag: 'Performa',
      themeBg: 'bg-amber-50/50 hover:bg-amber-50/80 border-amber-200/90 hover:border-amber-400',
      tagColor: 'bg-amber-100/90 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-100/80 border-amber-200/80',
      desc: 'Optimasi skema tabel relasional, indexing query, dan pemanfaatan Redis caching.',
    },
    {
      title: 'Desain Responsif & Nyaman',
      icon: <Smartphone className="w-4 h-4 text-purple-600" />,
      tag: 'Responsif',
      themeBg: 'bg-purple-50/50 hover:bg-purple-50/80 border-purple-200/90 hover:border-purple-400',
      tagColor: 'bg-purple-100/90 text-purple-800 border-purple-200',
      iconBg: 'bg-purple-100/80 border-purple-200/80',
      desc: 'Tampilan rapi dan proporsional di smartphone maupun desktop, dengan navigasi yang mudah.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-zinc-200 relative overflow-hidden bg-ambient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Prinsip Kerja</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Solusi praktis untuk kebutuhan nyata.
            </h2>

            {/* Engineer Profile Card Snippet */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-blue-50/80 to-emerald-50/80 border border-blue-200/80 shadow-2xs">
              <img
                src="/avatar.png"
                alt="Adi Kurniawan"
                className="w-11 h-11 rounded-xl object-cover ring-2 ring-blue-500/30 border border-white shadow-xs shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-zinc-950">Adi Kurniawan</h4>
                <p className="text-xs text-zinc-600 font-mono">Fullstack Web Developer</p>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-mono font-semibold mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Depok, Jawa Barat</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed">
              <p>
                Pengalaman <strong>4+ tahun</strong> mengembangkan aplikasi web dan backend—termasuk di PT Dowlat Alib Indonesia (e-commerce logam mulia & API mobile). Terbiasa menangani siklus hulu-hilir: backend <span className="font-semibold text-emerald-900 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">Go & Laravel</span>, frontend <span className="font-semibold text-blue-900 bg-blue-50 px-1 py-0.5 rounded border border-blue-200">Vue 3 & React</span>, serta deployment <span className="font-semibold text-purple-900 bg-purple-50 px-1 py-0.5 rounded border border-purple-200">Linux VPS & Docker</span>.
              </p>
              <p>
                Fokus utama: sistem yang <strong>stabil, mudah dirawat, dan terstruktur rapi</strong> untuk penggunaan jangka panjang.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Engineering Cards with Vibrant Colors */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border shadow-2xs transition-all card-elevation flex flex-col justify-between ${item.themeBg}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className={`p-2 rounded-xl shadow-2xs border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">
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
