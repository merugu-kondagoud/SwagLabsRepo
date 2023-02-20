/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';

describe("Provide user information in YOUR INFORMATION page", function () {
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Drive data form JSON file.");
        cy.fixture('LoginTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })

    it("Enter user details and click on checkout button", function () {
        cy.log("Login to the application using valida credentials.");
        loginPage.login(this.LoginData.userName, this.LoginData.password);

        cy.log("Add products to the cart.");
        homePage.addproduct(this.homePageData.productname);

        cy.log("Click on the cart icon.");
        shoppingCartContainer.clickCart();

        cy.log("Click on checkout button.");
        shoppingCartContainer.clickCheckOut();

        cy.log("Validate Checkout: Your Information page title")
        checkoutPage.validateLandingPage(this.checkoutPageData.checkoutPageText);

        cy.log("Enter user information.");
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);

        cy.log("Click on the continue button.");
        checkoutPage.clickContinue();
    })
})
