class LoginPage {
    userName() {
        return cy.get("#user-name")
    }
    password() {
        return cy.get("#password")
    }
    clickOnLogin() {
        return cy.get("#login-button")
    }
    login(username, password) {
        this.userName().type(username)
        this.password().type(password)
        this.clickOnLogin().click()
    }
}
export default LoginPage