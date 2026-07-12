import { test } from '@playwright/test'
import { FileUploadPage } from '../../pages/FileUploadPage.js'
import fileUploadData from '../../testData/fileUploadData.json'

test.describe("Task-12 : Verify File Upload", () => 
{

    test("TC_UPLOAD_001 : Verify File Upload Functionality", async ({page}) => 
    {

            const fileuploadpage = new FileUploadPage(page)

            await fileuploadpage.gotoFileUploadPage()

            await fileuploadpage.uploadSampleFile()

            await fileuploadpage.verifyUploadedFile(fileUploadData.fileName_1)

    })

})