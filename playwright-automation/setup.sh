#!/bin/bash

echo "========================================"
echo "   PROYECTO QA AUTOMATIZADA - SETUP"
echo "========================================"
echo

echo "[1/5] Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado."
    echo "Por favor, instala Node.js desde: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js encontrado"
node --version

echo
echo "[2/5] Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm no está disponible."
    exit 1
fi
echo "✅ npm encontrado"
npm --version

echo
echo "[3/5] Instalando dependencias..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Fallo al instalar dependencias."
    exit 1
fi
echo "✅ Dependencias instaladas"

echo
echo "[4/5] Instalando navegadores de Playwright..."
npm run install:browsers
if [ $? -ne 0 ]; then
    echo "ERROR: Fallo al instalar navegadores."
    exit 1
fi
echo "✅ Navegadores instalados"

echo
echo "[5/5] Verificando instalación..."
npx playwright test --list
if [ $? -ne 0 ]; then
    echo "ERROR: Los tests no se detectaron correctamente."
    exit 1
fi
echo "✅ Instalación completada exitosamente"

echo
echo "========================================"
echo "   ¡INSTALACIÓN COMPLETADA!"
echo "========================================"
echo
echo "Comandos disponibles:"
echo "  npm test                    - Ejecutar todas las pruebas"
echo "  npm run test:netflix        - Pruebas de Netflix"
echo "  npm run test:gmail          - Pruebas de Gmail"
echo "  npm run test:headed         - Con interfaz visual"
echo "  npm run report              - Generar reportes"
echo
echo "Para más información, consulta INSTRUCCIONES_EJECUCION.md"
echo 