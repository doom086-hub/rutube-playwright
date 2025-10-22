import {test, expect} from "../../fixtures/fixtures";

test('Check main page header elements', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Check main page tabs section with categories elements', async ({mainPage}) => {
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Check main page left menu elements', async ({mainPage}) => {
    await mainPage.menuHasCorrectAriaSnapshot();
})