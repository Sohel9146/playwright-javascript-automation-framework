
import {test, expect} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage.js'
const loginData = require('../../testData/loginData.json');


test.describe("Saus Demo Login", () => 
{

    test("Verify user can login with valid credentials", async ({page}) => 
        {

            const loginPage = new LoginPage(page)

            await loginPage.GotoLoginPage()

            await loginPage.Login
            (
                    loginData.username,
                    loginData.password
            )

            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

            await expect(page.locator(".title")).toHaveText("Products")


        })


})


