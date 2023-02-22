/// <reference types="cypress"/>
import 'cypress-xpath'
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from "../../pages/LoginPage";

describe("Add products", function () {

    const homePage = new HomePage();
    const login = new LoginPage();

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Reading data form JSON file.");
        cy.fixture('LoginTestData').then(function (loginData) { this.loginData = loginData; })
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; })
    })

    Cypress.on('fail', (error, runnable) => {
        if (error.message.includes('A fixture file could not be found')) {
            console.log("Please check your file path or input file");
            throw error;
        }
    });

    it("Add products to the cart", function () {
        cy.log("Login to the application using valida credentials.");
        login.login(this.loginData.userName, this.loginData.password);

        cy.log("Validate home page PRODUCT title.");
        homePage.validateHomePageTitle();

        cy.log("Add products to the cart.")
        homePage.addproduct(this.homePageData.productName)
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.")
        cy.logout();
    })
})
