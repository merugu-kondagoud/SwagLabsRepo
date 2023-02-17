export class loginPage {

    userName = '#user-name'
    password = '#password'
    LoginButton = '#login-button'

    getUsername() {
        return cy.get(this.userName)
    }

    getPassword() {
        return cy.get(this.password)
    }

    getLogin_button() {
        return cy.get(this.LoginButton)
    }
}