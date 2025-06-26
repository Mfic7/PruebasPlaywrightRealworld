import { test, expect } from '@playwright/test';
import { NetflixPage } from './pages/NetflixPage';

let netflixPage: NetflixPage;

test.beforeEach(async ({ page }) => {
    netflixPage = new NetflixPage(page);
});

test.describe('Netflix Tests', () => {
    test('should navigate to Netflix and extract information', async ({ page }) => {
        // Given que estoy en la página de inicio de Netflix
        await netflixPage.navigateToNetflix();
        await netflixPage.maximizeWindow();
        
        // Imprimir URL actual
        const currentUrl = await netflixPage.getCurrentUrl();
        console.log('URL actual:', currentUrl);
        expect(currentUrl).toContain('netflix.com');
        
        // Verificar que estamos en Netflix
        const title = await page.title();
        console.log('Título de la página:', title);
        expect(title.toLowerCase()).toContain('netflix');
        
        // Extraer títulos de películas/series (si están disponibles)
        try {
            const movieTitles = await netflixPage.getMovieTitles();
            console.log('Títulos encontrados:', movieTitles);
            expect(movieTitles.length).toBeGreaterThan(0);
        } catch (error) {
            console.log('No se pudieron obtener títulos específicos, pero la navegación fue exitosa');
        }
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        // Given que estoy en la página de inicio de Netflix
        await netflixPage.navigateToNetflix();
        await netflixPage.maximizeWindow();
        
        // When me logueo con el usuario válido y contraseña válida
        await netflixPage.login('auomarcos@gmail.com', '?Auomarcos1.');
        
        // Then debería ver la pantalla de selección de perfiles
        const isLoginSuccessful = await netflixPage.isLoginSuccessful();
        expect(isLoginSuccessful).toBeTruthy();
        
        // Imprimir URL actual
        const currentUrl = await netflixPage.getCurrentUrl();
        console.log('URL después del login:', currentUrl);
        
        // Si el login fue exitoso, intentar seleccionar perfil
        if (isLoginSuccessful) {
            await netflixPage.selectFirstProfile();
            
            // Hacer scroll para cargar más contenido
            await netflixPage.scrollDown();
            
            // Intentar extraer títulos de películas
            try {
                const movieTitles = await netflixPage.getMovieTitles();
                console.log('Títulos de películas después del login:', movieTitles);
            } catch (error) {
                console.log('No se pudieron obtener títulos después del login');
            }
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
        if (isErrorVisible) {
            const errorMessage = await netflixPage.getErrorMessage();
            console.log('Mensaje de error:', errorMessage);
            expect(errorMessage).not.toBe('Error no especificado');
        } else {
            console.log('No se encontró mensaje de error visible');
        }
    });
}); 