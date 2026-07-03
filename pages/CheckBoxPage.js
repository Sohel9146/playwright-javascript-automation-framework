import {expect} from '@playwright/test'
import {CHECKBOX_URL} from '../utils/constants.js'

exports.CheckBoxPage =
class CheckBoxpage
{

    constructor(page)
    {
        
        this.page           = page;   
        this.expandButton   = this.page.locator(".rc-tree-switcher.rc-tree-switcher_close")
        this.homeCheckBox   = this.page.locator("span[aria-label='Select Home']")
        this.successMessage = this.page.locator("#result")

    }

    async GotoCheckBoxPage()
    {
        await this.page.goto(CHECKBOX_URL)
    }

    async expandAll()
    {
        await this.expandButton.click()
    }

    async selectHomeCheckbox()
    {
        await this.homeCheckBox.click()
    }

    async verifySuccessMessage()
    {
        await expect(this.successMessage).toContainText("You have selected :")
    }

}