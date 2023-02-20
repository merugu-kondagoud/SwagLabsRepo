class ProductPage {
    getPageTitle() {
        return cy.contains("Products")
    }
    productsList() {
        return cy.get(".inventory_list")
    }
    addToCart() {
        return cy.get(".shopping_cart_link").click()
    }

}
export default ProductPage