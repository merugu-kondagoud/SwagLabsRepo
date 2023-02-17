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
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutPageTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
        cy.fixture('CheckoutOverviewPage').then(function (overviewPageData) { this.overviewPageData = overviewPageData; });
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Validate the quantity and total cost of the products, then click on finish button", function () {
        cy.clearCookies();
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();
        
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);
        checkoutPage.selectContinueButton();

        overviewPage.validateOverviewPageProperties(this.overviewPageData.overviewText)
        overviewPage.validateProductQuantity(this.overviewPageData.productQuantity);
        overviewPage.calculateProductTotal();
        overviewPage.selectFinish();
    })
})
