/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("product page suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
    })

    afterEach(function () {
        cy.Logout()
    })

    const productPage = new ProductPage()

    it("Selecting multiple products", function () {

        cy.Login(this.logindata.Username, this.logindata.Password)

        productPage.getValidateProductPage(this.productpagedata.SuccessMessage)
        productPage.getSelectProducts(this.productpagedata.Productname)
        productPage.getClick_CartButton()

    })
})