import type { FC } from 'react';
import { ArrowRight, Terminal, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle bg-ambient-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Bio & Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-800 text-[11px] sm:text-xs font-mono font-medium shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Full-Time & Projects</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-800 text-[11px] sm:text-xs font-mono font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Depok, Jawa Barat</span>
              </div>
            </div>

            {/* Headline with vibrant tech accents */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-zinc-950 leading-[1.15]">
              Membangun sistem backend{' '}
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-4">
                berkinerja tinggi
              </span>{' '}
              dan arsitektur web modern skala produksi.
            </h1>

            {/* Bio with rich colorful tech badges */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed">
              Saya <strong className="text-zinc-950 font-bold">Adi Kurniawan</strong>, software engineer dengan pengalaman 4+ tahun dalam rekayasa sistem produksi. Spesialisasi pada backend berkecepatan tinggi dengan{' '}
              <span className="inline-block font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Golang & Laravel
              </span>
              , antarmuka web interaktif berbasis{' '}
              <span className="inline-block font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                Vue 3 & React
              </span>
              , serta orkestrasi cloud mandiri di{' '}
              <span className="inline-block font-semibold text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                Linux VPS, Docker & Nginx
              </span>
              .
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-white" />
                <span>Jelajahi Proyek Produksi</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href="https://github.com/dieartco206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 shadow-2xs transition-all active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4 text-zinc-900" />
                <span>github.com/dieartco206</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/90 shadow-2xs transition-all active:scale-[0.98]"
              >
                <span>Hubungi Saya</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Profile Photo & Engineering Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Colorful Glow Underlay */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-emerald-400/20 to-purple-400/20 blur-xl opacity-70 -z-10" />

            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-3 sm:p-4 border border-zinc-200/90 shadow-xl card-elevation">
              {/* Photo Frame */}
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
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-blue-600/90 backdrop-blur-md text-white shadow-xs">
                    <span>4+ Thn</span>
                  </span>
                </div>

                {/* Bottom Photo Caption Strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-4 pt-10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base tracking-tight">Adi Kurniawan</h3>
                      <p className="text-[11px] sm:text-xs text-zinc-300 font-mono">D3 Sistem Informasi UBSI • IPK 3.79</p>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-card engineering highlights */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/70">
                  <div className="text-[11px] font-mono font-bold text-blue-900">Backend & API</div>
                  <div className="text-[10px] font-mono text-blue-700">Golang, Fiber, DDD</div>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                  <div className="text-[11px] font-mono font-bold text-emerald-900">Infra & DevOps</div>
                  <div className="text-[10px] font-mono text-emerald-700">Linux VPS & Docker</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High Data-to-Ink Engineering Stats Grid with Vibrant Themed Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mt-12 sm:mt-16 pt-8 border-t border-zinc-200/80">
          {/* Stat 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">4+ Tahun</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-1">Pengalaman Produksi</div>
            <div className="text-[11px] font-mono text-blue-700/80 mt-0.5">Fullstack & DevOps Mandiri</div>
          </div>

          {/* Stat 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-600">7+ Sistem</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-1">Aplikasi Live</div>
            <div className="text-[11px] font-mono text-indigo-700/80 mt-0.5">Multi-Cabang & Enterprise</div>
          </div>

          {/* Stat 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">99.9%</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-1">Uptime Server VPS</div>
            <div className="text-[11px] font-mono text-emerald-700/80 mt-0.5">Docker & Nginx Reverse Proxy</div>
          </div>

          {/* Stat 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-600">3.79 / 4.00</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-1">IPK Kelulusan D3</div>
            <div className="text-[11px] font-mono text-amber-700/80 mt-0.5">Sistem Informasi BSI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
