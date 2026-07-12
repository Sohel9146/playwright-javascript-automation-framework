import { test, expect } from '@playwright/test'

export class BasePage 
{
        constructor(page)
        {
            this.page       = page    
        }

        // Navigation 
        async navigate(url)
        {
            await this.page.goto(url, {waitUntil: 'load'})
        }

        // Click
        async click(locator)
        {
            await this.page.locator(locator).click()
        }

        // Fill Text Box
        async fill(locator, value)
        {
            await this.page.locator(locator).fill(value)
        }

        // Select Dropdown
        async select(locator, value)
        {
            await this.page.locator(locator).selectOption(value)
        }

        // Get Text
        async getText(locator)
        {
            return await this.page.locator(locator).textContent()
        }

        // Verify Text
        async verifyText(locator, expectedText)
        {
            await expect(this.page.locator(locator)).toContainText(expectedText)
        }

        // verify Visibility
        async verifyVisible(locator)
        {
           await expect(this.page.locator(locator)).toBeVisible()
        }

        // Scroll
        async scroll(locator)
        {
            await this.page.locator(locator).scrollIntoViewIfNeeded()
        }

        // Get Locator (useful in future tasks)
         getLocator(locator) 
        {
            return this.page.locator(locator);
        }

        // Double Click
        async doubleClick(locator)
        {
            await this.page.locator(locator).dblclick()
        }

        // Right Click
        async rightClick(locator)
        {
            await this.page.locator(locator).click( {button:"right"} )
        }

        // Normal Click
        async normalClick(locator)
        {
            await this.page.locator(locator).click()
        }

        // Wait for Element to be Visible
        async waitForVisible(locator)
        {
            await this.page.locator(locator).waitFor({state:"visible"})
        }

        // Wait for element to disappear
        async waitForHidden(locator)
        {
            await this.page.locator(locator).waitFor({state:"hidden"})
        }

        // Accept Alert
        async acceptAlert()
        {
            this.page.once("dialog", async (dialog) => 
            {
                await dialog.accept()
            })
        }

        // Dismiss Alert 
        async dismissAlert()
        {
            this.page.once("dialog", async(dialog) => 
            {
                await dialog.dismiss();
            })
        }

        // Prompt Alert 
        async promptAlert(text)
        {
            this.page.once("dialog",async(dialog) => 
            {
                await dialog.accept(text)
            })
        }

        // Upload Files
        async uploadFile(locator, filepath)
        {
            await this.page.locator(locator).setInputFiles(filepath)
        }


}