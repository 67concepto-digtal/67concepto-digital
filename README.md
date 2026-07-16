<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="67 Concepto - Marketing Digital Profesional">
    <title>67 Concepto - Marketing Digital</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- BOTÓN IR AL INICIO (FIXED) -->
    <button id="scrollToTop" class="scroll-to-top">
        <span>⬆</span>
    </button>

    <!-- HEADER / NAVEGACIÓN -->
    <header class="header" id="header">
        <div class="container">
            <div class="navbar">
                <div class="logo-container">
                    <a href="#inicio" class="logo-link">
                        <img src="https://imgur.com/oSCyMHC.png" alt="67 Concepto Logo" class="logo-img">
                    </a>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="nav" id="nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#contacto">Contacto</a>
                    <a href="#renta" class="btn-renta-nav">Renta tu App</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="hero" id="inicio">
        <div class="container">
            <div class="hero-content">
                <h2>Impulsa Tu Negocio con Marketing Digital</h2>
                <p>Creamos posts, reels, webs y apps que transforman tu negocio</p>
                <button class="btn-principal">Comienza Ahora</button>
            </div>
        </div>
    </section>

    <!-- SECCIÓN DE SERVICIOS -->
    <section class="servicios" id="servicios">
        <div class="container">
            <h2>Nuestros Servicios</h2>
            <div class="servicios-grid">
                <div class="servicio-card">
                    <div class="servicio-icon">📱</div>
                    <h3>Posts & Reels</h3>
                    <p>Contenido viral optimizado para redes sociales que aumenta tu engagement</p>
                </div>
                <div class="servicio-card">
                    <div class="servicio-icon">🌐</div>
                    <h3>Diseño Web</h3>
                    <p>Páginas responsivas, modernas y orientadas a conversiones</p>
                </div>
                <div class="servicio-card">
                    <div class="servicio-icon">💻</div>
                    <h3>Aplicaciones Web</h3>
                    <p>Apps personalizadas para tu negocio, accesibles desde cualquier dispositivo</p>
                </div>
                <div class="servicio-card">
                    <div class="servicio-icon">📊</div>
                    <h3>Estrategia Digital</h3>
                    <p>Análisis, planning y ejecución de campañas que generan resultados</p>
                </div>
            </div>

            <!-- BOTÓN RENTA TU APP (DESTACADO) -->
            <div class="renta-section" id="renta">
                <h3>¿Quieres tu propia app?</h3>
                <p>Alquilala primero, pruebala con tus clientes y después compra tu dominio</p>
                <button class="btn-renta-destacado">
                    <span class="pulse"></span>
                    🚀 Renta tu App Ahora
                </button>
                <p class="renta-precio">Desde $100/mes • Sin compromiso a largo plazo</p>
            </div>
        </div>
    </section>

    <!-- SECCIÓN DE TESTIMONIOS (NUEVA) -->
    <section class="testimonios" id="testimonios">
        <div class="container">
            <h2>Lo que Dicen Nuestros Clientes</h2>
            <div class="testimonios-grid">
                <div class="testimonio-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p class="testimonio-texto">"67 Concepto transformó mi presencia digital. Mi negocio creció 300% en 3 meses"</p>
                    <p class="testimonio-autor">- Juan García, Restaurante</p>
                </div>
                <div class="testimonio-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p class="testimonio-texto">"La app que me crearon es exactamente lo que necesitaba. El soporte es impecable"</p>
                    <p class="testimonio-autor">- María López, Tienda Online</p>
                </div>
                <div class="testimonio-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p class="testimonio-texto">"Profesionales, puntuales y con resultados. Altamente recomendados"</p>
                    <p class="testimonio-autor">- Carlos Rodríguez, E-commerce</p>
                </div>
                <div class="testimonio-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p class="testimonio-texto">"El mejor equipo de marketing digital que he conocido. Excelente atención"</p>
                    <p class="testimonio-autor">- Ana Martínez, Consultoría</p>
                </div>
            </div>
            <button class="btn-ver-mas-testimonios">Ver Más Testimonios</button>
        </div>
    </section>

    <!-- SECCIÓN DE CONTACTO -->
    <section class="contacto" id="contacto">
        <div class="container">
            <h2>¿Listo para Transformar tu Negocio?</h2>
            <div class="contacto-grid">
                <div class="contacto-info">
                    <h3>📞 Teléfono</h3>
                    <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                </div>
                <div class="contacto-info">
                    <h3>📧 Email</h3>
                    <p><a href="mailto:info@67concepto.com">info@67concepto.com</a></p>
                </div>
                <div class="contacto-info">
                    <h3>📍 Ubicación</h3>
                    <p>Disponible en línea • USA</p>
                </div>
                <div class="contacto-info">
                    <h3>💬 Redes</h3>
                    <p>
                        <a href="#" target="_blank">Instagram</a> | 
                        <a href="#" target="_blank">Facebook</a>
                    </p>
                </div>
            </div>

            <form class="contact-form">
                <input type="text" placeholder="Tu Nombre" required>
                <input type="email" placeholder="Tu Email" required>
                <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
                <button type="submit" class="btn-principal">Enviar Mensaje</button>
            </form>
        </div>
    </section>

    <!-- FOOTER CON LOGO -->
    <footer class="footer">
        <div class="container">
            <img src="https://imgur.com/oSCyMHC.png" alt="67 Concepto Logo" class="logo-footer">
            <p>&copy; 2024 67 Concepto. Todos los derechos reservados.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

/* ===== VARIABLES GLOBALES ===== */
:root {
    --color-primary: #ff6b35;
    --color-primary-dark: #e55a2a;
    --color-secondary: #004e89;
    --color-accent: #f7931e;
    --color-text: #333;
    --color-text-light: #666;
    --color-bg: #f5f5f5;
    --color-white: #fff;
    --transition: all 0.3s ease;
    --shadow: 0 4px 15px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 25px rgba(0,0,0,0.15);
}

/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-bg);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== BOTÓN IR AL INICIO ===== */
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: var(--transition);
    box-shadow: var(--shadow-lg);
    z-index: 999;
}

.scroll-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.scroll-to-top:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-5px);
}

/* ===== HEADER / NAVEGACIÓN ===== */
.header {
    background: linear-gradient(135deg, var(--color-secondary) 0%, #003a70 100%);
    color: var(--color-white);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* ===== LOGO STYLES ===== */
.logo-container {
    display: flex;
    align-items: center;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: var(--transition);
}

.logo-link:hover {
    transform: scale(1.05);
}

.logo-img {
    height: 60px;
    width: auto;
    object-fit: contain;
    transition: var(--transition);
}

.logo-img:hover {
    filter: brightness(1.1);
}

.nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav a {
    color: var(--color-white);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 500;
    position: relative;
}

.nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
}

.nav a:hover::after {
    width: 100%;
}

.btn-renta-nav {
    background-color: var(--color-primary);
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    transition: var(--transition);
}

.btn-renta-nav:hover {
    background-color: var(--color-primary-dark);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--color-white);
    margin: 5px 0;
    border-radius: 3px;
    transition: var(--transition);
}

/* ===== HERO SECTION ===== */
.hero {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--color-white);
    padding: 5rem 2rem;
    text-align: center;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

.btn-principal {
    background-color: var(--color-accent);
    color: var(--color-white);
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(247, 147, 30, 0.3);
}

.btn-principal:hover {
    background-color: #ff9e1b;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(247, 147, 30, 0.4);
}

.btn-principal:active {
    transform: translateY(-1px);
}

/* ===== SERVICIOS SECTION ===== */
.servicios {
    padding: 4rem 2rem;
    background-color: var(--color-white);
}

.servicios h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: var(--color-secondary);
}

.servicios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.servicio-card {
    background: var(--color-bg);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-top: 4px solid var(--color-primary);
}

.servicio-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-top-color: var(--color-accent);
}

.servicio-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.servicio-card h3 {
    color: var(--color-secondary);
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
}

.servicio-card p {
    color: var(--color-text-light);
    line-height: 1.6;
}

/* ===== RENTA TU APP (DESTACADO) ===== */
.renta-section {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
    color: var(--color-white);
    padding: 3rem 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: var(--shadow-lg);
    margin-top: 2rem;
}

.renta-section h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.renta-section > p:first-of-type {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0.95;
}

.btn-renta-destacado {
    background-color: var(--color-white);
    color: var(--color-primary);
    border: none;
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 700;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-renta-destacado::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.3s ease;
}

.btn-renta-destacado:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.btn-renta-destacado:hover::before {
    left: 100%;
}

/* Animación de pulso */
.pulse {
    display: inline-block;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.1);
    }
}

.renta-precio {
    margin-top: 1rem;
    font-size: 0.95rem;
    opacity: 0.9;
}

/* ===== TESTIMONIOS SECTION (NUEVA) ===== */
.testimonios {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}

.testimonios h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: var(--color-secondary);
}

.testimonios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.testimonio-card {
    background: var(--color-white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-left: 5px solid var(--color-primary);
    position: relative;
}

.testimonio-card::before {
    content: '"';
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 3rem;
    color: var(--color-accent);
    opacity: 0.2;
}

.testimonio-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.stars {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.testimonio-texto {
    font-size: 1rem;
    color: var(--color-text);
    line-height: 1.8;
    margin-bottom: 1rem;
    font-style: italic;
}

.testimonio-autor {
    font-weight: 600;
    color: var(--color-secondary);
    font-size: 0.95rem;
    margin: 0;
}

.btn-ver-mas-testimonios {
    display: block;
    margin: 2rem auto 0;
    background-color: var(--color-secondary);
    color: var(--color-white);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
}

.btn-ver-mas-testimonios:hover {
    background-color: var(--color-primary);
    transform: translateY(-2px);
}

/* ===== CONTACTO SECTION ===== */
.contacto {
    padding: 4rem 2rem;
    background-color: var(--color-white);
}

.contacto h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: var(--color-secondary);
}

.contacto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.contacto-info {
    background: var(--color-bg);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
}

.contacto-info:hover {
    background-color: #e8e8e8;
    transform: translateY(-3px);
}

.contacto-info h3 {
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
}

.contacto-info p {
    color: var(--color-text-light);
}

.contacto-info a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
}

.contacto-info a:hover {
    text-decoration: underline;
}

.contact-form {
    display: grid;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 8px rgba(255, 107, 53, 0.2);
}

/* ===== FOOTER ===== */
.footer {
    background-color: var(--color-secondary);
    color: var(--color-white);
    padding: 2rem;
    text-align: center;
}

.logo-footer {
    height: 50px;
    width: auto;
    object-fit: contain;
    margin-bottom: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

/* ===== MEDIA QUERIES - RESPONSIVE ===== */

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }

    .nav {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background-color: var(--color-secondary);
        flex-direction: column;
        gap: 0;
        padding: 1rem;
        display: none;
        width: 100%;
    }

    .nav.active {
        display: flex;
    }

    .nav a {
        padding: 0.8rem;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .logo-img {
        height: 50px;
    }

    .hero-content h2 {
        font-size: 1.8rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .servicios h2,
    .testimonios h2,
    .contacto h2 {
        font-size: 1.6rem;
    }

    .scroll-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
    }

    .logo-footer {
        height: 40px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .logo-img {
        height: 45px;
    }

    .hero {
        min-height: 350px;
        padding: 2rem 1rem;
    }

    .hero-content h2 {
        font-size: 1.4rem;
    }

    .hero-content p {
        font-size: 0.9rem;
    }

    .btn-principal {
        padding: 0.8rem 1.5rem;
        font-size: 0.95rem;
    }

    .servicios,
    .testimonios,
    .contacto {
        padding: 2rem 1rem;
    }

    .servicios-grid,
    .testimonios-grid,
    .contacto-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .renta-section {
        padding: 2rem 1rem;
    }

    .renta-section h3 {
        font-size: 1.3rem;
    }

    .btn-renta-destacado {
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }

    .testimonio-card {
        padding: 1.5rem;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: 16px;
    }

    .scroll-to-top {
        bottom: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }

    .logo-footer {
        height: 35px;
    }
}

// ===== MENÚ MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

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

// ===== BOTÓN IR AL INICIO =====
const scrollToTopBtn = document.getElementById('scrollToTop');

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
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// ===== DETECCIÓN DE DISPOSITIVO =====
function detectarDispositivo() {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
}

console.log('Dispositivo detectado:', detectarDispositivo());

// ===== ANIMACIÓN AL CARGAR =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
