# 🎯 APPS TEMPLATES - 67 CONCEPTO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0

---

## 📌 OBJETIVO

Documentar la estructura técnica de las apps demo (67concepto-templates) sin exponer código real del backend privado (67concepto-apps).

Las demos son **UX showcases** - muestran funcionalidad pero sin backend real.

---

## 🏗️ ARQUITECTURA DEMOS

### Stack (Templates - PÚBLICO)

```
Frontend Demo:
├─ HTML5 puro
├─ CSS3 (sin frameworks pesados)
├─ JavaScript vanilla (interactividad)
├─ Data mock en JSON local
└─ Almacenamiento: LocalStorage

Hosting:
├─ GitHub Pages
├─ URL: apps.67concepto.com/demos/[giro]
└─ Sin backend real
```

### Stack Real (Apps - PRIVADO)

```
Frontend Real:
├─ React 18+
├─ Axios (HTTP client)
├─ Redux (state management)
└─ JWT para auth

Backend Real:
├─ Node.js + Express
├─ PostgreSQL database
├─ JWT + bcrypt
├─ Stripe API
└─ Twilio WhatsApp

Hosting:
├─ Railway/Render
├─ URL: saas.67concepto.com
└─ Con backend completo
```

---

## 📂 ESTRUCTURA CARPETAS (Templates)

```
67concepto-templates/public/demos/[GIRO]/
│
├─ index.html (Punto de entrada)
├─ styles.css (Estilos locales)
├─ main.js (Lógica interactividad)
├─ data-mock.json (Datos simulados)
│
├─ screenshots/
│   ├─ screen-1.jpg
│   ├─ screen-2.jpg
│   └─ screen-3.jpg
│
├─ components/
│   ├─ navbar.html (Componente reutilizable)
│   ├─ sidebar.html
│   ├─ dashboard.html
│   └─ modal.html
│
└─ assets/
    ├─ icons/
    ├─ images/
    └─ fonts/
```

---

## 🎨 COMPONENTES BASE (Reutilizables)

Cada demo usa los mismos componentes base. Solo cambia el contenido.

### 1. NAVBAR

```html
<nav class="navbar">
  <div class="navbar__brand">
    <img src="/assets/logo.svg" alt="67 Concepto">
    <span>Dashboard [Giro]</span>
  </div>
  <div class="navbar__user">
    <span>Juan Pérez</span>
    <button class="btn-logout">Cerrar sesión</button>
  </div>
</nav>
```

**Features:**
- Logo de marca
- Nombre usuario
- Botón logout (interactivo)

---

### 2. SIDEBAR

```html
<aside class="sidebar">
  <nav class="sidebar__menu">
    <a href="#dashboard" class="menu-item active">
      <i class="icon-dashboard"></i>
      <span>Dashboard</span>
    </a>
    <a href="#inventario" class="menu-item">
      <i class="icon-box"></i>
      <span>Inventario</span>
    </a>
    <a href="#reportes" class="menu-item">
      <i class="icon-chart"></i>
      <span>Reportes</span>
    </a>
    <a href="#configuracion" class="menu-item">
      <i class="icon-settings"></i>
      <span>Configuración</span>
    </a>
  </nav>
</aside>
```

**Features:**
- Navegación principal
- Iconos
- Indicador activo
- Responsive (hide en mobile)

---

### 3. DASHBOARD TEMPLATE

```html
<main class="dashboard">
  <header class="dashboard__header">
    <h1>Dashboard</h1>
    <p class="dashboard__date">Hoy: 24 de Julio 2026</p>
  </header>
  
  <section class="cards-container">
    <div class="card card--metric">
      <h3>Ventas Hoy</h3>
      <p class="number">$2,450</p>
      <span class="badge badge--success">+18% vs ayer</span>
    </div>
    <!-- Más cards -->
  </section>
</main>
```

**Features:**
- Header con título y fecha
- Cards de métricas
- Badges de estado
- Datos de mock.json

---

### 4. TABLA REUTILIZABLE

```html
<table class="table">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <!-- Datos inyectados con JS -->
  </tbody>
</table>
```

**Features:**
- Headers claros
- Filas con hover
- Paginación (si muchas filas)
- Sorting por columnas
- Búsqueda

---

### 5. GRÁFICO (Chart.js)

```html
<div class="chart-container">
  <canvas id="salesChart"></canvas>
</div>

<script>
  const ctx = document.getElementById('salesChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: mockData.salesByDay,
    options: {
      responsive: true,
      color: '#1F2937'
    }
  });
</script>
```

**Features:**
- Gráficos con datos mock
- Responsive
- Colores dinámicos por giro
- Sin llamadas API (es demo)

---

### 6. MODAL

```html
<div class="modal" id="modalUpgrade">
  <div class="modal__content">
    <button class="modal__close">&times;</button>
    <h2>¿Listo para actualizar?</h2>
    <p>Acceso a todas las funciones</p>
    <button class="btn btn--primary">Comenzar ahora</button>
    <button class="btn btn--secondary">Seguir probando</button>
  </div>
</div>
```

**Features:**
- Overlay oscuro
- Contenido centrado
- Botones CTA
- Cerrar con X o ESC
- Animaciones suaves

---

## 📊 DATA MOCK (Estructura JSON)

Cada demo tiene un `data-mock.json` con estructura estándar:

```json
{
  "user": {
    "id": "user_123",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "avatar": "/assets/avatar.jpg"
  },
  
  "metrics": {
    "salesDay": 2450,
    "salesMonth": 45600,
    "clients": 234,
    "activeSubscriptions": 189
  },
  
  "salesByDay": [
    { "date": "2024-07-20", "amount": 1200 },
    { "date": "2024-07-21", "amount": 1890 },
    { "date": "2024-07-22", "amount": 2450 }
  ],
  
  "items": [
    {
      "id": 1,
      "name": "Tacos al pastor",
      "quantity": 45,
      "price": 55,
      "category": "Alimentos"
    }
  ],
  
  "clients": [
    {
      "id": 1,
      "name": "María García",
      "lastVisit": "2024-07-24",
      "totalSpent": 2500,
      "phone": "+5511234567"
    }
  ]
}
```

---

## ⚙️ JAVASCRIPT (Interactividad)

```javascript
// 1. Cargar datos mock
const loadMockData = async () => {
  const response = await fetch('./data-mock.json');
  return response.json();
};

// 2. Renderizar dashboard
const renderDashboard = (data) => {
  document.querySelector('.metric-sales').textContent = `$${data.metrics.salesDay}`;
  document.querySelector('.metric-clients').textContent = data.metrics.clients;
};

// 3. Manejador de eventos
document.querySelector('.menu-item').addEventListener('click', (e) => {
  const section = e.target.getAttribute('href');
  switchSection(section);
});

// 4. Contador prueba (días restantes)
const startTrialCounter = () => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  setInterval(() => {
    const now = new Date();
    const daysLeft = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
    document.querySelector('.trial-counter').textContent = `${daysLeft} días`;
  }, 1000);
};

// 5. Modal upgrade (simulado)
document.querySelector('.btn-upgrade').addEventListener('click', () => {
  document.getElementById('modalUpgrade').style.display = 'block';
  document.querySelector('.btn-upgrade-now').addEventListener('click', () => {
    window.location.href = 'https://saas.67concepto.com/checkout';
  });
});
```

---

## 🎯 FLUJO DE UNA DEMO

### Paso 1: Usuario entra a apps.67concepto.com

```
Galería de demos
├─ 8 cards (una por giro)
├─ Screenshot preview
├─ Descripción corta
└─ Botón "Ver demo"
```

### Paso 2: Abre demo de giro

```
URL: apps.67concepto.com/demos/restaurante

1. Load HTML
2. Load data-mock.json
3. Inyectar datos en componentes
4. Mostrar dashboard funcional
5. Permitir interacción (tabla, gráficos, modales)
```

### Paso 3: Interactúa

```
Usuario puede:
├─ Navegar menu
├─ Ver gráficos
├─ Buscar en tabla
├─ Abrir modals
└─ Ver contador "X días"
```

### Paso 4: CTA visible

```
Modal superior:
├─ "Tu prueba vence en 4 días"
├─ Botón: "Contrata ahora"
└─ Link a checkout real (saas.67concepto.com)
```

---

## 📱 DEMO POR GIRO (Lo que debe tener)

### GIMNASIO

**Pantallas:**
1. Dashboard
   - Socios activos hoy
   - Clases programadas
   - Ingresos del mes

2. Socios
   - Tabla de afiliados
   - Membresías activas
   - Días sin asistir
   - Botón "Enviar recordatorio"

3. Clases
   - Horarios
   - Aforo disponible
   - Asistencia

4. Reportes
   - Ingresos por membresía
   - Tasa cancelación

---

### RESTAURANTE

**Pantallas:**
1. Dashboard
   - Ventas hoy
   - Productos más vendidos
   - Mesas disponibles

2. POS (simulado)
   - Botones productos
   - Cálculo automático
   - Efectivo / Tarjeta

3. Inventario
   - Stock actual
   - Alertas bajas
   - Órdenes pendientes

4. Reportes
   - Ventas por categoría
   - Productos rentables

---

### CLÍNICA

**Pantallas:**
1. Dashboard
   - Citas hoy
   - Pacientes nuevos
   - Ingresos

2. Calendario
   - Citas agendadas
   - Horarios disponibles
   - Recordatorios automáticos

3. Pacientes
   - Historial médico
   - Contactos
   - Próxima cita

4. Facturación
   - Recibos
   - Pago pendiente

---

## ✨ CARACTERÍSTICAS INTERACTIVAS

Todas las demos deben tener:

```
✅ Interactividad sin backend
├─ Cambiar secciones (menu)
├─ Filtrar tablas
├─ Abrir/cerrar modals
├─ Contador prueba (7 días)
└─ Botones CTA funcionan

✅ Datos realistas
├─ Mock data parece real
├─ Números creíbles
├─ Estructura profesional
└─ Sin placeholder "Lorem ipsum"

✅ Responsive
├─ Mobile: 1 columna
├─ Tablet: 2 columnas
├─ Desktop: Multi-columna
└─ Sin scrolleo horizontal

✅ Performance
├─ <500ms load
├─ Sin APIs reales
├─ Animaciones suaves
└─ Lighthouse 85+
```

---

## 🔗 DIFERENCIA: Demo vs Real

```
DEMO (67concepto-templates)          | REAL (67concepto-apps)
────────────────────────────────────┼──────────────────────────
HTML + CSS + JS puro                | React + Backend
Data en JSON local                  | PostgreSQL + APIs
Sin autenticación                   | JWT + bcrypt
Sin pago                            | Stripe integrado
Sin persistencia                    | Base de datos real
Localhost/GitHub Pages              | saas.67concepto.com
Muestra UI/UX                       | Funcionalidad completa
Público en GitHub                   | Privado
Propósito: Mostrar                  | Propósito: Usar
```

---

## 📋 CHECKLIST POR DEMO

Para cada giro:

- [ ] HTML structure completo
- [ ] CSS responsivo
- [ ] JavaScript funcional
- [ ] data-mock.json con datos reales
- [ ] 4+ pantallas principales
- [ ] Componentes base reutilizados
- [ ] Interactividad sin backend
- [ ] Contador prueba visible
- [ ] Modal upgrade funcional
- [ ] Screenshots de cada pantalla
- [ ] Lighthouse 85+
- [ ] Accesibilidad WCAG AA
- [ ] Testing en móvil/tablet/desktop

---

**Apps Templates v1.0 - Generado:** 24 de Julio 2026  
**Próxima revisión:** Después de FASE 5
