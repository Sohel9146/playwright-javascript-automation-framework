import {test,expect} from '@playwright/test'
import {CheckBoxPage} from '../../pages/CheckBoxPage.js'

test.describe("Task-04 : Verify Checkbox Selection", ()=>{


    test("TC_CHECKBOX_001 : Verify Home Checkbox Selection", async ({page}) => 
    {
       const chckboxpage = new CheckBoxPage(page)

       await chckboxpage.GotoCheckBoxPage()

       await page.waitForTimeout(2000)

       await chckboxpage.expandAll()

       await page.waitForTimeout(2000)

       await chckboxpage.selectHomeCheckbox()

       await page.waitForTimeout(2000)

       await chckboxpage.verifySuccessMessage()

    })

})