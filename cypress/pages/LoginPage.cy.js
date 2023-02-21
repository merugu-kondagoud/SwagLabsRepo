class LoginPage {
    textUsername = "[name='user-name']"
    textPassword = "[name='password']"
    loginButton = "[value='Login']"

    getUserName() {
        return cy.get(this.textUsername)
    }
    getPassword() {
        return cy.get(this.textPassword)
    }
    getLoginButton() {
        return cy.get(this.loginButton)
    }
    login(userName, password) {
        this.getUserName().type(userName)
        this.getPassword().type(password)
        this.getLoginButton().click()
    }
}
export default LoginPage;