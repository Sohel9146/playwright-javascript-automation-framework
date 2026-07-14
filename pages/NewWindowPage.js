import { BasePage } from './BasePage.js'
import { NEW_WINDOW_URL } from '../utils/constants.js'
import { expect } from '@playwright/test'

export class NewWindowPage extends BasePage
{

        constructor(page)
        {
            super(page)

            this.clickHereLink      =       "//a[text()='Click Here']"
            this.heading            =       "h3"

        }

        async gotoNewWindoPage()
        {
            await this.navigate(NEW_WINDOW_URL)
        }

        async openNewWindow()
        {
            return await this.openNewTab(this.clickHereLink)
        }

        async verifyHeading(newPage, expectedText)
        {
            await expect(newPage.locator(this.heading)).toHaveText(expectedText)
        }


}