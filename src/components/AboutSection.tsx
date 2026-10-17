import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Clean Architecture & Go',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      tag: 'Reliabilitas',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      desc: 'Pemisahan logika bisnis dan database agar kode mudah diuji, dibaca tim, dan siap scale.',
      glow: 'hover:border-emerald-500/40',
    },
    {
      title: 'Integritas Data & Database',
      icon: <Shield className="w-4 h-4 text-blue-400" />,
      tag: 'Integritas Data',
      iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      desc: 'Penanganan transaksi database ACID dan validasi data terstruktur untuk menjaga konsistensi data.',
      glow: 'hover:border-blue-500/40',
    },
    {
      title: 'Optimasi Query & Caching',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      tag: 'Performa',
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      desc: 'Optimasi skema tabel relasional, composite indexing query, dan pemanfaatan Redis caching.',
      glow: 'hover:border-amber-500/40',
    },
    {
      title: 'Desain Responsif & Nyaman',
      icon: <Smartphone className="w-4 h-4 text-purple-400" />,
      tag: 'Responsif',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      desc: 'Tampilan rapi dan proporsional di smartphone maupun desktop, dengan navigasi yang mudah.',
      glow: 'hover:border-purple-500/40',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] relative overflow-hidden bg-ambient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Personal Narrative & HR Quick Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Prinsip Kerja & Profil</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Solusi praktis untuk kebutuhan nyata.
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
              <p>
                Pengalaman <strong>4+ tahun</strong> mengembangkan aplikasi web dan backend—termasuk di PT Dowlat Alib Indonesia (e-commerce logam mulia & API mobile). Terbiasa menangani siklus hulu-hilir: backend <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Go & Laravel</span>, frontend <span className="font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Vue 3 & React</span>, serta deployment <span className="font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Linux VPS & Docker</span>.
              </p>
              <p>
                Fokus utama: sistem yang <strong>stabil, mudah dirawat, dan terstruktur rapi</strong> untuk penggunaan jangka panjang.
              </p>
            </div>

            {/* Recruiter Quick Snapshot Box */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl space-y-3 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Ringkasan Kualifikasi HRD
                </span>
                <span className="text-[10px] text-zinc-400">Ready to Deploy</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span><strong>Status:</strong> Siap bergabung (Remote / Onsite Jabodetabek)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <span><strong>Peran Utama:</strong> Fullstack Developer / Backend Go Developer</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                  <span><strong>Pendidikan:</strong> D3 Sistem Informasi UBSI (IPK 3.79 / 4.00)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Structured Engineering Cards with Luxury Style */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {philosophies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] luxury-card flex flex-col justify-between transition-all ${item.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className={`p-2.5 rounded-xl border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
