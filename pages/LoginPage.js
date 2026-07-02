const { expect } = require("@playwright/test");
const { BASE_URL } = require('../utils/constants.js');

exports.LoginPage =
class LoginPage {
    constructor(page) {
        this.page = page;
        this.user_name = "#user-name";
        this.user_password = "#password";
        this.login_btn = "#login-button";
        this.error_msg = "h3[data-test='error']";
    }

    async GotoLoginPage() {
        await this.page.goto(BASE_URL);
    }

    async Login(username, password) {
        await this.page.locator(this.user_name).fill(username);
        await this.page.locator(this.user_password).fill(password);
        await this.page.locator(this.login_btn).click();
    }

    async Get_Error_Message() {
        await expect(this.page.locator(this.error_msg)).toContainText(
            "Epic sadface: Username and password do not match any user in this service"
        );
    }
}

// module.exports = { LoginPage };

