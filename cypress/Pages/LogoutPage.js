export class LogoutPage {

    burgerMenu = '#react-burger-menu-btn'
    logout = 'Logout'
    swagLabsBot = '.bot_column'

    clickBurgerMenu() {
        return cy.get(this.burgerMenu).click({ force: true })
    }

    clickLogoutOption() {
        return cy.contains(this.logout).should('be.visible').click({ force: true })
    }

    validateSwagLogo() {
        return cy.get(this.swagLabsBot).should('be.visible')
    }

}