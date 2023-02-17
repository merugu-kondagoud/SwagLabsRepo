import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";
import CheckOutYourInformationPage from "../../pages/CheckOutYourInformationPage.cy";
import CheckOutOverviewPage from "../../pages/CheckOutOverviewPage.cy";

describe("Verify checkout overview test", () => {

    let loginData
    let checkOutYourInformationData
    let checkOutOverviewData
    before(() => {
        cy.launchApplication()
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
        cy.fixture("checkOutYourInformationData").then((data) => {
            checkOutYourInformationData = data
        })
        cy.fixture("checkOutOverviewData").then((data) => {
            checkOutOverviewData = data
        })
    })

    it("Checkout Test", () => {
        let loginPage = new LoginPage();
        loginPage.login(loginData.username, loginData.password)
        let productsPage = new ProductsPage();
        productsPage.addProductsToCart()
        let yourCart = new YourCartPage();
        yourCart.clickCheckOutButton()
        let checkOutYourInformationPage = new CheckOutYourInformationPage();
        checkOutYourInformationPage.enterYourInformation(checkOutYourInformationData.firstname, checkOutYourInformationData.lastname, checkOutYourInformationData.postalcode)
        let checkOutOverviewPage = new CheckOutOverviewPage()
        checkOutOverviewPage.verifyEachProductQuantity(checkOutOverviewData.firstproductquantity, checkOutOverviewData.secondproductquantity)
        checkOutOverviewPage.verifyEachProductPrice(checkOutOverviewData.firstproductprice, checkOutOverviewData.secondproductprice)
        checkOutOverviewPage.verifyTotalPriceOfProducts(checkOutOverviewData.totalpriceofproducts)
    })

    after(() => {
        cy.performLogout()
        cy.verifyLogOutSuccess()
    })
})