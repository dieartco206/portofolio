import type { FC } from 'react';
import { ShieldCheck, Cpu, Gauge, Smartphone, Sparkles } from 'lucide-react';

export const EngineeringPrinciples: FC = () => {
  const principles = [
    {
      title: 'Defensive Engineering & Zero Panic',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tag: 'Reliabilitas Sistem',
      description:
        'Setiap fungsi Golang dan handler API menerapkan pengecekan error eksplisit, pemulihan goroutine (recover), serta sanitasi input batas I/O untuk mencegah server crash atau crashloop di produksi.',
    },
    {
      title: 'Domain-Driven Clean Architecture',
      icon: <Cpu className="w-6 h-6 text-brand-400" />,
      tag: 'Keterpisahan Logika',
      description:
        'Logika bisnis inti diisolasi dalam Domain Layer tanpa ketergantungan langsung pada ORM, database MySQL, atau framework web router. Mudah diuji secara terpisah dan tahan uji waktu.',
    },
    {
      title: 'Sub-Second Latency & Index Tuning',
      icon: <Gauge className="w-6 h-6 text-cyan-400" />,
      tag: 'Performa Skalabilitas',
      description:
        'Skema database dirancang dengan indeks komposit terarah berdasarkan pola query nyata. Mencegah query N+1, memanfaatkan goroutines untuk proses paralel, dan menjaga latency API di bawah 100ms.',
    },
    {
      title: 'Anti-Slop & Mobile-First UX',
      icon: <Smartphone className="w-6 h-6 text-amber-400" />,
      tag: 'Pengalaman Pengguna',
      description:
        'Bebas dari template pasaran dan gradien murahan. Mengadopsi arsitektur warna 60-30-10, sistem grid 8px, touch-target standar Apple HIG (minimal 44px), serta micro-interactions responsif.',
    },
  ];

  return (
    <section className="py-24 relative bg-[#090b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Prinsip Rekayasa Perangkat Lunak
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Standar fundamental yang selalu saya terapkan dalam setiap baris kode yang ditulis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-[#0d0f14] border border-white/[0.08] hover:border-brand-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    {principle.icon}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
                    {principle.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
