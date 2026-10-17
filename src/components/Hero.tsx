import type { FC } from 'react';
import { ArrowRight, MapPin, FileText } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-zinc-200/80 bg-white overflow-hidden bg-grid-subtle bg-ambient-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Profile Avatar & Identity Header */}
        <div className="flex items-center gap-4 sm:gap-5 mb-6">
          <div className="relative shrink-0">
            <img
              src="/adi-kurniawan.png"
              alt="Adi Kurniawan"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top ring-2 ring-zinc-200 border-2 border-white shadow-sm"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"
              title="Available for Work"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-bold text-base sm:text-xl text-zinc-950 tracking-tight">
                Adi Kurniawan
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-2xs">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Work</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Depok, Jawa Barat, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Headline & Concise Bio */}
        <div className="max-w-3xl space-y-4 mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-zinc-950 leading-[1.15]">
            Pengembangan aplikasi web &{' '}
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-4">
              backend API
            </span>
            .
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed">
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
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
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

        {/* Engineering Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-200/80">
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
