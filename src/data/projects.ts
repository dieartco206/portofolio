import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'absensi-bsp',
    title: 'Enterprise Biometric & Geolocation Attendance Platform',
    subtitle: 'Absensi Pro / BSP Enterprise Suite',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Biometrics',
    badge: 'Production / High Concurrency',
    role: 'Lead Systems Architect & Full-Stack Engineer',
    featured: true,
    description: 'Sistem presensi multi-cabang terpadu dengan verifikasi biometrik pengenalan wajah (Face Recognition), geofencing GPS anti-mocking, dan audit log otomatis berbasis WebSocket secara real-time.',
    problem: 'Pencatatan kehadiran manual dan sistem fingerprint konvensional sering mengalami antrean panjang di gerbang cabang, manipulasi lokasi (fake GPS), serta kegagalan sinkronisasi data antar shift malam dan pagi.',
    solution: 'Membangun arsitektur terdistribusi dengan Golang backend berkecepatan tinggi, integrasi model inferensi Face AI di sisi client & server, verifikasi poligon radius GPS, serta WebSocket heartbeat untuk sinkronisasi seketika ke VPS Nginx.',
    architecture: 'Micro-monolith terisolasi: Client Web/Tablet -> Nginx Reverse Proxy (SSL + WSS) -> Golang REST & WebSocket Service -> MySQL Optimized Indexing & Local Disk Storage.',
    keyHighlights: [
      'Inference model Face Recognition akurat dengan deteksi liveness untuk menangkal foto spoofing.',
      'Sistem audit investigasi otomatis (double-in prevention & shift transition worker).',
      'Ekspor laporan presensi multi-format (PDF kustom & Excel terstruktur) untuk ribuan staf.',
      'Hardening server VPS dengan konfigurasi Nginx reverse proxy ber-cache cerdas dan isolasi port.',
    ],
    metrics: [
      { label: 'Latency Verifikasi Wajah', value: '< 250ms' },
      { label: 'Uptime VPS Server', value: '99.9%' },
      { label: 'Deteksi Fake GPS', value: '100% Validated' },
      { label: 'Efisiensi Laporan Payroll', value: '10x Lebih Cepat' },
    ],
    tags: ['Golang', 'Face Recognition AI', 'WebSocket', 'MySQL', 'Nginx', 'Docker', 'Vue / React', 'Geofencing'],
    codeSnippet: {
      language: 'go',
      filename: 'usecase/attendance_verification.go',
      code: `// AttendanceVerification verifies biometric payload and geofence
func (u *AttendanceUsecase) VerifyAttendance(ctx context.Context, req *dto.AttendanceRequest) (*dto.AttendanceResponse, error) {
    if err := u.geofenceService.ValidateCoordinates(req.BranchID, req.Latitude, req.Longitude); err != nil {
        return nil, fmt.Errorf("geofence violation: %w", err)
    }

    // Verify face descriptor confidence with biometric engine
    matchedEmp, confidence, err := u.biometricEngine.MatchFace(ctx, req.FaceVector)
    if err != nil || confidence < 0.88 {
        return nil, domain.ErrBiometricMismatch
    }

    // Atomic check-in recording with shift transition validation
    record, err := u.repo.RecordCheckInTx(ctx, matchedEmp.ID, req.BranchID, time.Now())
    if err != nil {
        return nil, err
    }

    // Broadcast instant attendance event via WebSocket
    go u.wsHub.BroadcastToBranch(req.BranchID, dto.NewWSEvent("CHECK_IN_SUCCESS", record))
    return dto.ToResponse(record), nil
}`,
    },
  },
  {
    id: 'elearning-suite',
    title: 'Multi-Portal School E-Learning & Assessment Engine',
    subtitle: 'Samarkand Educational Ecosystem',
    category: 'enterprise',
    categoryLabel: 'Enterprise Education',
    badge: 'Clean Architecture (DDD)',
    role: 'Full-Stack Software Engineer',
    featured: true,
    description: 'Ekosistem e-learning terintegrasi yang mencakup 3 portal spesifik (Admin, Guru, dan Siswa) yang didukung mesin ujian berbasis KaTeX dan kalkulasi nilai KKM otomatis.',
    problem: 'Kebutuhan platform pendidikan terpadu yang memisahkan otoritas manajemen kurikulum (Admin), pembuat modul dan ujian (Guru), serta pengerjaan ujian aman tanpa lag (Siswa).',
    solution: 'Merancang arsitektur Go Clean Architecture dengan pemisahan domain, application, infrastructure, dan presentation layer. Frontend responsif dilengkapi KaTeX untuk formula matematika rumit dan generator rapor otomatis.',
    architecture: 'Multi-Client (Admin Electron/Web, Teacher Portal, Student Portal) -> Go API Engine (Fiber/Gin + Clean Architecture) -> Relational Database & Seed Data Automation.',
    keyHighlights: [
      'Pemisahan strict role-based access control (RBAC) pada level token JWT.',
      'Sistem ujian berbasis bank soal acak dengan dukungan formula matematika KaTeX dan kalkulasi timer presisi.',
      'Generator laporan buku nilai (Grade Book) format Excel terformat dengan styling dinamis.',
      'Eksekusi seed data skala besar untuk ribuan kelas, mata pelajaran, dan bobot KKM otomatis.',
    ],
    metrics: [
      { label: 'Portal Terintegrasi', value: '3 Aplikasi Terpisah' },
      { label: 'Kecepatan Render KaTeX', value: '< 15ms' },
      { label: 'Concurrent Quiz Submissions', value: '500+ Req/s' },
      { label: 'Struktur Kode', value: 'Clean Arch / DDD' },
    ],
    tags: ['Golang', 'Clean Architecture', 'React', 'Vue', 'KaTeX', 'ExcelJS', 'JWT RBAC', 'Docker'],
    codeSnippet: {
      language: 'go',
      filename: 'domain/quiz/usecase.go',
      code: `// SubmitQuizExam validates answers and calculates KKM grade atomically
func (s *QuizService) SubmitExam(ctx context.Context, studentID int64, examID int64, answers []Answer) (*ExamResult, error) {
    exam, err := s.examRepo.FindByID(ctx, examID)
    if err != nil {
        return nil, err
    }

    score, correctCount := s.evaluator.CalculateScore(exam.Questions, answers)
    isPassed := score >= exam.PassingGradeKKM

    result := &ExamResult{
        StudentID:    studentID,
        ExamID:       examID,
        FinalScore:   score,
        IsPassed:     isPassed,
        CorrectCount: correctCount,
        SubmittedAt:  time.Now(),
    }
    return s.examRepo.SaveResultTx(ctx, result)
}`,
    },
  },
  {
    id: 'digizakat-platform',
    title: 'Financial & Donation Management Platform',
    subtitle: 'DigiZakat FinTech Engine',
    category: 'golang',
    categoryLabel: 'FinTech & Social Finance',
    badge: 'High Security Ledger',
    role: 'Backend Architect',
    featured: true,
    description: 'Platform tata kelola keuangan zakat, infak, dan sedekah digital dengan kalkulator nisab otomatis, pencatatan mutasi ganda (*double-entry bookkeeping*), dan pelaporan muzakki.',
    problem: 'Pencatatan dana umat rawan inkonsistensi dan membutuhkan transparansi mutlak antara penyalur program, kalkulasi zakat maal berbasis harga emas riil, dan bukti tanda terima.',
    solution: 'Membangun backend Golang dengan prinsip transaksi ACID yang ketat, modul kalkulator nisab dinamis berbasis API komoditas, dan webhook konfirmasi instan.',
    architecture: 'Golang Microservice -> Transaksi Atomik MySQL -> PDF Receipt Generator -> Webhook Notifikasi.',
    keyHighlights: [
      'Kalkulasi nisab zakat emas, perak, dan penghasilan dengan rumus syariah terverifikasi.',
      'Audit log transaksi tak terhapus (immutable transaction ledger).',
      'Penerbitan kwitansi sah format PDF ber-QR code verifikasi keaslian dokumen.',
    ],
    metrics: [
      { label: 'Ketelitian Ledger', value: '100% Reconciled' },
      { label: 'Waktu Generate Kwitansi', value: '< 100ms' },
      { label: 'Reliabilitas Transaksi', value: 'Zero Over-ledger' },
    ],
    tags: ['Golang', 'Financial Ledger', 'REST API', 'MySQL Transactions', 'PDF Engine', 'Security'],
  },
  {
    id: 'prestige-gold',
    title: 'Precious Metals Trading & Catalog Engine',
    subtitle: 'Prestige Gold Digital Assets',
    category: 'saas',
    categoryLabel: 'E-Commerce & Commodities',
    badge: 'Live Market Sync',
    role: 'Full-Stack Developer',
    featured: false,
    description: 'Platform katalog investasi logam mulia dan perhiasan dengan sinkronisasi harga pasar harian, perhitungan buyback otomatis, dan sistem checkout pesanan aman.',
    problem: 'Fluktuasi harga emas harian menuntut penyesuaian harga jual dan buyback seketika agar penjual tidak mengalami kerugian selisih spread pasar.',
    solution: 'Cron background worker yang memperbarui harga acuan emas secara teratur, mengunci harga pada sesi checkout selama interval 15 menit, dan notifikasi pesanan ke admin.',
    architecture: 'Go REST API -> Live Price Cron Worker -> React Client -> Order Settlement Engine.',
    keyHighlights: [
      'Mekanisme price-locking transaksional saat checkout untuk melindungi margin harga.',
      'Sistem manajemen varian gramasi logam mulia dengan validasi stok ketat.',
      'Katalog responsif dengan visualisasi detail kemurnian karat dan sertifikat antam.',
    ],
    metrics: [
      { label: 'Frekuensi Update Harga', value: 'Realtime Scheduled' },
      { label: 'Sesi Price-Lock Timeout', value: '15 Menit Proteksi' },
    ],
    tags: ['Golang', 'React', 'Scheduled Cron', 'E-Commerce', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'kiddo-growth',
    title: 'Pediatric Health & Growth Tracking System',
    subtitle: 'Kiddo Growth Healthcare App',
    category: 'frontend',
    categoryLabel: 'Healthcare & SaaS',
    badge: 'WHO Percentile Standard',
    role: 'Frontend & API Engineer',
    featured: true,
    description: 'Aplikasi pemantauan kurva tumbuh kembang balita berbasis standar baku WHO (World Health Organization) dengan visualisasi grafik interaktif dan catatan riwayat imunisasi.',
    problem: 'Banyak orang tua kesulitan mendeteksi risiko stunting dan keterlambatan pertumbuhan anak sejak dini karena kartu KMS manual rentan hilang dan sulit diinterpretasikan.',
    solution: 'Membangun aplikasi web progresif dengan algoritma interpolasi Z-Score standar WHO untuk berat, tinggi, dan lingkar kepala, divisualisasikan dalam grafik kurva interaktif.',
    architecture: 'React + TypeScript -> Charting Visualization -> Go Backend API -> Child Profile Storage.',
    keyHighlights: [
      'Plotting data interaktif pada kurva baku WHO (Z-score -3 SD s/d +3 SD).',
      'Rekomendasi asupan nutrisi dan jadwal vaksinasi otomatis sesuai usia balita.',
      'Antarmuka ramah orang tua dengan micro-animations dan penanganan offline-friendly.',
    ],
    metrics: [
      { label: 'Akurasi Z-Score WHO', value: '99.99% Formula Match' },
      { label: 'Responsivitas Chart', value: '60 FPS Smooth' },
    ],
    tags: ['React', 'TypeScript', 'Data Visualization', 'WHO Charts', 'Golang API', 'HealthTech'],
  },
  {
    id: 'fypotret',
    title: 'Luxury Editorial Studio & Booking Funnel',
    subtitle: 'FYPotret Brand Experience',
    category: 'frontend',
    categoryLabel: 'Luxury Web Design',
    badge: 'Editorial Luxury UI',
    role: 'Creative Frontend Engineer',
    featured: false,
    description: 'Website portofolio dan pemesanan fotografi komersial berkonsep kemewahan editorial gelap (Dark Obsidian), dilengkapi masonry lightbox responsif dan WhatsApp booking generator instan.',
    problem: 'Fotografer profesional sering kehilangan calon klien karena portofolio web lambat dimuat, tampilan template murahan, dan form pemesanan yang berbelit-belit.',
    solution: 'Menerapkan standar anti-AI-slop UI dengan rasio warna 60-30-10, fullscreen lightbox dengan zero-layout shift, kalkulator paket transparan, dan CTA WhatsApp dengan pre-filled teks cerdas.',
    architecture: 'Vite React -> Framer Motion Orchestration -> Tailwind Editorial Typography -> Static Edge CDN.',
    keyHighlights: [
      'Palet warna Deep Obsidian & Warm Amber Gold dengan kontras visual tinggi.',
      'Fullscreen Lightbox responsif ramah sentuhan jempol smartphone.',
      'Direct WhatsApp generator yang otomatis menghitung total harga paket.',
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Touch Target Standard', value: 'Minimal 44px (iOS HIG)' },
    ],
    tags: ['React', 'Framer Motion', 'Editorial UI', 'Tailwind CSS', 'Conversion Funnel'],
  },
  {
    id: 'mini-invoice',
    title: 'Automated Invoicing & Quotation SaaS Engine',
    subtitle: 'MiniInvoice / PyBizz Suite',
    category: 'saas',
    categoryLabel: 'Business Automation',
    badge: 'PDF Generation Engine',
    role: 'Full-Stack Developer',
    featured: false,
    description: 'Sistem penagihan otomatis untuk UMKM dan pekerja lepas dengan dukungan multi-mata uang, kalkulasi pajak dinamis, dan ekspor invoice PDF instan tanpa dependensi berat.',
    problem: 'Pembuatan invoice manual menggunakan spreadsheet memakan waktu, sering keliru dalam perhitungan PPN/diskon, dan menghasilkan format berkas yang tidak konsisten.',
    solution: 'Platform penagihan cepat berbasis browser dengan auto-save lokal, perhitungan subtotal/pajak instan, dan konversi one-click dari dokumen Quotation menjadi Invoice sah.',
    architecture: 'Single Page App -> Client PDF Generation Engine -> Cloud Sync Backend.',
    keyHighlights: [
      'Kalkulasi matematis subtotal, diskon bertingkat, dan pajak presisi tanpa floating-point bug.',
      'Ekspor PDF berstandar cetak dengan QR Code pembayaran bank/e-wallet.',
      'Status pelacakan tagihan: Draft, Terkirim, Sebagian, Lunas, dan Jatuh Tempo.',
    ],
    metrics: [
      { label: 'Waktu Buat Invoice', value: '< 60 Detik' },
      { label: 'Presisi Desimal', value: '100% Zero Drift' },
    ],
    tags: ['Golang', 'Vue / React', 'PDF Generation', 'SaaS', 'Tailwind CSS'],
  },
  {
    id: 'distri-logistics',
    title: 'Multi-Warehouse Supply Chain & Distribution Engine',
    subtitle: 'Distri Logistics API',
    category: 'golang',
    categoryLabel: 'Logistics & Supply Chain',
    badge: 'Inventory Integrity',
    role: 'Backend Architect',
    featured: false,
    description: 'Backend sistem manajemen rantai pasok dan pergudangan terdistribusi dengan pelacakan batch SKU, penyesuaian stok antar gudang, dan optimasi rute pengiriman.',
    problem: 'Ketidaksesuaian stok barang di gudang utama versus gudang cabang akibat pembaruan konkurensi data yang tidak memiliki mekanisme locking memadai.',
    solution: 'Arsitektur Golang dengan database transactional locking (Pessimistic / Optimistic concurrency control) untuk mencegah race condition pengurangan stok.',
    architecture: 'Golang Clean Architecture -> MySQL Transaction Isolation -> Redis Cache -> Event Log Stream.',
    keyHighlights: [
      'Pencegahan race condition saat order serentak untuk barang dengan sisa kuota 1 unit.',
      'Sistem mutasi stok antar gudang dengan status otorisasi multi-level (Maker-Checker).',
      'API terstruktur dengan pagination berkecepatan tinggi untuk puluhan ribu SKU.',
    ],
    metrics: [
      { label: 'Concurrency Race Safety', value: '100% Atomik' },
      { label: 'Query Latency (10k SKU)', value: '< 30ms' },
    ],
    tags: ['Golang', 'Concurrency Control', 'Clean Architecture', 'MySQL', 'Supply Chain'],
  },
];
