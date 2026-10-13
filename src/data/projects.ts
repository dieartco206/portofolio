import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'absensi-bsp',
    title: 'Sistem Presensi Biometrik Wajah & GPS Terpadu',
    subtitle: 'Absensi Pro / Multi-Branch Enterprise',
    category: 'enterprise',
    categoryLabel: 'Sistem Presensi & Biometrik',
    badge: 'Proyek Produksi',
    role: 'Full-Stack & Systems Architect',
    featured: true,
    image: '/projects/absensi-dashboard.png',
    gallery: [
      '/projects/absensi-dashboard.png',
      '/projects/absensi-presensi.png',
      '/projects/absensi-face.png',
      '/projects/absensi-history.png',
    ],
    colorTheme: {
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      cardBorder: 'hover:border-emerald-400',
      accentText: 'text-emerald-700',
      lightBg: 'bg-emerald-50/60',
      iconBg: 'bg-emerald-500',
    },
    description: 'Aplikasi presensi karyawan multi-cabang dengan verifikasi wajah (Face Recognition AI) langsung di browser/tablet, validasi poligon radius GPS anti fake-location, dan laporan shift otomatis.',
    problem: 'Sistem fingerprint lama sering membuat antrean panjang saat jam masuk, rawan gagal baca saat jari kotor/basah, dan sulit memantau staf yang bertugas di banyak cabang atau shift malam.',
    solution: 'Membangun aplikasi presensi dengan backend Go berkecepatan tinggi, model pengenalan wajah lokal di perangkat untuk verifikasi cepat, serta sinkronisasi data presensi real-time ke server VPS Nginx via WebSocket.',
    architecture: 'Web/Tablet Client -> Nginx Reverse Proxy (SSL & WebSocket) -> Go Backend Service -> MySQL & MinIO (Penyimpanan Foto Wajah).',
    keyHighlights: [
      'Verifikasi wajah cepat di perangkat dengan deteksi keaslian (anti-spoofing foto).',
      'Fitur geofencing GPS ketat untuk memastikan staf berada di dalam radius kantor cabang.',
      'Deteksi & investigasi otomatis jika ada data ganda (double check-in) atau pergantian shift.',
      'Ekspor rekap kehadiran dalam format Excel dan PDF terstruktur untuk kebutuhan payroll.',
    ],
    metrics: [
      { label: 'Waktu Cocok Wajah', value: '< 300ms' },
      { label: 'Uptime Server VPS', value: '99.9%' },
      { label: 'Akurasi Lokasi', value: 'Radius 50m' },
      { label: 'Format Rekap', value: 'Excel & PDF' },
    ],
    tags: ['Go', 'Face AI', 'WebSocket', 'MySQL', 'Nginx', 'Docker', 'Vue 3', 'Geofencing'],
    codeSnippet: {
      language: 'go',
      filename: 'usecase/attendance_verification.go',
      code: `// VerifyAttendance memvalidasi lokasi GPS dan kecocokan wajah karyawan
func (u *AttendanceUsecase) VerifyAttendance(ctx context.Context, req *dto.AttendanceRequest) (*dto.AttendanceResponse, error) {
    // 1. Cek radius cabang berdasarkan titik koordinat GPS
    if err := u.geofence.ValidateRadius(req.BranchID, req.Lat, req.Lng); err != nil {
        return nil, fmt.Errorf("di luar radius kantor: %w", err)
    }

    // 2. Cocokkan vektor wajah dengan data tersimpan di database
    matchedEmp, confidence, err := u.faceEngine.Match(ctx, req.FaceDescriptor)
    if err != nil || confidence < 0.85 {
        return nil, errors.New("wajah tidak cocok atau tidak terdeteksi")
    }

    // 3. Simpan log presensi dalam transaksi atomik
    record, err := u.repo.SaveCheckInTx(ctx, matchedEmp.ID, req.BranchID, time.Now())
    if err != nil {
        return nil, err
    }

    // 4. Siarkan notifikasi kehadiran seketika via WebSocket
    go u.wsHub.BroadcastCheckIn(req.BranchID, record)

    return dto.ToResponse(record), nil
}`,
    },
  },
  {
    id: 'elearning-suite',
    title: 'Platform E-Learning Sekolah 3-Portal Terpadu',
    subtitle: 'Samarkand Education Suite',
    category: 'enterprise',
    categoryLabel: 'Pendidikan & Sekolah',
    badge: '3 Portal Terintegrasi',
    role: 'Full-Stack Software Engineer',
    featured: true,
    image: '/projects/elearning-hero.png',
    gallery: [
      '/projects/elearning-hero.png',
      '/projects/elearning-student.png',
    ],
    colorTheme: {
      gradient: 'from-indigo-600 via-blue-600 to-indigo-700',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-300',
      cardBorder: 'hover:border-indigo-400',
      accentText: 'text-indigo-700',
      lightBg: 'bg-indigo-50/60',
      iconBg: 'bg-indigo-600',
    },
    description: 'Sistem manajemen pembelajaran sekolah lengkap dengan 3 portal terpisah: Admin untuk data induk & kurikulum, Guru untuk materi & ujian, serta Siswa untuk belajar dan mengerjakan tugas.',
    problem: 'Penggabungan semua fitur sekolah dalam satu halaman sering membingungkan pengguna, rawan kebocoran soal ujian, dan kesulitan menampilkan rumus matematika atau grafik ilmiah.',
    solution: 'Memisahkan antarmuka menjadi 3 aplikasi terisolasi dengan autentikasi JWT RBAC. Mengintegrasikan KaTeX untuk render rumus matematika instan dan modul rekap nilai KKM otomatis.',
    architecture: '3 Portal Client (Admin Web/Desktop, Guru, Siswa) -> Go API Backend (Clean Architecture) -> Database Relasional & Excel Report Engine.',
    keyHighlights: [
      'Pemisahan hak akses ketat (RBAC) antara staf tata usaha, guru mata pelajaran, dan siswa.',
      'Modul ujian dengan pengacak soal, batasan waktu presisi, dan formula matematika KaTeX.',
      'Otomatisasi pengisian buku nilai (Grade Book) format Excel dengan styling warna KKM.',
      'Struktur kode Go Clean Architecture yang memisahkan aturan bisnis dari database.',
    ],
    metrics: [
      { label: 'Portal Terpisah', value: 'Admin, Guru, Siswa' },
      { label: 'Render Rumus', value: 'KaTeX Formula' },
      { label: 'Kalkulasi Nilai', value: 'Otomatis KKM' },
      { label: 'Ekspor Rapor', value: 'Excel Terformat' },
    ],
    tags: ['Go', 'Clean Architecture', 'React', 'Vue', 'KaTeX', 'ExcelJS', 'JWT Auth', 'Docker'],
    codeSnippet: {
      language: 'go',
      filename: 'domain/quiz/evaluator.go',
      code: `// SubmitExam menghitung skor ujian siswa dan status kelulusan KKM
func (s *QuizService) SubmitExam(ctx context.Context, studentID, examID int64, answers []Answer) (*ExamResult, error) {
    exam, err := s.examRepo.FindByID(ctx, examID)
    if err != nil {
        return nil, err
    }

    // Hitung jawaban benar dan nilai akhir
    score, correctCount := s.evaluator.ScoreAnswers(exam.Questions, answers)
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
    id: 'kiddo-growth',
    title: 'Aplikasi Pantau Tumbuh Kembang Balita (Kurva WHO)',
    subtitle: 'Kiddo Growth Healthcare',
    category: 'frontend',
    categoryLabel: 'Kesehatan & Keluarga',
    badge: 'Standar WHO',
    role: 'Frontend & API Engineer',
    featured: true,
    image: '/projects/kiddo-growth-chart.png',
    gallery: [
      '/projects/kiddo-growth-chart.png',
      '/projects/kiddo-daily.png',
      '/projects/kiddo-milestone.png',
    ],
    colorTheme: {
      gradient: 'from-sky-500 via-cyan-500 to-blue-600',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-300',
      cardBorder: 'hover:border-sky-400',
      accentText: 'text-sky-700',
      lightBg: 'bg-sky-50/60',
      iconBg: 'bg-sky-500',
    },
    description: 'Aplikasi pencatatan dan pemantauan grafik berat badan, tinggi badan, dan lingkar kepala balita berdasarkan standar baku persentil World Health Organization (WHO).',
    problem: 'Orang tua sering kesulitan membaca kurva KMS fisik di posyandu atau buku KIA, sehingga risiko kekurangan gizi atau stunting terlambat diketahui.',
    solution: 'Membangun aplikasi web dengan visualisasi grafik interaktif kurva WHO, perhitungan otomatis Z-Score (SD -3 s/d +3), dan riwayat jadwal imunisasi yang mudah dipahami orang tua.',
    architecture: 'React + TypeScript -> Chart Visualization -> Go REST API -> Child Medical History.',
    keyHighlights: [
      'Visualisasi grafik kurva pertumbuhan WHO responsif dan mudah dibaca di layar HP.',
      'Kalkulasi status gizi otomatis (Gizi Kurang, Baik, Berlebih, atau Risiko Stunting).',
      'Pengingat jadwal imunisasi dasar lengkap sesuai usia balita.',
      'Antarmuka bersih, ramah sentuhan, dan cepat dimuat.',
    ],
    metrics: [
      { label: 'Metode Hitung', value: 'Z-Score WHO' },
      { label: 'Visualisasi', value: 'Grafik Interaktif' },
      { label: 'Target Pengguna', value: 'Orang Tua & Posyandu' },
      { label: 'Responsif', value: 'Mobile-First' },
    ],
    tags: ['React', 'TypeScript', 'Data Visualization', 'Go API', 'Tailwind CSS', 'HealthTech'],
  },
  {
    id: 'digizakat-platform',
    title: 'Sistem Keuangan Zakat & Donasi Transparan',
    subtitle: 'DigiZakat Finance Engine',
    category: 'golang',
    categoryLabel: 'Finansial & Sosial',
    badge: 'Buku Kas Ganda',
    role: 'Backend Architect',
    featured: true,
    image: '/projects/ecommerce-admin.png',
    gallery: [
      '/projects/ecommerce-admin.png',
    ],
    colorTheme: {
      gradient: 'from-teal-600 via-emerald-600 to-green-700',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-300',
      cardBorder: 'hover:border-teal-400',
      accentText: 'text-teal-700',
      lightBg: 'bg-teal-50/60',
      iconBg: 'bg-teal-600',
    },
    description: 'Platform tata kelola keuangan lembaga zakat dan donasi dengan kalkulator nisab otomatis, pencatatan mutasi kas berstandar akuntansi, dan bukti tanda terima ber-QR code.',
    problem: 'Pencatatan donasi manual rawan selisih, lambat dalam verifikasi bukti transfer, dan memerlukan transparansi mutlak antara dana masuk dan penyaluran program.',
    solution: 'Merancang backend Go dengan transaksi database atomik untuk mencegah salah pembukuan, modul kalkulasi zakat maal berbasis harga emas terbaru, dan penerbitan kwitansi sah instan.',
    architecture: 'Go REST API -> MySQL ACID Transaction -> PDF Receipt Generator -> Webhook Konfirmasi.',
    keyHighlights: [
      'Kalkulator zakat maal, penghasilan, dan perhiasan dengan formula syariah akurat.',
      'Pencatatan kas berprinsip mutasi ganda yang tidak dapat dimanipulasi.',
      'Pembuatan kwitansi tanda terima donasi format PDF dengan QR code verifikasi berkas.',
    ],
    metrics: [
      { label: 'Integritas Buku Kas', value: '100% Cocok' },
      { label: 'Cetak Kwitansi', value: '< 200ms' },
      { label: 'Keamanan Transaksi', value: 'ACID Locking' },
      { label: 'Akurasi Zakat', value: 'Kalkulator Nisab' },
    ],
    tags: ['Go', 'Akuntansi', 'REST API', 'MySQL', 'PDF Generator', 'QR Code'],
  },
  {
    id: 'fypotret',
    title: 'Website Studio & Booking Fotografi Komersial',
    subtitle: 'FYPotret Brand Experience',
    category: 'frontend',
    categoryLabel: 'Web Studio & Booking',
    badge: 'Editorial UI',
    role: 'Frontend Developer & Designer',
    featured: false,
    image: '/projects/fypotret-logo.jpg',
    gallery: [
      '/projects/fypotret-logo.jpg',
    ],
    colorTheme: {
      gradient: 'from-rose-500 via-pink-500 to-purple-600',
      badgeBg: 'bg-rose-50 text-rose-800 border-rose-300',
      cardBorder: 'hover:border-rose-400',
      accentText: 'text-rose-700',
      lightBg: 'bg-rose-50/60',
      iconBg: 'bg-rose-500',
    },
    description: 'Website portofolio dan pemesanan sesi foto wisuda, prewedding, dan studio dengan galeri masonry responsif, kalkulator paket transparan, dan integrasi pemesanan WhatsApp langsung.',
    problem: 'Banyak calon klien batal memesan jasa fotografi karena website lama memuat foto dengan lambat, layout berantakan di HP, dan daftar harga tidak transparan.',
    solution: 'Membangun antarmuka bersih dengan galeri lightbox responsif, kalkulator pilihan paket foto, serta tombol order instan yang otomatis merangkum detail pesanan ke WhatsApp admin.',
    architecture: 'Vite React -> Tailwind CSS -> Responsive Lightbox -> WhatsApp Message Generator.',
    keyHighlights: [
      'Tampilan foto resolusi tinggi yang ringan dan cepat dibuka di jaringan seluler.',
      'Kalkulator paket foto interaktif sehingga calon klien bisa melihat rincian harga secara jelas.',
      'Integrasi satu klik ke WhatsApp dengan template pesan otomatis.',
    ],
    metrics: [
      { label: 'Waktu Muat', value: 'Sangat Cepat' },
      { label: 'Target Sentuhan', value: 'Min. 44px (iOS HIG)' },
      { label: 'Alur Pesan', value: 'Langsung ke WhatsApp' },
      { label: 'Tampilan', value: 'Mobile-First' },
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Web', 'WhatsApp API'],
  },
  {
    id: 'prestige-gold',
    title: 'Katalog & Perdagangan Logam Mulia Digital',
    subtitle: 'Prestige Gold Platform',
    category: 'saas',
    categoryLabel: 'E-Commerce & Komoditas',
    badge: 'Update Harga Pasar',
    role: 'Full-Stack Developer',
    featured: false,
    image: '/projects/prestige-gold-logo.png',
    gallery: [
      '/projects/prestige-gold-logo.png',
    ],
    colorTheme: {
      gradient: 'from-amber-500 via-yellow-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-300',
      cardBorder: 'hover:border-amber-400',
      accentText: 'text-amber-800',
      lightBg: 'bg-amber-50/60',
      iconBg: 'bg-amber-500',
    },
    description: 'Platform katalog investasi emas dan perhiasan dengan sinkronisasi harga pasar harian, perhitungan buyback otomatis, dan penguncian harga saat checkout.',
    problem: 'Harga emas yang berfluktuasi setiap hari mengharuskan penyesuaian harga jual dan beli kembali (buyback) secara konsisten agar tidak merugikan penjual maupun pembeli.',
    solution: 'Membuat backend Go dengan scheduled worker untuk memperbarui harga acuan pasar, fitur kunci harga selama 15 menit saat transaksi, dan manajemen stok per gramasi.',
    architecture: 'Go REST API -> Scheduled Price Cron -> React Frontend -> Order Management.',
    keyHighlights: [
      'Mekanisme penguncian harga sementara selama proses pembayaran untuk keamanan transaksi.',
      'Katalog produk terstruktur berdasarkan kadar karat, berat gramasi, dan sertifikat.',
      'Perhitungan otomatis harga beli kembali (buyback) berdasarkan kurs acuan hari ini.',
    ],
    metrics: [
      { label: 'Sinkronisasi Harga', value: 'Terjadwal Otomatis' },
      { label: 'Proteksi Checkout', value: 'Kunci Harga 15 Mnt' },
      { label: 'Detail Produk', value: 'Karat & Sertifikat' },
      { label: 'Keamanan Transaksi', value: 'Verifikasi Order' },
    ],
    tags: ['Go', 'React', 'MySQL', 'Cron Worker', 'E-Commerce', 'Tailwind CSS'],
  },
  {
    id: 'mini-invoice',
    title: 'Aplikasi Pembuat Invoice & Quotation Cepat',
    subtitle: 'MiniInvoice / PyBizz',
    category: 'saas',
    categoryLabel: 'Otomasi Bisnis',
    badge: 'Cetak PDF Instan',
    role: 'Full-Stack Developer',
    featured: false,
    image: '/projects/permata-preview.png',
    gallery: [
      '/projects/permata-preview.png',
    ],
    colorTheme: {
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      badgeBg: 'bg-violet-50 text-violet-800 border-violet-300',
      cardBorder: 'hover:border-violet-400',
      accentText: 'text-violet-700',
      lightBg: 'bg-violet-50/60',
      iconBg: 'bg-violet-600',
    },
    description: 'Alat bantu membuat dokumen penagihan dan penawaran harga untuk UMKM dan pekerja lepas, lengkap dengan kalkulasi pajak PPN, diskon bertingkat, dan cetak PDF siap kirim.',
    problem: 'Membuat invoice menggunakan Excel atau Word sering memakan waktu, rawan salah hitung subtotal dan pajak, serta format berkas yang mudah berantakan saat dikirim ke klien.',
    solution: 'Aplikasi berbasis browser dengan auto-save lokal, perhitungan matematis presisi tanpa selisih desimal, dan tombol satu klik untuk mengubah penawaran (Quotation) menjadi Invoice sah.',
    architecture: 'React / Vue SPA -> Local Storage Engine -> Client-Side PDF Renderer.',
    keyHighlights: [
      'Perhitungan otomatis subtotal, diskon bertingkat, dan pajak tanpa bug pembulatan.',
      'Ekspor dokumen penagihan ke format PDF rapi berstandar cetak formal.',
      'Mendukung status pembayaran: Draft, Terkirim, Sebagian, Lunas, dan Jatuh Tempo.',
    ],
    metrics: [
      { label: 'Waktu Buat Invoice', value: '< 1 Menit' },
      { label: 'Format Ekspor', value: 'PDF Siap Cetak' },
      { label: 'Kalkulasi Pajak', value: 'Presisi Desimal' },
      { label: 'Penyimpanan', value: 'Auto-Save Lokal' },
    ],
    tags: ['Go', 'React', 'Vue', 'PDF Generator', 'Tailwind CSS', 'SaaS UMKM'],
  },
  {
    id: 'distri-logistics',
    title: 'Manajemen Rantai Pasok & Stok Multi-Gudang',
    subtitle: 'Distri Logistics Engine',
    category: 'golang',
    categoryLabel: 'Logistik & Pergudangan',
    badge: 'Keamanan Konkurensi',
    role: 'Backend Architect',
    featured: false,
    image: '/projects/ecommerce-shop.png',
    gallery: [
      '/projects/ecommerce-shop.png',
    ],
    colorTheme: {
      gradient: 'from-orange-500 via-amber-600 to-red-500',
      badgeBg: 'bg-orange-50 text-orange-800 border-orange-300',
      cardBorder: 'hover:border-orange-400',
      accentText: 'text-orange-700',
      lightBg: 'bg-orange-50/60',
      iconBg: 'bg-orange-500',
    },
    description: 'Sistem manajemen inventaris pergudangan terdistribusi dengan pelacakan batch SKU barang, mutasi stok antar gudang cabang, dan pencegahan selisih stok serentak.',
    problem: 'Banyak gudang sering mengalami stok minus akibat order yang masuk bersamaan di waktu yang sama ketika barang fisik hanya tersisa 1 unit.',
    solution: 'Menerapkan database transaction locking di Go untuk memastikan pengurangan stok bersifat atomik, aman dari race condition, dan mencatat riwayat mutasi lengkap.',
    architecture: 'Go Clean Architecture -> MySQL Transaction Isolation -> Redis Cache -> Audit Log Stream.',
    keyHighlights: [
      'Proteksi race condition pada kuota stok barang saat lonjakan pesanan bersamaan.',
      'Alur mutasi barang antar gudang cabang dengan status otorisasi bertingkat.',
      'Pencarian dan pemilahan puluhan ribu SKU barang dengan waktu respons cepat.',
    ],
    metrics: [
      { label: 'Keamanan Stok', value: 'Zero Minus Stock' },
      { label: 'Kecepatan Query', value: '< 40ms' },
      { label: 'Audit Trail', value: 'Log Tercatat Penuh' },
      { label: 'Kapasitas SKU', value: 'Puluhan Ribu Barang' },
    ],
    tags: ['Go', 'Concurrency Safety', 'Clean Architecture', 'MySQL', 'Logistik'],
  },
];
