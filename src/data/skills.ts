import type { SkillGroup, TimelineItem } from '../types/portfolio';

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & High-Concurrency Systems',
    subtitle: 'Arsitektur backend tangguh berkecepatan tinggi dengan Go',
    iconName: 'Server',
    items: [
      {
        name: 'Golang (Go)',
        level: 'Expert / Daily Driver',
        experience: 'Production Scale',
        description: 'Clean Architecture (DDD), goroutines concurrency, atomic transactions, micro-monolith, Fiber & Gin framework.',
        tags: ['Clean Architecture', 'Goroutines', 'Channels', 'Gin', 'Fiber'],
      },
      {
        name: 'RESTful API & WebSocket',
        level: 'Advanced',
        experience: 'High Concurrency',
        description: 'Desain API kontrak terstandar, streaming data real-time via WebSocket dengan auto-reconnect & heartbeat.',
        tags: ['WebSocket (WSS)', 'REST Design', 'Swagger / OpenAPI', 'Rate Limiting'],
      },
      {
        name: 'Security & Auth',
        level: 'Advanced',
        experience: 'Hardened',
        description: 'JWT Auth dengan token rotation, Role-Based Access Control (RBAC), Argon2/Bcrypt hashing, proteksi OWASP.',
        tags: ['JWT RBAC', 'Bcrypt/Argon2', 'CORS Hardening', 'SQL Injection Shield'],
      },
      {
        name: 'Python Automation',
        level: 'Proficient',
        experience: 'Tooling & Ops',
        description: 'Skrip pemeliharaan database otomatis, pengujian integrasi berbasis bot, dan sinkronisasi server VPS.',
        tags: ['Automation Scripts', 'DB Migrations', 'Audit Scrapers', 'DevOps Tools'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile Engineering',
    subtitle: 'Antarmuka web & aplikasi mobile responsif dengan pengalaman pengguna kelas dunia',
    iconName: 'Layout',
    items: [
      {
        name: 'React & TypeScript',
        level: 'Advanced',
        experience: 'Production Scale',
        description: 'Arsitektur komponen modular, custom hooks, performa rendering optimal tanpa memori bocor, Vite tooling.',
        tags: ['TypeScript', 'Hooks', 'Vite', 'State Management'],
      },
      {
        name: 'Vue 3 & Ecosystem',
        level: 'Advanced',
        experience: 'Production Scale',
        description: 'Vue 3 Composition API, Pinia state management, Vue Router guards, komponen reaktif, integrasi Electron.',
        tags: ['Composition API', 'Pinia', 'Vite', 'Electron Desktop'],
      },
      {
        name: 'Tailwind CSS & Design Systems',
        level: 'Expert',
        experience: 'Design Engineer',
        description: 'Penerapan aturan anti-slop, rasio warna 60-30-10, layout 8px grid, micro-interactions, dark luxury UX.',
        tags: ['Tailwind CSS', 'Framer Motion', 'Design Systems', 'WCAG A11y'],
      },
      {
        name: 'Flutter & Mobile',
        level: 'Proficient',
        experience: 'Multi-Platform',
        description: 'Pengembangan aplikasi mobile Android & iOS dengan antarmuka adaptif, state management, dan caching offline.',
        tags: ['Dart', 'Flutter UI', 'Mobile REST Sync', 'Responsive'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage Engines',
    subtitle: 'Tata kelola data dengan integritas referensial dan indeks query optimal',
    iconName: 'Database',
    items: [
      {
        name: 'MySQL / MariaDB',
        level: 'Advanced',
        experience: 'High Volume',
        description: 'Perancangan skema relasional, indeks composite, isolasi transaksi ACID, dan profiling query berat (EXPLAIN).',
        tags: ['Indexing Strategies', 'ACID Transactions', 'Query Tuning', 'GORM / Raw SQL'],
      },
      {
        name: 'MinIO / S3 Object Storage',
        level: 'Advanced',
        experience: 'Production Infra',
        description: 'Penyimpanan berkas terdistribusi self-hosted kompatibel S3, presigned upload URLs, dan manajemen aset media.',
        tags: ['MinIO S3', 'Presigned URLs', 'Bucket Policies', 'Asset Pipelines'],
      },
      {
        name: 'PostgreSQL & Redis',
        level: 'Proficient',
        experience: 'Caching & Relational',
        description: 'Caching in-memory untuk session dan rate limiter, serta manajemen data relasional tingkat lanjut.',
        tags: ['Redis Cache', 'Postgres Schema', 'Pub/Sub', 'Key-Value Stores'],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    subtitle: 'Deploy andal, orkestrasi kontainer, dan keamanan server Linux VPS',
    iconName: 'Terminal',
    items: [
      {
        name: 'Linux VPS & Server Hardening',
        level: 'Advanced',
        experience: 'Production Ops',
        description: 'Administrasi server Ubuntu/Debian, manajemen systemd services, proteksi firewall UFW, isolasi hak akses user.',
        tags: ['Ubuntu VPS', 'Systemd Daemons', 'UFW Security', 'Bash Shell'],
      },
      {
        name: 'Nginx Reverse Proxy & SSL',
        level: 'Expert',
        experience: 'High Traffic',
        description: 'Konfigurasi Nginx kustom, SSL Let’s Encrypt auto-renewal, WebSocket proxy upgrades, caching statis, Gzip.',
        tags: ['Reverse Proxy', 'WebSocket Upgrades', 'Certbot SSL', 'Gzip Compression'],
      },
      {
        name: 'Docker & Docker Compose',
        level: 'Advanced',
        experience: 'Containerization',
        description: 'Multi-stage Dockerfiles berukuran kecil, jaringan kontainer terisolasi, orkestrasi database dan aplikasi.',
        tags: ['Docker Compose', 'Multi-stage Builds', 'Volume Persist', 'Network Isolation'],
      },
      {
        name: 'Git & Version Control',
        level: 'Advanced',
        experience: 'Clean Commits',
        description: 'Conventional commits terstandar, alur kerja branch kolaboratif, dan manajemen rilis GitHub.',
        tags: ['Conventional Commits', 'GitHub Flow', 'CI/CD Pipelines', 'Branch Safety'],
      },
    ],
  },
];

export const experienceTimelineData: TimelineItem[] = [
  {
    period: '2023 — Sekarang',
    role: 'Lead Systems Architect & Senior Full-Stack Engineer',
    companyOrContext: 'Independent Engineering & Production Deployments',
    location: 'Indonesia (Remote / Hybrid)',
    description: 'Memimpin perancangan dan implementasi end-to-end untuk berbagai platform enterprise berskala riil, mulai dari sistem presensi biometrik multi-cabang hingga multi-portal e-learning.',
    achievements: [
      'Merancang arsitektur backend Golang dengan Clean Architecture untuk 10+ proyek produksi berkecepatan tinggi.',
      'Mengintegrasikan model AI Face Recognition di perangkat client dan server dengan waktu inferensi sub-detik (<250ms).',
      'Mengonfigurasi dan memelihara infrastruktur VPS Linux mandiri dengan Nginx reverse proxy, Docker, dan MinIO S3.',
      'Membangun portal terpadu berbasis React dan Vue 3 yang melayani ribuan pengguna aktif dengan waktu respons andal.',
    ],
    skills: ['Golang', 'Clean Architecture', 'Face Recognition AI', 'Vue 3', 'React', 'Docker', 'Nginx VPS', 'MySQL'],
  },
  {
    period: '2021 — 2023',
    role: 'Full-Stack Developer & Software Engineer',
    companyOrContext: 'SaaS Platforms & Enterprise Solutions',
    location: 'Indonesia',
    description: 'Mengembangkan aplikasi web dan backend API untuk beragam domain bisnis, termasuk sistem keuangan mikro, e-commerce logam mulia, dan otomasi penagihan.',
    achievements: [
      'Membangun modul kalkulasi keuangan dan penagihan otomatis yang mengeliminasi kesalahan pembukuan manual.',
      'Mengembangkan REST API terstruktur dengan dokumentasi kontrak OpenAPI dan pengujian integrasi otomatis.',
      'Merancang antarmuka mobile-first responsif dengan standar aksesibilitas WCAG dan waktu muat halaman prima.',
    ],
    skills: ['Golang', 'TypeScript', 'React', 'Vue', 'MySQL', 'REST APIs', 'Tailwind CSS'],
  },
];
