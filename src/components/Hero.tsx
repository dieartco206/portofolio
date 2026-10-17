import type { FC } from 'react';
import { ArrowRight, MapPin, FileText } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'motion/react';

export const Hero: FC = () => {
  const stats = [
    {
      value: '4+ Tahun',
      label: 'Pengalaman Kerja',
      sub: 'Web & Backend Dev',
      color: 'text-blue-600',
      bg: 'bg-blue-50/60 border-blue-200/80',
      subColor: 'text-blue-700/80',
    },
    {
      value: '7+ Proyek',
      label: 'Aplikasi Selesai',
      sub: 'E-Commerce & Sistem',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50/60 border-indigo-200/80',
      subColor: 'text-indigo-700/80',
    },
    {
      value: 'Linux VPS',
      label: 'Deployment Mandiri',
      sub: 'Docker & Nginx Reverse Proxy',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50/60 border-emerald-200/80',
      subColor: 'text-emerald-700/80',
    },
    {
      value: '3.79 / 4.00',
      label: 'IPK Kelulusan D3',
      sub: 'Universitas BSI',
      color: 'text-amber-600',
      bg: 'bg-amber-50/60 border-amber-200/80',
      subColor: 'text-amber-700/80',
    },
  ];

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle bg-ambient-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Badges with Smooth Fade In Down */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 mb-5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Work</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Depok, Indonesia</span>
          </div>
        </motion.div>

        {/* Headline & Concise Bio with Staggered Entrance */}
        <div className="max-w-3xl space-y-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-zinc-950 leading-[1.15]"
          >
            Pengembangan aplikasi web &{' '}
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-4">
              backend API
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed"
          >
            Software developer dengan 4+ tahun pengalaman. Terbiasa membangun backend{' '}
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Go & Laravel
            </span>
            , antarmuka web{' '}
            <span className="font-semibold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
              Vue 3 & React
            </span>
            , serta deployment server{' '}
            <span className="font-semibold text-purple-800 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
              Linux VPS & Docker
            </span>
            .
          </motion.p>

          {/* Action Buttons Row with Micro Spring Hover */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 pt-2"
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-colors"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="/CV_Adi_Kurniawan_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-sm transition-colors"
              title="Lihat / Unduh CV Resmi Format PDF"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Unduh CV</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 shadow-2xs transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-zinc-900" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs transition-colors"
            >
              <span>Kontak</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Engineering Stats Grid with Staggered Motion */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-200/80">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              transition={{
                duration: 0.5,
                delay: 0.35 + idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`p-3.5 sm:p-4 rounded-2xl border shadow-2xs card-elevation cursor-default ${stat.bg}`}
            >
              <div className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">
                {stat.label}
              </div>
              <div className={`text-[10px] font-medium ${stat.subColor}`}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
