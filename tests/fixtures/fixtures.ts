import { test as base } from '@playwright/test';
import {MainPage} from "../pages/MainPage";
import {CategoriesPage} from "../pages/CategoriesPage";
import {SubscriptionsPage} from "../pages/SubscriptionsPage";

// Declare the types of your fixtures.
type MyFixtures = {
    mainPage: MainPage;
    categoriesPage: CategoriesPage;
    subscriptionsPage: SubscriptionsPage;
};

// Extend base test by providing "mainPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use, testInfo) => {
        // Set up the fixture.
        const mainPage = new MainPage(page);
        await mainPage.open();
        await mainPage.closeStartModals(testInfo);

        // Use the fixture value in the test.
        await use(mainPage);
    },

    categoriesPage: async ({page}, use, testInfo) => {
        const categoriesPage = new CategoriesPage(page);
        await categoriesPage.open();
        await categoriesPage.closeStartModals(testInfo);
        await categoriesPage.hideHeader();

        await use(categoriesPage);
    },

    subscriptionsPage: async ({page}, use, testInfo) => {
        const subscriptionsPage = new SubscriptionsPage(page);
        await subscriptionsPage.open();
        await subscriptionsPage.closeStartModals(testInfo);

        await use(subscriptionsPage);
    },
});
