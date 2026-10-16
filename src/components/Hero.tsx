import type { FC } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Engineering Metadata Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200 text-zinc-700 text-[11px] sm:text-xs font-mono font-medium mb-6 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fullstack Software Engineer</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-500">Depok, Indonesia</span>
          </div>

          {/* Bold, Clean, Typography-Driven Headline (Zero Rainbow Text) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.15] mb-5 sm:mb-6">
            Membangun sistem backend berkinerja tinggi dan arsitektur web modern skala produksi.
          </h1>

          {/* Authoritative, Grounded Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed mb-8">
            Saya <strong className="text-zinc-950 font-semibold">Adi Kurniawan</strong>, software engineer dengan 4+ tahun pengalaman produksi. Terbiasa menangani siklus rekayasa sistem secara menyeluruh: mulai dari perancangan arsitektur backend berkonkurensi tinggi di <span className="font-semibold text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">Golang & Laravel</span>, antarmuka web modern berbasis <span className="font-semibold text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">Vue 3 & React</span>, hingga orkestrasi server mandiri di lingkungan <span className="font-semibold text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">Linux Ubuntu VPS, Docker & Nginx</span>.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12 sm:mb-16">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-sm transition-all active:scale-[0.98]"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Jelajahi Proyek Produksi</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 shadow-2xs transition-all active:scale-[0.98]"
            >
              <GithubIcon className="w-4 h-4 text-zinc-900" />
              <span>github.com/dieartco206</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 border border-transparent transition-all"
            >
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* High Data-to-Ink Engineering Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-200/80">
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50/70 border border-zinc-200/80 card-elevation">
              <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">4+ Tahun</div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-1">Pengalaman Produksi</div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Fullstack & DevOps</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50/70 border border-zinc-200/80 card-elevation">
              <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">7+ Sistem</div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-1">Aplikasi Live</div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Multi-Cabang & ERP</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50/70 border border-zinc-200/80 card-elevation">
              <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">99.9%</div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-1">Uptime Server VPS</div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Docker & Nginx SSL</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50/70 border border-zinc-200/80 card-elevation">
              <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">3.79 / 4.00</div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-1">IPK Kelulusan D3</div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Sistem Informasi BSI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
