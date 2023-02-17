class LoginPage
{
    getUsername()
    {
        return cy.get('#user-name')

    }
    getPassword()
    {
        return cy.get('#password')

    }
    getClick()
    {
       return cy.get('#login-button')
    }
    login(userName, password) {
        this.getUsername().type(userName)
        this.getPassword().type(password)
        this.getClick().click()
    }
}
export default LoginPage;