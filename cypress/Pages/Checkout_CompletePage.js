export class Checkout_Completepage {

    completeLogo = '.title'
    thanksText = '.complete-header'

    validateCompleteLabel(logo) {
        cy.get(this.completeLogo).should('have.text', logo)
    }
    validateThanksMessage(expectedText) {
        cy.get(this.thanksText).should('have.text',expectedText)
    }

}