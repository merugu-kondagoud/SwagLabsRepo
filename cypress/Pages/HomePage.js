


class HomePage {
    validateHomepage() {
        return cy.get('.app_logo').should("be.visible")
    }
    addTwoProducts() {

        cy.get('div.inventory_item_label').each(($product, index, list) => {
            console.log($product.text)
            if ($product.text().includes('Sauce Labs Backpack')) {
                cy.get('#add-to-cart-sauce-labs-backpack').click()
            }
            if ($product.text().includes('Sauce Labs Bike Light')) {
                cy.get('#add-to-cart-sauce-labs-bike-light').click()
            }
        })
    }
    validateCart() {
        return cy.get('.shopping_cart_link').should('contain', '2')
    }

}
export default HomePage;