import {BasePage} from "./BasePage";
import {Locator, Page, test} from "@playwright/test";

export class CategoriesPage extends BasePage{

    private readonly contentPageLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.contentPageLocator = this.page.locator('.application-module__content');
    }

    //actions

    async open() {
        await test.step('Open Categories page', async () => {
            await this.page.goto("/categories/");
        })
    }

    async hideHeader() {
        await this.hideElement('header');
    }

    //assertions

    async contentPageHasCorrectLayout() {
        await this.checkLayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png');
    }
}