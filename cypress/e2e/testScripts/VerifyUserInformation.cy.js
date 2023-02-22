/// <reference types="cypress" />

import { InformationPage } from "../../Pages/InformationPage"
import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Information page suite", () => {

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()
    const informationPage = new InformationPage()

    Cypress.on("fail", (e, runnable) => {
        if (e.message.includes("A fixture file could not be found")) {
            console.log("**please check your file path**")
        }
    })

    beforeEach(function () {
        cy.launchApplication()
        cy.log("Reading data from json file")
        cy.fixture("LoginCredentialsTestData").then(function (loginDetails) { this.loginDetails = loginDetails })
        cy.fixture("ProductPageTestData").then(function (productDetails) { this.productDetails = productDetails })
        cy.fixture("YourCartTestData").then(function (yourcartDetails) { this.yourcartDetails = yourcartDetails })
        cy.fixture("InformationPageTestData").then(function (userInfoDetails) { this.userInfoDetails = userInfoDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("Verify user can provide information in the Information page", function () {

        cy.log("verify login.")
        cy.Login(this.loginDetails.userName, this.loginDetails.password)

        cy.log("Selecting multiple products in the product page.")
        productPage.validateProductTitle(this.productDetails.productTitle)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()

        cy.log("validating selected products are listed in the cart page.")
        yourcartPage.validateCheckoutTitle(this.yourcartDetails.yourCartTitle)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()

        cy.log("Providing user information in the checkout information page.")
        informationPage.validateCheckoutInformationTitle(this.userInfoDetails.checkoutInformationTitle)
        informationPage.getInformation(this.userInfoDetails.firstName, this.userInfoDetails.lastName, this.userInfoDetails.zipCode)
        informationPage.clickContinue()

    })
})