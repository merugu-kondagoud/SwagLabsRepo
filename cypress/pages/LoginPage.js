export class LoginPage {

    userName = "#user-name";
    password = "#password";
    loginButton = "#login-button";

    validateloginButton() {
        cy.get(this.loginButton).should("be.visible")
    }

    login(userName, password) {
        cy.get(this.loginButton).should("be.visible");
        cy.get(this.userName).type(userName);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}
