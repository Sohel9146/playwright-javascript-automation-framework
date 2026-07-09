import { expect } from '@playwright/test'
import { BasePage } from './BasePage.js'
import { BUTTONS_URL } from '../utils/constants.js'
import buttonsData from '../testData/buttonsData.json'

export class ButtonsPage extends BasePage
{
        constructor(page)
        {

            super(page)

            this.doubleClickButton          =   "#doubleClickBtn"
            this.rightClickButton           =   "#rightClickBtn"
            this.normalClickButton          =   "(//button[normalize-space()='Click Me'])[1]"

            this.doubleClickMessage         =   "#doubleClickMessage"
            this.rightClickMessage          =   "#rightClickMessage"
            this.normalClickMessage         =   "#dynamicClickMessage"

        }

        async gotoButtonPage()
        {
            await this.navigate(BUTTONS_URL)
        }

        async performDoubleClick()
        {
            await this.doubleClick(this.doubleClickButton)
            await expect(this.getLocator(this.doubleClickMessage)).toContainText(buttonsData.expectedDbClickMessage)

            await this.page.waitForTimeout(2000)
        }

        async performRightClick()
        {
            await this.rightClick(this.rightClickButton)
            await expect(this.getLocator(this.rightClickMessage)).toContainText(buttonsData.expectedRightClickMessgae)

            await this.page.waitForTimeout(2000)
        }

        async performNormalClick()
        {
            await this.normalClick(this.normalClickButton)
            await expect(this.getLocator(this.normalClickMessage)).toContainText(buttonsData.expectedClickMessage)

            await this.page.waitForTimeout(2000)
        }
}