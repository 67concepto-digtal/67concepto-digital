# 🛠️ DIRECTRICES TÉCNICAS - 67 CONCEPTO

**Última actualización:** 24 de Julio 2026  
**Versión:** 1.0

---

## 1. STACK TECNOLÓGICO

### Frontend (67concepto-digital + 67concepto-templates)

```
HTML5 / CSS3 / JavaScript ES6+
├─ Framework: Vanilla JS (sin dependencias para web)
├─ Responsive: Mobile-first
├─ Animaciones: CSS3 + JS smooth
├─ Assets: Optimizados (TinyPNG, SVG)
└─ Build: No necesario (GitHub Pages)
```

### Frontend (67concepto-apps - Apps reales)

```
React 18+
├─ Build Tool: Vite
├─ State Management: Redux/Context API
├─ UI Components: Material-UI o Custom
├─ HTTP Client: Axios
├─ Auth: JWT Tokens
└─ Styling: Tailwind CSS
```

### Backend (67concepto-apps)

```
Node.js + Express
├─ Runtime: Node 18+
├─ Framework: Express 4.x
├─ Database: PostgreSQL
├─ ORM: Sequelize o TypeORM
├─ Auth: JWT + bcrypt
├─ API: RESTful
├─ Payment: Stripe API
├─ Email: SendGrid/Nodemailer
├─ WhatsApp: Twilio API
└─ Deployment: Docker
```

### Database

```
PostgreSQL 13+
├─ Host: Railway/Render managed
├─ Backup: Automático diario
├─ SSL: Obligatorio
├─ Charset: UTF-8
└─ Timezone: UTC
```

---

## 2. CONVENCIONES DE CÓDIGO

### Nombres de Archivos

```
✅ CORRECTO:
├─ components/UserDashboard.jsx
├─ routes/auth-routes.js
├─ styles/button-styles.css
├─ utils/validation-helpers.js
└─ models/user-model.js

❌ INCORRECTO:
├─ components/userdashboard.jsx
├─ routes/authRoutes.js
├─ styles/buttonStyles.css
├─ utils/validation_helpers.js
└─ models/UserModel.js
```

### Convención de Carpetas

```
REGLA: kebab-case para carpetas públicas
       camelCase para variables/funciones

✅ CORRECTO:
├─ src/components/
├─ src/pages/
├─ src/utils/
├─ src/services/
├─ src/hooks/
└─ src/styles/

❌ INCORRECTO:
├─ src/Components/
├─ src/PAGES/
├─ src/UtilS/
└─ src/SERVICES/
```

### Variables y Funciones

```
✅ CORRECTO:
const userName = "Juan"
const isActive = true
function calculateTotalSales() {}
const handleButtonClick = () => {}

❌ INCORRECTO:
const user_name = "Juan"
const is_active = true
function CalculateTotalSales() {}
const ButtonClickHandler = () => {}
```

### Clases y Modelos

```
✅ CORRECTO:
class UserService {}
class PaymentGateway {}
const UserSchema = new Schema()

❌ INCORRECTO:
class user_service {}
class paymentgateway {}
const userSchema = new Schema()
```

---

## 3. GIT WORKFLOW

### Ramas (Branches)

```
main
├─ Producción
├─ Solo merges de release
└─ Protegida (sin push directo)

develop
├─ Desarrollo
├─ Base para feature branches
└─ Estable

feature/[nombre]
├─ Nuevas características
├─ Naming: feature/user-dashboard
├─ Del develop

bugfix/[nombre]
├─ Correcciones
├─ Naming: bugfix/login-error
├─ Del develop

release/v[version]
├─ Preproducción
├─ Naming: release/v1.0.0
├─ Del develop
└─ Merge a main y develop
```

### Commits

```
FORMATO: <type>: <descripción>

TIPOS:
├─ feat: Nueva característica
├─ fix: Corrección de bug
├─ docs: Documentación
├─ style: Formato (sin cambios funcionales)
├─ refactor: Refactorización
├─ test: Tests
├─ chore: Tareas (build, deps, etc)
└─ ci: CI/CD

EJEMPLOS:
✅ feat: agregar modal de prueba gratuita
✅ fix: corregir validación email en login
✅ docs: actualizar README
✅ refactor: simplificar componente Dashboard

❌ fixed bug
❌ updated stuff
❌ cambios varios
```

### Pull Requests

```
TÍTULO: Mismo formato commits
DESCRIPCIÓN:
- Qué cambió
- Por qué cambió
- Cómo testearlo
- Links a issues relacionadas

REVISORES: Mínimo 1 aprobación antes de merge
TESTS: Todos deben pasar
CI/CD: Debe estar en verde
```

---

## 4. ESTÁNDARES DE CÓDIGO

### JavaScript/ES6+

```javascript
// ✅ CORRECTO
const handleUserLogin = async (email, password) => {
  try {
    const response = await authService.login(email, password);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

// ❌ INCORRECTO
function handleUserLogin(email, password) {
  return authService.login(email, password);
}

// Semicolons obligatorios
// No use var, use const/let
// Use async/await en lugar de .then()
// Manejo de errores es obligatorio
```

### HTML/CSS

```html
<!-- ✅ CORRECTO -->
<div class="card card--primary">
  <h2 class="card__title">Título</h2>
  <p class="card__description">Descripción</p>
</div>

<!-- ❌ INCORRECTO -->
<div class="Card Primary">
  <h2 class="Title">Título</h2>
  <p class="Description">Descripción</p>
</div>

<!-- BEM Methodology obligatorio -->
<!-- Clases en lowercase -->
<!-- IDs solo para navegación -->
```

### React Components

```jsx
// ✅ CORRECTO
export const UserCard = ({ user, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await userService.delete(user.id);
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Eliminando...' : 'Eliminar'}
      </button>
    </div>
  );
};

// ❌ INCORRECTO
class UserCard extends React.Component {
  // Usar hooks, no class components
}
```

---

## 5. PERFORMANCE

### Lighthouse Targets

```
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

### Optimizaciones

```
Images:
├─ Máximo 100KB por imagen
├─ Usar WebP con fallback PNG
├─ Lazy loading
└─ Responsive srcset

JavaScript:
├─ Bundle < 200KB (gzipped)
├─ Code splitting
├─ Minificado en producción
└─ Tree shaking

CSS:
├─ < 50KB total
├─ Minificado en producción
├─ No CSS frameworks pesados
└─ Critical CSS inline

Server:
├─ Respuesta < 200ms
├─ Cache headers configurados
├─ GZIP compression
└─ CDN para assets estáticos
```

---

## 6. TESTING

### Coverage Mínimo

```
Backend:
├─ Services: 80% coverage
├─ Routes: 75% coverage
├─ Models: 70% coverage
└─ Total: 75% minimum

Frontend:
├─ Components críticos: 80%
├─ Utils: 90%
├─ Total: 70% minimum

Tests requeridos:
├─ Unit tests
├─ Integration tests
├─ E2E tests críticos
└─ API tests
```

### Herramientas

```
Backend:
├─ Testing: Jest
├─ HTTP: Supertest
└─ Coverage: Istanbul

Frontend:
├─ Testing: Vitest/Jest
├─ Components: React Testing Library
├─ E2E: Cypress
└─ Coverage: Istanbul
```

---

## 7. SEGURIDAD

### OWASP Top 10

```
✅ Implementar:
├─ HTTPS obligatorio
├─ CSRF tokens
├─ Input validation
├─ SQL injection prevention (ORM)
├─ Password hashing (bcrypt)
├─ JWT expiration (15min access, refresh token)
├─ Rate limiting
├─ CORS configurado
├─ Headers de seguridad
└─ Secrets en .env (no en código)

❌ Nunca:
├─ Guardar passwords en texto plano
├─ Exponer secrets en GitHub
├─ Permitir SQL raw sin sanitizar
├─ Hacer queries sin validación
├─ Usar JWT sin expiración
└─ Confiar en inputs del cliente
```

### Environment Variables

```
.env (NUNCA en GitHub):
├─ DATABASE_URL
├─ JWT_SECRET
├─ STRIPE_API_KEY
├─ STRIPE_SECRET_KEY
├─ SENDGRID_API_KEY
├─ TWILIO_ACCOUNT_SID
├─ TWILIO_AUTH_TOKEN
├─ NODE_ENV
├─ PORT
└─ API_URL

Usar .env.example para template
```

---

## 8. DEPLOY & CI/CD

### GitHub Actions

```yaml
# Tests antes de merge a develop
# Build antes de merge a main
# Deploy automático a producción

Triggers:
├─ Push a develop → Test
├─ Push a main → Build + Deploy
├─ PR → Test + Build check
└─ Tag v* → Release automático
```

### Deployment Process

```
1. Commit a rama feature
2. Push a GitHub
3. CI/CD corre tests
4. Create Pull Request
5. Code review
6. Merge a develop
7. Merge a main cuando está listo
8. GitHub Actions deploya a producción
9. Rollback automático si falla
```

---

## 9. DOCUMENTACIÓN DE CÓDIGO

### JSDoc

```javascript
/**
 * Calcula el total de ventas para un usuario
 * 
 * @param {string} userId - ID del usuario
 * @param {Date} startDate - Fecha de inicio
 * @param {Date} endDate - Fecha de fin
 * @returns {Promise<number>} Total de ventas
 * @throws {Error} Si el usuario no existe
 * 
 * @example
 * const total = await calculateSales('user123', new Date('2024-01-01'), new Date('2024-01-31'));
 */
async function calculateSales(userId, startDate, endDate) {
  // ...
}
```

### README por componente

```markdown
# UserDashboard

## Descripción
Componente que muestra el dashboard del usuario.

## Props
- `user` (Object): Datos del usuario
- `onLogout` (Function): Callback al logout

## Uso
```jsx
<UserDashboard user={userData} onLogout={handleLogout} />
```

## Dependencias
- React 18+
- Redux

## Notas
- Requiere autenticación
- Datos cargados desde API
```

---

## 10. DEBUGGING & LOGS

### Niveles de Log

```javascript
logger.error('Error crítico');    // Producción + desarrollo
logger.warn('Advertencia');       // Producción + desarrollo
logger.info('Info importante');   // Solo desarrollo
logger.debug('Debug info');       // Solo desarrollo
```

### Formato

```
[2024-07-24 14:30:45] [ERROR] UserService.login() - Invalid email format
[2024-07-24 14:30:46] [WARN] Database connection slow: 1200ms
[2024-07-24 14:30:47] [INFO] User logged in: user@example.com
```

---

**Documento Técnico v1.0 - Generado:** 24 de Julio 2026  
**Próxima revisión:** Después de FASE 2
