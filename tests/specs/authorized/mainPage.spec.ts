import {test} from "../../fixtures/fixtures";

test('Check main page header elements | authorized', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check elements of notifications popup | authorized', async ({mainPage}) => {
    await mainPage.openNotificationPopup();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Check elements of opened left menu | authorized', async ({mainPage}) => {
    await mainPage.openFullMenu();
    await mainPage.openedFullMenuHasCorrectAriaSnapshot();
});

test('Check elements of opened user popup in header | authorized', async ({mainPage}) => {
    await mainPage.openHeaderUserPopup();
    await mainPage.openedHeaderUserPopupHasCorrectAriaSnapshot();
});