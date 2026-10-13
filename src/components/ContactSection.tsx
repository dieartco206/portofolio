import { useState, type FC, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MessageSquare, Copy, Check, MapPin, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ContactSection: FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const emailAddress = 'dieartco206@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'],
    });

    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Halo Mas Adi, nama saya ${name || 'Rekan'}.\n\n${message || 'Saya tertarik untuk berdiskusi mengenai proyek perangkat lunak.'}`
    );
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Mari Berdiskusi & Berkolaborasi
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Terbuka untuk konsultasi sistem, proyek baru, atau peran Full-Stack / Backend Engineer. Jangan ragu menyapa melalui saluran di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Copy Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-indigo-200/80 shadow-xs hover:border-indigo-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">Email Utama</span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                  Respon Cepat
                </span>
              </div>
              <div className="flex items-center justify-between gap-2.5 bg-indigo-50/50 p-3.5 rounded-2xl border border-indigo-100 mt-2">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-semibold text-zinc-900 truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs flex items-center gap-1.5 shrink-0 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
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
              className="p-5 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:border-purple-400 transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-zinc-950 group-hover:text-purple-700 transition-colors">
                      github.com/dieartco206
                    </h3>
                    <p className="text-xs text-zinc-500">Lihat repositori & kontribusi kode</p>
                  </div>
                </div>
                <span className="text-xs text-purple-600 font-bold group-hover:translate-x-1 transition-transform">
                  Buka ↗
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Indonesia (WIB / UTC+7) • Tersedia Remote / On-Site</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Waktu Aktif: Senin – Jumat (09:00 - 18:00 WIB)</span>
              </div>
            </div>
          </div>

          {/* Right: Simple Message Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg sm:text-xl font-black text-zinc-950 mb-1">
              Kirim Pesan Langsung
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mb-6">
              Pesan akan otomatis dirangkum dan diarahkan ke WhatsApp atau aplikasi Email Anda.
            </p>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                  Nama Anda / Perusahaan
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Misal: Budi / PT Maju Digital"
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                  Pesan atau Kebutuhan
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan gambaran sistem atau proyek yang ingin Anda diskusikan..."
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-500/20 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim via WhatsApp</span>
                </button>
                <a
                  href={`mailto:${emailAddress}?subject=Diskusi Proyek&body=${encodeURIComponent(
                    message || 'Halo Adi Kurniawan, saya ingin berdiskusi mengenai proyek...'
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 transition-all shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>Kirim via Email</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
