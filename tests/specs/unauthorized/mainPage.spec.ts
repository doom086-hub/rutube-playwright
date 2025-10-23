import {test} from "../../fixtures/fixtures";

test('Check main page header elements', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check main page tabs section with categories elements', async ({mainPage}) => {
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Check main page left menu elements', async ({mainPage}) => {
    await mainPage.menuHasCorrectAriaSnapshot();
});

test('Check elements of Add list popup', async ({mainPage}) => {
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Check elements of notifications popup', async ({mainPage}) => {
    await mainPage.openNotificationPopup();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Check elements of authorization modal window', async ({mainPage}) => {
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Check elements of registration modal window', async ({mainPage}) => {
    await mainPage.openAuthorizationModal();
    await mainPage.switchToRegistrationModal();
    await mainPage.registrationModalHasCorrectAriaSnapshot();
});

test('Check elements of opened left menu', async ({mainPage}) => {
    await mainPage.openFullMenu();
    await mainPage.openFullMenuHasCorrectAriaSnapshot();
});

test('Check theme changing', async ({mainPage}) => {
    await mainPage.htmlDataPenThemeHasDarkValue('dark2021');
    await mainPage.switchToWhiteTheme();
    await mainPage.htmlDataPenThemeHasDarkValue('white2022');
});