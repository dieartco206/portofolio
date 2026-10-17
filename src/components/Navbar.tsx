import { useState, useEffect, type FC } from 'react';
import { Menu, X, Mail, MessageSquare, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#090a0f]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img
                src="/avatar.png"
                alt="Adi Kurniawan"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover ring-2 ring-blue-500/40 border border-zinc-200 dark:border-white/10 shadow-sm group-hover:ring-blue-500 transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#090a0f] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Adi Kurniawan
                </span>
                {/* Available for work badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden sm:inline">Available for Work</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium hidden sm:block">
                Fullstack Web Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav Links (Floating Pill Dock) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/95 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-white/[0.08] shadow-sm dark:shadow-xl px-2 py-1 rounded-full backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/[0.08] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button (Light/Dark) */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
              aria-label={theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
              title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </motion.button>

            <a
              href="/CV_Adi_Kurniawan_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unduh CV PDF"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm transition-all active:scale-95"
              title="Unduh CV Resmi (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>CV (PDF)</span>
            </a>
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 dark:shadow-blue-600/30 transition-all active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Kontak</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + WhatsApp Icon + Hamburger Menu */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200"
              aria-label="Ganti mode tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
            <a
              href="/CV_Adi_Kurniawan_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unduh CV PDF"
              className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
              title="Unduh CV"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="https://wa.me/6281288887916"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="p-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-zinc-200 dark:border-white/10 bg-white/98 dark:bg-[#0c0e17]/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              <span>Mode: {theme === 'dark' ? 'Gelap (Dark)' : 'Terang (Light)'}</span>
            </button>
            <a
              href="/CV_Adi_Kurniawan_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Unduh CV Resmi (PDF)</span>
            </a>
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (dieartco206)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 dark:bg-zinc-800 text-white border border-zinc-800 dark:border-white/10"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
