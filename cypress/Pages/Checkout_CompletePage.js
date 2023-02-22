export class Checkout_Completepage {

    checkoutCompleteTitle = '.title'
    thanksText = '.complete-header'

    validateCompleteTitle(title) {
        return cy.get(this.checkoutCompleteTitle).should('have.text', title)
    }

    validateOrderCompleteMessage(expectedText) {
        return cy.get(this.thanksText).should('have.text', expectedText)
    }

}