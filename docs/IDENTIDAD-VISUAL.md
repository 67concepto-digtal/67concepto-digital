# 🎨 IDENTIDAD VISUAL - 67 CONCEPTO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0

---

## 🎯 FILOSOFÍA DE DISEÑO

67 Concepto representa **crecimiento, confianza y especialización**.

El diseño debe comunicar:
- Profesionalismo sin ser frío
- Accesibilidad sin ser infantil
- Dinamismo sin ser caótico
- Modernidad sin perder atemporalidad

---

## 🌈 PALETA DE COLORES

### Colores Dinámicos por Giro

Cada giro tiene un color primario que lo identifica:

| Giro | Nombre | Hex | RGB | Uso |
|------|--------|-----|-----|-----|
| Gimnasio | Verde Energía | #22C55E | 34, 197, 94 | Vitalidad, movimiento |
| Restaurante | Rojo Naranja | #F97316 | 249, 115, 22 | Apetito, calor |
| Clínica | Azul Médico | #0EA5E9 | 14, 165, 233 | Confianza, salud |
| Estética | Rosa | #EC4899 | 236, 72, 153 | Belleza, elegancia |
| Laboratorio | Púrpura | #A855F7 | 168, 85, 247 | Ciencia, precisión |
| Gasolinera | Amarillo | #EAB308 | 234, 179, 8 | Energía, movimiento |
| Mensajería | Azul Claro | #06B6D4 | 6, 182, 212 | Velocidad, confianza |
| Ecommerce | Índigo | #6366F1 | 99, 102, 241 | Compra, seguridad |

### Colores Neutros

```
Negro Principal:    #1F2937 (usado en textos, bordes)
Blanco:             #FFFFFF (fondo, contraste)
Gris Claro:         #F3F4F6 (fondos secundarios)
Gris Medio:         #9CA3AF (labels, placeholders)
Gris Oscuro:        #4B5563 (textos secundarios)
```

### Variaciones de Colores

Cada color primario tiene 3 variantes:

```
Variante Light:   +40% lightness
Variante Base:    Color primario
Variante Dark:    -40% lightness

EJEMPLO (Verde Gimnasio):
├─ Light:   #86EFAC (hover, background)
├─ Base:    #22C55E (botones, links)
└─ Dark:    #15803D (active, pressed)
```

### Gradientes

```
Gradiente Principal:
└─ De color dinámico giro (base) → Light (40% opacidad)

Gradiente Secundario:
└─ De blanco → Gris Light (10% opacidad)

Uso: Fondos, overlays, transiciones
```

---

## 🔤 TIPOGRAFÍA

### Font Stack

```
Títulos (H1, H2, H3):
└─ Playfair Display
   (serif elegante, refinada)
   Weights: 700 (bold), 600 (semibold)

Cuerpo y UI:
└─ Inter
   (sans-serif moderna, legible)
   Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

Código (si aplica):
└─ Fira Code
   (monospace, limpia)
```

### Escala Tipográfica

```
H1 (Hero Title):        72px / 1.2 line-height / 700 weight
H2 (Main Title):        48px / 1.3 line-height / 700 weight
H3 (Section Title):     32px / 1.4 line-height / 600 weight
H4 (Subsection):        24px / 1.5 line-height / 600 weight
Body Large:             18px / 1.6 line-height / 400 weight
Body Regular:           16px / 1.6 line-height / 400 weight
Body Small:             14px / 1.5 line-height / 400 weight
Label:                  12px / 1.4 line-height / 600 weight uppercase

MOBILE (Reducciones):
H1:                     48px
H2:                     32px
H3:                     24px
Body Regular:           15px
```

### Ejemplos de Uso

```html
<!-- ✅ CORRECTO -->
<h1 class="title-h1">Tu negocio merece crecer</h1>
<h2 class="title-h2">Soluciones específicas</h2>
<p class="body-regular">Descripción clara y concisa</p>

<!-- ❌ INCORRECTO -->
<h1 style="font-size: 72px">Título</h1>
<p style="font-family: 'Playfair Display'">Texto normal</p>
```

---

## 📐 SPACING & LAYOUT

### Escala de Espacios (8px base)

```
xs:  4px   (muy pequeño)
sm:  8px   (pequeño)
md:  16px  (normal)
lg:  24px  (grande)
xl:  32px  (muy grande)
xxl: 48px  (extra)
xxxl: 64px (máximo)

Ejemplo:
├─ Padding botón:     md (16px)
├─ Margin entre items: lg (24px)
├─ Gap en grid:       md-lg (16-24px)
└─ Padding sección:   xxl-xxxl (48-64px)
```

### Grid & Breakpoints

```
Desktop:    1920px+  (4 columnas)
Laptop:     1440px+  (4 columnas)
Tablet:     768px    (2 columnas)
Mobile:     375px    (1 columna)

Padding por breakpoint:
├─ Desktop:  48px
├─ Laptop:   32px
├─ Tablet:   24px
└─ Mobile:   16px
```

### Ejemplos

```css
/* ✅ CORRECTO */
.container {
  padding: 64px 48px;  /* xxl vertical, xxl horizontal */
  margin: 0 auto;
  max-width: 1440px;
}

.section-title {
  margin-bottom: 24px;  /* lg */
  font-size: 32px;      /* h3 */
}

/* ❌ INCORRECTO */
.container {
  padding: 20px;  /* valores random */
  max-width: 100%;
}
```

---

## 🎨 COMPONENTES

### Botones

```
Botón Primario (Call-to-Action):
├─ Background: Color dinámico del giro
├─ Text: Blanco
├─ Padding: 12px 24px
├─ Border-radius: 6px
├─ Font: Inter 600, 16px
├─ Hover: Color Dark
├─ Active: Color Dark + shadow
└─ Disabled: Gris Medium + opacity 50%

Botón Secundario:
├─ Background: Transparent
├─ Border: 2px color dinámico
├─ Text: Color dinámico
├─ Hover: Background Light color
└─ Active: Background Light + darker text

Botón Outline:
├─ Background: Transparent
├─ Border: 1px Gris Medio
├─ Text: Gris Oscuro
├─ Hover: Border Gris Oscuro
└─ Active: Background Gris Light
```

### Cards

```
Card Base:
├─ Background: Blanco
├─ Border: 1px Gris Light
├─ Border-radius: 8px
├─ Padding: 24px
├─ Box-shadow: 0 1px 3px rgba(0,0,0,0.1)
├─ Hover: Shadow 0 4px 6px rgba(0,0,0,0.15)
└─ Transition: 0.3s ease

Card con Giro (tiene color dinámico):
├─ Border-top: 4px color dinámico
├─ O icono en esquina superior derecha con color
```

### Inputs

```
Input Field:
├─ Background: Gris Light
├─ Border: 1px Gris Medio
├─ Border-radius: 4px
├─ Padding: 12px 16px
├─ Font: Inter 400, 16px
├─ Focus: Border color dinámico + glow sutil
├─ Placeholder: Gris Medio
├─ Error: Border Rojo #EF4444
└─ Success: Border Verde #22C55E

Textarea:
├─ Min-height: 120px
├─ Resize: vertical
├─ Mismos estilos que input
```

### Modales

```
Modal:
├─ Background overlay: Negro 40% opacidad
├─ Content background: Blanco
├─ Border-radius: 8px
├─ Box-shadow: 0 20px 25px rgba(0,0,0,0.15)
├─ Max-width: 500px (mobile: 90vw)
├─ Padding: 32px
├─ Animación: fade in 0.2s ease
└─ Close button: X gris, hover color dinámico

Animación:
├─ Enter: fade + scale-up (0.98 → 1.0)
├─ Exit: fade + scale-down (1.0 → 0.98)
└─ Duration: 200ms
```

### Badges/Labels

```
Badge:
├─ Background: Color dinámico light (20% opacidad)
├─ Text: Color dinámico dark
├─ Padding: 4px 8px
├─ Border-radius: 12px
├─ Font: Inter 500, 12px
└─ Display: inline-block

Estado:
├─ Active: Color Green
├─ Inactive: Color Gray
├─ Error: Color Red
└─ Warning: Color Orange
```

---

## 📊 GRÁFICOS & VISUALES

### Iconografía

```
Sistema de Iconos:
├─ Style: Outline (stroke)
├─ Stroke-width: 2px
├─ Size: 24px (estándar), 32px (grande), 16px (pequeño)
├─ Border-radius: 2px (slightly rounded)
└─ Color: Dinámico o Gris

Fuente recomendada: Heroicons o Feather Icons
```

### Gráficos

```
Charts (Gráficos en dashboards):
├─ Colores: Usar paleta dinámicas del giro
├─ Background: Gris Light
├─ Gridlines: Gris Medium 20% opacidad
├─ Text: Gris Oscuro 70%
├─ Animación: Entrada suave 0.5s

Chart Library recomendada: Chart.js o Recharts
```

### Imágenes

```
Fotografías:
├─ Estilo: Profesionales, modernas
├─ Filtros: Ninguno (natural)
├─ Proporción: 16:9 o 4:3 (depende sección)
├─ Compresión: WebP con fallback PNG
├─ Máximo tamaño: 100KB por imagen
└─ Lazy loading: Obligatorio

Ilustraciones:
├─ Estilo: Minimalista, lineal
├─ Colores: Dinámicos por giro
├─ Consistencia: Mismo artista/estilo
└─ Formato: SVG (escalable)
```

---

## 🎬 ANIMACIONES

### Principios

```
✅ Debe ser:
├─ Fluida (no saltos)
├─ Significativa (propósito)
├─ Rápida (no más de 300ms)
├─ Sutil (no distraer)
└─ Accesible (respetar prefers-reduced-motion)

❌ Evitar:
├─ Animaciones infinitas
├─ Efectos de rebote
├─ Múltiples animaciones simultáneas
├─ Transiciones abruptas
└─ Autoplay de videos
```

### Tiempos de Transición

```
Rápido:    150ms (hover, pequeños cambios)
Normal:    300ms (cambios moderados)
Lento:     500ms (entradas de página)

Easing:
├─ ease-in:  cubic-bezier(0.4, 0, 1, 1)
├─ ease-out: cubic-bezier(0, 0, 0.2, 1)
├─ ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
└─ linear: linear (solo rotaciones)
```

### Ejemplos

```css
/* Hover en botón */
.button {
  transition: all 150ms ease-in-out;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

/* Entrada de página */
.fade-in {
  animation: fadeIn 500ms ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Respetar preferencia usuario */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 RESPONSIVE DESIGN

### Mobile-First Approach

```
Base: 375px (iPhone SE)
Tablet: 768px (iPad)
Desktop: 1440px (Laptop)
Large: 1920px (Desktop)

Media Queries:
├─ @media (min-width: 768px) { ... }
├─ @media (min-width: 1024px) { ... }
├─ @media (min-width: 1440px) { ... }
└─ @media (min-width: 1920px) { ... }
```

### Cambios por Breakpoint

```
Mobile (375px):
├─ Heading H1: 48px → 32px
├─ Columnas: 1
├─ Padding: 16px
├─ Font-size: reducir 10-20%
└─ Ocultar elementos no esenciales

Desktop (1440px):
├─ Heading H1: 72px
├─ Columnas: 4
├─ Padding: 48px
├─ Font-size: 100%
└─ Mostrar todos elementos
```

---

## ♿ ACCESIBILIDAD

### Contraste de Color

```
WCAG AA (mínimo requerido):
├─ Texto normal: 4.5:1 ratio
├─ Texto grande: 3:1 ratio
├─ UI components: 3:1 ratio

Testing: WebAIM Contrast Checker
```

### Indicadores Visuales

```
✅ Debe haber:
├─ Focus outline visible (no remover)
├─ Hover state diferenciable
├─ Active state diferenciable
├─ Disabled state claro
└─ Error state claro (no solo color rojo)

Focus outline:
└─ outline: 2px solid color-dinámico;
   outline-offset: 2px;
```

---

## 📋 GUÍA DE USO

### Cuándo Usar Cada Color

```
Color Dinámico (del giro):
├─ Botones primarios
├─ Links principales
├─ Iconos destacados
├─ Badges principales
└─ Bordes superiores de cards

Colores Neutros:
├─ Textos
├─ Fondos
├─ Bordes
├─ Labels
└─ Dividers

Colores de Estado:
├─ Success: Verde #22C55E
├─ Error: Rojo #EF4444
├─ Warning: Naranja #F97316
└─ Info: Azul #0EA5E9
```

---

## 🎯 ARCHIVO DE RECURSOS

Los siguientes archivos deben estar en `/assets/`:

```
Logo:
├─ logo.svg (versión principal)
├─ logo-dark.svg (fondo claro)
├─ logo-light.svg (fondo oscuro)
└─ logo-icon.svg (isotipo)

Íconos:
├─ icons/[nombre].svg (todos los usados)
└─ favicon.ico

Tipografía:
├─ fonts/playfair-display.woff2
└─ fonts/inter.woff2

Imágenes:
├─ images/hero.jpg
├─ images/giros/ (8 imágenes)
└─ images/testimonios/ (fotos)

Ilustraciones:
├─ illustrations/success.svg
├─ illustrations/error.svg
└─ illustrations/empty-state.svg
```

---

**Identidad Visual v1.0 - Generado:** 24 de Julio 2026  
**Próxima revisión:** Antes de FASE 2
