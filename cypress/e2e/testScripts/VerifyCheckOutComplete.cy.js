import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";
import CheckOutYourInformationPage from "../../pages/CheckOutYourInformationPage.cy";
import CheckOutOverviewPage from "../../pages/CheckOutOverviewPage.cy";
import CheckOutCompletePage from "../../pages/CheckOutCompletePage.cy";

describe("Verify checkout complete", () => {

    let loginData
    let checkOutYourInformationData
    let checkOutOverviewData
    let checkOutCompleteData
    before(() => {
        cy.log("Launch Swag Labs application.")
        cy.launchApplication()
        cy.log("Load loginData.json fixture.")
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
        cy.log("Load checkOutYourInformationData.json fixture.")
        cy.fixture("checkOutYourInformationData").then((data) => {
            checkOutYourInformationData = data
        })
        cy.log("Load checkOutOverviewData.json fixture.")
        cy.fixture("checkOutOverviewData").then((data) => {
            checkOutOverviewData = data
        })
        cy.log("Load checkOutCompleteData.json fixture.")
        cy.fixture("checkOutCompleteData").then((data) => {
            checkOutCompleteData = data
        })
        cy.on('fail', (error, runnable) => {
            if (error.message.includes("A fixture file could not be found")) {
                cy.log("Please check your fixture file path")
            }
        })
    })

    it("Checkout complete Test", () => {
        cy.log("Creating object instances.")
        let loginPage = new LoginPage()
        let productsPage = new ProductsPage()
        let yourCart = new YourCartPage()
        let checkOutYourInformationPage = new CheckOutYourInformationPage()
        let checkOutOverviewPage = new CheckOutOverviewPage()
        let checkOutCompletePage = new CheckOutCompletePage()
        cy.log("Login to Swag Labs Application.")
        loginPage.login(loginData.userName, loginData.password)
        cy.log("Add required products to cart.")
        productsPage.addProductsToCart()
        cy.log("Click Checkout Button.")
        yourCart.clickCheckOutButton()
        cy.log("Enter firstname, lastname, postal code in checkout:your information page.")
        checkOutYourInformationPage.enterYourInformation(checkOutYourInformationData.firstName, checkOutYourInformationData.lastName, checkOutYourInformationData.postalCode)
        cy.log("Click Finish Checkout Button")
        checkOutOverviewPage.clickFinishButton()
        cy.log("Verify user is navigated to checkout:complete page.")
        checkOutCompletePage.checkOutCompleteVerify(checkOutCompleteData.expectedText)
    })

    after(() => {
        cy.log("Logout of Swag Labs Application.")
        cy.logOut()
        cy.log("Verify logout is successful.")
        cy.verifyLogOut()
    })
})