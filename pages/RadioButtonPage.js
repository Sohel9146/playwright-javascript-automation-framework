import {expect} from '@playwright/test'
import {DEMOQA_RADIO_URL} from '../utils/constants.js'

exports.RadioButtonPage =
class RadioButtonPage
{

    constructor(page)
    {
        this.page             =  page

        this.yesRadioButton   =  this.page.locator("#yesRadio")
        this.susseccMessage   =  this.page.locator(".text-success")
    }

    async gotoRadioButtonPage()
    {
        await this.page.goto(DEMOQA_RADIO_URL)
    }

    async clickYesRadioButton()
    {
        await this.yesRadioButton.click()
    }

    async verifySuccessMessage()
    {
        await expect(this.susseccMessage).toContainText("Yes")
    }



}

