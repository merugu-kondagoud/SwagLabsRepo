class ProductsPage {
    addSauceBackPack = "#add-to-cart-sauce-labs-backpack"
    addSauceBikeLight = "#add-to-cart-sauce-labs-bike-light"
    buttonCart = ".shopping_cart_link"
    title = ".title"

    getSauceBackPack() {
        return cy.get(this.addSauceBackPack)
    }
    getSauceBikeLight() {
        return cy.get(this.addSauceBikeLight)
    }
    getCartButton() {
        return cy.get(this.buttonCart)
    }
    addProductsToCart() {
        this.getSauceBackPack().click()
        this.getSauceBikeLight().click()
        this.getCartButton().click()
    }
    verifyProductsPageNavigation() {
        cy.get(this.buttonCart).should('be.visible')
    }
    verifyBackToHome(expectedText) {
        cy.get(this.title).should('have.text', expectedText)
    }
}

export default ProductsPage;