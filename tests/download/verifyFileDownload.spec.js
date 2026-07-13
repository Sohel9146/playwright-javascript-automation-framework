import { test, expect } from '@playwright/test'
import { FileDownloadPage } from '../../pages/FileDownloadPage.js'
import  fileDownloadData  from '../../testData/fileDownloadData.json'

test.describe("Task-15 : Verify File Download", ()=> 
{

    test("TC_DOWNLOAD_001 : Verify File Download", async ({page}) => 
    {

            const downloadpage = new FileDownloadPage(page)

            await downloadpage.gotoFileDownloadPage()

            const file = await downloadpage.downloadFirstFile()

            await downloadpage.verifyDownloadedFile(file.expectedFileName, file.downloadedFileName)




    })
})