import {ForCreatorsPage} from "../../pages/ForCreatorsPage";
import {test} from "@playwright/test";


ForCreatorsPage.testParams.forEach(({url, screenshotName, name}) => {
    test(`Check layout of ${name}`, async ({page}) => {
        const forCreatorsPage = new ForCreatorsPage(page);

        await forCreatorsPage.open(url, screenshotName);
        await forCreatorsPage.pageHasCorrectLayout(screenshotName);
    })
})