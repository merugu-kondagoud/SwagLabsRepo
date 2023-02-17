class Checkout
{

Verifycheckout()
{
    return cy.get('[class="title"]')
}

Backtohome()
{
   return cy.get('#back-to-products') 
}

Verifyonhomepage()

{
    return cy.get('[class="header_secondary_container"]')
}
}

export default Checkout;