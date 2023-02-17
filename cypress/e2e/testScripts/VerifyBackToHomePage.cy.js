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
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutPageTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
        cy.fixture('CheckoutOverviewPage').then(function (overviewPageData) { this.overviewPageData = overviewPageData; });
        cy.fixture('CheckoutCompletePageTestData').then(function (completePageData) { this.completePageData = completePageData; });
        cy.fixture('BackToHomePage').then(function (ProductPageData) { this.ProductPageData = ProductPageData; });
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Navigate back to home page", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);

        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();

        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);
        checkoutPage.selectContinueButton();

        overviewPage.selectFinish();
        completePage.selectBackHome();

        productPage.validateProductPageTitle(this.ProductPageData.productText);
    })
})
