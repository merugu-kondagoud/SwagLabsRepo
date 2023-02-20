class CheckOutPage {
    getPageTitle() {
        return cy.contains("Checkout: Your Information")
    }
    firstName() {
        return cy.get("#first-name")
    }
    lastName() {
        return cy.get("#last-name")
    }
    postalCode() {
        return cy.get("#postal-code")
    }
    continue() {
        return cy.contains("Continue").click()
    }
}
export default CheckOutPage