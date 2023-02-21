import LoginPage from "../../PageFiles/LoginPage"
import ProductPage from "../../PageFiles/ProductPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()

describe('My SwagLab Test Suite', function () {
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
  })

  before(function () {
    cy.log("Launching Sauce demo.com")
    cy.launchApplication()
  })

  it('Verify Saucedemo.com login is successful', function () {

    cy.log("Logging in to Sauce demo.")
    loginPage.login(this.loginDetails.username, this.loginDetails.password)
    cy.log("Checking Login is success")
    productPage.getPageTitle().should("have.text", this.productDetails.productPageText)
  })

  after(function () {
    cy.log("Logging out from Sauce demo")
    cy.logoutFromApplication()
    loginPage.clickOnLogin().should("have.value", "Login")
  })
})
