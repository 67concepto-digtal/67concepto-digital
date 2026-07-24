# 🗂️ ESTRUCTURA DE REPOSITORIOS - 67 CONCEPTO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0

---

## 📁 REPOSITORIO: 67concepto-digital

**URL:** https://github.com/67concepto-digtal/67concepto-digital  
**Hosting:** GitHub Pages  
**URL Pública:** 67concepto.com  
**Tipo:** Web Corporativa + Documentación

### Estructura de Carpetas

```
67concepto-digital/
├── docs/
│   ├── README.md (Manual Maestro)
│   ├── ESTRUCTURA.md (Este archivo)
│   ├── DIRECTRICES-TECNICAS.md
│   ├── CHECKLIST-DESARROLLO.md
│   ├── IDENTIDAD-VISUAL.md
│   ├── FLUJOS-COMERCIALES.md
│   ├── GIROS-CATALOGO.md
│   ├── APPS-TEMPLATES.md
│   ├── HOSTING-DEPLOYMENT.md
│   ├── CASOS-EXITO.md
│   ├── PROPUESTA-COMERCIAL.md
│   ├── DIAGNOSTICO-EMPRESARIAL.md
│   ├── FAQ-PREGUNTAS.md
│   ├── MANUAL-OPERATIVO.md
│   ├── PRESUPUESTO.md
│   └── ROADMAP.md
│
├── public/
│   ├── index.html (Homepage)
│   ├── css/
│   │   ├── styles.css
│   │   ├── responsive.css
│   │   └── animations.css
│   ├── js/
│   │   ├── main.js
│   │   ├── selector-giros.js
│   │   └── modal-prueba.js
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── hero-banner.jpg
│   │   │   └── giros/ (8 imágenes)
│   │   ├── fonts/
│   │   │   ├── playfair-display.woff2
│   │   │   └── inter.woff2
│   │   └── videos/
│   │       └── demo.mp4
│   │
│   ├── presentaciones/
│   │   ├── corporativa.html
│   │   ├── microempresas.html
│   │   └── pdfs/
│   │       ├── corporativa.pdf
│   │       └── microempresas.pdf
│   │
│   ├── catalogo/
│   │   ├── index.html
│   │   ├── gimnasio/
│   │   │   ├── index.html
│   │   │   └── data.json
│   │   ├── restaurante/
│   │   ├── clinica/
│   │   ├── estetica/
│   │   ├── laboratorio/
│   │   ├── gasolinera/
│   │   ├── mensajeria/
│   │   └���─ ecommerce/
│   │
│   └── paginas/
│       ├── quienes-somos.html
│       ├── contacto.html
│       ├── blog.html
│       └── politica-privacidad.html
│
├── _config.yml (GitHub Pages config)
├── .gitignore
├── package.json
└── README.md (Raíz del repo)
```

---

## 📁 REPOSITORIO: 67concepto-templates

**URL:** https://github.com/67concepto-digtal/67concepto-templates  
**Hosting:** GitHub Pages  
**URL Pública:** apps.67concepto.com  
**Tipo:** Demos de Apps (Sin backend real)

### Estructura de Carpetas

```
67concepto-templates/
├── docs/
│   └── INSTRUCCIONES.md
│
├── public/
│   ├── index.html (Galería de demos)
│   ├── css/
│   │   ├── base.css
│   │   └── demos.css
│   ├── js/
│   │   └── demos.js
│   │
│   ├── demos/
│   │   ├── gimnasio/
│   │   │   ├── index.html
│   │   │   ├── style.css
│   │   │   ├── data-mock.js
│   │   │   └── screenshots/
│   │   │
│   │   ├── restaurante/
│   │   ├── clinica/
│   │   ├── estetica/
│   │   ├── laboratorio/
│   │   ├── gasolinera/
│   │   ├── mensajeria/
│   │   └── ecommerce/
│   │
│   └── componentes-base/
│       ├── navbar.html
│       ├── sidebar.html
│       ├── dashboard.html
│       ├── tabla.html
│       ├── grafico.html
│       └── modal.html
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📁 REPOSITORIO: 67concepto-apps (PRIVADO)

**Tipo:** Backend SaaS Real  
**Hosting:** Railway/Render  
**URL:** api.67concepto.com / saas.67concepto.com  
**Acceso:** PRIVADO ⚠️

### Estructura de Carpetas

```
67concepto-apps/ (PRIVADO)
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── auth.js
│   │   │   └── payment.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Subscription.js
│   │   │   ├── Trial.js
│   │   │   └── App.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── apps.js
│   │   │   ├── users.js
│   │   │   └── payments.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── services/
│   │   │   ├── MailService.js
│   │   │   ├── WhatsAppService.js
│   │   │   ├── PaymentService.js
│   │   │   └── TrialService.js
│   │   │
│   │   └── app.js
│   │
│   ├── db/
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── schemas.sql
│   │
│   ├── tests/
│   │   ├── auth.test.js
│   │   ├── apps.test.js
│   │   └── payments.test.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── AppSelector.jsx
│   │   │   ├── TrialCounter.jsx
│   │   │   └── UpgradeModal.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Apps.jsx
│   │   │   ├── Settings.jsx
│   │   │   └── Billing.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── components.css
│   │   │
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── .env.example
│
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   └── DEPLOYMENT.md
│
├── .gitignore
├── docker-compose.yml
└── README.md (Repo privado - no mencionar código)
```

---

## 🔑 ARCHIVOS CRÍTICOS POR REPO

### 67concepto-digital

| Archivo | Propósito | Prioridad |
|---------|-----------|-----------|
| index.html | Homepage + selector giros | CRÍTICA |
| styles.css | Estilos globales | CRÍTICA |
| selector-giros.js | Interactividad selector | CRÍTICA |
| modal-prueba.js | Modal prueba gratis | CRÍTICA |
| catalogo/[giro]/data.json | Contenido por giro | ALTA |
| presentaciones/corporativa.html | Presentación ejecutiva | ALTA |
| presentaciones/microempresas.html | Presentación cercana | ALTA |

### 67concepto-templates

| Archivo | Propósito | Prioridad |
|---------|-----------|-----------|
| demos/[giro]/index.html | Demo de app por giro | CRÍTICA |
| componentes-base/*.html | Reutilizables UI | ALTA |
| demos/[giro]/data-mock.js | Datos simulados | MEDIA |

### 67concepto-apps

| Archivo | Propósito | Prioridad |
|---------|-----------|-----------|
| src/models/User.js | Schema usuario | CRÍTICA |
| src/models/Trial.js | Lógica prueba 7 días | CRÍTICA |
| src/services/PaymentService.js | Integración Stripe | CRÍTICA |
| db/schemas.sql | Database completa | CRÍTICA |
| frontend/src/components/Dashboard.jsx | Panel cliente | ALTA |

---

## 📊 RESUMEN ESTRUCTURA

```
TOTAL REPOS: 3
├─ 67concepto-digital (PÚBLICO)
├─ 67concepto-templates (PÚBLICO)
└─ 67concepto-apps (PRIVADO)

TOTAL ARCHIVOS: ~100+
TAMAÑO ESTIMADO: 500 MB (con assets)

LÍNEAS DE CÓDIGO ESTIMADAS:
├─ Frontend: 5,000-7,000 líneas
├─ Backend: 3,000-4,000 líneas
└─ Documentación: 2,000+ líneas
```

---

**Documento Actualizado:** 24 de Julio 2026  
**Próxima revisión:** Después de FASE 1
