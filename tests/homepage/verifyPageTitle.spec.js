import {test} from '@playwright/test'
import {HomePage} from '../../pages/HomePage.js'

test.describe("Verify Page Title", () => 
{
    test("Verify Page Title of DEMOQA Home Page",async ({page}) => 
    {
        const homepage = new HomePage(page)

        await homepage.gotoHomePage()
        await homepage.verifyPagetitle()


    })


})