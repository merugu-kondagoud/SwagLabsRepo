import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";

describe("Verify Login to saucelabs", () => {

    let loginData
    before(() => {
        cy.launchApplication()
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
    })

    it("Verify Login Test", () => {
        let loginPage = new LoginPage();
        loginPage.login(loginData.username, loginData.password)
        let productsPage = new ProductsPage();
        productsPage.verifyProductsPageNavigation()
    })
    
    after(() => {
        cy.performLogout()
        cy.verifyLogOutSuccess()
    })
})