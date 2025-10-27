import {test} from "../../fixtures/fixtures";

test('Check Categories page has correct layout', async ({categoriesPage}) => {
    await categoriesPage.contentPageHasCorrectLayout();
})

