export class LogoutPage {

    Burger_Menu = '#react-burger-menu-btn'
    Logout = 'Logout'
    Swaglabs_Logo = '.bot_column'

    getClick_BurgerMenu() {
        cy.get(this.Burger_Menu).click({ force: true })
    }

    getClick_LogoutOption() {
        cy.contains(this.Logout).should('be.visible').click({ force: true })
    }

    getValidate_SwagLogo() {
        cy.get(this.Swaglabs_Logo).should('be.visible')
    }

}