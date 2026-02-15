/* ============================================================
   inni Akun Digi — Main JS (Revisi UX)
   ============================================================ */

// ── Translations ──────────────────────────────────────────
const translations = {
  id: {
    headerTitle: "PT. Integrasindo Multi Kreasi",
    headerSlogan:
      '"Laporan Keuangan & Pajak Praktis untuk Semua Skala Bisnis & Organisasi"',
    navHome: "Beranda",
    navServices: "Layanan",
    navContact: "Kontak",
    appsLabel: "Produk",
    navComparison: "Model",
    introTitle: "Selamat Datang di PT. Integrasindo Multi Kreasi",
    introText:
      "Kami menyediakan solusi keuangan dan pajak yang praktis dan terpercaya bagi UMKM, Koperasi, serta berbagai organisasi untuk mendukung pengelolaan keuangan yang lebih efisien.",
    ctaDemoAcct: "Coba Demo Akun Digi",
    ctaDemoPos: "Coba Demo POS",
    heroproof: "100% Gratis · Tanpa Registrasi · Akses Instan",
    tryDemoButton: "COBA DEMO SEKARANG",
    tryDemoButton2: "Gratis & Tanpa Registrasi",
    demoCtaTitle: "🎯 Jangan Hanya Menonton—",
    demoCtaSecTitle: "Rasakan Sendiri!",
    demoCtaSubtitle: "Coba semua fitur premium tanpa bayar sepeser pun",
    demoFeature1: "100% Gratis",
    demoFeature1Desc: "Tidak perlu kartu kredit",
    demoFeature2: "Akses Instan",
    demoFeature2Desc: "Tanpa registrasi/login",
    demoFeature3: "Fitur Lengkap",
    demoFeature3Desc: "Semua menu bisa dicoba*",
    demoDisclaimer:
      "*Demo memiliki batasan: data tidak tersimpan permanen & beberapa fitur dibatasi. Versi penuh memberikan akses unlimited + support selamanya.",
    afterDemo: "Sudah puas mencoba?",
    compareModels: "Bandingkan paket & pilih yang sesuai",
    servicesTitle: "Layanan Kami",
    servicesSubtitle: "Dukungan komprehensif untuk kesuksesan bisnis Anda",
    service1Title: "Website Laporan Keuangan",
    service1Desc:
      "Penyediaan website digital untuk laporan keuangan yang akurat.",
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
    featuresTitle: "Fitur Website inni Akun Digi",
    featuresSubtitle:
      "Solusi lengkap untuk semua kebutuhan akuntansi bisnis Anda",
    benefitsTitle: "Mengapa Memilih inni?",
    benefitsSubtitle: "Keunggulan yang membuat kami berbeda",
    benefit1: "Mudah digunakan, bahkan untuk pemula.",
    benefit2: "Data keuangan yang akurat dan terorganisasi.",
    benefit3: "Solusi yang hemat waktu dan biaya.",
    benefit4: "Pelatihan di lokasi untuk adopsi yang mulus.",
    comparisonTitle: "Perbandingan Model Website",
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
      "Website akuntansi digital dengan fitur lengkap dan pelatihan on-site",
    footerOffice: "Kantor Kami",
    footerQuickLinks: "Tautan Cepat",
    footerHome: "Beranda",
    footerServices: "Layanan",
    footerContact: "Kontak",
    footerViewMap: "Lihat di Google Maps",
    posDemoFeatureTitle: "Fitur POS inni",
    posDemoFeatureSubtitle: "Semua yang Anda butuhkan untuk kasir modern",
    posDemoDisclaimer:
      "*Demo POS memiliki batasan: data tidak tersimpan permanen & beberapa fitur dibatasi. Versi penuh memberikan akses unlimited + support selamanya.",
    posDemoCta: "🛒 Coba Langsung—",
    posDemoCtaSec: "Gratis Tanpa Registrasi!",
    posDemoSubtitle: "Sistem kasir modern untuk bisnis retail Anda",
    posDemoCtaButton: "COBA DEMO POS SEKARANG",
    appsTitle: "Satu Ekosistem, Dua Solusi Bisnis",
    appsSubtitle:
      "Pilih sesuai kebutuhan, atau gunakan keduanya untuk bisnis yang lebih lengkap",
    app1Name: "inni Akun Digi",
    app1Desc:
      "Sistem akuntansi digital lengkap untuk UMKM, koperasi, dan organisasi. Dari jurnal hingga laporan keuangan otomatis.",
    app1Feature1: "Laporan Keuangan Otomatis",
    app1Feature2: "Piutang & Hutang Terintegrasi",
    app1Feature3: "4 Model: Basic, Lengkap, Retail, Manufaktur",
    app1Feature4: "Export PDF & Excel",
    app1Price: "Mulai dari Rp 2.500.000",
    app1DemoBtn: "Coba Demo",
    app1ModelBtn: "Lihat Model",
    app2Name: "inni POS",
    app2Desc:
      "Sistem kasir modern untuk bisnis retail. Transaksi cepat, stok terkontrol, laporan penjualan real-time.",
    app2Feature1: "Kasir Cepat dengan Scan Barcode",
    app2Feature2: "QRIS, Tunai, Transfer & Kartu",
    app2Feature3: "Stok Real-time + Retur Penjualan",
    app2Feature4: "Laporan Penjualan & Arus Kas",
    app2Price: "Hubungi kami untuk harga",
    app2DemoBtn: "Coba Demo",
    app2FeaturesBtn: "Lihat Fitur",
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
    appsLabel: "Products",
    navComparison: "Models",
    introTitle: "Welcome to PT. Integrasindo Multi Kreasi",
    introText:
      "We deliver practical and trusted financial and tax solutions for MSMEs, cooperatives, and all types of organizations—empowering more efficient financial management.",
    ctaDemoAcct: "Try Akun Digi Demo",
    ctaDemoPos: "Try POS Demo",
    heroproof: "100% Free · No Registration · Instant Access",
    tryDemoButton: "TRY DEMO NOW",
    tryDemoButton2: "Free & No Registration",
    demoCtaTitle: "🎯 Don't Just Watch—",
    demoCtaSecTitle: "Feel It Yourself!",
    demoCtaSubtitle: "Try all premium features without paying a dime",
    demoFeature1: "100% Free",
    demoFeature1Desc: "No credit card needed",
    demoFeature2: "Instant Access",
    demoFeature2Desc: "No registration/login",
    demoFeature3: "Full Features",
    demoFeature3Desc: "All menus available*",
    demoDisclaimer:
      "*Demo has limitations: data is not permanently saved & some features are limited. Full version provides unlimited access + lifetime support.",
    afterDemo: "Satisfied with the demo?",
    compareModels: "Compare packages & choose yours",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive support for your business success",
    service1Title: "Financial Reporting Website",
    service1Desc:
      "Provision of digital website for accurate financial reporting.",
    service2Title: "Tax Reporting",
    service2Desc: "Easy tax reporting for individuals and businesses.",
    service3Title: "Consultation & Training",
    service3Desc: "Accounting and tax consultation and training.",
    service4Title: "Business Legalization",
    service4Desc:
      "Registration of trademarks and business legalization (NIB, NPWP, etc.).",
    service5Title: "SPT PPh Badan Course",
    service5Desc:
      "Comprehensive course on preparing Corporate Income Tax Returns accurately and efficiently.",
    previewBadge: "App Preview",
    watchMoreVideos: "Want to see more?",
    ourYouTubeChannel: "our YouTube channel",
    featuresTitle: "inni Akun Digi Website Features",
    featuresSubtitle:
      "Complete solutions for all your business accounting needs",
    benefitsTitle: "Why Choose inni?",
    benefitsSubtitle: "Advantages that make us different",
    benefit1: "Easy to use, even for beginners.",
    benefit2: "Accurate and organized financial data.",
    benefit3: "Time and cost-efficient solutions.",
    benefit4: "On-site training for seamless adoption.",
    comparisonTitle: "Website Model Comparison",
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
    posDemoFeatureTitle: "inni POS Features",
    posDemoFeatureSubtitle: "Everything you need for a modern cashier",
    posDemoDisclaimer:
      "*POS Demo has limitations: data is not permanently saved & some features are limited. Full version provides unlimited access + lifetime support.",
    posDemoCta: "🛒 Try It Now—",
    posDemoCtaSec: "Free, No Registration!",
    posDemoSubtitle: "Modern cashier system for your retail business",
    posDemoCtaButton: "TRY POS DEMO NOW",
    appsTitle: "One Ecosystem, Two Business Solutions",
    appsSubtitle:
      "Choose what you need, or use both for a more complete business",
    app1Name: "inni Akun Digi",
    app1Desc:
      "Complete digital accounting system for MSMEs, cooperatives, and organizations. From journals to automatic financial reports.",
    app1Feature1: "Automatic Financial Reports",
    app1Feature2: "Integrated Receivables & Payables",
    app1Feature3: "4 Models: Basic, Complete, Retail, Manufacturing",
    app1Feature4: "Export PDF & Excel",
    app1Price: "Starting from IDR 2,500,000",
    app1DemoBtn: "Try Demo",
    app1ModelBtn: "View Models",
    app2Name: "inni POS",
    app2Desc:
      "Modern cashier system for retail businesses. Fast transactions, controlled inventory, real-time sales reports.",
    app2Feature1: "Fast Cashier with Barcode Scan",
    app2Feature2: "QRIS, Cash, Transfer & Cards",
    app2Feature3: "Real-time Stock + Sales Returns",
    app2Feature4: "Sales & Cash Flow Reports",
    app2Price: "Contact us for pricing",
    app2DemoBtn: "Try Demo",
    app2FeaturesBtn: "View Features",
    appsCombineNote:
      "💡 <strong>Use both</strong> — inni Accounting + inni POS integrated for more complete business management",
    oneTimeLabel: "One-time investment",
    posModelSingle: "1 Model — All Inclusive",
    posModelDesc:
      "inni POS comes in one complete package — no confusing model choices. All cashier, inventory, and report features are included in one price.",
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

// ── Features Data ─────────────────────────────────────────
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
        "assets/img/Import_Data(2).png",
        "assets/img/Export_Data(1).png",
        "assets/img/Export_Data(2).png",
        "assets/img/Export_Data(3).png",
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
      title: "Import & Export Data",
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
      images: ["assets/img/Stok.png", "assets/img/Stock_Detail.png"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Manage production processes from raw materials to finished goods with material tracking and cost management.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/Production.png"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Monitor your financial performance with real-time data visualizations, including profit, sales, and stock composition.",
      color: "from-violet-500 to-violet-600",
      images: [
        "assets/img/DashboardFinance.png",
        "assets/img/DashboardStock.png",
      ],
    },
  ],
};

// ── Comparison Data ───────────────────────────────────────
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

const posFeatures = {
  id: [
    {
      title: "Transaksi Kasir",
      subtitle: "Proses penjualan cepat & akurat",
      description:
        "Antarmuka kasir yang intuitif untuk memproses transaksi penjualan dengan cepat. Mendukung input produk manual maupun scan barcode, hitung diskon, PPN, kembalian otomatis, dan cetak struk langsung.",
      icon: "fas fa-shopping-cart",
      color: "green",
      images: [
        "assets/img/POS_Transaction.png",
        "assets/img/POS_Transaction_Detail.png",
      ],
    },
    {
      title: "Scan Barcode",
      subtitle: "Input produk instan via barcode",
      description:
        "Dukung berbagai format barcode: CODE128, EAN-13, EAN-8, QRCODE, dan lainnya. Generate label barcode otomatis dan cetak label massal.",
      icon: "fas fa-barcode",
      color: "teal",
      images: [
        "assets/img/POS_Barcode.png",
        "assets/img/POS_Barcode_Print.png",
      ],
    },
    {
      title: "Multi Metode Pembayaran",
      subtitle: "Tunai, QRIS, Transfer, Kartu",
      description:
        "Terima pembayaran dari berbagai metode: Tunai, QRIS, Transfer Bank, Kartu Debit, Kartu Kredit, dan E-Wallet. Hitung kembalian otomatis untuk pembayaran tunai.",
      icon: "fas fa-wallet",
      color: "emerald",
      images: ["assets/img/POS_Payment.png", "assets/img/POS_Payment_QRIS.png"],
    },
    {
      title: "Manajemen Stok & Gudang",
      subtitle: "Kontrol inventori multi-gudang",
      description:
        "Pantau stok produk secara real-time per gudang. Sistem otomatis mengurangi stok saat transaksi POS selesai. Notifikasi stok menipis dan laporan stok lengkap.",
      icon: "fas fa-boxes",
      color: "green",
      images: ["assets/img/POS_Stock.png", "assets/img/POS_Stock_Alert.png"],
    },
    {
      title: "Manajemen Pelanggan",
      subtitle: "Data & riwayat transaksi pelanggan",
      description:
        "Simpan data pelanggan lengkap: nama, alamat, nomor telepon, email, dan contact person. Lacak riwayat pembelian per pelanggan.",
      icon: "fas fa-user-friends",
      color: "teal",
      images: [
        "assets/img/POS_Customer.png",
        "assets/img/POS_Customer_History.png",
      ],
    },
    {
      title: "Retur Penjualan",
      subtitle: "Proses retur dari POS & Sales Order",
      description:
        "Kelola retur barang dari transaksi POS maupun Sales Order. Proses approval retur dan stok otomatis bertambah setelah retur disetujui.",
      icon: "fas fa-undo-alt",
      color: "emerald",
      images: ["assets/img/POS_Return.png", "assets/img/POS_Return_Detail.png"],
    },
    {
      title: "Laporan Penjualan",
      subtitle: "Analitik penjualan harian hingga tahunan",
      description:
        "Laporan penjualan komprehensif: top produk terlaris, breakdown per pelanggan, analisis metode pembayaran, dan tren penjualan harian/bulanan/tahunan.",
      icon: "fas fa-chart-bar",
      color: "green",
      images: ["assets/img/POS_Report.png", "assets/img/POS_Report_Chart.png"],
    },
    {
      title: "Laporan Arus Kas",
      subtitle: "Pantau cash flow dari transaksi POS",
      description:
        "Semua transaksi POS otomatis masuk ke laporan arus kas (cash in). Laporan tersedia dalam tampilan harian, bulanan, dan tahunan.",
      icon: "fas fa-stream",
      color: "teal",
      images: [
        "assets/img/POS_CashFlow.png",
        "assets/img/POS_CashFlow_Trend.png",
      ],
    },
    {
      title: "Manajemen Supplier",
      subtitle: "Data supplier terintegrasi",
      description:
        "Kelola data supplier lengkap dengan nama, alamat, telepon, email, dan contact person. Terintegrasi dengan Purchase Order untuk pengisian stok toko.",
      icon: "fas fa-truck",
      color: "emerald",
      images: [
        "assets/img/POS_Supplier.png",
        "assets/img/POS_Supplier_Detail.png",
      ],
    },
    {
      title: "Transfer Antar Gudang",
      subtitle: "Pindah stok antar lokasi bisnis",
      description:
        "Pindahkan stok produk antar gudang dengan mudah. Stok otomatis diperbarui di kedua gudang setelah approval.",
      icon: "fas fa-exchange-alt",
      color: "green",
      images: [
        "assets/img/POS_Transfer.png",
        "assets/img/POS_Transfer_Detail.png",
      ],
    },
  ],
  en: [
    {
      title: "Cashier Transaction",
      subtitle: "Fast & accurate sales processing",
      description:
        "Intuitive cashier interface to process sales transactions quickly. Supports manual product input or barcode scanning, discount calculation, VAT, automatic change, and instant receipt printing.",
      icon: "fas fa-shopping-cart",
      color: "green",
      images: ["assets/img/POS_Transaction.png"],
    },
    {
      title: "Barcode Scanning",
      subtitle: "Instant product input via barcode",
      description:
        "Supports multiple barcode formats: CODE128, EAN-13, EAN-8, QR Code, and more. Auto-generate barcodes and bulk label printing.",
      icon: "fas fa-barcode",
      color: "teal",
      images: ["assets/img/POS_Barcode.png"],
    },
    {
      title: "Multi Payment Methods",
      subtitle: "Cash, QRIS, Transfer, Cards",
      description:
        "Accept payments via Cash, QRIS, Bank Transfer, Debit Card, Credit Card, and E-Wallet. Automatic change calculation for cash payments.",
      icon: "fas fa-wallet",
      color: "emerald",
      images: ["assets/img/POS_Payment.png"],
    },
    {
      title: "Stock & Warehouse Management",
      subtitle: "Real-time multi-warehouse inventory",
      description:
        "Monitor product stock in real-time per warehouse. System automatically deducts stock when a POS transaction is completed. Low-stock alerts and full inventory reports.",
      icon: "fas fa-boxes",
      color: "green",
      images: ["assets/img/POS_Stock.png"],
    },
    {
      title: "Customer Management",
      subtitle: "Customer data & transaction history",
      description:
        "Store complete customer data: name, address, phone, email, and contact person. Track purchase history per customer.",
      icon: "fas fa-user-friends",
      color: "teal",
      images: ["assets/img/POS_Customer.png"],
    },
    {
      title: "Sales Returns",
      subtitle: "Process returns from POS & Sales Orders",
      description:
        "Manage product returns from POS transactions or Sales Orders. Approval-based return process, stock automatically restocked after approval.",
      icon: "fas fa-undo-alt",
      color: "emerald",
      images: ["assets/img/POS_Return.png"],
    },
    {
      title: "Sales Reports",
      subtitle: "Daily to yearly sales analytics",
      description:
        "Comprehensive sales reports: top-selling products, per-customer breakdown, payment method analysis, and daily/monthly/yearly trends.",
      icon: "fas fa-chart-bar",
      color: "green",
      images: ["assets/img/POS_Report.png"],
    },
    {
      title: "Cash Flow Report",
      subtitle: "Monitor cash flow from POS transactions",
      description:
        "All POS transactions automatically appear in the cash flow report. Available in daily, monthly, and yearly views.",
      icon: "fas fa-stream",
      color: "teal",
      images: ["assets/img/POS_CashFlow.png"],
    },
    {
      title: "Supplier Management",
      subtitle: "Integrated supplier data",
      description:
        "Manage complete supplier data: name, address, phone, email, and contact person. Integrated with Purchase Orders for restocking inventory.",
      icon: "fas fa-truck",
      color: "emerald",
      images: ["assets/img/POS_Supplier.png"],
    },
    {
      title: "Inter-Warehouse Transfer",
      subtitle: "Move stock between locations",
      description:
        "Easily transfer products between warehouses. Stock is automatically updated at both warehouses after approval.",
      icon: "fas fa-exchange-alt",
      color: "green",
      images: ["assets/img/POS_Transfer.png"],
    },
  ],
};

// ── State ─────────────────────────────────────────────────
let currentLang = "id";
let currentFeatureIndex = 0;
let currentModalCarouselIndex = 0;
let currentTabContext = "acct"; // 'acct' or 'pos'

// ── Tab Switcher ──────────────────────────────────────────
function switchTab(tab) {
  currentTabContext = tab;
  document.getElementById("tab-acct").classList.remove("active");
  document.getElementById("tab-pos").classList.remove("active");
  document
    .getElementById("tab-acct-btn")
    .classList.remove("active-acct", "active-pos");
  document
    .getElementById("tab-pos-btn")
    .classList.remove("active-acct", "active-pos");

  if (tab === "acct") {
    document.getElementById("tab-acct").classList.add("active");
    document.getElementById("tab-acct-btn").classList.add("active-acct");
  } else {
    document.getElementById("tab-pos").classList.add("active");
    document.getElementById("tab-pos-btn").classList.add("active-pos");
  }
}

// ── Generate features (accounting) ───────────────────────
function generateFeatures(lang) {
  const grid = document.getElementById("features-grid");
  if (!grid) return;
  grid.innerHTML = "";
  featuresData[lang].forEach((f, i) => {
    const delay = (i % 3) + 1;
    grid.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${delay}">
        <div class="w-12 h-12 bg-gradient-to-r ${
          f.color
        } rounded-xl flex items-center justify-center mb-3 shadow-lg">
          <i class="fas ${f.icon} text-2xl text-white"></i>
        </div>
        <h3 class="text-base font-bold text-gray-800 mb-2">${f.title}</h3>
        <p class="text-gray-600 text-sm mb-3">${f.desc}</p>
        <button class="view-feature-btn text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1.5 transition-colors text-sm" data-index="${i}">
          <span>${lang === "id" ? "Lihat Visual" : "View Interface"}</span>
          <i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  document.querySelectorAll(".view-feature-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      openFeatureModal(+btn.dataset.index, "acct")
    );
  });
}

// ── Generate POS features ─────────────────────────────────
function generatePosFeatures(lang) {
  const grid = document.getElementById("pos-features-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const colorMap = {
    green: "from-green-500 to-green-600",
    teal: "from-teal-500 to-teal-600",
    emerald: "from-emerald-500 to-emerald-600",
  };
  posFeatures[lang].forEach((f, i) => {
    const delay = (i % 3) + 1;
    const grad = colorMap[f.color] || "from-green-500 to-green-600";
    const icon = f.icon.replace(/^fas\s+/, "");
    grid.innerHTML += `
      <div class="feature-card bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${delay}">
        <div class="w-12 h-12 bg-gradient-to-r ${grad} rounded-xl flex items-center justify-center mb-3 shadow-lg">
          <i class="fas ${icon} text-2xl text-white"></i>
        </div>
        <h3 class="text-base font-bold text-gray-800 mb-1">${f.title}</h3>
        <p class="text-sm text-gray-400 font-medium mb-2">${f.subtitle}</p>
        <p class="text-gray-600 text-sm mb-3">${f.description}</p>
        <button class="view-pos-feature-btn text-green-600 hover:text-green-800 font-semibold flex items-center space-x-1.5 transition-colors text-sm" data-pos-index="${i}">
          <span>${lang === "id" ? "Lihat Visual" : "View Interface"}</span>
          <i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>`;
  });
  document.querySelectorAll(".view-pos-feature-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      openFeatureModal(+btn.dataset.posIndex, "pos")
    );
  });
}

// ── Modal ─────────────────────────────────────────────────
function openFeatureModal(idx, context) {
  currentFeatureIndex = idx;
  currentModalCarouselIndex = 0;
  currentTabContext = context;

  const f =
    context === "pos"
      ? posFeatures[currentLang][idx]
      : featuresData[currentLang][idx];

  document.getElementById("modal-feature-title").textContent = f.title;
  document.getElementById("modal-feature-desc").textContent =
    context === "pos" ? f.description : f.desc;

  const carousel = document.getElementById("modal-carousel");
  const dots = document.getElementById("modal-carousel-dots");
  carousel.innerHTML = "";
  dots.innerHTML = "";

  if (f.images && f.images.length) {
    f.images.forEach((src, i) => {
      carousel.innerHTML += `<div class="min-w-full flex items-center justify-center modal-image-container">
        <img src="${src}" alt="${f.title} ${
        i + 1
      }" class="modal-image max-w-full h-auto rounded-lg shadow-lg" loading="lazy"
             onerror="this.onerror=null;this.src='https://via.placeholder.com/800x500/3b82f6/ffffff?text=${encodeURIComponent(
               f.title
             )}'">
      </div>`;
      dots.innerHTML += `<button class="modal-carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-200 ${
        i === 0 ? "bg-blue-600 w-7" : "bg-gray-300"
      }" data-index="${i}"></button>`;
    });
    dots.querySelectorAll(".modal-carousel-dot").forEach((d) =>
      d.addEventListener("click", () => {
        currentModalCarouselIndex = +d.dataset.index;
        updateModalCarousel();
      })
    );
  } else {
    carousel.innerHTML = `<div class="min-w-full flex items-center justify-center bg-gray-100 rounded-lg" style="min-height:360px;">
      <div class="text-center text-gray-500"><i class="fas ${
        f.icon || "fa-image"
      } text-5xl mb-3"></i>
      <p>${
        currentLang === "id"
          ? "Visual akan segera tersedia"
          : "Screenshots coming soon"
      }</p></div></div>`;
  }

  document.getElementById("feature-modal").classList.remove("hidden");
  document.getElementById("feature-modal").classList.add("flex");
  document.body.style.overflow = "hidden";
  updateModalCarousel();
}

function updateModalCarousel() {
  document.getElementById("modal-carousel").style.transform = `translateX(-${
    currentModalCarouselIndex * 100
  }%)`;
  document.querySelectorAll(".modal-carousel-dot").forEach((d, i) => {
    d.classList.toggle("bg-blue-600", i === currentModalCarouselIndex);
    d.classList.toggle("w-7", i === currentModalCarouselIndex);
    d.classList.toggle("bg-gray-300", i !== currentModalCarouselIndex);
    d.classList.toggle("w-2.5", i !== currentModalCarouselIndex);
  });
}

function closeFeatureModal() {
  document.getElementById("feature-modal").classList.add("hidden");
  document.getElementById("feature-modal").classList.remove("flex");
  document.body.style.overflow = "auto";
}

function getModalImagesLength() {
  const f =
    currentTabContext === "pos"
      ? posFeatures[currentLang][currentFeatureIndex]
      : featuresData[currentLang][currentFeatureIndex];
  return f && f.images ? f.images.length : 0;
}

// ── Model cards ───────────────────────────────────────────
function formatPrice(price, lang) {
  const n = parseInt((price || "").replace(/\D/g, ""), 10);
  if (!n || isNaN(n)) return { display: price, note: "" };
  if (n >= 1000000) {
    const jt = n / 1000000;
    const s =
      (jt % 1 === 0 ? jt.toFixed(0) : jt.toFixed(1)) +
      (lang === "id" ? " Jt (Rp)" : " M (IDR)");
    return {
      display: s,
      note:
        lang === "id" ? "* Harga dapat dinegosiasikan" : "* Price negotiable",
    };
  }
  return { display: price, note: "" };
}

function generateModelCards(lang) {
  const container = document.getElementById("model-cards");
  if (!container) return;
  container.innerHTML = "";
  modelSummaries[lang].forEach((m) => {
    const { display, note } = formatPrice(m.price, lang);
    container.innerHTML += `
      <div class="model-card p-5 rounded-2xl shadow-lg bg-white transition-all hover:shadow-2xl ${
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
        <div class="mb-3">
          <div class="text-xl font-bold text-blue-800">${display}</div>
          <div class="text-xs text-gray-500">${m.tagline}</div>
          ${
            note
              ? `<div class="text-xs text-gray-400 mt-0.5">${note}</div>`
              : ""
          }
        </div>
        <div class="flex items-center justify-between mt-3">
          <a href="#contact" class="text-xs text-blue-600 font-medium hover:underline">${
            lang === "id" ? "Hubungi Sales" : "Contact Sales"
          }</a>
          <button class="compare-cta bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold" data-model="${
            m.key
          }">${lang === "id" ? "Pilih" : "Choose"}</button>
        </div>
      </div>`;
  });
  container.querySelectorAll(".compare-cta").forEach((btn) =>
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      highlightModelColumn(btn.dataset.model);
    })
  );
}

function generateComparisonTable(lang) {
  const tbody = document.getElementById("comparison-table-body");
  const check = `<span class="feature-badge included" title="${
    lang === "id" ? "Termasuk" : "Included"
  }"><i class="fas fa-check"></i></span>`;
  const cross = `<span class="feature-badge excluded" title="${
    lang === "id" ? "Tidak termasuk" : "Not included"
  }"><i class="fas fa-times"></i></span>`;
  tbody.innerHTML = "";
  comparisonData[lang].forEach((r, i) => {
    const bg = i % 2 === 0 ? "bg-gray-50" : "bg-white";
    tbody.innerHTML += `
      <tr class="${bg} hover:bg-blue-50 transition-colors">
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
  ul.innerHTML = "";
  modelNotes[lang].forEach((note) => {
    ul.innerHTML += `<li class="flex items-start space-x-2"><i class="fas fa-check text-blue-600 mt-0.5 flex-shrink-0 text-sm"></i><span>${note}</span></li>`;
  });
}

function highlightModelColumn(modelKey) {
  const map = { basic: 1, lengkap: 2, retail: 3, manufaktur: 4 };
  const col = map[modelKey];
  if (!col) return;
  document
    .querySelectorAll(".highlighted-col")
    .forEach((el) => el.classList.remove("highlighted-col"));
  const table = document.querySelector("#model-comparison table");
  if (!table) return;
  const th = table.querySelector(`thead th:nth-child(${col + 1})`);
  if (th) th.classList.add("highlighted-col");
  table
    .querySelectorAll(`tbody td:nth-child(${col + 1})`)
    .forEach((td) => td.classList.add("highlighted-col"));
  const wrapper = document.querySelector("#model-comparison .max-w-5xl");
  if (wrapper && th) {
    const left = th.offsetLeft + th.offsetWidth / 2 - wrapper.clientWidth / 2;
    wrapper.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }
  // Scroll ke section comparison + highlight visual
  const section = document.getElementById("model-comparison");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Language update ───────────────────────────────────────
function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.dataset.translate;
    if (translations[lang][key] !== undefined) {
      if (String(translations[lang][key]).includes("<")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  generateModelCards(lang);
  generateFeatures(lang);
  generateComparisonTable(lang);
  generateModelNotes(lang);
  generatePosFeatures(lang);

  // Update accounting badge & flow steps
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

  // Sticky CTA text
  const sAcct = document.getElementById("sticky-acct-text");
  const sWa = document.getElementById("sticky-wa-text");
  if (sAcct)
    sAcct.textContent = lang === "id" ? "Demo Akun Digi" : "Akun Digi Demo";
  if (sWa) sWa.textContent = lang === "id" ? "WhatsApp Kami" : "WhatsApp Us";
}

// ── Scroll & active nav ───────────────────────────────────
function updateActiveNav() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");
  const scrollPos = window.pageYOffset + 100;
  let current = "";
  sections.forEach((s) => {
    if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight)
      current = s.id;
  });
  navItems.forEach((n) => {
    n.classList.toggle("active", n.getAttribute("href") === `#${current}`);
  });
}

// ── Event listeners ───────────────────────────────────────
document.getElementById("menu-toggle").addEventListener("click", () => {
  const m = document.getElementById("mobile-menu");
  m.classList.toggle("hidden");
  m.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  const m = document.getElementById("mobile-menu");
  const t = document.getElementById("menu-toggle");
  if (!m.contains(e.target) && !t.contains(e.target)) {
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
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("mobile-menu").classList.add("hidden");
      document.getElementById("mobile-menu").classList.remove("show");
    }
  })
);

document
  .getElementById("feature-modal-close")
  .addEventListener("click", closeFeatureModal);
document.getElementById("feature-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeFeatureModal();
});

document.getElementById("modal-prev-btn").addEventListener("click", () => {
  const len = getModalImagesLength();
  if (len > 1) {
    currentModalCarouselIndex = (currentModalCarouselIndex - 1 + len) % len;
    updateModalCarousel();
  }
});
document.getElementById("modal-next-btn").addEventListener("click", () => {
  const len = getModalImagesLength();
  if (len > 1) {
    currentModalCarouselIndex = (currentModalCarouselIndex + 1) % len;
    updateModalCarousel();
  }
});

// Touch swipe modal
let touchStartX = 0;
document
  .getElementById("modal-carousel")
  .addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
document.getElementById("modal-carousel").addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) document.getElementById("modal-next-btn").click();
    else document.getElementById("modal-prev-btn").click();
  }
});

document
  .getElementById("back-to-top")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

document.getElementById("video-card").addEventListener("click", () => {
  const iframe = document.getElementById("demo-iframe");
  const overlay = document.getElementById("play-overlay");
  overlay.style.opacity = "0";
  setTimeout(() => (overlay.style.display = "none"), 400);
  if (!iframe.src.includes("autoplay")) iframe.src += "&autoplay=1";
});

// Scroll observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll("section").forEach((s) => {
  s.classList.add("scroll-section");
  observer.observe(s);
});

window.addEventListener("scroll", () => {
  updateActiveNav();
  const y = window.pageYOffset;
  const btn = document.getElementById("back-to-top");
  btn.style.opacity = y > 300 ? "1" : "0";
  btn.style.pointerEvents = y > 300 ? "auto" : "none";
  document.getElementById("header").classList.toggle("shadow-2xl", y > 100);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mobile-menu").classList.add("hidden");
    document.getElementById("mobile-menu").classList.remove("show");
    if (!document.getElementById("feature-modal").classList.contains("hidden"))
      closeFeatureModal();
  }
  if (!document.getElementById("feature-modal").classList.contains("hidden")) {
    if (e.key === "ArrowLeft")
      document.getElementById("modal-prev-btn").click();
    if (e.key === "ArrowRight")
      document.getElementById("modal-next-btn").click();
  }
});

// ── Form submit ───────────────────────────────────────────
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
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    const origHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';

    const nama = this.nama.value.trim();
    const email = this.email.value.trim().toLowerCase();
    const whatsappRaw = this.whatsapp.value.trim();
    const whatsapp = whatsappRaw ? "+62" + whatsappRaw : "";

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
    if (whatsappRaw && (whatsappRaw.length < 9 || whatsappRaw.length > 13)) {
      alert("Nomor WhatsApp tidak valid (9-13 digit)!");
      reset();
      return;
    }

    const payload = `nama=${encodeURIComponent(
      nama
    )}&email=${encodeURIComponent(email)}&whatsapp=${encodeURIComponent(
      whatsapp
    )}`;

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload,
        redirect: "follow",
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const parsed = JSON.parse(await response.text());
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

    function reset() {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origHTML;
    }
  });

// ── Init ──────────────────────────────────────────────────
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage("id");
});
