import type { FC } from 'react';
import { ArrowDown, Code2, Server, Layout, Database, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-36 sm:pb-28 overflow-hidden mesh-gradient-hero border-b border-zinc-200/80">
      {/* Decorative ambient color orbs */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-indigo-200 text-[11px] sm:text-xs font-semibold shadow-xs mb-5 sm:mb-6 backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-indigo-900">Software Engineer</span>
            <span className="text-zinc-300">•</span>
            <span className="text-emerald-700">Open for Full-Time & Projects</span>
          </div>

          {/* Main Headline with Responsive Fluid Typography */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.12] mb-4 sm:mb-6">
            Membangun sistem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500">
              backend yang andal
            </span>{' '}
            dan web yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600">
              bertenaga & interaktif.
            </span>
          </h1>

          {/* Bio text */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed mb-6 sm:mb-8">
            Halo, saya <strong className="text-zinc-950 font-bold">Adi Kurniawan</strong>. Fullstack engineer (4+ tahun pengalaman produksi) yang terbiasa membangun sistem dari hulu ke hilir: mulai dari arsitektur backend di{' '}
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block my-0.5">
              Golang & Laravel
            </span>
            , antarmuka web modern di{' '}
            <span className="font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 inline-block my-0.5">
              Vue 3 & React
            </span>
            , hingga orkestrasi infrastruktur mandiri di{' '}
            <span className="font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200 inline-block my-0.5">
              Linux VPS & Docker
            </span>
            .
          </p>

          {/* CTA Buttons - Mobile-first stacked layout */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <Code2 className="w-4 h-4" />
              <span>Jelajahi Proyek Produksi</span>
            </a>
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200/90 shadow-xs transition-all hover:scale-[1.01]"
            >
              <GithubIcon className="w-4 h-4 text-zinc-900" />
              <span>GitHub (dieartco206)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-indigo-700 bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200 transition-all"
            >
              <span>Hubungi Saya</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Responsive Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-xs hover:border-emerald-400 transition-all hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-2 shadow-sm shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-zinc-950">Backend Go</h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">Clean Architecture & REST</p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-indigo-200/80 shadow-xs hover:border-indigo-400 transition-all hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center mb-2 shadow-sm shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                  <Layout className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-zinc-950">Frontend Web</h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">Vue 3, React & Tailwind</p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:border-amber-400 transition-all hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-2 shadow-sm shadow-amber-500/30 group-hover:scale-105 transition-transform">
                  <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-zinc-950">Basis Data</h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">MySQL, Redis & MinIO S3</p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-purple-200/80 shadow-xs hover:border-purple-400 transition-all hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center mb-2 shadow-sm shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-zinc-950">Infrastruktur</h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">Linux VPS & Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
