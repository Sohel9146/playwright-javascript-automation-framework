import { test } from "@playwright/test";
import { MenuPage } from "../../pages/MenuPage.js";

test.describe("Task-16 : Mouse Hover", () => 
{

    test("TC_MENU_001 : Verify Hover Menu", async ({page}) => 
    {

         const menupage = new MenuPage(page)

         await menupage.gotoMenuPage()

         await menupage.hoverMenu()

         await menupage.verifyHover()

    })


})
