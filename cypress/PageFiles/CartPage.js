class CartPage {
    getPageTitle() {
        return cy.contains("Your Cart")
    }
    checkout() {
        return cy.contains("Checkout").click()
    }
    listOfProductsAdded() {
        return cy.get(".shopping_cart_badge")
    }

}
export default CartPage