// ===== MENÚ MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Cerrar menú si hace click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            nav.classList.remove('active');
        }
    });
}

// ===== BOTÓN IR AL INICIO =====
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== VALIDAR FORMULARIO =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
}

// ===== BOTONES DE ACCIÓN =====
document.querySelectorAll('.btn-principal, .btn-renta-destacado, .btn-renta-nav').forEach(boton => {
    boton.addEventListener('click', function(e) {
        if (this.classList.contains('btn-renta-destacado') || this.classList.contains('btn-renta-nav')) {
            e.preventDefault();
            alert('¡Bienvenido! Te enviamos la información de planes de renta.');
        }
    });
});

// ===== EFECTO PARALLAX EN HERO =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) {
        return;
    }

    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// ===== DETECCIÓN DE DISPOSITIVO =====
function detectarDispositivo() {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
}

// ===== ANIMACIÓN AL CARGAR =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
