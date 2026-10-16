import { useState, useEffect, type FC } from 'react';
import { Menu, X, Mail, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proyek', href: '#projects' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Tentang', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/90 shadow-2xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold text-xs sm:text-sm font-mono border border-zinc-800 shadow-xs group-hover:bg-zinc-800 transition-colors">
              AK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-zinc-950 tracking-tight">
                  Adi Kurniawan
                </span>
                {/* Available for work badge */}
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="hidden sm:inline">Available for Work</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 font-mono hidden sm:block">
                Fullstack Software Engineer & DevOps
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-zinc-200/90 shadow-2xs px-2 py-1 rounded-full backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 transition-colors shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon + Hamburger Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/6281288887916"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              className="p-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-md px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-zinc-500 bg-zinc-50 rounded-lg border border-zinc-100">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Navigation / Menu Utama</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-800 bg-zinc-50 border border-zinc-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (dieartco206)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-950 text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
