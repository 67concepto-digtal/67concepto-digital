# 🏢 KAI — Ambientación y Escenarios

**Tipo:** Guía de diseño visual / Brief para Penpot  
**Propósito:** Definir dónde vive KAI y qué ve el cliente  
**Estado:** ⏳ Decisión de escenario pendiente  
**Fecha:** Agosto 2026

---

## 🎯 ¿POR QUÉ IMPORTA EL AMBIENTE?

```
El ambiente de KAI = El contexto visual donde ocurre la consultoría.

Cuando el cliente habla con KAI:
├─ El fondo no es neutro — comunica algo
├─ Un ambiente correcto dice: "Estás en buenas manos"
├─ Un ambiente incorrecto dice: "Soy solo un chatbot"

= EL AMBIENTE ES DONDE KAI VIVE.
```

---

## 🖼️ LOS 4 ESCENARIOS POSIBLES

### ESCENARIO A — Oficina Moderna Minimalista
```
Vibe: Profesional, ordenado, confiable

Elementos visuales:
├─ Escritorio minimalista de madera clara
├─ Computadora de pantalla amplia al fondo
├─ Ventana con vista de ciudad (día, luz natural)
├─ Estanterías con 3-4 libros seleccionados
├─ Planta pequeña en una esquina
├─ Iluminación: cálida, no fluorescente
└─ Color dominante: blancos, grises, madera natural

Mensaje implícito al cliente:
"Aquí se trabaja con orden y precisión.
Tu estrategia está en manos profesionales."

Ideal cuando:
├─ Cliente = Empresa mediana o grande
├─ Cliente = Sector financiero, legal, salud
└─ Contexto = Consultoría formal
```

### ESCENARIO B — Café Boutique Creativo
```
Vibe: Cercano, cálido, accesible

Elementos visuales:
├─ Mesa de madera rústica con café humeante
├─ Ventanas grandes con luz natural
├─ Plantas verdes alrededor
├─ Pizarra pequeña al fondo con bocetos
├─ Libros y revistas apilados casualmente
├─ Iluminación: suave, dorada
└─ Color dominante: verdes, cafés, crema

Mensaje implícito al cliente:
"Aquí podemos hablar sin presión.
Estoy aquí para ayudarte, no para venderte."

Ideal cuando:
├─ Cliente = Emprendedor / Startup
├─ Cliente = Creativo, artista, restaurante boutique
└─ Contexto = Primera conversación, onboarding
```

### ESCENARIO C — Sala de Consultoría Ejecutiva
```
Vibe: Estratégico, probado, senior

Elementos visuales:
├─ Sofá ejecutivo de cuero oscuro
├─ Mesa de cristal con tablet y documentos
├─ Pizarra interactiva al fondo
├─ Diplomas o reconocimientos enmarcados
├─ Vista de ciudad desde ventanal alto
├─ Iluminación: directa, profesional
└─ Color dominante: azules profundos, negro, dorado

Mensaje implícito al cliente:
"Aquí se toman decisiones estratégicas.
30 años de experiencia respaldando cada recomendación."

Ideal cuando:
├─ Cliente = Empresa establecida
├─ Cliente = Quiere resultados, no conversación
└─ Contexto = Diagnóstico profundo, revisión de estrategia
```

### ESCENARIO D — Dinámico (Cambia según el cliente)
```
Vibe: Personalizado, inteligente, sorprendente

Lógica de cambio:
├─ Si cliente = Startup / Emprendedor → Café Boutique (B)
├─ Si cliente = Empresa mediana → Oficina Moderna (A)
├─ Si cliente = Empresa grande → Consultoría Ejecutiva (C)
├─ Si cliente = Restaurante/Food → Café Boutique (B)
├─ Si cliente = Creativo/Creator → Café Boutique (B)
├─ Si cliente = Salud/Legal → Oficina Moderna (A)
└─ Si cliente = Corporativo → Consultoría Ejecutiva (C)

Mensaje implícito al cliente:
"KAI me conoce.
El ambiente es exactamente donde yo me sentiría cómodo."

Ideal para: MVP v2 (Mes 2 en adelante)
```

---

## ✅ DECISIÓN — Marcar la opción elegida

```
Para el MVP (Versión 1.0), Pepe elige:

□ ESCENARIO A — Oficina Moderna Minimalista
□ ESCENARIO B — Café Boutique Creativo
□ ESCENARIO C — Sala de Consultoría Ejecutiva
□ ESCENARIO D — Dinámico (requiere más desarrollo)

ESCENARIO ELEGIDO: ___________________

RAZÓN:
___________________

FECHA DE DECISIÓN: ___________________
```

---

## 🎨 ESPECIFICACIONES TÉCNICAS PARA PENPOT

### Dimensiones y formato
```
Pantalla de video consulta:
├─ Resolución base: 1280x720 (HD)
├─ Formato: 16:9
├─ KAI aparece: Centro-derecha (60% del frame)
└─ Fondo: 40% izquierda visible detrás de KAI

Imagen estática del ambiente:
├─ Formato: JPG/PNG de alta resolución
├─ Mínimo: 1920x1080
└─ Sin texto — KAI y la UI se superponen encima
```

### Paleta de colores por escenario
```
ESCENARIO A (Oficina):
├─ Fondo: #F5F0E8 (crema cálido)
├─ Maderas: #8B6914
├─ Acento: #2C3E50 (azul oscuro profesional)
└─ Luz: #FFF9F0

ESCENARIO B (Café):
├─ Fondo: #F0EBE1 (beige natural)
├─ Plantas: #4A7C59 (verde)
├─ Madera: #6B4226 (café oscuro)
└─ Luz: #FFFAE8

ESCENARIO C (Consultoría):
├─ Fondo: #1A2332 (azul oscuro)
├─ Acento: #C9A227 (dorado)
├─ Superficie: #2C3E50
└─ Luz: #F8F9FA
```

---

## 🔄 TRANSICIONES Y ANIMACIONES (Para Emergent)

```
Cuando KAI cambia de escenario:
├─ Tipo de transición: Fade suave (0.8 segundos)
├─ No cortar abruptamente
├─ El personaje de KAI se queda fijo
└─ Solo el fondo hace la transición

Cuándo ocurre una transición:
├─ Al inicio de una nueva sesión con cliente diferente
├─ Cuando el cliente actualiza su perfil de negocio
└─ Nunca en medio de una conversación
```

---

## 📋 BRIEF PARA PENPOT

```
Tarea para el equipo de diseño (Penpot):

1. FONDO ESTÁTICO:
   Diseñar 1 (o 4) fondos para los escenarios
   Resolución: 1920x1080
   Sin texto
   Formato: PNG

2. COMPOSICIÓN CON KAI:
   Mostrar cómo se ve el avatar de KAI
   sobre cada fondo
   Proporciones y posición correctas

3. VARIACIONES DE LUZ:
   Versión día (luz natural) → Consultas AM
   Versión tarde (luz cálida) → Consultas PM
   (Opcional para v2)

4. ENTREGABLES:
   ├─ 1 fondo final (escenario elegido)
   ├─ 1 composición con KAI encima
   ├─ Paleta de colores exportada
   └─ Guía de uso (dónde no poner texto, etc.)
```

---

## 🚀 SIGUIENTE PASO

1. Pepe elige el escenario (marcar arriba)
2. Documentar aquí la decisión
3. Enviar este documento + paleta a Penpot
4. Penpot diseña el fondo
5. Emergent lo integra en la plataforma

---

*Guardado en: `67concepto-digital/KAI/KAI-AMBIENTACION-ESCENARIOS.md`*
