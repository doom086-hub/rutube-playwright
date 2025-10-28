import {BasePage} from "./BasePage";
import {Locator, Page, test} from "@playwright/test";

export class ForCreatorsPage extends BasePage{

    static readonly testParams = [
        {
            url: 'https://rutube.ru/for_creators/#main',
            screenshotName: 'mainTab.png',
            name: 'mainTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#steps',
            screenshotName: 'stepsTab.png',
            name: 'stepsTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#faq',
            screenshotName: 'faqTab.png',
            name: 'faqTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#monetization',
            screenshotName: 'monetizationTab.png',
            name: 'monetizationTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#rules',
            screenshotName: 'rulesTab.png',
            name: 'rulesTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#team',
            screenshotName: 'teamTab.png',
            name: 'teamTab',
        },
        {
            url: 'https://rutube.ru/for_creators/#academy',
            screenshotName: 'academyTab.png',
            name: 'academyTab',
        },
    ];

    private readonly pageContentLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.pageContentLocator = this.page.locator('#___gatsby');
    }

    //actions

    async open(urlInLet:string, nameInLet:string) {
        await test.step(`Open ${nameInLet}`, async () => {
            await this.page.goto(urlInLet);
        })
    }


    //assertions

    async pageHasCorrectLayout(screenshotName:string) {
        await this.checkLayoutByScreenshot(this.pageContentLocator, screenshotName);
    }

}