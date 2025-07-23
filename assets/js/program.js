// Base path for images
const BASE_PATH = "assets/img/";

// Feature images with base path
const featureImages = {
  "Bagan Akun": [
    {
      src: `${BASE_PATH}Chart_of_Account.png`,
      alt: "Tampilan Bagan Akun",
      caption: "Antarmuka Bagan Akun",
    },
    {
      src: `${BASE_PATH}Chart_of_Account2.png`,
      alt: "Tampilan Bagan Akun 2",
      caption: "Modal Pembuatan Akun Baru",
    },
  ],
  "Manajemen Voucher": [
    {
      src: `${BASE_PATH}Voucher_Page.png`,
      alt: "Tampilan Manajemen Voucher",
      caption: "Antarmuka Manajemen Voucher",
    },
    {
      src: `${BASE_PATH}Voucher_Create.png`,
      alt: "Tampilan Pembuatan Voucher",
      caption: "Antarmuka Pembuatan Data Voucher",
    },
    {
      src: `${BASE_PATH}Voucher_Edit.png`,
      alt: "Tampilan Edit Voucher",
      caption: "Antarmuka Perubahan Data Voucher",
    },
    {
      src: `${BASE_PATH}Voucher_Output.png`,
      alt: "Tampilan Keluaran Voucher",
      caption: "Keluaran Voucher",
    },
  ],
  "Buku Besar Umum": [
    {
      src: `${BASE_PATH}General_Ledger.png`,
      alt: "Tampilan Buku Besar Umum",
      caption: "Antarmuka Buku Besar Umum",
    },
  ],
  Piutang: [
    {
      src: `${BASE_PATH}Piutang_Page.png`,
      alt: "Tampilan Piutang",
      caption: "Antarmuka Piutang",
    },
    {
      src: `${BASE_PATH}Tracking_Customer_Piutang.png`,
      alt: "Tampilan Pelacakan Pelanggan",
      caption: "Pelacakan Pelanggan",
    },
  ],
  Hutang: [
    {
      src: `${BASE_PATH}Hutang_Page.png`,
      alt: "Tampilan Hutang",
      caption: "Antarmuka Hutang",
    },
    {
      src: `${BASE_PATH}Tracking_Customer_Hutang.png`,
      alt: "Tampilan Pelacakan Hutang",
      caption: "Pelacakan Pelanggan",
    },
  ],
  "Ekspor Data": [
    {
      src: `${BASE_PATH}General_Ledger_Export.png`,
      alt: "Tampilan Ekspor Buku Besar",
      caption: "Output Buku Besar",
    },
    {
      src: `${BASE_PATH}Trial_Balance_Export.png`,
      alt: "Tampilan Ekspor Neraca Saldo",
      caption: "Output Laporan Neraca Saldo",
    },
    {
      src: `${BASE_PATH}Profit_Loss_Export.png`,
      alt: "Tampilan Ekspor Laba Rugi",
      caption: "Output Laporan Laba Rugi",
    },
    {
      src: `${BASE_PATH}Balance_Sheet_Export.png`,
      alt: "Tampilan Ekspor Neraca",
      caption: "Output Laporan Neraca Keuangan",
    },
  ],
  "Neraca Saldo": [
    {
      src: `${BASE_PATH}Trial_Balance.png`,
      alt: "Tampilan Neraca Saldo",
      caption: "Antarmuka Neraca Saldo",
    },
  ],
  "Neraca Keuangan": [
    {
      src: `${BASE_PATH}Balance_Sheet.png`,
      alt: "Tampilan Neraca Keuangan",
      caption: "Antarmuka Neraca Keuangan",
    },
  ],
  "Laba Rugi": [
    {
      src: `${BASE_PATH}Profit_Loss.png`,
      alt: "Tampilan Laba Rugi",
      caption: "Antarmuka Laba Rugi",
    },
  ],
  Stock: [
    {
      src: `${BASE_PATH}Stock_Page.png`,
      alt: "Tampilan Stock",
      caption: "Antarmuka Stock",
    },
    {
      src: `${BASE_PATH}Stock_Page_2.png`,
      alt: "Tampilan Modal Rumus Produk",
      caption: "Antarmuka Modal Rumus Produk",
    },
  ],
  Dashboard: [
    {
      src: `${BASE_PATH}Dashboard_Page.png`,
      alt: "Tampilan Grafik Tren Laba Bersih dan Tren Penjualan",
      caption: "Grafik Tren Laba Bersih dan Tren Penjualan",
    },
    {
      src: `${BASE_PATH}Dashboard_Page_2.png`,
      alt: "Tampilan Grafik Stock",
      caption: "Grafik Stock",
    },
  ],
};

// Feature translations
const featureTranslations = {
  id: {
    "Bagan Akun": "Bagan Akun",
    "Manajemen Voucher": "Manajemen Voucher",
    "Buku Besar Umum": "Buku Besar Umum",
    Piutang: "Piutang",
    Hutang: "Hutang",
    "Ekspor Data": "Ekspor Data",
    "Neraca Saldo": "Neraca Saldo",
    "Neraca Keuangan": "Neraca Keuangan",
    "Laba Rugi": "Laba Rugi",
    Stock: "Stock",
    Dashboard: "Dashboard",
  },
  en: {
    "Bagan Akun": "Chart of Accounts",
    "Manajemen Voucher": "Voucher Management",
    "Buku Besar Umum": "General Ledger",
    Piutang: "Accounts Receivable",
    Hutang: "Accounts Payable",
    "Ekspor Data": "Data Export",
    "Neraca Saldo": "Trial Balance",
    "Neraca Keuangan": "Financial Overview",
    "Laba Rugi": "Profit and Loss",
    Stock: "Stock",
    Dashboard: "Dashboard",
  },
};

// Translations
const translations = {
  id: {
    headerTitle: "Software 'inni akun digi'",
    headerSlogan:
      '"Solusi Praktis Laporan Keuangan & Pajak Untuk UMKM dan Koperasi"',
    navHome: "Beranda",
    navFeatures: "Fitur",
    navBenefits: "Manfaat",
    navInterface: "Klien",
    navContact: "Kontak",
    navProfile: "Profil",
    introTitle: "Selamat Datang di Software 'inni akun digi'",
    introText:
      "Software 'inni akun digi' dirancang untuk UKM, CV, BUMDes, dan Koperasi, menawarkan solusi akuntansi keuangan yang terjangkau dan ramah pengguna untuk menyederhanakan operasi bisnis Anda.",
    contactBtn: "Hubungi Kami",
    featuresTitle: "Fitur Utama",
    featureTitles: [
      "Bagan Akun",
      "Manajemen Voucher",
      "Buku Besar Umum",
      "Piutang",
      "Hutang",
      "Ekspor Data",
      "Neraca Saldo",
      "Neraca Keuangan",
      "Laba Rugi",
      "Stock",
      "Dashboard",
    ],
    featureDescs: [
      "Atur dan kelompokkan akun keuangan Anda dengan struktur yang jelas untuk aset, liabilitas, dan ekuitas.",
      "Buat, edit, dan lacak voucher transaksi seperti pembelian, penjualan, dan transfer dengan validasi otomatis.",
      "Rekam semua transaksi keuangan secara terperinci untuk laporan yang akurat dan terorganisir.",
      "Kelola piutang pelanggan dengan pelacakan tagihan dan pembayaran secara real-time.",
      "Pantau dan kelola kewajiban pembayaran kepada pemasok dengan buku pembantu terorganisir.",
      "Ekspor laporan keuangan ke PDF atau Excel dengan format yang dapat disesuaikan untuk analisis lebih lanjut.",
      "Tinjau saldo akun secara menyeluruh untuk memastikan keseimbangan keuangan yang akurat.",
      "Lihat gambaran arus kas dan posisi keuangan bisnis Anda secara real-time.",
      "Analisis pendapatan dan biaya dengan laporan laba rugi untuk evaluasi kinerja bisnis.",
      "Kelola dan lacak inventaris Anda dengan mudah, termasuk stok masuk, keluar, dan transfer antar gudang.",
      "Pantau performa keuangan Anda dengan visualisasi data real-time, termasuk laba, penjualan, dan komposisi stok.",
    ],
    featureLearnMores: Array(11).fill("Pelajari Lebih Lanjut"),
    benefitsTitle: "Mengapa Memilih INNi?",
    benefit1: "Mudah digunakan, bahkan untuk pemula.",
    benefit2: "Data keuangan yang akurat dan terorganisasi.",
    benefit3: "Solusi yang hemat waktu dan biaya.",
    benefit4: "Pelatihan di lokasi untuk adopsi yang mulus.",
    clientTitle: "Client Program Akuntansi INNi",
    slide1Alt: "Pelatihan Klien",
    slide1Caption: "Pelatihan Klien",
    slide2Alt: "Kunjungan Klien",
    slide2Caption: "Kunjungan Klien",
    slide3Alt: "Penggunaan Aplikasi oleh Admin",
    slide3Caption: "Penggunaan Aplikasi oleh Admin",
    slide4Alt: "Penggunaan Aplikasi oleh Admin",
    slide4Caption: "Penggunaan Aplikasi oleh Admin",
    contactTitle: "Ayo Berkolaborasi",
    contactText:
      "Siap menyederhanakan akuntansi Anda? Hubungi kami untuk diskusi lebih lanjut atau jadwalkan demonstrasi produk.",
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi (INNi). Seluruh hak cipta dilindungi.",
    modalClose: "Tutup",
    contactModalTitle: "Hubungi Kami Sekarang!",
    contactModalText: "Siap menyederhanakan akuntansi Anda? Mari kita bicara!",
    scheduleDemo: "Jadwalkan Demo",
    contactAlert:
      "Siap menyederhanakan akuntansi Anda? Hubungi kami di inni.zaenal@gmail.com atau telepon 081932278584 untuk jadwal demo!",
  },
  en: {
    headerTitle: "Software inni akun digi",
    headerSlogan:
      '"Practical Solutions for Financial Reports & Taxes for MSMEs and Cooperatives"',
    navHome: "Home",
    navFeatures: "Features",
    navBenefits: "Benefits",
    navInterface: "Client",
    navContact: "Contact",
    navProfile: "Profile",
    introTitle: "Welcome to 'inni akun digi' software",
    introText:
      "'inni akun digi' software is designed for SMEs, CVs, BUMDes, and Cooperatives, offering affordable and user-friendly financial accounting solutions to streamline your business operations.",
    contactBtn: "Contact Us",
    featuresTitle: "Key Features",
    featureTitles: [
      "Chart of Accounts",
      "Voucher Management",
      "General Ledger",
      "Accounts Receivable",
      "Accounts Payable",
      "Data Export",
      "Trial Balance",
      "Financial Overview",
      "Profit and Loss",
      "Stock",
      "Dashboard",
    ],
    featureDescs: [
      "Organize and categorize your financial accounts with a clear structure for assets, liabilities, and equity.",
      "Create, edit, and track transaction vouchers such as purchases, sales, and transfers with automatic validation.",
      "Record all financial transactions in detail for accurate and organized reporting.",
      "Manage customer receivables with real-time tracking of invoices and payments.",
      "Monitor and manage payment obligations to suppliers with an organized ledger.",
      "Export financial reports to PDF or Excel with customizable formats for further analysis.",
      "Review account balances comprehensively to ensure accurate financial balancing.",
      "View your business’s cash flow and financial position in real-time.",
      "Analyze revenue and expenses with profit and loss reports to evaluate business performance.",
      "Manage and track your inventory easily, including stock inflows, outflows, and inter-warehouse transfers.",
      "Monitor your financial performance with real-time data visualizations, including profit, sales, and stock composition.",
    ],
    featureLearnMores: Array(11).fill("Learn More"),
    benefitsTitle: "Why Choose INNi?",
    benefit1: "Easy to use, even for beginners.",
    benefit2: "Accurate and organized financial data.",
    benefit3: "Time and cost-efficient solutions.",
    benefit4: "On-site training for seamless adoption.",
    clientTitle: "Client INNi Accounting Program",
    slide1Alt: "Client Training",
    slide1Caption: "Client Training",
    slide2Alt: "Client Visit",
    slide2Caption: "Client Visit",
    slide3Alt: "Application Usage by Admin",
    slide3Caption: "Application Usage by Admin",
    slide4Alt: "Application Usage by Admin",
    slide4Caption: "Application Usage by Admin",
    contactTitle: "Let's Collaborate",
    contactText:
      "Ready to simplify your accounting? Contact us to discuss further or schedule a product demonstration.",
    footerText:
      "© 2025 PT. Integrasindo Multi Kreasi (INNi). All rights reserved.",
    modalClose: "Close",
    contactModalTitle: "Contact Us Now!",
    contactModalText: "Ready to simplify your accounting? Let's talk!",
    scheduleDemo: "Schedule a Demo",
    contactAlert:
      "Ready to simplify your accounting? Reach out to us at inni.zaenal@gmail.com or call 081932278584 to schedule a demo!",
  },
};

// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  const isExpanded = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.setAttribute("aria-hidden", isExpanded);
});

// Smooth Scroll and Close Mobile Menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

// Highlight Navigation on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-menu a, #mobile-menu a");
const headerHeight = document.querySelector("header").offsetHeight;

function highlightNav() {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("text-blue-300", "font-bold");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("text-blue-300", "font-bold");
    }
  });
}

window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// Modal Handling
const featureModal = document.getElementById("feature-modal");
const imageModal = document.getElementById("image-modal");
const contactModal = document.getElementById("contact-modal");
const featureCarouselModal = document.getElementById("feature-carousel-modal");

function closeAllModals() {
  featureModal.classList.add("hidden");
  imageModal.classList.add("hidden");
  contactModal.classList.add("hidden");
  featureCarouselModal.classList.add("hidden");
  featureModal.setAttribute("aria-hidden", "true");
  imageModal.setAttribute("aria-hidden", "true");
  contactModal.setAttribute("aria-hidden", "true");
  featureCarouselModal.setAttribute("aria-hidden", "true");
  stopFeatureAutoPlay();
  startAutoPlay();
}

// Main Carousel
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dots = document.querySelectorAll(".carousel-dot");
let currentIndex = 0;
let autoPlayInterval;
const totalSlides = document.querySelectorAll(".carousel-item").length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-blue-500", index === currentIndex);
    dot.classList.toggle("bg-gray-300", index !== currentIndex);
    dot.setAttribute("aria-selected", index === currentIndex);
  });
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    if (
      !featureCarouselModal.classList.contains("hidden") ||
      !imageModal.classList.contains("hidden")
    )
      return;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 8000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

prevBtn.addEventListener("click", () => {
  stopAutoPlay();
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
  startAutoPlay();
});

nextBtn.addEventListener("click", () => {
  stopAutoPlay();
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
  startAutoPlay();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopAutoPlay();
    currentIndex = parseInt(dot.getAttribute("data-index"));
    updateCarousel();
    startAutoPlay();
  });
});

const carouselContainer = carousel.parentElement;
carouselContainer.addEventListener("mouseenter", stopAutoPlay);
carouselContainer.addEventListener("mouseleave", startAutoPlay);

// Feature Carousel
const featureCarousel = document.getElementById("feature-carousel");
const featurePrevBtn = document.getElementById("feature-prev-btn");
const featureNextBtn = document.getElementById("feature-next-btn");
const featureCarouselDots = document.getElementById("feature-carousel-dots");
const featureCarouselClose = document.getElementById("feature-carousel-close");
let featureCurrentIndex = 0;
let featureAutoPlayInterval;

function updateFeatureCarousel() {
  featureCarousel.style.transform = `translateX(-${
    featureCurrentIndex * 100
  }%)`;
  const dots = featureCarouselDots.querySelectorAll(".feature-carousel-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-blue-500", index === featureCurrentIndex);
    dot.classList.toggle("bg-gray-300", index !== featureCurrentIndex);
    dot.setAttribute("aria-selected", index === featureCurrentIndex);
  });
}

function startFeatureAutoPlay() {
  featureAutoPlayInterval = setInterval(() => {
    if (!imageModal.classList.contains("hidden")) return;
    const totalFeatureSlides = featureCarousel.querySelectorAll(
      ".feature-carousel-item"
    ).length;
    featureCurrentIndex = (featureCurrentIndex + 1) % totalFeatureSlides;
    updateFeatureCarousel();
  }, 8000);
}

function stopFeatureAutoPlay() {
  clearInterval(featureAutoPlayInterval);
}

function loadFeatureCarousel(feature) {
  featureCarousel.innerHTML = "";
  featureCarouselDots.innerHTML = "";
  const featureKey = featureTranslations[currentLang][feature] || feature;
  const images = featureImages[featureKey] || [];
  if (!images.length) {
    console.error(`No images found for feature: ${featureKey}`);
    featureCarouselModal.classList.add("hidden");
    featureCarouselModal.setAttribute("aria-hidden", "true");
    return;
  }
  images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className =
      "feature-carousel-item min-w-full flex flex-col justify-center items-center";
    slide.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" class="w-full max-h-[400px] object-contain rounded-lg shadow-md cursor-pointer" data-fullscreen-src="${img.src}" loading="lazy">
      <p class="text-center mt-4 text-gray-600">${img.caption}</p>
    `;
    featureCarousel.appendChild(slide);
    const dot = document.createElement("button");
    dot.className = `feature-carousel-dot w-3 h-3 rounded-full ${
      index === 0 ? "bg-blue-500" : "bg-gray-300"
    }`;
    dot.setAttribute("data-index", index);
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dot.setAttribute("role", "tab");
    dot.addEventListener("click", () => {
      stopFeatureAutoPlay();
      featureCurrentIndex = parseInt(dot.getAttribute("data-index"));
      updateFeatureCarousel();
      startFeatureAutoPlay();
    });
    featureCarouselDots.appendChild(dot);
  });
  featureCurrentIndex = 0;
  updateFeatureCarousel();
}

function setupFeatureButtons() {
  const featureButtons = document.querySelectorAll(".feature-btn");
  featureButtons.forEach((button) => {
    button.removeEventListener("click", handleFeatureButtonClick);
    button.addEventListener("click", handleFeatureButtonClick);
  });
}

function handleFeatureButtonClick() {
  closeAllModals();
  const feature = this.parentElement.querySelector("h3").textContent;
  const desc = this.getAttribute("data-desc");
  document.getElementById("feature-carousel-title").textContent =
    currentLang === "id"
      ? `Antarmuka Program Akuntansi INNi (${feature})`
      : `INNi Accounting Program Interface (${feature})`;
  document
    .getElementById("feature-carousel")
    .insertAdjacentHTML(
      "afterbegin",
      `<p class="text-gray-600 mb-4 text-center">${desc}</p>`
    );
  loadFeatureCarousel(feature);
  featureCarouselModal.classList.remove("hidden");
  featureCarouselModal.setAttribute("aria-hidden", "false");
  startFeatureAutoPlay();
}

featurePrevBtn.addEventListener("click", () => {
  stopFeatureAutoPlay();
  const totalFeatureSlides = featureCarousel.querySelectorAll(
    ".feature-carousel-item"
  ).length;
  featureCurrentIndex =
    (featureCurrentIndex - 1 + totalFeatureSlides) % totalFeatureSlides;
  updateFeatureCarousel();
  startFeatureAutoPlay();
});

featureNextBtn.addEventListener("click", () => {
  stopFeatureAutoPlay();
  const totalFeatureSlides = featureCarousel.querySelectorAll(
    ".feature-carousel-item"
  ).length;
  featureCurrentIndex = (featureCurrentIndex + 1) % totalFeatureSlides;
  updateFeatureCarousel();
  startFeatureAutoPlay();
});

featureCarouselClose.addEventListener("click", closeAllModals);

featureCarouselModal.addEventListener("click", (e) => {
  if (e.target === featureCarouselModal) {
    closeAllModals();
  }
});

featureCarouselModal.addEventListener("click", (e) => {
  if (
    e.target.tagName === "IMG" &&
    e.target.hasAttribute("data-fullscreen-src")
  ) {
    const src = e.target.getAttribute("data-fullscreen-src");
    document.getElementById("fullscreen-image").src = src;
    document.getElementById("fullscreen-image-label").textContent =
      e.target.getAttribute("alt");
    imageModal.classList.remove("hidden");
    imageModal.setAttribute("aria-hidden", "false");
    imageModal.style.zIndex = 70;
    stopFeatureAutoPlay();
  }
});

document.getElementById("image-modal-close").addEventListener("click", () => {
  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");
  imageModal.style.zIndex = 50;
  startFeatureAutoPlay();
});

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.classList.add("hidden");
    imageModal.setAttribute("aria-hidden", "true");
    imageModal.style.zIndex = 50;
    startFeatureAutoPlay();
  }
});

const carouselImages = document.querySelectorAll(".carousel-item img");
carouselImages.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.getAttribute("data-fullscreen-src");
    document.getElementById("fullscreen-image").src = src;
    document.getElementById("fullscreen-image-label").textContent =
      image.getAttribute("alt");
    imageModal.classList.remove("hidden");
    imageModal.setAttribute("aria-hidden", "false");
    imageModal.style.zIndex = 70;
    stopAutoPlay();
  });
});

document.getElementById("contact-btn").addEventListener("click", () => {
  closeAllModals();
  contactModal.classList.remove("hidden");
  contactModal.setAttribute("aria-hidden", "false");
});

document
  .getElementById("contact-modal-close")
  .addEventListener("click", closeAllModals);

document.getElementById("schedule-demo").addEventListener("click", () => {
  window.location.href = "mailto:inni.zaenal@gmail.com?subject=Schedule%20Demo";
  closeAllModals();
});

// Email link obfuscation
document.querySelectorAll(".contact-email").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const email = link.getAttribute("data-email");
    window.location.href = `mailto:${email}`;
  });
});

// Keyboard Accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllModals();
  }
  if (
    e.key === "ArrowLeft" &&
    !featureCarouselModal.classList.contains("hidden")
  ) {
    featurePrevBtn.click();
  }
  if (
    e.key === "ArrowRight" &&
    !featureCarouselModal.classList.contains("hidden")
  ) {
    featureNextBtn.click();
  }
  if (e.key === "ArrowLeft" && !carousel.classList.contains("hidden")) {
    prevBtn.click();
  }
  if (e.key === "ArrowRight" && !carousel.classList.contains("hidden")) {
    nextBtn.click();
  }
});

// Language Switch
let currentLang = localStorage.getItem("language") || "id";
const langButtons = document.querySelectorAll(
  "#btn-id, #btn-en, #mobile-btn-id, #mobile-btn-en"
);

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.setAttribute("lang", lang);
  langButtons.forEach((btn) => {
    if (btn.id.includes("btn-id") && lang === "id") {
      btn.classList.add("bg-blue-700", "text-white");
    } else if (btn.id.includes("btn-en") && lang === "en") {
      btn.classList.add("bg-blue-700", "text-white");
    } else {
      btn.classList.remove("bg-blue-700", "text-white");
    }
  });

  document.querySelector("h1").textContent = translations[lang].headerTitle;
  document.querySelector("h1 + p").textContent =
    translations[lang].headerSlogan;
  document.querySelectorAll("#nav-menu a").forEach((link, index) => {
    link.textContent = [
      translations[lang].navHome,
      translations[lang].navFeatures,
      translations[lang].navBenefits,
      translations[lang].navInterface,
      translations[lang].navContact,
      translations[lang].navProfile,
    ][index];
  });
  document.querySelectorAll("#mobile-menu a").forEach((link, index) => {
    link.textContent = [
      translations[lang].navHome,
      translations[lang].navFeatures,
      translations[lang].navBenefits,
      translations[lang].navInterface,
      translations[lang].navContact,
      translations[lang].navProfile,
    ][index];
  });
  document.querySelector("#intro h2").textContent =
    translations[lang].introTitle;
  document.querySelector("#intro p").textContent = translations[lang].introText;
  document.querySelector("#contact-btn").textContent =
    translations[lang].contactBtn;
  document.querySelector("#features h2").textContent =
    translations[lang].featuresTitle;
  document.querySelectorAll("#features h3").forEach((h3, index) => {
    h3.textContent = translations[lang].featureTitles[index];
  });
  document.querySelectorAll("#features p").forEach((p, index) => {
    p.textContent = translations[lang].featureDescs[index];
  });
  document.querySelectorAll(".feature-btn").forEach((btn, index) => {
    btn.textContent = translations[lang].featureLearnMores[index];
  });
  document.querySelector("#benefits h2").textContent =
    translations[lang].benefitsTitle;
  document.querySelectorAll("#benefits p").forEach((p, index) => {
    p.textContent = [
      translations[lang].benefit1,
      translations[lang].benefit2,
      translations[lang].benefit3,
      translations[lang].benefit4,
    ][index];
  });
  document.querySelector("#client h2").textContent =
    translations[lang].clientTitle;
  document.querySelectorAll(".carousel-item img").forEach((img, index) => {
    img.setAttribute(
      "alt",
      [
        translations[lang].slide1Alt,
        translations[lang].slide2Alt,
        translations[lang].slide3Alt,
        translations[lang].slide4Alt,
      ][index]
    );
  });
  document.querySelectorAll(".carousel-item p").forEach((p, index) => {
    p.textContent = [
      translations[lang].slide1Caption,
      translations[lang].slide2Caption,
      translations[lang].slide3Caption,
      translations[lang].slide4Caption,
    ][index];
  });
  document.querySelector("#contact h2").textContent =
    translations[lang].contactTitle;
  document.querySelector("#contact p").textContent =
    translations[lang].contactText;
  document.querySelector("footer p").textContent =
    translations[lang].footerText;
  document.querySelector("#modal-close").textContent =
    translations[lang].modalClose;
  document.querySelector("#feature-carousel-close").textContent =
    translations[lang].modalClose;
  document.getElementById("contact-modal-title").textContent =
    translations[lang].contactModalTitle;
  document.getElementById("contact-modal-text").textContent =
    translations[lang].contactModalText;
  document.getElementById("schedule-demo").textContent =
    translations[lang].scheduleDemo;
  document.getElementById("contact-modal-close").textContent =
    translations[lang].modalClose;

  setupFeatureButtons();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.id.includes("btn-id") ? "id" : "en";
    updateLanguage(lang);
  });
});

// Initial setup
setupFeatureButtons();
updateLanguage(currentLang);
startAutoPlay();

// Fallback for no JavaScript
document.querySelectorAll(".modal").forEach((modal) => {
  modal.classList.add("hidden");
});
