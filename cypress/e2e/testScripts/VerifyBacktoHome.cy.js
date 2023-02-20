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

    beforeEach(function () {
        cy.launchApplication()
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

        cy.Login(this.loginDetails.userName, this.loginDetails.password)
        cy.log("Logged in successfully.")

        productPage.validateProductPage(this.productDetails.successMessage)
        productPage.clickProducts(this.productDetails.productName)
        productPage.clickCartButton()
        cy.log("Selected multiple products by randomly.")

        yourcartPage.validateCheckout(this.yourcartDetails.yourCartLogo)
        yourcartPage.validateYourCartProducts(this.productDetails.productName)
        yourcartPage.clickCheckout()
        cy.log("selected products are listed in the cart page.")

        informationPage.validateInformationpage(this.userInfoDetails.overviewMessage)
        informationPage.getInformation(this.userInfoDetails.firstName, this.userInfoDetails.lastName, this.userInfoDetails.zipCode)
        informationPage.clickContinue()
        cy.log("user info has been provided and navigated to the overview page.")

        checkoutOverview.validateCheckoutOverview(this.checkoutDetails.overviewLabel)
        checkoutOverview.validateProductQuantity(this.checkoutDetails.productQuantity)
        checkoutOverview.validateTotalPrice()
        checkoutOverview.clickFinishButton()
        cy.log("Validated Product quantity, quantity price, Total price.")

        completePage.validateCompleteLabel(this.orderCompleteDetails.checkoutLogo)
        completePage.validateThanksMessage(this.orderCompleteDetails.thanksMessage)
        cy.log("validated order complete message.")

        backHome.clickBackHomeButton()
        backHome.validateProductLabel(this.productDetails.successMessage)
        cy.log("Navigated return back to product page by clicking on back to Home button.")
    })
})
