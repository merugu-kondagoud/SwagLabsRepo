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

        cy.log("Drive data form JSON file.");
        cy.fixture('LoginTestData').then(function (LoginData) { this.LoginData = LoginData; })
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; })
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.")
        cy.logout();
    })

    it("Add products to the cart", function () {
        cy.log("Login to the application using valida credentials.");
        login.login(this.LoginData.userName, this.LoginData.password);

        cy.log("Validate home page PRODUCT title.");
        homePage.validateHomePageProperties();

        cy.log("Add products to the cart.")
        homePage.addproduct(this.homePageData.productname)
    })
})
