import { test, expect } from '@playwright/test'
import { DynamicLoadingPage } from '../../pages/DynamicLoadingPage.js'
import dynamicLoadingData from '../../testData/dynamicLoadingData.json'


test.describe("Task-09 : Verify Dynamic Loading", () => 
{

    test("TC_DYNAMIC_001 : Verify dynamically loaded text", async ({page}) => 
    {
         const dynamicloadingpage = new DynamicLoadingPage(page)

         await dynamicloadingpage.gotoDynamicLoadingPage()

         await dynamicloadingpage.clickStartButton()

         await dynamicloadingpage.waitForLoadingToComplete()

         await dynamicloadingpage.verifyLoadedText(dynamicLoadingData.expectedText)
    })


})