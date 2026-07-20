import { test } from '@playwright/test'
import { WebTablePage } from '../../pages/WebTablePage.js'
import webTableData from '../../testData/webTableData.json'


test.describe("Task-19 : Web Table", () => 
{

    test("TC_TABLE_001 : Verify CRUD Operations", async ({page}) => 
    {
        const webtablepage = new WebTablePage(page)

        await webtablepage.gotoWebTablePage()

        // Add Employee
        await webtablepage.addEmployee(webTableData)

        // Search Employee
        await webtablepage.searchEmployee(webTableData.firstName)

         // Verify Employee
        await webtablepage.verifyEmployee(webTableData.firstName)

        // Edit Employee Name
        await webtablepage.editEmployee("Arshad")
 
        await page.waitForTimeout(2000)

        // Verify Updated Name of Employee
        await webtablepage.verifyFname("Arshad")

        // Delete Employee
        await webtablepage.deleteEmployee()

        // Verify Deleted
        await webtablepage.verifyEmployeeDeleted(webTableData.firstName)

    })

})