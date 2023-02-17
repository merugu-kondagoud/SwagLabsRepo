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
        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CartPageTestData').then(function (cartPageData) { this.cartPageData = cartPageData; });
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Validate the product list", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.validateYourCartProducts(this.homePageData.productname);
        shoppingCartContainer.selectCheckOut();
    })
})
