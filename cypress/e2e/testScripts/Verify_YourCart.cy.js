/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Your Cart page suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("YourCartTestData").then(function (yourcartdata) { this.yourcartdata = yourcartdata })
    })

    afterEach(function () {
        cy.Logout()
    })

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()

    it("Validating selected products are present in the Your cart", function () {

        cy.Login(this.logindata.Username, this.logindata.Password)

        productPage.getValidateProductPage(this.productpagedata.SuccessMessage)
        productPage.getSelectProducts(this.productpagedata.Productname)
        productPage.getClick_CartButton()

        yourcartPage.getValidate_CheckoutPage(this.yourcartdata.YourCartLogo)
        yourcartPage.getValidate_YourCartProducts(this.productpagedata.Productname)
        yourcartPage.getClick_CheckoutButton()
    })
})