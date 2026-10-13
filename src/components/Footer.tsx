import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/[0.08] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-bold text-black font-mono text-xs">
              AK
            </div>
            <div>
              <span className="font-bold text-white text-sm">Adi Kurniawan</span>
              <p className="text-[11px] text-zinc-500 font-mono">Senior Full-Stack & Systems Engineer</p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#architecture" className="hover:text-white transition-colors">Arsitektur</a>
            <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
            <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 transition-colors"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Adi Kurniawan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with Vite, React, TypeScript, Tailwind CSS & Clean Engineering Standards</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
