import { test,expect } from '@playwright/test'
import { TextBoxPage }  from '../../pages/TextBoxPage.js'
import  textBoxData  from '../../testData/textBoxData.json'

test.describe('Task-06 : Verify Text Box Submission', () => 
{
        test("TC_TEXTBOX_001 : Verify Text Box Form Submission", async ({page}) => 
        {
            const textBoxPage = new TextBoxPage(page)

            await textBoxPage.navigateToTextBoxPage()

            await textBoxPage.fillTextBoxForm
            (
                textBoxData.fullName,
                textBoxData.email,
                textBoxData.currentAddress,
                textBoxData.permanentAddress
            )

            await textBoxPage.clickSubmitButton()

            await textBoxPage.verifySubmittedData
            (
                textBoxData.fullName,
                textBoxData.email,
                textBoxData.currentAddress,
                textBoxData.permanentAddress

            )

        })
})