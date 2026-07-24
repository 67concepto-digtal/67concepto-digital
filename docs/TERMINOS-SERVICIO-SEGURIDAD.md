# ⚖️ TÉRMINOS DE SERVICIO + SEGURIDAD
## 67 Concepto

**Versión:** 1.0  
**Fecha:** 25 de Julio 2026  
**Efectivo:** Inmediato  
**Jurisdicción:** México + LATAM

---

## 📑 TABLA DE CONTENIDOS

1. Términos Básicos
2. Aceptación y Acuerdos
3. Seguridad de Plataforma
4. Política de Costos y Pagos
5. Política de Renta (SaaS)
6. Política de Venta/Uso de Datos
7. Responsabilidades del Cliente
8. Responsabilidades de 67C
9. Limitaciones de Responsabilidad
10. Cancelación y Reembolso
11. Cambios en Términos
12. Jurisdicción Legal

---

## 1️⃣ TÉRMINOS BÁSICOS

### 1.1 Definiciones

```
"67 Concepto" (67C):
├─ Empresa mexicana
├─ Proveedora de software SaaS
├─ Responsable de la plataforma y datos
└─ Ubicación: México

"Cliente":
├─ Persona física o jurídica
├─ Suscriptor de 67C
├─ Responsable de su cuenta
└─ Acepta estos términos

"Plataforma":
├─ Software web (67concepto.com)
├─ Apps (POS, Inventario, etc)
├─ APIs y webhooks
└─ Integraciones externas

"Datos del Cliente":
├─ Información de negocio
├─ Clientes del cliente
├─ Transacciones
└─ Configuraciones personales

"Datos Personales":
├─ Nombre, email, teléfono
├─ IP, cookies, comportamiento
├─ Información de pago
└─ Datos sensibles (si aplica)
```

### 1.2 Elegibilidad

```
QUIÉN PUEDE USAR 67C:

REQUERIMIENTOS:
├─ Mayor de 18 años
├─ Dueño o autorizado por negocio
├─ Cumple leyes locales
└─ NO está en lista negra

PROHIBIDO PARA:

├─ Menores de edad
├─ Actividades ilegales
├─ Evasión de impuestos
├─ Lavado de dinero
├─ Tráfico de drogas/armas
├─ Pornografía infantil
├─ Fraude o estafa
├─ Venta de productos falsificados
├─ Sanciones internacionales (OFAC/EU)
└─ Discriminación o acoso

SI INFRINGES:
├─ Cancelación inmediata sin reembolso
├─ Datos entregados a autoridades
├─ Denuncia penal si procede
└─ Prohibición permanente
```

---

## 2️⃣ ACEPTACIÓN Y ACUERDOS

### 2.1 Consentimiento Legal

```
AL USAR 67 CONCEPTO ACEPTAS:

☑ Estos términos de servicio
☑ Política de privacidad
☑ Política de seguridad
☑ Términos de pago
☑ Cumplimiento de leyes

NO ACEPTAS = NO PUEDES USAR

CAMBIOS EN TÉRMINOS:
├─ 67C puede cambiar términos
├─ Te avisamos 30 días antes
├─ Si no aceptas: Cancela antes
├─ Si usas: Aceptaste automáticamente
└─ Cambios se aplican solo a nuevas suscripciones

PARA ACEPTAR:
├─ Checkbox "Acepto términos"
├─ Firma digital (si contrato)
├─ Email de confirmación
└─ Screenshot guardado (prueba)
```

### 2.2 Acuerdo de Nivel de Servicio (SLA)

```
67 CONCEPTO GARANTIZA:

DISPONIBILIDAD:
├─ Uptime: 99.9% mensual
├─ Equivalente a: 43 min de downtime/mes
├─ Monitoreo: 24/7 automático
├─ Alertas: Antes de 5 min
└─ Soporte: Respuesta < 2 horas

INCIDENTES:
├─ P1 (crítico): Respuesta < 30 min
├─ P2 (alto): Respuesta < 2 horas
├─ P3 (medio): Respuesta < 8 horas
└─ P4 (bajo): Respuesta < 24 horas

MANTENIMIENTO:
├─ Planificado: Avisos 72 horas antes
├─ Horario: Domingos 2am-4am (México)
├─ Duración: Max 2 horas
├─ Acceso: Restaurado al 100%
└─ Crédito: Si excede 2 horas

COMPENSACIÓN SI INCUMPLO:
├─ Downtime 1-2 horas: Crédito 5% mes
├─ Downtime 2-4 horas: Crédito 10% mes
├─ Downtime 4+ horas: Crédito 25% mes
├─ Downtime 8+ horas: Reembolso mes completo
└─ MAX: 3 créditos/año (justificado)

EXCLUSIONES:
├─ Mantenimiento planificado
├─ Fuerzas mayores (huracanes, terremotos)
├─ Ataques DDoS masivos (>100Gbps)
├─ Culpa del cliente o terceros
└─ Violación de términos cliente
```

---

## 3️⃣ SEGURIDAD DE PLATAFORMA

### 3.1 Seguridad Técnica

```
67 CONCEPTO IMPLEMENTA:

ENCRIPTACIÓN:
├─ En tránsito: SSL/TLS 256-bit
│  └─ Certificado: Let's Encrypt
│
├─ En descanso: AES-256
│  └─ Datos en base de datos cifrados
│
├─ Contraseñas: bcrypt + salt
│  └─ Hashing: No reversible, seguro
│
└─ APIs: Tokens JWT con expiración

INFRAESTRUCTURA:
├─ Servidores: AWS (AWS-protected)
├─ Ubicación: us-east-1 (N. Virginia)
├─ Backup: Redundante multi-región
├─ Firewall: CloudFlare + WAF
├─ DDoS: Protección automática
└─ Load balancer: Escalabilidad

SEGURIDAD DE APLICACIÓN:
├─ OWASP Top 10 compliant
├─ SQL Injection: Prepared statements
├─ XSS: Sanitización HTML
├─ CSRF: Tokens anti-CSRF
├─ Rate limiting: 100 req/min por usuario
├─ Authentication: 2FA opcional
├─ Session: Timeout 30 min inactividad
└─ Logging: Auditoría de accesos

MONITOREO:
├─ IDS/IPS: Detección intrusiones
├─ SIEM: Análisis comportamiento
├─ Alertas: Anomalías automáticas
├─ Scanning: Vulnerabilidades semanal
└─ Penetration test: Trimestral (externo)

ACTUALIZACIONES:
├─ Parches seguridad: Inmediatos
├─ Vulnerabilidades: Disclosed responsablemente
├─ Librerias: Actualizadas mensual
├─ Sistema operativo: Hardened
└─ Dependencias: Monitoreadas 24/7

CUMPLIMIENTO:
├─ ISO 27001 (en proceso)
├─ SOC 2 Type II (en proceso)
├─ OWASP ASVS Level 2
├─ CWE Top 25 mitigados
└─ CVSS Score: < 5 (bajo)
```

### 3.2 Protección contra Ataques

```
MECANISMOS DE PROTECCIÓN:

CONTRA BOTS/SCRAPERS:
├─ Cloudflare Bot Management
├─ CAPTCHA si comportamiento anómalo
├─ Rate limiting por IP
├─ Detección de patrones
└─ Bloqueo automático

CONTRA FUERZA BRUTA:
├─ Máximo 5 intentos login fallidos
├─ Lockout 15 minutos tras fallos
├─ Notificación si intento fallido
├─ 2FA requerido tras 3 intentos
└─ Bloqueo IP tras 10 intentos

CONTRA INYECCIÓN SQL:
├─ Prepared statements (siempre)
├─ Input validation (estricta)
├─ Output encoding (necesario)
├─ ORM (Object-Relational Mapping)
└─ No concatenación de queries

CONTRA XSS:
├─ Sanitización HTML
├─ Content Security Policy (CSP)
├─ Escape de caracteres especiales
├─ JSON encoding
└─ No eval() de user input

CONTRA CSRF:
├─ Tokens únicos por formulario
├─ SameSite cookies (Strict)
├─ Origen verificado
├─ Métodos seguros (POST, DELETE)
└─ Verificación doble (si sensible)

CONTRA MAN-IN-THE-MIDDLE:
├─ SSL/TLS obligatorio
├─ HSTS headers (incluido)
├─ Certificate pinning (apps)
├─ Validación de certificados
└─ No soporta HTTP (solo HTTPS)

CONTRA DDOS:
├─ Cloudflare DDoS protection
├─ Auto-scaling
├─ Rate limiting global
├─ IP reputation database
└─ Redirección automática si ataque

CONTRA MALWARE:
├─ Antivirus en uploads
├─ Extensiones permitidas whitelist
├─ Escaneo VirusTotal
├─ Sandbox para archivos
└─ Aislamiento de contenido

CONTRA DATA BREACH:
├─ Encriptación en tránsito y descanso
├─ Acceso mínimo de privilegios
├─ Rotación de credenciales
├─ Auditoría de accesos
├─ Notificación si fuga (72 horas)
└─ Seguro cibernético
```

### 3.3 Gestión de Acceso

```
CONTROL DE ACCESO:

AUTENTICACIÓN:
├─ Email + Contraseña (mínimo)
├─ 2FA: SMS, Google Authenticator, Authy
├─ SSO: Google, Microsoft, SAML (enterprise)
├─ Biometric: Huellas (apps móviles)
└─ Passwordless: Magic links (futuro)

SESIONES:
├─ Timeout: 30 min inactividad
├─ Simultáneas: Máximo 3 por usuario
├─ Dispositivos: Gestión de dispositivos
├─ Historial: Últimas sesiones visibles
└─ Logout remoto: Cierra todas las sesiones

PERMISOS:
├─ Admin: Acceso total
├─ Manager: Acceso sin facturación
├─ Vendedor: Solo su vendedor
├─ Soporte: Solo soporte
├─ Auditor: Solo lectura
└─ Custom: Roles configurables

MFA (Multi-Factor Authentication):
├─ Obligatorio para admins
├─ Recomendado para managers
├─ Opcional para usuarios
├─ Recovery codes: Guardados securo
└─ Regenerable si pierde acceso

REVOCACIÓN:
├─ Cambio de contraseña: Inmediato
├─ Logout remoto: Instantáneo
├─ Eliminar cuenta: 30 días (reversible)
├─ Ban usuario: Inmediato (abuso)
└─ IP blocklist: Automático
```

---

## 4️⃣ POLÍTICA DE COSTOS Y PAGOS

### 4.1 Estructura de Precios

```
PLAN PROFESIONAL (Recomendado):
├─ Precio base: $199/mes
├─ Incluye: Todas las apps
├─ Usuarios: Hasta 5
├─ Transacciones: Ilimitado
├─ Almacenamiento: 50GB
├─ Soporte: WhatsApp 24/7
├─ SLA: 99.9% uptime
└─ Pago: Adelantado o crédito

PLAN EMPRESARIAL:
├─ Precio: Personalizado
├─ Incluye: Custom features
├─ Usuarios: Ilimitado
├─ Transacciones: Ilimitado
├─ Almacenamiento: Ilimitado
├─ Soporte: Dedicated account manager
├─ SLA: 99.99% uptime
└─ Contrato: 12 meses mínimo

SETUP & ONBOARDING:
├─ Uno-off: $500
├─ Incluye: Instalación, setup, training
├─ Duración: 3 semanas
└─ Gratis primer diagnóstico

PAGOS ADICIONALES:
├─ Usuarios extra: $30/mes cada uno (>5)
├─ Almacenamiento extra: $10/GB/mes (>50GB)
├─ Integraciones custom: $100/hora
├─ Reportes avanzados: $50/mes
└─ API enterprise: Negociable

DESCUENTOS:
├─ Anual (pago completo): 15% off
├─ Trimestral: 5% off
├─ Referral: $100 por cliente activo
└─ Startup: 50% primer 3 meses
```

### 4.2 Métodos de Pago

```
ACEPTAMOS:

TARJETAS:
├─ Visa, MasterCard, Amex
├─ Procesador: Stripe (PCI-DSS)
├─ Comisión: 2.9% + $0.30 USD
├─ Recurso: Sí (reintento automático)
└─ Seguridad: Tokenización

TRANSFERENCIA BANCARIA:
├─ México: CLABE
├─ Latinoamérica: SWIFT
├─ Comisión: Incluida (cliente paga)
├─ Verificación: Manual (24-48h)
├─ Reserva: No activa hasta confirmar
└─ Facturable: Sí

PAYPAL:
├─ Disponible: Sí
├─ Comisión: 3.49% + $0.49 USD
├─ Proceso: Automático
├─ Seguridad: PayPal managed
└─ Reembolsos: Automáticos

MERCADO PAGO (LATAM):
├─ Disponible: Sí
├─ Comisión: 3.99%
├─ Métodos: Tarjeta, transferencia, efectivo
├─ Cobertura: México, Argentina, Brasil, etc
└─ Instantáneo: Sí

CRIPTOMONEDAS (Futuro):
├─ Bitcoin, Ethereum
├─ Convertidor: Coinbase Commerce
├─ Comisión: 1%
└─ Volatilidad: Cliente asume riesgo

NO ACEPTAMOS:
├─ Cheques
├─ Efectivo
├─ Criptomonedas no reguladas
└─ Monederos secretos
```

### 4.3 Ciclo de Facturación

```
FACTURACIÓN MENSUAL:
├─ Día: Mismo día cada mes
├─ Prórroga: Automática si pago OK
├─ Intento fallido: 3 reintentos en 7 días
├─ Si falla: Servicio pausado
├─ Gracia: 15 días para pagar atraso
└─ Cancelación: Automática tras 30 días

FACTURA:
├─ Formato: PDF descargable
├─ RFC: Incluido (México)
├─ Detalle: Servicios + fechas
├─ Impuestos: Desglosados
├─ Condiciones: Pago a 30 días
├─ Validez legal: Válido en México + LATAM
└─ Archivo: Guardado en plataforma

CAMBIOS DE PLAN:
├─ Upgrade: Prorrateado día
├─ Downgrade: Aplica próximo mes
├─ Crédito disponible: Ajustado
├─ Reembolso: Si downgrade genera saldo
└─ Efectivo: 5 días hábiles

COBRO AUTOMÁTICO:
├─ Consentimiento: Explícito por escrito
├─ Token: Guardado cifrado
├─ Reintento: Si falla
├─ Notificación: Antes y después
└─ Revocación: 1 click en panel
```

### 4.4 Política de Reembolsos

```
GARANTÍA 30 DÍAS:
├─ Período: 30 días desde activación
├─ Condición: Uso < 20 transacciones
├─ Motivo: No satisfacción
├─ Proceso: 1 click "Solicitar reembolso"
├─ Devolución: 100% en 5 días hábiles
└─ SIN PREGUNTAS: Sí

REEMBOLSOS PARCIALES:
├─ Setup: NO reembolsable (servicio realizado)
├─ Mes completo: Sí si no usado
├─ Medio mes: Prorrateado
├─ Usuarios extra: Reembolso proporcional
└─ Créditos: Transferibles o reembolso

NO REEMBOLSABLES:
├─ Servicios de consultoría
├─ Integraciones custom completadas
├─ Datos exportados
├─ Errores de usuario
├─ Cambios de opinión (>30 días)
└─ Abuso de política

PROCESO:
1. Cliente solicit en panel
2. 24h revisión automática
3. Aprobación o contacto
4. Reembolso procesado
5. 5 días: aparece en cuenta

ABUSO DE REEMBOLSOS:
├─ Patrón de 3+ reembolsos: Investigación
├─ Fraude detectado: Cancelación permanente
├─ Devolución de dinero: Disputado
├─ Caso judicial: Si aplica
└─ Blacklist: 10 años
```

---

## 5️⃣ POLÍTICA DE RENTA (SaaS)

### 5.1 Modelo de Suscripción

```
TIPO: Software as a Service (SaaS)

CARACTERÍSTICAS:
├─ Renovación: Automática
├─ Sin contrato: Cancelable mensualmente
├─ Actualización: Automática (sin cargo)
├─ Backup: Incluido
├─ Escalabilidad: Transparente
└─ Migración: Facilitada

ACCESO A DATOS:
├─ Propiedad: Del cliente (siempre)
├─ Acceso: 67C solo para soporte/seguridad
├─ Exportación: Disponible en cualquier momento
├─ Formato: JSON, CSV, SQL
├─ Tiempo: Inmediato si <1GB, <24h si >1GB
└─ Costo: Gratis

RETENCIÓN POST-CANCELACIÓN:
├─ Período de gracia: 30 días
├─ Datos: Disponibles para descargar
├─ Funcionalidad: Lectura solo
├─ Acceso: Completo pero sin edición
├─ Purga: Automática después de 30 días
└─ Recuperación: NO posible tras purga

RESTRICCIONES DE USO:
├─ Revendedor: Prohibido sin autorización
├─ Scraping: Prohibido
├─ API abuse: Bloqueado automático
├─ Spam/phishing: Cancelación inmediata
├─ Transferencia de licencia: Prohibida
└─ Uso compartido: Máximo 5 usuarios licenciados

AUDITORÍA Y CUMPLIMIENTO:
├─ 67C puede auditar: Trimestral
├─ Aviso: 30 días antes
├─ Acceso: Logs de sistema (no datos personales)
├─ Pruebas: Conformidad con términos
├─ Costos: Asumidos por 67C
└─ Resultados: Compartidos si cumple
```

### 5.2 Actualizaciones y Cambios

```
NUEVAS FEATURES:
├─ Comunicación: 30 días antes
├─ Opt-in: Features beta (opcional)
├─ Breaking changes: Aviso 60 días
├─ Deprecación: Periodo mínimo 6 meses
└─ Versiones: Soporte retroactivo 1 año

MANTENIMIENTO:
├─ Planificado: Avisos 72 horas
├─ Emergencia: Inmediato (seguridad)
├─ Duración: <2 horas típico
├─ Backup: Automático antes
└─ Downtime: Aplicable a SLA

DEPRECACIÓN:
├─ API vieja: Soporte 2 años
├─ Migration path: Proporcionado
├─ Documentación: Actualizada
├─ Support: Team ayuda migraciones
└─ Costos: Incluidos en plan
```

---

## 6️⃣ POLÍTICA DE VENTA/USO DE DATOS

### 6.1 Datos que Recolectamos

```
DATOS DEL CLIENTE (Negocio):
├─ Nombre empresa
├─ Giro/industria
├─ Ubicación
├─ Teléfono/email
├─ Ingresos aproximados
├─ Número de empleados
└─ Datos de pago

DATOS DE USUARIO (Personas):
├─ Nombre completo
├─ Email
├─ Teléfono
├─ Foto de perfil
├─ Rol/cargo
├─ Permisos y accesos
└─ Historial de login

DATOS DE OPERACIÓN:
├─ Transacciones (compras, ventas, etc)
├─ Inventario (productos, cantidades)
├─ Clientes finales (nombre, teléfono)
├─ Reportes (ingresos, gastos)
└─ Configuraciones personalizadas

DATOS DE USO:
├─ IP address
├─ User-Agent
├─ Páginas visitadas
├─ Acciones en plataforma
├─ Tiempo en sesión
├─ Dispositivo usado
└─ Ubicación aproximada (geolocalización)

DATOS DE COMUNICACIÓN:
├─ Emails enviados
├─ Mensajes de soporte
├─ Chat conversations
├─ Feedback y encuestas
└─ Tickets de soporte

COOKIES/TRACKING:
├─ Session ID
├─ Preferencias de idioma
├─ Tema (dark/light mode)
├─ Analytics (Google Analytics 4)
├─ Heatmaps (si usuario acepta)
└─ A/B testing (si usuario acepta)

NO RECOLECTAMOS (Prohibido):
├─ Contraseñas (hashed solamente)
├─ Números de tarjeta completos (tokenizados)
├─ Datos de menores de 13 años
├─ Datos genéticos o biométricos
├─ Información de salud mental
└─ Información religiosa/política
```

### 6.2 USO de Datos

```
USOS PERMITIDOS:

OPERACIÓN DEL SERVICIO:
├─ Proporcionar acceso a plataforma
├─ Procesar transacciones
├─ Generar reportes
├─ Responder soportes
├─ Detectar fraude
└─ Cumplimiento legal

MEJORA DEL SERVICIO:
├─ Análisis de comportamiento
├─ Identificar problemas técnicos
├─ Desarrollar nuevas features
├─ Testing y optimización
├─ Machine Learning (anonimizado)
└─ Benchmarking industria

COMUNICACIÓN:
├─ Avisos de servicio
├─ Alertas de seguridad
├─ Ofertas relevantes (opt-in)
├─ Encuestas de satisfacción
├─ Actualizaciones de producto
└─ Newsletters educativas

SEGURIDAD:
├─ Detección de fraude
├─ Prevención de abuso
├─ Cumplimiento legal
├─ Auditorías de seguridad
└─ Investigaciones de incidentes

LEGAL/COMPLIANCE:
├─ Cumplimiento de leyes
├─ Respuesta a citaciones
├─ Informes regulatorios
├─ Resolución de disputas
└─ Prevención de ilegalidades

USOS PROHIBIDOS:

VENTA DE DATOS:
├─ NO vendemos datos a terceros
├─ Período: Nunca
├─ Excepciones: Ninguna (ni con consentimiento)
└─ Penalización: Cancelación permanente si ocurre

COMPARTIR SIN CONSENTIMIENTO:
├─ Terceros marketing: Prohibido
├─ Data brokers: Prohibido
├─ Anunciantes: Prohibido
├─ Competidores: Prohibido
└─ Gobiernos: Solo orden judicial

ANONIMIZACIÓN Y AGREGACIÓN:
├─ Datos anonimizados: Permitido (sin identificación)
├─ Análisis agregados: Permitido (industria)
├─ Benchmarks: Permitido (sin datos individuo)
└─ Reporte público: Solo datos públicos

CONTROL DEL CLIENTE:
├─ Acceso a sus datos: Sí, siempre
├─ Corrección: Sí, en cualquier momento
├─ Eliminación: Sí (dentro de 30 días)
├─ Portabilidad: Sí, descarga completa
└─ Objeción: Sí, opt-out cualquier tiempo
```

### 6.3 Retención de Datos

```
MIENTRAS ESTÉS ACTIVO:
├─ Duración: Todo el tiempo de suscripción
├─ Acceso: Total
├─ Modificación: Sí
├─ Eliminación: Sí (reversible 30 días)
└─ Backup: Automático

DESPUÉS DE CANCELACIÓN:

Período de gracia:
├─ 30 días: Acceso completo
├─ Descarga: Disponible
├─ Portabilidad: Sí
├─ Edición: No (lectura solo)
└─ Recuperación: Posible

Post-purga:
├─ Después de 30 días: Eliminado permanente
├─ Backups: Borrados (7 días extra)
├─ Recuperación: NO posible
├─ Excepción: Orden legal retiene
└─ Notificación: Enviada antes

DATOS DE USO/ANALYTICS:
├─ Retención: 12 meses
├─ Anonimizado: Sí
├─ Aggregate: Sí (industria trends)
├─ Individual: No (tras 12 meses)
└─ Purga: Automática

DATOS DE LOGS/SEGURIDAD:
├─ Retención: 90 días
├─ Acceso: Soporte + Security team
├─ Auditoría: Sí
├─ Cumplimiento: Sí (GDPR/CCPA)
└─ Purga: Automática

DATOS LEGALES/COMPLIANCE:
├─ Retención: 7 años
├─ Motivo: Requisitos fiscales
├─ Acceso: Limitado legal
├─ Auditoría: Externa permitida
└─ Purga: Manual después 7 años

VIOLACIONES/INCIDENTES:
├─ Retención: Indefinida
├─ Motivo: Investigación + legal
├─ Acceso: Autoridades si aplica
├─ Destrucción: Orden judicial
└─ Notificación: Enviada a cliente
```

---

## 7️⃣ RESPONSABILIDADES DEL CLIENTE

### 7.1 Obligaciones Legales

```
COMPLIANCE LOCAL:

MÉXICO:
├─ RFID (Registro Federal Identificador)
├─ RFC (Registro Federal de Contribuyentes)
├─ IMSS (Seguro Social)
├─ Impuestos ISR, IVA
├─ Nomina si tiene empleados
└─ 67C: No responsable (es tuya)

INTERNACIONAL:

UE/ESPAÑA:
├─ GDPR compliance
├─ Protección de datos personales
├─ RGPD (Reglamento General)
└─ Cliente responsable

BRASIL:
├─ LGPD (Ley General Protección Datos)
├─ Privacidad de datos
├─ Consentimiento explícito
└─ Cliente responsable

USA/CANADA:
├─ CCPA (California Consumer Privacy Act)
├─ PIPEDA (Personal Information Protection)
├─ Estado aplicable
└─ Cliente responsable

ARGENTINA:
├─ Ley de Protección de Datos
├─ LPDP (22.326)
├─ Agencia Control Datos
└─ Cliente responsable

67C RESPALDO:
├─ Herramientas: Sí (para cumplimiento)
├─ Documentación: Sí (GDPR-ready)
├─ Consultoría: No (consigue abogado)
├─ Auditoría: No (responsabilidad tuya)
└─ Penalizaciones: Cliente asume
```

### 7.2 Seguridad del Cliente

```
RESPONSABILIDADES DEL CLIENTE:

CREDENCIALES:
├─ Guardar contraseña: Segura
├─ 2FA: Habilitar recomendado
├─ Recovery codes: Guardar offline
├─ Cambiar periódicamente: Cada 90 días
└─ NO compartir: Nunca

ACCESO FÍSICO:
├─ Dispositivo: Protegido
├─ Pantalla: Vigilar en público
├─ Logout: Siempre al terminar
├─ Computadora compartida: Use privado
└─ Caférias: Evitar acceso público

DATOS CONFIDENCIALES:
├─ Información cliente: Mantener privada
├─ Tokens API: No compartir
├─ Keys: Rotar mensualmente
├─ Backups: Mantener seguros
└─ Reportes: Acceso restringido

DISPOSITIVOS:
├─ Antivirus: Actualizado
├─ Firewall: Activo
├─ Actualizaciones: Instaladas
├─ VPN: Recomendado si remoto
└─ Sincronización: Solo dispositivos de confianza

USO ACEPTABLE:
├─ Legal: Usar solo para negocios legales
├─ Ético: No para fraude o estafa
├─ Autorizado: Por cuenta válida
├─ Términos: Cumplir siempre
└─ Ilegal: Reportar abusos
```

### 7.3 Prohibiciones Explícitas

```
PROHIBIDO HACER:

├─ Hacking/Cracking de 67C
├─ Scraping de datos
├─ Reverse engineering
├─ Acceso no autorizado
├─ Interferencia de sistemas
├─ DDoS o ataques
├─ Malware/virus
├─ Phishing de usuarios
├─ Falsificación de identidad
├─ Violación de privacidad
├─ Revendedor no autorizado
├─ Incumplimiento OFAC/sanciones
├─ Actividades ilegales
├─ Explotación laboral/infantil
├─ Tráfico de personas/drogas
├─ Pornografía infantil
├─ Terrorismo
└─ Lavado de dinero

CONSECUENCIAS:
├─ Cancelación inmediata (sin reembolso)
├─ Datos entregados a autoridades
├─ Demanda civil
├─ Denuncia penal
├─ Prohibición permanente
└─ Daños y perjuicios
```

---

## 8️⃣ RESPONSABILIDADES DE 67 CONCEPTO

### 8.1 Garantías

```
67C GARANTIZA:

SERVICIO:
├─ Acceso 24/7 a plataforma
├─ Uptime 99.9% (SLA)
├─ Soporte disponible
├─ Funcionalidad como publicada
└─ Bug fixes cuando se reportan

SEGURIDAD:
├─ Encriptación en tránsito y descanso
├─ Protección de datos personales
├─ Cumplimiento GDPR/LGPD
├─ Firewalls y protección
├─ Actualizaciones de seguridad
└─ Auditorías regulares

PRIVACIDAD:
├─ Datos no vendidos
├─ No compartidos sin consentimiento
├─ Encriptación de datos
├─ Cumplimiento regulatorio
├─ Transparencia
└─ Control del cliente

LEGAL:
├─ Licencia válida para usar
├─ Sin violación de IP terceros
├─ Cumplimiento leyes locales
├─ Términos claros y honestos
├─ Sin trampa
└─ Buena fe

NO GARANTIZA:

├─ Resultados específicos (depende de cliente)
├─ Éxito del negocio (es herramienta)
├─ Retorno de inversión (depende de uso)
├─ Compatibilidad con todo software
├─ Integración con APIs no mantenidas
├─ Disponibilidad sin límites
├─ Eliminación instantánea de datos
└─ Confidencialidad si compartida
```

### 8.2 Soporte Técnico

```
NIVELES DE SOPORTE:

ESTÁNDAR (Incluido en plan):
├─ Canal: Email + WhatsApp
├─ Horario: 24/7
├─ Respuesta: < 2 horas
├─ Resolución: <24 horas típico
├─ Ticket: Tracking disponible
├─ FAQ: Base de conocimiento
└─ Community: Foro usuarios

PREMIUM (Adicional):
├─ Costo: $100/mes
├─ Respuesta: < 30 minutos
├─ Resolución: < 4 horas
├─ Videollamada: Sí
├─ Dedicated contact: Sí
├─ Prioridad: Máxima
└─ Training: Personalizado

ENTERPRISE:
├─ Costo: Negociable
├─ Account manager: Dedicado
├─ Respuesta: < 15 minutos
├─ Resolución: < 1 hora
├─ Onsite support: Disponible
├─ Custom features: Posible
└─ SLA: 99.99%

LIMITACIONES:
├─ No incluido: Consultoría de negocio
├─ No incluido: Training de negocios
├─ No incluido: Servicios profesionales
├─ No incluido: Integración custom (pagado)
└─ Horario laboral: México UTC-6
```

---

## 9️⃣ LIMITACIONES DE RESPONSABILIDAD

### 9.1 Exclusiones

```
67C NO ES RESPONSABLE POR:

DAÑOS DIRECTOS:
├─ Pérdida de datos
├─ Pérdida de ingresos
├─ Pérdida de ganancias
├─ Daño a reputación
├─ Costo de sustitución
└─ Costo de alternativa

DAÑOS INDIRECTOS:
├─ Lucro cesante
├─ Daño consecuente
├─ Daño punitivo
├─ Gastos legales
└─ Intereses

CAUSAS EXTERNAS:
├─ Fuerzas mayores (terremoto, huracán)
├─ Ataques DDoS masivos (>100Gbps)
├─ Fallo de terceros (AWS, Stripe, etc)
├─ Corte de internet
├─ Acción del gobierno
└─ Culpa del cliente

LIMITACIÓN TOTAL:
├─ Máximo: Monto pagado en 3 meses
├─ No incluye: Daños punitivos
├─ No incluye: Daño reputacional
└─ Aplicable: Toda responsabilidad

EXCEPCIONES (SÍ responsable):
├─ Incumplimiento deliberado
├─ Negligencia grave
├─ Violación de seguridad (por 67C)
├─ Fraude o malicia
├─ Pérdida de datos por 67C
└─ Violación de privacidad
```

### 9.2 Indemnización

```
CLIENTE INDEMNIZA A 67C POR:

├─ Violación de términos
├─ Violación de leyes
├─ Reclamación de IP de terceros
├─ Daño a terceros usando servicio
├─ Actividades ilegales
├─ Incumplimiento de privacidad
├─ Evasión de impuestos
└─ Maluso de plataforma

67C INDEMNIZA A CLIENTE POR:

├─ Violación de privacidad por 67C
├─ Brecha de seguridad por negligencia
├─ Violación de IP de terceros
├─ Incumplimiento de SLA extremo
└─ Negligencia grave demostrada

CÓMO INDEMNIZAR:
├─ Notificar dentro de 30 días
├─ Proporcionar detalles completos
├─ Permitir defensa conjunta
├─ No admitir culpa sin consentimiento
└─ Cooperación en resolución
```

---

## 🔟 CANCELACIÓN Y REEMBOLSO

### 10.1 Cancelación de 67C

```
RAZONES PARA CANCELAR:

VIOLACIÓN DE TÉRMINOS:
├─ Actividades ilegales
├─ Fraude detectado
├─ Incumplimiento persistente
├─ Abuso de servicios
├─ Ataque a plataforma
└─ Actividades maliciosas

INCUMPLIMIENTO DE PAGO:
├─ 30 días sin pago después de aviso
├─ Múltiples intentos fallidos
├─ Disputa no resuelta
├─ Tarjeta rechazada permanentemente
└─ Sin pago = Acceso suspendido

PROCEDIMIENTO:
1. Aviso por email (si aplica)
2. Plazo de 7 días para remediar
3. Segunda notificación si no resuelve
4. Cancelación automática
5. Datos disponibles 30 días más
6. Purga automática (irreversible)

EXCEPCIONES:
├─ Emergencias de seguridad: Inmediato
├─ DMCA/Legal: Inmediato
├─ Violación grave: Inmediato
└─ Sin necesidad de aviso
```

### 10.2 Cancelación por Cliente

```
CÓMO CANCELAR:

OPCIÓN 1: Panel de control
├─ Configuración → Cancelar suscripción
├─ Confirmar cancelación
├─ 1 click
└─ Efectiva: Inmediata

OPCIÓN 2: Email
├─ A: support@67concepto.com
├─ Asunto: "Cancelar suscripción"
├─ Cuerpo: ID cuenta
└─ Efectiva: 24 horas

OPCIÓN 3: Chat/WhatsApp
├─ Contacta soporte directo
├─ Solicita cancelación
├─ Confirma identidad
└─ Efectiva: 24 horas

PERÍODO DE NOTIFICACIÓN:
├─ Cancelación: Efectiva fin de ciclo
├─ Si cancelas Lunes: Vigente hasta fin mes
├─ Si cancelas Lunes+1: Vigente hasta fin mes siguiente
├─ Prorroga: Deshabilitada inmediatamente
└─ Rebill: No aplica

COMPENSACIÓN:
├─ Si cancelas: Crédito para próximo mes
├─ Dinero no usado: Reembolso si <30 días
├─ Setup: NO reembolsable
├─ Servicio usado: Prorrateado
└─ Tiempo: 5 días hábiles
```

### 10.3 Suspensión por Impago

```
PROCESO:

Primer aviso (5 días antes):
├─ Email: "Tu pago vence en 5 días"
├─ Recordatorio automático
├─ Link para pagar
└─ 1 intento rebill automático

Intento de cobro:
├─ Intento 1: Día de vencimiento
├─ Intento 2: Día +3
├─ Intento 3: Día +6
├─ Si todos fallan → Suspensión
└─ Aviso: Email enviado

Suspensión:
├─ Día +15: Acceso bloqueado
├─ Datos: Guardados 30 días
├─ Lectura: Disponible solamente
├─ Nuevo pago: Reactiva inmediato
└─ Reactivación: Automática

Purga:
├─ Día +45: Datos eliminados
├─ Backup: Borrado
├─ Recuperación: NO posible
├─ Aviso: 72 horas antes
└─ Irreversible: Sí

RECUPERACIÓN:
├─ Pagar atraso + penalty (0% primez vez)
├─ Activación: Dentro 2 horas
├─ Datos: Completamente restaurados
└─ Servicio: 100% funcional
```

---

## 1️⃣1️⃣ CAMBIOS EN TÉRMINOS

```
CÓMO CAMBIAMOS TÉRMINOS:

NOTIFICACIÓN:
├─ Email: A tu dirección registrada
├─ Aviso: Mínimo 30 días
├─ Cambios: Descriptos claramente
├─ Efectivo: Fecha especificada
└─ Aceptación: Asumida si no cancelas

TU DERECHO:
├─ Leer cambios: 30 días
├─ Decidir: Aceptar o cancelar
├─ Sin penalidad: Si cancelas antes
├─ Continuar: Si aceptas implícitamente
└─ Opción: Claramente tuya

CAMBIOS MENORES:
├─ Cosmética: Sin aviso
├─ Mejora: Sin aviso
├─ Reducción: Sin aviso
└─ Beneficio cliente: Sin aviso

CAMBIOS MAYORES:
├─ Precio: 30 días aviso
├─ Funcionalidad: 60 días aviso
├─ Política: 30 días aviso
├─ Seguridad: Inmediato (protección)
└─ Compliance: Inmediato (legal)

VERSIÓN DE TÉRMINOS:
├─ Histórico: Disponible
├─ Acceso: Panel "Términos anteriores"
├─ Fecha: Cada versión especificada
├─ Cambios: Resaltados
└─ Descarga: Disponible formato PDF
```

---

## 1️⃣2️⃣ JURISDICCIÓN LEGAL

### 12.1 Ley Aplicable

```
JURISDICCIÓN:

PRINCIPAL: México
├─ Leyes aplicables: Leyes mexicanas
├─ Tribunal: Juzgados federales (CDMX)
├─ Fuero: Comercial
├─ Código: Código Civil Federal

SECUNDARIA: Por país cliente
├─ Si cliente en EU: GDPR + leyes locales
├─ Si cliente en Brasil: LGPD + leyes locales
├─ Si cliente en USA: CCPA + leyes locales
└─ Si cliente en otro: Leyes aplicables

ACUERDOS SUPRANACIONALES:
├─ Convención de La Haya
├─ Tratados comerciales USMCA (T-MEC)
├─ UNCITRAL (comercio electrónico)
├─ Protocolos internacionales
└─ Cumplimiento: Voluntario 67C

RESOLUCIÓN DE DISPUTAS:

NIVEL 1: Negociación
├─ Plazo: 30 días
├─ Partes: Ambas se comunican
├─ Objetivo: Resolver amistosamente
├─ Mediador: Puede requerirse
└─ Costo: Cada parte su propio

NIVEL 2: Mediación
├─ Proveedor: ICC Mediation
├─ Plazo: 60 días
├─ Costo: Compartido 50/50
├─ Vinculante: No (voluntario)
└─ Proceso: Facilitado

NIVEL 3: Arbitraje
├─ Tipo: Arbitraje comercial
├─ Proveedor: ICC (International Court)
├─ Árbitros: 3 neutrales
├─ Idioma: Español/Inglés
├─ Costo: Perdedor paga 80%
├─ Sentencia: Final y vinculante
└─ Apelación: NO existe (final)

NIVEL 4: Litigio
├─ Como último recurso
├─ Tribunales: Federales México
├─ Abogados: Cada parte sus propios
├─ Procedimiento: Código de Procedimientos
├─ Costo: Quien pierda paga
└─ Duración: 2-5 años típico
```

### 12.2 Cumplimiento Legal

```
LEYES APLICABLES:

MÉXICO:
├─ Ley Federal de Protección de Datos
├─ Código Fiscal de la Federación
├─ Ley del Impuesto al Valor Agregado
├─ Ley de Telecomunicaciones
├─ Código de Comercio
├─ Ley de Competencia Económica
└─ 67C: Cumple todas

INTERNACIONAL:

UE/GDPR:
├─ Reglamento General Protección Datos
├─ Consentimiento explícito: Sí
├─ Derecho al olvido: Sí
├─ Portabilidad datos: Sí
├─ DPA/responsable: Sí
├─ Privacy by design: Sí
└─ 67C: GDPR Ready

BRASIL/LGPD:
├─ Lei Geral de Proteção Dados
├─ Consentimiento: Requerido
├─ Transparencia: Máxima
├─ Seguridad: Obligatoria
├─ Auditoría: Permitida
└─ 67C: LGPD Ready

USA/CCPA:
├─ California Consumer Privacy Act
├─ Derecho a saber: Sí
├─ Derecho a borrar: Sí
├─ Derecho a opt-out: Sí
├─ No discriminación: Garantizado
└─ 67C: CCPA Ready

ANTI-CORRUPCIÓN:
├─ FCPA (USA)
├─ UK Bribery Act
├─ LACTA (México)
└─ 67C: Cumple 100%

SANCIONES INTERNACIONALES:
├─ OFAC (Tesoro USA)
├─ Sanciones EU
├─ Sanciones UN
├─ Validación: En tiempo real
└─ Bloqueo: Automático si cumple
```

---

## 📋 ACEPTACIÓN FINAL

```
AL USAR 67 CONCEPTO CONFIRMAS:

☑ Leí estos términos completamente
☑ Entiendo mis obligaciones
☑ Acepto responsabilidades
☑ Consiento procesamiento datos
☑ Cumpliré leyes aplicables
☑ Acepto política privacidad
☑ Reconozco limitaciones responsabilidad
☑ Aceptaré cambios con 30 días aviso
☑ Resolveré disputas por arbitraje
☑ Entiendo consecuencias de incumplimiento

FECHA DE ACEPTACIÓN:
├─ Timestamp: [AUTO-GENERADO]
├─ IP Address: [AUTO-GENERADO]
├─ Dispositivo: [AUTO-GENERADO]
├─ Localización: [AUTO-GENERADO]
└─ Prueba de aceptación: [GUARDADA]

CONTACTO LEGAL:
├─ Email: legal@67concepto.com
├─ Dirección: [Tu dirección México]
├─ Teléfono: +52 [Tu tel]
├─ Horario: Lunes-Viernes 9am-6pm
└─ Tiempo respuesta: <48 horas
```

---

**Términos de Servicio v1.0**  
**Última actualización:** 25 de Julio 2026  
**Próxima revisión:** Q1 2027
