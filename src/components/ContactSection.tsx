import { useState, type FC, type FormEvent } from 'react';
import { Mail, MessageSquare, Copy, Check, MapPin, Send, ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'motion/react';

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
    <section id="contact" className="py-14 sm:py-24 bg-[#f8fafc] dark:bg-[#0c0e17] border-b border-zinc-200/80 dark:border-white/[0.08] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-3 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Mari Terhubung & Berkolaborasi
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            Terbuka untuk diskusi kesempatan kerja Full-Stack & Backend, konsultasi arsitektur sistem, atau proyek freelance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Contact Info Cards with In-View Slide */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3.5"
          >
            {/* Copy Email Card */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-blue-200/80 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-blue-500/40 transition-all luxury-card"
            >
              <div className="mb-2">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider">Email Resmi</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-blue-50/50 dark:bg-zinc-950/80 p-3.5 rounded-xl border border-blue-200/70 dark:border-white/[0.06] mt-2">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-200 truncate">{emailAddress}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-zinc-800 text-blue-900 dark:text-zinc-200 border border-blue-200 dark:border-white/10 shadow-2xs flex items-center justify-center gap-1.5 shrink-0 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Salin</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* WhatsApp Direct Card */}
            <motion.a
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              href="https://wa.me/6281288887916"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-emerald-200/90 dark:border-white/[0.08] hover:border-emerald-400 dark:hover:border-emerald-500/40 block group luxury-card transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">WhatsApp</span>
                    <p className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">{phoneNumber}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              href="https://github.com/dieartco206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-white/20 block group luxury-card transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-500/20 transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">GitHub</span>
                    <p className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">github.com/dieartco206</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-white transition-all" />
              </div>
            </motion.a>

            {/* Location Info */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/[0.06] shadow-2xs flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-300 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Depok, Jawa Barat, Indonesia</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30">
                Remote / Onsite
              </span>
            </div>
          </motion.div>

          {/* Right: Quick Direct WhatsApp Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/[0.08] luxury-card">
              <div className="mb-5 pb-4 border-b border-zinc-100 dark:border-white/[0.08]">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                  Kirim Pesan WhatsApp Langsung
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Pesan otomatis terformat dan diarahkan ke kontak WhatsApp saya.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Nama / Perusahaan
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso (HRD / Tech Recruiter)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-950/80 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-500/30 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Halo Mas Adi, kami tertarik mendiskusikan peluang kerja / proyek..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-950/80 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-500/30 focus:border-emerald-500 transition-all resize-none font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 dark:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan WhatsApp</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
