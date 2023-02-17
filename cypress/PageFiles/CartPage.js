class CartPage {
    getPageTitle() {
        return cy.contains("Your Cart")
    }
    getCheckoutButton() {
        return cy.contains("Checkout").click()
    }
    getListOfProductsAdded() {
        return cy.get(".shopping_cart_badge")
    }

}
export default CartPage