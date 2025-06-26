# Proyecto de Automatización con Playwright

Este proyecto implementa automatización de pruebas para Netflix y Gmail usando Playwright, siguiendo el patrón Page Object Model y principios BDD.

## 🎯 Objetivos

- Automatizar el inicio de sesión en Netflix desde la página web
- Automatizar el inicio de sesión en Gmail para un dispositivo móvil
- Aplicar principios SOLID y POO
- Generar reportes de automatización con Allure

## 📁 Estructura del Proyecto

```
playwright-automation/
├── features/                 # Archivos BDD (.feature)
│   ├── netflix.feature
│   └── gmail.feature
├── pages/                   # Page Objects
│   ├── NetflixPage.ts
│   └── GmailPage.ts
├── steps/                   # Implementación de steps
│   ├── netflixSteps.ts
│   └── gmailSteps.ts
├── utils/                   # Utilidades y configuración
│   ├── global-setup.ts
│   └── global-teardown.ts
├── tests/                   # Tests adicionales
├── playwright.config.ts     # Configuración de Playwright
└── package.json
```

## 🚀 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd playwright-automation
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Instalar navegadores:**
   ```bash
   npm run install:browsers
   ```

## 🧪 Ejecución de Pruebas

### Ejecutar todas las pruebas:
```bash
npm test
```

### Ejecutar pruebas específicas:
```bash
# Solo Netflix
npm run test:netflix

# Solo Gmail
npm run test:gmail
```

### Ejecutar en modo headed (con interfaz gráfica):
```bash
npm run test:headed
```

### Ejecutar en modo debug:
```bash
npm run test:debug
```

## 📊 Reportes

### Generar y abrir reporte Allure:
```bash
npm run report
```

### Solo generar reporte:
```bash
npm run report:generate
```

## 🎭 Escenarios Implementados

### Netflix (Web)
- ✅ Navegar a www.netflix.com
- ✅ Maximizar la pantalla
- ✅ Extraer e imprimir URL actual
- ✅ Extraer títulos de tres películas de suspenso
- ✅ Inicio de sesión exitoso y fallido

### Gmail (Móvil)
- ✅ Acceder a Gmail desde dispositivo móvil
- ✅ Capturar mensaje de inicio de sesión exitoso
- ✅ Inicio de sesión exitoso y fallido

## 🔧 Configuración

### Credenciales de Prueba
Las credenciales están configuradas en los archivos `.feature`:
- **Usuario válido:** auomarcos@gmail.com
- **Contraseña válida:** ?Auomarcos1.

### Configuración de Dispositivos Móviles
- **Gmail:** iPhone 6/7/8 (375x667)
- **Netflix:** Desktop (1920x1080)

## 📋 Principios Aplicados

### SOLID
- **S:** Single Responsibility Principle - Cada clase tiene una responsabilidad
- **O:** Open/Closed Principle - Extensible sin modificar código existente
- **L:** Liskov Substitution Principle - Implementado en Page Objects
- **I:** Interface Segregation Principle - Interfaces específicas
- **D:** Dependency Inversion Principle - Dependencias inyectadas

### POO
- **Encapsulamiento:** Métodos y propiedades encapsuladas en clases
- **Herencia:** Estructura preparada para herencia
- **Polimorfismo:** Métodos con diferentes implementaciones
- **Abstracción:** Page Objects abstraen la complejidad

## 🎨 Patrones de Diseño

### Page Object Model
- `NetflixPage.ts` - Encapsula elementos y acciones de Netflix
- `GmailPage.ts` - Encapsula elementos y acciones de Gmail

### BDD (Behavior Driven Development)
- Archivos `.feature` con escenarios en lenguaje natural
- Steps implementados en TypeScript

## 📸 Evidencias

El proyecto genera automáticamente:
- **Screenshots** en caso de fallo
- **Videos** de las ejecuciones
- **Reportes HTML** de Playwright
- **Reportes Allure** detallados

## 🔍 Troubleshooting

### Problemas Comunes

1. **Error de navegadores no instalados:**
   ```bash
   npm run install:browsers
   ```

2. **Error de dependencias:**
   ```bash
   npm install
   ```

3. **Error de TypeScript:**
   ```bash
   npm install --save-dev @types/node
   ```

## 📞 Soporte

Para reportar problemas o solicitar mejoras, crear un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo la licencia ISC. 