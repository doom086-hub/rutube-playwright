import {test} from "../../fixtures/fixtures";

test('Check Subscriptions page has correct layout for authorized', async ({subscriptionsPage}) => {
    await subscriptionsPage.contentPageHasCorrectAriaSnapshot();
})
