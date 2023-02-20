/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("product page suite", () => {

    const productPage = new ProductPage()

    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (loginDetails) { this.loginDetails = loginDetails })
        cy.fixture("ProductPageTestData").then(function (productDetails) { this.productDetails = productDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("User logged out successfully.")
    })

    it("Verify user can select multiple products", function () {

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        cy.log("User logged in successfully.")

        productPage.validateProductPage(this.productDetails.successMessage)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()
        cy.log("Multiple products has been selected by randomly.")

    })
})