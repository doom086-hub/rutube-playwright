import {expect, Locator, Page, test} from "@playwright/test";
import {BasePage} from "./BasePage";

export class MainPage extends BasePage{

    private readonly headerLocator: Locator;
    private readonly categoriesTabsLocator: Locator;
    private readonly menuLocator: Locator;
    private readonly headerAddButtonLocator: Locator;
    private readonly headerNotificationButtonLocator: Locator;
    private readonly headerLoginButtonLocator: Locator;
    private readonly headerAddButtonListPopupLocator: Locator;
    private readonly headerNotificationPopupLocator: Locator;
    private readonly authorizationModalLocator: Locator;
    private readonly authorizationModalPhoneFieldLocator: Locator;
    private readonly authorizationModalButonNextLocator: Locator;
    private readonly registrationModalAgreeCheckboxLocator: Locator;
    private readonly menuButtonLocator: Locator;
    private readonly openMenuAriaLocator: Locator;
    private readonly changeThemeButtonLocator: Locator;
    private readonly htmlLocator: Locator;
    private readonly userLogoLocator: Locator;
    private readonly headerUserPopupLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/ });
        this.menuLocator = this.page.getByRole('navigation').locator('section').filter({ hasText: 'ГлавнаяRUTUBE' });
        this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
        this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
        this.headerLoginButtonLocator = this.page.getByRole('banner').getByRole('button', { name: 'Вход и регистрация' });
        this.headerAddButtonListPopupLocator = this.page.locator('.wdp-header-right-module__uploader ul');
        this.headerNotificationPopupLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
        this.authorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]');
        //this.authorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().getByText('ТелефонПродолжитьВойти с помощьюYandex SmartCaptcha - Обработка данных');
        this.authorizationModalPhoneFieldLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().getByRole('textbox', { name: 'Введите телефон' });
        this.authorizationModalButonNextLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'Продолжить' });
        this.registrationModalAgreeCheckboxLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().getByRole('group').locator('div').filter({ hasText: 'Я даю своё согласие на обработку персональных данных' });
        this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
        this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
        this.changeThemeButtonLocator = this.page.getByRole('button', { name: 'Переключить на светлую тему' });
        this.htmlLocator = this.page.locator('html');
        this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала Kirillz' });
        this.headerUserPopupLocator = this.page.getByText('Kirillzki****@yandex.ruПрофильМой каналСтудия RUTUBEВыйти');

    }

    //actions

    async open() {
        await test.step('Open main page', async () => {
            await this.page.goto("https://rutube.ru/");
        })
    }

    async openAddPopupList() {
        await this.headerAddButtonLocator.click();
    }

    async openNotificationPopup() {
        await this.headerNotificationButtonLocator.click();
    }

    async openAuthorizationModal() {
        await this.headerLoginButtonLocator.click();
    }

    async switchToRegistrationModal() {
        await this.authorizationModalPhoneFieldLocator.waitFor({state: 'visible', timeout: 10000});
        await this.authorizationModalPhoneFieldLocator.fill('+7 978 777 88 99');
        await this.authorizationModalButonNextLocator.click();
        await expect(this.registrationModalAgreeCheckboxLocator).toBeVisible({timeout: 5000});
        //await this.page.waitForTimeout(1000);
    }

    async switchToWhiteTheme() {
        await this.changeThemeButtonLocator.click();
        //await this.page.waitForTimeout(1000);
    }

    async openFullMenu() {
        await this.menuButtonLocator.click();
        await expect(this.openMenuAriaLocator).toBeVisible({timeout: 5000});
    }

    async openHeaderUserPopup() {
        await this.userLogoLocator.click();
    }

    //assertions

    async headerHasCorrectAriaSnapshot() {
        await test.step('Check header has correct ARIA snapshot structure', async () => {
            await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
            //await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'})
        })
    }

    async categoriesTabsHasCorrectAriaSnapshot() {
        await test.step('Check tabs section with categories has correct ARIA snapshot structure', async () => {
            await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsAriaSnapshot.yml');
            //await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsAriaSnapshot.yml'})
        })
    }

    async menuHasCorrectAriaSnapshot() {
        await test.step('Check left menu has correct ARIA snapshot structure', async () => {
            await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
            //await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuAriaSnapshot.yml'})
        })
    }

    async addPopupListHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerAddButtonListPopupLocator, 'addButtonListPopup.yml');
        //await expect(this.headerAddButtonListPopupLocator).toMatchAriaSnapshot({name: 'addButtonListPopup.yml'});
    }

    async notificationsPopupHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerNotificationPopupLocator, 'notificationsPopup.yml');
        //await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({name: 'notificationsPopup.yml'});
    }

    async authorizationModalHasCorrectAriaSnapshot() {
        //await this.authorizationModalLocator.waitFor({state: 'visible', timeout: 10000});
        await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
        //await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'authorizationModal.yml'});
    }

    async registrationModalHasCorrectAriaSnapshot() {
        //await this.authorizationModalLocator.waitFor({state: 'visible', timeout: 10000});
        await this.checkAriaSnapshot(this.authorizationModalLocator, 'registrationModal.yml');
        //await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'registrationModal.yml'});
    }

    async openedFullMenuHasCorrectAriaSnapshot() {
        //await this.openMenuAriaLocator.waitFor({state: 'visible', timeout: 10000});
        //await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({name: 'openFullMenu.yml'});
        await this.checkAriaSnapshot(this.openMenuAriaLocator, 'openFullMenu.yml');
    }

    async htmlDataPenThemeHasDarkValue(theme: 'dark2021' | 'white2022') {
        await expect(this.htmlLocator).toHaveAttribute('data-pen-theme', theme);
    }

    async openedHeaderUserPopupHasCorrectAriaSnapshot() {
        //await this.headerUserPopupLocator.waitFor({state: 'visible', timeout: 10000});
        //await expect(this.headerUserPopupLocator).toMatchAriaSnapshot({name: 'openHeaderUserPopup.yml'});
        await this.checkAriaSnapshot(this.headerUserPopupLocator, 'openHeaderUserPopup.yml');
    }
}
