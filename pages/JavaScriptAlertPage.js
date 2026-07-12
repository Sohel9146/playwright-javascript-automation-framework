import { BasePage } from './BasePage.js'
import { JAVASCRIPT_ALERT_URL } from '../utils/constants.js'

export class JavaScriptAlertPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.jsAlertButton              =   "//button[@onclick='jsAlert()']"
        this.jsConfirmButton            =   "//button[@onclick='jsConfirm()']"
        this.jsPromptButton             =   "//button[@onclick='jsPrompt()']"

        this.verifyJSAlertButton        =   "//p[text()='You successfully clicked an alert']"
        this.verifyJSConfirmButton      =   "//p[text()='You clicked: Ok']"
        this.verifyJSPromptButton       =   "#result"
    }


    
    async gotoJavascriptAlertPage()
    {
        await this.navigate(JAVASCRIPT_ALERT_URL)
    }



    async clickJavaScriptAlert()
    {
        await this.acceptAlert()
        await this.click(this.jsAlertButton)

        await this.page.waitForTimeout(2000)
        
    }

    async verifyJavaScriptAlertMsg(expectedResult_1)
    {
        await this.verifyText(this.verifyJSAlertButton, expectedResult_1 )
        
    }



    async clickJavaScriptConfirm()
    {
        await this.acceptAlert()
        await this.click(this.jsConfirmButton)

        await this.page.waitForTimeout(2000)

    }

     async verifyJavaScriptConfirmMsg(expectedResult_2)
    {
        await this.verifyText(this.verifyJSConfirmButton, expectedResult_2)
        
    }


    async clickJavaScriptPrompt(text)
    {
        await this.promptAlert(text)
        await this.click(this.jsPromptButton)

        await this.page.waitForTimeout(2000)

    }       

     async verifyJavaScriptPromptMsg(expectedResult_3)
    {
        await this.verifyText(this.verifyJSPromptButton, expectedResult_3)
        
    }


}

