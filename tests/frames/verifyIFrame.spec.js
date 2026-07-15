import { test } from "@playwright/test";
import { IFramePage } from '../../pages/IFramePage.js'
import iframeData from '../../testData/iframeData.json'


test.describe("Task-15 : Handle iFrame", () => 
{

    test("TC_IFRAME_001 : Verify TinyMCE iFrame", async ({page}) => 
    {

            const iframepage = new IFramePage(page)

            await iframepage.gotoIframePage()

            await iframepage.enterText(iframeData.text)

            await iframepage.verifyEnteredText(iframeData.text)

    })

})