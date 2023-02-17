class CheckoutCompletePage
{
    clickBack()
    {
        return cy.get('#back-to-products')
    }
    verifyBack()
    {
        return cy.get('.header_secondary_container')
    }
    
}
export default CheckoutCompletePage;