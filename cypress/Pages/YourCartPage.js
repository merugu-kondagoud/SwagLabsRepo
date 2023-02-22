export class YourCartPage {

    yourCartTitle = 'Your Cart'
    checkoutButton = '#checkout'

    validateCheckoutTitle(title) {
        return cy.contains(this.yourCartTitle).should('have.text', title)
    }

    validateYourCartProducts(productName) {
        productName.forEach(listOfProducts => {
            cy.validateProduct(listOfProducts);
        });
    }

    clickCheckout() {
        return cy.get(this.checkoutButton).click()
    }
}