export class YourCartPage {

    YourCartLogo = 'Your Cart'
    CheckoutButton = '#checkout'

    getValidate_CheckoutPage(Logo) {
        return cy.contains(this.YourCartLogo).should('have.text', Logo)
    }

    getValidate_YourCartProducts(productName) {
        productName.forEach(element => {
            cy.validateProduct(element);
        });
    }

    getClick_CheckoutButton() {
        return cy.get(this.CheckoutButton).click()
    }
}