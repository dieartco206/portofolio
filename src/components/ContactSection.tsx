import { useState, type FC, type FormEvent } from 'react';
import { Mail, MessageSquare, Copy, Check, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ContactSection: FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const emailAddress = 'adieabay@gmail.com';
  const phoneNumber = '+62 812-8888-7916';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Halo Mas Adi, nama saya ${name || 'Rekan'}.\n\n${message || 'Saya tertarik untuk berdiskusi mengenai proyek perangkat lunak.'}`
    );
    window.open(`https://wa.me/6281288887916?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-24 bg-[#f8fafc] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            <span>Kanal Komunikasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
            Mari Berdiskusi & Berkolaborasi
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
            Terbuka untuk konsultasi arsitektur sistem, proyek baru, atau peran Full-Stack / Backend Software Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Copy Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs card-elevation">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Email Resmi</span>
                <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Aktif & Responsif
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-zinc-50 p-3.5 rounded-xl border border-zinc-200/80 mt-2">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-semibold text-zinc-900 truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 shadow-2xs flex items-center justify-center gap-1.5 shrink-0 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/6281288887916"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-400 transition-all block group card-elevation"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200 group-hover:bg-zinc-200 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">WhatsApp Langsung</span>
                    <p className="text-sm font-bold font-mono text-zinc-950 mt-0.5">{phoneNumber}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-zinc-950 transition-all" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-400 transition-all block group card-elevation"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200 group-hover:bg-zinc-200 transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Repositori Publik</span>
                    <p className="text-sm font-bold font-mono text-zinc-950 mt-0.5">github.com/dieartco206</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-zinc-950 transition-all" />
              </div>
            </a>

            {/* Location & Time Info */}
            <div className="p-4 rounded-xl bg-zinc-100/70 border border-zinc-200/80 flex items-center justify-between text-xs text-zinc-600 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Depok, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>WIB (UTC+7)</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct WhatsApp Message Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs card-elevation">
              <div className="mb-5 pb-4 border-b border-zinc-100">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  Kirim Pesan Cepat via WhatsApp
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Pesan akan otomatis dirangkum dan diteruskan langsung ke WhatsApp saya.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Nama Anda / Institusi
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Pratama / PT Maju Teknologi"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Rincian Pesan / Kebutuhan Sistem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan kebutuhan sistem, arsitektur yang ingin didiskusikan, atau tawaran kerja sama..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp (+62 812-8888-7916)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
