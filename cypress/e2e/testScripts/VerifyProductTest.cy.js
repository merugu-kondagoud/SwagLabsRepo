import LoginPage from "../../PageFiles/LoginPage"
import ProductPage from "../../PageFiles/ProductPage"
import CartPage from "../../PageFiles/CartPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()

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
  })

  before(function () {
    cy.log("Launching Sauce demo.com")
    cy.launchApplication()
  })

  it('Add products to cart', function () {

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
  })

  after(function () {
    cy.log("Logging out from Sauce demo")
    cy.logoutFromApplication()
    loginPage.clickOnLogin().should("have.value", "Login")
  })
})
