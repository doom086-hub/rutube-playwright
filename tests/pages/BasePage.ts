import {expect, Locator, Page, test, TestInfo} from "@playwright/test";

export class BasePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // async closeStartModals2() {
    //     await test.step('Close modals with cookies and ads messages', async () => {
    //         const cookiesPopupButton = this.page.getByLabel('Уведомление об использовании cookies').locator('button');
    //         const adsModalButton = this.page.getByRole('button', { name: 'Закрыть', exact: true });
    //
    //         if (adsModalButton) {
    //             await adsModalButton.waitFor({state: 'visible', timeout: 5000});
    //             await adsModalButton.click();
    //         }
    //         if (await cookiesPopupButton.isVisible({timeout: 5000})) {
    //             await cookiesPopupButton.waitFor({state: 'visible', timeout: 5000});
    //             await cookiesPopupButton.click();
    //         }
    //     })}

    async closeStartModals(testInfo: TestInfo) {
        if (testInfo.project.name !== 'chromium unauthorized') {
            console.log('closeStartModals() пропущен: не unauthorized');
            return;
        }

        await test.step('Close modals with cookies and ads messages', async () => {
            const cookiesPopupButton = this.page.getByLabel('Уведомление об использовании cookies').locator('button');
            const adsModalButton = this.page.getByRole('button', { name: 'Закрыть', exact: true });

            for (let i = 1; i <= 2; i++) {
                try {
                    await adsModalButton.waitFor({state: 'visible', timeout: 2000});
                    await adsModalButton.click();
                    console.log(`Элемент найден на попытке #${i}`);
                    break;
                } catch {
                    console.log(`Попытка #${i}: элемент не найден`);
                }
            }

            for (let i = 1; i <= 2; i++) {
                try {
                    await cookiesPopupButton.waitFor({state: 'visible', timeout: 2000});
                    await cookiesPopupButton.click();
                    console.log(`Элемент найден на попытке #${i}`);
                    break;
                } catch {
                    console.log(`Попытка #${i}: элемент не найден`);
                }
            }
        })}

    protected async checkAriaSnapshot(locatorInLet: Locator, ariaName: string) {
        await locatorInLet.waitFor({state: 'visible', timeout: 10000});
        await expect(locatorInLet).toMatchAriaSnapshot({name: ariaName});
    }

    protected async checkLayoutByScreenshot(locatorInLet: Locator, screenshotName: string) {
        await expect(locatorInLet).toHaveScreenshot(screenshotName, {maxDiffPixelRatio: 0.05});
    }

    protected async hideElement(selectorInLet: string) {
        await this.page.evaluate((selectorInLet) => {
            const header = document.querySelector(selectorInLet);
            if (header) {
                (header as HTMLElement).style.display = 'none';
            }
        }, selectorInLet)
    }
}