import {expect, Locator, Page, test} from "@playwright/test";
import {BasePage} from "./BasePage";

export class MainPage extends BasePage{

    private readonly headerLocator: Locator;
    private readonly categoriesTabsLocator: Locator;
    private readonly menuLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/ });
        this.menuLocator = this.page.getByRole('navigation').locator('section').filter({ hasText: 'ГлавнаяRUTUBE' });
    }

    async open() {
        await test.step('Open main page', async () => {
            await this.page.goto("https://rutube.ru/");
        })
    }

    async headerHasCorrectAriaSnapshot() {
        await test.step('Check header has correct ARIA snapshot structure', async () => {
            await expect(this.headerLocator).toMatchAriaSnapshot()
        })
    }

    async categoriesTabsHasCorrectAriaSnapshot() {
        await test.step('Check tabs section with categories has correct ARIA snapshot structure', async () => {
            await expect(this.categoriesTabsLocator).toMatchAriaSnapshot()
        })
    }

    async menuHasCorrectAriaSnapshot() {
        await test.step('Check left menu has correct ARIA snapshot structure', async () => {
            await expect(this.menuLocator).toMatchAriaSnapshot()
        })
    }
}
