import LoginPage from "../../PageFiles/LoginPage"
import ProductPage from "../../PageFiles/ProductPage"
import CartPage from "../../PageFiles/CartPage"
import CheckOutPage from "../../PageFiles/CheckOutPage"
import CheckOutOverviewPage from "../../PageFiles/CheckOutOverviewPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkOutPage = new CheckOutPage()
const checkOutOverviewPage = new CheckOutOverviewPage()

describe('My SwagLab Test', function () {
    beforeEach(function () {
        cy.fixture('login').then(function (loginDetails) {
            this.loginDetails = loginDetails
        })
        cy.fixture('product').then(function (productDetails) {
            this.productDetails = productDetails
        })
        cy.fixture('cart').then(function (cartDetails) {
            this.cartDetails = cartDetails
        })
        cy.fixture('checkout').then(function (checkOutDetails) {
            this.checkOutDetails = checkOutDetails
        })
        cy.fixture('checkoutoverview').then(function (checkOutOverviewDetails) {
            this.checkOutOverviewDetails = checkOutOverviewDetails
        })
    })

    before(function () {
        cy.log("Launching Sauce demo.com")
        cy.launchApplication()
    })

    it('Verify checkout details are correct', function () {
        cy.log("Logging in to Sauce demo.")
        loginPage.login(this.loginDetails.username, this.loginDetails.password)
        cy.log("Checking Login is success")
        productPage.getPageTitle().should("have.text", this.productDetails.productPageText)
        cy.log("Adding two products to cart")
        productPage.productsList().each(($product, productIndex, $productList) => {
            while (productIndex < 2) {
                cy.contains("Add to cart").click()
                productIndex++
            }
        })
        cy.log("Clicking on cart badge")
        productPage.addToCart()
        cy.log("Checking Checkout Page is displayed")
        cartPage.getPageTitle().should("have.text", this.cartDetails.cartPageText)
        cy.log("Checking two items added in the cart")
        cartPage.listOfProductsAdded().should("have.text", this.cartDetails.listOfProductsAdded)
        cy.log("Clicking on checkout")
        cartPage.checkout()
        cy.log("Checking CheckoutOverview Page is displayed")
        checkOutPage.getPageTitle().should("have.text", this.checkOutDetails.checkOutPageText)
        cy.log("Entering Firstname")
        checkOutPage.firstName().type(this.checkOutDetails.firstName)
        cy.log("Entering Lastname")
        checkOutPage.lastName().type(this.checkOutDetails.lastName)
        cy.log("Entering Postalcode")
        checkOutPage.postalCode().type(this.checkOutDetails.postalCode)
        cy.log("Clicking on continue")
        checkOutPage.continue()
        cy.log("Checking checkout overview page is displayed")
        checkOutOverviewPage.getPageTitle().should("have.text", this.checkOutOverviewDetails.checkOutOverviewPageText)
    })

    after(function () {
        cy.log("Logging out from Sauce demo")
        cy.logoutFromApplication()
        loginPage.clickOnLogin().should("have.value", "Login")
    })
})
