import { test } from "@playwright/test";
import { NewWindowPage } from '../../pages/NewWindowPage.js'
import newWindowData  from '../../testData/newWindowData.json'


test.describe("Task-16 : Handle New Browser Tab", () => 
{

    test("TC_WINDOW_001 : Verify New Browser Tab", async ({page}) => 
    {

        const newwindowpage = new NewWindowPage(page)

        await newwindowpage.gotoNewWindoPage()

        const newPage = await newwindowpage.openNewWindow()

        await newwindowpage.verifyHeading(newPage, newWindowData.expectedHeading)

    })

})