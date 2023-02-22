export class BackHomePage {

    backButton = '#back-to-products'
    productTitle = '.title'

    clickBackButton() {
       return cy.get(this.backButton).click()
    }

    validateProductTitle(title) {
        return cy.get(this.productTitle).should('have.text', title)
    }
}