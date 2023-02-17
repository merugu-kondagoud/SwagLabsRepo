export class ProductPage {

    ProductLogo = 'Products'
    ProductLabel = '.inventory_item_label'
    ProductName = 'div.inventory_item_name'
    CartLogo = '.shopping_cart_link'


    getValidateProductPage(Product) {
        cy.contains(this.ProductLogo).then(function (element) {
            const expectedText = element.text()
            expect(expectedText).to.equal(Product)
            cy.log("Logged in successfully")
        })
    }

    getSelectProducts(productName) {
        cy.get(this.ProductLabel).each(($el, index, $list) => {
            const textproduct = $el.find(this.ProductName).text()
            for (let element of productName) {
                if (textproduct == (element)) {
                    let addCartselector = "#add-to-cart-" + textproduct.replace(/\s/gm, "-").toLowerCase();
                    cy.log(addCartselector);
                    cy.get(addCartselector).click();
                }
            }
        })
    }

    getClick_CartButton() {
        return cy.get(this.CartLogo).click()
    }

}