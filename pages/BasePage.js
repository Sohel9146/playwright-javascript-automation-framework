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
            await this.page.goto(url)
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
}