class CheckOutCompletePage {

    getPageTitle() {
        return cy.contains("Checkout: Complete!")
    }

    textMessage() {
        return cy.contains("THANK YOU FOR YOUR ORDER")
    }

    backToHome() {
        return cy.contains("Back Home").click()
    }
}
export default CheckOutCompletePage