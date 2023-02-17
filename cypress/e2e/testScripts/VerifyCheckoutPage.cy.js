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
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutPageTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Validate landing page after selecting checkout button", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();
        checkoutPage.validateLandingPage(this.checkoutPageData.checkoutPageText);
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);
        checkoutPage.selectContinueButton();
    })
})
