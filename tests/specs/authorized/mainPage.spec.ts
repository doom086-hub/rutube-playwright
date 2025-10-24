import {test} from "../../fixtures/fixtures";

test('Check main page header elements', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check elements of notifications popup', async ({mainPage}) => {
    await mainPage.openNotificationPopup();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Check elements of opened left menu', async ({mainPage}) => {
    await mainPage.openFullMenu();
    await mainPage.openFullMenuHasCorrectAriaSnapshot();
});