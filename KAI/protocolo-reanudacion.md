# KAI — Protocolo de Reanudación de Contexto
> Cómo retomar una conversación sin perder el hilo, sin importar el dispositivo o el día.

---

## El problema que resuelve esto
Cuando una sesión se cierra, el historial del chat puede perderse o quedar inaccesible.  
Este protocolo garantiza que **siempre podemos retomar desde el último punto** usando GitHub como memoria externa.

---

## Frase de arranque (para copiar y pegar)

Al iniciar una nueva sesión, di exactamente esto:

> **"Copilot, retomamos desde estado-actual de Kai. Lee KAI/estado-actual.md y dime en qué estamos."**

O más corto:
> **"Copilot, abre bitácora KAI y retomamos."**

---

## Pasos para retomar una sesión

1. Abre el repositorio: [67concepto-digital/67concepto-digital](https://github.com/67concepto-digital/67concepto-digital)
2. Ve a la carpeta `KAI/`
3. Lee `estado-actual.md` — ahí está el punto exacto donde estamos.
4. Si necesitas más contexto, abre `bitacora.md` y revisa la última entrada.
5. Revisa `pendientes.md` para ver qué sigue.
6. Usa la frase de arranque con Copilot.

---

## Desde cualquier dispositivo

Puedes acceder desde:
- **GitHub web** (github.com) desde cualquier navegador o iPad.
- **GitHub Mobile App** (disponible para iOS/Android).
- **Copilot en GitHub** desde cualquier sesión web.

No necesitas tener nada instalado. Solo internet y acceso al repositorio.

---

## Reglas del sistema

| Regla | Descripción |
|---|---|
| **Siempre subir a GitHub** | Copilot sube todos los cambios al repositorio. |
| **Actualizar estado al cerrar** | `KAI/estado-actual.md` se actualiza al terminar cada sesión. |
| **Resumen obligatorio** | Ninguna sesión importante cierra sin resumen en `bitacora.md`. |
| **Pendientes al día** | `KAI/pendientes.md` refleja siempre la realidad actual. |

---

## Estructura del directorio KAI/

```
KAI/
├── estado-actual.md        ← Empieza aquí. El punto exacto donde estamos.
├── bitacora.md             ← Historial de sesiones y decisiones.
├── pendientes.md           ← Todo lo que falta por resolver.
├── resumen-sesiones.md     ← Plantilla para cerrar sesiones.
└── protocolo-reanudacion.md ← Este archivo. Cómo retomar siempre.
```

---

## Si sientes que Copilot "cambió de tono"

Es normal que varíe un poco entre sesiones. Para corregirlo, di:
> **"Copilot, volvemos al tono: cercano, claro, entusiasta con criterio. Lee el estado actual de Kai."**

Eso restablece la línea de trabajo.

---

> **Regla de oro:**  
> El proyecto no depende de que el chat siga abierto.  
> El proyecto vive en GitHub.  
> El chat es solo el canal de trabajo.
