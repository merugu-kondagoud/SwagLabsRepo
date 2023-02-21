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
        cy.fixture("LoginCredentialsTestData").then(function (loginDetails) { this.loginDetails = loginDetails })
        cy.fixture("ProductPageTestData").then(function (productDetails) { this.productDetails = productDetails })
        cy.fixture("YourCartTestData").then(function (yourcartDetails) { this.yourcartDetails = yourcartDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("Validating selected products are present in the Your cart", function () {

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        cy.log("Logged in successfully.")

        productPage.validateProductPage(this.productDetails.successMessage)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()
        cy.log("Multiple product has been selected by randomly.")

        yourcartPage.validateCheckout(this.yourcartDetails.yourCartLogo)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()
        cy.log("Selected products are listed in the Cart page.")
    })
})