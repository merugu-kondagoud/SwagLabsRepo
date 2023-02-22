import LoginPage from "../../PageFiles/LoginPage"
import ProductPage from "../../PageFiles/ProductPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()

describe('Verify Login Test', function () {
  beforeEach(function () {
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

  it('Verify login', function () {

    cy.log("Logging in to Sauce demo.")
    loginPage.login(this.loginDetails.username, this.loginDetails.password)
    cy.log("verifying Login is success")
    productPage.getPageTitle().should("have.text", this.productDetails.productPageText)
  })

  after(function () {
    cy.log("Logging out from Sauce demo")
    cy.logoutFromApplication()
    loginPage.clickOnLogin().should("have.value", "Login")
  })
})
