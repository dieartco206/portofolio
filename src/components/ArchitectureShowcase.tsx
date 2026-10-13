import { useState, type FC, type ReactNode } from 'react';
import { Layers, Shield, Cpu, Database, Globe, ChevronRight, Check } from 'lucide-react';

interface ArchitectureTier {
  id: string;
  name: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
  bgGlow: string;
  components: string[];
  rationale: string;
  guarantees: string[];
}

export const ArchitectureShowcase: FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('core');

  const tiers: ArchitectureTier[] = [
    {
      id: 'client',
      name: 'Tier 1: Multi-Platform Clients',
      subtitle: 'Antarmuka terisolasi untuk setiap segmen pengguna',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
      components: [
        'React & Vite Admin Portals (Electron-ready)',
        'Vue 3 Composition API Client Dashboards',
        'Flutter Android & iOS Mobile Applications',
        'Biometric Tablet Terminals with Face Recognition Liveness',
      ],
      rationale:
        'Pemisahan portal (Admin, Guru, Siswa, Karyawan) ke dalam aplikasi terpisah mencegah bloatware, mempermudah deployment independen, dan memastikan aksesibilitas mobile-first optimal.',
      guarantees: [
        'Zero layout shifts & fast rendering',
        'Strict type-safety dengan TypeScript & DTO syncing',
        'Aksesibilitas mobile (touch target minimal 44px)',
      ],
    },
    {
      id: 'ingress',
      name: 'Tier 2: Ingress & Edge Proxy',
      subtitle: 'Gerbang pengamanan lalu lintas dan reverse proxy',
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgGlow: 'bg-emerald-500/10',
      components: [
        'Nginx Reverse Proxy & Load Termination',
        'SSL/TLS 1.3 Auto-Renewal (Certbot)',
        'WebSocket (WSS) Protocol Upgrades & Heartbeat',
        'Rate Limiting & UFW Linux Firewall Hardening',
      ],
      rationale:
        'Semua koneksi publik difilter melalui Nginx yang di-hardened. Menyediakan terminasi SSL, kompresi Gzip, proteksi DDoS dasar, dan routing transparan ke container Go internal.',
      guarantees: [
        'Sub-second SSL handshake time',
        'WebSocket connection longevity tanpa drop',
        'Proteksi port internal database dari internet terbuka',
      ],
    },
    {
      id: 'core',
      name: 'Tier 3: Golang Core Engine (Clean DDD)',
      subtitle: 'Jantung logika bisnis dengan pemisahan dependensi ketat',
      icon: <Cpu className="w-5 h-5 text-brand-400" />,
      color: 'text-brand-400',
      borderColor: 'border-brand-500/30',
      bgGlow: 'bg-brand-500/10',
      components: [
        'Presentation Layer (REST Handlers & WS Hub)',
        'Application Layer (Use Cases & Transaction Coordinators)',
        'Domain Layer (Entities, Invariants & Exceptions)',
        'Infrastructure Layer (SQL Repositories, S3 Clients, AI Adapters)',
      ],
      rationale:
        'Menerapkan Domain-Driven Design (DDD) dan Clean Architecture. Entitas domain tidak bergantung pada framework web atau ORM. Jika database atau router diganti, core business rules tetap 100% utuh tanpa regresi.',
      guarantees: [
        'Goroutines efisien tanpa memory leaks',
        'Transaksi atomik ACID untuk operasi finansial & presensi',
        'Error handling eksplisit tanpa uncaught runtime panic',
      ],
    },
    {
      id: 'storage',
      name: 'Tier 4: Storage & Data Persistence',
      subtitle: 'Penyimpanan terstruktur dan sistem berkas terdistribusi',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      bgGlow: 'bg-amber-500/10',
      components: [
        'MySQL 8 / MariaDB (Composite Indexing & Partitioning)',
        'MinIO S3 Object Storage (Foto Wajah & Berkas PDF)',
        'Redis (Session Token Blacklist & In-memory Cache)',
        'Automated DB Dumps & Scheduled Backup Workers',
      ],
      rationale:
        'Relational database dioptimasi dengan query profiling (EXPLAIN) untuk menangani jutaan baris log presensi & transaksi. Berkas biner dan dokumen dieksternalisasi ke MinIO S3 agar database tetap ramping.',
      guarantees: [
        'Integritas referensial dengan foreign key constraints',
        'Presigned upload URLs untuk keamanan transfer berkas',
        'Zero data-loss berkat transaksi berbasis rollback safety',
      ],
    },
  ];

  const active = tiers.find((t) => t.id === selectedTier) || tiers[2];

  return (
    <section id="architecture" className="py-24 relative bg-[#080a0d] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Production Architecture Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bagaimana Saya Merancang Sistem
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Dari layer edge proxy hingga persistence layer. Setiap komponen dirancang modular, berkecepatan tinggi, dan kebal terhadap kegagalan konkurensi data.
          </p>
        </div>

        {/* Visual Architecture Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Tier Selector */}
          <div className="lg:col-span-5 space-y-3">
            {tiers.map((tier) => {
              const isSelected = tier.id === selectedTier;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? `bg-[#13161d] ${tier.borderColor} shadow-lg shadow-black/40`
                      : 'bg-[#0c0e12]/80 border-white/[0.06] hover:bg-[#11141a] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? tier.bgGlow : 'bg-white/[0.03]'
                      }`}
                    >
                      {tier.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{tier.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? `${tier.color} translate-x-1` : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Blueprint Display */}
          <div className="lg:col-span-7 bg-[#0f1217] border border-white/[0.1] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className={`absolute top-0 right-0 w-64 h-64 ${active.bgGlow} blur-3xl pointer-events-none`} />

            <div className="relative z-10 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <div className={`p-2.5 rounded-xl ${active.bgGlow}`}>{active.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{active.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400">{active.subtitle}</p>
                </div>
              </div>

              {/* Rationale Narrative */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Prinsip Desain & Rationale
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-[#0a0c10] p-4 rounded-xl border border-white/[0.04]">
                  {active.rationale}
                </p>
              </div>

              {/* Components List */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Komponen & Modul Kunci
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-200 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Jaminan Kualitas Sistem
                </h4>
                <div className="space-y-1.5">
                  {active.guarantees.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
