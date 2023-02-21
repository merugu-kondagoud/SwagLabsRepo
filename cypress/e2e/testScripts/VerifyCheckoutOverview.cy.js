/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverviewPage';

describe("Verify quantity and total", function () {

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Reading data form JSON file.");
        cy.fixture('LoginTestData').then(function (loginData) { this.loginData = loginData; });
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
        cy.fixture('CheckoutOverviewTestData').then(function (overviewPageData) { this.overviewPageData = overviewPageData; });
    })

    Cypress.on('fail', (error, runnable) => {
        if (error.message.includes('A fixture file could not be found')) {
            console.log("Please check your file path or input file");
            throw error;
        }
    });

    it("Validate the quantity and total cost of the products, then click on finish button", function () {
        cy.log("Login to the application using valida credentials.");
        loginPage.login(this.loginData.userName, this.loginData.password);

        cy.log("Add products to the cart.");
        homePage.addproduct(this.homePageData.productName);

        cy.log("Click on the cart icon.");
        shoppingCartContainer.clickCart();

        cy.log("Click on checkout button.");
        shoppingCartContainer.clickCheckOut();

        cy.log("Enter user information.");
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);

        cy.log("Click on the continue button.");
        checkoutPage.clickContinue();

        cy.log("Validate the title of CHECKOUT: OVERVIEW page.");
        overviewPage.validateOverviewPageTitle(this.overviewPageData.overviewText);

        cy.log("Verify the quantity of the products added in the cart.");
        overviewPage.validateProductQuantity(this.overviewPageData.productQuantity);

        cy.log("Calculate the sum porduct price and compare it with the total.");
        overviewPage.calculateProductTotal();

        cy.log("Click on Finish button.");
        overviewPage.clickFinish();
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })
})
