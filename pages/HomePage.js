import {expect} from '@playwright/test'
import {DEMOQA_URL} from '../utils/constants.js'

exports.HomePage =
class HomePage
{
    constructor(page)
    {
        this.page = page
        
    }

    async gotoHomePage()
    {
        await this.page.goto(DEMOQA_URL)
    }

    async verifyPagetitle()
    {
        await expect(this.page).toHaveTitle("demosite")
    }



}
