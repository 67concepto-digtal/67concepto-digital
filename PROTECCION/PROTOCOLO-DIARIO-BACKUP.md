# 🛡️ PROTOCOLO DIARIO DE BACKUP
## Jose Diaz / Pepe - 67 Concepto Digital

**Objetivo:** Evitar pérdida total de información con un sistema simple de respaldo diario.

---

## ✅ PROTOCOLO DIARIO (5 MINUTOS)

### Mañana (primera cosa)
1. Abrir GitHub: https://github.com/67concepto-digital/67-core-kai
2. Revisar si hay cambios nuevos.
3. Si hay cambios, descargarlos a la computadora.

### Durante el día
1. Trabajar normalmente en documentos.
2. Recordar que los cambios se guardan localmente.
3. No depender de sincronización automática.

### Noche (última cosa)
```bash
cd 67-core-kai
git status
git add .
git commit -m "Backup diario [FECHA] - [QUÉ HICISTE HOY]"
git push origin main
```

Luego:
- Subir también versión del día a Google Drive (carpeta `67-KAI-BACKUP`).

---

## 🔄 TRIPLE REDUNDANCIA GARANTIZADA

1. **Computadora local**  
   Carpeta de trabajo completa.
2. **GitHub (nube 1)**  
   Historial de commits y versión oficial.
3. **Google Drive (nube 2)**  
   Copia adicional accesible desde cualquier dispositivo.

**Resultado:** si falla una capa, quedan otras dos.

---

## 📅 CALENDARIO DE BACKUP

### Lunes a Viernes
- Mañana: revisión de cambios (2 min)
- Noche: backup diario (5 min)

### Sábado (backup profundo)
- Backup diario
- Verificar Google Drive
- Copia local adicional a disco externo

### Domingo (revisión semanal)
- Confirmar sincronización general
- Revisar `CONVERSACION-HISTORICA-COMPLETA.md`
- Actualizar `TIMELINE-PROYECTO.md`

---

## 💾 DISCO EXTERNO (COPIA FÍSICA)

**Recomendación:** disco externo USB 1TB.

**Cada viernes:**
1. Conectar disco.
2. Copiar carpeta completa `67-core-kai`.
3. Desconectar y guardar en lugar seguro.

---

## 🚨 CHECKLIST DIARIO (NOCHE)

- [ ] ¿Trabajé hoy en `67-core-kai`?
- [ ] `git status` revisado
- [ ] `git add .` ejecutado
- [ ] Commit creado con fecha y descripción
- [ ] `git push origin main` ejecutado
- [ ] Google Drive actualizado
- [ ] Verificación final en GitHub

---

## 🎯 CHECKLIST SEMANAL (SÁBADO)

- [ ] ¿Se hizo backup de lunes a viernes?
- [ ] ¿GitHub tiene todos los cambios?
- [ ] ¿Google Drive está sincronizado?
- [ ] ¿Se hizo copia a disco externo?
- [ ] Revisar `CONVERSACION-HISTORICA-COMPLETA.md`
- [ ] Actualizar `TIMELINE-PROYECTO.md`
- [ ] Actualizar `KAI-REFERENCIA-RAPIDA.md` si aplica

---

## 📱 ALTERNATIVA FÁCIL: GITHUB DESKTOP

Si terminal complica:
1. Instalar: https://desktop.github.com/
2. Abrir repo `67-core-kai`.
3. Commit en botón **Commit to main**.
4. Subir en botón **Push origin**.

---

## 🔔 RECORDATORIO AUTOMÁTICO (21:00)

Configurar alarma diaria con texto:
**"🛡️ BACKUP 67-CORE-KAI"**

Opciones:
- Alarma del teléfono
- Evento diario en calendario
- Recordatorio por email (IFTTT u otro)

---

## 🚀 PLAN INMEDIATO

### Hoy
1. Crear carpeta `67-KAI-BACKUP` en Google Drive.
2. Instalar GitHub Desktop.
3. Abrir repo `67-core-kai`.

### Mañana
1. Ejecutar primer backup diario.
2. Verificar en GitHub.
3. Verificar en Google Drive.

### Esta semana
1. Mantener rutina diaria.
2. Activar recordatorio fijo.
3. Comprar disco externo (recomendado).

---

## ✅ RESULTADO FINAL

Con esta rutina, la información queda protegida en múltiples capas y se reduce al mínimo el riesgo de pérdida total.
