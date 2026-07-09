import { test, expect } from '@playwright/test'
import { ButtonsPage } from '../../pages/ButtonsPage.js'
import  buttonsData  from '../../testData/buttonsData.json'

test.describe("Task-08 : Verify Double Click Button", () => 
{
    test("TC_BUTTON_001 : Verify Double Click Functionality", async ({page}) => 
    {
         const buttonspage =  new ButtonsPage(page)

         await buttonspage.gotoButtonPage()
         await buttonspage.performDoubleClick()
         await buttonspage.performRightClick()
         await buttonspage.performNormalClick()

         
    })
})
