import type { FC } from 'react';
import { CheckCircle2, Shield, Zap, Heart } from 'lucide-react';

export const AboutSection: FC = () => {
  const philosophies = [
    {
      title: 'Kode Bersih & Mudah Dirawat',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      desc: 'Menulis kode yang mudah dipahami rekan tim berikutnya. Memisahkan logika bisnis dari database menggunakan Clean Architecture.',
    },
    {
      title: 'Keamanan Data & Konkurensi',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      desc: 'Mencegah race condition dan duplikasi data menggunakan transaksi database ACID dan locking atomik di Go.',
    },
    {
      title: 'Performa Cepat Tanpa Bloatware',
      icon: <Zap className="w-4 h-4 text-amber-600" />,
      desc: 'Memilih struktur data dan query yang efisien dengan indexing komposit, payload JSON minimal, dan waktu muat ringan.',
    },
    {
      title: 'Antarmuka Nyaman di Smartphone',
      icon: <Heart className="w-4 h-4 text-rose-600" />,
      desc: 'Merancang UI dengan tombol ramah sentuhan jempol (minimal 44px), navigasi intuitif, dan responsif di berbagai ukuran layar.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200">
              Tentang Saya
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
              Fokus pada solusi praktis yang benar-benar memecahkan masalah.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p>
                Saya menyukai proses membangun software dari awal: mulai dari menganalisis kebutuhan operasional, merancang skema tabel database, membangun endpoint API di Golang, hingga mendesain antarmuka di Vue atau React.
              </p>
              <p>
                Bagi saya, sistem yang bagus bukan yang paling rumit, melainkan yang <strong>dapat diandalkan setiap hari oleh pengguna</strong>, tidak mudah crash saat traffic tinggi, dan mudah di-maintain saat ada penambahan fitur baru.
              </p>
              <p>
                Ketika tidak sedang menulis kode, saya biasanya mengulik konfigurasi server Linux, mencoba tooling baru, atau mengoptimasi performa query database.
              </p>
            </div>
          </div>

          {/* Right Column: Work Principles Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded-lg bg-white border border-zinc-200 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
