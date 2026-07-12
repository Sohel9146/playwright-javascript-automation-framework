import{ test, expect } from '@playwright/test'
import { JavaScriptAlertPage } from '../../pages/JavaScriptAlertPage.js'
import javaScriptAlertData from '../../testData/javaScriptAlertData.json'


test.describe("Task-11 : Handle JavaScript Alert", () => 
{
    test("TC_ALERT_001 : Verify JavaScript Alert", async ({page}) => 
    {
           const javascriptalertpage = new JavaScriptAlertPage(page)

           await javascriptalertpage.gotoJavascriptAlertPage()

           await javascriptalertpage.clickJavaScriptAlert()
           await javascriptalertpage.verifyJavaScriptAlertMsg(javaScriptAlertData.expectedResult_1)

           await javascriptalertpage.clickJavaScriptConfirm()
           await javascriptalertpage.verifyJavaScriptConfirmMsg(javaScriptAlertData.expectedResult_2)


           await javascriptalertpage.clickJavaScriptPrompt(javaScriptAlertData.text)
           await javascriptalertpage.verifyJavaScriptPromptMsg(javaScriptAlertData.expectedResult_3)


    })

})