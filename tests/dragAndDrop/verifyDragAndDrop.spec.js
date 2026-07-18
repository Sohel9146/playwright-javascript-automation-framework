import { test } from "@playwright/test";
import { DragAndDropPage } from "../../pages/DragAndDropPage.js"
import dragAndDropData from "../../testData/dragAndDropData.json"


test.describe("Task-17 : Drag and Drop", ()=> 
{

    test("TC_DRAG_001 : Verify Drag and Drop", async ({page}) => 
    {

        const draganddroppage   =   new DragAndDropPage(page)

        await draganddroppage.gotoDragAndDropPage()

        await draganddroppage.performDragAndDrop()

        await draganddroppage.verifyDropSuccess(dragAndDropData.expectedMessage) 

    })

})