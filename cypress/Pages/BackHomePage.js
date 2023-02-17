export class BackHomePage {

    BackHomeButton = '#back-to-products'
    ProductLogo = '.title'

    getClick_BackHomeButton() {
        cy.get(this.BackHomeButton).click()
    }

    getValidate_ProductLabel(Logo) {
        cy.get(this.ProductLogo).should('have.text', Logo)
        cy.log("Back to product page successfully")
    }
}