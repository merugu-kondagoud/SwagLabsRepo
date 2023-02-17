/// <reference types="cypress" />

import { InformationPage } from "../../Pages/InformationPage"
import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Information page suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function (informationpagedata) { this.informationpagedata = informationpagedata })
        cy.fixture("YourCartTestData").then(function (yourcartdata) { this.yourcartdata = yourcartdata })
    })

    afterEach(function () {
        cy.Logout()
    })

    const productPage = new ProductPage()
    const yourcartPage = new YourCartPage()
    const informationPage = new InformationPage()

    it("Verify user can provide information in the Information page", function () {

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

    })
})