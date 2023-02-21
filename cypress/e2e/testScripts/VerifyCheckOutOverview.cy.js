import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";
import CheckOutYourInformationPage from "../../pages/CheckOutYourInformationPage.cy";
import CheckOutOverviewPage from "../../pages/CheckOutOverviewPage.cy";

describe("Verify checkout overview", () => {

    let loginData
    let checkOutYourInformationData
    let checkOutOverviewData
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
        cy.on('fail', (error, runnable) => {
            if (error.message.includes("A fixture file could not be found")) {
                console.log("Please check your fixture file path")
            }
        })
    })

    it("Checkout overview Test", () => {
        cy.log("Creating object instances.")
        let loginPage = new LoginPage()
        let productsPage = new ProductsPage()
        let yourCart = new YourCartPage()
        let checkOutYourInformationPage = new CheckOutYourInformationPage()
        let checkOutOverviewPage = new CheckOutOverviewPage()
        cy.log("Login to Swag Labs Application.")
        loginPage.login(loginData.userName, loginData.password)
        cy.log("Add required products to cart.")
        productsPage.addProductsToCart()
        cy.log("Click Checkout Button.")
        yourCart.clickCheckOutButton()
        cy.log("Enter firstname, lastname, postal code in checkout:your information page.")
        checkOutYourInformationPage.enterYourInformation(checkOutYourInformationData.firstName, checkOutYourInformationData.lastName, checkOutYourInformationData.postalCode)
        cy.log("Verify each product quantity in checkout:overview page.")
        checkOutOverviewPage.verifyEachProductQuantity(checkOutOverviewData.firstProductQuantity, checkOutOverviewData.secondProductQuantity)
        cy.log("Verify each product price in checkout:overview page.")
        checkOutOverviewPage.verifyEachProductPrice(checkOutOverviewData.firstProductPrice, checkOutOverviewData.secondProductPrice)
        cy.log("Verify total price of products in checkout:overview page.")
        checkOutOverviewPage.verifyTotalPriceOfProducts(checkOutOverviewData.totalPriceOfProducts)
    })

    after(() => {
        cy.log("Logout of Swag Labs Application.")
        cy.logOut()
        cy.log("Verify logout is successful.")
        cy.verifyLogOut()
    })
})