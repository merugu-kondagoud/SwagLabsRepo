/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { Checkout_Completepage } from "../../Pages/Checkout_CompletePage"
import { BackHomePage } from "../../Pages/BackHomePage"

describe("Back to HomePage suite", () => {

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()
    const informationPage = new InformationPage()
    const checkoutOverview = new Checkout_OverviewPage()
    const completePage = new Checkout_Completepage()
    const backHome = new BackHomePage()

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
        cy.fixture("YourCartTestData").then(function (yourcartDetails) { this.yourcartDetails = yourcartDetails })
        cy.fixture("InformationPageTestData").then(function (userInfoDetails) { this.userInfoDetails = userInfoDetails })
        cy.fixture("CheckoutOverviewTestData").then(function (checkoutDetails) { this.checkoutDetails = checkoutDetails })
        cy.fixture("OrderCompleteTestData").then(function (orderCompleteDetails) { this.orderCompleteDetails = orderCompleteDetails })
    })

    afterEach(function () {
        cy.Logout()
        cy.log("Logged out successfully.")
    })

    it("Verifying user return back to product page by clicking on back to home button", function () {

        cy.log("verify login.")
        cy.Login(this.loginDetails.userName, this.loginDetails.password)

        cy.log("Selecting multiple products in the product page.")
        productPage.validateProductTitle(this.productDetails.productTitle)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()

        cy.log("Validating selected products are listed in the cart page.")
        yourcartPage.validateCheckoutTitle(this.yourcartDetails.yourCartTitle)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()

        cy.log("Providing user information in the checkout information page.")
        informationPage.validateCheckoutInformationTitle(this.userInfoDetails.checkoutInformationTitle)
        informationPage.getInformation(this.userInfoDetails.firstName, this.userInfoDetails.lastName, this.userInfoDetails.zipCode)
        informationPage.clickContinue()

        cy.log("Validating total product quantity and total item price.")
        checkoutOverview.validateCheckoutOverviewTitle(this.checkoutDetails.checkoutOverviewTitle)
        checkoutOverview.validateProductQuantity(this.checkoutDetails.productQuantity)
        checkoutOverview.validateTotalPrice()
        checkoutOverview.clickFinishButton()

        cy.log("Validating order complete message.")
        completePage.validateCompleteTitle(this.orderCompleteDetails.checkoutCompleteTitle)
        completePage.validateOrderCompleteMessage(this.orderCompleteDetails.completeOrderMessage)

        cy.log("Validating user return back to product page.")
        backHome.clickBackButton()
        backHome.validateProductTitle(this.productDetails.productTitle)
    })
})
