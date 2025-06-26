import { test, expect } from '@playwright/test';
import { NetflixPage } from '../pages/NetflixPage';

let netflixPage: NetflixPage;

test.beforeEach(async ({ page }) => {
    netflixPage = new NetflixPage(page);
});

test.describe('Netflix Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        // Given que estoy en la página de inicio de Netflix
        await netflixPage.navigateToNetflix();
        await netflixPage.maximizeWindow();
        
        // When me logueo con el usuario válido y contraseña válida
        await netflixPage.login('auomarcos@gmail.com', '?Auomarcos1.');
        
        // Then debería ver la pantalla de selección de perfiles
        const isProfileVisible = await netflixPage.isProfileSelectionVisible();
        expect(isProfileVisible).toBeTruthy();
        
        // Imprimir URL actual
        const currentUrl = await netflixPage.getCurrentUrl();
        console.log('URL actual:', currentUrl);
        
        // Imprimir títulos de películas (si están disponibles)
        try {
            const movieTitles = await netflixPage.getMovieTitles();
            console.log('Títulos de películas encontrados:', movieTitles);
        } catch (error) {
            console.log('No se pudieron obtener los títulos de películas:', error instanceof Error ? error.message : String(error));
        }
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        // Given que estoy en la página de inicio de Netflix
        await netflixPage.navigateToNetflix();
        await netflixPage.maximizeWindow();
        
        // When me logueo con el usuario inválido y contraseña inválida
        await netflixPage.login('usuario@incorrecto.com', 'claveIncorrecta');
        
        // Then debería ver un mensaje de error de inicio de sesión
        const isErrorVisible = await netflixPage.isErrorMessageVisible();
        expect(isErrorVisible).toBeTruthy();
        
        const errorMessage = await netflixPage.getErrorMessage();
        console.log('Mensaje de error:', errorMessage);
    });
}); 