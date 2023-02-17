class CheckOutCompletePage {
    title = ".title"
    backToHomeButton = "#back-to-products"

    checkOutCompleteVerify(expectedText) {
        cy.get(this.title).should('have.text', expectedText)
    }

    clickBackToHome() {
        cy.get(this.backToHomeButton).click()
    }
}

export default CheckOutCompletePage;