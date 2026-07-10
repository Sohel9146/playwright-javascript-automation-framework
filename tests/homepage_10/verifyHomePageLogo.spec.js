import { test, expect } from '@playwright/test'
import { AutomationExerciseHomePage } from '../../pages/AutomationExerciseHomePage.js'

test.describe("Task-10 : Verify Image Presence", () => 
{

    test("TC_IMAGE_001 : Verify Website Logo", async ({page}) => 
    {
            const homepage = new AutomationExerciseHomePage(page)

            await homepage.gotoHomePage_10()

            await homepage.verifyLogoDisplayed()
    })

})