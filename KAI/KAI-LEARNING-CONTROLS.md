# 🧠 KAI — Controles de Aprendizaje (Learning Controls)

**Tipo:** Especificación técnica + brief para Emergent  
**Propósito:** Definir cómo KAI aprende, qué datos procesa y cómo Pepe supervisa  
**Estado:** ⏳ Decision Rules pendientes de completar  
**Fecha:** Agosto 2026

---

## 🎯 ¿POR QUÉ IMPORTAN LOS CONTROLES?

```
Sin controles de aprendizaje:
├─ KAI recomienda lo mismo a todos los clientes
├─ KAI no mejora con la experiencia
├─ Pepe no sabe qué está aprendiendo KAI
└─ = Sistema genérico, no inteligente

Con controles bien definidos:
├─ KAI aprende de cada cliente atendido
├─ KAI mejora sus recomendaciones con el tiempo
├─ Pepe supervisa y corrige cuando es necesario
└─ = KAI se vuelve más inteligente cada semana

= ASÍ KAI SE VUELVE MÁS INTELIGENTE.
```

---

## 🏗️ ARQUITECTURA DE APRENDIZAJE — 3 FASES

### FASE 1 — MVP (Semanas 1-4)
```
Descripción: KAI aprende de forma manual y supervisada

¿Qué hace KAI?
├─ Recibe datos del cliente (lo que el cliente escribe)
├─ Consulta la Knowledge Base pre-cargada por Pepe
├─ Genera propuesta basada en esos datos
└─ Espera validación antes de presentar al cliente

Rol de Pepe:
├─ Revisa TODAS las propuestas antes de que lleguen al cliente
├─ Aprueba, modifica o rechaza
├─ Agrega nota de por qué (KAI aprende del feedback)
└─ = Control total

Tecnología requerida:
├─ Knowledge Base con datos de Pepe (30 años de experiencia)
├─ Panel simple para revisar propuestas
├─ Sistema de feedback (thumbs up/down + nota)
└─ Sin APIs externas todavía

Estado: Implementar en Emergent — Mes 1
```

### FASE 2 — Semi-inteligente (Meses 2-3)
```
Descripción: KAI se conecta a datos externos y aprende solo

¿Qué hace KAI?
├─ Conecta con APIs de datos de mercado
├─ Cruza datos del cliente con tendencias actuales
├─ Genera propuestas más contextualizadas
├─ Aprende de patrones en casos anteriores
└─ Solo solicita validación de Pepe en propuestas críticas

Rol de Pepe:
├─ Supervisa decisiones estratégicas (no tácticas)
├─ Revisa dashboard de aprendizaje semanalmente
├─ Interviene si KAI aprende algo incorrecto
└─ = Control inteligente (no micro-gestión)

APIs a conectar:
├─ Google Trends (tendencias de búsqueda)
├─ Meta Ads Library (qué publicita la competencia)
├─ SEMrush / Ahrefs (SEO básico)
└─ Datos de casos anteriores de 67 Concepto Digital

Estado: Planificar con Emergent — Mes 2
```

### FASE 3 — Super-inteligente (Mes 4 en adelante)
```
Descripción: KAI investiga, cruza datos y toma decisiones con alta confianza

¿Qué hace KAI?
├─ Múltiples APIs coordinadas en tiempo real
├─ Detecta tendencias antes de que sean obvias
├─ Identifica inconsistencias en lo que dice el cliente
├─ Propone con nivel de confianza explícito (85%, 92%, etc.)
├─ Aprende de cada caso cerrado (éxito + fracaso)
└─ Solo escala a Pepe las decisiones de alto impacto

Rol de Pepe:
├─ Revisa casos de alto impacto únicamente
├─ Define nuevas reglas estratégicas cuando el mercado cambia
└─ = Pepe como estratega, KAI como ejecutor inteligente

Estado: Roadmap futuro — Emergent define arquitectura
```

---

## 📦 KNOWLEDGE BASE — Lo que KAI ya sabe desde el inicio

### Bloque 1: Experiencia de Pepe (30 años)
```
Datos a cargar manualmente por Pepe:

PATRONES DE ÉXITO (ejemplos reales anonimizados):
├─ "Cliente tipo restaurante con presupuesto $500/mes →
│   Mejor estrategia: Instagram + Google My Business
│   Resultado: +40% reservaciones en 3 meses"
│
├─ "Cliente tipo e-commerce con 0 tráfico →
│   Mejor estrategia: SEO + contenido blog
│   Resultado: +200 visitas/mes en 6 meses"
│
└─ "Cliente tipo servicio local sin presencia digital →
    Mejor estrategia: Google Ads local + web básica
    Resultado: +15 clientes/mes en 2 meses"

ERRORES A EVITAR:
├─ "Nunca recomendar ads pagados sin tener web profesional primero"
├─ "Nunca prometer resultados específicos de ventas"
└─ "Nunca ignorar que el cliente tiene competencia directa"

REGLAS DE PRECIOS:
├─ Presupuesto < $300/mes → Solo orgánico (redes + SEO)
├─ Presupuesto $300-800/mes → Orgánico + Ads básico
└─ Presupuesto > $800/mes → Estrategia completa
```

### Bloque 2: Catálogo de Servicios de 67
```
KAI debe saber qué puede ofrecer:

SERVICIOS DISPONIBLES:
├─ Página web profesional ($X/mes)
├─ App móvil (iOS + Android) ($X/mes)
├─ CRM básico ($X/mes)
├─ Email marketing automatizado ($X/mes)
├─ Gestión de redes sociales ($X/mes)
├─ Ads (Google + Meta) ($X/mes)
└─ Paquete completo ($299-599/mes)

REGLA: KAI siempre ofrece primero el paquete completo.
Si el cliente tiene restricción de presupuesto → ajusta.
```

### Bloque 3: Perfiles de Clientes (Giros)
```
KAI debe reconocer estos tipos de negocio
y tener estrategias específicas para cada uno:

├─ Restaurante / Food
├─ Tienda retail / E-commerce
├─ Servicio profesional (médico, abogado, contador)
├─ Servicio local (plomero, electricista, carpintero)
├─ Estudio creativo (diseño, fotografía, video)
├─ Educación / Coaching / Cursos
├─ Bienestar (gym, spa, yoga)
└─ Creator / Influencer / Personal brand

(Ver: `docs/GIROS-CATALOGO.md` para detalle completo)
```

---

## ⚡ DECISION RULES — Lógica IF-THEN de KAI

> **Instrucción para Pepe:** Completar los casos que faltan.  
> Los marcados con ✅ están definidos. Los marcados con ⏳ necesitan tu decisión.

### Reglas de Diagnóstico Inicial
```
✅ SI el cliente NO tiene página web
   ENTONCES → Prioridad 1: Crear web profesional antes que cualquier otra cosa
   RAZÓN: Sin web no hay donde mandar el tráfico

✅ SI el cliente tiene web PERO no tiene redes sociales activas
   ENTONCES → Prioridad 1: Activar Instagram + Google My Business
   RAZÓN: Las redes son la puerta de entrada más rápida

✅ SI el cliente tiene web Y redes, PERO no tiene sistema de clientes (CRM)
   ENTONCES → Recomendar CRM como siguiente paso
   RAZÓN: Sin CRM los clientes se pierden

⏳ SI el cliente tiene TODO LO ANTERIOR pero no genera ventas
   ENTONCES → ???
   (Pepe completa aquí)

⏳ SI el cliente tiene presupuesto de marketing pero no sabe en qué gastarlo
   ENTONCES → ???
   (Pepe completa aquí)
```

### Reglas de Presupuesto
```
✅ SI presupuesto mensual < $300
   ENTONCES → Solo estrategias orgánicas (sin ads pagados)
   PLAN: Web básica + Instagram + Google My Business
   
✅ SI presupuesto mensual entre $300-$600
   ENTONCES → Orgánico + Ads básico
   PLAN: Web + Redes + $100-200 en ads Google o Meta
   
✅ SI presupuesto mensual > $600
   ENTONCES → Estrategia completa 67-AI
   PLAN: Web + App + CRM + Email + Ads + Consultoría KAI
   
⏳ SI el cliente dice que no tiene presupuesto ahora
   ENTONCES → ???
   (Pepe completa aquí)
```

### Reglas de Giro de Negocio
```
✅ SI el negocio es un RESTAURANTE
   ENTONCES → Priorizar: Google My Business + Instagram + Sistema de reservas
   MÉTRICA CLAVE: Reservaciones y reseñas en Google
   
✅ SI el negocio es un E-COMMERCE (vende cosas online)
   ENTONCES → Priorizar: Web rápida + SEO + Google Shopping Ads
   MÉTRICA CLAVE: Tráfico y tasa de conversión
   
✅ SI el negocio es un SERVICIO LOCAL (plomero, médico, etc.)
   ENTONCES → Priorizar: Google Ads local + Google My Business + WhatsApp Business
   MÉTRICA CLAVE: Llamadas y citas agendadas
   
⏳ SI el negocio es un CREATOR / INFLUENCER
   ENTONCES → ???
   (Pepe completa aquí)
   
⏳ SI el negocio es de EDUCACIÓN / CURSOS
   ENTONCES → ???
   (Pepe completa aquí)
```

### Reglas de Validación de Datos
```
✅ SI el cliente da datos que parecen exagerados (ej: "tengo 10,000 seguidores pero 0 ventas")
   ENTONCES → KAI pregunta antes de asumir: "Cuéntame más sobre eso"
   NUNCA asumir que el cliente miente, pero tampoco basar plan en datos no validados

✅ SI el cliente da datos contradictorios
   ENTONCES → KAI señala la contradicción con respeto:
   "Entiendo que tienes X, pero también me dijiste Y. ¿Cómo se relacionan?"
   
⏳ SI el cliente exagera expectativas ("quiero 1 millón de ventas en un mes")
   ENTONCES → ???
   (Pepe completa aquí)
```

### Reglas de Escalamiento a Pepe
```
✅ SI la propuesta implica un presupuesto > $1,000/mes
   ENTONCES → KAI no decide solo → Escala a Pepe para revisión

✅ SI el cliente hace una pregunta que KAI no sabe responder con 90%+ de confianza
   ENTONCES → "Déjame consultar con mi equipo y te confirmo"
   NO inventar respuestas

✅ SI el cliente parece frustrado o en conflicto
   ENTONCES → KAI no escala el conflicto → Conecta con Pepe directamente

⏳ SI el cliente pide un descuento mayor al 20%
   ENTONCES → ???
   (Pepe completa aquí)
```

---

## 👁️ DASHBOARD DE SUPERVISIÓN DE PEPE

### ¿Qué ve Pepe en el dashboard?
```
PANEL PRINCIPAL:
├─ Propuestas generadas hoy: N
├─ Propuestas aprobadas: N
├─ Propuestas rechazadas con feedback: N
├─ Clientes activos: N
└─ Alertas que requieren atención: N

VISTA DE PROPUESTA (una por una):
├─ Cliente: [Nombre] — [Tipo de negocio]
├─ Propuesta de KAI: [Texto de la propuesta]
├─ Datos usados por KAI para decidir: [Lista]
├─ Nivel de confianza de KAI: [%]
└─ Botones:
   ├─ ✅ Aprobar
   ├─ ✏️ Modificar antes de aprobar
   └─ ❌ Rechazar + nota de por qué

HISTORIAL DE APRENDIZAJE:
├─ Últimas correcciones hechas por Pepe
├─ Patrones que KAI ha identificado
└─ Sugerencias de KAI para actualizar reglas
```

### Frecuencia de supervisión recomendada
```
DIARIO (5 minutos):
└─ Revisar alertas urgentes

SEMANAL (30 minutos):
├─ Revisar propuestas de la semana
├─ Actualizar Knowledge Base si hay casos nuevos
└─ Confirmar que KAI no está aprendiendo algo incorrecto

MENSUAL (1 hora):
├─ Revisar patrones de aprendizaje completos
├─ Actualizar Decision Rules si el mercado cambió
└─ Agregar nuevos casos de éxito a la Knowledge Base
```

---

## 📋 BRIEF PARA EMERGENT

```
Tarea para el equipo de desarrollo (Emergent):

FASE 1 (MVP):
1. Sistema de Knowledge Base editable por Pepe
   └─ Interface simple para cargar casos, reglas y patrones
   
2. Motor de Decision Rules
   └─ Implementar las reglas IF-THEN definidas arriba
   └─ Sistema para que Pepe agregue nuevas reglas sin código
   
3. Panel de supervisión básico
   └─ Lista de propuestas pendientes de revisión
   └─ Botones: aprobar / modificar / rechazar + nota
   └─ Historial de decisiones
   
4. Sistema de feedback loop
   └─ Cuando Pepe rechaza con nota → KAI registra la corrección
   └─ Las correcciones acumuladas actualizan el comportamiento de KAI

TECNOLOGÍA SUGERIDA:
├─ Knowledge Base: Pinecone, Weaviate o similar (vector DB)
├─ Decision Rules: JSON estructurado o similar
├─ Backend: API que conecta reglas + KB + respuesta
└─ Frontend dashboard: React o Next.js (simple, no fancy)

PREGUNTA PARA EMERGENT:
¿Cuál es la arquitectura recomendada para el feedback loop
de Fase 1 → Fase 2?
```

---

## 🚀 SIGUIENTE PASO

1. Pepe completa las secciones marcadas con ⏳
2. Pepe agrega casos de éxito reales a la Knowledge Base
3. Enviar este documento completo a Emergent
4. Emergent define arquitectura técnica
5. KAI empieza a aprender desde el día 1

---

*Guardado en: `67concepto-digital/KAI/KAI-LEARNING-CONTROLS.md`*
