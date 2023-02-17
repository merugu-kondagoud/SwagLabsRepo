/// <reference types="cypress"/>
import { LoginPage } from "../../pages/LoginPage";

describe("Login", function () {

    const login = new LoginPage();

    beforeEach(function () {
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData;})
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Validate Login page", function () {
        login.validateloginPageProperties();
        login.login(this.LoginData.userName, this.LoginData.password)
    })
})