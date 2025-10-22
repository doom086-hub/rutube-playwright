import {test} from "@playwright/test";
import {MainPage} from "../../pages/MainPage";

test('Open main page', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
})