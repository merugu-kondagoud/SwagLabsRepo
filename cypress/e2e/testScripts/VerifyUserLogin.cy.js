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
        cy.fixture("LoginCredentialsTestData.json").then(function (loginDetails) { this.loginDetails = loginDetails })
        cy.fixture("ProductPageTestData").then(function (productDetails) { this.productDetails = productDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("verify user navigated to products page", function () {

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        productPage.validateProductPage(this.productDetails.successMessage)
        cy.log("Logged in successfully and navigated to products page.")

    })
})