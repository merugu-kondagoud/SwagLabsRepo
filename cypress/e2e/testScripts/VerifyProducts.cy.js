import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";

describe("Verify Products In Cart", () => {

    let loginData
    let productsData
    before(() => {
        cy.log("Launch Swag Labs application.")
        cy.launchApplication()
        cy.log("Load loginData.json fixture.")
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
        cy.log("Load productsData.json fixture.")
        cy.fixture("productsData").then((data) => {
            productsData = data
        })
    })

    it("Verify Products Test", () => {
        cy.log("Creating object instances.")
        let loginPage = new LoginPage()
        let productsPage = new ProductsPage()
        let yourCart = new YourCartPage()
        cy.log("Login to Swag Labs Application.")
        loginPage.login(loginData.userName, loginData.password)
        cy.log("Add required products to cart.")
        productsPage.addProductsToCart()
        cy.log("Validate the first product added to the cart.")
        yourCart.validateFirstProductInCart(productsData.expectedFirstProduct)
        cy.log("Validate the second product added to the cart.")
        yourCart.validateSecondProductInCart(productsData.expectedSecondProduct)
    })
    
    after(() => {
        cy.log("Logout of Swag Labs Application.")
        cy.logOut()
        cy.log("Verify logout is successful.")
        cy.verifyLogOut()
    })
})