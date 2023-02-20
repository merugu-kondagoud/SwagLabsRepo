export class ProductPage {

    productLogo = 'Products'
    productLabel = '.inventory_item_label'
    productName = 'div.inventory_item_name'
    cartLogo = '.shopping_cart_link'


    validateProductPage(Product) {
        cy.contains(this.productLogo).then(function (productElement) {
            const productText = productElement.text()
            expect(productText).to.equal(Product)
            cy.log("Logged in successfully")
        })
    }

    clickProducts(productName) {
        cy.get(this.productLabel).each((productList, index, $list) => {
            const productText = productList.find(this.productName).text()
            for (let element of productName) {
                if (productText == (element)) {
                    let addCartselector = "#add-to-cart-" + productText.replace(/\s/gm, "-").toLowerCase();
                    cy.log(addCartselector);
                    cy.get(addCartselector).click();
                }
            }
        })
    }

    clickCartButton() {
        return cy.get(this.cartLogo).click()
    }

}