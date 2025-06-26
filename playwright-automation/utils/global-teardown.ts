import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  // Limpieza global que se ejecuta después de todas las pruebas
  console.log('Finalizando pruebas y limpiando entorno...');
  
  // Aquí se pueden agregar tareas de limpieza como:
  // - Eliminar archivos temporales
  // - Cerrar conexiones de base de datos
  // - Limpiar datos de prueba
}

export default globalTeardown; 