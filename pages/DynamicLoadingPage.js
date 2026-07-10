import { expect } from '@playwright/test'
import { BasePage } from './BasePage'
import dynamicLoadingData from '../testData/dynamicLoadingData.json'
import { DYNAMIC_LOADING_URL } from '../utils/constants.js'

export class DynamicLoadingPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.startButton        =   "//button[contains(text(),'Start')]"
        this.loading            =   "//img[@src='/img/ajax-loader.gif']"
        this.finishText         =   "//h4[text()='Hello World!']"

    }

    async gotoDynamicLoadingPage()
    {
        await this.navigate(DYNAMIC_LOADING_URL)
    }

    async clickStartButton()
    {
        await this.click(this.startButton)
    }

    async waitForLoadingToComplete()
    {
        await this.waitForHidden(this.loading)
        await this.waitForVisible(this.finishText)
    }

    async verifyLoadedText(expectedText)
    {
        await expect(this.getLocator(this.finishText)).toHaveText(expectedText)
    }


}