export class LoginPage {
    userName = "#user-name";
    password = "#password";
    loginButton = "#login-button";
    botlogo = ".bot_column"


    validateloginPageProperties() {
        cy.get(this.botlogo).should("be.visible")
    }

    login(userName, password) {
        cy.get(this.userName).type(userName);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}
