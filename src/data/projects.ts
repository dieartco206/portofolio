import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'absensi-bsp',
    title: 'Sistem Presensi Karyawan Wajah & GPS',
    subtitle: 'Aplikasi Presensi Multi-Cabang',
    category: 'enterprise',
    categoryLabel: 'Sistem Presensi & Biometrik',
    badge: 'Proyek Selesai',
    role: 'Fullstack Developer',
    featured: true,
    image: '/projects/absensi/03_Dashboard_Beranda.png',
    gallery: [
      '/projects/absensi/03_Dashboard_Beranda.png',
      '/projects/absensi/04_Presensi_Utama_Dalam_Radius.png',
      '/projects/absensi/05_Presensi_Kamera_Foto_Masuk.png',
      '/projects/absensi/06_Presensi_Scan_QR.png',
      '/projects/absensi/08_Riwayat_Absensi_Kalender.png',
      '/projects/absensi/08g_Riwayat_Modal_Peta_Geofence.png',
      '/projects/absensi/13_Perekaman_Wajah_Baru.png',
      '/projects/absensi/09_Pengajuan_Izin_Cuti_Form.png',
    ],
    colorTheme: {
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      cardBorder: 'hover:border-emerald-400',
      accentText: 'text-emerald-700',
      lightBg: 'bg-emerald-50/60',
      iconBg: 'bg-emerald-500',
    },
    description: 'Aplikasi presensi karyawan dengan verifikasi kamera wajah langsung di browser/tablet, validasi radius GPS kantor, dan laporan kehadiran otomatis.',
    problem: 'Kebutuhan sistem presensi yang praktis via smartphone atau tablet dengan validasi lokasi kerja karyawan.',
    solution: 'Membangun aplikasi presensi dengan backend Go, verifikasi kamera di perangkat, dan penyimpanan berkas foto ke MinIO / S3.',
    architecture: 'Web/Tablet Client -> Nginx Reverse Proxy -> Go Backend API -> MySQL & MinIO (Penyimpanan Foto).',
    keyHighlights: [
      'Verifikasi wajah melalui kamera browser/tablet.',
      'Geofencing GPS untuk memastikan karyawan berada di radius kantor.',
      'Pencatatan riwayat presensi, izin cuti, dan shift kerja.',
      'Ekspor rekap kehadiran dalam format Excel dan PDF.',
    ],
    metrics: [
      { label: 'Metode Absen', value: 'Wajah & GPS' },
      { label: 'Deployment', value: 'Linux VPS & Docker' },
      { label: 'Validasi', value: 'Radius Geofence' },
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
    title: 'Platform E-Learning & Ujian CBT Sekolah',
    subtitle: 'Sistem Informasi Akademik 3 Portal',
    category: 'enterprise',
    categoryLabel: 'Pendidikan & Sekolah',
    badge: '3 Portal Terpisah',
    role: 'Fullstack Developer',
    featured: true,
    image: '/projects/elearning/02_Dashboard_Bento_KPI.png',
    gallery: [
      '/projects/elearning/02_Dashboard_Bento_KPI.png',
      '/projects/elearning/09_Monitoring_Ujian_CBT.png',
      '/projects/elearning/10_Rekap_Nilai_Global.png',
      '/projects/elearning/04_Buku_Nilai_Gradebook_Ledger.png',
      '/projects/elearning/08_Editor_Pembuat_Soal_KaTeX.png',
      '/projects/elearning/02_Dashboard_Utama_Siswa.png',
      '/projects/elearning/03_Daftar_Ujian_Aktif_CBT.png',
      '/projects/elearning/13_Live_Server_Container_Monitor.png',
    ],
    colorTheme: {
      gradient: 'from-indigo-600 via-blue-600 to-indigo-700',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-300',
      cardBorder: 'hover:border-indigo-400',
      accentText: 'text-indigo-700',
      lightBg: 'bg-indigo-50/60',
      iconBg: 'bg-indigo-600',
    },
    description: 'Sistem manajemen pembelajaran sekolah dengan 3 portal terpisah: Admin untuk data induk & kurikulum, Guru untuk materi & ujian CBT, serta Siswa untuk belajar dan mengerjakan kuis.',
    problem: 'Kebutuhan sistem pembelajaran sekolah yang rapi, terpisah hak aksesnya, dan mendukung ujian online serta penulisan rumus matematika.',
    solution: 'Memisahkan antarmuka menjadi 3 aplikasi dengan autentikasi JWT RBAC, KaTeX untuk render rumus, dan modul rekap nilai otomatis.',
    architecture: '3 Portal Web -> Go API Backend -> Database MySQL & Ekspor Excel.',
    keyHighlights: [
      'Pemisahan hak akses peran (RBAC) staf admin, guru, dan siswa.',
      'Modul ujian CBT dengan pengacak soal, batasan waktu, dan rumus KaTeX.',
      'Rekap buku nilai siswa dan ekspor laporan format Excel.',
      'Struktur kode backend Go Clean Architecture yang mudah dirawat.',
    ],
    metrics: [
      { label: 'Portal', value: 'Admin, Guru, Siswa' },
      { label: 'Fitur CBT', value: 'Ujian & Rumus KaTeX' },
      { label: 'Penilaian', value: 'Hitung Nilai KKM' },
      { label: 'Laporan', value: 'Ekspor Excel' },
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
    title: 'Aplikasi Pantau Tumbuh Kembang Balita',
    subtitle: 'Aplikasi Tumbuh Kembang Anak',
    category: 'frontend',
    categoryLabel: 'Kesehatan & Keluarga',
    badge: 'Standar WHO',
    role: 'Frontend & API Developer',
    featured: true,
    image: '/projects/kiddogrowth/04_tab_tumbuh_growth_weight.png',
    gallery: [
      '/projects/kiddogrowth/04_tab_tumbuh_growth_weight.png',
      '/projects/kiddogrowth/05_tab_tumbuh_growth_height.png',
      '/projects/kiddogrowth/03_tab_harian_daily.png',
      '/projects/kiddogrowth/06_tab_milestone.png',
      '/projects/kiddogrowth/07_tab_panduan_guidelines.png',
      '/projects/kiddogrowth/12_modal_catat_tumbuh_who.png',
    ],
    colorTheme: {
      gradient: 'from-sky-500 via-cyan-500 to-blue-600',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-300',
      cardBorder: 'hover:border-sky-400',
      accentText: 'text-sky-700',
      lightBg: 'bg-sky-50/60',
      iconBg: 'bg-sky-500',
    },
    description: 'Aplikasi pencatatan dan pemantauan grafik berat badan, tinggi badan, dan lingkar kepala balita berdasarkan kurva World Health Organization (WHO).',
    problem: 'Orang tua membutuhkan cara praktis untuk mencatat dan memantau kurva KMS balita secara digital tanpa repot membaca tabel manual.',
    solution: 'Membangun aplikasi web dengan visualisasi grafik interaktif kurva WHO, perhitungan otomatis Z-Score gizi, dan riwayat jadwal imunisasi.',
    architecture: 'React Frontend -> Chart Visualization -> Go REST API -> Database.',
    keyHighlights: [
      'Visualisasi grafik kurva pertumbuhan WHO responsif di layar smartphone.',
      'Kalkulasi status gizi otomatis berdasarkan berat dan tinggi badan balita.',
      'Pengingat jadwal imunisasi dasar lengkap sesuai rentang usia anak.',
      'Antarmuka bersih dan mudah digunakan oleh orang tua.',
    ],
    metrics: [
      { label: 'Metode', value: 'Kurva Z-Score WHO' },
      { label: 'Grafik', value: 'Visualisasi Interaktif' },
      { label: 'Pengguna', value: 'Orang Tua & Balita' },
      { label: 'Tampilan', value: 'Mobile Friendly' },
    ],
    tags: ['React', 'TypeScript', 'Data Visualization', 'Go API', 'Tailwind CSS', 'HealthTech'],
  },
  {
    id: 'duniabumbu-web',
    title: 'Platform E-Commerce & Katalog Bumbu Nusantara',
    subtitle: 'DuniaBumbu Toko Online Rempah',
    category: 'saas',
    categoryLabel: 'E-Commerce & Toko Online',
    badge: 'Katalog & Admin Order',
    role: 'Fullstack Developer',
    featured: true,
    image: '/projects/bumbu-shop.png',
    gallery: [
      '/projects/bumbu-shop.png',
      '/projects/bumbu-cart.png',
      '/projects/bumbu-admin-dash.png',
      '/projects/bumbu-admin-orders.png',
      '/projects/bumbu-admin-products.png',
    ],
    colorTheme: {
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-300',
      cardBorder: 'hover:border-amber-400',
      accentText: 'text-amber-800',
      lightBg: 'bg-amber-50/60',
      iconBg: 'bg-amber-600',
    },
    description: 'Platform e-commerce komoditas rempah nusantara dengan katalog produk, keranjang belanja, manajemen varian stok, serta portal dashboard admin pesanan.',
    problem: 'Kebutuhan platform penjualan rempah online yang praktis dengan pengelolaan pesanan dan stok barang yang terpusat.',
    solution: 'Membangun website e-commerce dengan katalog produk interaktif, keranjang belanja, dan portal admin untuk memantau transaksi pesanan.',
    architecture: 'Vue 3 / React Frontend -> RESTful API Backend -> Database MySQL.',
    keyHighlights: [
      'Katalog produk rempah dengan filter kategori dan fitur pencarian.',
      'Manajemen keranjang belanja dan kalkulasi total transaksi belanja.',
      'Portal admin untuk memantau ringkasan pesanan dan data varian produk.',
      'Tampilan responsif dan nyaman diakses melalui smartphone.',
    ],
    metrics: [
      { label: 'Frontend', value: 'Vue 3 & SPA' },
      { label: 'Admin', value: 'Manajemen Pesanan' },
      { label: 'Fitur', value: 'Katalog & Checkout' },
      { label: 'Tampilan', value: 'Mobile & Desktop' },
    ],
    tags: ['Vue 3', 'React', 'Tailwind CSS', 'REST API', 'MySQL', 'E-Commerce'],
  },
  {
    id: 'digizakat-platform',
    title: 'Platform Donasi & Kalkulator Zakat Online',
    subtitle: 'DigiZakat & DigiInfaq Portal',
    category: 'golang',
    categoryLabel: 'Finansial & Filantropi',
    badge: 'Kalkulator Zakat & Donasi',
    role: 'Fullstack Developer',
    featured: true,
    image: '/projects/zakat-ui-home.png',
    gallery: [
      '/projects/zakat-ui-home.png',
      '/projects/zakat-ui-campaigns.png',
      '/projects/zakat-ui-calculator.png',
    ],
    colorTheme: {
      gradient: 'from-emerald-600 via-teal-600 to-green-700',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-300',
      cardBorder: 'hover:border-teal-400',
      accentText: 'text-teal-700',
      lightBg: 'bg-teal-50/60',
      iconBg: 'bg-teal-600',
    },
    description: 'Platform digital donasi dan zakat dengan katalog program kemanusiaan, kalkulator zakat otomatis, serta pencatatan transaksi donatur.',
    problem: 'Kebutuhan sarana penghitungan zakat maal & profesi yang praktis serta informasi progres program donasi yang terpusat.',
    solution: 'Mengembangkan web portal zakat dengan kalkulator nisab otomatis, katalog program donasi, dan pencatatan transaksi donatur.',
    architecture: 'Vue 3 Web -> Go Backend API -> Database MySQL.',
    keyHighlights: [
      'Kalkulator zakat maal, penghasilan, dan fitrah dengan hitungan otomatis.',
      'Katalog program kemanusiaan dengan progres capaian donasi.',
      'Antarmuka bersih dan mudah digunakan di smartphone maupun laptop.',
      'Pencatatan data donasi terstruktur untuk kemudahan administrasi.',
    ],
    metrics: [
      { label: 'Fitur Utama', value: 'Kalkulator Zakat' },
      { label: 'Perhitungan', value: 'Nisab Maal & Profesi' },
      { label: 'Frontend', value: 'Vue 3 & Tailwind' },
      { label: 'Database', value: 'MySQL Relasional' },
    ],
    tags: ['Vue 3', 'Go', 'Tailwind CSS', 'Kalkulator Zakat', 'MySQL', 'Fintech', 'Filantropi'],
  },
  {
    id: 'binakheir',
    title: 'Portal Sekolah Islam Terpadu & PPDB Online',
    subtitle: 'Binakheir Islamic School Digital Portal',
    category: 'frontend',
    categoryLabel: 'Pendidikan & Institusi',
    badge: 'PPDB & Kurikulum',
    role: 'Frontend Developer & UI/UX',
    featured: false,
    image: '/projects/binakheir-ui-portal.png',
    gallery: [
      '/projects/binakheir-ui-portal.png',
    ],
    colorTheme: {
      gradient: 'from-blue-600 via-indigo-600 to-violet-700',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-300',
      cardBorder: 'hover:border-blue-400',
      accentText: 'text-blue-700',
      lightBg: 'bg-blue-50/60',
      iconBg: 'bg-blue-600',
    },
    description: 'Website institusi pendidikan modern untuk Sekolah Islam Terpadu Binakheir yang menyajikan profil sekolah, kurikulum unggulan, galeri kegiatan, serta alur pendaftaran siswa baru (PPDB online).',
    problem: 'Brosur fisik pendaftaran sering tidak sampai ke calon wali murid, informasi program sekolah sulit diakses, dan alur pendaftaran belum terpusat.',
    solution: 'Membangun portal sekolah interaktif berbasis React dengan animasi halus, sajian informasi kurikulum komprehensif, dan tombol formulir pendaftaran PPDB yang mudah diakses.',
    architecture: 'React + TypeScript -> Tailwind CSS -> Framer Motion -> PPDB Registration Flow.',
    keyHighlights: [
      'Desain visual modern, edukatif, dan ramah bagi orang tua calon peserta didik.',
      'Informasi jenjang pendidikan, kurikulum tahfidz, dan fasilitas sekolah yang lengkap.',
      'Akses cepat formulir pendaftaran siswa baru (PPDB) langsung dari halaman utama.',
      'Struktur halaman SEO-friendly dan dioptimalkan untuk browsing lewat smartphone.',
    ],
    metrics: [
      { label: 'Navigasi', value: 'Intuitif & Cepat' },
      { label: 'Alur PPDB', value: 'Online Terpusat' },
      { label: 'Aksesibilitas', value: 'Mobile Optimized' },
      { label: 'Desain', value: 'Clean & Edukatif' },
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web Sekolah', 'PPDB'],
  },
  {
    id: 'fypotret',
    title: 'Website Studio & Reservasi Fotografi Komersial',
    subtitle: 'FYPotret Visual Brand Experience',
    category: 'frontend',
    categoryLabel: 'Studio & Agensi Kreatif',
    badge: 'Galeri & Booking WhatsApp',
    role: 'Frontend Developer & UI Designer',
    featured: false,
    image: '/projects/fypotret-ui-home.png',
    gallery: [
      '/projects/fypotret-ui-home.png',
    ],
    colorTheme: {
      gradient: 'from-rose-500 via-pink-500 to-purple-600',
      badgeBg: 'bg-rose-50 text-rose-800 border-rose-300',
      cardBorder: 'hover:border-rose-400',
      accentText: 'text-rose-700',
      lightBg: 'bg-rose-50/60',
      iconBg: 'bg-rose-500',
    },
    description: 'Website portofolio dan pemesanan sesi foto wisuda, prewedding, produk, dan studio dengan galeri karya, rincian paket transparan, dan integrasi pemesanan WhatsApp otomatis.',
    problem: 'Banyak calon klien batal memesan jasa fotografi karena website lama lambat memuat foto, tata letak berantakan di HP, dan daftar harga paket tidak transparan.',
    solution: 'Membangun antarmuka bersih dengan visual fotografi tajam, sajian paket harga transparan, serta integrasi tombol booking yang langsung menghasilkan format pesan order ke WhatsApp.',
    architecture: 'React + Vite -> Tailwind CSS -> Lightbox Gallery -> WhatsApp Booking Engine.',
    keyHighlights: [
      'Tampilan galeri fotografi resolusi tinggi yang dioptimalkan agar ringan di HP.',
      'Rincian paket foto yang jelas memudahkan calon klien memilih layanan yang sesuai.',
      'Integrasi satu klik ke WhatsApp dengan template pesan otomatis terstruktur.',
      'Navigasi mulus dengan tipografi editorial yang elegan dan profesional.',
    ],
    metrics: [
      { label: 'Waktu Muat', value: 'Cepat & Ringan' },
      { label: 'Target Sentuhan', value: 'Min. 44px (iOS HIG)' },
      { label: 'Alur Booking', value: 'Otomatis ke WhatsApp' },
      { label: 'Tampilan', value: 'Editorial & Responsif' },
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Web', 'WhatsApp API', 'Fotografi'],
  },
];
