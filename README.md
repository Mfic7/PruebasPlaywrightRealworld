# Proyecto Estructurado - QA Automatizada con RealWorld

## 🎯 Descripción del Proyecto

Este proyecto integra el **proyecto RealWorld seleccionado** con **automatización de QA** usando Playwright, implementando los ejercicios 1 y 2 de la Parte 2: Evaluación de QA Automatizada.

### 📋 Proyecto RealWorld Seleccionado
- **Nombre**: React + Redux RealWorld Example App
- **URL**: https://github.com/gothinkster/react-redux-realworld-example-app
- **Descripción**: Aplicación de blog social (clon de Medium.com) con autenticación JWT, CRUD de artículos, comentarios y funcionalidades sociales.

## 🏗️ Estructura del Proyecto

```
ProyectoEstruturado/
├── realworld-app/              # Proyecto RealWorld seleccionado
│   ├── src/                    # Código fuente React + Redux
│   ├── public/                 # Archivos públicos
│   ├── package.json            # Dependencias del proyecto
│   └── README.md               # Documentación del proyecto
│
└── playwright-automation/      # Automatización de QA
    ├── features/               # Archivos BDD (.feature)
    │   ├── netflix.feature
    │   └── gmail.feature
    ├── pages/                  # Page Objects
    │   ├── NetflixPage.ts
    │   └── GmailPage.ts
    ├── steps/                  # Implementación de steps
    │   ├── netflixSteps.ts
    │   └── gmailSteps.ts
    ├── utils/                  # Utilidades y configuración
    ├── tests/                  # Tests adicionales
    ├── playwright.config.ts    # Configuración de Playwright
    └── README.md               # Documentación de automatización
```

## 🚀 Instalación y Configuración

### 1. Proyecto RealWorld
```bash
cd realworld-app
npm install
npm start
```
El proyecto estará disponible en: http://localhost:4100

### 2. Automatización de QA
```bash
cd playwright-automation
npm install
npm run install:browsers
```

## 🧪 Ejercicios Implementados

### Ejercicio 1: Netflix (Web)
- ✅ Navegar a www.netflix.com
- ✅ Maximizar la pantalla
- ✅ Extraer e imprimir URL actual
- ✅ Extraer títulos de tres películas de suspenso
- ✅ Inicio de sesión exitoso y fallido

### Ejercicio 2: Gmail (Móvil)
- ✅ Acceder a Gmail desde dispositivo móvil
- ✅ Capturar mensaje de inicio de sesión exitoso
- ✅ Inicio de sesión exitoso y fallido

## 🎨 Patrones y Principios Aplicados

### SOLID
- **S**: Single Responsibility Principle
- **O**: Open/Closed Principle  
- **L**: Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Inversion Principle

### POO
- **Encapsulamiento**: Page Objects encapsulan elementos
- **Herencia**: Estructura preparada para extensión
- **Polimorfismo**: Métodos con diferentes implementaciones
- **Abstracción**: Abstracción de complejidad de UI

### Patrones de Diseño
- **Page Object Model**: Encapsulación de elementos web
- **BDD**: Behavior Driven Development con Gherkin
- **Screenplay Pattern**: Preparado para implementación

## 📊 Reportes y Evidencias

### Generación de Reportes
```bash
cd playwright-automation
npm run report              # Generar y abrir Allure
npm run report:generate     # Solo generar reporte
```

### Evidencias Automáticas
- **Screenshots**: Capturas en caso de fallo
- **Videos**: Grabación de ejecuciones
- **Reportes HTML**: Playwright Test Reporter
- **Reportes Allure**: Reportes detallados con métricas

## 🎭 Escenarios de Prueba

### Netflix BDD Scenarios
```gherkin
Feature: Inicio de Sesión en Netflix con BDD
  Scenario: Inicio de sesión exitoso
    Given que estoy en la página de inicio de Netflix
    When me logueo con el usuario válido y contraseña válida
    Then debería ver la pantalla de selección de perfiles
```

### Gmail BDD Scenarios
```gherkin
Feature: Inicio de Sesión en Gmail con BDD (Móvil)
  Scenario: Inicio de sesión exitoso en Gmail
    Given que estoy en la página de inicio de Gmail en un móvil
    When me logueo en Gmail con el usuario válido y contraseña válida
    Then debería poder acceder a mi bandeja de entrada
```

## 🧪 Ejecución de Pruebas

### Comandos Disponibles
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas específicas
npm run test:netflix
npm run test:gmail

# Ejecutar con interfaz gráfica
npm run test:headed

# Ejecutar en modo debug
npm run test:debug
```

## 📸 Videos Demostrativos y Evidencias

### Generación de Evidencias
1. **Ejecutar pruebas con video**:
   ```bash
   npm run test:headed
   ```

2. **Generar reportes completos**:
   ```bash
   npm run report
   ```

3. **Capturas automáticas** en `test-results/`

## 🔧 Configuración Técnica

### Credenciales de Prueba
- **Usuario válido**: auomarcos@gmail.com
- **Contraseña válida**: ?Auomarcos1.

### Configuración de Dispositivos
- **Netflix**: Desktop (1920x1080)
- **Gmail**: iPhone 6/7/8 (375x667)

## 📋 Checklist de Requisitos

### ✅ Proyecto RealWorld
- [x] Proyecto seleccionado: React + Redux RealWorld
- [x] Código fuente incluido
- [x] Documentación del proyecto

### ✅ Automatización de QA
- [x] Netflix (Web) - Ejercicio 1
- [x] Gmail (Móvil) - Ejercicio 2
- [x] Patrón Screenplay/Page Object Model
- [x] Principios SOLID aplicados
- [x] POO implementado
- [x] Esperas implícitas y explícitas
- [x] Reportes de automatización

### ✅ Documentación y Evidencias
- [x] Documentación completa
- [x] Instrucciones de instalación
- [x] Instrucciones de ejecución
- [x] Estructura de proyecto documentada
- [x] README principal integrado

### ✅ Repositorio
- [x] Código fuente completo
- [x] Documentación integrada
- [x] Listo para subir a GitHub

## 🚀 Próximos Pasos

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Proyecto Estructurado - QA Automatizada con RealWorld"
   git remote add origin <URL_DEL_REPOSITORIO>
   git push -u origin main
   ```

2. **Generar evidencias finales**:
   - Ejecutar todas las pruebas
   - Generar reportes Allure
   - Capturar videos demostrativos

3. **Documentar resultados**:
   - Screenshots de ejecución exitosa
   - Reportes de cobertura
   - Métricas de rendimiento

## 📞 Soporte

Para consultas sobre el proyecto:
- Revisar documentación en cada carpeta
- Verificar README específico de automatización
- Consultar issues en el repositorio

---

**Proyecto desarrollado para la Evaluación de QA Automatizada - Parte 2** 