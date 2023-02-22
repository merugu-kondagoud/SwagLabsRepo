///<reference types="cypress"/>
import HomePage from "../../Pages/HomePage";
import LoginPage from "../../Pages/LoginPage";

describe("HomePage", function () {
    const homepage = new HomePage()
    const login = new LoginPage()
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
    })
    it('Verify Home page', function () {
        cy.log("user login.")
        login.login(this.logindata.userName, this.logindata.password)
        cy.log("Validating Homepage.")
        homepage.validateHomepage()
        cy.log("Adding two products.")
        homepage.addTwoProducts()
        cy.log("Item count in cart.")
        homepage.validateCart()
    })
    afterEach(function () {
        cy.logoutFromApplication()
    })
})

