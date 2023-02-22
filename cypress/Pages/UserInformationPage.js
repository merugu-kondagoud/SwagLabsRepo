class UserInformationPage {
    getFirstname() {
        return cy.get('#first-name')
    }
    getLastname() {
        return cy.get('#last-name')
    }
    getZip() {
        return cy.get('#postal-code')
    }
    getContinue() {
        return cy.get('#continue')
    }
    getCheckoutOverview() {
        return cy.get('.header_secondary_container')
    }
}
export default UserInformationPage;