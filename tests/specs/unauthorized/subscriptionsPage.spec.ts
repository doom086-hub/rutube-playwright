import {test} from "../../fixtures/fixtures";

test('Check Subscriptions page has correct layout for unauthorized', async ({subscriptionsPage}) => {
    await subscriptionsPage.contentPageHasCorrectAriaSnapshot();
})
