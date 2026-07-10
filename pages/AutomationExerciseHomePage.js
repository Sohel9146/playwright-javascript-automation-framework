import { BasePage } from './BasePage.js'
import { HOME_PAGE_URL } from '../utils/constants.js'

export class AutomationExerciseHomePage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.logo       =   "img[alt='Website for automation practice']"

    }

    async gotoHomePage_10()
    {
        await this.navigate(HOME_PAGE_URL)
    }

    async verifyLogoDisplayed()
    {
        await this.waitForVisible(this.logo)
        await this.verifyVisible(this.logo)
    }

    

}