/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("Login suite", () => {

    const productPage = new ProductPage()

    Cypress.on("fail", (e, runnable) => {
        if (e.message.includes("A fixture file could not be found")) {
            console.log("**please check your file path**")
        }
    })

    beforeEach(function () {
        cy.launchApplication()
        cy.log("Reading data from json file")
        cy.fixture("LoginCredentialsTestData.json").then(function (loginDetails) { this.loginDetails = loginDetails })
        cy.fixture("ProductPageTestData").then(function (productDetails) { this.productDetails = productDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("verify user navigated to products page", function () {

        cy.log("Verify Login.")
        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        
        cy.log("Verify user navigate to product page.")
        productPage.validateProductTitle(this.productDetails.productTitle)

    })
})