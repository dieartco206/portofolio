import type { SkillGroup, TimelineItem, EducationItem } from '../types/portfolio';

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & Sistem',
    subtitle: 'Logika bisnis terstruktur, efisien, dan maintainable',
    iconName: 'Server',
    themeColor: 'text-emerald-700',
    borderTheme: 'border-emerald-200/90 hover:border-emerald-400',
    bgTheme: 'bg-emerald-50/40',
    items: [
      {
        name: 'Golang (Go)',
        level: 'Bahasa Utama',
        experience: 'Sistem Skala Produksi',
        description: 'Clean Architecture (DDD), goroutines konkurensi tinggi, dan framework Fiber/Gin.',
        tags: ['Clean Architecture', 'Goroutines', 'Fiber', 'Gin', 'REST API'],
      },
      {
        name: 'RESTful API & WebSocket',
        level: 'API & Protokol',
        experience: 'Real-Time Sync',
        description: 'Desain REST API terstruktur dan sinkronisasi dua arah real-time via WebSocket.',
        tags: ['WebSocket', 'RESTful API', 'JSON DTO', 'Middleware'],
      },
      {
        name: 'Keamanan & Autentikasi',
        level: 'Keamanan Data',
        experience: 'Proteksi Data',
        description: 'JWT RBAC, hashing Argon2/Bcrypt, sanitasi input, dan proteksi SQL Injection.',
        tags: ['JWT RBAC', 'Bcrypt / Argon2', 'CORS Security', 'Sanitasi Input'],
      },
      {
        name: 'Python Skrip & Otomasi',
        level: 'Scripting & Tooling',
        experience: 'Tooling & Skrip',
        description: 'Skrip pemeliharaan database, manipulasi data batch, dan bot otomasi server.',
        tags: ['Automation', 'Data Scripts', 'Maintenance Bot'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Antarmuka responsif, terstruktur, dan modular',
    iconName: 'Layout',
    themeColor: 'text-blue-700',
    borderTheme: 'border-blue-200/90 hover:border-blue-400',
    bgTheme: 'bg-blue-50/40',
    items: [
      {
        name: 'Vue 3 & Ekosistemnya',
        level: 'Frontend Framework',
        experience: 'Web & Desktop',
        description: 'Composition API, Pinia state, Vite, dan integrasi Electron untuk desktop app.',
        tags: ['Vue 3', 'Composition API', 'Pinia', 'Vite', 'Electron'],
      },
      {
        name: 'React & TypeScript',
        level: 'Frontend Library',
        experience: 'Aplikasi Web Modern',
        description: 'Komponen modular type-safe, custom hooks, dan rendering optimal.',
        tags: ['React', 'TypeScript', 'Hooks', 'Vite', 'Tailwind CSS'],
      },
      {
        name: 'Tailwind CSS & Desain Bersih',
        level: 'Styling & Desain',
        experience: 'Desain Antarmuka',
        description: 'Layout mobile-first responsif, hierarki tipografi rapi, dan micro-interaction.',
        tags: ['Tailwind CSS', 'Responsive', 'Mobile-First', 'Aksesibilitas'],
      },
      {
        name: 'Flutter & Mobile App',
        level: 'Mobile Framework',
        experience: 'Android & iOS',
        description: 'Aplikasi mobile cross-platform responsif dengan REST API dan offline storage.',
        tags: ['Flutter', 'Dart', 'Cross-Platform', 'Mobile UI'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Penyimpanan',
    subtitle: 'Skema relasional, optimasi query, dan manajemen data',
    iconName: 'Database',
    themeColor: 'text-amber-800',
    borderTheme: 'border-amber-200/90 hover:border-amber-400',
    bgTheme: 'bg-amber-50/40',
    items: [
      {
        name: 'MySQL / MariaDB',
        level: 'Database Utama',
        experience: 'Optimasi Skema & Indeks',
        description: 'Skema relasional terstruktur, composite index, dan transaksi aman (ACID rollback).',
        tags: ['Indeks Query', 'Transaksi ACID', 'Normalisasi Skema', 'GORM / Raw SQL'],
      },
      {
        name: 'MinIO (S3 Object Storage)',
        level: 'Penyimpanan Berkas',
        experience: 'Aset & Foto Wajah',
        description: 'Penyimpanan berkas self-hosted kompatibel S3 untuk foto presensi dan dokumen.',
        tags: ['MinIO S3', 'Presigned URL', 'Manajemen Media'],
      },
      {
        name: 'PostgreSQL & Redis',
        level: 'Penyimpanan Pendukung',
        experience: 'Cache & Relasional',
        description: 'Redis in-memory caching untuk session/rate-limit dan PostgreSQL relasional.',
        tags: ['Redis Cache', 'PostgreSQL', 'Key-Value Store'],
      },
    ],
  },
  {
    id: 'devops',
    title: 'Server & DevOps',
    subtitle: 'Deployment mandiri di VPS Linux dengan Docker & Nginx',
    iconName: 'Terminal',
    themeColor: 'text-purple-700',
    borderTheme: 'border-purple-200/90 hover:border-purple-400',
    bgTheme: 'bg-purple-50/40',
    items: [
      {
        name: 'Linux VPS (Ubuntu / Debian)',
        level: 'Administrasi Server',
        experience: 'Pengoperasian Mandiri',
        description: 'Setup server VPS, background services (systemd), firewall UFW, dan server hardening.',
        tags: ['Ubuntu VPS', 'Systemd', 'UFW Firewall', 'Bash'],
      },
      {
        name: 'Nginx Reverse Proxy & SSL',
        level: 'Web Server',
        experience: 'Routing & Keamanan',
        description: 'Reverse proxy multi-domain, SSL Let’s Encrypt auto-renewal, dan WebSocket upgrade.',
        tags: ['Reverse Proxy', 'SSL Certbot', 'WebSocket Upgrade', 'Gzip'],
      },
      {
        name: 'Docker & Docker Compose',
        level: 'Kontainerisasi',
        experience: 'Isolasi Service',
        description: 'Dockerfile multi-stage ringan dan orkestrasi container dengan Docker Compose.',
        tags: ['Docker', 'Docker Compose', 'Multi-Stage Build'],
      },
      {
        name: 'Git & Version Control',
        level: 'Alur Kerja Harian',
        experience: 'Kolaborasi Kode',
        description: 'Conventional commits terstruktur, branching rapi, dan sinkronisasi GitHub.',
        tags: ['Git', 'GitHub', 'Conventional Commits'],
      },
    ],
  },
];

export const experienceTimelineData: TimelineItem[] = [
  {
    period: 'Oktober 2024 — Sekarang',
    role: 'Fullstack Developer',
    companyOrContext: 'Pengembangan Software Mandiri',
    location: 'Depok, Jawa Barat (Remote / Hybrid)',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    description: 'Mengembangkan aplikasi web dan sistem backend menggunakan Golang, Vue/React, serta deployment ke server Linux VPS.',
    achievements: [
      'Sistem Presensi: Verifikasi wajah via kamera browser dan validasi titik koordinat GPS.',
      'Backend Go Clean Architecture dengan transaksi database MySQL dan WebSocket.',
      'Platform E-Learning: 3 portal terpisah (Admin, Guru, Siswa) dengan fitur ujian CBT & rumus KaTeX.',
      'KiddoGrowth: Visualisasi kurva pertumbuhan balita WHO Z-Score & jadwal imunisasi.',
    ],
    projectHighlights: [
      {
        name: 'Sistem Presensi Biometrik & GPS',
        tech: 'Go, Vue 3, Docker, MinIO, GPS',
        desc: 'Presensi karyawan dengan verifikasi kamera wajah dan radius GPS.',
      },
      {
        name: 'Platform E-Learning 3 Portal',
        tech: 'Go, React, Vue, KaTeX, ExcelJS',
        desc: 'Platform 3 portal terpisah dengan modul ujian dan rekap nilai.',
      },
      {
        name: 'KiddoGrowth Healthcare',
        tech: 'React, TypeScript, Go API, Tailwind',
        desc: 'Visualisasi kurva pertumbuhan balita dan jadwal imunisasi.',
      },
    ],
    skills: ['Golang', 'Clean Architecture', 'Vue 3', 'React', 'TypeScript', 'Docker Compose', 'Linux VPS', 'WebSocket'],
  },
  {
    period: 'Oktober 2022 – Oktober 2024',
    role: 'Fullstack Developer',
    companyOrContext: 'PT Dowlat Alib Indonesia',
    location: 'Jakarta / Depok (Hybrid)',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-300',
    description: 'Mengembangkan platform e-commerce logam mulia, portal seller, dan RESTful API untuk aplikasi mobile.',
    achievements: [
      'E-Commerce Logam Mulia: Tampilan harga pasar harian, modul reseller, dan transaksi checkout.',
      'PocketYou Seller: Portal web seller (MySQL, Laravel, payment gateway & notifikasi WA).',
      'SalamBaitullah API: RESTful API backend untuk aplikasi mobile dan integrasi database.',
      'Server VPS: Manajemen server Ubuntu VPS, konfigurasi Nginx reverse proxy, dan SSL.',
    ],
    projectHighlights: [
      {
        name: 'Permata Warisan & Prestige Gold',
        tech: 'Vue 3, Laravel, MySQL, Payment',
        desc: 'Platform e-commerce logam mulia dan transaksi admin.',
      },
      {
        name: 'PocketYou Seller',
        tech: 'Laravel, MySQL, Payment Gateway, WA API',
        desc: 'Portal seller dari katalog produk hingga notifikasi invoice WhatsApp.',
      },
      {
        name: 'SalamBaitullah Mobile API',
        tech: 'REST API, MySQL, JWT Auth',
        desc: 'Backend API untuk aplikasi mobile ibadah dan travel.',
      },
      {
        name: 'Manajemen Server VPS',
        tech: 'Ubuntu VPS, Nginx, Docker, SSL',
        desc: 'Setup server live, konfigurasi Nginx reverse proxy, dan backup rutin.',
      },
    ],
    skills: ['Vue 3', 'Laravel', 'PHP', 'MySQL', 'RESTful API', 'Linux VPS', 'Nginx', 'Docker', 'Payment Gateway'],
  },
  {
    period: 'Oktober 2021 – Oktober 2022',
    role: 'Junior Programmer',
    companyOrContext: 'PT Dowlat Alib Indonesia',
    location: 'Jakarta / Depok (Hybrid)',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-300',
    description: 'Mengembangkan antarmuka web dinamis, portal admin data management, dan integrasi API.',
    achievements: [
      'Portal Admin PocketYou VIP: Manajemen konten dan pengguna aplikasi mobile (CI4 & JS).',
      'Modul verifikasi data terpusat untuk mempermudah operasional tim support.',
      'Penyusunan dokumentasi dan automated testing endpoint API via Postman & Git.',
    ],
    projectHighlights: [
      {
        name: 'PocketYou VIP Portal',
        tech: 'CodeIgniter 4, PHP, JavaScript, MySQL',
        desc: 'Portal admin manajemen pengguna dan konten dinamis aplikasi.',
      },
      {
        name: 'API Testing & Documentation',
        tech: 'Postman, Git, JSON Schema',
        desc: 'Dokumentasi endpoint dan automated test fungsionalitas API.',
      },
    ],
    skills: ['CodeIgniter 4', 'PHP', 'JavaScript', 'MySQL', 'Postman', 'Git', 'Bootstrap'],
  },
];

export const educationData: EducationItem = {
  degree: 'D3 Sistem Informasi',
  campus: 'Universitas Bina Sarana Informatika (UBSI)',
  period: 'Lulus',
  grade: 'IPK: 3.79 / 4.00',
  status: 'Lulus',
  description: 'Rekayasa perangkat lunak, perancangan basis data relasional, dan pengembangan aplikasi web.',
  highlights: [
    'Meraih IPK 3.79 dari skala 4.00.',
    'Tugas akhir implementasi sistem informasi web berstandar SDLC.',
  ],
};
