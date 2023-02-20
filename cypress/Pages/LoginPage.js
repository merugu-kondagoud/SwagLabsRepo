export class loginPage {

    userName = '#user-name'
    password = '#password'
    loginButton = '#login-button'

    getUsername() {
        return cy.get(this.userName)
    }

    getPassword() {
        return cy.get(this.password)
    }

    getLoginButton() {
        return cy.get(this.loginButton)
    }
}