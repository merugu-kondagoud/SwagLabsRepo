/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Your Cart page suite", () => {

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()

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
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("Validating selected products are present in the Your cart", function () {

        cy.log("Verify login.")
        cy.Login(this.loginDetails.userName, this.loginDetails.password)

        cy.log("Selecting multiple products in the product page.")
        productPage.validateProductTitle(this.productDetails.productTitle)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()

        cy.log("Validating selected products are listed in the cart page.")
        yourcartPage.validateCheckoutTitle(this.yourcartDetails.yourCartTitle)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()
    })
})