import { expect } from '@playwright/test'
import { BasePage } from './BasePage.js'
import { SLIDER_URL } from '../utils/constants.js'


export class SliderPage extends BasePage
{

    constructor(page)
    {
        super(page)

        this.Slider             =       "input[type='range']"
        this.targetValue        =       "input[class='form-control']"

    }

    async gotoSliderPage()
    {
        await this.navigate(SLIDER_URL)
    }

    async moveSlider(targetValue)
    {
        await this.getLocator(this.Slider).fill(targetValue)
    }

    async verifySliderValue(expectedValue)
    {
        await expect(this.getLocator(this.targetValue)).toHaveValue(expectedValue)
    }

    
}