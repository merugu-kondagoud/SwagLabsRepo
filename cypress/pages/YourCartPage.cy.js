class YourCartPage {
    productsInCart = ".inventory_item_name"
    buttonCheckOut = "#checkout"

    validateFirstProductInCart(expectedText) {
        cy.get(this.productsInCart).should('have.contain', expectedText)
    }
    validateSecondProductInCart(expectedText) {
        cy.get(this.productsInCart).should('have.contain', expectedText)
    }
    clickCheckOutButton() {
        cy.get(this.buttonCheckOut).click()
    }
}
export default YourCartPage;