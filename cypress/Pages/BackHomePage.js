export class BackHomePage {

    backHomeButton = '#back-to-products'
    productLogo = '.title'

    clickBackHomeButton() {
        cy.get(this.backHomeButton).click()
    }

    validateProductLabel(logo) {
        cy.get(this.productLogo).should('have.text', logo)
    }
}