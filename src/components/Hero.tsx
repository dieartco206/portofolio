import type { FC } from 'react';
import { ArrowRight, MapPin, FileText, Briefcase, Code2, Server, GraduationCap } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'motion/react';

export const Hero: FC = () => {
  const stats = [
    {
      value: '4+ Tahun',
      label: 'Pengalaman Kerja',
      sub: 'Web & Backend Dev',
      icon: <Briefcase className="w-4 h-4 text-blue-600" />,
      color: 'text-zinc-950',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/70',
    },
    {
      value: '7+ Proyek',
      label: 'Sistem Produksi',
      sub: 'E-Commerce, CBT & Presensi',
      icon: <Code2 className="w-4 h-4 text-indigo-600" />,
      color: 'text-zinc-950',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
    },
    {
      value: 'Linux VPS',
      label: 'Deployment Mandiri',
      sub: 'Docker, Nginx & SSL',
      icon: <Server className="w-4 h-4 text-emerald-600" />,
      color: 'text-zinc-950',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    },
    {
      value: '3.79 / 4.00',
      label: 'IPK Kelulusan D3',
      sub: 'Sistem Informasi UBSI',
      icon: <GraduationCap className="w-4 h-4 text-amber-600" />,
      color: 'text-zinc-950',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200/70',
    },
  ];

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle bg-hero-ambient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Recruiter Quick Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-zinc-200 shadow-2xs backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-zinc-900 tracking-tight">Open for Opportunities</span>
          <span className="text-zinc-300">•</span>
          <div className="flex items-center gap-1 text-xs text-zinc-600 font-medium">
            <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
            <span>Depok, ID (Remote / Onsite)</span>
          </div>
        </motion.div>

        {/* Headline & High-Impact Value Proposition */}
        <div className="max-w-3xl space-y-5 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-[3.35rem] font-black tracking-tight text-zinc-950 leading-[1.12]"
          >
            Pengembangan aplikasi web &{' '}
            <span className="relative inline-block text-blue-600">
              backend API
              <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-blue-200/80" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Software developer dengan <strong>4+ tahun pengalaman</strong> membangun sistem web produksi: backend{' '}
            <span className="font-semibold text-emerald-950 bg-emerald-50/90 px-1.5 py-0.5 rounded-md border border-emerald-200">
              Go & Laravel
            </span>
            , antarmuka modern{' '}
            <span className="font-semibold text-blue-950 bg-blue-50/90 px-1.5 py-0.5 rounded-md border border-blue-200">
              Vue 3 & React
            </span>
            , serta infrastruktur mandiri{' '}
            <span className="font-semibold text-purple-950 bg-purple-50/90 px-1.5 py-0.5 rounded-md border border-purple-200">
              Linux VPS & Docker
            </span>
            .
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-colors"
            >
              <span>Eksplor Proyek</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="/CV_Adi_Kurniawan_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-sm transition-colors group"
              title="Unduh CV Resmi Lengkap Format PDF"
            >
              <FileText className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
              <span>Unduh CV Resmi (PDF)</span>
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
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/90 shadow-2xs transition-colors"
            >
              <span>Hubungi Saya</span>
            </motion.a>
          </motion.div>
        </div>

        {/* HR Fast Metrics Grid (Executive Card Style) */}
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
              className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs luxury-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`p-2 rounded-xl border ${stat.badgeBg}`}>
                    {stat.icon}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] font-medium text-zinc-500 mt-2 pt-2 border-t border-zinc-100">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
