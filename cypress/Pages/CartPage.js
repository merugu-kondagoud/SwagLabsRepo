class CartPage {
    clickCart() {
        return cy.get('.shopping_cart_link').click()
    }
    clickCheckOut() {
        return cy.get('#checkout').click()
    }
}
export default CartPage;