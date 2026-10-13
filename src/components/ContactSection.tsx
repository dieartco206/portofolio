import { useState, type FC, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MessageSquare, Copy, Check, MapPin, Clock } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ContactSection: FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const emailAddress = 'dieartco206@gmail.com';
  const whatsappNumber = '6281234567890'; // Template WhatsApp link

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#10b981', '#34d399', '#06b6d4'],
    });

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Halo Mas Adi, nama saya ${name || 'Rekan'}.\n\n${message || 'Saya tertarik untuk berdiskusi mengenai proyek perangkat lunak / arsitektur sistem.'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mari Kolaborasi & Bangun Sistem
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Terbuka untuk konsultasi arsitektur sistem, peran Lead / Senior Full-Stack Engineer, maupun pembangunan proyek skala produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Copy Email Card */}
            <div className="p-6 rounded-3xl bg-[#0f1116] border border-white/[0.08] hover:border-brand-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Utama</span>
                <span className="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                  Respon Cepat
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 bg-[#0a0c10] p-3.5 rounded-2xl border border-white/[0.04]">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-brand-500/10 hover:bg-brand-500/20 text-brand-300 border border-brand-500/30 flex items-center gap-1.5 shrink-0 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-400" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#0f1116] border border-white/[0.08] hover:border-brand-500/30 transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                      dieartco206 (GitHub)
                    </h3>
                    <p className="text-xs text-zinc-400">Jelajahi repositori & kontribusi kode</p>
                  </div>
                </div>
                <span className="text-xs text-brand-400 font-mono group-hover:translate-x-1 transition-transform">
                  Buka ↗
                </span>
              </div>
            </a>

            {/* Work Status Card */}
            <div className="p-6 rounded-3xl bg-[#0f1116] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Indonesia (WIB / UTC+7) • Remote & Hybrid</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Status: Terbuka untuk diskusi proyek baru & kontrak</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Box */}
          <div className="lg:col-span-7 bg-[#0f1116] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-1">
              Kirim Pesan Cepat
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Tuliskan detail kebutuhan atau ide proyek Anda, pesan akan disiapkan langsung ke WhatsApp atau Email.
            </p>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Nama / Perusahaan
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi (PT Solusi Digital)"
                  className="w-full px-4 py-3 rounded-2xl bg-[#090b0e] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Detail Kebutuhan atau Pesan
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan gambaran sistem yang ingin Anda bangun, ekspektasi deadline, atau tech stack..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#090b0e] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-500/50 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-500 hover:bg-brand-400 text-black shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim via WhatsApp</span>
                </button>
                <a
                  href={`mailto:${emailAddress}?subject=Diskusi Proyek Perangkat Lunak&body=${encodeURIComponent(
                    message || 'Halo Adi Kurniawan, saya ingin berdiskusi mengenai proyek...'
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.08] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim via Email Client</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
