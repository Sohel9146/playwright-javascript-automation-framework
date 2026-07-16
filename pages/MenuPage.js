import { expect } from '@playwright/test'
import { BasePage } from './BasePage.js'
import { HOVER_URL } from '../utils/constants.js'
import  hoverData from '../testData/hoverData.json'

export class MenuPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.user_1                     =      "(//img[@alt='User Avatar'])[1]"
        this.user1_name                 =       "//h5[text()='name: user1']"
        this.user_1_view_proile         =      "(//a[text()='View profile'])[1]"
       
        this.user_3                     =       "(//img[@alt='User Avatar'])[3]"
        this.user_3_view_profile        =       "(//a[text()='View profile'])[3]"
    }

    async gotoMenuPage()
    {
        await this.navigate(HOVER_URL)
    }

    async hoverMenu()
    {
        
        await this.hover(this.user_1)
        await this.hover(this.user_1_view_proile)
        
    }

    async verifyHover()
    {
        await expect(this.getLocator(this.user1_name)).toHaveText(hoverData.expectedUser_1_Name)
        await expect(this.getLocator(this.user_1_view_proile)).toBeVisible()
    }
}