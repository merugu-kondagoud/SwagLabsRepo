import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";

describe("Verify Products In Cart", () => {

    let loginData
    let productsData
    before(() => {
        cy.launchApplication()
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
        cy.fixture("productsData").then((data) => {
            productsData = data
        })
    })

    it("Verify Products Test", () => {
        let loginPage = new LoginPage();
        loginPage.login(loginData.username, loginData.password)
        let productsPage = new ProductsPage();
        productsPage.addProductsToCart()
        let yourCart = new YourCartPage();
        yourCart.validateFirstProductInCart(productsData.expectedfirstproduct)
        yourCart.validateSecondProductInCart(productsData.expectedsecondproduct)
    })
    
    after(() => {
        cy.performLogout()
        cy.verifyLogOutSuccess()
    })
})