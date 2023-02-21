/// <reference types="cypress"/>
import { LoginPage } from "../../pages/LoginPage";

describe("Login", function () {

    const login = new LoginPage();

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Reading data form JSON file.");
        cy.fixture('LoginTestData').then(function (loginData) { this.loginData = loginData; })
    })

    Cypress.on('fail', (error, runnable) => {
        if (error.message.includes('A fixture file could not be found')) {
            console.log("Please check your file path or input file");
            throw error;
        }
    });

    it("Validate Login page", function () {
        cy.log("Validate the bot logo is available in login page.");
        login.validateloginButton();

        cy.log("Login to the application using valida credentials.");
        login.login(this.loginData.userName, this.loginData.password);
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })
})
