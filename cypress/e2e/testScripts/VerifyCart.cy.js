/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';

describe("Verify YOUR CART's product list, then click the checkout button.", function () {

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Reading data form JSON file.");
        cy.fixture('LoginTestData').then(function (loginData) { this.loginData = loginData; });
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CartTestData').then(function (cartPageData) { this.cartPageData = cartPageData; });
    })

    Cypress.on('fail', (error, runnable) => {
        if (error.message.includes('A fixture file could not be found')) {
            console.log("Please check your file path or input file");
            throw error;
        }
    });

    it("Validate the product list", function () {
        cy.log("Login to the application using valida credentials.");
        loginPage.login(this.loginData.userName, this.loginData.password);

        cy.log("Add products to the cart.");
        homePage.addproduct(this.homePageData.productName);

        cy.log("Click on the cart icon.");
        shoppingCartContainer.clickCart();

        cy.log("Validate cart page title.");
        shoppingCartContainer.validateCartPageTitle(this.cartPageData.yourCartText)

        cy.log("Validate product added to the cart.");
        shoppingCartContainer.validateYourCartProducts(this.homePageData.productName);

        cy.log("Click on the checkout button.");
        shoppingCartContainer.clickCheckOut();
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })
})
