export class BackHomePage {

    backHomeButton = '#back-to-products'
    productLogo = '.title'

    clickBackHomeButton() {
       return cy.get(this.backHomeButton).click()
    }

    validateProductLabel(logo) {
        return cy.get(this.productLogo).should('have.text', logo)
    }
}