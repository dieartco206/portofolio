import type { SkillGroup, TimelineItem, EducationItem } from '../types/portfolio';

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & Sistem',
    subtitle: 'Membangun logika bisnis yang cepat, aman, dan mudah dirawat',
    iconName: 'Server',
    themeColor: 'text-emerald-700',
    borderTheme: 'border-emerald-200/90 hover:border-emerald-400',
    bgTheme: 'bg-emerald-50/40',
    items: [
      {
        name: 'Golang (Go)',
        level: 'Bahasa Utama',
        experience: 'Sistem Skala Produksi',
        description: 'Clean Architecture (DDD), konkurensi goroutine, transaksi database atomik, framework Fiber dan Gin.',
        tags: ['Clean Architecture', 'Goroutines', 'Fiber', 'Gin', 'REST API'],
      },
      {
        name: 'RESTful API & WebSocket',
        level: 'Mahir',
        experience: 'Real-Time Sync',
        description: 'Desain endpoint API terstruktur, integrasi WebSocket dua arah untuk sinkronisasi data presensi dan notifikasi real-time.',
        tags: ['WebSocket', 'RESTful API', 'JSON DTO', 'Middleware'],
      },
      {
        name: 'Keamanan & Autentikasi',
        level: 'Penerapan Standar',
        experience: 'Proteksi Data',
        description: 'JWT token dengan role-based access control (RBAC), enkripsi password (Argon2 / Bcrypt), dan proteksi injeksi SQL.',
        tags: ['JWT RBAC', 'Bcrypt / Argon2', 'CORS Security', 'Sanitasi Input'],
      },
      {
        name: 'Python Skrip & Otomasi',
        level: 'Praktis',
        experience: 'Tooling & Skrip',
        description: 'Skrip pemeliharaan database, manipulasi data batch, pengujian bot otomatis, dan otomasi konfigurasi server.',
        tags: ['Automation', 'Data Scripts', 'Maintenance Bot'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Menciptakan antarmuka yang bersih, responsif, dan ramah pengguna',
    iconName: 'Layout',
    themeColor: 'text-blue-700',
    borderTheme: 'border-blue-200/90 hover:border-blue-400',
    bgTheme: 'bg-blue-50/40',
    items: [
      {
        name: 'Vue 3 & Ekosistemnya',
        level: 'Mahir',
        experience: 'Aplikasi Web & Desktop',
        description: 'Composition API, Pinia state management, integrasi Electron untuk aplikasi desktop kasir/admin, dan komponen reaktif.',
        tags: ['Vue 3', 'Composition API', 'Pinia', 'Vite', 'Electron'],
      },
      {
        name: 'React & TypeScript',
        level: 'Mahir',
        experience: 'Aplikasi Web Modern',
        description: 'Pengembangan komponen modular type-safe, hooks kustom, pengelolaan state efisien, dan rendering optimal.',
        tags: ['React', 'TypeScript', 'Hooks', 'Vite', 'Tailwind CSS'],
      },
      {
        name: 'Tailwind CSS & Desain Bersih',
        level: 'Fasif',
        experience: 'Desain Antarmuka',
        description: 'Layout mobile-first responsif, palet warna seimbang, hierarki tipografi rapi, dan micro-interaction yang nyaman di mata.',
        tags: ['Tailwind CSS', 'Responsive', 'Mobile-First', 'Aksesibilitas'],
      },
      {
        name: 'Flutter & Mobile App',
        level: 'Menengah',
        experience: 'Android & iOS',
        description: 'Aplikasi mobile multi-platform dengan tampilan responsif, sinkronisasi data REST API, dan penyimpanan offline.',
        tags: ['Flutter', 'Dart', 'Cross-Platform', 'Mobile UI'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Penyimpanan',
    subtitle: 'Menjaga integritas data dan kecepatan pembacaan query',
    iconName: 'Database',
    themeColor: 'text-amber-800',
    borderTheme: 'border-amber-200/90 hover:border-amber-400',
    bgTheme: 'bg-amber-50/40',
    items: [
      {
        name: 'MySQL / MariaDB',
        level: 'Database Utama',
        experience: 'Optimasi Skema & Indeks',
        description: 'Perancangan skema relasional terstruktur, indeks komposit untuk query cepat, dan transaksi aman (ACID rollback).',
        tags: ['Indeks Query', 'Transaksi ACID', 'Normalisasi Skema', 'GORM / Raw SQL'],
      },
      {
        name: 'MinIO (S3 Object Storage)',
        level: 'Penyimpanan Berkas',
        experience: 'Aset & Foto Wajah',
        description: 'Penyimpanan berkas self-hosted kompatibel AWS S3 untuk foto presensi wajah, berkas PDF rapor, dan dokumen pengguna.',
        tags: ['MinIO S3', 'Presigned URL', 'Manajemen Media'],
      },
      {
        name: 'PostgreSQL & Redis',
        level: 'Penyimpanan Pendukung',
        experience: 'Cache & Relasional',
        description: 'Caching in-memory Redis untuk session dan rate limit, serta PostgreSQL untuk struktur data relasional khusus.',
        tags: ['Redis Cache', 'PostgreSQL', 'Key-Value Store'],
      },
    ],
  },
  {
    id: 'devops',
    title: 'Server & DevOps',
    subtitle: 'Deployment mandiri yang andal di VPS Linux dengan Docker',
    iconName: 'Terminal',
    themeColor: 'text-purple-700',
    borderTheme: 'border-purple-200/90 hover:border-purple-400',
    bgTheme: 'bg-purple-50/40',
    items: [
      {
        name: 'Linux VPS (Ubuntu / Debian)',
        level: 'Administrasi Server',
        experience: 'Pengoperasian Mandiri',
        description: 'Setup server VPS mandiri, manajemen background service (systemd), konfigurasi firewall UFW, dan maintenance rutin.',
        tags: ['Ubuntu VPS', 'Systemd', 'UFW Firewall', 'Bash'],
      },
      {
        name: 'Nginx Reverse Proxy & SSL',
        level: 'Konfigurasi Web Server',
        experience: 'Routing & Keamanan',
        description: 'Reverse proxy multi-domain, sertifikat SSL Let’s Encrypt auto-renewal, upgrade protokol WebSocket, dan kompresi Gzip.',
        tags: ['Reverse Proxy', 'SSL Certbot', 'WebSocket Upgrade', 'Gzip'],
      },
      {
        name: 'Docker & Docker Compose',
        level: 'Kontainerisasi',
        experience: 'Isolasi Service',
        description: 'Pembuatan Dockerfile multi-stage berukuran ringkas, orkestrasi kontainer database dan backend dengan Docker Compose.',
        tags: ['Docker', 'Docker Compose', 'Multi-Stage Build'],
      },
      {
        name: 'Git & Version Control',
        level: 'Alur Kerja Harian',
        experience: 'Kolaborasi Kode',
        description: 'Conventional commits terstruktur, branching yang rapi, dan sinkronisasi repositori GitHub secara berkala.',
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
    description: 'Merancang arsitektur perangkat lunak berskala produksi dari hulu ke hilir. Menerapkan metodologi AI-Assisted Development dan Agentic Workflows untuk mengakselerasi rekayasa sistem berkinerja tinggi, dari perancangan arsitektur hingga zero-downtime deployment.',
    achievements: [
      'Membangun Sistem Presensi Biometrik BSP terdistribusi dengan Face Recognition AI lokal di perangkat browser/tablet dan validasi geofencing GPS anti fake-location.',
      'Merancang arsitektur backend Go Clean Architecture (DDD) yang tahan uji beban konkurensi tinggi dan transaksi database atomik aman.',
      'Mengembangkan Multi-Role E-Learning Platform (Admin, Guru, Siswa) dengan CBT exam engine, render formula matematika KaTeX, dan rekap buku nilai otomatis berstandar KKM.',
      'Mengembangkan KiddoGrowth (Child Development Tracker) berbasis kurva baku persentil WHO Z-score dan logging nutrisi harian.',
    ],
    projectHighlights: [
      {
        name: 'Sistem Presensi Biometrik BSP',
        tech: 'Golang, Vue 3, Docker, MinIO S3, Geofencing GPS',
        desc: 'Aplikasi presensi multi-cabang dengan Face Recognition AI, geofencing GPS anti-spoofing, dan WebSocket real-time broadcast.',
      },
      {
        name: 'Multi-Role E-Learning Platform',
        tech: 'Golang Clean Architecture, React, Vue, KaTeX, ExcelJS',
        desc: 'Sistem akademik 3 portal dengan CBT engine terisolasi, formula matematika presisi, dan ekspor rapor Excel berformat KKM.',
      },
      {
        name: 'KiddoGrowth Healthcare',
        tech: 'React, TypeScript, Recharts, Go API, Tailwind CSS',
        desc: 'Engine visualisasi kurva persentil WHO Z-Score (SD -3 s/d +3) dan pelacak jadwal imunisasi dasar balita.',
      },
    ],
    skills: ['Golang', 'Clean Architecture', 'Vue 3', 'React', 'TypeScript', 'Docker Compose', 'Linux VPS', 'WebSocket', 'Face Recognition AI'],
  },
  {
    period: 'Oktober 2022 – Oktober 2024',
    role: 'Fullstack Developer',
    companyOrContext: 'PT Dowlat Alib Indonesia',
    location: 'Jakarta / Depok (Hybrid)',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-300',
    description: 'Bertanggung jawab atas pengembangan platform e-commerce & investasi komoditas logam mulia, sistem seller end-to-end hingga go-live, RESTful API high-throughput, serta pengelolaan penuh infrastruktur server Linux VPS live.',
    achievements: [
      'Mengembangkan platform e-commerce & investasi logam mulia (Permata Warisan & Prestige Gold) berbasis Vue 3 dengan grafik harga emas real-time, modul reseller, dan transaksi admin.',
      'Membangun sistem web seller PocketYou Seller end-to-end hingga go-live (database MySQL, backend Laravel, payment gateway, dan otomasi WhatsApp).',
      'Merancang arsitektur High-Throughput RESTful API dan database relasional untuk aplikasi mobile SalamBaitullah (Malaysia) yang melayani ribuan pengguna aktif.',
      'Bertanggung jawab penuh atas operasional server Linux VPS live, konfigurasi Nginx reverse proxy, proteksi SSL, serta otomasi backup data dan disaster recovery.',
    ],
    projectHighlights: [
      {
        name: 'Permata Warisan & Prestige Gold',
        tech: 'Vue 3, Laravel/Go, Real-Time Market Chart, AI Recommendations',
        desc: 'Platform e-commerce & investasi emas/perhiasan dengan sinkronisasi harga pasar harian, proteksi checkout 15 menit, dan panel transaksi admin.',
      },
      {
        name: 'PocketYou Seller',
        tech: 'Laravel, MySQL, Payment Gateway, WhatsApp API',
        desc: 'Sistem web portal seller end-to-end dari manajemen katalog, mutasi transaksi, hingga notifikasi invoice instan via WhatsApp.',
      },
      {
        name: 'SalamBaitullah (Mobile Apps Malaysia)',
        tech: 'High-Throughput RESTful API, Relational DB, JWT Auth',
        desc: 'Arsitektur API backend berkecepatan tinggi untuk aplikasi mobile ibadah & travel dengan ribuan pengguna aktif.',
      },
      {
        name: 'Manajemen Server VPS Production',
        tech: 'Ubuntu Linux VPS, Nginx, Docker, SSL Certbot, Backup Automation',
        desc: 'Pengelolaan infrastruktur cloud mandiri, zero-downtime deployment, optimasi reverse proxy, dan penanganan insiden server.',
      },
    ],
    skills: ['Vue 3', 'Laravel', 'PHP', 'MySQL', 'RESTful API', 'Linux VPS', 'Nginx Reverse Proxy', 'Docker', 'Payment Gateway', 'WhatsApp API'],
  },
  {
    period: 'Oktober 2021 – Oktober 2022',
    role: 'Junior Programmer',
    companyOrContext: 'PT Dowlat Alib Indonesia',
    location: 'Jakarta / Depok (Hybrid)',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-300',
    description: 'Mengembangkan antarmuka web dinamis, modul portal admin data management aplikasi mobile, serta kolaborasi pengujian dan dokumentasi endpoint API.',
    achievements: [
      'Mengembangkan antarmuka web dinamis dan portal admin PocketYou VIP untuk manajemen data aplikasi mobile berbasis CodeIgniter 4 dan JavaScript.',
      'Membangun modul manajemen data terpusat untuk mempermudah operasional tim support dalam memverifikasi akun pengguna dan data transaksi.',
      'Berkolaborasi intensif menggunakan Git version control dan Postman untuk dokumentasi serta automated testing endpoint API lintas tim.',
    ],
    projectHighlights: [
      {
        name: 'PocketYou VIP Portal',
        tech: 'CodeIgniter 4, PHP, JavaScript, Bootstrap, MySQL',
        desc: 'Pengembangan portal admin manajemen pengguna dan konten dinamis aplikasi mobile.',
      },
      {
        name: 'API Testing & Documentation',
        tech: 'Postman, Git, JSON Schema',
        desc: 'Penyusunan dokumentasi endpoint dan pengujian fungsionalitas API lintas tim programmer.',
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
  status: 'Lulus dengan Predikat Sangat Memuaskan',
  description: 'Mendalami rekayasa perangkat lunak, perancangan basis data relasional berkinerja tinggi, arsitektur sistem informasi enterprise, dan pengembangan aplikasi web terstruktur.',
  highlights: [
    'Meraih Indeks Prestasi Kumulatif (IPK) 3.79 dari skala 4.00.',
    'Menyelesaikan tugas akhir implementasi sistem informasi berbasis web dengan metodologi SDLC terstruktur.',
    'Fokus riset terapan pada performa backend API dan keandalan sistem basis data.',
  ],
};

