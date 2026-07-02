const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../../pages/LoginPage.js')
const invalidloginData = require('../../testData/invalidLoginData.json'); 
// const { BASE_URL } = require('../../utils/constants.js')

test.describe("Saus Demo Login", () => 
{

    test("Login with invalid credentials", async ({page}) => 
    {
            const loginPage = new LoginPage(page)

            await loginPage.GotoLoginPage()

            await loginPage.Login
            (
                invalidloginData.username,
                invalidloginData.password
            )

            await page.waitForTimeout(3000)

            await loginPage.Get_Error_Message()


    })

})


