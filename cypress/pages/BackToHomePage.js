export class BackToHomePage {

    title = ".title"
    burgerMenu = ".bm-burger-button"
    burgerMenuButton = "#react-burger-menu-btn"
    logoutButton = "#logout_sidebar_link"

    getBurgerMenuButton() {
        return cy.get(this.burgerMenuButton)
    }

    getLogoutButton() {
        return cy.get(this.logoutButton)
    }

    validateProductPageTitle(titleText) {
        cy.get(this.title).should("have.text", titleText)
    }

    openBurgerMenu() {
        cy.get(this.burgerMenu).click()
    }
}
