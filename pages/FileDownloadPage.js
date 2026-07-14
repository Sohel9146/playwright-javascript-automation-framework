import path from 'path'
import { expect } from '@playwright/test'
import { FILE_DOWNLOAD_URL } from '../utils/constants.js'
import { BasePage } from './BasePage'

export class FileDownloadPage extends BasePage
{

    constructor(page)
    {
        super(page)

        this.DownloadLink      =   "//a[@href='download/some-file.txt']"
    }

    async gotoFileDownloadPage()
    {
        await this.navigate(FILE_DOWNLOAD_URL)
    }

    async downloadFile()
    {
            const fileName = await this.getLocator(this.DownloadLink).textContent()

            const savePath = path.resolve("downloads", fileName)

            const download = await this.downloadFile(this.DownloadLink, savePath)
            
          return{
            expectedFileName    : fileName,
            downloadedFileName  : download.suggestedFilename()
                }
       
    }

    async verifyDownloadedFile(actual,expected)
    {
        expect(actual).toBe(expected)
    }
}