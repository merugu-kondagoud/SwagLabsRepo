/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("product page suite", () => {

    const productPage = new ProductPage()

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
    })

    afterEach(function () {
        cy.Logout()
        cy.log("User logged out successfully.")
    })

    it("Verify user can select multiple products", function () {

        cy.log("Verify login.")
        cy.Login(this.loginDetails.userName, this.loginDetails.password)

        cy.log("Selecting multiple products in the product page.")
        productPage.validateProductTitle(this.productDetails.productTitle)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()

    })
})