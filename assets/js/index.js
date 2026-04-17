/* ============================================================
   inni — Improved JavaScript v3
   - Removed: all pricing display
   - Removed: ROI calculator / simulasi harga
   - Added: "Hubungi Tim Pemasaran" flow
   - Fixed: double submit handler (merged into one)
   - Fixed: exit intent double-trigger
   - Fixed: scroll padding dynamic header height
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
    service1Title: "Solusi Software Bisnis",
    service1DescNew:
      "Kami menyediakan aplikasi desktop akuntansi dan kasir (POS) 100% offline khusus untuk UMKM, koperasi, dan organisasi. Investasi sekali, pakai selamanya.",
    service1Cta: "Lihat Produk",
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
    app1Price: "Hubungi Tim Pemasaran",
    app1PriceSub: "Bisa Dicicil*",
    app1DemoBtn: "Preview Demo",
    app1ModelBtn: "Lihat Model",
    app2Name: "inni POS",
    app2Price: "Hubungi Tim Pemasaran",
    app2PriceSub: "Bisa Dicicil*",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Gunakan keduanya</strong> — inni Akun Digi + inni POS dapat dihubungkan dalam satu PC untuk pengelolaan bisnis yang lebih lengkap",
    oneTimeLabel: "Investasi sekali",
    cicilLabel: "Bisa Dicicil*",
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
      "Satu kali bayar, support teknis penggunaan aplikasi tidak berhenti. Tanya kapan saja via WhatsApp.",
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
    chooseModelLabel: "Mulai dengan model ini",
    chooseBtnLabel: "Pilih",
    detailedComparisonSubLabel:
      "Perbandingan fitur lengkap antar model inni Akun Digi",
    compareHintText: "Ingin membandingkan fitur tiap model secara detail?",
    compareHintLink: "Lihat perbandingan di bawah",
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
    demoVsCost: "Biaya",
    demoVsCostFree: "✓ Gratis",
    demoVsCostOneTime: "Hubungi Kami",
    // Price info section
    priceInfoTitle: "Informasi Harga",
    priceInfoDesc:
      "Untuk informasi harga dapat menghubungi tim pemasaran kami. Harga disesuaikan dengan kebutuhan dan skala bisnis Anda.",
    priceInfoCicil: "Biaya bisa dicicil — syarat & ketentuan berlaku",
    priceInfoWa: "Tanya Harga via WhatsApp",
    priceInfoForm: "Isi Form Kontak",
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
    "sticky-acct-text": "Preview Demo",
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
    service1Title: "Business Software Solutions",
    service1DescNew:
      "We provide 100% offline desktop accounting and POS applications specifically for MSMEs, cooperatives, and organizations. One-time investment, use forever.",
    service1Cta: "View Products",
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
      "The application can be tailored to your specific business workflow.",
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
    app1Price: "Contact Our Sales Team",
    app1PriceSub: "Installment Available*",
    app1DemoBtn: "Preview Demo",
    app1ModelBtn: "View Models",
    app2Name: "inni POS",
    app2Price: "Contact Our Sales Team",
    app2PriceSub: "Installment Available*",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Use both</strong> — inni Akun Digi + inni POS can be connected on one PC for complete business management",
    oneTimeLabel: "One-time investment",
    cicilLabel: "Installment Available*",
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
      "1 license for 1 main PC. Other devices on the same network can access via a file server.",
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
      "One-time payment, technical support for app usage never stops. Ask anytime via WhatsApp.",
    guarantee4Title: "Free Updates Forever",
    guarantee4Desc:
      "Bug fixes and new features are always free — just download and install.",
    guaranteeNote:
      "All guarantees are active upon successful installation and license activation.",
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
    chooseModelLabel: "Start with this model",
    chooseBtnLabel: "Choose",
    detailedComparisonSubLabel:
      "Full feature comparison between inni Akun Digi models",
    compareHintText: "Want to compare features between each model in detail?",
    compareHintLink: "View comparison below",
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
    demoVsCost: "Cost",
    demoVsCostFree: "✓ Free",
    demoVsCostOneTime: "Contact Us",
    // Price info section
    priceInfoTitle: "Pricing Information",
    priceInfoDesc:
      "For pricing information, please contact our sales team. Prices are tailored to your business needs and scale.",
    priceInfoCicil: "Installment payment available — terms & conditions apply",
    priceInfoWa: "Ask Pricing via WhatsApp",
    priceInfoForm: "Fill Contact Form",
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
      a: "Satu lisensi untuk 1 PC utama. Untuk penggunaan di perangkat lain, ke depannya dapat diakses melalui file server yang dijalankan di PC utama dalam jaringan yang sama. Jika butuh install di lokasi atau cabang berbeda, diperlukan lisensi terpisah.",
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
      a: "Ya! Saat diinstall di komputer yang sama, inni POS dan inni Akun Digi dapat dihubungkan dengan konfigurasi awal yang mudah. Setiap transaksi kasir di POS otomatis tercatat sebagai jurnal di Akun Digi — tidak perlu input ganda, tidak perlu internet.",
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
      a: "Restore dari file backup Anda. Untuk pindah ke komputer baru: (1) Install aplikasi di komputer baru, (2) Hubungi admin kami untuk transfer license — dikenakan biaya administrasi sesuai ketentuan perjanjian, proses 1-24 jam kerja, (3) Restore backup data Anda. Data tetap aman selama Anda memiliki file backup.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
    {
      q: "Bagaimana cara mengetahui informasi harga?",
      a: "Untuk informasi harga dapat menghubungi tim pemasaran kami via WhatsApp di 0877-2511-3689 atau 0877-0288-2986, atau isi form kontak di website ini. Harga disesuaikan dengan kebutuhan dan skala bisnis Anda. Tersedia juga opsi cicilan dengan syarat & ketentuan berlaku.",
      tags: ["both"],
      icon: "fa-tags",
    },
  ],
  en: [
    {
      q: "Can inni Akun Digi be used offline?",
      a: "Yes, 100% offline! inni Akun Digi is a desktop application installed like regular software on Windows. After installation, no internet required for daily operations.",
      tags: ["acct"],
      icon: "fa-laptop-code",
    },
    {
      q: "How do I install the application?",
      a: "Very easy! You receive an installer (.exe) around 150-300 MB. Double-click, follow the wizard (Next → Next → Finish), done. No server setup needed.",
      tags: ["acct", "pos"],
      icon: "fa-download",
    },
    {
      q: "Is my financial data safe?",
      a: "Very safe! All data stored 100% locally on your computer — nothing sent to our servers. Manual backup feature available to save to flash drive or external hard drive.",
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
      a: "One license for 1 main PC. Other devices on the same network can access via a file server running on the main PC. Different locations require separate licenses.",
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
      a: "Yes! When installed on the same computer, inni POS and inni Akun Digi can be connected with a simple initial setup. Every POS transaction is automatically recorded as a journal entry — no double entry, no internet required.",
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
      a: "Restore from your backup file. To move to a new computer: (1) Install on the new computer, (2) Contact our admin for license transfer — an administrative fee applies, process takes 1-24 business hours, (3) Restore your data.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
    {
      q: "How do I get pricing information?",
      a: "For pricing information, please contact our sales team via WhatsApp at 0877-2511-3689 or 0877-0288-2986, or fill the contact form on this website. Pricing is tailored to your business needs. Installment payment options are also available, subject to terms & conditions.",
      tags: ["both"],
      icon: "fa-tags",
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
    { key: "basic", title: "Basic", tagline: "Pencatatan sederhana" },
    {
      key: "lengkap",
      title: "Lengkap",
      tagline: "Laporan & analitik penuh",
      recommended: true,
    },
    { key: "retail", title: "Retail", tagline: "Manajemen stok dagang" },
    { key: "manufaktur", title: "Manufaktur", tagline: "Produksi & BOM" },
  ],
  en: [
    { key: "basic", title: "Basic", tagline: "Simple recording" },
    {
      key: "lengkap",
      title: "Complete",
      tagline: "Full reporting & analytics",
      recommended: true,
    },
    { key: "retail", title: "Retail", tagline: "Inventory for trading" },
    { key: "manufaktur", title: "Manufacturing", tagline: "Production & BOM" },
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
      "testimonial",
      "garansi",
      "cara-beli",
    ].includes(current);
    if (href === "#" + current) {
      n.classList.add("active");
    } else if (href === "#produk-tabs" && isProductSection) {
      n.classList.add("active");
    } else {
      n.classList.remove("active");
    }
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
      const card = document.createElement("div");
      card.className = `model-comparison-card flex flex-col ${m.recommended ? "recommended" : ""}`;
      card.innerHTML = `
        <div class="text-center mb-4">
          <i class="fas ${getModelIcon(m.key)} model-icon"></i>
          <h3 class="text-lg font-bold text-gray-800 mb-1">${m.title}</h3>
        </div>
        <div class="model-features flex-1 mb-4">
          ${getModelFeatures(m.key, lang)
            .map(
              (f) =>
                `<div class="model-feature-item ${!f.included ? "excluded" : ""}"><i class="fas ${f.included ? "fa-check-circle" : "fa-circle-xmark"}"></i><span>${f.text}</span></div>`,
            )
            .join("")}
        </div>
        <div class="model-best-for ${m.recommended ? "recommended" : "normal"}">
          <i class="fas ${getModelIcon(m.key)}" style="font-size:0.65rem;margin-right:0.3rem"></i>
          <strong>${lang === "id" ? "Untuk:" : "For:"}</strong> ${m.tagline}
        </div>
        <a href="https://wa.me/6287725113689?text=Halo%2C%20saya%20ingin%20tahu%20harga%20model%20${encodeURIComponent(m.title)}%20inni%20Akun%20Digi"
          target="_blank" rel="noopener noreferrer"
          class="mt-3 text-center text-xs font-bold text-white bg-green-600 hover:bg-green-500 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1">
          <i class="fab fa-whatsapp"></i>
          ${lang === "id" ? "Tanya Harga Model Ini" : "Ask for Pricing"}
        </a>`;
      container.appendChild(card);
    });
  }, 250);
}

function highlightModelColumn(modelKey) {
  chosenModel = modelKey;
  const colMap = { basic: 1, lengkap: 2, retail: 3, manufaktur: 4 };
  const colIdx = colMap[modelKey];

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

  // Toast with WhatsApp CTA
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
        ? "Hubungi tim pemasaran kami untuk informasi harga!"
        : "Contact our sales team for pricing info!",
    actionText:
      currentLang === "id"
        ? "Tanya Harga via WhatsApp"
        : "Ask Pricing via WhatsApp",
    actionHref: `https://wa.me/6287725113689?text=${waMsg}`,
    duration: 10000,
  });
}
window.highlightModelColumn = highlightModelColumn;

function scrollToComparison() {
  const dt = document.getElementById("detailed-comparison-table");
  const btn = document.getElementById("comparison-toggle");
  if (dt && dt.classList.contains("hidden")) toggleDetailedComparison();
  setTimeout(() => {
    btn?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}
window.scrollToComparison = scrollToComparison;

function toggleDetailedComparison() {
  const table = document.getElementById("detailed-comparison-table");
  const chevron = document.getElementById("comparison-chevron");
  const btn = document.getElementById("comparison-toggle");
  if (!table || !chevron) return;
  const isHidden = table.classList.contains("hidden");
  table.classList.toggle("hidden");
  chevron.classList.toggle("rotate");
  if (btn) btn.setAttribute("aria-expanded", String(isHidden));
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
    tbody.innerHTML += `
      <tr class="${bg} hover:bg-blue-50 transition-colors">
        <td class="py-3 px-4 text-gray-700 font-medium sticky-col text-sm">${r.feature}</td>
        <td class="py-3 px-4 text-center">${r.basic ? check : cross}</td>
        <td class="py-3 px-4 text-center">${r.lengkap ? check : cross}</td>
        <td class="py-3 px-4 text-center">${r.retail ? check : cross}${r.retailNote ? `<div class="text-xs text-gray-500 mt-0.5">${r.retailNote}</div>` : ""}</td>
        <td class="py-3 px-4 text-center">${r.manufaktur ? check : cross}${r.manufakturNote ? `<div class="text-xs text-gray-500 mt-0.5">${r.manufakturNote}</div>` : ""}</td>
      </tr>`;
  });
}

function toggleDemoDropup() {
  const dropup = document.getElementById("sticky-demo-dropup");
  const chevron = document.getElementById("sticky-demo-chevron");
  if (!dropup || !chevron) return;
  const isHidden = dropup.classList.toggle("hidden");
  chevron.classList.toggle("rotate", !isHidden);
}
window.toggleDemoDropup = toggleDemoDropup;

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
  const half = Math.ceil(faqData[lang].length / 2);
  const col1 = faqData[lang].slice(0, half);
  const col2 = faqData[lang].slice(half);
  list.innerHTML = `
    <div class="faq-two-col">
      <div class="faq-col" id="faq-col-1"></div>
      <div class="faq-col" id="faq-col-2"></div>
    </div>`;
  const renderItem = (item, i, colEl) => {
    const tags = item.tags
      .map(
        (t) =>
          `<span class="faq-tag ${t}"><i class="fas fa-tag"></i>${tagLabel[t][lang]}</span>`,
      )
      .join("");
    colEl.innerHTML += `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
          <span class="faq-question-text">
            <i class="fas ${item.icon} text-blue-400 mr-2 text-sm"></i>${item.q}
          </span>
          <span class="faq-icon"><i class="fas fa-plus text-xs"></i></span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}">
          <div class="faq-answer-inner">
            <div class="mb-2">${tags}</div>${item.a}
          </div>
        </div>
      </div>`;
  };
  const col1El = document.getElementById("faq-col-1");
  const col2El = document.getElementById("faq-col-2");
  col1.forEach((item, i) => renderItem(item, i, col1El));
  col2.forEach((item, i) => renderItem(item, i + half, col2El));
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

// ── EXIT INTENT ───────────────────────────────────────────
function showExitIntent() {
  if (exitShown || exitDismissed) return;
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
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 5 && !exitDismissed && timeOnPage > 45) showExitIntent();
});
setInterval(() => timeOnPage++, 1000);
document.getElementById("exit-close-btn")?.addEventListener("click", () => {
  exitDismissed = true;
  hideExitIntent();
});

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

  const isId = lang === "id";

  // ── FAQ ──────────────────────────────────────────────────
  const faqBadge = document.getElementById("faq-badge-text");
  const faqTitle = document.getElementById("faq-title");
  const faqSubtitle = document.getElementById("faq-subtitle");
  const faqMoreText = document.getElementById("faq-more-text");
  const faqWaText = document.getElementById("faq-wa-text");
  if (faqBadge)
    faqBadge.textContent = isId ? "Pertanyaan Umum" : "Common Questions";
  if (faqTitle) faqTitle.textContent = "Frequently Asked Questions";
  if (faqSubtitle)
    faqSubtitle.textContent = isId
      ? "Jawaban dari pertanyaan yang paling sering ditanyakan"
      : "Answers to the most frequently asked questions";
  if (faqMoreText)
    faqMoreText.textContent = isId
      ? "Masih ada pertanyaan lain?"
      : "Still have questions?";
  if (faqWaText)
    faqWaText.textContent = isId ? "Tanya via WhatsApp" : "Ask via WhatsApp";

  // ── KONTAK ────────────────────────────────────────────────
  const contactHeading = document.getElementById("contact-title");
  const contactDesc = document.getElementById("contact-subtitle");
  if (contactHeading)
    contactHeading.textContent = isId ? "Hubungi Kami" : "Contact Us";
  if (contactDesc)
    contactDesc.textContent = isId
      ? "Kami siap membantu Anda! Jangan ragu untuk menghubungi tim kami"
      : "We are ready to help you! Don't hesitate to contact our team";

  // ── FORM KONTAK ───────────────────────────────────────────
  const contactFormTitle = document.getElementById("contact-form-title");
  const contactFormSubtitle = document.getElementById("contact-form-subtitle");
  const labelNama = document.getElementById("label-nama");
  const labelEmail = document.getElementById("label-email");
  const labelWa = document.getElementById("label-whatsapp");
  const gmailNote = document.getElementById("gmail-note");
  const submitText = document.getElementById("submit-text");
  const submitLoader = document.getElementById("submit-loader-text");
  const privacyNote = document.getElementById("privacy-note");
  const successTitle = document.getElementById("success-title");
  const successMsg = document.getElementById("success-msg");
  const successWaText = document.getElementById("success-wa-text");

  if (contactFormTitle)
    contactFormTitle.innerHTML = isId
      ? `Tertarik dengan <span class="text-blue-600">inni Akun Digi?</span>`
      : `Interested in <span class="text-blue-600">inni Akun Digi?</span>`;
  if (contactFormSubtitle)
    contactFormSubtitle.textContent = isId
      ? "Tinggalkan data Anda, kami akan segera menghubungi!"
      : "Leave your details, we will contact you shortly!";
  if (labelNama)
    labelNama.innerHTML = isId
      ? `<i class="fas fa-user text-blue-600 mr-2"></i>Nama Lengkap <span class="text-red-500 ml-1">*</span>`
      : `<i class="fas fa-user text-blue-600 mr-2"></i>Full Name <span class="text-red-500 ml-1">*</span>`;
  if (labelEmail)
    labelEmail.innerHTML = isId
      ? `<i class="fas fa-envelope text-blue-600 mr-2"></i>Email (Gmail) <span class="text-red-500 ml-1">*</span>`
      : `<i class="fas fa-envelope text-blue-600 mr-2"></i>Email (Gmail) <span class="text-red-500 ml-1">*</span>`;
  if (labelWa)
    labelWa.innerHTML = isId
      ? `<i class="fab fa-whatsapp text-green-600 mr-2"></i>No. WhatsApp <span class="text-gray-400 font-normal ml-1">(Opsional)</span>`
      : `<i class="fab fa-whatsapp text-green-600 mr-2"></i>WhatsApp Number <span class="text-gray-400 font-normal ml-1">(Optional)</span>`;
  if (gmailNote)
    gmailNote.innerHTML = isId
      ? `<i class="fas fa-info-circle mr-1"></i>Hanya Gmail yang diterima`
      : `<i class="fas fa-info-circle mr-1"></i>Only Gmail is accepted`;
  if (submitText) submitText.textContent = isId ? "Kirim Sekarang" : "Send Now";
  if (submitLoader)
    submitLoader.textContent = isId ? "Mengirim..." : "Sending...";
  if (privacyNote)
    privacyNote.innerHTML = isId
      ? `<i class="fas fa-lock mr-1"></i>Data Anda aman & hanya untuk komunikasi`
      : `<i class="fas fa-lock mr-1"></i>Your data is safe & only used for communication`;
  if (successTitle)
    successTitle.textContent = isId ? "Terima Kasih!" : "Thank You!";
  if (successMsg)
    successMsg.textContent = isId
      ? "Tim kami akan segera menghubungi Anda."
      : "Our team will contact you shortly.";
  if (successWaText)
    successWaText.textContent = isId
      ? "Chat via WhatsApp"
      : "Chat via WhatsApp";

  // ── STICKY CTA ────────────────────────────────────────────
  const stickyAcct = document.getElementById("sticky-acct-text");
  const stickyWa = document.getElementById("sticky-wa-text");
  if (stickyAcct)
    stickyAcct.textContent = isId ? "Preview Demo" : "Preview Demo";
  if (stickyWa) stickyWa.textContent = isId ? "WhatsApp Kami" : "WhatsApp Us";

  // ── GENERATE ULANG KONTEN DINAMIS ─────────────────────────
  generateFeatures(lang);
  generatePosFeatures(lang);
  generateModelCards(lang);
  generateComparisonTable(lang);
  generateModelNotes(lang);
  generateFaq(lang);

  // ── TOGGLE BUTTON TEXT ────────────────────────────────────
  const dt = document.getElementById("detailed-comparison-table");
  const textEl = document.querySelector(
    "[data-translate='detailedComparisonToggle']",
  );
  if (textEl && dt)
    textEl.textContent = dt.classList.contains("hidden")
      ? isId
        ? "Lihat Perbandingan Detail"
        : "View Detailed Comparison"
      : isId
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
  const wrapper = document.getElementById("sticky-demo-btn");
  const dropup = document.getElementById("sticky-demo-dropup");
  if (
    wrapper &&
    dropup &&
    !wrapper.contains(e.target) &&
    !dropup.contains(e.target)
  ) {
    dropup.classList.add("hidden");
    document.getElementById("sticky-demo-chevron")?.classList.remove("rotate");
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
  if (s.id === "model-comparison") return;
  s.classList.add("scroll-section");
  sectionObserver.observe(s);
});

// ── FORM ──────────────────────────────────────────────────
const waInput = document.querySelector('input[name="whatsapp"]');
if (waInput) {
  waInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
    if (this.value.startsWith("0")) this.value = this.value.substring(1);
    if (this.value.length > 13) this.value = this.value.substring(0, 13);
  });
}

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

document
  .getElementById("interestForm")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    const submitText = btn?.querySelector(".submit-text");
    const submitLoader = btn?.querySelector(".submit-loader");
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

  // Dropdown navbar Produk
  const navProdukGroup = document.getElementById("nav-produk-group");
  const navProdukDropdown = document.getElementById("nav-produk-dropdown");
  const navProdukChevron = document.getElementById("nav-produk-chevron");
  if (navProdukGroup && navProdukDropdown) {
    let dropdownTimeout;
    navProdukGroup.addEventListener("mouseenter", () => {
      clearTimeout(dropdownTimeout);
      navProdukDropdown.classList.remove("opacity-0", "invisible");
      navProdukDropdown.classList.add("opacity-100", "visible");
      if (navProdukChevron) navProdukChevron.style.transform = "rotate(180deg)";
    });
    navProdukGroup.addEventListener("mouseleave", () => {
      dropdownTimeout = setTimeout(() => {
        navProdukDropdown.classList.add("opacity-0", "invisible");
        navProdukDropdown.classList.remove("opacity-100", "visible");
        if (navProdukChevron) navProdukChevron.style.transform = "rotate(0deg)";
      }, 150);
    });
    navProdukDropdown.addEventListener("mouseenter", () =>
      clearTimeout(dropdownTimeout),
    );
    navProdukDropdown.addEventListener("mouseleave", () => {
      dropdownTimeout = setTimeout(() => {
        navProdukDropdown.classList.add("opacity-0", "invisible");
        navProdukDropdown.classList.remove("opacity-100", "visible");
        if (navProdukChevron) navProdukChevron.style.transform = "rotate(0deg)";
      }, 150);
    });
  }

  // Comparison table HIDDEN by default
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
