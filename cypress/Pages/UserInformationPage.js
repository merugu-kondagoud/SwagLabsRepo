class UserInformationPage
{
    enterFirstname()
    {
        return cy.get('#first-name')
    
    }
    enterLastname()
    {
        return cy.get('#last-name') 
    }
    enterZip()
    {
        return cy.get('#postal-code')
    }
clickContinue()
{
    return cy.get('#continue')
}
verifyCheckoutOverview()
{
    return cy.get('.header_secondary_container')
}
}
export default UserInformationPage;