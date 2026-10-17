import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Clean Architecture & Go',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      tag: 'Reliabilitas',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Pemisahan logika bisnis dan database agar kode mudah diuji, dibaca tim, dan siap scale.',
    },
    {
      title: 'Integritas Data & Database',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      tag: 'Integritas Data',
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
      desc: 'Penanganan transaksi database ACID dan validasi data terstruktur untuk menjaga konsistensi data.',
    },
    {
      title: 'Optimasi Query & Caching',
      icon: <Zap className="w-4 h-4 text-amber-600" />,
      tag: 'Performa',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: 'Optimasi skema tabel relasional, indexing query, dan pemanfaatan Redis caching.',
    },
    {
      title: 'Desain Responsif & Nyaman',
      icon: <Smartphone className="w-4 h-4 text-purple-600" />,
      tag: 'Responsif',
      iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
      tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Tampilan rapi dan proporsional di smartphone maupun desktop, dengan navigasi yang mudah.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-zinc-200 relative overflow-hidden bg-ambient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Personal Narrative & HR Quick Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Prinsip Kerja & Profil</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Solusi praktis untuk kebutuhan nyata.
            </h2>

            <div className="space-y-3 text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed pt-1">
              <p>
                Pengalaman <strong>4+ tahun</strong> mengembangkan aplikasi web dan backend—termasuk di PT Dowlat Alib Indonesia (e-commerce logam mulia & API mobile). Terbiasa menangani siklus hulu-hilir: backend <span className="font-semibold text-emerald-950 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Go & Laravel</span>, frontend <span className="font-semibold text-blue-950 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Vue 3 & React</span>, serta deployment <span className="font-semibold text-purple-950 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">Linux VPS & Docker</span>.
              </p>
              <p>
                Fokus utama: sistem yang <strong>stabil, mudah dirawat, dan terstruktur rapi</strong> untuk penggunaan jangka panjang.
              </p>
            </div>

            {/* Recruiter Quick Snapshot Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/90 shadow-2xs space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                Ringkasan untuk HR & Recruiter
              </span>
              <ul className="space-y-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span><strong>Status:</strong> Siap bergabung (Remote / Onsite Jabodetabek)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span><strong>Peran Utama:</strong> Fullstack Developer / Backend Go Developer</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span><strong>Pendidikan:</strong> D3 Sistem Informasi UBSI (IPK 3.79 / 4.00)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Structured Engineering Cards with Luxury Style */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
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
                className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 luxury-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-xl shadow-2xs border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor}`}>
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
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
