# 📚 67 CONCEPTO - MANUAL MAESTRO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0  
**Estado:** Documentación Base

---

## 🎯 1. VISIÓN DE 67 CONCEPTO

### Filosofía Central

67 Concepto no vende software.

**67 Concepto vende crecimiento.**

El cambio de mentalidad es fundamental:

- **Antes:** "Tengo un CRM, un POS, un sistema..."
- **Ahora:** "¿Qué te impide crecer hoy?"

### Frase Clave (ADN de la Marca)

> "Cuando tu negocio crece, nuestro trabajo tiene sentido."

Esta frase refleja una relación de largo plazo, no transaccional. Es un aliado, no un proveedor.

### Propuesta de Valor

- No competimos por **precio**
- Competimos por **acompañamiento**
- Transformación digital mediante tecnología específica por giro
- Modelo SaaS: Prueba 7 días → Renta mensual/trimestral

---

## 📊 2. ESTRATEGIA 3 NIVELES DE COMUNICACIÓN

### Nivel 1: Microempresas (1-5 empleados)

**Giros:** Taquería, estética, gimnasio, cafetería, peluquería

**Lenguaje:** Sencillo, emocional, resultados inmediatos

**Pregunta Clave:** "¿Cómo vendo más?"

**Ejemplos:**
- "¿Tus clientas olvidan sus citas? Nosotros enviamos recordatorios."
- "¿No sabes cuánto ganaste hoy? Tu celular te lo dice."
- "¿Se te olvida contestar WhatsApp? Automatizamos respuestas."

**Diseño:** Visual, cercano, fotografías reales, menos texto, más ejemplos

---

### Nivel 2: PyMEs (6-100 empleados)

**Giros:** Cadenas pequeñas, consultorios con 2-3 sucursales, restaurantes con múltiples áreas

**Lenguaje:** Técnico pero accesible, indicadores, automatización

**Pregunta Clave:** "¿Cómo controlo y escalo mi negocio?"

**Ejemplos:**
- "Organización centralizada con acceso desde cualquier sucursal"
- "Indicadores en tiempo real de ventas, costos, asistencia"
- "Automatizaciones que ahorran horas de trabajo administrativo"

**Diseño:** Profesional, gráficos, dashboards, datos estructurados

---

### Nivel 3: Empresas e Industrias (100+ empleados)

**Giros:** Clínicas grandes, hoteles, cadenas de restaurantes, franquicias

**Lenguaje:** Estratégico, ejecutivo, transformación digital

**Pregunta Clave:** "¿Cómo impulso la transformación digital de mi empresa?"

**Ejemplos:**
- "Aliado estratégico en transformación digital"
- "Automatización, analítica e inteligencia artificial"
- "Escalabilidad y sostenibilidad del negocio"

**Diseño:** Elegante, sobrio, ejecutivo, datos complejos, casos de éxito

---

## 🗂️ 3. ESTRUCTURA DE REPOSITORIOS GITHUB

### 67concepto-digital (WEB CORPORATIVA)

**Objetivo:** Vitrina principal, punto de entrada único

**Contenido:**
- Web corporativa (3 niveles de comunicación)
- Presentación corporativa (Nivel 3)
- Presentación microempresas (Nivel 1)
- Catálogo de giros (estructura base)
- Documentación pública

**Hosting:** GitHub Pages  
**URL:** 67concepto.com (apuntado desde Hostinger)  
**Acceso:** PÚBLICO

---

### 67concepto-templates (DEMOS DE APPS)

**Objetivo:** Mostrar funcionalidad sin exponer código real

**Contenido:**
- Demos interactivas por giro
- Interfaces funcionales (sin backend)
- Screenshots y videos
- Guías de uso

**Hosting:** GitHub Pages  
**URL:** 67concepto.com/apps o apps.67concepto.com  
**Acceso:** PÚBLICO

---

### 67concepto-apps (BACKEND - SAAS REAL)

**Objetivo:** Backend y lógica de negocio real

**Contenido:**
- Código de apps reales
- Database schemas
- APIs
- Autenticación
- Lógica de pago

**Hosting:** Servidor externo (Railway/Render)  
**URL:** api.67concepto.com o saas.67concepto.com  
**Acceso:** PRIVADO ⚠️

---

### 67concepto-docs (DOCUMENTACIÓN)

**Objetivo:** Documentación, directrices, manuales

**Contenido:**
- Manual maestro
- Directrices técnicas
- Estructura y flujos
- Checklist de desarrollo
- Histórico de decisiones

**Hosting:** GitHub  
**Acceso:** PÚBLICO (pero técnico)

---

## 🌐 4. CONFIGURACIÓN DE DOMINIOS Y HOSTING

### Dominio Principal

**Dominio:** 67concepto.com  
**Registrador:** Hostinger  
**Gestión:** DNS en Hostinger

### Configuración DNS

```
Registro A / CNAME para GitHub Pages:
Name: @
Type: CNAME
Value: 67concepto-digtal.github.io

Subdominio API (Backend):
Name: api
Type: CNAME
Value: [URL de Railway/Render]

Subdominio Apps (Demos):
Name: apps
Type: CNAME
Value: apps.67concepto-digtal.github.io
```

### Hosting por Componente

| Componente | Hosting | Costo | Acceso |
|-----------|---------|-------|--------|
| 67concepto.com | GitHub Pages | GRATIS | Público |
| /apps | GitHub Pages | GRATIS | Público |
| /docs | GitHub | GRATIS | Público |
| Backend SaaS | Railway/Render | ~$15/mes | Privado |
| Dominio | Hostinger | ~$12/año | N/A |
| **TOTAL MENSUAL** | - | **~$15/mes** | - |

---

## 🚀 5. FLUJO DE CLIENTE (CUSTOMER JOURNEY)

### Paso 1: DESCUBRIMIENTO

- Cliente llega a **67concepto.com**
- Ve web corporativa (3 opciones según su nivel)
- Se identifica con su giro comercial

### Paso 2: EXPLORACIÓN

- Selecciona su industria (gimnasio, restaurante, etc.)
- Ve soluciones específicas
- Accede a demo en **apps.67concepto.com**

### Paso 3: PRUEBA GRATUITA (7 DÍAS)

- Modal: "Comenzar prueba gratis"
- Datos básicos (nombre, email, teléfono)
- Acceso inmediato a app en **saas.67concepto.com**
- 7 días con funcionalidad completa

### Paso 4: CONVERSIÓN

- Después de día 7 (o antes)
- Modal: "Elige tu plan"
- Opciones: Mensual / Trimestral
- Pago integrado (Stripe)
- Acceso renovado

### Paso 5: ACOMPAÑAMIENTO

- Soporte 24/7 incluido
- Reportes mensuales de resultados
- Análisis y mejoras propuestas
- Renovación automática

---

## 🎨 6. IDENTIDAD VISUAL

### Paleta de Colores

**Colores Dinámicos por Giro:**

| Giro | Color | Hex |
|------|-------|-----|
| Gimnasio | Verde Energía | #22C55E |
| Restaurante | Rojo/Naranja | #F97316 |
| Clínica | Azul Médico | #0EA5E9 |
| Estética | Rosa | #EC4899 |
| Laboratorio | Púrpura | #A855F7 |
| Gasolinera | Amarillo | #EAB308 |
| Mensajería | Azul Claro | #06B6D4 |
| Ecommerce | Índigo | #6366F1 |

**Neutros:**
- Negro: #1F2937
- Blanco: #FFFFFF
- Gris: #9CA3AF

### Tipografía

- **Títulos (H1, H2):** Playfair Display 72px / 32px
- **Subtítulos (H3):** Playfair Display 24px
- **Cuerpo:** Inter 16px
- **Labels:** Inter 12px uppercase

---

## 📋 7. EQUIPO Y RESPONSABILIDADES

### ChatGPT (Chat)

- Estrategia comercial
- Conceptos de mercado
- Análisis de dolor del cliente
- Mensajería por nivel
- Dirección creativa

### Emergent (Diseño)

- Diseño visual
- Prototipado
- Interfaces
- Flujos visuales
- Identidad gráfica

### Blanco (Desarrollo & Dirección)

- Técnica y código
- Arquitectura
- Optimización
- Integración sistemas
- Refinamiento
- **Dirección técnica y control total**

---

## 📅 8. FASES DE DESARROLLO

### FASE 1: ESTRUCTURA BASE (Semana 1)

- [ ] Crear repos en GitHub
- [ ] Configurar DNS en Hostinger
- [ ] Documentación base (este archivo)
- [ ] Manual de identidad completo

### FASE 2: WEB CORPORATIVA (Semana 2-3)

- [ ] Emergent diseña 3 versiones
- [ ] Blanco refina y codifica
- [ ] Deploy en GitHub Pages
- [ ] Testing responsividad

### FASE 3: PRESENTACIONES (Semana 3-4)

- [ ] Presentación corporativa (PDF)
- [ ] Presentación microempresas (PDF)
- [ ] Integración en web

### FASE 4: CATÁLOGO GIROS (Semana 4-5)

- [ ] Estructura estándar por giro
- [ ] Contenido primeros 8 giros
- [ ] Plantillas reutilizables

### FASE 5: DEMOS APPS (Semana 5-6)

- [ ] Templates visuales funcionales
- [ ] Muestra sin código real
- [ ] Deploy en GitHub Pages

### FASE 6: BACKEND SAAS (Semana 6-8)

- [ ] Apps reales con database
- [ ] Autenticación
- [ ] Payment integration
- [ ] Deploy en Railway/Render

---

## ⚠️ 9. DECISIONES CRÍTICAS

### SaaS vs Descargables

**DECISIÓN:** SaaS Rentable

**Razón:** 
- Recurrencia garantizada
- Control total
- Soporte incluido
- Profesionalismo

**NO:** No publicar código real en GitHub público

---

### Estructura DNS

**DECISIÓN:** Todo bajo 67concepto.com

**Razón:**
- Marca única
- Profesionalismo
- Control total
- Email corporativo posible

---

### Hosting

**DECISIÓN:** GitHub Pages + Railway/Render

**Razón:**
- Costo mínimo (~$15/mes)
- Escalabilidad
- Confiabilidad
- Fácil mantenimiento

---

## 🔒 10. SEGURIDAD Y PRIVACIDAD

### Qué Publicar en GitHub (PÚBLICO)

✅ Web corporativa  
✅ Documentación  
✅ Presentaciones  
✅ Demos/screenshots  
✅ Guías públicas

### Qué NO Publicar (PRIVADO)

❌ Código backend real  
❌ Database schemas  
❌ Keys y credenciales  
❌ Lógica de pago  
❌ Datos de clientes

---

## 📞 11. CONTACTO Y SOPORTE

**Email:** contacto@67concepto.com  
**WhatsApp:** [A definir]  
**Teléfono:** [A definir]  
**Ubicación:** [A definir]

---

## 📝 12. HISTÓRICO DE CAMBIOS

| Fecha | Cambio | Autor | Versión |
|-------|--------|-------|---------|
| 24/07/2026 | Documento inicial - Manual Maestro v1.0 | Blanco | 1.0 |

---

**Documento Maestro v1.0 - Generado:** 24 de Julio 2026  
**Próxima revisión:** A definir  
**Estado:** Activo ✅
