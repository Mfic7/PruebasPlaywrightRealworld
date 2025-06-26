import { test, expect } from '@playwright/test';
import { GmailPage } from './pages/GmailPage';

let gmailPage: GmailPage;

test.beforeEach(async ({ page }) => {
    gmailPage = new GmailPage(page);
});

test.describe('Gmail Mobile Login Tests', () => {
    test('should login successfully with valid credentials on mobile', async ({ page }) => {
        // Given que estoy en la página de inicio de Gmail en un móvil
        await gmailPage.navigateToGmail();
        await gmailPage.setMobileViewport();
        
        // When me logueo en Gmail con el usuario válido y contraseña válida
        await gmailPage.login('auomarcos@gmail.com', '?Auomarcos1.');
        
        // Then debería poder acceder a mi bandeja de entrada
        const isInboxVisible = await gmailPage.isInboxVisible();
        expect(isInboxVisible).toBeTruthy();
        
        // Imprimir URL actual
        const currentUrl = await gmailPage.getCurrentUrl();
        console.log('URL actual:', currentUrl);
        
        // Imprimir mensaje de acceso exitoso
        try {
            const successMessage = await gmailPage.getSuccessMessage();
            console.log('Mensaje de acceso exitoso:', successMessage);
        } catch (error) {
            console.log('Acceso exitoso a Gmail móvil');
        }
    });

    test('should show error message with invalid credentials on mobile', async ({ page }) => {
        // Given que estoy en la página de inicio de Gmail en un móvil
        await gmailPage.navigateToGmail();
        await gmailPage.setMobileViewport();
        
        // When me logueo en Gmail con el usuario inválido y contraseña inválida
        await gmailPage.login('usuario@incorrecto.com', 'claveIncorrecta');
        
        // Then debería recibir un error de autenticación
        const isErrorVisible = await gmailPage.isErrorMessageVisible();
        expect(isErrorVisible).toBeTruthy();
        
        const errorMessage = await gmailPage.getErrorMessage();
        console.log('Mensaje de error de autenticación:', errorMessage);
    });
}); 