class CartPage
{
    getCart()
    {
        return cy.get('.shopping_cart_link')
    }
    clickCheckOut()
    {
    return cy.get('#checkout')
    }
    
}
export default CartPage;