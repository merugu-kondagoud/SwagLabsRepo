import LoginPage from "../../PageFiles/LoginPage"
import ProductPage from "../../PageFiles/ProductPage"
import CartPage from "../../PageFiles/CartPage"
import CheckOutPage from "../../PageFiles/CheckOutPage"
import CheckOutOverviewPage from "../../PageFiles/CheckOutOverviewPage"
import CheckOutCompletePage from "../../PageFiles/CheckOutCompletePage"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkOutPage = new CheckOutPage()
const checkOutOverviewPage = new CheckOutOverviewPage()
const checkOutCompletePage = new CheckOutCompletePage()
var priceOfFirstItemSplit
var priceOfSecondItemSplit
var priceOfFirstItem
var priceOfSecondItem
var sum
const tax = 3.20

describe('My SwagLab Test', function () {
    beforeEach(function () {
        cy.on("fail", (e, runnable) => {
            if (
                e.message.includes("A fixture file could not be found")) {
                cy.log("Please check your file path or input file");
                throw e;
            }
        })
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
        cy.fixture('checkoutcomplete').then(function (checkOutCompleteDetails) {
            this.checkOutCompleteDetails = checkOutCompleteDetails
        })
        cy.fixture('checkoutoverview').then(function (checkOutOverviewDetails) {
            this.checkOutOverviewDetails = checkOutOverviewDetails
        })
    })

    before(function () {
        cy.log("Launching Sauce demo.com")
        cy.launchApplication()
    })

    it('Verify Checkout is done Successfully', function () {

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
        cy.log("Checking cart item's quantity")
        checkOutOverviewPage.cartItemQuantity().each(($product, productIndex, $productListist) => {
            if (productIndex == 0) {
                const quantityOfFirstItem = $product.text()
                expect(quantityOfFirstItem).to.be.equal(this.checkOutOverviewDetails.cartItemQuantity1)
            }
            if (productIndex == 1) {
                const quantityOfSecondItem = $product.text()
                expect(quantityOfSecondItem).to.be.equal(this.checkOutOverviewDetails.cartItemQuantity2)
            }
        })
        cy.log("Checking cart item's price")
        checkOutOverviewPage.cartItemPrice().each(($product, productIndex, $productList) => {
            if (productIndex == 0) {
                priceOfFirstItem = $product.text()
                expect(priceOfFirstItem).to.be.equal(this.checkOutOverviewDetails.cartItemPrice1)
                priceOfFirstItemSplit = priceOfFirstItem.split("$")
                priceOfFirstItemSplit = priceOfFirstItemSplit[1]
            }
            if (productIndex == 1) {
                priceOfSecondItem = $product.text()
                expect(priceOfSecondItem).to.be.equal(this.checkOutOverviewDetails.cartItemPrice2)
                priceOfSecondItemSplit = priceOfSecondItem.split("$")
                priceOfSecondItemSplit = priceOfSecondItemSplit[1]
                sum = Number(priceOfFirstItemSplit) + Number(priceOfSecondItemSplit) + Number(tax)
                const finalCartTotal = "Total: $" + sum
                expect(finalCartTotal).to.be.equal(this.checkOutOverviewDetails.cartTotal)
            }

        })
        cy.log("Clicking on finish")
        checkOutOverviewPage.finish()
        cy.log("Checking checkout complete page is displayed")
        checkOutCompletePage.getPageTitle().should("have.text", this.checkOutCompleteDetails.checkOutCompletePageText)

        checkOutCompletePage.textMessage().should("have.text", this.checkOutCompleteDetails.thankYouMessage)
        cy.log("Clicking on Back to Home ")
        checkOutCompletePage.backToHome()
        cy.log("Checking product is displayed")
        productPage.getPageTitle().should("have.text", this.productDetails.productPageText)
    })

    after(function () {
        cy.log("Logging out from Sauce demo")
        cy.logoutFromApplication()
        loginPage.clickOnLogin().should("have.value", "Login")
    })
})
