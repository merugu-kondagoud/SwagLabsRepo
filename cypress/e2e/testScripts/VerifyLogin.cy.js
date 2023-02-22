///<reference types="cypress"/>
import LoginPage from "../../Pages/LoginPage";

describe('Login', function () {
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
    })
    it('Verify Login', function () {
        const login = new LoginPage()
        cy.log("user login.")
        login.login(this.logindata.userName, this.logindata.password)
    })
    afterEach(function () {
        cy.logoutFromApplication()
    })
})




