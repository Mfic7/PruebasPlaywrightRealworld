# 📋 INSTRUCCIONES DE EJECUCIÓN - PROYECTO QA AUTOMATIZADA

## 🎯 Descripción del Proyecto

Este proyecto implementa automatización de pruebas para **Netflix** y **Gmail** usando Playwright, siguiendo el patrón Page Object Model y principios BDD. Es parte de la **Parte 2: Evaluación de QA Automatizada**.

### 📦 Contenido del Proyecto
- **Proyecto RealWorld**: React + Redux Example App
- **Automatización Netflix**: Navegación web y login
- **Automatización Gmail**: Login móvil
- **Reportes**: Allure y HTML
- **Evidencias**: Screenshots y videos automáticos

---

## 🚀 PASOS PARA EJECUTAR EL PROYECTO

### **PASO 1: Verificar Requisitos Previos**

#### ✅ Requisitos del Sistema
- **Node.js**: Versión 16 o superior
- **npm**: Incluido con Node.js
- **Git**: Para clonar el repositorio
- **Navegador**: Chrome, Firefox o Edge

#### 🔍 Verificar Instalaciones
```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version
```

**Si no tienes Node.js instalado:**
1. Descargar desde: https://nodejs.org/
2. Instalar la versión LTS
3. Reiniciar la terminal

---

### **PASO 2: Clonar/Descargar el Proyecto**

#### Opción A: Si tienes el repositorio en GitHub
```bash
git clone <URL_DEL_REPOSITORIO>
cd ProyectoEstruturado
```

#### Opción B: Si tienes el proyecto local
```bash
# Navegar a la carpeta del proyecto
cd C:\Users\TU_USUARIO\Documents\ProyectoEstruturado
```

---

### **PASO 3: Instalar Dependencias**

```bash
# Navegar a la carpeta de automatización
cd playwright-automation

# Instalar dependencias de Node.js
npm install

# Instalar navegadores de Playwright
npm run install:browsers
```

**⏱️ Tiempo estimado:** 5-10 minutos

---

### **PASO 4: Verificar Instalación**

```bash
# Verificar que Playwright esté instalado correctamente
npx playwright --version

# Verificar que los tests se detecten
npx playwright test --list
```

**✅ Resultado esperado:** Deberías ver una lista de tests disponibles.

---

## 🧪 EJECUTAR LAS PRUEBAS

### **OPCIÓN 1: Ejecutar Todas las Pruebas**
```bash
npm test
```

### **OPCIÓN 2: Ejecutar Pruebas Específicas**

#### Netflix (Web)
```bash
npm run test:netflix
```

#### Gmail (Móvil)
```bash
npm run test:gmail
```

### **OPCIÓN 3: Ejecutar con Interfaz Visual**
```bash
# Ver las pruebas ejecutándose en el navegador
npm run test:headed
```

### **OPCIÓN 4: Ejecutar en Modo Debug**
```bash
# Para depurar paso a paso
npm run test:debug
```

---

## 📊 GENERAR REPORTES

### **Reporte Allure (Recomendado)**
```bash
# Generar y abrir reporte completo
npm run report
```

### **Reporte HTML de Playwright**
```bash
# Después de ejecutar las pruebas
npx playwright show-report
```

---

## 🔧 CONFIGURACIÓN ADICIONAL

### **Credenciales de Prueba**
Las credenciales están configuradas en los archivos de prueba:
- **Usuario válido**: auomarcos@gmail.com
- **Contraseña válida**: ?Auomarcos1.

**⚠️ Nota:** Estas son credenciales de prueba. Para pruebas reales, usar credenciales propias.

### **Configuración de Dispositivos**
- **Netflix**: Desktop (1920x1080)
- **Gmail**: iPhone 6/7/8 (375x667)

---

## 📁 ESTRUCTURA DEL PROYECTO

```
ProyectoEstruturado/
├── realworld-app/              # Proyecto RealWorld
│   ├── src/                    # Código fuente React + Redux
│   ├── public/                 # Archivos públicos
│   └── package.json            # Dependencias
│
└── playwright-automation/      # Automatización de QA
    ├── features/               # Archivos BDD (.feature)
    │   ├── netflix.feature
    │   └── gmail.feature
    ├── pages/                  # Page Objects
    │   ├── NetflixPage.ts
    │   └── GmailPage.ts
    ├── netflix.spec.ts         # Tests de Netflix
    ├── gmail.spec.ts           # Tests de Gmail
    ├── test.spec.ts            # Test básico
    ├── utils/                  # Utilidades
    ├── playwright.config.ts    # Configuración
    ├── package.json            # Scripts y dependencias
    └── README.md               # Documentación
```

---

## 🎭 ESCENARIOS DE PRUEBA

### **Netflix (Ejercicio 1)**
- ✅ Navegar a www.netflix.com/pe
- ✅ Maximizar la pantalla
- ✅ Extraer e imprimir URL actual
- ✅ Extraer títulos de películas/series
- ✅ Inicio de sesión exitoso y fallido

### **Gmail (Ejercicio 2)**
- ✅ Acceder a Gmail desde dispositivo móvil
- ✅ Capturar mensaje de inicio de sesión exitoso
- ✅ Inicio de sesión exitoso y fallido

---

## 📸 EVIDENCIAS GENERADAS

### **Ubicación de Evidencias**
```
playwright-automation/
├── test-results/              # Screenshots y videos
├── allure-results/            # Reportes Allure
└── playwright-report/         # Reportes HTML
```

### **Tipos de Evidencias**
- **Screenshots**: Capturas automáticas en caso de fallo
- **Videos**: Grabación completa de las ejecuciones
- **Reportes HTML**: Playwright Test Reporter
- **Reportes Allure**: Reportes detallados con métricas

---

## 🔍 TROUBLESHOOTING

### **Problema 1: Error "No tests found"**
```bash
# Solución: Verificar que estés en la carpeta correcta
cd playwright-automation
npx playwright test --list
```

### **Problema 2: Error de navegadores no instalados**
```bash
# Solución: Instalar navegadores
npm run install:browsers
```

### **Problema 3: Error de dependencias**
```bash
# Solución: Reinstalar dependencias
npm install
```

### **Problema 4: Error de TypeScript**
```bash
# Solución: Instalar tipos de Node.js
npm install --save-dev @types/node
```

### **Problema 5: Timeout en pruebas**
```bash
# Solución: Aumentar timeout en playwright.config.ts
timeout: 60000
```

---

## 📋 CHECKLIST DE EJECUCIÓN

### **Antes de Ejecutar**
- [ ] Node.js instalado (versión 16+)
- [ ] npm disponible
- [ ] Proyecto descargado/clonado
- [ ] En la carpeta `playwright-automation`
- [ ] Dependencias instaladas (`npm install`)
- [ ] Navegadores instalados (`npm run install:browsers`)

### **Durante la Ejecución**
- [ ] Tests detectados (`npx playwright test --list`)
- [ ] Pruebas ejecutándose sin errores críticos
- [ ] Evidencias generándose
- [ ] Reportes accesibles

### **Después de la Ejecución**
- [ ] Reportes generados
- [ ] Screenshots disponibles
- [ ] Videos grabados
- [ ] Documentación actualizada

---

## 🎯 RESULTADOS ESPERADOS

### **Ejecución Exitosa**
```
Running 3 tests using 1 worker
✓ Netflix Tests › should navigate to Netflix and extract information
✓ Netflix Tests › should login successfully with valid credentials  
✓ Netflix Tests › should show error message with invalid credentials

3 passed
```

### **Evidencias Generadas**
- ✅ Screenshots en `test-results/`
- ✅ Videos en `test-results/`
- ✅ Reporte HTML en `playwright-report/`
- ✅ Reporte Allure en `allure-results/`

---

## 📞 SOPORTE

### **Si encuentras problemas:**

1. **Verificar logs**: Revisar la consola para mensajes de error
2. **Consultar documentación**: Revisar README.md en cada carpeta
3. **Verificar configuración**: Asegurar que playwright.config.ts esté correcto
4. **Reinstalar dependencias**: `npm install` y `npm run install:browsers`

### **Información del Proyecto**
- **Desarrollado para**: Evaluación de QA Automatizada - Parte 2
- **Tecnologías**: Playwright, TypeScript, Node.js
- **Patrones**: Page Object Model, BDD
- **Principios**: SOLID, POO

---

## 🎉 ¡LISTO PARA EJECUTAR!

Con estas instrucciones, cualquier persona puede ejecutar el proyecto completo de automatización de QA. El proyecto incluye:

- ✅ **Proyecto RealWorld** integrado
- ✅ **Automatización Netflix** (Web)
- ✅ **Automatización Gmail** (Móvil)
- ✅ **Reportes completos** con evidencias
- ✅ **Documentación detallada**

**¡Sigue los pasos y disfruta de la automatización! 🚀** 