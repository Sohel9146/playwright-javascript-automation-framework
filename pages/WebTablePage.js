import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WEB_TABLE_URL } from '../utils/constants.js'
import { addAbortListener } from "node:events";


export class WebTablePage extends BasePage
{

    constructor(page)
    {
        super(page)

        // Buttons

        this.addButton              =   "//button[text()='Add']"
        this.submitButton           =   "//button[text()='Submit']"
        this.searchBox              =   "#searchBox"

        // Form Fields

        this.firstName              =   "input[id='firstName']"
        this.lastName               =   "input[id='lastName']"
        this.email                  =   "input[id='userEmail']"
        this.age                    =   "input[id='age']"
        this.salary                 =   "input[id='salary']"
        this.department             =   "input[id='department']"


        // Dynamic Buttons

        this.editButton             =   "span[id='edit-record-4']"
        this.deleteButton           =   "span[id='delete-record-4']"

        // Table

        this.table                  =   "//table"
        

    }

    async gotoWebTablePage()
    {
        await this.navigate(WEB_TABLE_URL)
    }

    async addEmployee(data)
    {
            await this.click(this.addButton)

            await this.fill(this.firstName,data.firstName)

            await this.fill(this.lastName, data.lastName)

            await this.fill(this.email, data.email)

            await this.fill(this.age, data.age)

            await this.fill(this.salary, data.salary)

            await this.fill(this.department, data.department)

            await this.click(this.submitButton)
    }

    async searchEmployee(name)
    {
        await this.fill(this.searchBox, name)
        await this.clear(this.searchBox)
    }

    async verifyEmployee(name)
    {
        await expect(this.getLocator(this.table)).toContainText(name)
    }

    async editEmployee(fname)
    {
     
        await this.click(this.editButton)

        await this.clear(this.firstName)
        await this.fill(this.firstName,fname)

        await this.click(this.submitButton)
        
    }

    async verifyFname(fname)
    {
        await expect(this.getLocator(this.table)).toContainText(fname)
    }

    async deleteEmployee()
    {
        await this.click(this.deleteButton)
    }

    async verifyEmployeeDeleted(name)
    {
        await this.fill(this.searchBox, name)

        await expect(this.getLocator(this.table)).not.toContainText(name)
    }




}