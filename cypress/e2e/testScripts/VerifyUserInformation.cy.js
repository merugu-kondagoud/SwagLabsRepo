/// <reference types="cypress" />

import { InformationPage } from "../../Pages/InformationPage"
import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Information page suite", () => {

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()
    const informationPage = new InformationPage()

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
        cy.fixture("InformationPageTestData").then(function (userInfoDetails) { this.userInfoDetails = userInfoDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("Verify user can provide information in the Information page", function () {

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        cy.log("Logged in successfully.")

        productPage.validateProductPage(this.productDetails.successMessage)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()
        cy.log("Selected multiple products by randomly.")

        yourcartPage.validateCheckout(this.yourcartDetails.yourCartLogo)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()
        cy.log("Selected products are listed in the cart page.")

        informationPage.validateInformationpage(this.userInfoDetails.overviewMessage)
        informationPage.getInformation(this.userInfoDetails.firstName, this.userInfoDetails.lastName, this.userInfoDetails.zipCode)
        informationPage.clickContinue()
        cy.log("user info has been provided and navigated to the overview page.")

    })
})