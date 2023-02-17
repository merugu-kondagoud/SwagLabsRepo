export class Checkout_Completepage {

    CompleteLogo = '.title'
    Thanks_Message = '.complete-header'

    getValidate_CompleteLabel() {
        cy.get(this.CompleteLogo).should('have.text', 'Checkout: Complete!')
    }
    getValidate_ThanksMessage() {
        cy.get(this.Thanks_Message).should('have.text', 'THANK YOU FOR YOUR ORDER')
    }

}