import {Page, test} from "@playwright/test";

export class BasePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async closeSartModals() {
        await test.step('Close modals with cookies and ads messages', async () => {
            await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
            await this.page.getByRole('button', { name: 'Закрыть', exact: true }).click();
        })}
}