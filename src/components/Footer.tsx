import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200 py-8 sm:py-10 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 border-b border-zinc-100 text-center md:text-left">
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold text-xs border border-zinc-800 shadow-2xs">
              AK
            </div>
            <div className="text-left">
              <span className="font-bold text-zinc-950 text-sm">Adi Kurniawan</span>
              <p className="text-[11px] text-zinc-500 font-medium">Fullstack Web Developer</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4 text-xs font-semibold text-zinc-600">
            <a href="#projects" className="hover:text-zinc-950 transition-colors">Proyek</a>
            <a href="#skills" className="hover:text-zinc-950 transition-colors">Keahlian</a>
            <a href="#experience" className="hover:text-zinc-950 transition-colors">Pengalaman</a>
            <a href="#about" className="hover:text-zinc-950 transition-colors">Tentang</a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">Kontak</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-colors active:scale-95"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-zinc-700" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-zinc-400 font-medium text-[10px] sm:text-[11px] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Adi Kurniawan. Hak cipta dilindungi.</p>
          <p>
            Dibangun dengan standar rekayasa React, TypeScript, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
