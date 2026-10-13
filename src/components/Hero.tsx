import type { FC } from 'react';
import { Code2, Terminal, ShieldCheck, Zap, Server, CheckCircle2 } from 'lucide-react';

export const Hero: FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Engineering Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12151c] border border-white/[0.1] text-xs font-mono text-zinc-300 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-400 font-semibold">Golang Clean Architecture</span>
            <span className="text-zinc-600">/</span>
            <span>Vue & React</span>
            <span className="text-zinc-600">/</span>
            <span>Linux Cloud VPS</span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Membangun Sistem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-teal-400">
              High-Concurrency
            </span>{' '}
            & Antarmuka Presisi.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-10 font-normal">
            Halo, saya <span className="text-white font-semibold">Adi Kurniawan</span>. Senior Full-Stack & Systems Engineer yang fokus pada ketangguhan backend Golang (Clean Architecture/DDD), integrasi biometrik & IoT, serta antarmuka web modern berskala enterprise tanpa kompromi performa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-500 hover:bg-brand-400 text-black shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Code2 className="w-4 h-4" />
              <span>Jelajahi Proyek Produksi</span>
            </a>
            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-[#12141a] hover:bg-[#181b22] text-zinc-200 border border-white/[0.1] hover:border-brand-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Terminal className="w-4 h-4 text-brand-400" />
              <span>Buka Terminal Interaktif</span>
            </a>
          </div>

          {/* Verified Engineering Metrics Bento Grid */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1116]/80 border border-white/[0.08] backdrop-blur-sm hover:border-brand-500/30 transition-all">
              <div className="flex items-center gap-2 text-brand-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Inferensi AI</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">&lt; 250ms</div>
              <p className="text-xs text-zinc-400 mt-1">Verifikasi Face Recognition real-time</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1116]/80 border border-white/[0.08] backdrop-blur-sm hover:border-brand-500/30 transition-all">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <Server className="w-4 h-4" />
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Arsitektur</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Clean DDD</div>
              <p className="text-xs text-zinc-400 mt-1">Decoupled Domain, Usecase & Infra</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1116]/80 border border-white/[0.08] backdrop-blur-sm hover:border-brand-500/30 transition-all">
              <div className="flex items-center gap-2 text-teal-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Reliabilitas</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">99.9% Uptime</div>
              <p className="text-xs text-zinc-400 mt-1">Production VPS Nginx & Docker</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1116]/80 border border-white/[0.08] backdrop-blur-sm hover:border-brand-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Sistem Produksi</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">15+ Deployed</div>
              <p className="text-xs text-zinc-400 mt-1">Enterprise, SaaS, & FinTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
