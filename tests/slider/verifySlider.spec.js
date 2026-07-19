import { test } from '@playwright/test'
import { SliderPage } from '../../pages/SliderPage.js'
import sliderData from '../../testData/sliderData.json'



test.describe("Task-18 : Slider", () => 
{

    test("TC_SLIDER_001 : Verify Slider Value", async ({page}) => 
    {
         const sliderpage = new SliderPage(page)
        
         await sliderpage.gotoSliderPage()

         await sliderpage.moveSlider(sliderData.enterValue)

         await page.waitForTimeout(2000)

         await sliderpage.verifySliderValue(sliderData.expectedValue)
    })

})