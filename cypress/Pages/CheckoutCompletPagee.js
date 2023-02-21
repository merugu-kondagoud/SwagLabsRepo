class CheckoutCompletePage {
    clickOnBack() {
        return cy.get('#back-to-products').click()
    }
    verifyBackToHome() {
        return cy.get('.header_secondary_container').should('be.be.visible')
    }
}
export default CheckoutCompletePage;