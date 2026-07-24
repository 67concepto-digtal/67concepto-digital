# 🚀 HOSTING & DEPLOYMENT - 67 CONCEPTO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0

---

## 🌐 INFRAESTRUCTURA GENERAL

### Arquitectura Completa

```
┌─────────────────────────────────────────────────┐
│                  67concepto.com                  │
│              (Hostinger - Dominio)               │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│         DNS Configuration (Hostinger)            │
├─────────────────────────────────────────────────┤
│ @ → GitHub Pages (Web corporativa)              │
│ apps → GitHub Pages (Demos)                     │
│ api → Railway/Render (Backend)                  │
│ mail → MX records (Email)                       │
└─────────────────────────────────────────────────┘
           ↓
    ┌──────┴──────┬──────────┐
    ↓             ↓          ↓
┌─────────┐  ┌────────┐  ┌────────┐
│ GitHub  │  │ GitHub │  │Railway │
│ Pages   │  │ Pages  │  │/Render │
│ Web     │  │ Demos  │  │Backend │
│ 67c.com │  │ apps.  │  │ api.   │
│         │  │ 67c.com│  │ 67c.com│
└─────────┘  └────────┘  └────────┘
```

---

## 📁 REPOSITORIO: 67concepto-digital

### Hosting: GitHub Pages

**URL Principal:** 67concepto.com

#### Configuración GitHub Pages

```yaml
# En repositorio settings → Pages

Source: Deploy from a branch
Branch: main / root
Custom domain: 67concepto.com
Enforce HTTPS: ✅ Yes
```

#### Configuración DNS (Hostinger)

```
CNAME Record:
Name: @
Type: CNAME
Value: 67concepto-digtal.github.io
TTL: 3600 (1 hora)

Verificar:
$ nslookup 67concepto.com
# Debe resolver a GitHub IP
```

#### SSL/HTTPS (Automático)

```
✅ GitHub Pages proporciona certificado SSL gratis
✅ Renovación automática
✅ HTTPS obligatorio
```

#### Características

```
Storage: Ilimitado
Bandwidth: Ilimitado (límite práctico: 100GB/mes)
Construcción: Automática (no necesario)
Repositorio: Público
Costo: GRATIS
Uptime: 99.9%
```

#### Archivos Importantes

```
Raíz del repo:
├─ index.html (Homepage)
├─ _config.yml (Configuración)
├─ CNAME (Dominio personalizado)
├─ sitemap.xml (SEO)
├─ robots.txt (Crawlers)
└─ .nojekyll (Indica es estático puro)
```

---

## 📁 REPOSITORIO: 67concepto-templates

### Hosting: GitHub Pages

**URL:** apps.67concepto.com

#### Configuración GitHub Pages

```yaml
# En repositorio settings → Pages

Source: Deploy from a branch
Branch: main
Custom domain: apps.67concepto.com
```

#### Configuración DNS (Hostinger)

```
CNAME Record:
Name: apps
Type: CNAME
Value: 67concepto-digtal.github.io
TTL: 3600
```

#### Deploy Manual

```bash
# Opción 1: Push automático (recomendado)
git push origin main
# GitHub Pages actualiza automáticamente

# Opción 2: Verificar deployment
# Ve a: https://github.com/67concepto-digtal/67concepto-templates/deployments
```

#### Características

```
Storage: Ilimitado
Demostraciones: 8 giros
Performance: < 1s load
Lighthouse: 85+
```

---

## 📁 REPOSITORIO: 67concepto-apps (PRIVADO)

### Hosting: Railway.app o Render.com

**Elegir UNO:**

```
RAILWAY:
├─ Plan gratuito: $5/mes créditos
├─ Plan estándar: $20-50/mes
├─ Fácil deploy con Git
├─ Dashboard intuitivo
└─ Soporte bueno

RENDER:
├─ Plan gratuito: Limitado (10 min inactivo)
├─ Plan estándar: $7+/mes
├─ Deploy automático Git
├─ Buena documentación
└─ Escalable
```

**RECOMENDACIÓN: Railway (mejor para SaaS)**

---

## 🚂 DEPLOYMENT: RAILWAY

### Setup Inicial

#### Paso 1: Crear cuenta

```
1. Ve a railway.app
2. Sign up con GitHub
3. Autoriza Railway en GitHub
```

#### Paso 2: Conectar repositorio

```
1. New Project
2. Deploy from GitHub repo
3. Selecciona 67concepto-apps
4. Autoriza acceso
```

#### Paso 3: Configurar variables

```bash
# .env en Railway dashboard

DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=tu_secret_super_seguro
STRIPE_API_KEY=sk_test_xxx
STRIPE_SECRET_KEY=sk_secret_xxx
SENDGRID_API_KEY=SG_xxx
TWILIO_ACCOUNT_SID=AC_xxx
TWILIO_AUTH_TOKEN=auth_token_xxx
NODE_ENV=production
PORT=5000
API_URL=https://api.67concepto.com
```

#### Paso 4: Conectar dominio

```
1. Railway dashboard → Settings
2. Agregar custom domain
3. Domain: api.67concepto.com
4. Railway genera nombre de servidor

En Hostinger DNS:
Name: api
Type: CNAME
Value: [lo que Railway te da]
```

### Deploy Automático

```
Cada push a 'main':
1. Railway detecta cambio
2. Ejecuta build
3. Corre tests
4. Deploy a producción
5. Actualiza api.67concepto.com

Sin intervención manual ✅
```

### Monitoreo

```
Railway Dashboard:
├─ Logs en vivo
├─ CPU/Memoria
├─ Requests/segundo
├─ Errores
├─ Deploy history
└─ Rollback si falla
```

---

## 🗄️ BASE DE DATOS

### PostgreSQL (Railway Managed)

#### Setup

```
En Railway:
1. Create → Database → PostgreSQL
2. Railway configura automáticamente
3. Genera DATABASE_URL
4. Copia a .env
```

#### Estructura

```sql
-- Ejecutar en railway

-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  giro VARCHAR(50),
  trial_start_date TIMESTAMP,
  trial_end_date TIMESTAMP,
  subscription_id VARCHAR(255),
  status VARCHAR(20), -- active, trial, canceled
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  stripe_subscription_id VARCHAR(255),
  plan VARCHAR(50), -- starter, professional, enterprise
  price DECIMAL(10,2),
  status VARCHAR(20),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Trials
CREATE TABLE trials (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  status VARCHAR(20), -- active, expired, converted
  emails_sent INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_trials_user ON trials(user_id);
```

#### Backups Automáticos

```
Railway proporciona:
├─ Backups diarios
├─ Retención 7 días
├─ Point-in-time restore
└─ Sin costo adicional
```

#### Acceso Local (Development)

```bash
# Conectar a DB en Railway desde local

psql postgresql://[user]:[password]@[host]:5432/[db]

# O usar DBeaver para UI
```

---

## 🔐 SSL & SEGURIDAD

### HTTPS (Automático)

```
✅ GitHub Pages: Certificado gratis incluido
✅ Railway: Certificado Let's Encrypt automático
✅ Renovación: Automática
✅ Forzar HTTPS: Activado en todos
```

### Headers de Seguridad

```
Configurar en Express (backend):

app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
```

### Secrets Management

```
❌ NUNCA en GitHub:
├─ API keys
├─ Passwords
├─ Tokens
├─ Secrets

✅ SIEMPRE en .env (local) + Railway variables
```

---

## 📊 MONITOREO & LOGS

### Railway Logs

```
Dashboard → Logs:
├─ Todos los requests/responses
├─ Errores con stack trace
├─ Performance metrics
├─ Database queries
└─ Real-time streaming
```

### Alertas

```
Configurar notificaciones para:
├─ Deploy failure
├─ CPU > 80%
├─ Memory > 90%
├─ Error rate > 1%
└─ Response time > 500ms
```

---

## 🚢 CI/CD PIPELINE

### GitHub Actions

```yaml
# .github/workflows/deploy.yml

name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm test
      - run: npm run build
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: railway-app/cli-action@v1
        with:
          token: ${{ secrets.RAILWAY_TOKEN }}
          service: ${{ secrets.RAILWAY_SERVICE_ID }}
```

### Flujo

```
1. Push a main
   ↓
2. GitHub Actions corre tests
   ↓
3. Si tests pasan → Deploy a Railway
   ↓
4. Railway actualiza api.67concepto.com
   ↓
5. Si falla → Rollback automático
```

---

## 📈 ESCALABILIDAD

### Horizontal Scaling

```
Si crece tráfico:
├─ Railway aumenta recursos automáticamente
├─ Database puede escalar
├─ Agregar réplicas de lectura si necesario
└─ CDN para assets estáticos (Cloudflare - gratis)
```

### Vertical Scaling

```
Aumentar plan Railway:
1. Dashboard → Plan
2. Elegir plan superior
3. Se actualiza sin downtime
4. Costo aumenta proporcionalmente
```

---

## 🔄 DEPLOY CHECKLIST

### Pre-Deployment

```
- [ ] Tests en verde (100% coverage mínimo 75%)
- [ ] Lint sin errores
- [ ] Build sin warnings
- [ ] .env.example actualizado
- [ ] Database migrations listas
- [ ] README actualizado
- [ ] API documentation current
```

### Deployment

```
- [ ] Push a rama develop primero
- [ ] Review en GitHub
- [ ] Merge a main
- [ ] GitHub Actions corre tests
- [ ] Railway deploya automáticamente
- [ ] Verificar api.67concepto.com está up
- [ ] Probar endpoints clave
```

### Post-Deployment

```
- [ ] Logs sin errores
- [ ] Performance OK (< 200ms)
- [ ] Usuarios pueden login
- [ ] Trial counter funciona
- [ ] Pagos Stripe OK
- [ ] Emails automáticos se envían
- [ ] WhatsApp bots funcionan
```

---

## 🔧 TROUBLESHOOTING

### "502 Bad Gateway"

```
Solución:
1. Ver logs en Railway
2. Revisar .env variables
3. Database conecta?
4. Port correcto?
5. Reiniciar: Railway dashboard → Restart
```

### "Database Connection Refused"

```
Solución:
1. DATABASE_URL en Railway dashboard
2. Copiar exactamente a .env local
3. psql para testear conexión
4. Si problema persiste, recrear DB
```

### "Deployment Stuck"

```
Solución:
1. Ver logs en GitHub Actions
2. Cancelar y reintentar
3. Si persiste, contactar Railway support
```

---

## 📋 COSTO MENSUAL

```
67concepto.com:
├─ Dominio (Hostinger): $1/mes
├─ DNS (Hostinger): Incluido
├─ GitHub Pages: GRATIS
├─ GitHub Actions: GRATIS
├─ Demos (GitHub Pages): GRATIS
└─ Backend (Railway): $15-30/mes

TOTAL: $20-40/mes

Con crecimiento:
├─ Railway: +$50-200/mes si necesita más
├─ Database: +$10-50/mes si crece mucho
└─ CDN: $0 (Cloudflare gratis)
```

---

## ✅ CHECKLIST DEPLOYMENT

**ANTES DE LANZAR:**

```
Infraestructura:
- [ ] Dominio 67concepto.com funcionando
- [ ] DNS configurado (A, CNAME records)
- [ ] HTTPS activo en todos sitios
- [ ] GitHub Pages setup 67concepto-digital
- [ ] GitHub Pages setup 67concepto-templates
- [ ] Railway con backend deployado
- [ ] Database creada y poblada
- [ ] Variables .env en Railway

Web:
- [ ] Homepage responsive
- [ ] Selector giros funciona
- [ ] Modal prueba abre/cierra
- [ ] Links funcionan
- [ ] Imágenes cargan rápido

Demos:
- [ ] 8 demos en GitHub Pages
- [ ] apps.67concepto.com apunta correctamente
- [ ] Cada demo funciona
- [ ] Contador prueba visible
- [ ] Modal upgrade funciona

Backend:
- [ ] Login funciona
- [ ] Registro funciona
- [ ] Trial 7 días funciona
- [ ] Pago Stripe (test mode)
- [ ] Emails automáticos se envían
- [ ] WhatsApp bots responden
- [ ] Logs sin errores

Performance:
- [ ] Web Lighthouse 90+
- [ ] Demos Lighthouse 85+
- [ ] API response < 200ms
- [ ] Database queries < 100ms

Seguridad:
- [ ] HTTPS en todo
- [ ] Headers de seguridad
- [ ] No secrets en GitHub
- [ ] Rate limiting activado
- [ ] Input validation OK

Monitoreo:
- [ ] Railway logs visible
- [ ] Alertas configuradas
- [ ] Backups automáticos
- [ ] Runbook de desastres
```

---

**Hosting & Deployment v1.0 - Generado:** 24 de Julio 2026  
**Próxima revisión:** Después de FASE 6
