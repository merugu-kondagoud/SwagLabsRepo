/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';

describe("Verify YOUR CART's product list, then click the checkout button.", function () {

    Cypress.on('fail', (error, runnable) => {
        if (error.message.includes('A fixture file could not be found')) {
            console.log("Please check your file path or input file");
            throw error;
        }
    });

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Drive data form JSON file.");
        cy.fixture('LoginTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CartTestData').then(function (cartPageData) { this.cartPageData = cartPageData; });
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })

    it("Validate the product list", function () {
        cy.log("Login to the application using valida credentials.");
        loginPage.login(this.LoginData.userName, this.LoginData.password);

        cy.log("Add products to the cart.");
        homePage.addproduct(this.homePageData.productname);

        cy.log("Click on the cart icon.");
        shoppingCartContainer.clickCart();

        cy.log("Validate cart page title.");
        shoppingCartContainer.validateYourCartProducts(this.homePageData.productname);

        cy.log("Click on the checkout button")
        shoppingCartContainer.clickCheckOut();
    })
})
