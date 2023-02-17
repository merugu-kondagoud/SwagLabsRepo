class ProductPage {
    getPageTitle() {
        return cy.contains("Products")
    }
    getProducts() {
        return cy.get(".inventory_list")
    }
    getAddToCartButton() {
        return cy.get(".shopping_cart_link").click()
    }
    
}
export default ProductPage