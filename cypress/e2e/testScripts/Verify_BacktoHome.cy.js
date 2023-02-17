/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { Checkout_Completepage } from "../../Pages/Checkout_CompletePage"
import { BackHomePage } from "../../Pages/BackHomePage"

describe("Back to HomePage suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function (informationpagedata) { this.informationpagedata = informationpagedata })
        cy.fixture("YourCartTestData").then(function (yourcartdata) { this.yourcartdata = yourcartdata })
        cy.fixture("CheckoutOverviewTestData").then(function (overviewdata) { this.overviewdata = overviewdata })
    })

    afterEach(function () {
        cy.Logout()
    })

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()
    const informationPage = new InformationPage()
    const checkoutOverview = new Checkout_OverviewPage()
    const completePage = new Checkout_Completepage()
    const backHome = new BackHomePage()

    it("After purchasing the products, user can navigate to Homepage", function () {

        cy.Login(this.logindata.Username, this.logindata.Password)

        productPage.getValidateProductPage(this.productpagedata.SuccessMessage)
        productPage.getSelectProducts(this.productpagedata.Productname)
        productPage.getClick_CartButton()

        yourcartPage.getValidate_CheckoutPage(this.yourcartdata.YourCartLogo)
        yourcartPage.getValidate_YourCartProducts(this.productpagedata.Productname)
        yourcartPage.getClick_CheckoutButton()

        informationPage.getValidate_Informationpage(this.informationpagedata.OverviewMessage)
        informationPage.getInformation(this.informationpagedata.Firstname, this.informationpagedata.Lastname, this.informationpagedata.ZipCode)
        informationPage.getClick_Continue()

        checkoutOverview.getValidate_CheckoutOverview(this.overviewdata.OverviewLabel)
        checkoutOverview.getValidate_ProductQuantity(this.overviewdata.productQuantity)
        checkoutOverview.getValidate_TotalPrice()
        checkoutOverview.getClick_FinishButton()

        completePage.getValidate_CompleteLabel()
        completePage.getValidate_ThanksMessage()

        backHome.getClick_BackHomeButton()
        backHome.getValidate_ProductLabel(this.productpagedata.SuccessMessage)
    })
})
