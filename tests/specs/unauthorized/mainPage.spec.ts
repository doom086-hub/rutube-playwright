import {test} from "@playwright/test";
import {MainPage} from "../../pages/MainPage";

test('Check main page header elements', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeSartModals();
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Check main page tabs section with categories elements', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeSartModals();
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Check main page left menu elements', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeSartModals();
    await mainPage.menuHasCorrectAriaSnapshot();
})