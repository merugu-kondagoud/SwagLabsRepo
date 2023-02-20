/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';
import { BackToHomePage } from '../../pages/BackToHomePage';

describe("Navigate back to home page", function () {
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()
    const completePage = new CheckoutCompletePage()
    const productPage = new BackToHomePage()

    beforeEach(function () {
        cy.log("Launch Swag Labs Application.");
        cy.launchBrowser();

        cy.log("Drive data form JSON file.");
        cy.fixture('LoginTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomeTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
        cy.fixture('CheckoutOverviewTestData').then(function (overviewPageData) { this.overviewPageData = overviewPageData; });
        cy.fixture('CheckoutCompleteTestData').then(function (completePageData) { this.completePageData = completePageData; });
        cy.fixture('BackToHome').then(function (ProductPageData) { this.ProductPageData = ProductPageData; });
    })

    afterEach(function () {
        cy.log("Logout Swag Labs application.");
        cy.logout();
    })


    it("Navigate back to home page", function () {
        cy.log("Login to the application using valida credentials.");
        loginPage.login(this.LoginData.userName, this.LoginData.password);

        cy.log("Add products to the cart.");
        homePage.addproduct(this.homePageData.productname);

        cy.log("Click on the cart icon.");
        shoppingCartContainer.clickCart();

        cy.log("Click on checkout button.");
        shoppingCartContainer.clickCheckOut();

        cy.log("Enter user information.");
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);

        cy.log("Click on the continue button.");
        checkoutPage.clickContinue();

        cy.log("Click on Finish button.");
        overviewPage.clickFinish();

        cy.log("Click on Back Home button.")
        completePage.clickBackHome();

        cy.log("Validate product page title.")
        productPage.validateProductPageTitle(this.ProductPageData.productText);
    })
})
