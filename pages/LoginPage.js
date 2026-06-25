const { expect } = require("@playwright/test");

exports.LoginPage =
class LoginPage {
    
    
    constructor(page) 
    {
            this.page                   = page
            this.user_name              = "#user-name"
            this.user_password          = "#password" 
            this.login_btn              = "#login-button"
        
    }

    async GotoLoginPage()
    {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async Login(username, password)
    {
        await this.page.locator(this.user_name).fill(username)
        await this.page.locator(this.user_password).fill(password)

        await this.page.locator(this.login_btn).click()
    }


}

