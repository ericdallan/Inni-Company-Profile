/* ============================================================
   inni — Main JS v3 (CORRECTED - All Translations Complete)
   ============================================================ */

// ── CONFIG ────────────────────────────────────────────────
const POPULAR_ACCT_IDX = [1, 7, 11]; // Voucher, Neraca Keuangan, Dashboard
const POPULAR_POS_IDX = [0, 2, 6]; // Transaksi Kasir, Multi Payment, Laporan

// ── Translations ──────────────────────────────────────────
const translations = {
  id: {
    headerTitle: "PT. Integrasindo Multi Kreasi",
    headerSlogan:
      '"Laporan Keuangan & Pajak Praktis untuk Semua Skala Bisnis & Organisasi"',
    navHome: "Beranda",
    navServices: "Layanan",
    navContact: "Kontak",
    navFaq: "FAQ",
    appsLabel: "Produk",
    navComparison: "Model",
    navHowItWorks: "Cara Kerja",
    introTitle: "Selamat Datang di PT. Integrasindo Multi Kreasi",
    introText:
      "Kami menyediakan solusi keuangan dan pajak yang praktis dan terpercaya bagi UMKM, Koperasi, serta berbagai organisasi untuk mendukung pengelolaan keuangan yang lebih efisien.",
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
    afterDemo: "Sudah puas mencoba?",
    compareModels: "Bandingkan paket & pilih yang sesuai →",
    servicesTitle: "Layanan Kami",
    servicesSubtitle: "Dukungan komprehensif untuk kesuksesan bisnis Anda",
    service1Title: "Aplikasi Desktop Keuangan",
    service1Desc:
      "Aplikasi desktop offline untuk laporan keuangan yang akurat dan aman.",
    service2Title: "Pelaporan Pajak",
    service2Desc: "Pelaporan pajak pribadi dan usaha dengan mudah.",
    service3Title: "Konsultasi & Pelatihan",
    service3Desc: "Konsultasi dan pelatihan akuntansi serta pajak.",
    service4Title: "Legalitas Usaha",
    service4Desc: "Pendaftaran merk dan legalitas usaha (NIB, NPWP, dll).",
    service5Title: "Kursus SPT PPh Badan",
    service5Desc:
      "Kursus profesional untuk penyusunan SPT PPh Badan yang tepat dan efisien.",
    previewBadge: "Pratinjau Aplikasi",
    watchMoreVideos: "Ingin lihat lebih?",
    ourYouTubeChannel: "Channel YouTube kami",
    featuresTitle: "Fitur Aplikasi inni Akun Digi",
    benefitsTitle: "Mengapa Memilih inni?",
    benefitsSubtitle: "Keunggulan yang membuat kami berbeda",
    benefit1: "Mudah digunakan, bahkan untuk pemula.",
    benefit2: "Data keuangan yang akurat dan terorganisasi.",
    benefit3: "Solusi yang hemat waktu dan biaya.",
    benefit4: "Pelatihan di lokasi untuk adopsi yang mulus.",
    comparisonTitle: "Perbandingan Model Aplikasi",
    comparisonSubtitle: "Pilih model yang sesuai dengan kebutuhan bisnis Anda",
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
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi. Seluruh hak cipta dilindungi.",
    footerCompany: "PT. Integrasindo Multi Kreasi",
    footerTagline:
      '"Laporan Keuangan & Pajak Praktis untuk Semua Skala Bisnis & Organisasi"',
    footerDesc:
      "Penyedia layanan akuntansi digital terintegrasi dengan fitur lengkap serta pelatihan langsung di tempat.",
    footerOffice: "Kantor Kami",
    footerQuickLinks: "Tautan Cepat",
    footerHome: "Beranda",
    footerServices: "Layanan",
    footerContact: "Kontak",
    footerViewMap: "Lihat di Google Maps",
    posDemoFeatureTitle: "Fitur Aplikasi POS inni",
    posDemoDisclaimer:
      "*Demo ONLINE ini hanya untuk preview fitur. Aplikasi ASLI adalah desktop app yang 100% offline — data tersimpan permanen di komputer, tidak ada batasan fitur, dan bisa backup/restore kapan saja.",
    posDemoCta: "🛒 Coba Langsung—",
    posDemoCtaSec: "Gratis Tanpa Registrasi!",
    posDemoSubtitle: "Preview aplikasi kasir desktop untuk bisnis retail Anda",
    posDemoCtaButton: "PREVIEW DEMO POS SEKARANG",
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
    app2Desc:
      "Sistem kasir modern untuk bisnis retail. Transaksi cepat, stok terkontrol, laporan penjualan real-time.",
    app2Price: "Hubungi kami untuk harga",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Gunakan keduanya</strong> — inni Accounting + inni POS terintegrasi untuk pengelolaan bisnis yang lebih lengkap",
    oneTimeLabel: "Investasi sekali",
    posModelSingle: "1 Model — All Inclusive",
    posModelDesc:
      "inni POS hadir dalam satu paket lengkap — tidak ada pilihan model yang membingungkan. Semua fitur kasir, stok, dan laporan sudah tersedia dalam satu harga.",
    posModelPriceLabel: "Harga",
    posPill1: "Transaksi Kasir",
    posPill2: "Scan Barcode",
    posPill3: "Multi Payment",
    posPill4: "Stok & Gudang",
    posPill5: "Data Pelanggan",
    posPill6: "Retur Penjualan",
    posPill7: "Laporan Penjualan",
    posPill8: "Laporan Arus Kas",
    contactSales: "Hubungi Sales",
  },
  en: {
    headerTitle: "PT. Integrasindo Multi Kreasi",
    headerSlogan:
      '"Practical Financial Reports & Tax Solutions for All Business and Organization Scales"',
    navHome: "Home",
    navServices: "Services",
    navContact: "Contact",
    navFaq: "FAQ",
    appsLabel: "Products",
    navComparison: "Models",
    navHowItWorks: "How It Works",
    introTitle: "Welcome to PT. Integrasindo Multi Kreasi",
    introText:
      "We deliver practical and trusted financial and tax solutions for MSMEs, cooperatives, and all types of organizations—empowering more efficient financial management.",
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
      "*This ONLINE demo is only for feature preview. The REAL application is a desktop app that's 100% offline — data stored permanently on computer, no feature limitations, and can backup/restore anytime.",
    afterDemo: "Satisfied with the demo?",
    compareModels: "Compare packages & choose yours →",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive support for your business success",
    service1Title: "Desktop Financial Application",
    service1Desc:
      "Offline desktop application for accurate and secure financial reports.",
    service2Title: "Tax Reporting",
    service2Desc: "Easy tax reporting for individuals and businesses.",
    service3Title: "Consultation & Training",
    service3Desc: "Accounting and tax consultation and training.",
    service4Title: "Business Legalization",
    service4Desc: "Trademark registration and legalization (NIB, NPWP, etc.).",
    service5Title: "SPT PPh Badan Course",
    service5Desc:
      "Professional course on preparing Corporate Income Tax Returns.",
    previewBadge: "App Preview",
    watchMoreVideos: "Want to see more?",
    ourYouTubeChannel: "our YouTube channel",
    featuresTitle: "inni Akun Digi Application Features",
    benefitsTitle: "Why Choose inni?",
    benefitsSubtitle: "Advantages that make us different",
    benefit1: "Easy to use, even for beginners.",
    benefit2: "Accurate and organized financial data.",
    benefit3: "Time and cost-efficient solutions.",
    benefit4: "On-site training for seamless adoption.",
    comparisonTitle: "Application Model Comparison",
    comparisonSubtitle: "Choose the model that suits your business needs",
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
    footerText: "© 2025 PT. Integrasindo Multi Kreasi. All rights reserved.",
    footerCompany: "PT. Integrasindo Multi Kreasi",
    footerTagline:
      '"Practical Financial Reports & Tax Solutions for All Business and Organization Scales"',
    footerDesc:
      "A provider of integrated digital accounting services with comprehensive features and on-site training.",
    footerOffice: "Our Office",
    footerQuickLinks: "Quick Links",
    footerHome: "Home",
    footerServices: "Services",
    footerContact: "Contact",
    footerViewMap: "View on Google Maps",
    posDemoFeatureTitle: "inni POS Application Features",
    posDemoDisclaimer:
      "*This ONLINE demo is only for feature preview. The REAL application is a desktop app that's 100% offline — data stored permanently on computer, no feature limitations, and can backup/restore anytime.",
    posDemoCta: "🛒 Try It Now—",
    posDemoCtaSec: "Free, No Registration!",
    posDemoSubtitle: "Preview desktop cashier app for your retail business",
    posDemoCtaButton: "PREVIEW POS DEMO NOW",
    appsTitle: "One Ecosystem, Two Business Solutions",
    appsSubtitle:
      "Choose what you need, or use both for a more complete business",
    app1Name: "inni Akun Digi",
    app1Desc:
      "Complete desktop accounting application for MSMEs, cooperatives, and organizations. 100% offline, install once use forever.",
    app1Feature1: "Automatic Financial Reports",
    app1Feature2: "Integrated Receivables & Payables",
    app1Feature3: "4 Models: Basic, Complete, Retail, Manufacturing",
    app1Feature4: "Export PDF & Excel",
    app1Price: "Starting from IDR 2,500,000",
    app1DemoBtn: "Preview Demo",
    app1ModelBtn: "View Models",
    app2Name: "inni POS",
    app2Desc:
      "Modern cashier system for retail businesses. Fast transactions, controlled inventory, real-time sales reports.",
    app2Price: "Contact us for pricing",
    app2DemoBtn: "Preview Demo",
    appsCombineNote:
      "💡 <strong>Use both</strong> — inni Accounting + inni POS integrated for more complete business management",
    oneTimeLabel: "One-time investment",
    posModelSingle: "1 Model — All Inclusive",
    posModelDesc:
      "inni POS comes in one complete package. All cashier, inventory, and report features included in one price.",
    posModelPriceLabel: "Price",
    posPill1: "Cashier Transaction",
    posPill2: "Barcode Scan",
    posPill3: "Multi Payment",
    posPill4: "Stock & Warehouse",
    posPill5: "Customer Data",
    posPill6: "Sales Returns",
    posPill7: "Sales Reports",
    posPill8: "Cash Flow Report",
    contactSales: "Contact Sales",
  },
};

// ── Feature data (Accounting) ─────────────────────────────
const featuresData = {
  id: [
    {
      icon: "fa-book",
      title: "Bagan Akun",
      desc: "Atur dan kelompokkan akun keuangan Anda dengan struktur yang jelas untuk aset, liabilitas, dan ekuitas.",
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
      desc: "Kelola dan lacak inventaris Anda dengan mudah, termasuk stok masuk, keluar, dan transfer antar gudang.",
      color: "from-cyan-500 to-cyan-600",
      images: ["assets/img/Stok.png", "assets/img/Stock_Detail.png"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Kelola proses produksi dari bahan mentah menjadi barang jadi dengan tracking material dan biaya produksi.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/Production.png", "assets/img/Production_Detail.png"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Pantau performa keuangan Anda dengan visualisasi data real-time, termasuk laba, penjualan, dan komposisi stok.",
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
      desc: "Organize and categorize your financial accounts with a clear structure for assets, liabilities, and equity.",
      color: "from-blue-500 to-blue-600",
      images: ["assets/img/COA.png"],
    },
    {
      icon: "fa-ticket-alt",
      title: "Voucher Management",
      desc: "Create, edit, and track transaction vouchers such as purchases, sales, and transfers with automatic validation.",
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
      desc: "Monitor and manage payment obligations to suppliers with an organized ledger.",
      color: "from-red-500 to-red-600",
      images: ["assets/img/AP.png", "assets/img/AP_Detail.png"],
    },
    {
      icon: "fa-file-export",
      title: "Import & Export",
      desc: "Import initial data via Excel/CSV. Export any report to PDF or Excel in one click.",
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
      desc: "Analyze revenue and expenses with profit and loss reports to evaluate business performance.",
      color: "from-orange-500 to-orange-600",
      images: ["assets/img/Income_Statement.png"],
    },
    {
      icon: "fa-boxes",
      title: "Stock",
      desc: "Manage and track your inventory easily, including stock inflows, outflows, and inter-warehouse transfers.",
      color: "from-cyan-500 to-cyan-600",
      images: ["assets/img/Stok.png"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Manage production processes from raw materials to finished goods with material tracking.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/Production.png"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Monitor your financial performance with real-time data visualizations.",
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
        "Antarmuka kasir yang intuitif untuk memproses transaksi penjualan dengan cepat. Mendukung input produk manual maupun scan barcode, hitung diskon, PPN, kembalian otomatis, dan cetak struk.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Transaction.png"],
      popular: true,
    },
    {
      icon: "fa-barcode",
      title: "Scan Barcode",
      subtitle: "Input produk instan via barcode",
      description:
        "Dukung berbagai format barcode: CODE128, EAN-13, EAN-8, QRCODE. Generate label barcode otomatis dan cetak label massal.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_Barcode.png"],
    },
    {
      icon: "fa-wallet",
      title: "Multi Metode Pembayaran",
      subtitle: "Tunai, QRIS, Transfer, Kartu",
      description:
        "Terima pembayaran dari berbagai metode: Tunai, QRIS, Transfer Bank, Kartu Debit, Kartu Kredit, dan E-Wallet.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Payment.png"],
      popular: true,
    },
    {
      icon: "fa-boxes",
      title: "Stok & Gudang",
      subtitle: "Kontrol inventori multi-gudang",
      description:
        "Pantau stok produk secara real-time per gudang. Sistem otomatis mengurangi stok saat transaksi POS selesai.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Stock.png"],
    },
    {
      icon: "fa-user-friends",
      title: "Data Pelanggan",
      subtitle: "Riwayat transaksi pelanggan",
      description:
        "Simpan data pelanggan lengkap: nama, alamat, nomor telepon, email. Lacak riwayat pembelian per pelanggan.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_Customer.png"],
    },
    {
      icon: "fa-undo-alt",
      title: "Retur Penjualan",
      subtitle: "Proses retur dari POS & Sales Order",
      description:
        "Kelola retur barang dari transaksi POS maupun Sales Order. Stok otomatis bertambah setelah retur disetujui.",
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
      images: ["assets/img/POS_Report.png"],
      popular: true,
    },
    {
      icon: "fa-stream",
      title: "Laporan Arus Kas",
      subtitle: "Pantau cash flow dari transaksi POS",
      description:
        "Semua transaksi POS otomatis masuk ke laporan arus kas. Tersedia tampilan harian, bulanan, dan tahunan.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_CashFlow.png"],
    },
    {
      icon: "fa-truck",
      title: "Manajemen Supplier",
      subtitle: "Data supplier terintegrasi",
      description:
        "Kelola data supplier lengkap dengan nama, alamat, telepon, email. Terintegrasi dengan Purchase Order.",
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
      images: ["assets/img/POS_Transfer.png"],
    },
  ],
  en: [
    {
      icon: "fa-shopping-cart",
      title: "Cashier Transaction",
      subtitle: "Fast & accurate sales processing",
      description:
        "Intuitive cashier interface to process sales transactions quickly. Supports manual input or barcode scanning, discount calculation, VAT, automatic change, and receipt printing.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Transaction.png"],
      popular: true,
    },
    {
      icon: "fa-barcode",
      title: "Barcode Scanning",
      subtitle: "Instant product input via barcode",
      description:
        "Supports CODE128, EAN-13, EAN-8, QR Code, and more. Auto-generate barcodes and bulk label printing.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_Barcode.png"],
    },
    {
      icon: "fa-wallet",
      title: "Multi Payment Methods",
      subtitle: "Cash, QRIS, Transfer, Cards",
      description:
        "Accept Cash, QRIS, Bank Transfer, Debit Card, Credit Card, and E-Wallet payments.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Payment.png"],
      popular: true,
    },
    {
      icon: "fa-boxes",
      title: "Stock & Warehouse",
      subtitle: "Real-time multi-warehouse inventory",
      description:
        "Monitor product stock in real-time per warehouse. Stock automatically deducted when a POS transaction completes.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Stock.png"],
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
        "Manage returns from POS transactions or Sales Orders. Stock automatically restocked after approval.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Return.png"],
    },
    {
      icon: "fa-chart-bar",
      title: "Sales Reports",
      subtitle: "Daily to yearly analytics",
      description:
        "Comprehensive sales reports: top products, per-customer breakdown, payment method analysis, and trends.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Report.png"],
      popular: true,
    },
    {
      icon: "fa-stream",
      title: "Cash Flow Report",
      subtitle: "Monitor cash flow from POS",
      description:
        "All POS transactions automatically appear in the cash flow report. Available in daily, monthly, and yearly views.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/POS_CashFlow.png"],
    },
    {
      icon: "fa-truck",
      title: "Supplier Management",
      subtitle: "Integrated supplier data",
      description:
        "Manage complete supplier data. Integrated with Purchase Orders for restocking.",
      color: "from-emerald-500 to-emerald-600",
      images: ["assets/img/POS_Supplier.png"],
    },
    {
      icon: "fa-exchange-alt",
      title: "Inter-Warehouse Transfer",
      subtitle: "Move stock between locations",
      description:
        "Easily transfer products between warehouses. Stock automatically updated at both warehouses after approval.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/POS_Transfer.png"],
    },
  ],
};

// ── FAQ data ──────────────────────────────────────────────
const faqData = {
  id: [
    {
      q: "Apakah inni Akun Digi bisa digunakan secara offline?",
      a: "Ya, 100% offline! inni Akun Digi adalah aplikasi desktop yang diinstall seperti software biasa di Windows. Setelah instalasi, tidak memerlukan koneksi internet sama sekali untuk operasional sehari-hari. Semua data tersimpan lokal di komputer Anda. Internet hanya diperlukan saat download installer awal (±150-300 MB) dan jika ada update aplikasi.",
      tags: ["acct"],
      icon: "fa-laptop-code",
    },
    {
      q: "Bagaimana cara install aplikasinya?",
      a: "Sangat mudah! Anda akan menerima file installer (.exe) sekitar 150-300 MB. Cukup double-click file tersebut, ikuti wizard instalasi seperti install software biasa (Next → Next → Finish), dan aplikasi siap digunakan. Tidak perlu setup server, database, atau konfigurasi teknis apapun.",
      tags: ["acct", "pos"],
      icon: "fa-download",
    },
    {
      q: "Apakah data keuangan saya aman?",
      a: "Sangat aman! Berbeda dengan software berbasis cloud, semua data Anda tersimpan 100% lokal di komputer Anda sendiri — tidak ada yang dikirim ke server kami atau internet. Anda memiliki kontrol penuh atas data. Kami menyediakan fitur backup manual yang bisa Anda simpan di flash disk atau hard disk eksternal.",
      tags: ["both"],
      icon: "fa-shield-alt",
    },
    {
      q: "Apakah perlu maintenance atau perpanjangan?",
      a: "TIDAK! Ini investasi sekali bayar. Setelah install, aplikasi jalan selamanya tanpa biaya bulanan/tahunan. Update aplikasi (fitur baru, bug fixes) gratis selamanya dan bersifat opsional — aplikasi tetap jalan normal meskipun tidak di-update.",
      tags: ["both"],
      icon: "fa-infinity",
    },
    {
      q: "Bisa diinstall di berapa komputer?",
      a: "Satu lisensi untuk 1 komputer sebagai server utama. Namun, komputer lain di kantor yang sama dapat mengakses aplikasi via jaringan LAN tanpa perlu install atau lisensi tambahan. Cocok untuk setup multi-user dalam satu kantor. Jika butuh install di lokasi/cabang berbeda, diperlukan lisensi terpisah.",
      tags: ["both"],
      icon: "fa-network-wired",
    },
    {
      q: "Spesifikasi komputer minimal yang dibutuhkan?",
      a: "Sangat ringan! Minimal: Windows 7/8/10/11 (32-bit atau 64-bit), RAM 2GB, Processor Dual Core, HDD 500 MB free space. Aplikasi sudah dioptimasi untuk berjalan lancar bahkan di komputer/laptop tua.",
      tags: ["both"],
      icon: "fa-server",
    },
    {
      q: "Apa perbedaan model Basic, Lengkap, Retail, dan Manufaktur?",
      a: "Basic cocok untuk pencatatan jurnal dan buku besar sederhana. Lengkap menambahkan laporan keuangan lengkap (laba rugi & neraca). Retail menambahkan manajemen stok barang dagangan. Manufaktur adalah paket terlengkap dengan fitur produksi dari bahan mentah hingga barang jadi. Semua model menggunakan installer yang sama, perbedaan hanya di fitur yang diaktifkan.",
      tags: ["acct"],
      icon: "fa-layer-group",
    },
    {
      q: "Bagaimana proses implementasi setelah pembelian?",
      a: "Setelah pembayaran: (1) Anda terima link download installer + license key via email, (2) Install di komputer dalam 5-10 menit, (3) Tim kami remote/visit untuk setup awal (COA, import data, training) dalam 1-3 hari kerja. Proses sangat smooth dan kami damping sampai Anda mahir.",
      tags: ["both"],
      icon: "fa-cogs",
    },
    {
      q: "Apakah inni POS bisa diintegrasikan dengan inni Akun Digi?",
      a: "Ya! Bahkan lebih mudah karena keduanya aplikasi desktop. Transaksi POS otomatis sync ke Akun Digi di komputer yang sama, atau bisa network sync jika install di komputer berbeda dalam 1 jaringan lokal (LAN). Tidak perlu internet untuk sinkronisasi.",
      tags: ["acct", "pos"],
      icon: "fa-link",
    },
    {
      q: "Bagaimana cara backup data?",
      a: "Aplikasi memiliki tombol 'Backup Database' yang langsung export semua data ke file .sql. Anda bisa simpan file backup ini di flash disk, Google Drive, atau hard disk eksternal. Restore juga sangat mudah dengan tombol 'Restore Database'. Rekomendasikan backup setiap minggu atau setelah transaksi penting.",
      tags: ["both"],
      icon: "fa-database",
    },
    {
      q: "Bagaimana jika komputer rusak atau ganti komputer?",
      a: "Tenang! Anda punya file backup data (lihat FAQ backup). Untuk pindah ke komputer baru: (1) Install aplikasi di komputer baru menggunakan installer yang sama, (2) Hubungi admin kami untuk request aktivasi license di komputer baru (license key tied to machine ID untuk keamanan), (3) Setelah admin approve, restore backup data Anda. Proses approval biasanya 1-24 jam kerja. License tetap valid selamanya.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
  ],
  en: [
    {
      q: "Can inni Akun Digi be used offline?",
      a: "Yes, 100% offline! inni Akun Digi is a desktop application installed like regular software on Windows. After installation, it doesn't require an internet connection at all for daily operations. All data is stored locally on your computer. Internet is only needed when downloading the initial installer (±150-300 MB) and for optional application updates.",
      tags: ["acct"],
      icon: "fa-laptop-code",
    },
    {
      q: "How do I install the application?",
      a: "Very easy! You will receive an installer file (.exe) around 150-300 MB. Simply double-click the file, follow the installation wizard like installing regular software (Next → Next → Finish), and the application is ready to use. No need to setup servers, databases, or any technical configuration.",
      tags: ["acct", "pos"],
      icon: "fa-download",
    },
    {
      q: "Is my financial data safe?",
      a: "Very safe! Unlike cloud-based software, all your data is stored 100% locally on your own computer — nothing is sent to our servers or the internet. You have full control over your data. We provide manual backup features that you can save to flash drives or external hard drives.",
      tags: ["both"],
      icon: "fa-shield-alt",
    },
    {
      q: "Is maintenance or renewal required?",
      a: "NO! This is a one-time payment. After installation, the application runs forever without monthly/annual fees. Application updates (new features, bug fixes) are free forever and optional — the application continues to work normally even if not updated.",
      tags: ["both"],
      icon: "fa-infinity",
    },
    {
      q: "How many computers can I install it on?",
      a: "One license for 1 computer as the main server. However, other computers in the same office can access the application via LAN network without needing separate installation or additional license. Perfect for multi-user setup in one office. If you need installation at different locations/branches, separate licenses are required.",
      tags: ["both"],
      icon: "fa-network-wired",
    },
    {
      q: "What are the minimum computer specifications required?",
      a: "Very lightweight! Minimum: Windows 7/8/10/11 (32-bit or 64-bit), 2GB RAM, Dual Core Processor, 500 MB HDD free space. The application is optimized to run smoothly even on old computers/laptops.",
      tags: ["both"],
      icon: "fa-server",
    },
    {
      q: "What is the difference between Basic, Complete, Retail, and Manufacturing models?",
      a: "Basic is suitable for simple journal and ledger recording. Complete adds full financial reports (P&L & balance sheet). Retail adds trading goods inventory management. Manufacturing is the most complete package with production features from raw materials to finished goods. All models use the same installer, the difference is only in the features activated.",
      tags: ["acct"],
      icon: "fa-layer-group",
    },
    {
      q: "What is the implementation process after purchase?",
      a: "After payment: (1) You receive download link for installer + license key via email, (2) Install on computer in 5-10 minutes, (3) Our team provides remote/on-site setup (COA, data import, training) within 1-3 business days. The process is very smooth and we accompany you until you're proficient.",
      tags: ["both"],
      icon: "fa-cogs",
    },
    {
      q: "Can inni POS be integrated with inni Akun Digi?",
      a: "Yes! Even easier because both are desktop applications. POS transactions automatically sync to Akun Digi on the same computer, or can network sync if installed on different computers within 1 local network (LAN). No internet needed for synchronization.",
      tags: ["acct", "pos"],
      icon: "fa-link",
    },
    {
      q: "How do I backup data?",
      a: "The application has a 'Backup Database' button that directly exports all data to a .sql file. You can save this backup file to flash drive, Google Drive, or external hard drive. Restore is also very easy with the 'Restore Database' button. We recommend backing up weekly or after important transactions.",
      tags: ["both"],
      icon: "fa-database",
    },
    {
      q: "What if my computer breaks or I change computers?",
      a: "Don't worry! You have your backup data file (see backup FAQ). To move to a new computer: (1) Install the application on the new computer using the same installer, (2) Contact our admin to request license activation on the new computer (license key is tied to machine ID for security), (3) After admin approval, restore your backup data. Approval process typically takes 1-24 working hours. License remains valid forever.",
      tags: ["both"],
      icon: "fa-sync-alt",
    },
  ],
};

// ── COMPLETE Additional Translations (MERGED) ─────────────
const additionalTranslations = {
  id: {
    // Hero Badges
    desktopAppBadge: "Aplikasi Desktop",
    offlineBadge: "100% Offline",
    localDataBadge: "Data Lokal Aman",

    // Demo vs Full Comparison
    demoVsFullTitle: "Demo Online vs Aplikasi Desktop Asli",
    demoVsFullNote:
      "Demo online ini HANYA untuk melihat tampilan & fitur. Untuk pemakaian bisnis sebenarnya, gunakan aplikasi desktop yang 100% offline & unlimited.",
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
    // How It Works Section
    howItWorksLabel: "Bagaimana Cara Kerjanya?",
    howItWorksTitle: "Desktop App, Bukan Website Biasa",
    howItWorksSubtitle:
      "inni Akun Digi & POS adalah aplikasi desktop seperti Microsoft Word — install sekali, pakai selamanya, 100% offline",

    // Steps
    step1Title: "Download Installer",
    step1Desc:
      "Setelah pembayaran, terima link download file .exe (150-300 MB) + license key via email",
    step2Title: "Install di Windows",
    step2Desc:
      "Double-click installer → Next → Next → Finish. Seperti install software biasa, 5-10 menit selesai",
    step3Title: "Langsung Pakai!",
    step3Desc:
      "Buka aplikasi dari desktop shortcut, input license key, dan mulai kelola keuangan — 100% offline!",

    // Info Cards (6 cards)
    howItWorksCard1Title: "Data 100% Lokal",
    howItWorksCard1Desc:
      "Semua data tersimpan di komputer Anda, tidak ada yang dikirim ke cloud atau internet. Privacy & security maksimal.",
    howItWorksCard2Title: "Tidak Butuh Internet",
    howItWorksCard2Desc:
      "Aplikasi jalan normal tanpa koneksi internet. Cocok untuk area dengan internet tidak stabil atau kantor tanpa WiFi.",
    howItWorksCard3Title: "Pakai Selamanya",
    howItWorksCard3Desc:
      "Bayar sekali, pakai selamanya. Tidak ada biaya bulanan/tahunan. Update aplikasi gratis & opsional.",
    howItWorksCard4Title: "Akses Multi-User",
    howItWorksCard4Desc:
      "1 lisensi untuk 1 komputer server. Komputer lain di kantor bisa akses via LAN tanpa perlu install ulang atau lisensi tambahan.",
    howItWorksCard5Title: "License Protection",
    howItWorksCard5Desc:
      "License terikat dengan Machine ID untuk keamanan. Ganti PC? Hubungi admin kami untuk transfer license (1-24 jam kerja).",
    howItWorksCard6Title: "Backup Mudah",
    howItWorksCard6Desc:
      "Fitur backup 1-click untuk export semua data ke file .sql. Restore kapan saja tanpa ribet.",

    // License Transfer
    licenseTransferTitle: "Butuh Transfer License?",
    licenseTransferDesc:
      "Jika Anda perlu mengaktifkan license di komputer baru (upgrade PC, komputer rusak, dll), hubungi admin kami:",
    licenseTransferBtn: "Request Transfer License",

    // System Requirements
    requirementsLabel: "Spesifikasi Sistem",
    requirementsTitle: "Bisa Jalan di Laptop/PC Lawas Anda!",
    requirementsSubtitle:
      "Aplikasi sudah dioptimasi untuk performa ringan & cepat",
    minSpecs: "Spesifikasi Minimal",
    recSpecs: "Spesifikasi Rekomendasi",
    reqNote1: "Catatan Penting:",
    reqNote2:
      "• Aplikasi sudah include PHP & database built-in — tidak perlu install XAMPP/server terpisah",
    reqNote3:
      "• Tidak perlu install Microsoft Office — aplikasi sudah bisa export PDF & Excel langsung",
    reqNote4:
      "• Untuk multi-user dalam 1 kantor, cukup setup LAN biasa (tidak perlu internet)",

    // Sticky CTA
    "sticky-acct-text": "Preview Demo",
    "sticky-wa-text": "WhatsApp Kami",
  },

  en: {
    // Hero Badges
    desktopAppBadge: "Desktop Application",
    offlineBadge: "100% Offline",
    localDataBadge: "Local Data Secure",

    // Demo vs Full Comparison
    demoVsFullTitle: "Online Demo vs Real Desktop Application",
    demoVsFullNote:
      "This online demo is ONLY to see the interface & features. For real business use, use the desktop application that's 100% offline & unlimited.",
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
    demoVsBackupRestore: "Backup / Restore",
    demoVsBackupNo: "✗ Not possible",
    demoVsBackupYes: "✓ 1-click backup",
    demoVsSpeed: "Speed",
    demoVsSpeedInternet: "Depends on internet",
    demoVsSpeedFast: "✓ Super fast",
    demoVsCost: "Cost",
    demoVsCostFree: "✓ Free",
    demoVsCostOneTime: "One-time investment",
    // How It Works Section
    howItWorksLabel: "How Does It Work?",
    howItWorksTitle: "Desktop App, Not a Regular Website",
    howItWorksSubtitle:
      "inni Akun Digi & POS are desktop applications like Microsoft Word — install once, use forever, 100% offline",

    // Steps
    step1Title: "Download Installer",
    step1Desc:
      "After payment, receive download link for .exe file (150-300 MB) + license key via email",
    step2Title: "Install on Windows",
    step2Desc:
      "Double-click installer → Next → Next → Finish. Like installing regular software, 5-10 minutes done",
    step3Title: "Start Using!",
    step3Desc:
      "Open application from desktop shortcut, input license key, and start managing finances — 100% offline!",

    // Info Cards (6 cards)
    howItWorksCard1Title: "100% Local Data",
    howItWorksCard1Desc:
      "All data stored on your computer, nothing sent to cloud or internet. Maximum privacy & security.",
    howItWorksCard2Title: "No Internet Needed",
    howItWorksCard2Desc:
      "Application runs normally without internet connection. Perfect for areas with unstable internet or offices without WiFi.",
    howItWorksCard3Title: "Use Forever",
    howItWorksCard3Desc:
      "Pay once, use forever. No monthly/annual fees. Application updates are free & optional.",
    howItWorksCard4Title: "Multi-User Access",
    howItWorksCard4Desc:
      "1 license for 1 server computer. Other computers in the office can access via LAN without needing reinstallation or additional license.",
    howItWorksCard5Title: "License Protection",
    howItWorksCard5Desc:
      "License is tied to Machine ID for security. Changing PC? Contact our admin for license transfer (1-24 working hours).",
    howItWorksCard6Title: "Easy Backup",
    howItWorksCard6Desc:
      "1-click backup feature to export all data to .sql file. Restore anytime hassle-free.",

    // License Transfer
    licenseTransferTitle: "Need License Transfer?",
    licenseTransferDesc:
      "If you need to activate the license on a new computer (PC upgrade, broken computer, etc.), contact our admin:",
    licenseTransferBtn: "Request License Transfer",

    // System Requirements
    requirementsLabel: "System Specifications",
    requirementsTitle: "Works on Your Old Laptop/PC!",
    requirementsSubtitle:
      "Application optimized for lightweight & fast performance",
    minSpecs: "Minimum Specifications",
    recSpecs: "Recommended Specifications",
    reqNote1: "Important Notes:",
    reqNote2:
      "• Application includes built-in PHP & database — no need to install XAMPP/separate server",
    reqNote3:
      "• No need to install Microsoft Office — application can export PDF & Excel directly",
    reqNote4:
      "• For multi-user in 1 office, just setup regular LAN (no internet needed)",

    // Sticky CTA
    "sticky-acct-text": "Preview Demo",
    "sticky-wa-text": "WhatsApp Us",
  },
};

// ── Comparison & model data ───────────────────────────────
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
      feature: "Export PDF/Excel Kode Perkiraan",
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
      feature: "Export PDF/Excel Laporan Keuangan",
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
      manufakturNote: "(Barang Mentah, Jadi)",
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
    "Tipe <strong>Manufaktur</strong> disesuaikan untuk perusahaan produksi dengan pengelolaan stok barang mentah hingga jadi.",
  ],
  en: [
    "<strong>Basic</strong> type is suitable for simple recording and basic reporting.",
    "<strong>Complete</strong> type is ideal for companies with full accounting needs.",
    "<strong>Retail</strong> type is designed for trading businesses.",
    "<strong>Manufacturing</strong> type is tailored for production companies with raw to finished goods stock management.",
  ],
};

const modelSummaries = {
  id: [
    {
      key: "basic",
      title: "Basic",
      price: "Mulai Rp 2.500.000",
      tagline: "Pencatatan sederhana",
    },
    {
      key: "lengkap",
      title: "Lengkap",
      price: "Mulai Rp 3.500.000",
      tagline: "Laporan & analitik penuh",
      recommended: true,
    },
    {
      key: "retail",
      title: "Retail",
      price: "Mulai Rp 4.750.000",
      tagline: "Manajemen stok dagang",
    },
    {
      key: "manufaktur",
      title: "Manufaktur",
      price: "Mulai Rp 5.800.000",
      tagline: "Produksi & BOM",
    },
  ],
  en: [
    {
      key: "basic",
      title: "Basic",
      price: "From IDR 2,500,000",
      tagline: "Simple recording",
    },
    {
      key: "lengkap",
      title: "Complete",
      price: "From IDR 3,500,000",
      tagline: "Full reporting & analytics",
      recommended: true,
    },
    {
      key: "retail",
      title: "Retail",
      price: "From IDR 4,750,000",
      tagline: "Inventory for trading",
    },
    {
      key: "manufaktur",
      title: "Manufacturing",
      price: "From IDR 5,800,000",
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

// ══ 1. SCROLL PROGRESS BAR ══════════════════════════════════
function updateScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + "%" : "0%";
}

// ══ 2. TAB SWITCHER + DEEP LINK ═════════════════════════════
function switchTab(tab) {
  currentTabCtx = tab;
  const acctPanel = document.getElementById("tab-acct");
  const posPanel = document.getElementById("tab-pos");
  const acctBtn = document.getElementById("tab-acct-btn");
  const posBtn = document.getElementById("tab-pos-btn");
  if (!acctBtn) return;

  [acctPanel, posPanel].forEach((p) => p && p.classList.remove("active"));
  [acctBtn, posBtn].forEach(
    (b) => b && b.classList.remove("active-acct", "active-pos")
  );

  if (tab === "acct") {
    acctPanel && acctPanel.classList.add("active");
    acctBtn.classList.add("active-acct");
    history.replaceState(null, "", "#akun");
  } else {
    posPanel && posPanel.classList.add("active");
    posBtn.classList.add("active-pos");
    history.replaceState(null, "", "#pos");
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
  setTimeout(addPopularBadges, 80);
}
window.switchTab = switchTab;

function applyDeepLink() {
  const hash = window.location.hash;
  if (hash === "#pos") {
    switchTab("pos");
    setTimeout(() => {
      const el = document.getElementById("produk-tabs");
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  } else if (hash === "#akun") {
    switchTab("acct");
  }
}

// ══ 3. TOAST ════════════════════════════════════════════════
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
      ${
        actionHref
          ? `<a href="${actionHref}" target="_blank" rel="noopener noreferrer" class="toast-action">${actionText} <i class="fas fa-arrow-right text-xs"></i></a>`
          : ""
      }
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
  setTimeout(() => el.remove(), 380);
}

// ══ 4. MODEL CARDS + HIGHLIGHT + PRE-FILL TOAST ═════════════
function highlightModelColumn(modelKey) {
  chosenModel = modelKey;
  const colMap = { basic: 1, lengkap: 2, retail: 3, manufaktur: 4 };
  const col = colMap[modelKey];
  if (!col) return;

  document
    .querySelectorAll(".highlighted-col")
    .forEach((e) => e.classList.remove("highlighted-col"));

  const table = document.querySelector("#model-comparison table");
  if (table) {
    const th = table.querySelector(`thead th:nth-child(${col + 1})`);
    if (th) th.classList.add("highlighted-col");
    table
      .querySelectorAll(`tbody td:nth-child(${col + 1})`)
      .forEach((td) => td.classList.add("highlighted-col"));
    const wrapper = document.querySelector("#model-comparison .max-w-5xl");
    if (wrapper && th)
      wrapper.scrollTo({
        left: Math.max(
          0,
          th.offsetLeft + th.offsetWidth / 2 - wrapper.clientWidth / 2
        ),
        behavior: "smooth",
      });
  }

  document.querySelectorAll(".compare-cta").forEach((btn) => {
    btn.classList.toggle("chosen", btn.dataset.model === modelKey);
    btn.textContent =
      btn.dataset.model === modelKey
        ? currentLang === "id"
          ? "✓ Dipilih"
          : "✓ Chosen"
        : currentLang === "id"
        ? "Pilih"
        : "Choose";
  });

  document
    .getElementById("model-comparison")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

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
      ? `Halo, saya tertarik dengan model ${name} di inni Akun Digi. Bisa minta info harga dan konsultasi lebih lanjut?`
      : `Hello, I'm interested in the ${name} model of inni Akun Digi. Can I get pricing info and a consultation?`
  );

  showToast({
    icon: "✅",
    title:
      currentLang === "id"
        ? `Model ${name} dipilih!`
        : `${name} model selected!`,
    msg:
      currentLang === "id"
        ? `Installer aplikasi desktop akan dikirim setelah pembayaran. Support penuh dari tim kami!`
        : `Desktop app installer will be sent after payment. Full support from our team!`,
    actionText:
      currentLang === "id" ? "Chat WhatsApp sekarang" : "Chat on WhatsApp now",
    actionHref: `https://wa.me/6287725113689?text=${waMsg}`,
  });
}
window.highlightModelColumn = highlightModelColumn;

function generateModelCards(lang) {
  const container = document.getElementById("model-cards");
  if (!container) return;
  container.innerHTML = "";
  modelSummaries[lang].forEach((m) => {
    const n = parseInt((m.price || "").replace(/\D/g, ""), 10);
    const display =
      !n || isNaN(n)
        ? m.price
        : (n / 1e6).toFixed(1).replace(/\.0$/, "") +
          (lang === "id" ? " Jt (Rp)" : " M (IDR)");
    const note =
      !n || isNaN(n)
        ? ""
        : lang === "id"
        ? "* Harga dapat dinegosiasikan"
        : "* Price negotiable";
    const isChosen = chosenModel === m.key;
    container.innerHTML += `
      <div class="model-card p-5 rounded-2xl shadow-lg bg-white ${
        m.recommended ? "recommended" : ""
      }">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-lg font-bold">${m.title}</h4>
          ${
            m.recommended
              ? `<span class="px-2.5 py-0.5 text-xs rounded-full bg-blue-600 text-white font-semibold">${
                  lang === "id" ? "Rekomendasi" : "Recommended"
                }</span>`
              : ""
          }
        </div>
        <div class="text-xl font-bold text-blue-800">${display}</div>
        <div class="text-xs text-gray-500 mb-1">${m.tagline}</div>
        ${
          note
            ? `<div class="text-xs text-gray-400 mb-3">${note}</div>`
            : '<div class="mb-3"></div>'
        }
        <div class="flex items-center justify-between mt-2">
          <a href="#contact" class="text-xs text-blue-600 font-medium hover:underline">${
            lang === "id" ? "Hubungi Sales" : "Contact Sales"
          }</a>
          <button class="compare-cta text-white px-4 py-1.5 rounded-lg text-xs font-bold ${
            isChosen ? "chosen" : ""
          }" data-model="${m.key}">
            ${
              isChosen
                ? lang === "id"
                  ? "✓ Dipilih"
                  : "✓ Chosen"
                : lang === "id"
                ? "Pilih"
                : "Choose"
            }
          </button>
        </div>
      </div>`;
  });
  container.querySelectorAll(".compare-cta").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      highlightModelColumn(btn.dataset.model);
    })
  );
}

function generateComparisonTable(lang) {
  const tbody = document.getElementById("comparison-table-body");
  if (!tbody) return;
  const check = `<span class="feature-badge included"><i class="fas fa-check"></i></span>`;
  const cross = `<span class="feature-badge excluded"><i class="fas fa-times"></i></span>`;
  tbody.innerHTML = "";
  comparisonData[lang].forEach((r, i) => {
    const bg = i % 2 === 0 ? "bg-gray-50" : "bg-white";
    tbody.innerHTML += `<tr class="${bg} hover:bg-blue-50 transition-colors">
      <td class="py-3 px-5 text-gray-700 font-medium sticky-col text-sm">${
        r.feature
      }</td>
      <td class="py-3 px-5 text-center">${r.basic ? check : cross}</td>
      <td class="py-3 px-5 text-center">${r.lengkap ? check : cross}</td>
      <td class="py-3 px-5 text-center">${r.retail ? check : cross}${
      r.retailNote
        ? `<div class="text-xs text-gray-500 mt-0.5">${r.retailNote}</div>`
        : ""
    }</td>
      <td class="py-3 px-5 text-center">${r.manufaktur ? check : cross}${
      r.manufakturNote
        ? `<div class="text-xs text-gray-500 mt-0.5">${r.manufakturNote}</div>`
        : ""
    }</td>
    </tr>`;
  });
}

function generateModelNotes(lang) {
  const ul = document.getElementById("model-notes");
  if (!ul) return;
  ul.innerHTML = "";
  modelNotes[lang].forEach((n) => {
    ul.innerHTML += `<li class="flex items-start gap-2"><i class="fas fa-check text-blue-600 mt-0.5 flex-shrink-0 text-sm"></i><span>${n}</span></li>`;
  });
}

// ══ 5. FEATURE CARDS + "POPULER" BADGE ══════════════════════
function generateFeatures(lang) {
  const grid = document.getElementById("features-grid");
  if (!grid) return;
  const viewTxt = lang === "id" ? "Lihat Visual" : "View Interface";
  grid.innerHTML = "";
  featuresData[lang].forEach((f, i) => {
    grid.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${
        (i % 3) + 1
      }">
        ${f.popular ? '<span class="badge-popular">🔥 Populer</span>' : ""}
        <div class="w-12 h-12 bg-gradient-to-r ${
          f.color
        } rounded-xl flex items-center justify-center mb-3 shadow-lg">
          <i class="fas ${f.icon} text-2xl text-white"></i>
        </div>
        <h3 class="text-base font-bold text-gray-800 mb-2">${f.title}</h3>
        <p class="text-gray-600 text-sm mb-3">${f.desc}</p>
        <button class="view-feature-btn text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1.5 transition-colors text-sm" data-index="${i}">
          <span>${viewTxt}</span><i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  grid
    .querySelectorAll(".view-feature-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        openFeatureModal(+btn.dataset.index, "acct")
      )
    );
}

function generatePosFeatures(lang) {
  const grid = document.getElementById("pos-features-grid");
  if (!grid) return;
  const viewTxt = lang === "id" ? "Lihat Visual" : "View Interface";
  grid.innerHTML = "";
  posFeatures[lang].forEach((f, i) => {
    grid.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${
        (i % 3) + 1
      }">
        ${
          f.popular
            ? '<span class="badge-popular pos-badge">🔥 Populer</span>'
            : ""
        }
        <div class="w-12 h-12 bg-gradient-to-r ${
          f.color
        } rounded-xl flex items-center justify-center mb-3 shadow-lg">
          <i class="fas ${f.icon} text-2xl text-white"></i>
        </div>
        <h3 class="text-base font-bold text-gray-800 mb-1">${f.title}</h3>
        <p class="text-sm text-gray-400 font-medium mb-2">${f.subtitle}</p>
        <p class="text-gray-600 text-sm mb-3">${f.description}</p>
        <button class="view-pos-feature-btn text-green-600 hover:text-green-800 font-semibold flex items-center gap-1.5 transition-colors text-sm" data-pos-index="${i}">
          <span>${viewTxt}</span><i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  grid
    .querySelectorAll(".view-pos-feature-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        openFeatureModal(
          +btn.dataset["pos-index"] || +btn.dataset.posIndex,
          "pos"
        )
      )
    );
}
function addPopularBadges() {}

// ══ 6. FAQ ══════════════════════════════════════════════════
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
          `<span class="faq-tag ${t}"><i class="fas fa-tag"></i>${tagLabel[t][lang]}</span>`
      )
      .join("");
    list.innerHTML += `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
          <span class="faq-question-text"><i class="fas ${item.icon} text-blue-400 mr-2 text-sm"></i>${item.q}</span>
          <span class="faq-icon"><i class="fas fa-plus text-xs"></i></span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}">
          <div class="faq-answer-inner">
            <div class="mb-2">${tags}</div>
            ${item.a}
          </div>
        </div>
      </div>`;
  });
}
function toggleFaq(idx) {
  document.querySelectorAll(".faq-item").forEach((item, i) => {
    const isTarget = i === idx;
    const willOpen = isTarget && !item.classList.contains("open");
    item.classList.toggle("open", isTarget && willOpen);
    const btn = item.querySelector(".faq-question");
    if (btn) btn.setAttribute("aria-expanded", String(isTarget && willOpen));
  });
}
window.toggleFaq = toggleFaq;

// ══ 7. EXIT INTENT ══════════════════════════════════════════
function showExitIntent() {
  if (exitShown || exitDismissed) return;
  exitShown = true;
  document.getElementById("exit-intent")?.classList.add("show");
  setTimeout(hideExitIntent, 14000);
}
function hideExitIntent() {
  document.getElementById("exit-intent")?.classList.remove("show");
}

document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 10 && !exitDismissed && timeOnPage > 15) showExitIntent();
});
setInterval(() => {
  timeOnPage++;
  if (timeOnPage === 60 && !exitDismissed) showExitIntent();
}, 1000);
document.getElementById("exit-close-btn")?.addEventListener("click", () => {
  exitDismissed = true;
  hideExitIntent();
});

// ══ 8. MODAL ════════════════════════════════════════════════
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
      carousel.innerHTML += `<div class="min-w-full flex items-center justify-center modal-image-container">
        <img src="${src}" alt="${f.title} ${
        i + 1
      }" class="modal-image" loading="lazy"
             onerror="this.src='https://via.placeholder.com/800x500/3b82f6/ffffff?text=${encodeURIComponent(
               f.title
             )}'">
      </div>`;
      dots.innerHTML += `<button class="modal-carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-200 ${
        i === 0 ? "bg-blue-600 w-7" : "bg-gray-300"
      }" data-index="${i}"></button>`;
    });
    dots.querySelectorAll(".modal-carousel-dot").forEach((d) =>
      d.addEventListener("click", () => {
        currentCarouselIdx = +d.dataset.index;
        updateCarousel();
      })
    );
  } else {
    carousel.innerHTML = `<div class="min-w-full flex items-center justify-center bg-gray-100 rounded-lg" style="min-height:360px;">
      <div class="text-center text-gray-500"><i class="fas fa-image text-5xl mb-3"></i><p>${
        currentLang === "id"
          ? "Visual akan segera tersedia"
          : "Screenshots coming soon"
      }</p></div></div>`;
  }

  document.getElementById("feature-modal").classList.remove("hidden");
  document.getElementById("feature-modal").classList.add("flex");
  document.body.style.overflow = "hidden";
  updateCarousel();
}
function updateCarousel() {
  document.getElementById("modal-carousel").style.transform = `translateX(-${
    currentCarouselIdx * 100
  }%)`;
  document.querySelectorAll(".modal-carousel-dot").forEach((d, i) => {
    d.className = `modal-carousel-dot rounded-full transition-all duration-200 ${
      i === currentCarouselIdx
        ? "bg-blue-600 w-7 h-2.5"
        : "bg-gray-300 w-2.5 h-2.5"
    }`;
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

// ══ LANGUAGE ═════════════════════════════════════════════════
function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update main translations
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const k = el.dataset.translate;
    const t = translations[lang][k] || additionalTranslations[lang][k];
    if (t !== undefined) {
      String(t).includes("<") ? (el.innerHTML = t) : (el.textContent = t);
    }
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

  // Accounting badge & flow steps
  const badge = document.getElementById("accounting-badge-text");
  if (badge)
    badge.textContent =
      lang === "id"
        ? "inni Akun Digi — Perbandingan Model Akuntansi"
        : "inni Akun Digi — Accounting Model Comparison";
  const steps = {
    id: ["Pilih Model", "Bandingkan Fitur", 'Klik "Pilih"', "Hubungi Sales"],
    en: ["Choose Model", "Compare Features", 'Click "Choose"', "Contact Sales"],
  };
  ["flow-step1", "flow-step2", "flow-step3", "flow-step4"].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = steps[lang][i];
  });

  // POS new badge text
  const posNewBadge = document.getElementById("pos-new-badge");
  if (posNewBadge && !posBadgeHidden)
    posNewBadge.textContent = lang === "id" ? "Baru!" : "New!";

  // FAQ labels
  const faqBadge = document.getElementById("faq-badge-text");
  if (faqBadge)
    faqBadge.textContent =
      lang === "id" ? "Pertanyaan Umum" : "Common Questions";
  const faqTitle = document.getElementById("faq-title");
  if (faqTitle) faqTitle.textContent = "Frequently Asked Questions";
  const faqSubtitle = document.getElementById("faq-subtitle");
  if (faqSubtitle)
    faqSubtitle.textContent =
      lang === "id"
        ? "Jawaban dari pertanyaan yang paling sering ditanyakan"
        : "Answers to the most frequently asked questions";
  const faqMore = document.getElementById("faq-more-text");
  if (faqMore)
    faqMore.textContent =
      lang === "id" ? "Masih ada pertanyaan lain?" : "Still have questions?";
  const faqWa = document.getElementById("faq-wa-text");
  if (faqWa)
    faqWa.textContent =
      lang === "id" ? "Tanya via WhatsApp" : "Ask via WhatsApp";

  // Exit intent text
  const exitTitle = document.getElementById("exit-title");
  if (exitTitle)
    exitTitle.textContent =
      lang === "id"
        ? "Masih ragu? Kami siap membantu!"
        : "Still unsure? We're here to help!";
  const exitMsg = document.getElementById("exit-msg");
  if (exitMsg)
    exitMsg.textContent =
      lang === "id"
        ? "Chat langsung dengan tim kami — gratis, tanpa komitmen."
        : "Chat directly with our team — free, no commitment.";
  const exitCta = document.getElementById("exit-cta-text");
  if (exitCta)
    exitCta.textContent =
      lang === "id" ? "Chat via WhatsApp →" : "Chat via WhatsApp →";
}

// ══ SCROLL & NAV ═════════════════════════════════════════════
function updateActiveNav() {
  const scrollPos = window.pageYOffset + 100;
  let current = "";
  document.querySelectorAll("section").forEach((s) => {
    if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight)
      current = s.id;
  });
  document
    .querySelectorAll(".nav-item")
    .forEach((n) =>
      n.classList.toggle("active", n.getAttribute("href") === "#" + current)
    );
}

// ══ EVENT LISTENERS ══════════════════════════════════════════
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
    b.addEventListener("click", () => updateLanguage(b.dataset.lang))
  );
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      t.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("mobile-menu")?.classList.add("hidden");
      document.getElementById("mobile-menu")?.classList.remove("show");
    }
  })
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
let touchStartX = 0;
document
  .getElementById("modal-carousel")
  ?.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
document.getElementById("modal-carousel")?.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) document.getElementById("modal-next-btn")?.click();
    else document.getElementById("modal-prev-btn")?.click();
  }
});
document
  .getElementById("back-to-top")
  ?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
document.getElementById("video-card")?.addEventListener("click", () => {
  const iframe = document.getElementById("demo-iframe"),
    overlay = document.getElementById("play-overlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 400);
  }
  if (iframe && !iframe.src.includes("autoplay")) iframe.src += "&autoplay=1";
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
  document.getElementById("header")?.classList.toggle("shadow-2xl", y > 100);
});
window.addEventListener("hashchange", applyDeepLink);

// ══ SCROLL REVEAL ════════════════════════════════════════════
const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.08 }
);
document.querySelectorAll("section").forEach((s) => {
  s.classList.add("scroll-section");
  sectionObserver.observe(s);
});

// ══ FORM ════════════════════════════════════════════════════
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxmVazpB1t-P-TeIYYuBMERr7K_7EmUDmLff_wacxKZ3CjxRoQL6O9N8envUwEyJv3X/exec";
const whatsappInput = document.querySelector('input[name="whatsapp"]');
if (whatsappInput) {
  whatsappInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
    if (this.value.startsWith("0")) this.value = this.value.substring(1);
    if (this.value.length > 13) this.value = this.value.substring(0, 13);
  });
}
document
  .getElementById("interestForm")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = document.getElementById("submitBtn"),
      origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
    const nama = this.nama.value.trim(),
      email = this.email.value.trim().toLowerCase(),
      waRaw = this.whatsapp.value.trim(),
      wa = waRaw ? "+62" + waRaw : "";
    function reset() {
      btn.disabled = false;
      btn.innerHTML = origHTML;
    }
    if (!nama || !email) {
      alert("Nama dan Email wajib diisi!");
      reset();
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      alert("Harap gunakan alamat Gmail yang valid!");
      reset();
      return;
    }
    if (waRaw && (waRaw.length < 9 || waRaw.length > 13)) {
      alert("Nomor WhatsApp tidak valid (9-13 digit)!");
      reset();
      return;
    }
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: `nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(
          email
        )}&whatsapp=${encodeURIComponent(wa)}`,
        redirect: "follow",
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const parsed = JSON.parse(await res.text());
      if (parsed.result === "success") {
        this.classList.add("hidden");
        document.getElementById("successMessage").classList.remove("hidden");
        this.reset();
      } else throw new Error(parsed.message || "Error");
    } catch (err) {
      alert(`Gagal mengirim data. Coba via WhatsApp.\n\nError: ${err.message}`);
    } finally {
      reset();
    }
  });

// ══ INIT ════════════════════════════════════════════════════
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage("id");
  applyDeepLink();
  updateScrollProgress();
});
