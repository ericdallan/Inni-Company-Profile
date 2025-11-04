const translations = {
  id: {
    headerTitle: "PT. Integrasindo Multi Kreasi (inni)",
    headerSlogan: '"Mempermudah Keuangan Anda"',
    navHome: "Beranda",
    navServices: "Layanan",
    navContact: "Kontak",
    introTitle: "Selamat Datang di PT. Integrasindo Multi Kreasi (inni)",
    introText:
      "Kami adalah perusahaan yang menyediakan solusi keuangan terpercaya untuk UMKM dan Koperasi, dengan layanan inovatif untuk mendukung pengelolaan keuangan Anda.",
    viewPrograms: "Lihat Program Kami",
    contactUs: "Hubungi Kami",
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
    featureColumn: "Fitur",
    completeColumn: "Lengkap",
    navFeatures: "Fitur Website",
    navComparison: "Perbandingan Model",
    manufacturingColumn: "Manufaktur",
    notesTitle: "Keterangan:",
    contactTitle: "Hubungi Kami",
    contactSubtitle:
      "Kami siap membantu Anda! Jangan ragu untuk menghubungi tim kami",
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi (inni). Seluruh hak cipta dilindungi.",
  },
  en: {
    headerTitle: "PT. Integrasindo Multi Kreasi (inni)",
    headerSlogan: '"Simplifying Your Finances"',
    navHome: "Home",
    navServices: "Services",
    navContact: "Contact",
    introTitle: "Welcome to PT. Integrasindo Multi Kreasi (inni)",
    introText:
      "We are a company providing trusted financial solutions for SMEs and Cooperatives, with innovative services to support your financial management.",
    viewPrograms: "View Our Programs",
    contactUs: "Contact Us",
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
    featureColumn: "Feature",
    completeColumn: "Complete",
    navFeatures: "Website Features",
    navComparison: "Model Comparison",
    manufacturingColumn: "Manufacturing",
    notesTitle: "Notes:",
    contactTitle: "Contact Us",
    contactSubtitle: "We are ready to help you! Feel free to contact our team",
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi (inni). All rights reserved.",
  },
};

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
      images: ["assets/img/Ar.png", "assets/img/AP_Detail.png"],
    },
    {
      icon: "fa-file-export",
      title: "Impor & Ekspor Data",
      desc: "Import data awal (COA, saldo awal, pelanggan, supplier) melalui Excel/CSV. Ekspor semua laporan ke PDF atau Excel dengan satu klik.",
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
      images: ["assets/img/coa1.jpg", "assets/img/coa2.jpg"],
    },
    {
      icon: "fa-ticket-alt",
      title: "Voucher Management",
      desc: "Create, edit, and track transaction vouchers such as purchases, sales, and transfers with automatic validation.",
      color: "from-purple-500 to-purple-600",
      images: ["assets/img/voucher1.jpg", "assets/img/voucher2.jpg"],
    },
    {
      icon: "fa-book-open",
      title: "General Ledger",
      desc: "Record all financial transactions in detail for accurate and organized reporting.",
      color: "from-green-500 to-green-600",
      images: ["assets/img/ledger1.jpg"],
    },
    {
      icon: "fa-money-bill-wave",
      title: "Accounts Receivable",
      desc: "Manage customer receivables with real-time tracking of invoices and payments.",
      color: "from-yellow-500 to-yellow-600",
      images: ["assets/img/receivable1.jpg"],
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Accounts Payable",
      desc: "Monitor and manage payment obligations to suppliers with an organized ledger.",
      color: "from-red-500 to-red-600",
      images: ["assets/img/payable1.jpg"],
    },
    {
      icon: "fa-file-export",
      title: "Import & Eksport Data",
      desc: "Import initial data (COA, opening balances, customers, suppliers) via Excel/CSV. Export any report to PDF or Excel in one click.",
      color: "from-indigo-500 to-indigo-600",
      images: ["assets/img/export1.jpg"],
    },
    {
      icon: "fa-balance-scale",
      title: "Trial Balance",
      desc: "Review account balances comprehensively to ensure accurate financial balancing.",
      color: "from-pink-500 to-pink-600",
      images: ["assets/img/trial1.jpg"],
    },
    {
      icon: "fa-chart-pie",
      title: "Financial Overview",
      desc: "View your business's cash flow and financial position in real-time.",
      color: "from-teal-500 to-teal-600",
      images: ["assets/img/balance1.jpg"],
    },
    {
      icon: "fa-chart-bar",
      title: "Profit and Loss",
      desc: "Analyze revenue and expenses with profit and loss reports to evaluate business performance.",
      color: "from-orange-500 to-orange-600",
      images: ["assets/img/profit1.jpg"],
    },
    {
      icon: "fa-boxes",
      title: "Stock",
      desc: "Manage and track your inventory easily, including stock inflows, outflows, and inter-warehouse transfers.",
      color: "from-cyan-500 to-cyan-600",
      images: ["assets/img/stock1.jpg", "assets/img/stock2.jpg"],
    },
    {
      icon: "fa-industry",
      title: "Production",
      desc: "Manage production processes from raw materials to finished goods with material tracking and production cost management.",
      color: "from-amber-500 to-amber-600",
      images: ["assets/img/production1.jpg"],
    },
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard",
      desc: "Monitor your financial performance with real-time data visualizations, including profit, sales, and stock composition.",
      color: "from-violet-500 to-violet-600",
      images: ["assets/img/dashboard1.jpg", "assets/img/dashboard2.jpg"],
    },
  ],
};

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
      price: "Mulai Rp 1.200.000",
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
      price: "Mulai Rp 4.200.000",
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
      price: "From IDR 1.200.000",
      tagline: "Simple recording",
    },
    {
      key: "lengkap",
      title: "Complete",
      price: "From IDR 3.500.000",
      tagline: "Full reporting & analytics",
      recommended: true,
    },
    {
      key: "retail",
      title: "Retail",
      price: "From IDR 4.200.000",
      tagline: "Inventory for trading",
    },
    {
      key: "manufaktur",
      title: "Manufacturing",
      price: "From IDR 5.800.000",
      tagline: "Production & BOM",
    },
  ],
};

let currentLang = "id";
let currentFeatureIndex = 0;
let currentModalCarouselIndex = 0;

function generateFeatures(lang) {
  const grid = document.getElementById("features-grid");
  grid.innerHTML = "";
  featuresData[lang].forEach((f, i) => {
    const delay = (i % 3) + 1;
    grid.innerHTML += `
                    <div class="feature-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-delay-${delay}">
                        <div class="w-16 h-16 bg-gradient-to-r ${
                          f.color
                        } rounded-xl flex items-center justify-center mb-4 shadow-lg">
                            <i class="fas ${f.icon} text-3xl text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3">${
                          f.title
                        }</h3>
                        <p class="text-gray-600 mb-4">${f.desc}</p>
                        <button class="view-feature-btn text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2 transition-colors" data-index="${i}">
                            <span>${
                              lang === "id" ? "Lihat Visual" : "View Interface"
                            }</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>`;
  });

  document.querySelectorAll(".view-feature-btn").forEach((btn) => {
    btn.addEventListener("click", () => openFeatureModal(+btn.dataset.index));
  });
}

function formatPriceAndNote(priceStr, lang = "id") {
  const num = parseInt((priceStr || "").replace(/\D/g, ""), 10);
  if (!num || isNaN(num)) return { display: priceStr, note: "" };

  if (num >= 1000000) {
    const juta = num / 1000000;
    const short =
      (juta % 1 === 0 ? juta.toFixed(0) : juta.toFixed(1)) +
      (lang === "id" ? " Jt" : " M");
    const note =
      lang === "id" ? "Harga dapat dinegosiasikan" : "Price negotiable";
    return { display: short, note };
  }
  return { display: priceStr, note: "" };
}

function generateModelCards(lang) {
  const container = document.getElementById("model-cards");
  if (!container) return;
  container.innerHTML = "";
  modelSummaries[lang].forEach((m) => {
    const { display: priceShort, note } = formatPriceAndNote(m.price, lang);
    container.innerHTML += `
      <div class="model-card p-6 rounded-2xl shadow-lg bg-white border transition-all hover:shadow-2xl ${
        m.recommended ? "recommended" : ""
      }">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-xl font-semibold">${m.title}</h4>
          ${
            m.recommended
              ? `<span class="px-3 py-1 text-sm rounded-full bg-yellow-400 text-white font-semibold">${
                  lang === "id" ? "Direkomendasikan" : "Recommended"
                }</span>`
              : ""
          }
        </div>
        <div class="mb-2">
          <div class="text-2xl font-bold text-blue-800">${priceShort}</div>
          <div class="text-sm text-gray-500">${m.tagline}</div>
          ${
            note
              ? `<div class="text-xs text-gray-500 mt-1 price-note">${note}</div>`
              : ""
          }
        </div>
        <div class="flex items-center justify-between mt-4">
          <a href="#contact" class="text-sm text-blue-600 font-medium hover:underline">${
            lang === "id" ? "Hubungi Sales" : "Contact Sales"
          }</a>
          <button class="compare-cta bg-blue-600 text-white px-4 py-2 rounded-lg text-sm" data-model="${
            m.key
          }">${lang === "id" ? "Pilih" : "Choose"}</button>
        </div>
      </div>
    `;
  });

  container.querySelectorAll(".compare-cta").forEach((btn) =>
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const modelKey = btn.dataset.model;
      const compSection = document.getElementById("model-comparison");
      if (compSection) {
        const table = compSection.querySelector("table");
        const header = document.getElementById("header");
        const headerHeight = header ? header.offsetHeight : 80;
        if (table) {
          const rect = table.getBoundingClientRect();
          const targetTop = window.pageYOffset + rect.top - headerHeight - 16;
          window.scrollTo({
            top: Math.max(0, Math.round(targetTop)),
            behavior: "smooth",
          });
          setTimeout(() => highlightModelColumn(modelKey), 420);
        } else {
          const rect = compSection.getBoundingClientRect();
          const targetTop = window.pageYOffset + rect.top - headerHeight - 16;
          window.scrollTo({
            top: Math.max(0, Math.round(targetTop)),
            behavior: "smooth",
          });
          setTimeout(() => highlightModelColumn(modelKey), 420);
        }
      } else {
        highlightModelColumn(modelKey);
      }
    })
  );
}

function generateComparisonTable(lang) {
  const tbody = document.getElementById("comparison-table-body");
  tbody.innerHTML = "";
  const check =
    '<span class="feature-badge included" title="' +
    (lang === "id" ? "Termasuk" : "Included") +
    '"><i class="fas fa-check"></i></span>';
  const cross =
    '<span class="feature-badge excluded" title="' +
    (lang === "id" ? "Tidak termasuk" : "Not included") +
    '"><i class="fas fa-times"></i></span>';
  comparisonData[lang].forEach((r, i) => {
    const bg = i % 2 === 0 ? "bg-gray-50" : "bg-white";
    tbody.innerHTML += `
                    <tr class="${bg} hover:bg-blue-50 transition-colors">
                        <td class="py-4 px-6 text-gray-700 font-medium sticky-col">${
                          r.feature
                        }</td>
                        <td class="py-4 px-6 text-center">${
                          r.basic ? check : cross
                        }</td>
                        <td class="py-4 px-6 text-center">${
                          r.lengkap ? check : cross
                        }</td>
                        <td class="py-4 px-6 text-center">${
                          r.retail ? check : cross
                        }${
      r.retailNote
        ? `<div class="text-xs text-gray-500 mt-1" title="${r.retailNote}">${r.retailNote}</div>`
        : ""
    }</td>
                        <td class="py-4 px-6 text-center">${
                          r.manufaktur ? check : cross
                        }${
      r.manufakturNote
        ? `<div class="text-xs text-gray-500 mt-1" title="${r.manufakturNote}">${r.manufakturNote}</div>`
        : ""
    }</td>
                    </tr>`;
  });
}

function generateModelNotes(lang) {
  const ul = document.getElementById("model-notes");
  ul.innerHTML = "";
  modelNotes[lang].forEach((note) => {
    ul.innerHTML += `<li class="flex items-start space-x-3">
                    <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                    <span>${note}</span>
                </li>`;
  });
}
function openFeatureModal(idx) {
  currentFeatureIndex = idx;
  currentModalCarouselIndex = 0;
  const f = featuresData[currentLang][idx];
  document.getElementById("modal-feature-title").textContent = f.title;
  document.getElementById("modal-feature-desc").textContent = f.desc;

  const carousel = document.getElementById("modal-carousel");
  const dots = document.getElementById("modal-carousel-dots");
  carousel.innerHTML = "";
  dots.innerHTML = "";

  if (f.images && f.images.length) {
    f.images.forEach((src, i) => {
      carousel.innerHTML += `<div class="min-w-full flex items-center justify-center modal-image-container">
        <img src="${src}" alt="${f.title} ${i + 1}" 
             class="modal-image" 
             onerror="this.src='https://via.placeholder.com/800x600?text=${encodeURIComponent(f.title)}'">
      </div>`;
      dots.innerHTML += `<button class="modal-carousel-dot w-3 h-3 rounded-full transition-all duration-200 ${
        i === 0 ? "bg-blue-600 w-8" : "bg-gray-300"
      }" data-index="${i}"></button>`;
    });
    dots.querySelectorAll(".modal-carousel-dot").forEach((d) =>
      d.addEventListener("click", () => {
        currentModalCarouselIndex = +d.dataset.index;
        updateModalCarousel();
      })
    );
  } else {
    carousel.innerHTML = `<div class="min-w-full flex items-center justify-center bg-gray-100 rounded-lg" style="min-height:400px;">
                    <div class="text-center text-gray-500"><i class="fas ${
                      f.icon
                    } text-6xl mb-4"></i>
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
  const carousel = document.getElementById("modal-carousel");
  const f = featuresData[currentLang][currentFeatureIndex];
  const x = -currentModalCarouselIndex * 100;
  carousel.style.transform = `translateX(${x}%)`;
  document.querySelectorAll(".modal-carousel-dot").forEach((d, i) => {
    d.classList.toggle("bg-blue-600", i === currentModalCarouselIndex);
    d.classList.toggle("w-8", i === currentModalCarouselIndex);
    d.classList.toggle("bg-gray-300", i !== currentModalCarouselIndex);
  });
}
function closeFeatureModal() {
  document.getElementById("feature-modal").classList.add("hidden");
  document.getElementById("feature-modal").classList.remove("flex");
  document.body.style.overflow = "auto";
}

function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.dataset.translate;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach((b) => {
    if (b.dataset.lang === lang) {
      b.classList.add("bg-blue-600", "text-white", "scale-110");
      b.classList.remove(
        "bg-white",
        "text-blue-600",
        "scale-100",
        "border-2",
        "border-blue-600"
      );
    } else {
      b.classList.add(
        "bg-white",
        "text-blue-600",
        "scale-100",
        "border-2",
        "border-blue-600"
      );
      b.classList.remove("bg-blue-600", "text-white", "scale-110");
    }
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  generateModelCards(lang);
  generateFeatures(lang);
  generateComparisonTable(lang);
  generateModelNotes(lang);
}

document.getElementById("menu-toggle").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuToggle = document.getElementById("menu-toggle");

  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("show");
  }
});
let touchStartX = 0;
let touchEndX = 0;

document
  .getElementById("modal-carousel")
  .addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

document.getElementById("modal-carousel").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("scroll-section");
  observer.observe(section);
});

window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});
function handleSwipe() {
  if (touchEndX < touchStartX) {
    document.getElementById("modal-next-btn").click();
  }
  if (touchEndX > touchStartX) {
    document.getElementById("modal-prev-btn").click();
  }
}
document
  .getElementById("feature-modal-close")
  .addEventListener("click", closeFeatureModal);
document.getElementById("feature-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeFeatureModal();
});
document.getElementById("modal-prev-btn").addEventListener("click", () => {
  const f = featuresData[currentLang][currentFeatureIndex];
  if (f.images && f.images.length > 1) {
    currentModalCarouselIndex =
      (currentModalCarouselIndex - 1 + f.images.length) % f.images.length;
    updateModalCarousel();
  }
});
document.getElementById("modal-next-btn").addEventListener("click", () => {
  const f = featuresData[currentLang][currentFeatureIndex];
  if (f.images && f.images.length > 1) {
    currentModalCarouselIndex =
      (currentModalCarouselIndex + 1) % f.images.length;
    updateModalCarousel();
  }
});
document
  .getElementById("back-to-top")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
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
    }
  })
);
window.addEventListener("scroll", () => {
  let cur = "";
  document.querySelectorAll("section").forEach((s) => {
    if (window.pageYOffset >= s.offsetTop - 120) cur = s.id;
  });
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.getAttribute("href") === `#${cur}`);
  });
  document.getElementById("back-to-top").style.opacity =
    window.pageYOffset > 300 ? "1" : "0";
  document.getElementById("back-to-top").style.pointerEvents =
    window.pageYOffset > 300 ? "auto" : "none";
  document
    .getElementById("header")
    .classList.toggle("shadow-2xl", window.pageYOffset > 100);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!document.getElementById("mobile-menu").classList.contains("hidden")) {
      document.getElementById("mobile-menu").classList.add("hidden");
    }
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
document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    if (btn.dataset.lang === "id") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  generateModelCards(currentLang);
  generateFeatures(currentLang);
  generateComparisonTable(currentLang);
  generateModelNotes(currentLang);
});

function highlightModelColumn(modelKey) {
  const map = { basic: 1, lengkap: 2, retail: 3, manufaktur: 4 };
  const col = map[modelKey];
  if (!col) return;

  document
    .querySelectorAll(".highlighted-col, .yellow-pop")
    .forEach((el) =>
      el.classList.remove("highlighted-col", "yellow", "yellow-pop")
    );

  const table = document.querySelector("#model-comparison table");
  if (!table) return;

  const th = table.querySelector(`thead th:nth-child(${col + 1})`);
  if (th) th.classList.add("highlighted-col", "yellow", "yellow-pop");

  table
    .querySelectorAll(`tbody td:nth-child(${col + 1})`)
    .forEach((td) =>
      td.classList.add("highlighted-col", "yellow", "yellow-pop")
    );

  const wrapper = document.querySelector("#model-comparison .max-w-6xl");
  if (wrapper && th) {
    const left = th.offsetLeft + th.offsetWidth / 2 - wrapper.clientWidth / 2;
    wrapper.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }
}
document.querySelectorAll(".compare-cta").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pop = document.getElementById("pop-sfx");
    if (pop) {
      pop.currentTime = 0;
      pop.play();
    }
  });
});
