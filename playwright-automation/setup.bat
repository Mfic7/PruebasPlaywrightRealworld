@echo off
echo ========================================
echo    PROYECTO QA AUTOMATIZADA - SETUP
echo ========================================
echo.

echo [1/5] Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no está instalado.
    echo Por favor, instala Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js encontrado
node --version

echo.
echo [2/5] Verificando npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm no está disponible.
    pause
    exit /b 1
)
echo ✅ npm encontrado
npm --version

echo.
echo [3/5] Instalando dependencias...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Fallo al instalar dependencias.
    pause
    exit /b 1
)
echo ✅ Dependencias instaladas

echo.
echo [4/5] Instalando navegadores de Playwright...
npm run install:browsers
if %errorlevel% neq 0 (
    echo ERROR: Fallo al instalar navegadores.
    pause
    exit /b 1
)
echo ✅ Navegadores instalados

echo.
echo [5/5] Verificando instalación...
npx playwright test --list
if %errorlevel% neq 0 (
    echo ERROR: Los tests no se detectaron correctamente.
    pause
    exit /b 1
)
echo ✅ Instalación completada exitosamente

echo.
echo ========================================
echo    ¡INSTALACIÓN COMPLETADA!
echo ========================================
echo.
echo Comandos disponibles:
echo   npm test                    - Ejecutar todas las pruebas
echo   npm run test:netflix        - Pruebas de Netflix
echo   npm run test:gmail          - Pruebas de Gmail
echo   npm run test:headed         - Con interfaz visual
echo   npm run report              - Generar reportes
echo.
echo Para más información, consulta INSTRUCCIONES_EJECUCION.md
echo.
pause 