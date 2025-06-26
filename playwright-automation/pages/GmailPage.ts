import { Page, Locator, expect } from '@playwright/test';

export class GmailPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly nextButton: Locator;
    readonly signInButton: Locator;
    readonly errorMessage: Locator;
    readonly inboxMessage: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.nextButton = page.locator('#identifierNext');
        this.signInButton = page.locator('#passwordNext');
        this.errorMessage = page.locator('.error-message');
        this.inboxMessage = page.locator('[data-testid="inbox-message"]');
        this.successMessage = page.locator('.success-message');
    }

    async navigateToGmail() {
        await this.page.goto('https://mail.google.com');
        await this.page.waitForLoadState('networkidle');
    }

    async setMobileViewport() {
        await this.page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8
    }

    async login(email: string, password: string) {
        // Paso 1: Ingresar email
        await this.emailInput.fill(email);
        await this.nextButton.click();
        
        // Esperar a que aparezca el campo de contraseña
        await this.page.waitForSelector('input[type="password"]', { timeout: 10000 });
        
        // Paso 2: Ingresar contraseña
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    async isInboxVisible(): Promise<boolean> {
        try {
            await this.inboxMessage.waitFor({ timeout: 10000 });
            return true;
        } catch {
            return false;
        }
    }

    async isErrorMessageVisible(): Promise<boolean> {
        try {
            await this.errorMessage.waitFor({ timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

    async getSuccessMessage(): Promise<string> {
        return await this.successMessage.textContent() || '';
    }

    async waitForLoginSuccess(): Promise<void> {
        await this.page.waitForURL('**/mail/u/0/#inbox', { timeout: 15000 });
    }
} 