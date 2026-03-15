/* ============================================================
   inni — Improved JavaScript v2
   - Fixed: double submit handler (merged into one)
   - Fixed: exit intent double-trigger
   - Fixed: scroll padding dynamic header height
   - Fixed: comparison table open by default
   - Improved: model card design
   - Improved: progress indicator
   ============================================================ */

// ── CONFIG ────────────────────────────────────────────────
const POPULAR_ACCT_IDX = [1, 7, 11];
const POPULAR_POS_IDX = [0, 2, 6];
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxmVazpB1t-P-TeIYYuBMERr7K_7EmUDmLff_wacxKZ3CjxRoQL6O9N8envUwEyJv3X/exec";

// ── TRANSLATIONS ──────────────────────────────────────────
const translations = {
  id: {
    headerTitle: "PT. Integrasindo Multi Kreasi",
    headerSlogan:
      '"Laporan Keuangan & Pajak Praktis untuk Semua Skala Bisnis & Organisasi"',
    navHome: "Beranda",
    navBenefits: "Keunggulan",
    navServices: "Layanan",
    navProducts: "Produk",
    navProductApps: "Aplikasi Kami",
    navContact: "Kontak",
    navFaq: "FAQ",
    navPricing: "Harga",
    navHowItWorks: "Cara Kerja",
    introTitle: "Selamat Datang di PT. Integrasindo Multi Kreasi",
    introText:
      "Kami menyediakan aplikasi desktop keuangan dan pajak yang 100% offline untuk UMKM, Koperasi, serta berbagai organisasi — install sekali, pakai selamanya!",
    ctaDemoAcct: "Preview Demo Online",
    ctaDemoPos: "Preview Demo POS",
    heroproof: "Demo Gratis · Tanpa Registrasi · Aplikasi Asli 100% Offline",
    demoCtaTitle: "🎯 Jangan Hanya Menonton—",
    demoCtaSecTitle: "Rasakan Sendiri!",
    demoCtaSubtitle: "Preview semua fitur aplikasi desktop secara gratis",
    demoFeature1: "100% Gratis",
    demoFeature1Desc: "Tidak perlu kartu kredit",
    demoFeature2: "Akses Instan",
    demoFeature2Desc: "Tanpa registrasi/login",
    demoFeature3: "Fitur Lengkap",
    demoFeature3Desc: "Semua menu bisa dicoba*",
    tryDemoButton: "PREVIEW DEMO SEKARANG",
    demoDisclaimer:
      "*Demo ONLINE ini hanya untuk preview fitur. Aplikasi ASLI adalah desktop app yang 100% offline — data tersimpan permanen di komputer, tidak ada batasan fitur, dan bisa backup/restore kapan saja.",
    benefitsLabel: "Keunggulan Kami",
    benefitsTitle: "Mengapa Memilih inni?",
    benefitsSubtitle: "Keunggulan yang membuat kami berbeda",
    benefit1: "Mudah digunakan, bahkan untuk pemula.",
    benefit2: "Data keuangan yang akurat dan terorganisasi.",
    benefit3: "Solusi yang hemat waktu dan biaya.",
    benefit4: "Pelatihan di lokasi untuk adopsi yang mulus.",
    testimonialLabel: "Apa Kata Mereka",
    testimonialTitle: "Dipercaya oleh Pelaku Usaha Nyata",
    testimonialSubtitle:
      "Pengalaman nyata dari pengguna inni di berbagai jenis usaha",
    testimonial1Text:
      "\u201cSebelumnya pembukuan masih manual dan perhitungan stok barang sering kali tidak akurat. Semenjak pakai inni, semuanya jadi jauh lebih rapi dan terstruktur.\u201d",
    testimonial1Business: "Mebel Kayu · inni Manufaktur",
    testimonial2Text:
      "\u201cDulu pembukuan masih manual dan berantakan, laporan keuangan susah dibuat. Dengan inni, semua laporan langsung tersedia otomatis dan rapi.\u201d",
    testimonial2Business: "Pabrik Plastik · inni Lengkap",
    testimonial3Text:
      "\u201cUsaha jual beli makanan pokok saya dulu catatannya masih di buku tulis. Sekarang dengan inni, pencatatan jadi lebih mudah dan saya bisa tahu kondisi keuangan kapan saja.\u201d",
    testimonial3Business: "Sembako, Tahu & Tempe · inni Basic",
    servicesLabel: "Layanan Kami",
    servicesMainTitle: "Dukungan Komprehensif untuk Kesuksesan Bisnis Anda",
    servicesMainSubtitle:
      "Lebih dari sekadar aplikasi — kami hadir sebagai mitra digital lengkap untuk UMKM dan organisasi Anda",
    service1Title: "Aplikasi Desktop Akuntansi & POS",
    service1DescNew:
      "Software akuntansi dan kasir 100% offline untuk UMKM, koperasi, dan organisasi. Install sekali, pakai selamanya tanpa biaya bulanan.",
    service1Cta: "Produk Utama",
    service2Title: "Pelaporan Pajak",
    service2DescNew:
      "Pelaporan pajak pribadi dan usaha (PPh, PPN) dengan mudah, lengkap dengan asistensi pengisian SPT tahunan.",
    service2Cta: "Pajak & Compliance",
    service3Title: "Konsultasi & Pelatihan",
    service3DescNew:
      "Konsultasi akuntansi dan pajak langsung dengan ahli. Termasuk pelatihan on-site agar tim Anda mahir menggunakan sistem.",
    service3Cta: "Mau Sesi Training",
    service4Title: "Legalitas Usaha",
    service4DescNew:
      "Pendaftaran merek, NIB, NPWP usaha, dan berbagai kebutuhan legalitas bisnis Anda — cepat, tepat, dan terpercaya.",
    service4Cta: "Urus Legalitas",
    service5Title: "Kursus SPT PPh Badan",
    service5DescNew:
      "Kursus profesional untuk penyusunan SPT PPh Badan yang tepat dan efisien. Cocok untuk akuntan dan manajer keuangan.",
    service5Cta: "Kursus Profesional",
    service5WebTitle: "Kustomisasi Aplikasi",
    service5WebDesc:
      "Aplikasi dapat disesuaikan dengan alur bisnis spesifik Anda — mulai dari format laporan, struktur akun, hingga fitur tambahan sesuai kebutuhan.",
    service5WebCta: "Konsultasi Kustomisasi",
    servicesCtaBottom: "Konsultasi Gratis via WhatsApp",
    appsLabel: "2 Produk Unggulan Kami",
    appsTitle: "Satu Ekosistem, Dua Solusi Bisnis",
    appsSubtitle:
      "Pilih sesuai kebutuhan, atau gunakan keduanya untuk bisnis yang lebih lengkap",
    app1Name: "inni Akun Digi",
    app1Desc:
      "Aplikasi desktop akuntansi lengkap untuk UMKM, koperasi, dan organisasi. 100% offline, install sekali pakai selamanya.",
    app1Feature1: "Laporan Keuangan Otomatis",
    app1Feature2: "Piutang & Hutang Terintegrasi",
    app1Feature3: "4 Model: Basic, Lengkap, Retail, Manufaktur",
    app1Feature4: "Export PDF & Excel",
    app1Price: "Mulai dari Rp 2.500.000",
    app1DemoBtn: "Preview Demo",
    app1ModelBtn: "Lihat Model",
    app2Name: "inni POS",
    app2Price: "Rp 4.500.000",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Gunakan keduanya</strong> — inni Accounting + inni POS terintegrasi untuk pengelolaan bisnis yang lebih lengkap",
    oneTimeLabel: "Investasi sekali",
    posModelSingle: "1 Model — All Inclusive",
    posModelDesc:
      "inni POS hadir dalam satu paket lengkap — tidak ada pilihan model yang membingungkan. Semua fitur kasir, stok, dan laporan sudah tersedia dalam satu harga.",
    posPill1: "Transaksi Kasir",
    posPill2: "Scan Barcode",
    posPill3: "Multi Payment",
    posPill4: "Stok & Gudang",
    posPill5: "Data Pelanggan",
    posPill6: "Retur Penjualan",
    posPill7: "Laporan Penjualan",
    posPill8: "Laporan Arus Kas",
    contactSales: "Hubungi Sales",
    previewBadge: "Pratinjau Aplikasi",
    watchMoreVideos: "Ingin lihat lebih?",
    ourYouTubeChannel: "Channel YouTube kami",
    featuresTitle: "Fitur Aplikasi inni Akun Digi",
    howItWorksLabel: "Bagaimana Cara Kerjanya?",
    howItWorksTitle: "Desktop App, Bukan Website Biasa",
    howItWorksSubtitle:
      "inni Akun Digi & POS adalah aplikasi desktop seperti Microsoft Word — install sekali, pakai selamanya, 100% offline",
    step1Title: "Download Installer",
    step1Desc:
      "Setelah pembayaran, terima link download file .exe (150-300 MB) + license key via email",
    step2Title: "Install di Windows",
    step2Desc:
      "Double-click installer → Next → Next → Finish. Seperti install software biasa, 5-10 menit selesai",
    step3Title: "Langsung Pakai!",
    step3Desc:
      "Buka aplikasi dari desktop shortcut, input license key, dan mulai kelola keuangan — 100% offline!",
    howItWorksCard1Title: "Data 100% Lokal",
    howItWorksCard1Desc:
      "Semua data tersimpan di komputer Anda, tidak ada yang dikirim ke cloud atau internet.",
    howItWorksCard2Title: "Tidak Butuh Internet",
    howItWorksCard2Desc:
      "Aplikasi jalan normal tanpa koneksi internet. Cocok untuk area dengan internet tidak stabil.",
    howItWorksCard3Title: "Pakai Selamanya",
    howItWorksCard3Desc:
      "Bayar sekali, pakai selamanya. Tidak ada biaya bulanan/tahunan. Update gratis & opsional.",
    howItWorksCard4Title: "Multi-Perangkat",
    howItWorksCard4Desc:
      "1 lisensi untuk 1 PC utama. Perangkat lain dalam jaringan yang sama dapat mengakses melalui file server yang dijalankan di PC utama, dengan konfigurasi awal yang mudah.",
    howItWorksCard6Title: "Backup Mudah",
    howItWorksCard6Desc:
      "Fitur backup 1-click ke file .sql. Restore kapan saja tanpa ribet.",
    requirementsLabel: "Spesifikasi Sistem",
    minSpecs: "Spesifikasi Minimal",
    recSpecs: "Spesifikasi Rekomendasi",
    reqNote2:
      "Aplikasi sudah include PHP & database built-in — tidak perlu install XAMPP/server terpisah",
    licenseTransferTitle: "Butuh Transfer License?",
    licenseTransferDesc:
      "Jika Anda perlu mengaktifkan license di komputer baru, hubungi admin kami:",
    licenseTransferBtn: "Request Transfer License",
    guaranteeTitle: "Belanja Aman,",
    guaranteeTitleHighlight: "Kami Jamin!",
    guaranteeSubtitle: "Setiap pembelian dilindungi oleh jaminan berikut.",
    guaranteeBadge: "Garansi Resmi PT. Integrasindo Multi Kreasi",
    guarantee2Title: "Garansi Instalasi Berhasil",
    guarantee2Desc:
      "Tim kami memastikan instalasi berjalan lancar. Jika ada kendala, kami remote via TeamViewer hingga berjalan sempurna.",
    guarantee3Title: "Support Seumur Hidup",
    guarantee3Desc:
      "Satu kali bayar, support teknis penggunaan aplikasi tidak berhenti. Tanya kapan saja via WhatsApp. Catatan: pemindahan lisensi ke perangkat baru dikenakan biaya administrasi sesuai ketentuan perjanjian.",
    guarantee4Title: "Update Gratis Selamanya",
    guarantee4Desc:
      "Bug fixes dan fitur baru gratis selamanya. Cukup download dan install update-nya.",
    guaranteeNote:
      "Seluruh garansi aktif setelah instalasi dan aktivasi lisensi berhasil dilakukan, sesuai ketentuan surat perjanjian kerjasama yang telah ditandatangani.",
    guaranteeCta: "Tanya soal Garansi",
    howToBuyTitle: "Dari Konsultasi Hingga",
    howToBuyTitleHighlight: "Siap Pakai",
    howToBuySubtitle: "Proses yang jelas dan transparan — tidak ada kejutan.",
    step1BuyTitle: "Konsultasi",
    step1BuyDesc:
      "Chat WhatsApp atau isi form kontak. Kami bantu pilih model yang tepat.",
    step2BuyTitle: "Demo Gratis",
    step2BuyDesc:
      "Coba preview online atau kami tunjukkan demo via remote TeamViewer.",
    step3BuyTitle: "Pembayaran",
    step3BuyDesc:
      "Transfer ke rekening resmi perusahaan. Konfirmasi dan terima invoice resmi.",
    step4BuyTitle: "Install & Aktivasi",
    step4BuyDesc:
      "Terima link installer + license key via email. Install dalam 10 menit.",
    step5BuyTitle: "Training",
    step5BuyDesc:
      "Pelatihan on-site atau remote. Tim Anda siap pakai dalam 1 hari kerja.",
    howToBuyEstimate:
      'Estimasi total: <span class="text-blue-600">1–3 hari kerja</span>',
    howToBuyEstimateDesc:
      "dari konsultasi pertama hingga tim Anda siap menggunakan aplikasi",
    howToBuyCta: "Mulai Konsultasi Sekarang",
    comparisonLabel: "Pilih Paket yang Tepat",
    comparisonTitle: "Perbandingan Model Aplikasi",
    comparisonAppName: "Untuk: inni Akun Digi (Aplikasi Akuntansi)",
    comparisonAppNote: "inni POS memiliki 1 paket lengkap tanpa model terpisah",
    comparisonSubtitle:
      "Setiap model memiliki installer dan struktur database yang berbeda sesuai kebutuhan bisnis Anda.",
    bannerTitle: "Investasi Sekali",
    bannerSubtitle: ", Pakai Selamanya!",
    benefitNoSubscription: "Tanpa Biaya Langganan",
    benefitLifetime: "Akses Selamanya",
    benefitUpdates: "Update Gratis",
    benefitSupport: "Support Selamanya",
    featureColumn: "Fitur",
    completeColumn: "Lengkap",
    manufacturingColumn: "Manufaktur",
    notesTitle: "Keterangan:",
    detailedComparisonToggle: "Sembunyikan Perbandingan Detail",
    demoVsFullTitle: "Demo Online vs Aplikasi Desktop Asli",
    demoVsFullNote:
      "Demo online HANYA untuk melihat tampilan & fitur. Untuk bisnis nyata, gunakan aplikasi desktop 100% offline & unlimited.",
    demoVsAspect: "Aspek",
    demoVsOnlineHeader: "Demo Online (Preview)",
    demoVsDesktopHeader: "Aplikasi Desktop Asli",
    demoVsInternet: "Koneksi Internet",
    demoVsInternetOnline: "✓ Wajib online",
    demoVsInternetOffline: "✓ 100% offline",
    demoVsDataStorage: "Penyimpanan Data",
    demoVsDataNotPermanent: "Tidak permanen",
    demoVsDataPermanent: "✓ Permanen di PC",
    demoVsFullFeatures: "Fitur Lengkap",
    demoVsFeaturesLimited: "Sebagian dibatasi",
    demoVsFeaturesFull: "✓ 100% aktif",
    demoVsBackupRestore: "Backup/Restore",
    demoVsBackupNo: "✗ Tidak bisa",
    demoVsBackupYes: "✓ 1-click backup",
    demoVsSpeed: "Kecepatan",
    demoVsSpeedInternet: "Tergantung internet",
    demoVsSpeedFast: "✓ Super cepat",
    demoVsCost: "Biaya",
    demoVsCostFree: "✓ Gratis",
    demoVsCostOneTime: "Investasi 1x",
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi. Seluruh hak cipta dilindungi.",
    footerCompany: "PT. Integrasindo Multi Kreasi",
    footerTagline:
      '"Laporan Keuangan & Pajak Praktis untuk Semua Skala Bisnis & Organisasi"',
    footerDesc:
      "Aplikasi desktop akuntansi 100% offline dengan fitur lengkap dan pelatihan on-site",
    footerOffice: "Kantor Kami",
    footerQuickLinks: "Tautan Cepat",
    footerHome: "Beranda",
    footerContact: "Kontak",
    footerViewMap: "Lihat di Google Maps",
    posDemoFeatureTitle: "Fitur Aplikasi POS inni",
    posDemoDisclaimer:
      "*Demo ONLINE ini hanya untuk preview fitur. Aplikasi ASLI 100% offline — data tersimpan permanen.",
    posDemoCta: "🛒 Coba Langsung—",
    posDemoCtaSec: "Gratis Tanpa Registrasi!",
    posDemoSubtitle: "Preview aplikasi kasir desktop untuk bisnis retail Anda",
    posDemoCtaButton: "PREVIEW DEMO POS SEKARANG",
    desktopAppBadge: "Aplikasi Desktop",
    offlineBadge: "100% Offline",
    localDataBadge: "Data Lokal Aman",
    workingHoursLabel: "Jam Kerja",
    workingDays: "Senin – Jumat",
    workingTime: "08.00 – 17.00 WIB",
    workingNote:
      "Di luar jam kerja, silakan tinggalkan pesan via WhatsApp atau Email",
    "sticky-acct-text": "Demo Akun Digi",
    "sticky-wa-text": "WhatsApp Kami",
    navHowToBuy: "Cara Beli",
    navGuarantee: "Garansi",
  },
  en: {
    headerTitle: "PT. Integrasindo Multi Kreasi",
    headerSlogan:
      '"Practical Financial Reports & Tax Solutions for All Business and Organization Scales"',
    navHome: "Home",
    navBenefits: "Benefits",
    navServices: "Services",
    navProducts: "Products",
    navProductApps: "Our Applications",
    navContact: "Contact",
    navFaq: "FAQ",
    navPricing: "Pricing",
    navHowItWorks: "How It Works",
    introTitle: "Welcome to PT. Integrasindo Multi Kreasi",
    introText:
      "We provide 100% offline desktop financial and tax applications for MSMEs, Cooperatives, and organizations — install once, use forever!",
    ctaDemoAcct: "Preview Online Demo",
    ctaDemoPos: "Preview POS Demo",
    heroproof: "Free Demo · No Registration · Real App 100% Offline",
    demoCtaTitle: "🎯 Don't Just Watch—",
    demoCtaSecTitle: "Feel It Yourself!",
    demoCtaSubtitle: "Preview all desktop app features for free",
    demoFeature1: "100% Free",
    demoFeature1Desc: "No credit card needed",
    demoFeature2: "Instant Access",
    demoFeature2Desc: "No registration/login",
    demoFeature3: "Full Features",
    demoFeature3Desc: "All menus available*",
    tryDemoButton: "PREVIEW DEMO NOW",
    demoDisclaimer:
      "*This ONLINE demo is for preview only. The REAL app is 100% offline desktop — permanent data, no feature limits.",
    benefitsLabel: "Our Advantages",
    benefitsTitle: "Why Choose inni?",
    benefitsSubtitle: "Advantages that make us different",
    testimonialLabel: "What They Say",
    testimonialTitle: "Trusted by Real Business Owners",
    testimonialSubtitle:
      "Real experiences from inni users across various business types",
    testimonial1Text:
      "\u201cPreviously bookkeeping was manual and stock calculations were often inaccurate. Since using inni, everything has become much more organized and structured.\u201d",
    testimonial1Business: "Wood Furniture · inni Manufacturing",
    testimonial2Text:
      "\u201cOur bookkeeping used to be manual and messy, financial reports were hard to produce. With inni, all reports are automatically available and well-organized.\u201d",
    testimonial2Business: "Plastic Factory · inni Complete",
    testimonial3Text:
      "\u201cMy staple food business used to record everything in a notebook. Now with inni, bookkeeping is easier and I can check my financial condition anytime.\u201d",
    testimonial3Business: "Staple Foods, Tofu & Tempeh · inni Basic",
    benefit1: "Easy to use, even for beginners.",
    benefit2: "Accurate and organized financial data.",
    benefit3: "Time and cost-efficient solutions.",
    benefit4: "On-site training for seamless adoption.",
    servicesLabel: "Our Services",
    servicesMainTitle: "Comprehensive Support for Your Business Success",
    servicesMainSubtitle:
      "More than just applications — your complete digital partner",
    service1Title: "Desktop Accounting & POS Applications",
    service1DescNew:
      "100% offline accounting and POS software. Install once, use forever.",
    service1Cta: "Main Products",
    service2Title: "Tax Reporting",
    service2DescNew:
      "Easy personal and business tax reporting with annual return assistance.",
    service2Cta: "Tax & Compliance",
    service3Title: "Consultation & Training",
    service3DescNew:
      "Direct expert consultation plus on-site training for your team.",
    service3Cta: "Get Training",
    service4Title: "Business Legality",
    service4DescNew:
      "Brand registration, NIB, business NPWP and more — fast and reliable.",
    service4Cta: "Handle Legality",
    service5Title: "Corporate Tax Return Course",
    service5DescNew:
      "Professional course for accurate corporate tax return preparation.",
    service5Cta: "Professional Course",
    service5WebTitle: "Application Customization",
    service5WebDesc:
      "The application can be tailored to your specific business workflow — from report formats and account structures to additional features as needed.",
    service5WebCta: "Customization Consultation",
    servicesCtaBottom: "Free Consultation via WhatsApp",
    appsLabel: "2 Featured Products",
    appsTitle: "One Ecosystem, Two Business Solutions",
    appsSubtitle:
      "Choose what you need, or use both for complete business management",
    app1Name: "inni Akun Digi",
    app1Desc:
      "Complete desktop accounting application for MSMEs and organizations. 100% offline.",
    app1Feature1: "Automatic Financial Reports",
    app1Feature2: "Integrated Receivables & Payables",
    app1Feature3: "4 Models: Basic, Complete, Retail, Manufacturing",
    app1Feature4: "Export PDF & Excel",
    app1Price: "Starting from IDR 2,500,000",
    app1DemoBtn: "Preview Demo",
    app1ModelBtn: "View Models",
    app2Name: "inni POS",
    app2Price: "IDR 4,500,000",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Use both</strong> — inni Accounting + inni POS integrated for complete business management",
    oneTimeLabel: "One-time investment",
    posModelSingle: "1 Model — All Inclusive",
    posModelDesc:
      "inni POS in one complete package. All cashier, inventory, and report features in one price.",
    posPill1: "Cashier Transaction",
    posPill2: "Barcode Scan",
    posPill3: "Multi Payment",
    posPill4: "Stock & Warehouse",
    posPill5: "Customer Data",
    posPill6: "Sales Returns",
    posPill7: "Sales Reports",
    posPill8: "Cash Flow Report",
    contactSales: "Contact Sales",
    previewBadge: "App Preview",
    watchMoreVideos: "Want to see more?",
    ourYouTubeChannel: "our YouTube channel",
    featuresTitle: "inni Akun Digi Application Features",
    howItWorksLabel: "How Does It Work?",
    howItWorksTitle: "Desktop App, Not a Regular Website",
    howItWorksSubtitle:
      "inni Akun Digi & POS are desktop apps like Microsoft Word — install once, use forever, 100% offline",
    step1Title: "Download Installer",
    step1Desc:
      "After payment, receive .exe file (150-300 MB) + license key via email",
    step2Title: "Install on Windows",
    step2Desc:
      "Double-click installer → Next → Next → Finish. 5-10 minutes done",
    step3Title: "Start Using!",
    step3Desc:
      "Open from desktop shortcut, enter license key, start managing finances — 100% offline!",
    howItWorksCard1Title: "100% Local Data",
    howItWorksCard1Desc:
      "All data stored on your computer. Maximum privacy & security.",
    howItWorksCard2Title: "No Internet Needed",
    howItWorksCard2Desc:
      "Runs without internet. Perfect for unstable internet areas.",
    howItWorksCard3Title: "Use Forever",
    howItWorksCard3Desc:
      "Pay once, use forever. No monthly fees. Updates free & optional.",
    howItWorksCard4Title: "Multi-Device",
    howItWorksCard4Desc:
      "1 license for 1 main PC. Other devices on the same network can access via a file server running on the main PC, with a simple initial configuration.",
    howItWorksCard6Title: "Easy Backup",
    howItWorksCard6Desc:
      "1-click backup to .sql file. Restore anytime hassle-free.",
    requirementsLabel: "System Specifications",
    minSpecs: "Minimum Specifications",
    recSpecs: "Recommended Specifications",
    reqNote2: "Application includes built-in PHP & database — no XAMPP needed",
    licenseTransferTitle: "Need License Transfer?",
    licenseTransferDesc: "To activate on a new computer, contact our admin:",
    licenseTransferBtn: "Request License Transfer",
    guaranteeTitle: "Shop Safely,",
    guaranteeTitleHighlight: "We Guarantee It!",
    guaranteeSubtitle: "Every purchase is protected by these guarantees.",
    guaranteeBadge: "Official Guarantee by PT. Integrasindo Multi Kreasi",
    guarantee2Title: "Successful Installation Guarantee",
    guarantee2Desc:
      "Our team ensures installation succeeds. If issues arise, we remote via TeamViewer until perfect.",
    guarantee3Title: "Lifetime Support",
    guarantee3Desc:
      "One-time payment, technical support for app usage never stops. Ask anytime via WhatsApp. Note: license transfer to a new device is subject to an administrative fee as per the agreement.",
    guarantee4Title: "Free Updates Forever",
    guarantee4Desc:
      "Bug fixes and new features are always free — just download and install.",
    guaranteeNote:
      "All guarantees are active upon successful installation and license activation, as per the signed cooperation agreement.",
    guaranteeCta: "Ask About Guarantee",
    howToBuyTitle: "From Consultation to",
    howToBuyTitleHighlight: "Ready to Use",
    howToBuySubtitle: "A clear and transparent process — no surprises.",
    step1BuyTitle: "Consultation",
    step1BuyDesc:
      "Chat via WhatsApp or fill the contact form. We help you choose the right model.",
    step2BuyTitle: "Free Demo",
    step2BuyDesc: "Try online preview or live demo via remote TeamViewer.",
    step3BuyTitle: "Payment",
    step3BuyDesc:
      "Transfer to official company account. Confirm and receive invoice.",
    step4BuyTitle: "Install & Activation",
    step4BuyDesc:
      "Receive installer + license key via email. Install in 10 minutes.",
    step5BuyTitle: "Training",
    step5BuyDesc: "On-site or remote training. Team ready in 1 business day.",
    howToBuyEstimate:
      'Total estimate: <span class="text-blue-600">1–3 business days</span>',
    howToBuyEstimateDesc: "from first consultation until your team is ready",
    howToBuyCta: "Start Consultation Now",
    comparisonLabel: "Choose the Right Package",
    comparisonTitle: "Application Model Comparison",
    comparisonAppName: "For: inni Akun Digi (Accounting Application)",
    comparisonAppNote:
      "inni POS has 1 complete package with no separate models",
    comparisonSubtitle:
      "Each model has different installers and database structures.",
    bannerTitle: "One-Time Investment",
    bannerSubtitle: ", Use Forever!",
    benefitNoSubscription: "No Subscription Fees",
    benefitLifetime: "Lifetime Access",
    benefitUpdates: "Free Updates",
    benefitSupport: "Lifetime Support",
    featureColumn: "Feature",
    completeColumn: "Complete",
    manufacturingColumn: "Manufacturing",
    notesTitle: "Notes:",
    detailedComparisonToggle: "Hide Detailed Comparison",
    demoVsFullTitle: "Online Demo vs Real Desktop Application",
    demoVsFullNote:
      "This online demo is ONLY to see interface & features. For real business, use the 100% offline desktop app.",
    demoVsAspect: "Aspect",
    demoVsOnlineHeader: "Online Demo (Preview)",
    demoVsDesktopHeader: "Real Desktop Application",
    demoVsInternet: "Internet Connection",
    demoVsInternetOnline: "✓ Required online",
    demoVsInternetOffline: "✓ 100% offline",
    demoVsDataStorage: "Data Storage",
    demoVsDataNotPermanent: "Not permanent",
    demoVsDataPermanent: "✓ Permanent on PC",
    demoVsFullFeatures: "Full Features",
    demoVsFeaturesLimited: "Partially limited",
    demoVsFeaturesFull: "✓ 100% active",
    demoVsBackupRestore: "Backup/Restore",
    demoVsBackupNo: "✗ Not possible",
    demoVsBackupYes: "✓ 1-click backup",
    demoVsSpeed: "Speed",
    demoVsSpeedInternet: "Depends on internet",
    demoVsSpeedFast: "✓ Super fast",
    demoVsCost: "Cost",
    demoVsCostFree: "✓ Free",
    demoVsCostOneTime: "One-time investment",
    footerText: "© 2025 PT. Integrasindo Multi Kreasi. All rights reserved.",
    footerCompany: "PT. Integrasindo Multi Kreasi",
    footerTagline:
      '"Practical Financial Reports & Tax Solutions for All Business Scales"',
    footerDesc:
      "Desktop accounting application 100% offline with full features and on-site training",
    footerOffice: "Our Office",
    footerQuickLinks: "Quick Links",
    footerHome: "Home",
    footerContact: "Contact",
    footerViewMap: "View on Google Maps",
    posDemoFeatureTitle: "inni POS Application Features",
    posDemoDisclaimer:
      "*ONLINE demo is for preview only. REAL app is 100% offline desktop.",
    posDemoCta: "🛒 Try It Now—",
    posDemoCtaSec: "Free, No Registration!",
    posDemoSubtitle: "Preview desktop cashier app for your retail business",
    posDemoCtaButton: "PREVIEW POS DEMO NOW",
    desktopAppBadge: "Desktop Application",
    offlineBadge: "100% Offline",
    localDataBadge: "Local Data Secure",
    workingHoursLabel: "Working Hours",
    workingDays: "Monday – Friday",
    workingTime: "08:00 – 17:00 WIB",
    workingNote:
      "Outside working hours, please leave a message via WhatsApp or Email",
    "sticky-acct-text": "Preview Demo",
    "sticky-wa-text": "WhatsApp Us",
    navHowToBuy: "How to Buy",
    navGuarantee: "Guarantee",
  },
};

// ── Feature data (Accounting) ─────────────────────────────
const featuresData = {
  id: [
    {
      icon: "fa-book",
      title: "Bagan Akun",
      desc: "Atur dan kelompokkan akun keuangan dengan struktur jelas untuk aset, liabilitas, dan ekuitas.",
      color: "from-blue-500 to-blue-600",
      images: ["assets/img/COA.png"],
    },
    {
      icon: "fa-ticket-alt",
      title: "Manajemen Voucher",
      desc: "Buat, edit, dan lacak voucher transaksi seperti pembelian, penjualan, dan transfer dengan validasi otomatis.",
      color: "from-purple-500 to-purple-600",
      images: [
        "assets/img/Voucher_Page.png",
        "assets/img/Voucher_Form.png",
        "assets/img/Voucher_Detail(1).png",
        "assets/img/Voucher_Detail(2).png",
      ],
      popular: true,
    },
    {
      icon: "fa-book-open",
      title: "Buku Besar Umum",
      desc: "Rekam semua transaksi keuangan secara terperinci untuk laporan yang akurat dan terorganisir.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/GeneralLedger.png"],
    },
    {
      icon: "fa-money-bill-wave",
      title: "Piutang",
      desc: "Kelola piutang pelanggan dengan pelacakan tagihan dan pembayaran secara real-time.",
      color: "from-yellow-500 to-yellow-600",
      images: ["assets/img/AR.png", "assets/img/AR_Detail.png"],
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Hutang",
      desc: "Pantau dan kelola kewajiban pembayaran kepada pemasok dengan buku pembantu terorganisir.",
      color: "from-red-500 to-red-600",
      images: ["assets/img/AP.png", "assets/img/AP_Detail.png"],
    },
    {
      icon: "fa-file-export",
      title: "Impor & Ekspor Data",
      desc: "Import data awal melalui Excel/CSV. Ekspor semua laporan ke PDF atau Excel dengan satu klik.",
      color: "from-indigo-500 to-indigo-600",
      images: [
        "assets/img/Import_Data(1).png",
        "assets/img/Export_Data(1).png",
      ],
    },
    {
      icon: "fa-balance-scale",
      title: "Neraca Saldo",
      desc: "Tinjau saldo akun secara menyeluruh untuk memastikan keseimbangan keuangan yang akurat.",
      color: "from-pink-500 to-pink-600",
      images: ["assets/img/Trial_Balance.png"],
    },
    {
      icon: "fa-chart-pie",
      title: "Neraca Keuangan",
      desc: "Lihat gambaran arus kas dan posisi keuangan bisnis Anda secara real-time.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/Balance_Sheet.png"],
      popular: true,
    },
    {
      icon: "fa-chart-bar",
      title: "Laba Rugi",
      desc: "Analisis pendapatan dan biaya dengan laporan laba rugi untuk evaluasi kinerja bisnis.",
      color: "from-orange-500 to-orange-600",
      images: ["assets/img/Income_Statement.png"],
    },
    {
      icon: "fa-boxes",
      title: "Stock",
      desc: "Kelola dan lacak inventaris dengan mudah, termasuk stok masuk, keluar, dan transfer antar gudang.",
      color: "from-cyan-500 to-cyan-600",
      images: ["assets/img/Stok.png", "assets/img/Stock_Detail.png"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Kelola proses produksi dari bahan mentah menjadi barang jadi dengan tracking material dan biaya.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/Production.png", "assets/img/Production_Detail.png"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Pantau performa keuangan dengan visualisasi data real-time, termasuk laba, penjualan, dan stok.",
      color: "from-violet-500 to-violet-600",
      images: [
        "assets/img/DashboardFinance.png",
        "assets/img/DashboardStock.png",
      ],
      popular: true,
    },
  ],
  en: [
    {
      icon: "fa-book",
      title: "Chart of Accounts",
      desc: "Organize financial accounts with a clear structure for assets, liabilities, and equity.",
      color: "from-blue-500 to-blue-600",
      images: ["assets/img/COA.png"],
    },
    {
      icon: "fa-ticket-alt",
      title: "Voucher Management",
      desc: "Create, edit, and track transaction vouchers with automatic validation.",
      color: "from-purple-500 to-purple-600",
      images: ["assets/img/Voucher_Page.png", "assets/img/Voucher_Form.png"],
      popular: true,
    },
    {
      icon: "fa-book-open",
      title: "General Ledger",
      desc: "Record all financial transactions in detail for accurate and organized reporting.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/GeneralLedger.png"],
    },
    {
      icon: "fa-money-bill-wave",
      title: "Accounts Receivable",
      desc: "Manage customer receivables with real-time tracking of invoices and payments.",
      color: "from-yellow-500 to-yellow-600",
      images: ["assets/img/AR.png", "assets/img/AR_Detail.png"],
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Accounts Payable",
      desc: "Monitor and manage payment obligations with an organized ledger.",
      color: "from-red-500 to-red-600",
      images: ["assets/img/AP.png", "assets/img/AP_Detail.png"],
    },
    {
      icon: "fa-file-export",
      title: "Import & Export",
      desc: "Import via Excel/CSV. Export any report to PDF or Excel in one click.",
      color: "from-indigo-500 to-indigo-600",
      images: ["assets/img/Export_Data(1).png"],
    },
    {
      icon: "fa-balance-scale",
      title: "Trial Balance",
      desc: "Review account balances comprehensively to ensure accurate financial balancing.",
      color: "from-pink-500 to-pink-600",
      images: ["assets/img/Trial_Balance.png"],
    },
    {
      icon: "fa-chart-pie",
      title: "Financial Overview",
      desc: "View your business's cash flow and financial position in real-time.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/Balance_Sheet.png"],
      popular: true,
    },
    {
      icon: "fa-chart-bar",
      title: "Profit and Loss",
      desc: "Analyze revenue and expenses to evaluate business performance.",
      color: "from-orange-500 to-orange-600",
      images: ["assets/img/Income_Statement.png"],
    },
    {
      icon: "fa-boxes",
      title: "Stock",
      desc: "Manage and track inventory easily, including inflows, outflows, and inter-warehouse transfers.",
      color: "from-cyan-500 to-cyan-600",
      images: ["assets/img/Stok.png"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Manage production from raw materials to finished goods with material tracking.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/Production.png"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Monitor financial performance with real-time visualizations including profit, sales, and stock.",
      color: "from-violet-500 to-violet-600",
      images: [
        "assets/img/DashboardFinance.png",
        "assets/img/DashboardStock.png",
      ],
      popular: true,
    },
  ],
};

// ── POS Feature data ──────────────────────────────────────
const posFeatures = {
  id: [
    {
      icon: "fa-shopping-cart",
      title: "Transaksi Kasir",
      subtitle: "Proses penjualan cepat & akurat",
      description:
        "Antarmuka kasir intuitif untuk memproses transaksi dengan cepat. Mendukung input manual maupun scan barcode, hitung diskon, PPN, kembalian otomatis, dan cetak struk.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Transaction.png",
        "assets/img/POS_Transaction(2).png",
        "assets/img/POS_Transaction(3).png",
        "assets/img/POS_Transaction(4).png",
        "assets/img/POS_Transaction(5).png",
        "assets/img/POS_Transaction(6).png",
        "assets/img/POS_Transaction(7).png",
      ],
      popular: true,
    },
    {
      icon: "fa-barcode",
      title: "Scan Barcode",
      subtitle: "Input produk instan via barcode",
      description:
        "Dukung berbagai format barcode: CODE128, EAN-13, EAN-8, QRCODE. Generate label otomatis dan cetak label massal.",
      color: "from-teal-500 to-teal-600",
      images: [
        "assets/img/POS_Barcode.png",
        "assets/img/POS_Barcode(2).png",
        "assets/img/POS_Barcode(3).png",
        "assets/img/POS_Barcode(4).png",
        "assets/img/POS_Barcode(5).png",
        "assets/img/POS_Barcode(6).png",
      ],
    },
    {
      icon: "fa-wallet",
      title: "Multi Metode Pembayaran",
      subtitle: "Tunai, QRIS, Transfer, Kartu",
      description:
        "Terima pembayaran: Tunai, QRIS, Transfer Bank, Kartu Debit, Kartu Kredit, dan E-Wallet.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Payment.png"],
      popular: true,
    },
    {
      icon: "fa-boxes",
      title: "Stok & Gudang",
      subtitle: "Kontrol inventori multi-gudang",
      description:
        "Pantau stok produk secara real-time per gudang. Sistem otomatis mengurangi stok saat transaksi selesai.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Stock.png",
        "assets/img/POS_Stock(2).png",
        "assets/img/POS_Stock(3).png",
        "assets/img/POS_Stock(4).png",
        "assets/img/POS_Stock(5).png",
        "assets/img/POS_Stock(6).png",
        "assets/img/POS_Stock(7).png",
      ],
    },
    {
      icon: "fa-user-friends",
      title: "Data Pelanggan",
      subtitle: "Riwayat transaksi pelanggan",
      description:
        "Simpan data pelanggan lengkap: nama, alamat, telepon, email. Lacak riwayat pembelian per pelanggan.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_Customer.png"],
    },
    {
      icon: "fa-undo-alt",
      title: "Retur Penjualan",
      subtitle: "Proses retur dari POS & Sales Order",
      description:
        "Kelola retur barang dari POS maupun Sales Order. Stok otomatis bertambah setelah retur disetujui.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Return.png"],
    },
    {
      icon: "fa-chart-bar",
      title: "Laporan Penjualan",
      subtitle: "Analitik penjualan harian–tahunan",
      description:
        "Laporan komprehensif: top produk terlaris, breakdown per pelanggan, analisis metode pembayaran, dan tren penjualan.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Report.png",
        "assets/img/POS_Report(2).png",
        "assets/img/POS_Report(3).png",
      ],
      popular: true,
    },
    {
      icon: "fa-stream",
      title: "Laporan Arus Kas",
      subtitle: "Pantau cash flow dari transaksi POS",
      description:
        "Semua transaksi POS otomatis masuk ke laporan arus kas. Tersedia tampilan harian, bulanan, dan tahunan.",
      color: "from-teal-500 to-teal-600",
      images: [
        "assets/img/POS_CashFlow.png",
        "assets/img/POS_CashFlow(2).png",
        "assets/img/POS_CashFlow(3).png",
        "assets/img/POS_CashFlow(4).png",
        "assets/img/POS_CashFlow(5).png",
        "assets/img/POS_CashFlow(6).png",
        "assets/img/POS_CashFlow(7).png",
      ],
    },
    {
      icon: "fa-truck",
      title: "Manajemen Supplier",
      subtitle: "Data supplier terintegrasi",
      description:
        "Kelola data supplier lengkap. Terintegrasi dengan Purchase Order.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Supplier.png"],
    },
    {
      icon: "fa-exchange-alt",
      title: "Transfer Antar Gudang",
      subtitle: "Pindah stok antar lokasi bisnis",
      description:
        "Pindahkan stok produk antar gudang dengan mudah. Stok otomatis diperbarui di kedua gudang setelah approval.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Transfer.png",
        "assets/img/POS_Transfer(2).png",
        "assets/img/POS_Transfer(3).png",
      ],
    },
  ],
  en: [
    {
      icon: "fa-shopping-cart",
      title: "Cashier Transaction",
      subtitle: "Fast & accurate sales processing",
      description:
        "Intuitive cashier interface for fast transactions. Supports manual input or barcode, discount, VAT, automatic change, and receipt printing.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Transaction.png",
        "assets/img/POS_Transaction(2).png",
        "assets/img/POS_Transaction(3).png",
        "assets/img/POS_Transaction(4).png",
        "assets/img/POS_Transaction(5).png",
        "assets/img/POS_Transaction(6).png",
        "assets/img/POS_Transaction(7).png",
      ],
      popular: true,
    },
    {
      icon: "fa-barcode",
      title: "Barcode Scanning",
      subtitle: "Instant product input via barcode",
      description:
        "Supports CODE128, EAN-13, EAN-8, QR Code. Auto-generate barcodes and bulk label printing.",
      color: "from-teal-500 to-teal-600",
      images: [
        "assets/img/POS_Barcode.png",
        "assets/img/POS_Barcode(2).png",
        "assets/img/POS_Barcode(3).png",
        "assets/img/POS_Barcode(4).png",
        "assets/img/POS_Barcode(5).png",
        "assets/img/POS_Barcode(6).png",
      ],
    },
    {
      icon: "fa-wallet",
      title: "Multi Payment Methods",
      subtitle: "Cash, QRIS, Transfer, Cards",
      description:
        "Accept Cash, QRIS, Bank Transfer, Debit Card, Credit Card, and E-Wallet.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Payment.png"],
      popular: true,
    },
    {
      icon: "fa-boxes",
      title: "Stock & Warehouse",
      subtitle: "Real-time multi-warehouse inventory",
      description:
        "Monitor product stock per warehouse in real-time. Auto-deducted on transaction.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Stock.png",
        "assets/img/POS_Stock(2).png",
        "assets/img/POS_Stock(3).png",
        "assets/img/POS_Stock(4).png",
        "assets/img/POS_Stock(5).png",
        "assets/img/POS_Stock(6).png",
        "assets/img/POS_Stock(7).png",
      ],
    },
    {
      icon: "fa-user-friends",
      title: "Customer Management",
      subtitle: "Customer data & history",
      description:
        "Store complete customer data. Track purchase history per customer.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_Customer.png"],
    },
    {
      icon: "fa-undo-alt",
      title: "Sales Returns",
      subtitle: "Returns from POS & Sales Orders",
      description:
        "Manage returns from POS or Sales Orders. Stock automatically restocked after approval.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Return.png"],
    },
    {
      icon: "fa-chart-bar",
      title: "Sales Reports",
      subtitle: "Daily to yearly analytics",
      description:
        "Comprehensive reports: top products, per-customer breakdown, payment method analysis, and trends.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Report.png",
        "assets/img/POS_Report(2).png",
        "assets/img/POS_Report(3).png",
      ],
      popular: true,
    },
    {
      icon: "fa-stream",
      title: "Cash Flow Report",
      subtitle: "Monitor cash flow from POS",
      description:
        "All POS transactions auto-appear in cash flow report. Daily, monthly, and yearly views.",
      color: "from-teal-500 to-teal-600",
      images: [
        "assets/img/POS_CashFlow.png",
        "assets/img/POS_CashFlow(2).png",
        "assets/img/POS_CashFlow(3).png",
        "assets/img/POS_CashFlow(4).png",
        "assets/img/POS_CashFlow(5).png",
        "assets/img/POS_CashFlow(6).png",
        "assets/img/POS_CashFlow(7).png",
      ],
    },
    {
      icon: "fa-truck",
      title: "Supplier Management",
      subtitle: "Integrated supplier data",
      description:
        "Manage complete supplier data. Integrated with Purchase Orders.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Supplier.png"],
    },
    {
      icon: "fa-exchange-alt",
      title: "Inter-Warehouse Transfer",
      subtitle: "Move stock between locations",
      description:
        "Easily transfer products between warehouses. Auto-updated at both locations after approval.",
      color: "from-green-500 to-green-600",
      images: [
        "assets/img/POS_Transfer.png",
        "assets/img/POS_Transfer(2).png",
        "assets/img/POS_Transfer(3).png",
      ],
    },
  ],
};

// ── FAQ data ──────────────────────────────────────────────
const faqData = {
  id: [
    {
      q: "Apakah inni Akun Digi bisa digunakan secara offline?",
      a: "Ya, 100% offline! inni Akun Digi adalah aplikasi desktop yang diinstall seperti software biasa di Windows. Tidak memerlukan koneksi internet untuk operasional sehari-hari. Semua data tersimpan lokal di komputer Anda.",
      tags: ["acct"],
      icon: "fa-laptop-code",
    },
    {
      q: "Bagaimana cara install aplikasinya?",
      a: "Sangat mudah! Anda menerima file installer (.exe) sekitar 150-300 MB. Double-click file tersebut, ikuti wizard instalasi (Next → Next → Finish), dan aplikasi siap digunakan. Tidak perlu setup server atau konfigurasi teknis apapun.",
      tags: ["acct", "pos"],
      icon: "fa-download",
    },
    {
      q: "Apakah data keuangan saya aman?",
      a: "Sangat aman! Semua data tersimpan 100% lokal di komputer Anda — tidak ada yang dikirim ke server kami atau internet. Anda memiliki kontrol penuh atas data. Tersedia fitur backup manual ke flash disk atau hard disk eksternal.",
      tags: ["both"],
      icon: "fa-shield-alt",
    },
    {
      q: "Apakah perlu maintenance atau perpanjangan?",
      a: "TIDAK! Ini investasi sekali bayar. Setelah install, aplikasi jalan selamanya tanpa biaya bulanan/tahunan. Update aplikasi gratis selamanya dan bersifat opsional.",
      tags: ["both"],
      icon: "fa-infinity",
    },
    {
      q: "Bisa diinstall di berapa komputer?",
      a: "Satu lisensi untuk 1 komputer sebagai server utama. Komputer lain di kantor yang sama dapat mengakses via jaringan LAN tanpa install atau lisensi tambahan. Jika butuh install di lokasi/cabang berbeda, diperlukan lisensi terpisah.",
      tags: ["both"],
      icon: "fa-network-wired",
    },
    {
      q: "Spesifikasi komputer minimal yang dibutuhkan?",
      a: "Sangat ringan! Minimal: Windows 7/8/10/11 (32-bit atau 64-bit), RAM 2GB, Processor Dual Core, HDD 500 MB free space. Dioptimasi untuk berjalan lancar bahkan di komputer tua.",
      tags: ["both"],
      icon: "fa-server",
    },
    {
      q: "Apa perbedaan model Basic, Lengkap, Retail, dan Manufaktur?",
      a: "Setiap model dirancang dengan installer dan struktur database berbeda. Basic: jurnal dan buku besar sederhana. Lengkap: laporan keuangan lengkap. Retail: manajemen stok barang dagangan. Manufaktur: produksi, BOM, dan manajemen bahan mentah hingga barang jadi.",
      tags: ["acct"],
      icon: "fa-layer-group",
    },
    {
      q: "Bagaimana proses implementasi setelah pembelian?",
      a: "Setelah pembayaran: (1) Terima link download installer + license key via email, (2) Install dalam 5-10 menit, (3) Tim kami remote/visit untuk setup awal dan training dalam 1-3 hari kerja.",
      tags: ["both"],
      icon: "fa-cogs",
    },
    {
      q: "Apakah inni POS bisa diintegrasikan dengan inni Akun Digi?",
      a: "Ya! Transaksi POS otomatis sync ke Akun Digi di komputer yang sama, atau bisa network sync jika di komputer berbeda dalam 1 jaringan LAN. Tidak perlu internet untuk sinkronisasi.",
      tags: ["acct", "pos"],
      icon: "fa-link",
    },
    {
      q: "Bagaimana cara backup data?",
      a: "Aplikasi memiliki tombol 'Backup Database' yang export semua data ke file .sql. Simpan ke flash disk, Google Drive, atau hard disk eksternal. Restore juga mudah dengan tombol 'Restore Database'.",
      tags: ["both"],
      icon: "fa-database",
    },
    {
      q: "Bagaimana jika komputer rusak atau ganti komputer?",
      a: "Tenang! Restore dari file backup Anda. Untuk pindah ke komputer baru: (1) Install aplikasi di komputer baru, (2) Hubungi admin kami untuk aktivasi license (approval 1-24 jam kerja), (3) Restore backup data Anda. License tetap valid selamanya.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
  ],
  en: [
    {
      q: "Can inni Akun Digi be used offline?",
      a: "Yes, 100% offline! inni Akun Digi is a desktop application installed like regular software on Windows. After installation, no internet required for daily operations. All data stored locally.",
      tags: ["acct"],
      icon: "fa-laptop-code",
    },
    {
      q: "How do I install the application?",
      a: "Very easy! You receive an installer (.exe) around 150-300 MB. Double-click, follow the wizard (Next → Next → Finish), done. No server setup or technical configuration needed.",
      tags: ["acct", "pos"],
      icon: "fa-download",
    },
    {
      q: "Is my financial data safe?",
      a: "Very safe! All data stored 100% locally on your computer — nothing sent to our servers or internet. You have full control. Manual backup feature available to save to flash drive or external hard drive.",
      tags: ["both"],
      icon: "fa-shield-alt",
    },
    {
      q: "Is maintenance or renewal required?",
      a: "NO! One-time payment. After installation, runs forever without monthly/annual fees. Updates are free forever and optional.",
      tags: ["both"],
      icon: "fa-infinity",
    },
    {
      q: "How many computers can I install it on?",
      a: "One license for 1 server computer. Other computers in the same office can access via LAN without separate installation or license. Different locations/branches require separate licenses.",
      tags: ["both"],
      icon: "fa-network-wired",
    },
    {
      q: "What are the minimum computer specifications?",
      a: "Very lightweight! Minimum: Windows 7/8/10/11 (32 or 64-bit), 2GB RAM, Dual Core processor, 500MB HDD. Optimized for smooth operation even on old computers.",
      tags: ["both"],
      icon: "fa-server",
    },
    {
      q: "What's the difference between Basic, Complete, Retail, and Manufacturing?",
      a: "Each model has different installers and database. Basic: simple journal and ledger. Complete: full financial reports. Retail: trading goods inventory. Manufacturing: production, BOM, raw to finished goods.",
      tags: ["acct"],
      icon: "fa-layer-group",
    },
    {
      q: "What is the implementation process?",
      a: "After payment: (1) Receive installer + license key via email, (2) Install in 5-10 minutes, (3) Our team provides setup and training within 1-3 business days.",
      tags: ["both"],
      icon: "fa-cogs",
    },
    {
      q: "Can inni POS integrate with inni Akun Digi?",
      a: "Yes! POS transactions auto-sync to Akun Digi on the same computer, or network sync if on different computers in 1 LAN. No internet needed for sync.",
      tags: ["acct", "pos"],
      icon: "fa-link",
    },
    {
      q: "How do I backup data?",
      a: "The 'Backup Database' button exports all data to a .sql file. Save to flash drive, Google Drive, or external hard drive. Restore with 'Restore Database' button.",
      tags: ["both"],
      icon: "fa-database",
    },
    {
      q: "What if my computer breaks or I change computers?",
      a: "Restore from your backup file. To move to a new computer: (1) Install on new computer, (2) Contact admin for license activation (1-24 business hours), (3) Restore your data. License valid forever.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
  ],
};

// ── Comparison data ───────────────────────────────────────
const comparisonData = {
  id: [
    {
      feature: "Kode Perkiraan (COA)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel COA",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Form Voucher",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Print Out Voucher",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Buku Besar (General Ledger)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export Excel Buku Besar",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Subsidiary (Utang/Piutang)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Subsidiary",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Neraca Saldo (Trial Balance)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Neraca Saldo",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Laba Rugi (Profit & Loss)",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Neraca Keuangan (Balance Sheet)",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Lap. Keuangan",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Stok Barang",
      basic: false,
      lengkap: false,
      retail: true,
      retailNote: "(Barang Dagangan)",
      manufaktur: true,
      manufakturNote: "(Bahan Mentah, Jadi)",
    },
    {
      feature: "Export PDF Stok Barang",
      basic: false,
      lengkap: false,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Produksi",
      basic: false,
      lengkap: false,
      retail: false,
      manufaktur: true,
    },
    {
      feature: "Informasi Perusahaan",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
  ],
  en: [
    {
      feature: "Chart of Accounts (COA)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel COA",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Voucher Form",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Print Voucher",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "General Ledger",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export Excel General Ledger",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Subsidiary (Payable/Receivable)",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Subsidiary",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Trial Balance",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Trial Balance",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Profit & Loss",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Balance Sheet",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Export PDF/Excel Financial Reports",
      basic: false,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Stock Management",
      basic: false,
      lengkap: false,
      retail: true,
      retailNote: "(Trading Goods)",
      manufaktur: true,
      manufakturNote: "(Raw, Finished)",
    },
    {
      feature: "Export PDF Stock",
      basic: false,
      lengkap: false,
      retail: true,
      manufaktur: true,
    },
    {
      feature: "Production",
      basic: false,
      lengkap: false,
      retail: false,
      manufaktur: true,
    },
    {
      feature: "Company Information",
      basic: true,
      lengkap: true,
      retail: true,
      manufaktur: true,
    },
  ],
};

const modelNotes = {
  id: [
    "Tipe <strong>Basic</strong> cocok untuk pencatatan sederhana dan pelaporan dasar.",
    "Tipe <strong>Lengkap</strong> ideal untuk perusahaan dengan kebutuhan akuntansi penuh.",
    "Tipe <strong>Retail</strong> dirancang untuk bisnis perdagangan barang.",
    "Tipe <strong>Manufaktur</strong> disesuaikan untuk perusahaan produksi.",
  ],
  en: [
    "<strong>Basic</strong> type is suitable for simple recording and basic reporting.",
    "<strong>Complete</strong> type is ideal for companies with full accounting needs.",
    "<strong>Retail</strong> type is designed for trading businesses.",
    "<strong>Manufacturing</strong> type is tailored for production companies.",
  ],
};

const modelSummaries = {
  id: [
    {
      key: "basic",
      title: "Basic",
      price: "Rp 2.500.000",
      tagline: "Pencatatan sederhana",
    },
    {
      key: "lengkap",
      title: "Lengkap",
      price: "Rp 3.500.000",
      tagline: "Laporan & analitik penuh",
      recommended: true,
    },
    {
      key: "retail",
      title: "Retail",
      price: "Rp 4.750.000",
      tagline: "Manajemen stok dagang",
    },
    {
      key: "manufaktur",
      title: "Manufaktur",
      price: "Rp 5.800.000",
      tagline: "Produksi & BOM",
    },
  ],
  en: [
    {
      key: "basic",
      title: "Basic",
      price: "IDR 2,500,000",
      tagline: "Simple recording",
    },
    {
      key: "lengkap",
      title: "Complete",
      price: "IDR 3,500,000",
      tagline: "Full reporting & analytics",
      recommended: true,
    },
    {
      key: "retail",
      title: "Retail",
      price: "IDR 4,750,000",
      tagline: "Inventory for trading",
    },
    {
      key: "manufaktur",
      title: "Manufacturing",
      price: "IDR 5,800,000",
      tagline: "Production & BOM",
    },
  ],
};
// ── State ─────────────────────────────────────────────────
let currentLang = "id";
let currentTabCtx = "acct";
let currentFeatIdx = 0;
let currentCarouselIdx = 0;
let exitShown = false;
let exitDismissed = false;
let timeOnPage = 0;
let posBadgeHidden = false;
let chosenModel = null;
let lastModelToastId = null;

// ── UTILITY ───────────────────────────────────────────────
function updateScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + "%" : "0%";
}

// Dynamic scroll padding based on actual header height
function updateScrollPadding() {
  const header = document.getElementById("header");
  if (!header) return;
  const h = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty(
    "--header-h",
    Math.ceil(h) + 8 + "px",
  );
}

function updateActiveNav() {
  const scrollPos = window.pageYOffset + 120;
  let current = "";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight)
      current = s.id;
  });
  document.querySelectorAll(".nav-item").forEach((n) => {
    const href = n.getAttribute("href");
    if (!href) return;
    const isProductSection = [
      "produk-tabs",
      "how-it-works",
      "garansi",
      "cara-beli",
    ].includes(current);
    const isBenefitsSection = ["benefits", "testimonial"].includes(current);
    if (href === "#" + current) n.classList.add("active");
    else if (href === "#produk-tabs" && isProductSection)
      n.classList.add("active");
    else if (href === "#benefits" && isBenefitsSection)
      n.classList.add("active");
    else n.classList.remove("active");
  });
}

// ── TAB SWITCHER ──────────────────────────────────────────
function switchTab(tab) {
  currentTabCtx = tab;
  const acctPanel = document.getElementById("tab-acct");
  const posPanel = document.getElementById("tab-pos");
  const acctBtn = document.getElementById("tab-acct-btn");
  const posBtn = document.getElementById("tab-pos-btn");
  if (!acctBtn) return;
  [acctPanel, posPanel].forEach((p) => p && p.classList.remove("active"));
  [acctBtn, posBtn].forEach(
    (b) => b && b.classList.remove("active-acct", "active-pos"),
  );
  if (tab === "acct") {
    acctPanel && acctPanel.classList.add("active");
    acctBtn.classList.add("active-acct");
  } else {
    posPanel && posPanel.classList.add("active");
    posBtn.classList.add("active-pos");
    if (!posBadgeHidden) {
      const badge = document.getElementById("pos-new-badge");
      if (badge) {
        badge.style.opacity = "0";
        badge.style.transform = "scale(0)";
        setTimeout(() => badge.remove(), 300);
      }
      posBadgeHidden = true;
    }
  }
}
window.switchTab = switchTab;

function applyDeepLink() {
  const hash = window.location.hash;
  if (hash === "#pos") {
    switchTab("pos");
    setTimeout(
      () =>
        document
          .getElementById("produk-tabs")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      150,
    );
  } else if (hash === "#akun") switchTab("acct");
}

// ── TOAST ─────────────────────────────────────────────────
function showToast({
  icon = "✅",
  title,
  msg,
  actionText,
  actionHref,
  duration = 6000,
}) {
  const id = "toast-" + Date.now();
  const el = document.createElement("div");
  el.className = "toast";
  el.id = id;
  el.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
      ${actionHref ? `<a href="${actionHref}" target="_blank" rel="noopener noreferrer" class="toast-action">${actionText} <i class="fas fa-arrow-right text-xs"></i></a>` : ""}
    </div>
    <button class="toast-close" onclick="dismissToast('${id}')" aria-label="Tutup"><i class="fas fa-times"></i></button>`;
  document.getElementById("toast-container").appendChild(el);
  if (duration > 0) setTimeout(() => dismissToast(id), duration);
  return id;
}
function dismissToast(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("toast-out");
  setTimeout(() => el.remove(), 330);
}
window.dismissToast = dismissToast;

// ── MODEL COMPARISON ──────────────────────────────────────
function getModelFeatures(modelKey, lang) {
  const features = {
    basic: {
      id: [
        { text: "Bagan Akun & Voucher", included: true },
        { text: "Buku Besar", included: true },
        { text: "Neraca Saldo", included: true },
        { text: "Laporan Keuangan", included: false },
        { text: "Manajemen Stok", included: false },
      ],
      en: [
        { text: "COA & Vouchers", included: true },
        { text: "General Ledger", included: true },
        { text: "Trial Balance", included: true },
        { text: "Financial Reports", included: false },
        { text: "Stock Management", included: false },
      ],
    },
    lengkap: {
      id: [
        { text: "Semua fitur Basic", included: true },
        { text: "✨ Laba Rugi", included: true },
        { text: "✨ Neraca Keuangan", included: true },
        { text: "✨ Export PDF/Excel", included: true },
        { text: "Manajemen Stok", included: false },
      ],
      en: [
        { text: "All Basic features", included: true },
        { text: "✨ Profit & Loss", included: true },
        { text: "✨ Balance Sheet", included: true },
        { text: "✨ Export PDF/Excel", included: true },
        { text: "Stock Management", included: false },
      ],
    },
    retail: {
      id: [
        { text: "Semua fitur Lengkap", included: true },
        { text: "✨ Stok Barang Dagangan", included: true },
        { text: "✨ Export PDF Stok", included: true },
        { text: "Produksi", included: false },
      ],
      en: [
        { text: "All Complete features", included: true },
        { text: "✨ Trading Goods Stock", included: true },
        { text: "✨ Export PDF Stock", included: true },
        { text: "Production", included: false },
      ],
    },
    manufaktur: {
      id: [
        { text: "Semua fitur Retail", included: true },
        { text: "✨ Produksi & BOM", included: true },
        { text: "✨ Bahan Mentah → Jadi", included: true },
      ],
      en: [
        { text: "All Retail features", included: true },
        { text: "✨ Production & BOM", included: true },
        { text: "✨ Raw → Finished Goods", included: true },
      ],
    },
  };
  return features[modelKey]?.[lang] || [];
}
function getModelIcon(key) {
  return (
    {
      basic: "fa-user-tie",
      lengkap: "fa-building",
      retail: "fa-store",
      manufaktur: "fa-industry",
    }[key] || "fa-star"
  );
}

function generateModelCards(lang) {
  const container = document.getElementById("model-cards-container");
  if (!container) return;
  container.innerHTML = Array(4)
    .fill(0)
    .map(
      () =>
        `<div class="skeleton-card"><div class="skeleton-icon"></div><div class="skeleton-text" style="width:70%"></div><div class="skeleton-text" style="width:100%"></div><div class="skeleton-text" style="width:60%"></div></div>`,
    )
    .join("");
  setTimeout(() => {
    container.innerHTML = "";
    modelSummaries[lang].forEach((m) => {
      const isChosen = chosenModel === m.key;
      const card = document.createElement("div");
      card.className = `model-comparison-card flex flex-col ${m.recommended ? "recommended" : ""}`;
      card.innerHTML = `
        <div class="text-center mb-4">
          <i class="fas ${getModelIcon(m.key)} model-icon"></i>
          <h3 class="text-lg font-bold text-gray-800 mb-1">${m.title}</h3>
          <div class="model-price">${m.price}</div>
          <p class="text-xs text-gray-500 font-medium">${lang === "id" ? "Investasi Sekali" : "One-time Investment"}</p>
        </div>
        <div class="model-features flex-1 mb-4">
          ${getModelFeatures(m.key, lang)
            .map(
              (f) =>
                `<div class="model-feature-item ${!f.included ? "excluded" : ""}"><i class="fas ${f.included ? "fa-check-circle" : "fa-circle-xmark"}"></i><span>${f.text}</span></div>`,
            )
            .join("")}
        </div>
        <button class="compare-cta ${isChosen ? "chosen" : ""}" data-model="${m.key}">
          <i class="fas ${isChosen ? "fa-check" : "fa-arrow-right"}"></i>
          <span>${isChosen ? (lang === "id" ? "Dipilih" : "Chosen") : lang === "id" ? "Pilih Model Ini" : "Choose This Model"}</span>
        </button>
        <div class="model-best-for ${m.recommended ? "recommended" : "normal"}">
          <i class="fas ${getModelIcon(m.key)}" style="font-size:0.65rem;margin-right:0.3rem"></i>
          <strong>${lang === "id" ? "Untuk:" : "For:"}</strong> ${m.tagline}
        </div>`;
      container.appendChild(card);
    });
    container
      .querySelectorAll(".compare-cta")
      .forEach((btn) =>
        btn.addEventListener("click", () =>
          highlightModelColumn(btn.dataset.model),
        ),
      );
  }, 250);
}
function roiSelectModel(modelKey) {
  const modelPriceMap = {
    basic: 2500000,
    lengkap: 3500000,
    retail: 4750000,
    manufaktur: 5800000,
  };

  // Update roiConfig
  roiConfig.acct.price = modelPriceMap[modelKey];
  roiConfig.both.price = modelPriceMap[modelKey] + 4500000;

  // Update pill UI — highlight yang dipilih
  document.querySelectorAll(".roi-model-pill").forEach((btn) => {
    const isSelected = btn.dataset.roiModel === modelKey;
    btn.classList.toggle("border-blue-500", isSelected);
    btn.classList.toggle("bg-blue-50", isSelected);
    btn.classList.toggle("border-gray-200", !isSelected);
    btn.classList.toggle("bg-white", !isSelected);
  });

  // Sync ke model card di atas juga (opsional tapi bagus)
  chosenModel = modelKey;
  document.querySelectorAll(".compare-cta").forEach((btn) => {
    const isChosen = btn.dataset.model === modelKey;
    btn.classList.toggle("chosen", isChosen);
    const icon = btn.querySelector("i");
    const span = btn.querySelector("span");
    if (icon)
      icon.className = `fas ${isChosen ? "fa-check" : "fa-arrow-right"}`;
    if (span)
      span.textContent = isChosen
        ? currentLang === "id"
          ? "Dipilih"
          : "Chosen"
        : currentLang === "id"
          ? "Pilih Model Ini"
          : "Choose This Model";
  });

  // Update label di kartu hasil ROI
  const modelNameMap = {
    id: {
      basic: "Basic",
      lengkap: "Lengkap",
      retail: "Retail",
      manufaktur: "Manufaktur",
    },
    en: {
      basic: "Basic",
      lengkap: "Complete",
      retail: "Retail",
      manufaktur: "Manufacturing",
    },
  };
  const modelPriceLabelMap = {
    id: {
      basic: "Rp 2.500.000",
      lengkap: "Rp 3.500.000",
      retail: "Rp 4.750.000",
      manufaktur: "Rp 5.800.000",
    },
    en: {
      basic: "IDR 2,500,000",
      lengkap: "IDR 3,500,000",
      retail: "IDR 4,750,000",
      manufaktur: "IDR 5,800,000",
    },
  };
  const r2Label = document.getElementById("roi-r2-label");
  const inniPriceEl = document.getElementById("roi-inni-price");
  if (r2Label)
    r2Label.textContent =
      "inni " + (modelNameMap[currentLang] || modelNameMap.id)[modelKey];
  if (inniPriceEl)
    inniPriceEl.textContent = (modelPriceLabelMap[currentLang] ||
      modelPriceLabelMap.id)[modelKey];

  roiCalc();
}
window.roiSelectModel = roiSelectModel;
function highlightModelColumn(modelKey) {
  chosenModel = modelKey;
  // Update harga inni di kalkulator sesuai model yang dipilih
  const modelPriceMap = {
    basic: 2500000,
    lengkap: 3500000,
    retail: 4750000,
    manufaktur: 5800000,
  };
  roiConfig.acct.price = modelPriceMap[modelKey] || 2500000;
  roiConfig.both.price = modelPriceMap[modelKey] + 4500000;

  // Juga update label harga di kartu ROI
  const modelPriceLabelMap = {
    id: {
      basic: "Rp 2.500.000",
      lengkap: "Rp 3.500.000",
      retail: "Rp 4.750.000",
      manufaktur: "Rp 5.800.000",
    },
    en: {
      basic: "IDR 2,500,000",
      lengkap: "IDR 3,500,000",
      retail: "IDR 4,750,000",
      manufaktur: "IDR 5,800,000",
    },
  };
  const priceLabel = (modelPriceLabelMap[currentLang] || modelPriceLabelMap.id)[
    modelKey
  ];
  const inniPriceEl = document.getElementById("roi-inni-price");
  if (inniPriceEl) inniPriceEl.textContent = priceLabel;

  // Update label nama model di kartu ROI
  const modelNameMap = {
    id: {
      basic: "Basic",
      lengkap: "Lengkap",
      retail: "Retail",
      manufaktur: "Manufaktur",
    },
    en: {
      basic: "Basic",
      lengkap: "Complete",
      retail: "Retail",
      manufaktur: "Manufacturing",
    },
  };
  const r2Label = document.getElementById("roi-r2-label");
  if (r2Label)
    r2Label.textContent =
      "inni " + (modelNameMap[currentLang] || modelNameMap.id)[modelKey];

  // Switch kalkulator ke tab Akun Digi dan recalculate
  if (currentRoiTab !== "acct") roiSwitchTab("acct");
  else roiCalc();
  const colMap = { basic: 1, lengkap: 2, retail: 3, manufaktur: 4 };
  const colIdx = colMap[modelKey];
  const breakdownEl = document.getElementById("roi-bundle-breakdown");
  if (breakdownEl) {
    if (currentRoiTab !== "both") breakdownEl.classList.add("hidden");
    else if (chosenModel) breakdownEl.classList.remove("hidden");
  }
  // Update card buttons
  document.querySelectorAll(".compare-cta").forEach((btn) => {
    const isChosen = btn.dataset.model === modelKey;
    btn.classList.toggle("chosen", isChosen);
    const icon = btn.querySelector("i");
    const span = btn.querySelector("span");
    if (icon)
      icon.className = `fas ${isChosen ? "fa-check" : "fa-arrow-right"}`;
    if (span)
      span.textContent = isChosen
        ? currentLang === "id"
          ? "Dipilih"
          : "Chosen"
        : currentLang === "id"
          ? "Pilih Model Ini"
          : "Choose This Model";
  });

  // Highlight table column
  const table = document.querySelector("#model-comparison table");
  if (table) {
    table
      .querySelectorAll(".highlighted-col")
      .forEach((el) => el.classList.remove("highlighted-col"));
    if (colIdx) {
      table
        .querySelectorAll("thead th")
        [colIdx]?.classList.add("highlighted-col");
      table
        .querySelectorAll("tbody tr")
        .forEach((row) =>
          row.querySelectorAll("td")[colIdx]?.classList.add("highlighted-col"),
        );
    }
  }

  // Show table if hidden
  const dt = document.getElementById("detailed-comparison-table");
  if (dt && dt.classList.contains("hidden")) toggleDetailedComparison();

  // Scroll to comparison section
  setTimeout(() => {
    document
      .getElementById("detailed-comparison-table")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
  // Toast
  const names = {
    id: {
      basic: "Basic",
      lengkap: "Lengkap",
      retail: "Retail",
      manufaktur: "Manufaktur",
    },
    en: {
      basic: "Basic",
      lengkap: "Complete",
      retail: "Retail",
      manufaktur: "Manufacturing",
    },
  };
  const name = (names[currentLang] || names.id)[modelKey] || modelKey;
  const waMsg = encodeURIComponent(
    currentLang === "id"
      ? `Halo, saya tertarik dengan model ${name} di inni Akun Digi. Bisa minta info harga dan konsultasi?`
      : `Hello, I'm interested in the ${name} model of inni Akun Digi. Can I get pricing info and a consultation?`,
  );
  if (lastModelToastId) dismissToast(lastModelToastId);
  lastModelToastId = showToast({
    icon: "✅",
    title:
      currentLang === "id"
        ? `Model ${name} dipilih!`
        : `${name} model selected!`,
    msg:
      currentLang === "id"
        ? "Kolom tabel sudah di-highlight. Lihat detail di bawah!"
        : "Table column highlighted. Check details below!",
    actionText:
      currentLang === "id" ? "Chat WhatsApp sekarang" : "Chat on WhatsApp now",
    actionHref: `https://wa.me/6287725113689?text=${waMsg}`,
    duration: 10000,
  });
}
window.highlightModelColumn = highlightModelColumn;

// Comparison table toggle — OPEN by default
function toggleDetailedComparison() {
  const table = document.getElementById("detailed-comparison-table");
  const chevron = document.getElementById("comparison-chevron");
  const btn = document.getElementById("comparison-toggle");
  if (!table || !chevron) return;
  const isHidden = table.classList.contains("hidden");
  table.classList.toggle("hidden");
  chevron.classList.toggle("rotate");
  if (btn) btn.setAttribute("aria-expanded", String(isHidden));
  // Update button text
  const textEl = btn?.querySelector(
    "[data-translate='detailedComparisonToggle']",
  );
  if (textEl)
    textEl.textContent = isHidden
      ? currentLang === "id"
        ? "Sembunyikan Perbandingan Detail"
        : "Hide Detailed Comparison"
      : currentLang === "id"
        ? "Lihat Perbandingan Detail"
        : "View Detailed Comparison";
}
window.toggleDetailedComparison = toggleDetailedComparison;

function generateComparisonTable(lang) {
  const tbody = document.getElementById("comparison-table-body");
  if (!tbody) return;
  const check = `<span class="feature-badge included"><i class="fas fa-check"></i></span>`;
  const cross = `<span class="feature-badge excluded"><i class="fas fa-times"></i></span>`;
  const names =
    {
      id: {
        basic: "Basic",
        lengkap: "Lengkap",
        retail: "Retail",
        manufaktur: "Manufaktur",
      },
      en: {
        basic: "Basic",
        lengkap: "Complete",
        retail: "Retail",
        manufaktur: "Manufacturing",
      },
    }[lang] || {};
  tbody.innerHTML = "";
  comparisonData[lang].forEach((r, i) => {
    const bg = i % 2 === 0 ? "bg-gray-50" : "bg-white";
    tbody.innerHTML += `<tr class="${bg} hover:bg-blue-50 transition-colors">
      <td class="py-3 px-4 text-gray-700 font-medium sticky-col text-sm" data-label="Fitur">${r.feature}</td>
      <td class="py-3 px-4 text-center" data-label="${names.basic}">${r.basic ? check : cross}</td>
      <td class="py-3 px-4 text-center" data-label="${names.lengkap}">${r.lengkap ? check : cross}</td>
      <td class="py-3 px-4 text-center" data-label="${names.retail}">${r.retail ? check : cross}${r.retailNote ? `<div class="text-xs text-gray-500 mt-0.5">${r.retailNote}</div>` : ""}</td>
      <td class="py-3 px-4 text-center" data-label="${names.manufaktur}">${r.manufaktur ? check : cross}${r.manufakturNote ? `<div class="text-xs text-gray-500 mt-0.5">${r.manufakturNote}</div>` : ""}</td>
    </tr>`;
  });
}

function generateModelNotes(lang) {
  const ul = document.getElementById("model-notes");
  if (!ul) return;
  ul.innerHTML = "";
  modelNotes[lang].forEach((n) => {
    ul.innerHTML += `<li class="flex items-start gap-2"><i class="fas fa-check text-blue-500 mt-0.5 flex-shrink-0 text-sm"></i><span>${n}</span></li>`;
  });
}

// ── REQUIREMENTS TOGGLE ───────────────────────────────────
function toggleRequirements() {
  const content = document.getElementById("requirements-content");
  const chevron = document.getElementById("req-chevron");
  if (!content || !chevron) return;
  content.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");
}
window.toggleRequirements = toggleRequirements;

// ── FEATURES ──────────────────────────────────────────────
function generateFeatures(lang) {
  const gridPopular = document.getElementById("features-grid-popular");
  const gridRest = document.getElementById("features-grid-rest");
  if (!gridPopular || !gridRest) return;
  const viewTxt = lang === "id" ? "Lihat Visual" : "View Interface";
  gridPopular.innerHTML = "";
  gridRest.innerHTML = "";
  featuresData[lang].forEach((f, i) => {
    const isPopular = POPULAR_ACCT_IDX.includes(i);
    const target = isPopular ? gridPopular : gridRest;
    target.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${(i % 3) + 1}">
        ${f.popular ? '<span class="badge-popular">🔥 Populer</span>' : ""}
        <div class="w-11 h-11 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center mb-3 shadow-md">
          <i class="fas ${f.icon} text-xl text-white"></i>
        </div>
        <h3 class="text-sm font-bold text-gray-800 mb-1.5">${f.title}</h3>
        <p class="text-gray-600 text-sm mb-3 leading-relaxed">${f.desc}</p>
        <button class="view-feature-btn text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1.5 transition-colors text-sm" data-index="${i}">
          <span>${viewTxt}</span><i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  document
    .querySelectorAll(".view-feature-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        openFeatureModal(+btn.dataset.index, "acct"),
      ),
    );
}

function generatePosFeatures(lang) {
  const gridPopular = document.getElementById("pos-features-grid-popular");
  const gridRest = document.getElementById("pos-features-grid-rest");
  if (!gridPopular || !gridRest) return;
  const viewTxt = lang === "id" ? "Lihat Visual" : "View Interface";
  gridPopular.innerHTML = "";
  gridRest.innerHTML = "";
  posFeatures[lang].forEach((f, i) => {
    const isPopular = POPULAR_POS_IDX.includes(i);
    const target = isPopular ? gridPopular : gridRest;
    target.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${(i % 3) + 1}">
        ${f.popular ? '<span class="badge-popular pos-badge">🔥 Populer</span>' : ""}
        <div class="w-11 h-11 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center mb-3 shadow-md">
          <i class="fas ${f.icon} text-xl text-white"></i>
        </div>
        <h3 class="text-sm font-bold text-gray-800 mb-0.5">${f.title}</h3>
        <p class="text-xs text-gray-400 font-medium mb-1.5">${f.subtitle}</p>
        <p class="text-gray-600 text-sm mb-3 leading-relaxed">${f.description}</p>
        <button class="view-pos-feature-btn text-green-600 hover:text-green-800 font-semibold flex items-center gap-1.5 transition-colors text-sm" data-pos-index="${i}">
          <span>${viewTxt}</span><i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  document
    .querySelectorAll(".view-pos-feature-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        openFeatureModal(+btn.dataset.posIndex, "pos"),
      ),
    );
}

function toggleFeatures() {
  const div = document.getElementById("features-grid-all");
  const text = document.getElementById("toggle-features-text");
  const icon = document.getElementById("toggle-features-icon");
  if (!div) return;
  const isHidden = div.classList.toggle("hidden");
  if (text)
    text.textContent = isHidden
      ? currentLang === "id"
        ? "Lihat Semua Fitur"
        : "View All Features"
      : currentLang === "id"
        ? "Sembunyikan Fitur"
        : "Hide Features";
  if (icon) icon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
}
function togglePosFeatures() {
  const div = document.getElementById("pos-features-grid-all");
  const text = document.getElementById("toggle-pos-features-text");
  const icon = document.getElementById("toggle-pos-features-icon");
  if (!div) return;
  const isHidden = div.classList.toggle("hidden");
  if (text)
    text.textContent = isHidden
      ? currentLang === "id"
        ? "Lihat Semua Fitur"
        : "View All Features"
      : currentLang === "id"
        ? "Sembunyikan Fitur"
        : "Hide Features";
  if (icon) icon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
}
window.toggleFeatures = toggleFeatures;
window.togglePosFeatures = togglePosFeatures;

function toggleMobileSubmenu(menu) {
  const submenu = document.getElementById(`${menu}-submenu`);
  const chevron = document.getElementById(`${menu}-chevron`);
  if (!submenu || !chevron) return;
  const isHidden = submenu.classList.toggle("hidden");
  chevron.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
}
window.toggleMobileSubmenu = toggleMobileSubmenu;

// ── FAQ ───────────────────────────────────────────────────
function generateFaq(lang) {
  const list = document.getElementById("faq-list");
  if (!list) return;
  const tagLabel = {
    acct: { id: "Akun Digi", en: "Akun Digi" },
    pos: { id: "POS", en: "POS" },
    both: { id: "Keduanya", en: "Both" },
  };
  list.innerHTML = "";
  faqData[lang].forEach((item, i) => {
    const tags = item.tags
      .map(
        (t) =>
          `<span class="faq-tag ${t}"><i class="fas fa-tag"></i>${tagLabel[t][lang]}</span>`,
      )
      .join("");
    list.innerHTML += `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
          <span class="faq-question-text"><i class="fas ${item.icon} text-blue-400 mr-2 text-sm"></i>${item.q}</span>
          <span class="faq-icon"><i class="fas fa-plus text-xs"></i></span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}">
          <div class="faq-answer-inner"><div class="mb-2">${tags}</div>${item.a}</div>
        </div>
      </div>`;
  });
}
function toggleFaq(idx) {
  document.querySelectorAll(".faq-item").forEach((item, i) => {
    const isTarget = i === idx;
    const willOpen = isTarget && !item.classList.contains("open");
    item.classList.toggle("open", isTarget && willOpen);
    item
      .querySelector(".faq-question")
      ?.setAttribute("aria-expanded", String(isTarget && willOpen));
  });
}
window.toggleFaq = toggleFaq;

// ── MODAL ─────────────────────────────────────────────────
function openFeatureModal(idx, context) {
  currentFeatIdx = idx;
  currentCarouselIdx = 0;
  currentTabCtx = context;
  const f =
    context === "pos"
      ? posFeatures[currentLang][idx]
      : featuresData[currentLang][idx];
  if (!f) return;
  document.getElementById("modal-feature-title").textContent = f.title;
  document.getElementById("modal-feature-desc").textContent =
    context === "pos" ? f.description : f.desc;
  const carousel = document.getElementById("modal-carousel");
  const dots = document.getElementById("modal-carousel-dots");
  carousel.innerHTML = dots.innerHTML = "";
  const imgs = f.images || [];
  if (imgs.length) {
    imgs.forEach((src, i) => {
      carousel.innerHTML += `<div class="min-w-full flex items-center justify-center modal-image-container"><img src="${src}" alt="${f.title} screenshot ${i + 1}" class="modal-image" loading="lazy" onerror="this.src='https://via.placeholder.com/800x500/3b82f6/ffffff?text=${encodeURIComponent(f.title)}'"></div>`;
      dots.innerHTML += `<button class="modal-carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === 0 ? "bg-blue-600 w-7" : "bg-gray-300"}" data-index="${i}"></button>`;
    });
    dots.querySelectorAll(".modal-carousel-dot").forEach((d) =>
      d.addEventListener("click", () => {
        currentCarouselIdx = +d.dataset.index;
        updateCarousel();
      }),
    );
  } else {
    carousel.innerHTML = `<div class="min-w-full flex items-center justify-center bg-gray-100 rounded-lg" style="min-height:320px;"><div class="text-center text-gray-500"><i class="fas fa-image text-5xl mb-3"></i><p>${currentLang === "id" ? "Visual akan segera tersedia" : "Screenshots coming soon"}</p></div></div>`;
  }
  document.getElementById("feature-modal").classList.remove("hidden");
  document.getElementById("feature-modal").classList.add("flex");
  document.body.style.overflow = "hidden";
  updateCarousel();
}
function updateCarousel() {
  document.getElementById("modal-carousel").style.transform =
    `translateX(-${currentCarouselIdx * 100}%)`;
  document.querySelectorAll(".modal-carousel-dot").forEach((d, i) => {
    d.className = `modal-carousel-dot rounded-full transition-all duration-200 ${i === currentCarouselIdx ? "bg-blue-600 w-7 h-2.5" : "bg-gray-300 w-2.5 h-2.5"}`;
  });
}
function closeFeatureModal() {
  document.getElementById("feature-modal").classList.add("hidden");
  document.getElementById("feature-modal").classList.remove("flex");
  document.body.style.overflow = "auto";
}
function getImagesLen() {
  const f =
    currentTabCtx === "pos"
      ? posFeatures[currentLang][currentFeatIdx]
      : featuresData[currentLang][currentFeatIdx];
  return f?.images?.length || 0;
}

// ── EXIT INTENT — FIXED: single trigger, localStorage guard ──
function showExitIntent() {
  if (exitShown || exitDismissed) return;
  // Guard: don't show more than once per 24h
  const lastShown = localStorage.getItem("inni_exit_shown");
  if (lastShown && Date.now() - +lastShown < 86400000) return;
  exitShown = true;
  localStorage.setItem("inni_exit_shown", Date.now().toString());
  document.getElementById("exit-intent")?.classList.add("show");
  setTimeout(hideExitIntent, 18000);
}
function hideExitIntent() {
  document.getElementById("exit-intent")?.classList.remove("show");
}
// Only one trigger: mouse leave (after 45s on page)
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 5 && !exitDismissed && timeOnPage > 45) showExitIntent();
});
setInterval(() => timeOnPage++, 1000);
document.getElementById("exit-close-btn")?.addEventListener("click", () => {
  exitDismissed = true;
  hideExitIntent();
});

// ── ROI CALCULATOR v2 — 3 tabs: Akun Digi / POS / Keduanya ──
let currentRoiTab = "acct";

// Per-tab config: inni price, cloud reference, WA message
const roiConfig = {
  acct: { price: 2500000, cloudDefault: 400000, waMsg: "inni%20Akun%20Digi" },
  pos: { price: 4500000, cloudDefault: 300000, waMsg: "inni%20POS" },
  both: {
    price: 2500000 + 4500000,
    cloudDefault: 700000,
    waMsg: "inni%20Akun%20Digi%20%26%20POS%20(bundel)",
  },
};

const roiStrings = {
  id: {
    acct: {
      title: "Kalkulator Biaya — inni Akun Digi",
      subtitle: "Sekali bayar vs langganan software akuntansi cloud",
      prodLabel: "inni Akun Digi",
      prodSub: "investasi sekali",
      cloudRef: "Accurate Online, Jurnal, Kledo",
      waText: "Halo%2C%20saya%20tertarik%20dengan%20inni%20Akun%20Digi",
    },
    pos: {
      title: "Kalkulator Biaya — inni POS",
      subtitle: "Sekali bayar vs langganan sistem kasir cloud",
      prodLabel: "inni POS",
      prodSub: "investasi sekali",
      cloudRef: "Moka POS, Pawoon, iSeller",
      waText: "Halo%2C%20saya%20tertarik%20dengan%20inni%20POS",
    },
    both: {
      title: "Kalkulator Biaya — Bundel Akun Digi + POS",
      subtitle: "Dua aplikasi terintegrasi, satu kali investasi",
      prodLabel: "Akun Digi + POS",
      prodSub: "bundel 2 aplikasi",
      cloudRef: "paket akuntansi + kasir cloud",
      waText:
        "Halo%2C%20saya%20tertarik%20dengan%20bundel%20inni%20Akun%20Digi%20%26%20POS",
    },
    shared: {
      tabBoth: "Keduanya",
      labelYears: "Lama rencana pemakaian",
      labelCloud: "Biaya langganan cloud/bulan",
      labelHours: "Jam/bulan untuk proses manual",
      r1: "Biaya cloud",
      r3: "Hemat vs cloud",
      r4: "Waktu dihemat",
      r4sub: "est. 65% lebih efisien",
      ctaBtn: "Konsultasi Sekarang",
      note: "* Estimasi ilustratif. Bandingkan sesuai kebutuhan bisnis Anda.",
      yearUnit: "tahun",
      hourUnit: "jam",
      integTitle: "Terintegrasi dalam Satu PC yang Sama",
      integDesc:
        "Saat diinstall di komputer yang sama, inni Akun Digi & inni POS bisa dihubungkan dengan konfigurasi awal yang mudah. Setiap transaksi kasir di POS otomatis tercatat sebagai jurnal di Akun Digi — cukup dalam satu PC, tidak perlu input ganda, tidak perlu internet. Ke depannya, dengan menjalankan file server yang tersedia, aplikasi juga dapat diakses oleh perangkat lain dalam jaringan yang sama.",
      integF1: "Berjalan dalam satu PC",
      integF2: "Tidak perlu input ganda",
      integF3: "Laporan keuangan lengkap dari POS",
      integF4: "Bisa diakses device lain via jaringan yang sama (file server)",
      over: "selama",
    },
  },
  en: {
    acct: {
      title: "Cost Calculator — inni Akun Digi",
      subtitle: "One-time purchase vs cloud accounting subscription",
      prodLabel: "inni Akun Digi",
      prodSub: "one-time investment",
      cloudRef: "Accurate Online, Jurnal, Kledo",
      waText: "Hello%2C%20I%27m%20interested%20in%20inni%20Akun%20Digi",
    },
    pos: {
      title: "Cost Calculator — inni POS",
      subtitle: "One-time purchase vs cloud POS subscription",
      prodLabel: "inni POS",
      prodSub: "one-time investment",
      cloudRef: "Moka POS, Pawoon, iSeller",
      waText: "Hello%2C%20I%27m%20interested%20in%20inni%20POS",
    },
    both: {
      title: "Cost Calculator — Akun Digi + POS Bundle",
      subtitle: "Two integrated apps, one-time investment",
      prodLabel: "Akun Digi + POS",
      prodSub: "bundle 2 apps",
      cloudRef: "accounting + POS cloud bundle",
      waText:
        "Hello%2C%20I%27m%20interested%20in%20inni%20Akun%20Digi%20%26%20POS%20bundle",
    },
    shared: {
      tabBoth: "Both",
      labelYears: "Planned usage duration",
      labelCloud: "Cloud subscription/month",
      labelHours: "Hours/month on manual processes",
      r1: "Cloud total",
      r3: "Savings vs cloud",
      r4: "Time saved",
      r4sub: "est. 65% more efficient",
      ctaBtn: "Consult Now",
      note: "* Illustrative estimate. Adjust based on your business needs.",
      yearUnit: "yr",
      hourUnit: "hrs",
      integTitle: "Integrated on the Same PC",
      integDesc:
        "When installed on the same computer, inni Akun Digi & inni POS can be connected with a straightforward initial setup. Every POS transaction is automatically recorded as a journal entry in Akun Digi — all within one PC, no double entry, no internet required. In the future, by running the included file server, the application can also be accessed by other devices on the same network.",
      integF1: "Runs on a single PC",
      integF2: "No double entry",
      integF3: "Full financial reports from POS",
      integF4:
        "Accessible from other devices on the same network (file server)",
      over: "over",
    },
  },
};

function fmtRp(n) {
  if (n >= 1000000) {
    const jt = n / 1000000;
    return "Rp " + (Number.isInteger(jt) ? jt : jt.toFixed(1)) + " jt";
  }
  if (n >= 1000) return "Rp " + Math.round(n / 1000) + "rb";
  return "Rp " + n;
}

function roiSwitchTab(tab) {
  currentRoiTab = tab;
  const lang = currentLang || "id";
  const cfg = roiConfig[tab];

  // Tab button states
  ["acct", "pos", "both"].forEach((t) => {
    const btn = document.getElementById("roi-tab-" + t);
    if (!btn) return;
    btn.classList.remove("active-acct", "active-pos", "active-both");
    btn.style.borderBottomWidth = "";
  });
  const activeBtn = document.getElementById("roi-tab-" + tab);
  if (activeBtn) activeBtn.classList.add("active-" + tab);

  // Header color
  const header = document.getElementById("roi-header");
  if (header) {
    header.classList.remove("pos-mode", "both-mode");
    if (tab === "pos") header.classList.add("pos-mode");
    if (tab === "both") header.classList.add("both-mode");
  }

  // Inni card color
  const inniCard = document.getElementById("roi-inni-card");
  if (inniCard) {
    inniCard.classList.remove("acct-mode", "pos-mode", "both-mode");
    inniCard.classList.add(tab + "-mode");
  }

  // Conclusion bar color
  const bar = document.getElementById("roi-conclusion-bar");
  if (bar) {
    bar.classList.remove("acct-mode", "pos-mode", "both-mode");
    bar.classList.add(tab + "-mode");
  }

  // Integration banner
  const banner = document.getElementById("roi-integration-banner");
  if (banner) banner.classList.toggle("hidden", tab !== "both");

  // ── TAMBAHKAN DI SINI ──
  // Tampilkan/sembunyikan model selector sesuai tab
  const selector = document.getElementById("roi-model-selector");
  if (selector) selector.classList.toggle("hidden", tab === "pos");
  // ── SAMPAI SINI ──

  // Set default cloud value for this tab
  const cloudSlider = document.getElementById("roi-cloud");
  if (cloudSlider) cloudSlider.value = cfg.cloudDefault;

  updateRoiTexts(lang);
}
window.roiSwitchTab = roiSwitchTab;

function roiCalc() {
  const lang = currentLang || "id";
  const tab = currentRoiTab || "acct";
  const s = roiStrings[lang] || roiStrings.id;
  const ts = s.shared;
  const cfg = roiConfig[tab];
  // Bundle breakdown label
  const breakdownEl = document.getElementById("roi-bundle-breakdown");
  if (breakdownEl) {
    if (currentRoiTab === "both" && chosenModel) {
      const modelPriceLabelMap = {
        id: {
          basic: "Rp 2.500.000",
          lengkap: "Rp 3.500.000",
          retail: "Rp 4.750.000",
          manufaktur: "Rp 5.800.000",
        },
        en: {
          basic: "IDR 2,500,000",
          lengkap: "IDR 3,500,000",
          retail: "IDR 4,750,000",
          manufaktur: "IDR 5,800,000",
        },
      };
      const modelNameMap = {
        id: {
          basic: "Basic",
          lengkap: "Lengkap",
          retail: "Retail",
          manufaktur: "Manufaktur",
        },
        en: {
          basic: "Basic",
          lengkap: "Complete",
          retail: "Retail",
          manufaktur: "Manufacturing",
        },
      };
      const acctLabel = (modelPriceLabelMap[lang] || modelPriceLabelMap.id)[
        chosenModel
      ];
      const posLabel = lang === "id" ? "Rp 4.500.000" : "IDR 4,500,000";
      const modelName = (modelNameMap[lang] || modelNameMap.id)[chosenModel];
      breakdownEl.textContent = acctLabel + " + " + posLabel;
      breakdownEl.classList.remove("hidden");

      // Update label judul kartu
      const r2Label = document.getElementById("roi-r2-label");
      if (r2Label) r2Label.textContent = "inni " + modelName + " + inni POS";
    } else if (currentRoiTab === "both" && !chosenModel) {
      breakdownEl.textContent =
        lang === "id"
          ? "Pilih model Akun Digi di atas"
          : "Select Akun Digi model above";
      breakdownEl.classList.remove("hidden");
    } else {
      breakdownEl.classList.add("hidden");
    }
  }
  const years = parseInt(document.getElementById("roi-years")?.value || 3);
  const cloudPerMonth = parseInt(
    document.getElementById("roi-cloud")?.value || cfg.cloudDefault,
  );
  const hours = parseInt(document.getElementById("roi-hours")?.value || 20);
  const months = years * 12;
  const cloudTotal = cloudPerMonth * months;
  const inniPrice = cfg.price;
  const saving = cloudTotal - inniPrice;
  const timeSaved = Math.round(hours * 0.65 * months);
  const overLabel = ts.over + " " + years + " " + ts.yearUnit;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set("roi-years-out", years + " " + ts.yearUnit);
  set("roi-cloud-out", fmtRp(cloudPerMonth));
  set("roi-hours-out", hours + " " + ts.hourUnit);
  set("roi-cloud-total", fmtRp(cloudTotal));
  set("roi-inni-price", fmtRp(inniPrice));
  set("roi-saving", saving > 0 ? fmtRp(saving) : "—");
  set("roi-time-saved", timeSaved + " " + ts.hourUnit);
  set("roi-r1-sub", overLabel);
  set("roi-r3-sub", overLabel);

  // Conclusion
  const conclusionEl = document.getElementById("roi-conclusion");
  if (conclusionEl) {
    if (saving > 0) {
      conclusionEl.textContent =
        lang === "id"
          ? "Dalam " +
            years +
            " tahun, Anda hemat " +
            fmtRp(saving) +
            " dibanding berlangganan cloud!"
          : "Over " +
            years +
            " years, you save " +
            fmtRp(saving) +
            " vs cloud subscription!";
    } else {
      conclusionEl.textContent =
        lang === "id"
          ? "Dengan pemakaian jangka panjang, inni jauh lebih hemat dari cloud!"
          : "For long-term use, inni is far more cost-effective than cloud!";
    }
  }

  // WA link
  const waBtn = document.getElementById("roi-wa-btn");
  if (waBtn) {
    const ts2 = s[tab];
    waBtn.href =
      "https://wa.me/6287725113689?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20" +
      ts2.waText;
  }
}
window.roiCalc = roiCalc;

function updateRoiTexts(lang) {
  const s = roiStrings[lang] || roiStrings.id;
  const tab = currentRoiTab || "acct";
  const ts = s.shared;
  const tp = s[tab];

  // Deklarasi helper PERTAMA sebelum dipakai
  const isId = lang === "id";
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  // Pill data
  const pillData = {
    id: {
      basic: { name: "Basic", price: "Rp 2.500.000" },
      lengkap: { name: "Lengkap", price: "Rp 3.500.000" },
      retail: { name: "Retail", price: "Rp 4.750.000" },
      manufaktur: { name: "Manufaktur", price: "Rp 5.800.000" },
    },
    en: {
      basic: { name: "Basic", price: "IDR 2,500,000" },
      lengkap: { name: "Complete", price: "IDR 3,500,000" },
      retail: { name: "Retail", price: "IDR 4,750,000" },
      manufaktur: { name: "Manufacturing", price: "IDR 5,800,000" },
    },
  };

  // Update slider range labels
  set("roi-min-years", isId ? "1 thn" : "1 yr");
  set("roi-max-years", isId ? "10 thn" : "10 yr");
  set("roi-min-hours", isId ? "4 jam" : "4 hrs");
  set("roi-max-hours", isId ? "80 jam" : "80 hrs");
  set("roi-min-cloud", isId ? "200rb" : "IDR 200k");
  set("roi-max-cloud", isId ? "1 jt" : "IDR 1M");

  // Update pill model selector
  const pd = pillData[lang] || pillData.id;
  Object.keys(pd).forEach((key) => {
    const nameEl = document.getElementById("roi-pill-" + key + "-name");
    const priceEl = document.getElementById("roi-pill-" + key + "-price");
    if (nameEl) nameEl.textContent = pd[key].name;
    if (priceEl) priceEl.textContent = pd[key].price;
  });

  // Update teks ROI
  set("roi-title", tp.title);
  set("roi-subtitle", tp.subtitle);
  set("roi-label-years", ts.labelYears);
  set("roi-label-cloud", ts.labelCloud);
  set("roi-label-hours", ts.labelHours);
  set("roi-r1-label", ts.r1);
  set("roi-r2-label", tp.prodLabel);
  set("roi-r3-label", ts.r3);
  set("roi-r4-label", ts.r4);
  set("roi-r2-sub", tp.prodSub);
  set("roi-r4-sub", ts.r4sub);
  set("roi-cta-btn", ts.ctaBtn);
  set("roi-note", ts.note + " (" + tp.cloudRef + ")");
  set("roi-tab-both-label", ts.tabBoth);

  // Integration banner
  set("roi-integ-title", ts.integTitle);
  set("roi-integ-desc", ts.integDesc);
  set("roi-integ-f1", ts.integF1);
  set("roi-integ-f2", ts.integF2);
  set("roi-integ-f3", ts.integF3);
  set("roi-integ-f4", ts.integF4);

  roiCalc();
}
function fmtRp(n) {
  const lang = currentLang || "id";
  if (lang === "en") {
    if (n >= 1000000) {
      const m = n / 1000000;
      return "IDR " + (Number.isInteger(m) ? m : m.toFixed(1)) + "M";
    }
    if (n >= 1000) return "IDR " + Math.round(n / 1000) + "K";
    return "IDR " + n;
  }
  // ID format
  if (n >= 1000000) {
    const jt = n / 1000000;
    return "Rp " + (Number.isInteger(jt) ? jt : jt.toFixed(1)) + " jt";
  }
  if (n >= 1000) return "Rp " + Math.round(n / 1000) + "rb";
  return "Rp " + n;
}
// ── LANGUAGE ──────────────────────────────────────────────
function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const k = el.dataset.translate;
    const t = translations[lang][k];
    if (t !== undefined)
      String(t).includes("<") ? (el.innerHTML = t) : (el.textContent = t);
  });
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  generateFeatures(lang);
  generatePosFeatures(lang);
  generateModelCards(lang);
  generateComparisonTable(lang);
  generateModelNotes(lang);
  generateFaq(lang);
  updateRoiTexts(lang);
  // Update toggle button text
  const dt = document.getElementById("detailed-comparison-table");
  const textEl = document.querySelector(
    "[data-translate='detailedComparisonToggle']",
  );
  if (textEl && dt)
    textEl.textContent = dt.classList.contains("hidden")
      ? lang === "id"
        ? "Lihat Perbandingan Detail"
        : "View Detailed Comparison"
      : lang === "id"
        ? "Sembunyikan Perbandingan Detail"
        : "Hide Detailed Comparison";
}

// ── EVENT LISTENERS ───────────────────────────────────────
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  const m = document.getElementById("mobile-menu");
  m.classList.toggle("hidden");
  m.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  const m = document.getElementById("mobile-menu"),
    t = document.getElementById("menu-toggle");
  if (m && t && !m.contains(e.target) && !t.contains(e.target)) {
    m.classList.add("hidden");
    m.classList.remove("show");
  }
});
document
  .querySelectorAll(".lang-btn")
  .forEach((b) =>
    b.addEventListener("click", () => updateLanguage(b.dataset.lang)),
  );
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("mobile-menu")?.classList.add("hidden");
      document.getElementById("mobile-menu")?.classList.remove("show");
    }
  }),
);
document
  .getElementById("feature-modal-close")
  ?.addEventListener("click", closeFeatureModal);
document.getElementById("feature-modal")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeFeatureModal();
});
document.getElementById("modal-prev-btn")?.addEventListener("click", () => {
  const l = getImagesLen();
  if (l > 1) {
    currentCarouselIdx = (currentCarouselIdx - 1 + l) % l;
    updateCarousel();
  }
});
document.getElementById("modal-next-btn")?.addEventListener("click", () => {
  const l = getImagesLen();
  if (l > 1) {
    currentCarouselIdx = (currentCarouselIdx + 1) % l;
    updateCarousel();
  }
});
document
  .getElementById("back-to-top")
  ?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
document.getElementById("video-card")?.addEventListener("click", () => {
  const o = document.getElementById("play-overlay");
  if (o) {
    o.style.opacity = "0";
    o.style.pointerEvents = "none";
  }
});
document.getElementById("pos-video-card")?.addEventListener("click", () => {
  const o = document.getElementById("pos-play-overlay");
  if (o) {
    o.style.opacity = "0";
    o.style.pointerEvents = "none";
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mobile-menu")?.classList.add("hidden");
    document.getElementById("mobile-menu")?.classList.remove("show");
    if (!document.getElementById("feature-modal")?.classList.contains("hidden"))
      closeFeatureModal();
  }
  if (!document.getElementById("feature-modal")?.classList.contains("hidden")) {
    if (e.key === "ArrowLeft")
      document.getElementById("modal-prev-btn")?.click();
    if (e.key === "ArrowRight")
      document.getElementById("modal-next-btn")?.click();
  }
});
window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateActiveNav();
  const y = window.pageYOffset;
  const btn = document.getElementById("back-to-top");
  if (btn) {
    btn.style.opacity = y > 300 ? "1" : "0";
    btn.style.pointerEvents = y > 300 ? "auto" : "none";
  }
  document.getElementById("header")?.classList.toggle("shadow-2xl", y > 80);
});
window.addEventListener("hashchange", applyDeepLink);
window.addEventListener("resize", updateScrollPadding);

// Scroll reveal
const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.07 },
);
document.querySelectorAll("section").forEach((s) => {
  if (s.id === "model-comparison") return; // always visible
  s.classList.add("scroll-section");
  sectionObserver.observe(s);
});

// ── FORM — SINGLE HANDLER (FIXED) ────────────────────────
const waInput = document.querySelector('input[name="whatsapp"]');
if (waInput) {
  waInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
    if (this.value.startsWith("0")) this.value = this.value.substring(1);
    if (this.value.length > 13) this.value = this.value.substring(0, 13);
  });
}

// Real-time validation
function validateInput(input) {
  if (!input) return false;
  const isValid = input.validity.valid && input.value.trim() !== "";
  const isEmpty = input.value.trim() === "";
  const errorMsg = input.parentElement?.querySelector(".error-msg");
  const successMsg = input.parentElement?.querySelector(".success-msg");
  if (isEmpty) {
    errorMsg?.classList.add("hidden");
    successMsg?.classList.add("hidden");
    return false;
  }
  if (isValid) {
    errorMsg?.classList.add("hidden");
    if (successMsg) {
      successMsg.classList.remove("hidden");
      successMsg.style.display = "flex";
    }
    return true;
  } else {
    successMsg?.classList.add("hidden");
    if (errorMsg) {
      errorMsg.classList.remove("hidden");
      errorMsg.textContent = input.dataset.error || "Format tidak valid";
    }
    return false;
  }
}

// Single submit handler
document
  .getElementById("interestForm")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    const submitText = btn?.querySelector(".submit-text");
    const submitLoader = btn?.querySelector(".submit-loader");

    // Validate all required inputs
    const inputs = this.querySelectorAll(".validation-input");
    let allValid = true;
    inputs.forEach((inp) => {
      if (!validateInput(inp)) allValid = false;
    });
    if (!allValid) {
      showToast({
        icon: "⚠️",
        title: "Ada kesalahan",
        msg: "Mohon periksa kembali form Anda",
        duration: 4000,
      });
      return;
    }

    // Set loading state
    if (btn) {
      btn.disabled = true;
      btn.setAttribute("aria-busy", "true");
    }
    if (submitText) submitText.classList.add("hidden");
    if (submitLoader) submitLoader.classList.remove("hidden");

    const nama = this.nama.value.trim();
    const email = this.email.value.trim().toLowerCase();
    const waRaw = this.whatsapp.value.trim();
    const wa = waRaw ? "+62" + waRaw : "";

    // Extra client-side checks
    if (!email.endsWith("@gmail.com")) {
      showToast({
        icon: "⚠️",
        title: "Email tidak valid",
        msg: "Harap gunakan alamat Gmail yang valid",
        duration: 4000,
      });
      btn.disabled = false;
      btn.setAttribute("aria-busy", "false");
      if (submitText) submitText.classList.remove("hidden");
      if (submitLoader) submitLoader.classList.add("hidden");
      return;
    }
    if (waRaw && (waRaw.length < 9 || waRaw.length > 13)) {
      showToast({
        icon: "⚠️",
        title: "No. WhatsApp tidak valid",
        msg: "Harus 9-13 digit angka",
        duration: 4000,
      });
      btn.disabled = false;
      btn.setAttribute("aria-busy", "false");
      if (submitText) submitText.classList.remove("hidden");
      if (submitLoader) submitLoader.classList.add("hidden");
      return;
    }

    const resetBtn = () => {
      if (btn) {
        btn.disabled = false;
        btn.setAttribute("aria-busy", "false");
      }
      if (submitText) submitText.classList.remove("hidden");
      if (submitLoader) submitLoader.classList.add("hidden");
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: `nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&whatsapp=${encodeURIComponent(wa)}`,
        redirect: "follow",
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const parsed = JSON.parse(await res.text());
      if (parsed.result === "success") {
        this.classList.add("hidden");
        document.getElementById("successMessage")?.classList.remove("hidden");
        this.reset();
      } else throw new Error(parsed.message || "Server error");
    } catch (err) {
      showToast({
        icon: "❌",
        title: "Gagal mengirim",
        msg: "Coba hubungi kami langsung via WhatsApp.",
        actionText: "Buka WhatsApp",
        actionHref: "https://wa.me/6287725113689",
        duration: 8000,
      });
    } finally {
      resetBtn();
    }
  });

// ── INIT ──────────────────────────────────────────────────
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage("id");
  applyDeepLink();
  updateScrollProgress();
  updateScrollPadding();
  roiCalc(); // init calculator

  // Comparison table HIDDEN by default — opens when model chosen or button clicked
  const dt = document.getElementById("detailed-comparison-table");
  const chevron = document.getElementById("comparison-chevron");
  const toggleBtn = document.getElementById("comparison-toggle");
  if (dt && chevron) {
    dt.classList.add("hidden");
    chevron.classList.remove("rotate");
    toggleBtn?.setAttribute("aria-expanded", "false");
    const textEl = toggleBtn?.querySelector(
      "[data-translate='detailedComparisonToggle']",
    );
    if (textEl)
      textEl.textContent =
        currentLang === "id"
          ? "Lihat Perbandingan Detail"
          : "View Detailed Comparison";
  }

  // Toggle feature buttons
  document
    .getElementById("toggle-features-btn")
    ?.addEventListener("click", toggleFeatures);
  document
    .getElementById("toggle-pos-features-btn")
    ?.addEventListener("click", togglePosFeatures);

  // Real-time form validation
  document.querySelectorAll(".validation-input").forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
    input.addEventListener("blur", () => validateInput(input));
  });
});
