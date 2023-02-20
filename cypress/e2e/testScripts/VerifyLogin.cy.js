import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";

describe("Verify Login to saucelabs", () => {

    let loginData
    beforeEach(() => {
        cy.log("Launch Swag Labs application.")
        cy.launchApplication()
        cy.log("Load loginData.json fixture.")
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
    })

    it("Login Test", () => {
        cy.log("Creating object instances.")
        let loginPage = new LoginPage()
        let productsPage = new ProductsPage()
        cy.log("Login to Swag Labs Application.")
        loginPage.login(loginData.userName, loginData.password)
        cy.log("Verify user is navigated to Products page.")
        productsPage.verifyProductsPageNavigation()
    })

    after(() => {
        cy.log("Logout of Swag Labs Application.")
        cy.logOut()
        cy.log("Verify logout is successful.")
        cy.verifyLogOut()
    })
})