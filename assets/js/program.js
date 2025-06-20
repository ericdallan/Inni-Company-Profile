// Base path for images
const BASE_PATH = 'assets/img/';

// Feature images with base path
const featureImages = {
    "Bagan Akun": [
        { src: `${BASE_PATH}Chart_of_Account.png`, alt: "Tampilan Bagan Akun", caption: "Antarmuka Bagan Akun" },
        { src: `${BASE_PATH}Chart_of_Account2.png`, alt: "Tampilan Bagan Akun 2", caption: "Modal Pembuatan Akun Baru" }
    ],
    "Manajemen Voucher": [
        { src: `${BASE_PATH}Voucher_Page.png`, alt: "Tampilan Manajemen Voucher", caption: "Antarmuka Manajemen Voucher" },
        { src: `${BASE_PATH}Voucher_Create.png`, alt: "Tampilan Pembuatan Voucher", caption: "Antarmuka Pembuatan Data Voucher" },
        { src: `${BASE_PATH}Voucher_Edit.png`, alt: "Tampilan Edit Voucher", caption: "Antarmuka Perubahan Data Voucher" },
        { src: `${BASE_PATH}Voucher_Output.png`, alt: "Tampilan Keluaran Voucher", caption: "Keluaran Voucher" }
    ],
    "Buku Besar Umum": [
        { src: `${BASE_PATH}General_Ledger.png`, alt: "Tampilan Buku Besar Umum", caption: "Antarmuka Buku Besar Umum" }
    ],
    "Piutang": [
        { src: `${BASE_PATH}Piutang_Page.png`, alt: "Tampilan Piutang", caption: "Antarmuka Piutang" },
        { src: `${BASE_PATH}Tracking_Customer_Piutang.png`, alt: "Tampilan Pelacakan Pelanggan", caption: "Pelacakan Pelanggan" }
    ],
    "Hutang": [
        { src: `${BASE_PATH}Hutang_Page.png`, alt: "Tampilan Hutang", caption: "Antarmuka Hutang" },
        { src: `${BASE_PATH}Tracking_Customer_Hutang.png`, alt: "Tampilan Pelacakan Hutang", caption: "Pelacakan Pelanggan" }
    ],
    "Ekspor Data": [
        { src: `${BASE_PATH}General_Ledger_Export.png`, alt: "Tampilan Ekspor Buku Besar", caption: "Output Buku Besar" },
        { src: `${BASE_PATH}Trial_Balance_Export.png`, alt: "Tampilan Ekspor Neraca Saldo", caption: "Output Laporan Neraca Saldo" },
        { src: `${BASE_PATH}Profit_Loss_Export.png`, alt: "Tampilan Ekspor Laba Rugi", caption: "Output Laporan Laba Rugi" },
        { src: `${BASE_PATH}Balance_Sheet_Export.png`, alt: "Tampilan Ekspor Neraca", caption: "Output Laporan Neraca Keuangan" }
    ],
    "Neraca Saldo": [
        { src: `${BASE_PATH}Trial_Balance.png`, alt: "Tampilan Neraca Saldo", caption: "Antarmuka Neraca Saldo" }
    ],
    "Neraca Keuangan": [
        { src: `${BASE_PATH}Balance_Sheet.png`, alt: "Tampilan Neraca Keuangan", caption: "Antarmuka Neraca Keuangan" }
    ],
    "Laba Rugi": [
        { src: `${BASE_PATH}Profit_Loss.png`, alt: "Tampilan Laba Rugi", caption: "Antarmuka Laba Rugi" }
    ]
};

// Feature translations
const featureTranslations = {
    id: {
        "Bagan Akun": [
            { alt: "Tampilan Bagan Akun", caption: "Antarmuka Bagan Akun" },
            { alt: "Tampilan Bagan Akun 2", caption: "Modal Pembuatan Akun Baru" }
        ],
        "Manajemen Voucher": [
            { alt: "Tampilan Manajemen Voucher", caption: "Antarmuka Manajemen Voucher" },
            { alt: "Tampilan Pembuatan Voucher", caption: "Antarmuka Pembuatan Data Voucher" },
            { alt: "Tampilan Edit Voucher", caption: "Antarmuka Perubahan Data Voucher" },
            { alt: "Tampilan Keluaran Voucher", caption: "Keluaran Voucher" }
        ],
        "Buku Besar Umum": [
            { alt: "Tampilan Buku Besar Umum", caption: "Antarmuka Buku Besar Umum" }
        ],
        "Piutang": [
            { alt: "Tampilan Piutang", caption: "Antarmuka Piutang" },
            { alt: "Tampilan Pelacakan Pelanggan", caption: "Pelacakan Pelanggan" }
        ],
        "Hutang": [
            { alt: "Tampilan Hutang", caption: "Antarmuka Hutang" },
            { alt: "Tampilan Pelacakan Hutang", caption: "Pelacakan Pelanggan" }
        ],
        "Ekspor Data": [
            { alt: "Tampilan Ekspor Buku Besar", caption: "Output Buku Besar" },
            { alt: "Tampilan Ekspor Neraca Saldo", caption: "Output Laporan Neraca Saldo" },
            { alt: "Tampilan Ekspor Laba Rugi", caption: "Output Laporan Laba Rugi" },
            { alt: "Tampilan Ekspor Neraca", caption: "Output Laporan Neraca Keuangan" }
        ],
        "Neraca Saldo": [
            { alt: "Tampilan Neraca Saldo", caption: "Antarmuka Neraca Saldo" }
        ],
        "Neraca Keuangan": [
            { alt: "Tampilan Neraca Keuangan", caption: "Antarmuka Neraca Keuangan" }
        ],
        "Laba Rugi": [
            { alt: "Tampilan Laba Rugi", caption: "Antarmuka Laba Rugi" }
        ]
    },
    en: {
        "Bagan Akun": [
            { alt: "Chart of Accounts Screenshot", caption: "Chart of Accounts Interface" },
            { alt: "Chart of Accounts Creation Modal", caption: "New Account Creation Modal" }
        ],
        "Manajemen Voucher": [
            { alt: "Voucher Management Screenshot", caption: "Voucher Management Interface" },
            { alt: "Voucher Creation Screenshot", caption: "Voucher Creation Interface" },
            { alt: "Voucher Edit Screenshot", caption: "Voucher Edit Interface" },
            { alt: "Voucher Output Screenshot", caption: "Voucher Output" }
        ],
        "Buku Besar Umum": [
            { alt: "General Ledger Screenshot", caption: "General Ledger Interface" }
        ],
        "Piutang": [
            { alt: "Accounts Receivable Screenshot", caption: "Accounts Receivable Interface" },
            { alt: "Customer Tracking Screenshot", caption: "Customer Tracking" }
        ],
        "Hutang": [
            { alt: "Accounts Payable Screenshot", caption: "Accounts Payable Interface" },
            { alt: "Supplier Tracking Screenshot", caption: "Supplier Tracking" }
        ],
        "Ekspor Data": [
            { alt: "General Ledger Export Screenshot", caption: "General Ledger Output" },
            { alt: "Trial Balance Export Screenshot", caption: "Trial Balance Report Output" },
            { alt: "Profit and Loss Export Screenshot", caption: "Profit and Loss Report Output" },
            { alt: "Balance Sheet Export Screenshot", caption: "Balance Sheet Report Output" }
        ],
        "Neraca Saldo": [
            { alt: "Trial Balance Screenshot", caption: "Trial Balance Interface" }
        ],
        "Neraca Keuangan": [
            { alt: "Financial Overview Screenshot", caption: "Financial Overview Interface" }
        ],
        "Laba Rugi": [
            { alt: "Profit and Loss Screenshot", caption: "Profit and Loss Interface" }
        ]
    }
};

// Feature name mapping
const featureNameMapping = {
    "Chart of Accounts": "Bagan Akun",
    "Voucher Management": "Manajemen Voucher",
    "General Ledger": "Buku Besar Umum",
    "Accounts Receivable": "Piutang",
    "Accounts Payable": "Hutang",
    "Data Export": "Ekspor Data",
    "Trial Balance": "Neraca Saldo",
    "Financial Overview": "Neraca Keuangan",
    "Profit and Loss": "Laba Rugi",
    "Bagan Akun": "Bagan Akun",
    "Manajemen Voucher": "Manajemen Voucher",
    "Buku Besar Umum": "Buku Besar Umum",
    "Piutang": "Piutang",
    "Hutang": "Hutang",
    "Ekspor Data": "Ekspor Data",
    "Neraca Saldo": "Neraca Saldo",
    "Neraca Keuangan": "Neraca Keuangan",
    "Laba Rugi": "Laba Rugi"
};

// Translations
const translations = {
    id: {
        headerTitle: "Program Akuntansi INNi",
        headerSlogan: '"Mempermudah Akuntansi, Memberdayakan Bisnis Anda"',
        navHome: "Beranda",
        navFeatures: "Fitur",
        navBenefits: "Manfaat",
        navInterface: "Klien",
        navContact: "Kontak",
        navProfile: "Profil",
        introTitle: "Selamat Datang di Program Akuntansi INNi",
        introText: "Program Akuntansi INNi dirancang untuk UKM, CV, BUMDes, dan Koperasi, menawarkan solusi akuntansi keuangan yang terjangkau dan ramah pengguna untuk menyederhanakan operasi bisnis Anda.",
        contactBtn: "Hubungi Kami",
        featuresTitle: "Fitur Utama",
        feature1Title: "Bagan Akun",
        feature1Desc: "Klasifikasikan akun keuangan seperti aset, liabilitas, dan ekuitas dengan mudah.",
        feature1LearnMore: "Pelajari Lebih Lanjut",
        feature2Title: "Manajemen Voucher",
        feature2Desc: "Buat dan lacak voucher transaksi, termasuk diskon dan pembayaran.",
        feature2LearnMore: "Pelajari Lebih Lanjut",
        feature3Title: "Buku Besar Umum",
        feature3Desc: "Catatan komprehensif dari semua transaksi keuangan untuk pelaporan yang akurat.",
        feature3LearnMore: "Pelajari Lebih Lanjut",
        feature4Title: "Piutang",
        feature4Desc: "Kelola piutang pelanggan dengan pelacakan terperinci.",
        feature4LearnMore: "Pelajari Lebih Lanjut",
        feature5Title: "Hutang",
        feature5Desc: "Lacak dan kelola utang kepada pemasok atau pihak lain.",
        feature5LearnMore: "Pelajari Lebih Lanjut",
        feature6Title: "Ekspor Data",
        feature6Desc: "Ekspor data ke PDF atau Excel untuk analisis lebih lanjut dengan laporan yang dapat disesuaikan.",
        feature6LearnMore: "Pelajari Lebih Lanjut",
        feature7Title: "Neraca Saldo",
        feature7Desc: "Lihat saldo akun secara menyeluruh untuk analisis keuangan.",
        feature7LearnMore: "Pelajari Lebih Lanjut",
        feature8Title: "Neraca Keuangan",
        feature8Desc: "Pantau arus kas dan posisi keuangan secara real-time.",
        feature8LearnMore: "Pelajari Lebih Lanjut",
        feature9Title: "Laba Rugi",
        feature9Desc: "Hasilkan laporan laba rugi untuk evaluasi kinerja bisnis.",
        feature9LearnMore: "Pelajari Lebih Lanjut",
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
        contactText: "Siap menyederhanakan akuntansi Anda? Hubungi kami untuk diskusi lebih lanjut atau jadwalkan demonstrasi produk.",
        footerText: "© 2025 Program Akuntansi INNi. Seluruh hak cipta dilindungi.",
        modalClose: "Tutup",
        contactModalTitle: "Hubungi Kami Sekarang!",
        contactModalText: "Siap menyederhanakan akuntansi Anda? Mari kita bicara!",
        scheduleDemo: "Jadwalkan Demo",
        contactAlert: "Siap menyederhanakan akuntansi Anda? Hubungi kami di zabidin_buf@yahoo.com atau telepon 081932278584 untuk jadwal demo!"
    },
    en: {
        headerTitle: "INNi Accounting Program",
        headerSlogan: '"Simplifying Accounting, Empowering Your Business"',
        navHome: "Home",
        navFeatures: "Features",
        navBenefits: "Benefits",
        navInterface: "Client",
        navContact: "Contact",
        navProfile: "Profile",
        introTitle: "Welcome to INNi Accounting Program",
        introText: "INNi Accounting Program is designed for SMEs, CVs, BUMDes, and Cooperatives, offering affordable and user-friendly financial accounting solutions to streamline your business operations.",
        contactBtn: "Contact Us",
        featuresTitle: "Key Features",
        feature1Title: "Chart of Accounts",
        feature1Desc: "Classify financial accounts like assets, liabilities, and equity with ease.",
        feature1LearnMore: "Learn More",
        feature2Title: "Voucher Management",
        feature2Desc: "Create and track transaction vouchers, including discounts and payments.",
        feature2LearnMore: "Learn More",
        feature3Title: "General Ledger",
        feature3Desc: "Comprehensive record of all financial transactions for accurate reporting.",
        feature3LearnMore: "Learn More",
        feature4Title: "Accounts Receivable",
        feature4Desc: "Manage customer receivables with detailed tracking.",
        feature4LearnMore: "Learn More",
        feature5Title: "Accounts Payable",
        feature5Desc: "Track and manage debts to suppliers or other parties.",
        feature5LearnMore: "Learn More",
        feature6Title: "Data Export",
        feature6Desc: "Export data to PDF or Excel for further analysis with customizable reports.",
        feature6LearnMore: "Learn More",
        feature7Title: "Trial Balance",
        feature7Desc: "View account balances comprehensively for financial analysis.",
        feature7LearnMore: "Learn More",
        feature8Title: "Financial Overview",
        feature8Desc: "Monitor cash flow and financial position in real-time.",
        feature8LearnMore: "Learn More",
        feature9Title: "Profit and Loss",
        feature9Desc: "Generate profit and loss reports to evaluate business performance.",
        feature9LearnMore: "Learn More",
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
        contactText: "Ready to simplify your accounting? Contact us to discuss further or schedule a product demonstration.",
        footerText: "© 2025 INNi Accounting Program. All rights reserved.",
        modalClose: "Close",
        contactModalTitle: "Contact Us Now!",
        contactModalText: "Ready to simplify your accounting? Let's talk!",
        scheduleDemo: "Schedule a Demo",
        contactAlert: "Ready to simplify your accounting? Reach out to us at zabidin_buf@yahoo.com or call 081932278584 to schedule a demo!"
    }
};

// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    const isExpanded = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.setAttribute('aria-hidden', isExpanded);
});

// Smooth Scroll and Close Mobile Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

// Highlight Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-menu a, #mobile-menu a');
const headerHeight = document.querySelector('header').offsetHeight;

function highlightNav() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('text-blue-300', 'font-bold');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('text-blue-300', 'font-bold');
        }
    });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// Modal Handling
const featureModal = document.getElementById('feature-modal');
const imageModal = document.getElementById('image-modal');
const contactModal = document.getElementById('contact-modal');
const featureCarouselModal = document.getElementById('feature-carousel-modal');

function closeAllModals() {
    featureModal.classList.add('hidden');
    imageModal.classList.add('hidden');
    contactModal.classList.add('hidden');
    featureCarouselModal.classList.add('hidden');
    featureModal.setAttribute('aria-hidden', 'true');
    imageModal.setAttribute('aria-hidden', 'true');
    contactModal.setAttribute('aria-hidden', 'true');
    featureCarouselModal.setAttribute('aria-hidden', 'true');
    stopFeatureAutoPlay();
    startAutoPlay();
}

// Main Carousel
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;
let autoPlayInterval;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-blue-500', index === currentIndex);
        dot.classList.toggle('bg-gray-300', index !== currentIndex);
        dot.setAttribute('aria-selected', index === currentIndex);
    });
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (!featureCarouselModal.classList.contains('hidden') || !imageModal.classList.contains('hidden')) return;
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 8000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    startAutoPlay();
});

nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    startAutoPlay();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
        startAutoPlay();
    });
});

const carouselContainer = carousel.parentElement;
carouselContainer.addEventListener('mouseenter', stopAutoPlay);
carouselContainer.addEventListener('mouseleave', startAutoPlay);

// Feature Carousel
const featureCarousel = document.getElementById('feature-carousel');
const featurePrevBtn = document.getElementById('feature-prev-btn');
const featureNextBtn = document.getElementById('feature-next-btn');
const featureCarouselDots = document.getElementById('feature-carousel-dots');
const featureCarouselClose = document.getElementById('feature-carousel-close');
let featureCurrentIndex = 0;
let featureAutoPlayInterval;

function updateFeatureCarousel() {
    featureCarousel.style.transform = `translateX(-${featureCurrentIndex * 100}%)`;
    const dots = featureCarouselDots.querySelectorAll('.feature-carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-blue-500', index === featureCurrentIndex);
        dot.classList.toggle('bg-gray-300', index !== featureCurrentIndex);
        dot.setAttribute('aria-selected', index === featureCurrentIndex);
    });
}

function startFeatureAutoPlay() {
    featureAutoPlayInterval = setInterval(() => {
        if (!imageModal.classList.contains('hidden')) return;
        const totalFeatureSlides = featureCarousel.querySelectorAll('.feature-carousel-item').length;
        featureCurrentIndex = (featureCurrentIndex + 1) % totalFeatureSlides;
        updateFeatureCarousel();
    }, 8000);
}

function stopFeatureAutoPlay() {
    clearInterval(featureAutoPlayInterval);
}

function loadFeatureCarousel(feature) {
    featureCarousel.innerHTML = '';
    featureCarouselDots.innerHTML = '';
    const featureKey = featureNameMapping[feature] || feature;
    const images = featureImages[featureKey] || [];
    if (!images.length) {
        console.error(`No images found for feature: ${featureKey}`);
        return;
    }
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'feature-carousel-item min-w-full flex flex-col justify-center items-center';
        slide.innerHTML = `
          <img src="${img.src}" alt="${featureTranslations[currentLang][featureKey][index]?.alt || img.alt}" class="w-full max-h-[400px] object-contain rounded-lg shadow-md cursor-pointer" data-fullscreen-src="${img.src}" loading="lazy">
          <p class="text-center mt-4 text-gray-600">${featureTranslations[currentLang][featureKey][index]?.caption || img.caption}</p>
        `;
        featureCarousel.appendChild(slide);
        const dot = document.createElement('button');
        dot.className = `feature-carousel-dot w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`;
        dot.setAttribute('data-index', index);
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        dot.setAttribute('role', 'tab');
        dot.addEventListener('click', () => {
            stopFeatureAutoPlay();
            featureCurrentIndex = parseInt(dot.getAttribute('data-index'));
            updateFeatureCarousel();
            startFeatureAutoPlay();
        });
        featureCarouselDots.appendChild(dot);
    });
    featureCurrentIndex = 0;
    updateFeatureCarousel();
}

function setupFeatureButtons() {
    const featureButtons = document.querySelectorAll('.feature-btn');
    featureButtons.forEach(button => {
        button.removeEventListener('click', handleFeatureButtonClick);
        button.addEventListener('click', handleFeatureButtonClick);
    });
}

function handleFeatureButtonClick() {
    closeAllModals();
    const feature = this.parentElement.querySelector('h3').textContent;
    document.getElementById('feature-carousel-title').textContent = currentLang === 'id'
        ? `Antarmuka Program Akuntansi INNi (${feature})`
        : `INNi Accounting Program Interface (${feature})`;
    loadFeatureCarousel(feature);
    featureCarouselModal.classList.remove('hidden');
    featureCarouselModal.setAttribute('aria-hidden', 'false');
    startFeatureAutoPlay();
}

featurePrevBtn.addEventListener('click', () => {
    stopFeatureAutoPlay();
    const totalFeatureSlides = featureCarousel.querySelectorAll('.feature-carousel-item').length;
    featureCurrentIndex = (featureCurrentIndex - 1 + totalFeatureSlides) % totalFeatureSlides;
    updateFeatureCarousel();
    startFeatureAutoPlay();
});

featureNextBtn.addEventListener('click', () => {
    stopFeatureAutoPlay();
    const totalFeatureSlides = featureCarousel.querySelectorAll('.feature-carousel-item').length;
    featureCurrentIndex = (featureCurrentIndex + 1) % totalFeatureSlides;
    updateFeatureCarousel();
    startFeatureAutoPlay();
});

featureCarouselClose.addEventListener('click', closeAllModals);

featureCarouselModal.addEventListener('click', (e) => {
    if (e.target === featureCarouselModal) {
        closeAllModals();
    }
});

featureCarouselModal.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.hasAttribute('data-fullscreen-src')) {
        const src = e.target.getAttribute('data-fullscreen-src');
        document.getElementById('fullscreen-image').src = src;
        document.getElementById('fullscreen-image-label').textContent = e.target.getAttribute('alt');
        imageModal.classList.remove('hidden');
        imageModal.setAttribute('aria-hidden', 'false');
        stopFeatureAutoPlay();
        imageModal.style.zIndex = 70;
    }
});

document.getElementById('image-modal-close').addEventListener('click', () => {
    imageModal.classList.add('hidden');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModal.style.zIndex = 50;
    startFeatureAutoPlay();
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.classList.add('hidden');
        imageModal.setAttribute('aria-hidden', 'true');
        imageModal.style.zIndex = 50;
        startFeatureAutoPlay();
    }
});

const carouselImages = document.querySelectorAll('.carousel-item img');
carouselImages.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('data-fullscreen-src');
        document.getElementById('fullscreen-image').src = src;
        document.getElementById('fullscreen-image-label').textContent = image.getAttribute('alt');
        imageModal.classList.remove('hidden');
        imageModal.setAttribute('aria-hidden', 'false');
        imageModal.style.zIndex = 70;
        stopAutoPlay();
    });
});

document.getElementById('contact-btn').addEventListener('click', () => {
    closeAllModals();
    contactModal.classList.remove('hidden');
    contactModal.setAttribute('aria-hidden', 'false');
});

document.getElementById('contact-modal-close').addEventListener('click', closeAllModals);

document.getElementById('schedule-demo').addEventListener('click', () => {
    window.location.href = 'mailto:zabidin_buf@yahoo.com?subject=Schedule%20Demo';
    closeAllModals();
});

// Email link obfuscation
document.querySelectorAll('.contact-email').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.getAttribute('data-email');
        window.location.href = `mailto:${email}`;
    });
});

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
    if (e.key === 'ArrowLeft' && !featureCarouselModal.classList.contains('hidden')) {
        featurePrevBtn.click();
    }
    if (e.key === 'ArrowRight' && !featureCarouselModal.classList.contains('hidden')) {
        featureNextBtn.click();
    }
    if (e.key === 'ArrowLeft' && !carousel.classList.contains('hidden')) {
        prevBtn.click();
    }
    if (e.key === 'ArrowRight' && !carousel.classList.contains('hidden')) {
        nextBtn.click();
    }
});

// Language Switch
let currentLang = localStorage.getItem('language') || 'id';
const langButtons = document.querySelectorAll('#btn-id, #btn-en, #mobile-btn-id, #mobile-btn-en');

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    langButtons.forEach(btn => {
        if (btn.id.includes('btn-id') && lang === 'id') {
            btn.classList.add('bg-blue-700', 'text-white');
        } else if (btn.id.includes('btn-en') && lang === 'en') {
            btn.classList.add('bg-blue-700', 'text-white');
        } else {
            btn.classList.remove('bg-blue-700', 'text-white');
        }
    });

    document.querySelector('h1').textContent = translations[lang].headerTitle;
    document.querySelector('h1 + p').textContent = translations[lang].headerSlogan;
    document.querySelectorAll('#nav-menu a')[0].textContent = translations[lang].navHome;
    document.querySelectorAll('#nav-menu a')[1].textContent = translations[lang].navFeatures;
    document.querySelectorAll('#nav-menu a')[2].textContent = translations[lang].navBenefits;
    document.querySelectorAll('#nav-menu a')[3].textContent = translations[lang].navInterface;
    document.querySelectorAll('#nav-menu a')[4].textContent = translations[lang].navContact;
    document.querySelectorAll('#nav-menu a')[5].textContent = translations[lang].navProfile;
    document.querySelectorAll('#mobile-menu a')[0].textContent = translations[lang].navHome;
    document.querySelectorAll('#mobile-menu a')[1].textContent = translations[lang].navFeatures;
    document.querySelectorAll('#mobile-menu a')[2].textContent = translations[lang].navBenefits;
    document.querySelectorAll('#mobile-menu a')[3].textContent = translations[lang].navInterface;
    document.querySelectorAll('#mobile-menu a')[4].textContent = translations[lang].navContact;
    document.querySelectorAll('#mobile-menu a')[5].textContent = translations[lang].navProfile;
    document.querySelector('#intro h2').textContent = translations[lang].introTitle;
    document.querySelector('#intro p').textContent = translations[lang].introText;
    document.querySelector('#contact-btn').textContent = translations[lang].contactBtn;
    document.querySelector('#features h2').textContent = translations[lang].featuresTitle;
    document.querySelectorAll('#features h3')[0].textContent = translations[lang].feature1Title;
    document.querySelectorAll('#features p')[0].textContent = translations[lang].feature1Desc;
    document.querySelectorAll('.feature-btn')[0].textContent = translations[lang].feature1LearnMore;
    document.querySelectorAll('#features h3')[1].textContent = translations[lang].feature2Title;
    document.querySelectorAll('#features p')[1].textContent = translations[lang].feature2Desc;
    document.querySelectorAll('.feature-btn')[1].textContent = translations[lang].feature2LearnMore;
    document.querySelectorAll('#features h3')[2].textContent = translations[lang].feature3Title;
    document.querySelectorAll('#features p')[2].textContent = translations[lang].feature3Desc;
    document.querySelectorAll('.feature-btn')[2].textContent = translations[lang].feature3LearnMore;
    document.querySelectorAll('#features h3')[3].textContent = translations[lang].feature4Title;
    document.querySelectorAll('#features p')[3].textContent = translations[lang].feature4Desc;
    document.querySelectorAll('.feature-btn')[3].textContent = translations[lang].feature4LearnMore;
    document.querySelectorAll('#features h3')[4].textContent = translations[lang].feature5Title;
    document.querySelectorAll('#features p')[4].textContent = translations[lang].feature5Desc;
    document.querySelectorAll('.feature-btn')[4].textContent = translations[lang].feature5LearnMore;
    document.querySelectorAll('#features h3')[5].textContent = translations[lang].feature6Title;
    document.querySelectorAll('#features p')[5].textContent = translations[lang].feature6Desc;
    document.querySelectorAll('.feature-btn')[5].textContent = translations[lang].feature6LearnMore;
    document.querySelectorAll('#features h3')[6].textContent = translations[lang].feature7Title;
    document.querySelectorAll('#features p')[6].textContent = translations[lang].feature7Desc;
    document.querySelectorAll('.feature-btn')[6].textContent = translations[lang].feature7LearnMore;
    document.querySelectorAll('#features h3')[7].textContent = translations[lang].feature8Title;
    document.querySelectorAll('#features p')[7].textContent = translations[lang].feature8Desc;
    document.querySelectorAll('.feature-btn')[7].textContent = translations[lang].feature8LearnMore;
    document.querySelectorAll('#features h3')[8].textContent = translations[lang].feature9Title;
    document.querySelectorAll('#features p')[8].textContent = translations[lang].feature9Desc;
    document.querySelectorAll('.feature-btn')[8].textContent = translations[lang].feature9LearnMore;
    document.querySelector('#benefits h2').textContent = translations[lang].benefitsTitle;
    document.querySelectorAll('#benefits p')[0].textContent = translations[lang].benefit1;
    document.querySelectorAll('#benefits p')[1].textContent = translations[lang].benefit2;
    document.querySelectorAll('#benefits p')[2].textContent = translations[lang].benefit3;
    document.querySelectorAll('#benefits p')[3].textContent = translations[lang].benefit4;
    document.querySelector('#client h2').textContent = translations[lang].clientTitle;
    document.querySelectorAll('.carousel-item img')[0].setAttribute('alt', translations[lang].slide1Alt);
    document.querySelectorAll('.carousel-item p')[0].textContent = translations[lang].slide1Caption;
    document.querySelectorAll('.carousel-item img')[1].setAttribute('alt', translations[lang].slide2Alt);
    document.querySelectorAll('.carousel-item p')[1].textContent = translations[lang].slide2Caption;
    document.querySelectorAll('.carousel-item img')[2].setAttribute('alt', translations[lang].slide3Alt);
    document.querySelectorAll('.carousel-item p')[2].textContent = translations[lang].slide3Caption;
    document.querySelectorAll('.carousel-item img')[3].setAttribute('alt', translations[lang].slide4Alt);
    document.querySelectorAll('.carousel-item p')[3].textContent = translations[lang].slide4Caption;
    document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
    document.querySelector('#contact p').textContent = translations[lang].contactText;
    document.querySelector('footer p').textContent = translations[lang].footerText;
    document.querySelector('#modal-close').textContent = translations[lang].modalClose;
    document.querySelector('#feature-carousel-close').textContent = translations[lang].modalClose;
    document.getElementById('contact-modal-title').textContent = translations[lang].contactModalTitle;
    document.getElementById('contact-modal-text').textContent = translations[lang].contactModalText;
    document.getElementById('schedule-demo').textContent = translations[lang].scheduleDemo;
    document.getElementById('contact-modal-close').textContent = translations[lang].modalClose;

    // Update feature buttons
    setupFeatureButtons();
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.id.includes('btn-id') ? 'id' : 'en';
        updateLanguage(lang);
    });
});

// Initial setup
setupFeatureButtons();
updateLanguage(currentLang);
startAutoPlay();

// Fallback for no JavaScript
document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
});