import {test} from '@playwright/test'
import { DropdownPage } from '../../pages/DropdownPage.js'
import  dropdownData  from '../../testData/dropdownData.json'


test.describe("Task-07 : Verify Dropdown Selection", () => 
{
    
    test("TC_DROPDOWN_001 : Verify Dropdown Option Selection", async ({page}) => 
    {
            const dropdownPage = new DropdownPage(page)

            await dropdownPage.gotoDropdownPage()

            await page.waitForTimeout(2000)

            await dropdownPage.selectOption(dropdownData.option2)

            await page.waitForTimeout(2000)

            await dropdownPage.verifySelectedOption(dropdownData.option2)
    })


})