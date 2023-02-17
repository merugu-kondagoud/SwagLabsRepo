/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';

describe("Verify the checkout completion page's order success message.", function () {
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()
    const completePage = new CheckoutCompletePage()

    beforeEach(function () {
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutPageTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
        cy.fixture('CheckoutOverviewPage').then(function (overviewPageData) { this.overviewPageData = overviewPageData; });
        cy.fixture('CheckoutCompletePageTestData').then(function (completePageData) { this.completePageData = completePageData; });
    })

    afterEach(function () {
        cy.logout();
    })

    it("Verify the success message and select 'Back Home' button", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();

        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);
        checkoutPage.selectContinueButton();

        overviewPage.calculateProductTotal();
        overviewPage.selectFinish();

        completePage.validateCompleteMessage(this.completePageData.completeText);
        completePage.selectBackHome();
    })
})
