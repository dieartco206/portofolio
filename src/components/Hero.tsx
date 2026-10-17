import type { FC } from 'react';
import { ArrowRight, MapPin, FileText, Briefcase, Code2, Server, GraduationCap, Terminal, Activity } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'motion/react';

export const Hero: FC = () => {
  const stats = [
    {
      value: '4+ Tahun',
      label: 'Pengalaman Kerja',
      sub: 'Web & Backend Dev',
      icon: <Briefcase className="w-4 h-4 text-blue-400" />,
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      glow: 'group-hover:border-blue-500/40',
    },
    {
      value: '7+ Proyek',
      label: 'Sistem Produksi',
      sub: 'E-Commerce, CBT & Presensi',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      glow: 'group-hover:border-indigo-500/40',
    },
    {
      value: 'Linux VPS',
      label: 'Deployment Mandiri',
      sub: 'Docker, Nginx & SSL',
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      glow: 'group-hover:border-emerald-500/40',
    },
    {
      value: '3.79 / 4.00',
      label: 'IPK Kelulusan D3',
      sub: 'Sistem Informasi UBSI',
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      glow: 'group-hover:border-amber-500/40',
    },
  ];

  const marqueeItems = [
    'Go (Clean DDD Architecture)',
    'Fiber & Gin Framework',
    'Vue 3 (Composition API & Pinia)',
    'React & TypeScript',
    'Linux VPS & Docker Compose',
    'MySQL & Transaksi ACID',
    'MinIO S3 Object Storage',
    'WebSocket Real-Time Sync',
    'Redis Caching & Token Blacklist',
    'Nginx Reverse Proxy & SSL',
  ];

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 border-b border-white/[0.08] bg-[#090a0f] overflow-hidden bg-grid-dark bg-hero-ambient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Recruiter Quick Status Pill with Glowing Radar Ping */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-xl mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          </span>
          <span className="text-xs font-bold text-white tracking-tight">Open for Opportunities</span>
          <span className="text-zinc-600">•</span>
          <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Depok, ID (Remote / Onsite)</span>
          </div>
        </motion.div>

        {/* Headline & High-Impact Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.12]"
            >
              Pengembangan sistem web &{' '}
              <span className="gradient-blue relative inline-block">
                backend API
              </span>{' '}
              berkinerja tinggi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal"
            >
              Software engineer dengan <strong>4+ tahun pengalaman</strong> membangun sistem produksi skala penuh: backend{' '}
              <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                Go & Laravel
              </span>
              , antarmuka modern{' '}
              <span className="font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
                Vue 3 & React
              </span>
              , serta infrastruktur mandiri{' '}
              <span className="font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all"
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
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-white/10 shadow-sm transition-all group hover:border-white/20"
                title="Unduh CV Resmi Format PDF"
              >
                <FileText className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span>Unduh CV (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/dieartco206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900/70 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-white/20 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all shadow-sm"
              >
                <span>Hubungi Saya</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Engineering System Terminal Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-zinc-900/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-sans">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>adi@production-vps:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-sans">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3 text-zinc-300">
                <div className="text-zinc-500 text-[11px]">
                  # Status infrastruktur dan pipeline produksi
                </div>
                <div>
                  <span className="text-emerald-400 font-bold">$</span>{' '}
                  <span className="text-white">check-stack --active</span>
                </div>
                <div className="space-y-1.5 pl-3 border-l-2 border-blue-500/30 text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Core Backend:</span>
                    <span className="text-emerald-400 font-bold">Go Fiber (DDD Clean Arch)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Frontend Apps:</span>
                    <span className="text-blue-400 font-bold">Vue 3 / React + TypeScript</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Database Engine:</span>
                    <span className="text-amber-400 font-bold">MySQL ACID + Redis Cache</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Infrastructure:</span>
                    <span className="text-purple-400 font-bold">Docker / Nginx SSL Reverse Proxy</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400 flex items-center justify-between">
                  <span>Latency: &lt;15ms</span>
                  <span className="text-emerald-400 font-semibold">● All Systems Operational</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* HR Fast Metrics Grid (Dark Luxury Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/[0.08]">
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
              className={`group p-4 sm:p-5 rounded-2xl luxury-card flex flex-col justify-between ${stat.glow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`p-2 rounded-xl border ${stat.badgeBg}`}>
                    {stat.icon}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-200 font-bold mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] font-medium text-zinc-400 mt-2 pt-2 border-t border-white/[0.06]">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Infinite Technology Marquee Strip */}
      <div className="mt-12 sm:mt-16 py-3.5 border-y border-white/[0.08] bg-zinc-950/60 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-300">
          {[...marqueeItems, ...marqueeItems].map((tech, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span className="hover:text-blue-400 transition-colors cursor-default">{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
