/// <reference types="cypress"/>
import 'cypress-xpath'
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from "../../pages/LoginPage";

describe("Add products", function () {

    const homePage = new HomePage();
    const login = new LoginPage();

    beforeEach(function () {
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData;})
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData;})
        cy.launchBrowser();
    })

    afterEach(function()
    {
        cy.logout();
    })

    it("Add products to the cart", function () {
        login.login(this.LoginData.userName, this.LoginData.password);
        homePage.validateHomePageProperties();
        homePage.addproduct(this.homePageData.productname)
    })
})
