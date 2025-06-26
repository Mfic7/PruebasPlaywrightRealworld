import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Configuración global que se ejecuta antes de todas las pruebas
  console.log('Iniciando configuración global de pruebas...');
  
  await browser.close();
}

export default globalSetup; 