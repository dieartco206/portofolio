import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0f] border-t border-white/[0.08] py-8 sm:py-10 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 border-b border-white/[0.08] text-center md:text-left">
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30">
              AK
            </div>
            <div className="text-left">
              <span className="font-bold text-white text-sm">Adi Kurniawan</span>
              <p className="text-[11px] text-zinc-400 font-medium">Fullstack Web Developer</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4 text-xs font-semibold text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-white/10 transition-colors active:scale-95 hover:border-white/20"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-zinc-400 font-medium text-[10px] sm:text-[11px] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Adi Kurniawan. Hak cipta dilindungi.</p>
          <p>
            Dibangun dengan React, TypeScript, Vite & Tailwind CSS (Dark Luxury Editorial Edition).
          </p>
        </div>
      </div>
    </footer>
  );
};
