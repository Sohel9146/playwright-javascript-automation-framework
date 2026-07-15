import { expect } from "@playwright/test";
import { BasePage } from './BasePage.js'
import { IFRAME_URL } from '../utils/constants.js'
import iframeData from '../testData/iframeData.json'

export class IFramePage extends BasePage
{

    constructor(page)
    {
        super(page)

        this.editorFrame        =       "iframe[id='basic-example_ifr']"
        this.textArea           =       "body[data-id='basic-example']"

    }

    async gotoIframePage()
    {
        await this.navigate(IFRAME_URL)
    }

    
    async enterText(text)
    {

        const frame = await this.getFrame(this.editorFrame)

        await frame.locator(this.textArea).click()

        await frame.locator(this.textArea).press("Control+A")

        await frame.locator(this.textArea).press("Backspace")

        await frame.locator(this.textArea).fill(text)

    }

    async verifyEnteredText(expectedText)
    {
        const frame = await this.getFrame(this.editorFrame)

        await expect(frame.locator(this.textArea)).toHaveText(expectedText)
    }


}