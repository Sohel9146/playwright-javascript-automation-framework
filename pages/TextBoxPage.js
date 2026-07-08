import { test, expect } from '@playwright/test'
import { TEXT_BOX_URL } from '../utils/constants.js'

exports.TextBoxPage = 
class TextBoxpage 
{

    constructor(page)
    {
        this.page = page

        // Input Fields
        this.fullName                   = this.page.locator("//input[@id='userName']")
        this.email                      = this.page.locator("//input[@type='email']")
        this.currentAddress             = this.page.locator("//textarea[@placeholder='Current Address']")
        this.permanentAddress           = this.page.locator("#permanentAddress")

    
        // Buttons
        this.submitButton               = this.page.locator("//button[text()='Submit']")

        // Output
        this.outputFullName             = this.page.locator("//p[@class='mb-1'][1]")
        this.outputEmail                = this.page.locator("//p[@class='mb-1'][2]")
        this.outputCurrentAddress       = this.page.locator("//p[@class='mb-1'][3]")
        this.outputPermanenetAddress    = this.page.locator("//p[@class='mb-1'][4]")
    }

    async navigateToTextBoxPage()
    {
            await this.page.goto(TEXT_BOX_URL)
    }

    async fillTextBoxForm(fullName,email,currentAddress,permanentAddress)
    {
        await this.fullName.fill(fullName)
        await this.email.fill(email)
        await this.currentAddress.fill(currentAddress)
        await this.permanentAddress.fill(permanentAddress)
    }

    async clickSubmitButton()
    {
        await this.submitButton.scrollIntoViewIfNeeded()
        await this.submitButton.click()
    }

    async verifySubmittedData(fullName,email,currentAddress,permanentAddress)
    {
        await expect(this.outputFullName).toHaveText(`Name:${fullName}`)
        await expect(this.outputEmail).toHaveText(`Email:${email}`)
        await expect(this.outputCurrentAddress).toHaveText(`Current Address :${currentAddress}`)
        await expect(this.outputPermanenetAddress).toHaveText(`Permananet Address :${permanentAddress}`)
    }

}