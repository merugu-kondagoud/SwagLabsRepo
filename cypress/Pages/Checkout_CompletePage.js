export class Checkout_Completepage {

    completeLogo = '.title'
    thanksText = '.complete-header'

    validateCompleteLabel(logo) {
        return cy.get(this.completeLogo).should('have.text', logo)
    }

    validateThanksMessage(expectedText) {
        return cy.get(this.thanksText).should('have.text', expectedText)
    }

}