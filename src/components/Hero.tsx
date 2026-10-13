import type { FC } from 'react';
import { ArrowDown, Code2, Server, Layout, Database, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Berbasis di Indonesia • Full-Stack & Systems Engineer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-6">
            Membangun sistem backend yang andal dan antarmuka web yang nyaman dipakai.
          </h1>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
            Halo, saya <strong className="text-zinc-900 font-semibold">Adi Kurniawan</strong>. Saya seorang software engineer yang fokus merancang aplikasi produksi: mulai dari arsitektur backend di <strong className="text-zinc-900 font-semibold">Golang (Clean Architecture)</strong>, antarmuka web interaktif di <strong className="text-zinc-900 font-semibold">Vue 3 & React</strong>, hingga manajemen server mandiri di <strong className="text-zinc-900 font-semibold">Linux VPS</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white shadow-xs transition-all active:scale-[0.98]"
            >
              <Code2 className="w-4 h-4" />
              <span>Lihat Daftar Proyek</span>
            </a>
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 shadow-xs transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (dieartco206)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
            >
              <span>Hubungi Saya</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Pillars Clean Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-200">
            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs mb-1">
                <Server className="w-3.5 h-3.5 text-emerald-600" />
                <span>Backend Go</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-snug">Clean Architecture, REST API & WebSocket</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs mb-1">
                <Layout className="w-3.5 h-3.5 text-blue-600" />
                <span>Frontend Web</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-snug">Vue 3, React, TypeScript & Tailwind CSS</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs mb-1">
                <Database className="w-3.5 h-3.5 text-amber-600" />
                <span>Basis Data</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-snug">MySQL, MinIO S3 & Caching Redis</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs mb-1">
                <Terminal className="w-3.5 h-3.5 text-purple-600" />
                <span>Infrastruktur</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-snug">Linux VPS, Docker Compose & Nginx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
