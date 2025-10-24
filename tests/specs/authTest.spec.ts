import { test } from '@playwright/test';
import { chromium } from "playwright-extra";

import stealth from 'puppeteer-extra-plugin-stealth';
import path from "path";

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('test', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const cookiesPopupButton = page.getByLabel('Уведомление об использовании cookies').locator('button');
    const adsModalButton = page.getByRole('button', { name: 'Закрыть', exact: true });

    await page.goto('https://rutube.ru/');
    for (let i = 1; i <= 2; i++) {
        try {
            await adsModalButton.waitFor({state: 'visible', timeout: 2000});
            await adsModalButton.click();
            break;
        } catch {
        }
    }

    for (let i = 1; i <= 2; i++) {
        try {
            await cookiesPopupButton.waitFor({state: 'visible', timeout: 2000});
            await cookiesPopupButton.click();
            break;
        } catch {
        }
    }
    await page.getByRole('button', { name: 'Вход и регистрация' }).click();
    await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('textbox', { name: 'Введите телефон' }).click();
    await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('textbox', { name: 'Введите телефон' }).fill(process.env.LOGIN!);
    await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'Продолжить' }).click();
    await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click();
    await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').fill(process.env.PASSWORD!);
    await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'Войти', exact: true }).click();
    await page.getByRole('img', { name: 'Иконка канала Kirillz' }).click();
    await page.getByRole('link', { name: 'Профиль' }).click();

    await page.context().storageState({ path: authFile });
});