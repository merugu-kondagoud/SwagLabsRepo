class CheckOutOverviewPage {
    getPageTitle() {
        return cy.contains("Checkout: Overview")
    }
    finish() {
        return cy.contains("Finish").click()
    }
    cartItemQuantity() {
        return cy.get(".cart_quantity")
    }
    cartItemPrice() {
        return cy.get(".inventory_item_price")
    }
    cartItems() {
        return cy.get(".cart_item")
    }
    cartTotal() {
        return cy.get(".summary_total_label")
    }
    cartList() {
        return cy.get(".cart_list")
    }
}
export default CheckOutOverviewPage