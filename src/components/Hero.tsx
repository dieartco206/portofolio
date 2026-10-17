import type { FC } from 'react';
import { ArrowRight, MapPin, FileText } from 'lucide-react';
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Work</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Depok, Indonesia</span>
              </div>
            </div>

            {/* Headline with vibrant tech accents */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.1rem] font-black tracking-tight text-zinc-950 leading-[1.15]">
              Pengembangan aplikasi web &{' '}
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-4">
                backend API
              </span>{' '}
              yang handal.
            </h1>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Software developer <strong className="text-zinc-950 font-bold">Adi Kurniawan</strong> dengan 4+ tahun pengalaman. Terbiasa membangun backend{' '}
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
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all active:scale-[0.98]"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href="/CV_Adi_Kurniawan_Fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-sm transition-all active:scale-[0.98]"
                title="Lihat / Unduh CV Resmi Format PDF"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Unduh CV</span>
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
                  alt="Adi Kurniawan - Software Developer"
                  className="w-full h-auto aspect-[3/4] object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-200/90 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fullstack Developer</span>
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-blue-600/90 backdrop-blur-md text-white shadow-xs">
                    4+ Thn
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-4 pt-10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base tracking-tight">Adi Kurniawan</h3>
                      <p className="text-[11px] sm:text-xs text-zinc-300 font-medium">D3 Sistem Informasi UBSI • IPK 3.79</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14 pt-6 border-t border-zinc-200/80">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">4+ Tahun</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Pengalaman Kerja</div>
            <div className="text-[10px] font-medium text-blue-700/80">Web & Backend Dev</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight">7+ Proyek</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Aplikasi Selesai</div>
            <div className="text-[10px] font-medium text-indigo-700/80">E-Commerce & Sistem</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">Linux VPS</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">Deployment Mandiri</div>
            <div className="text-[10px] font-medium text-emerald-700/80">Docker & Nginx Reverse Proxy</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-2xs card-elevation">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">3.79 / 4.00</div>
            <div className="text-xs sm:text-sm text-zinc-800 font-bold mt-0.5">IPK Kelulusan D3</div>
            <div className="text-[10px] font-medium text-amber-700/80">Universitas BSI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
