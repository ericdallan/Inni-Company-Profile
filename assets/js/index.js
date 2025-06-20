document.addEventListener('DOMContentLoaded', () => {
    // Toggle Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.setAttribute('aria-hidden', isExpanded);
        });
    }

    // Smooth Scroll and Close Mobile Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        mobileMenu.setAttribute('aria-hidden', 'true');
                    }
                }
            });
        }
    });

    // Highlight Navigation on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-menu a, #mobile-menu a');
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;

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
    const contactModal = document.getElementById('contact-modal');
    const contactModalBtn = document.getElementById('contact-modal-btn');
    const contactModalClose = document.getElementById('contact-modal-close');
    const useJasa = document.getElementById('use-jasa');

    function closeAllModals() {
        if (contactModal) {
            contactModal.classList.add('hidden');
            contactModal.setAttribute('aria-hidden', 'true');
        }
    }

    if (contactModalBtn) {
        contactModalBtn.addEventListener('click', () => {
            if (contactModal) {
                closeAllModals();
                contactModal.classList.remove('hidden');
                contactModal.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (contactModalClose) {
        contactModalClose.addEventListener('click', closeAllModals);
    }

    if (useJasa) {
        useJasa.addEventListener('click', () => {
            window.location.href = 'mailto:zabidin_buf@yahoo.com?subject=Use%20Our%20Services';
            closeAllModals();
        });
    }

    // Email link obfuscation
    document.querySelectorAll('.contact-email').forEach(link => {
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const email = link.getAttribute('data-email');
                if (email) {
                    window.location.href = `mailto:${email}`;
                }
            });
        }
    });

    // Keyboard Accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal) {
            closeAllModals();
        }
    });

    // Language Switch
    let currentLang = localStorage.getItem('language') || 'id';
    const langButtons = document.querySelectorAll('#btn-id, #btn-en, #mobile-btn-id, #mobile-btn-en');

    const translations = {
        id: {
            headerTitle: "PT. Integrasindo Multi Kreasi (INNi)",
            headerSlogan: '"Mempermudah Keuangan Anda"',
            navHome: "Beranda",
            navServices: "Layanan",
            navContact: "Kontak",
            introTitle: "Selamat Datang di PT. Integrasindo Multi Kreasi (INNi)",
            introText: "Kami adalah perusahaan yang menyediakan solusi keuangan terpercaya untuk UMKM dan Koperasi, dengan layanan inovatif untuk mendukung pengelolaan keuangan Anda.",
            viewPrograms: "Lihat Program Kami",
            contactBtn: "Hubungi Kami",
            servicesTitle: "Layanan Kami",
            service1Title: "Software Laporan Keuangan",
            service1Desc: "Penyediaan software digital untuk laporan keuangan yang akurat.",
            service2Title: "Pelaporan Pajak",
            service2Desc: "Pelaporan pajak pribadi dan usaha dengan mudah.",
            service3Title: "Konsultasi & Pelatihan",
            service3Desc: "Konsultasi dan pelatihan akuntansi serta pajak.",
            service4Title: "Legalitas Usaha",
            service4Desc: "Pendaftaran merk dan legalitas usaha (NIB, NPWP, dll).",
            contactTitle: "Hubungi Kami",
            contactText: "Siap mengoptimalkan keuangan bisnis Anda? Gunakan jasa kami untuk solusi keuangan terpercaya bagi UMKM dan Koperasi!",
            footerText: "© 2025 PT. Integrasindo Multi Kreasi (INNi). Seluruh hak cipta dilindungi.",
            modalClose: "Tutup",
            contactModalTitle: "Hubungi Kami Sekarang!",
            contactModalText: "Siap mengoptimalkan keuangan Anda? Kirim email kepada kami untuk memulai!",
            useJasa: "Kirim Email"
        },
        en: {
            headerTitle: "PT. Integrasindo Multi Kreasi (INNi)",
            headerSlogan: '"Simplifying Your Finances"',
            navHome: "Home",
            navServices: "Services",
            navContact: "Contact",
            introTitle: "Welcome to PT. Integrasindo Multi Kreasi (INNi)",
            introText: "We are a company providing trusted financial solutions for SMEs and Cooperatives, with innovative services to support your financial management.",
            viewPrograms: "View Our Programs",
            contactBtn: "Contact Us",
            servicesTitle: "Our Services",
            service1Title: "Financial Reporting Software",
            service1Desc: "Provision of digital software for accurate financial reporting.",
            service2Title: "Tax Reporting",
            service2Desc: "Easy tax reporting for individuals and businesses.",
            service3Title: "Consultation & Training",
            service3Desc: "Accounting and tax consultation and training.",
            service4Title: "Business Legalization",
            service4Desc: "Registration of trademarks and business legalization (NIB, NPWP, etc.).",
            contactTitle: "Contact Us",
            contactText: "Ready to optimize your business finances? Use our services for trusted financial solutions for SMEs and Cooperatives!",
            footerText: "© 2025 PT. Integrasindo Multi Kreasi (INNi). All rights reserved.",
            modalClose: "Close",
            contactModalTitle: "Contact Us Now!",
            contactModalText: "Ready to optimize your finances? Send us an email to get started!",
            useJasa: "Send Email"
        }
    };

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

        // Header
        document.querySelector('h1').textContent = translations[lang].headerTitle;
        document.querySelector('h1 + p').textContent = translations[lang].headerSlogan;

        // Navigation
        const navMenuLinks = document.querySelectorAll('#nav-menu a');
        const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
        navMenuLinks[0].textContent = translations[lang].navHome;
        navMenuLinks[1].textContent = translations[lang].navServices;
        navMenuLinks[2].textContent = translations[lang].navContact;
        mobileMenuLinks[0].textContent = translations[lang].navHome;
        mobileMenuLinks[1].textContent = translations[lang].navServices;
        mobileMenuLinks[2].textContent = translations[lang].navContact;

        // Intro Section
        document.querySelector('#intro h2').textContent = translations[lang].introTitle;
        document.querySelector('#intro p').textContent = translations[lang].introText;
        document.querySelector('#intro a').textContent = translations[lang].viewPrograms;

        // Services Section
        document.querySelector('#services h2').textContent = translations[lang].servicesTitle;
        const serviceTitles = document.querySelectorAll('#services h3');
        const serviceDescs = document.querySelectorAll('#services p');
        serviceTitles[0].textContent = translations[lang].service1Title;
        serviceDescs[0].textContent = translations[lang].service1Desc;
        serviceTitles[1].textContent = translations[lang].service2Title;
        serviceDescs[1].textContent = translations[lang].service2Desc;
        serviceTitles[2].textContent = translations[lang].service3Title;
        serviceDescs[2].textContent = translations[lang].service3Desc;
        serviceTitles[3].textContent = translations[lang].service4Title;
        serviceDescs[3].textContent = translations[lang].service4Desc;

        // Contact Section
        document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
        document.querySelector('#contact p').textContent = translations[lang].contactText;
        document.querySelector('#contact-modal-btn').textContent = translations[lang].contactBtn;

        // Footer
        document.querySelector('footer p').textContent = translations[lang].footerText;

        // Contact Modal
        if (document.getElementById('contact-modal-title')) {
            document.getElementById('contact-modal-title').textContent = translations[lang].contactModalTitle;
        }
        if (document.getElementById('contact-modal-text')) {
            document.getElementById('contact-modal-text').textContent = translations[lang].contactModalText;
        }
        if (useJasa) {
            useJasa.textContent = translations[lang].useJasa;
        }
        if (contactModalClose) {
            contactModalClose.textContent = translations[lang].modalClose;
        }
    }

    langButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                const lang = button.id.includes('btn-id') ? 'id' : 'en';
                updateLanguage(lang);
            });
        }
    });

    // Initial setup
    updateLanguage(currentLang);

    // Fallback for no JavaScript
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal) modal.classList.add('hidden');
    });
});