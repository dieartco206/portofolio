import type { FC } from 'react';
import { ArrowRight, Terminal, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle bg-ambient-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Bio & Headline */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-medium shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Work</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Depok, Indonesia</span>
              </div>
            </div>

            {/* Headline with vibrant tech accents */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.1rem] font-black tracking-tight text-zinc-950 leading-[1.15]">
              Membangun backend{' '}
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-4">
                performa tinggi
              </span>{' '}
              & sistem web skala produksi.
            </h1>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Software engineer <strong className="text-zinc-950 font-bold">Adi Kurniawan</strong> (4+ tahun pengalaman). Berfokus pada arsitektur backend{' '}
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                Go & Laravel
              </span>
              , antarmuka reaktif{' '}
              <span className="font-semibold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                Vue 3 & React
              </span>
              , serta DevOps mandiri{' '}
              <span className="font-semibold text-purple-800 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                Linux VPS & Docker
              </span>
              .
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-white" />
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href="https://github.com/dieartco206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 shadow-2xs transition-all active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4 text-zinc-900" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs transition-all active:scale-[0.98]"
              >
                <span>Kontak</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-emerald-400/20 to-purple-400/20 blur-xl opacity-70 -z-10" />

            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-3 sm:p-4 border border-zinc-200/90 shadow-xl card-elevation">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-emerald-50/40 border border-zinc-200/80">
                <img
                  src="/adi-kurniawan.png"
                  alt="Adi Kurniawan - Software Engineer"
                  className="w-full h-auto aspect-[3/4] object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-200/90 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Lead Systems Architect</span>
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-blue-600/90 backdrop-blur-md text-white shadow-xs">
                    4+ Thn
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-4 pt-10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base tracking-tight">Adi Kurniawan</h3>
                      <p className="text-[11px] sm:text-xs text-zinc-300 font-mono">D3 SI UBSI • IPK 3.79</p>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-card tags */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200/70">
                  <div className="text-[11px] font-mono font-bold text-blue-900">Backend & API</div>
                  <div className="text-[10px] font-mono text-blue-700">Golang, Fiber, DDD</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                  <div className="text-[11px] font-mono font-bold text-emerald-900">Infra & DevOps</div>
                  <div className="text-[10px] font-mono text-emerald-700">Linux VPS & Docker</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14 pt-6 border-t border-zinc-200/80">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">4+ Tahun</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Pengalaman Produksi</div>
            <div className="text-[10px] font-mono text-blue-700/80">Fullstack & DevOps</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-600">7+ Sistem</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Aplikasi Live</div>
            <div className="text-[10px] font-mono text-indigo-700/80">Multi-Cabang & ERP</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">99.9%</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Uptime Server VPS</div>
            <div className="text-[10px] font-mono text-emerald-700/80">Docker & Nginx SSL</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-600">3.79 / 4.00</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">IPK Kelulusan D3</div>
            <div className="text-[10px] font-mono text-amber-700/80">Sistem Informasi UBSI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
