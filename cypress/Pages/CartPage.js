class CartPage {
    getCart() {
        return cy.get('.shopping_cart_link')
    }
    getCheckOut() {
        return cy.get('#checkout')
    }
}
export default CartPage;