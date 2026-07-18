import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js"
import { DRAG_DROP_URL  } from "../utils/constants.js"

export class DragAndDropPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.frame          =   ".demo-frame"

        this.source         =   "#draggable"
        this.target         =   "#droppable"

        this.verifyDropped  =   "#droppable p"

    }

    async gotoDragAndDropPage()
    {
        await this.navigate(DRAG_DROP_URL)
    }

    async performDragAndDrop()
    {
            const frame = await this.getFrame(this.frame)

            await frame.locator(this.source).dragTo(frame.locator(this.target))

            // await this.page.frameLocator(this.frame).locator(this.source).dragTo(this.page.frameLocator(this.frame).locator(this.target))
    
    }

    async verifyDropSuccess(expectedText)
    {
        const frame = await this.getFrame(this.frame)

        await expect(frame.locator(this.verifyDropped)).toContainText(expectedText)
    }

}