import path from "path";
import { BasePage } from './BasePage.js'
import { FILE_UPLOAD_URL } from '../utils/constants.js'

export class FileUploadPage extends BasePage 
{
    constructor(page)
    {
        super(page)

        this.chooseFile                 =   "//input[@name='file']"
        this.uploadButton                 =   "//input[@type='submit']"
        this.uploadedFile               =   "//div[contains(@class,'panel') and contains(@class,'text-center') ]"

    }


    async gotoFileUploadPage()
    {
        await this.navigate(FILE_UPLOAD_URL)
    }

    async uploadSampleFile()
    {
        const filepath = path.resolve("testData", "sampleFile.txt")
        // const filepath = path.resolve("C:/Users/91914/Desktop/Resume/suhel shaikh/ChatGPT Resume/Compressed Resume/Suhel_Shaikh_04July2026.pdf")

        await this.uploadFile(this.chooseFile, filepath)

        await this.click(this.uploadButton)
    }

    async verifyUploadedFile(filename)
    {
        await this.verifyText(this.uploadedFile, filename)
    }
}