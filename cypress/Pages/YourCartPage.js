export class YourCartPage {

    yourCartLogo = 'Your Cart'
    checkoutButton = '#checkout'

    validateCheckout(Logo) {
        return cy.contains(this.yourCartLogo).should('have.text', Logo)
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