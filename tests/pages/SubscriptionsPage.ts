import {BasePage} from "./BasePage";
import {Locator, Page, test} from "@playwright/test";

export class SubscriptionsPage extends BasePage{

    private readonly contentPageLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.contentPageLocator = this.page.locator('.application-module__content');
    }

    //actions

    async open() {
        await test.step('Open Categories page', async () => {
            await this.page.goto("https://rutube.ru/my/subscriptions/");
        })
    }

    //assertions

    async contentPageHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
    }
}