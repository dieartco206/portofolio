import type { SkillGroup, TimelineItem, EducationItem } from '../types/portfolio';

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & Sistem',
    subtitle: 'Logika bisnis cepat, aman, dan mudah di-maintain',
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
        level: 'Mahir',
        experience: 'Real-Time Sync',
        description: 'Desain REST API terstruktur dan sinkronisasi dua arah real-time via WebSocket.',
        tags: ['WebSocket', 'RESTful API', 'JSON DTO', 'Middleware'],
      },
      {
        name: 'Keamanan & Autentikasi',
        level: 'Penerapan Standar',
        experience: 'Proteksi Data',
        description: 'JWT RBAC, hashing Argon2/Bcrypt, sanitasi input, dan proteksi SQL Injection.',
        tags: ['JWT RBAC', 'Bcrypt / Argon2', 'CORS Security', 'Sanitasi Input'],
      },
      {
        name: 'Python Skrip & Otomasi',
        level: 'Praktis',
        experience: 'Tooling & Skrip',
        description: 'Skrip pemeliharaan database, manipulasi data batch, dan bot otomasi server.',
        tags: ['Automation', 'Data Scripts', 'Maintenance Bot'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Antarmuka responsif, modern, dan ringan',
    iconName: 'Layout',
    themeColor: 'text-blue-700',
    borderTheme: 'border-blue-200/90 hover:border-blue-400',
    bgTheme: 'bg-blue-50/40',
    items: [
      {
        name: 'Vue 3 & Ekosistemnya',
        level: 'Mahir',
        experience: 'Web & Desktop',
        description: 'Composition API, Pinia state, Vite, dan integrasi Electron untuk desktop app.',
        tags: ['Vue 3', 'Composition API', 'Pinia', 'Vite', 'Electron'],
      },
      {
        name: 'React & TypeScript',
        level: 'Mahir',
        experience: 'Aplikasi Web Modern',
        description: 'Komponen modular type-safe, custom hooks, dan rendering optimal.',
        tags: ['React', 'TypeScript', 'Hooks', 'Vite', 'Tailwind CSS'],
      },
      {
        name: 'Tailwind CSS & Desain Bersih',
        level: 'Fasih',
        experience: 'Desain Antarmuka',
        description: 'Layout mobile-first responsif, hierarki tipografi rapi, dan micro-interaction.',
        tags: ['Tailwind CSS', 'Responsive', 'Mobile-First', 'Aksesibilitas'],
      },
      {
        name: 'Flutter & Mobile App',
        level: 'Menengah',
        experience: 'Android & iOS',
        description: 'Aplikasi mobile cross-platform responsif dengan REST API dan offline storage.',
        tags: ['Flutter', 'Dart', 'Cross-Platform', 'Mobile UI'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Penyimpanan',
    subtitle: 'Integritas data dan query berkecepatan tinggi',
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
    role: 'Lead Systems Architect & Full-Stack Engineer',
    companyOrContext: 'Proyek Skala Produksi Mandiri & Klien Enterprise',
    location: 'Depok, Jawa Barat (Remote / Hybrid)',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    description: 'Merancang arsitektur sistem skala produksi hulu-ke-hilir menggunakan Go, React/Vue 3, dan DevOps mandiri Linux VPS.',
    achievements: [
      'Sistem Presensi BSP: Face Recognition AI lokal browser & geofencing GPS anti-spoofing.',
      'Backend Go Clean Architecture (DDD) tahan beban konkurensi tinggi & transaksi database ACID.',
      'Platform E-Learning 3 Portal (Admin, Guru, Siswa) dengan CBT engine & formula KaTeX.',
      'KiddoGrowth: Visualisasi kurva pertumbuhan balita baku WHO Z-Score & jadwal imunisasi.',
    ],
    projectHighlights: [
      {
        name: 'Sistem Presensi Biometrik BSP',
        tech: 'Go, Vue 3, Docker, MinIO S3, GPS',
        desc: 'Presensi multi-cabang dengan Face AI dan WebSocket real-time.',
      },
      {
        name: 'Multi-Role E-Learning Platform',
        tech: 'Go DDD, React, Vue, KaTeX, ExcelJS',
        desc: 'Platform 3 portal terpisah dengan CBT engine dan rapor KKM.',
      },
      {
        name: 'KiddoGrowth Healthcare',
        tech: 'React, TypeScript, Go API, Tailwind',
        desc: 'Visualisasi kurva WHO Z-Score dan pelacak tumbuh kembang.',
      },
    ],
    skills: ['Golang', 'Clean Architecture', 'Vue 3', 'React', 'TypeScript', 'Docker Compose', 'Linux VPS', 'WebSocket', 'Face AI'],
  },
  {
    period: 'Oktober 2022 – Oktober 2024',
    role: 'Fullstack Developer',
    companyOrContext: 'PT Dowlat Alib Indonesia',
    location: 'Jakarta / Depok (Hybrid)',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-300',
    description: 'Mengembangkan platform e-commerce logam mulia, seller portal go-live, dan RESTful API high-throughput.',
    achievements: [
      'E-Commerce Logam Mulia: Real-time market chart, modul reseller, dan checkout aman 15 menit.',
      'PocketYou Seller: Portal seller end-to-end (MySQL, Laravel, payment gateway & WA bot).',
      'SalamBaitullah API: RESTful API high-throughput untuk ribuan pengguna mobile aktif.',
      'DevOps VPS Live: Manajemen Ubuntu VPS, Nginx reverse proxy, SSL, dan auto backup.',
    ],
    projectHighlights: [
      {
        name: 'Permata Warisan & Prestige Gold',
        tech: 'Vue 3, Laravel/Go, Chart, Payment',
        desc: 'Platform investasi emas dengan update harga pasar harian.',
      },
      {
        name: 'PocketYou Seller',
        tech: 'Laravel, MySQL, Payment Gateway, WA API',
        desc: 'Portal seller dari katalog produk hingga invoice WhatsApp.',
      },
      {
        name: 'SalamBaitullah Mobile API',
        tech: 'High-Throughput REST API, JWT Auth',
        desc: 'Arsitektur API backend untuk aplikasi mobile ribuan user.',
      },
      {
        name: 'Manajemen Server VPS Production',
        tech: 'Ubuntu Linux VPS, Nginx, Docker, SSL',
        desc: 'Pengelolaan server live, zero-downtime deploy, dan backup data.',
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
  status: 'Lulus Sangat Memuaskan',
  description: 'Rekayasa perangkat lunak, arsitektur basis data relasional, dan performa backend API.',
  highlights: [
    'Meraih IPK 3.79 dari skala 4.00 (Sangat Memuaskan).',
    'Tugas akhir implementasi sistem informasi web berstandar SDLC.',
  ],
};
