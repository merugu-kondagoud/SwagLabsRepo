/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("Login suite", () => {

    const productPage = new ProductPage()

    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData.json").then(function (loginDetails) { this.loginDetails = loginDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("verify user navigated to products page", function () {

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        productPage.validateProductPage(this.loginDetails.successMessage)
        cy.log("Logged in successfully and navigated to products page.")

    })
})