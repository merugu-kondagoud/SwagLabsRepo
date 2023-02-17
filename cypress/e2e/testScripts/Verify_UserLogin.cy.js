/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("Login suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData.json").then(function (logindata) { this.logindata = logindata })
    })

    afterEach(function () {
        cy.Logout()
    })

    const productPage = new ProductPage()

    it("verify login", function () {

        cy.Login(this.logindata.Username, this.logindata.Password)
        productPage.getValidateProductPage(this.logindata.SuccessMessage)

    })
})