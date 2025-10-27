import {test} from "../../fixtures/fixtures";

test('Check main page header elements | unauthorized', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check main page tabs section with categories elements | unauthorized', async ({mainPage}) => {
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Check main page left menu elements | unauthorized', async ({mainPage}) => {
    await mainPage.menuHasCorrectAriaSnapshot();
});

test('Check elements of Add list popup | unauthorized', async ({mainPage}) => {
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Check elements of notifications popup | unauthorized', async ({mainPage}) => {
    await mainPage.openNotificationPopup();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Check elements of authorization modal window | unauthorized', async ({mainPage}) => {
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Check elements of registration modal window | unauthorized', async ({mainPage}) => {
    await mainPage.openAuthorizationModal();
    await mainPage.switchToRegistrationModal();
    await mainPage.registrationModalHasCorrectAriaSnapshot();
});

test('Check elements of opened left menu | unauthorized', async ({mainPage}) => {
    await mainPage.openFullMenu();
    await mainPage.openedFullMenuHasCorrectAriaSnapshot();
});

test('Check theme changing | unauthorized', async ({mainPage}) => {
    await mainPage.htmlDataPenThemeHasDarkValue('dark2021');
    await mainPage.switchToWhiteTheme();
    await mainPage.htmlDataPenThemeHasDarkValue('white2022');
});