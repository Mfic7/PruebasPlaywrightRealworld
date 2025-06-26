import { Page, Locator, expect } from '@playwright/test';

export class NetflixPage {
    readonly page: Page;
    readonly url: string;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly profileGateLabel: Locator;
    readonly profileMenuButton: Locator;
    readonly logoutButton: Locator;
    readonly firstProfile: Locator;
    readonly loginErrorMessage: Locator;
    readonly movieTitles: Locator;
    readonly browseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://www.netflix.com/pe';
        
        // Selectores actualizados que funcionan según la implementación proporcionada
        this.loginButton = page.locator('a:has-text("Iniciar sesión")');
        this.emailInput = page.locator('input[name="userLoginId"]');
        this.passwordInput = page.locator('[data-uia="field-password"]');
        this.signInButton = page.locator('[data-uia="sign-in-button"]');
        this.profileGateLabel = page.locator('[data-uia="profile-gate-label"]');
        this.profileMenuButton = page.locator('[data-testid="profile-button"]');
        this.logoutButton = page.locator('a:has-text("Cerrar sesión")');
        this.firstProfile = page.locator('.profile-icon');
        this.loginErrorMessage = page.locator('[data-uia="error-message-container"]');
        this.movieTitles = page.locator('[data-uia="title-card-title"]');
        this.browseButton = page.locator('[data-uia="header-browse-link"]');
    }

    async navigateToNetflix() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async maximizeWindow() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }

    async login(email: string, password: string) {
        try {
            console.log('Haciendo clic en el botón de Iniciar Sesión...');
            // El botón de login puede no existir si ya se está en la página de login
            const loginLink = await this.loginButton.first();
            if (await loginLink.isVisible()) {
                await loginLink.click();
            } else {
                console.log('Ya estamos en la página de login o el botón no es visible.');
            }
            
            console.log('Esperando por el campo de email...');
            await this.page.waitForSelector('input[name="userLoginId"]', { timeout: 15000 });
            
            console.log('Ingresando email...');
            await this.emailInput.fill(email);
            
            console.log('Ingresando contraseña...');
            await this.passwordInput.fill(password);
            
            console.log('Haciendo clic en el botón de Iniciar Sesión del formulario...');
            await this.signInButton.click();
            
        } catch (error) {
            console.log('Error durante el proceso de login en Netflix:', error instanceof Error ? error.message : String(error));
        }
    }

    async isLoginSuccessful(): Promise<boolean> {
        try {
            // Un login es exitoso si aparece la pantalla de perfiles, el menú de perfil O el botón de cerrar sesión.
            await this.page.waitForFunction((selectors) => {
                const profileGate = document.querySelector(selectors.profileGateLabel);
                const profileButton = document.querySelector(selectors.profileMenuButton);
                const logoutButton = document.querySelector(selectors.logoutButton);
                return profileGate || profileButton || logoutButton;
            }, {
                profileGateLabel: '[data-uia="profile-gate-label"]',
                profileMenuButton: '[data-testid="profile-button"]',
                logoutButton: 'a:has-text("Cerrar sesión")'
            }, { timeout: 20000 });

            console.log('Login en Netflix exitoso: Se encontró un elemento de la página de inicio (perfil o botón de logout).');
            return true;
        } catch (error) {
            console.log('Login en Netflix fallido: No se pudo confirmar el inicio de sesión.');
            const errorElement = await this.loginErrorMessage.first();
            if (await errorElement.isVisible()) {
                const errorMessage = await errorElement.textContent();
                console.log('Mensaje de error encontrado en Netflix:', errorMessage?.trim());
            }
            return false;
        }
    }

    async selectFirstProfile() {
        try {
            console.log('Seleccionando el primer perfil disponible...');
            await this.page.waitForSelector('.profile-icon', { timeout: 5000 });
            await this.firstProfile.first().click();
            console.log('Perfil seleccionado.');
            await this.page.waitForLoadState('networkidle', { timeout: 10000 });
        } catch (error) {
            console.log('No se pudo seleccionar un perfil o no era necesario.');
        }
    }

    async scrollDown() {
        try {
            console.log('Haciendo scroll hacia abajo...');
            await this.page.evaluate(() => {
                window.scrollBy(0, document.body.scrollHeight);
            });
            await this.page.waitForTimeout(1000); // Esperar un momento para que cargue contenido nuevo
        } catch(error) {
            console.log('Error al hacer scroll:', error instanceof Error ? error.message : String(error));
        }
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    async getMovieTitles(): Promise<string[]> {
        try {
            await this.page.waitForSelector('[data-uia="title-card-title"]', { timeout: 10000 });
            const titles = await this.page.$$eval('[data-uia="title-card-title"]', elements => 
                elements.map(el => el.textContent?.trim()).filter(text => text && text.length > 0)
            );
            return titles.slice(0, 3); // Devolver los primeros 3 títulos encontrados
        } catch (error) {
            console.log('Error al extraer títulos de películas:', error instanceof Error ? error.message : String(error));
            return ['No se pudieron extraer títulos de películas'];
        }
    }

    async isProfileSelectionVisible(): Promise<boolean> {
        try {
            await this.profileGateLabel.waitFor({ timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async isErrorMessageVisible(): Promise<boolean> {
        try {
            await this.loginErrorMessage.waitFor({ timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async getErrorMessage(): Promise<string> {
        try {
            const errorElement = await this.loginErrorMessage.first();
            if (await errorElement.isVisible()) {
                return await errorElement.textContent() || 'Error no especificado';
            }
        } catch (e) {
            // Continuar con otros métodos
        }
        return 'Error no especificado';
    }
} 