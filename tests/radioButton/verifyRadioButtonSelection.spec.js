import { test } from '@playwright/test'
import { RadioButtonPage } from '../../pages/RadioButtonPage.js'

test.describe("Task-05 : Verify Radio Button Selection", () => 
{

    test("TC_RADIO_001 : Verify Yes Radio Button Selection", async ({page}) => 
    {

       const radioButtonPage = new RadioButtonPage(page)

       await radioButtonPage.gotoRadioButtonPage()

       await radioButtonPage.clickYesRadioButton()

       await page.waitForTimeout(2000)

       await radioButtonPage.verifySuccessMessage()

    })


})