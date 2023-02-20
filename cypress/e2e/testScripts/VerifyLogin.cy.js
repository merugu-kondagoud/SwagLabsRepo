/// <reference types="cypress"/>
import { LoginPage } from "../../pages/LoginPage";

describe("Login", function () {

    const login = new LoginPage();

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Drive data form JSON file.");
        cy.fixture('LoginTestData').then(function (LoginData) { this.LoginData = LoginData; })
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })

    it("Validate Login page", function () {
        cy.log("Validate the bot logo is available in login page.");
        login.validateloginPageProperties();

        cy.log("Login to the application using valida credentials.");
        login.login(this.LoginData.userName, this.LoginData.password);
    })
})