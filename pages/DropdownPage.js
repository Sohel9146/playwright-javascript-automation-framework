import { test, expect } from '@playwright/test'
import  { BasePage } from './BasePage.js'
import  { DROPDOWN_URL }  from '../utils/constants.js'


export class DropdownPage extends BasePage
{

    constructor(page)
    {
        super(page)

        this.dropdown       =   "//select[@id='dropdown']"
        
    }

    async gotoDropdownPage()
    {
        await this.navigate(DROPDOWN_URL)
    }

    async selectOption(option)
    {
        await this.select(this.dropdown, option)
    }

    async verifySelectedOption(expectedOption)
    {
        await expect(this.getLocator(this.dropdown)).toHaveValue(expectedOption)
    }
}




