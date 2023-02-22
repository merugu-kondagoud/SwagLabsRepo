export class HomePage {

    product = '//span[contains(text(),"Products")]';
    labelOfProducts = '.inventory_item_label';
    inventoryItemName = '.inventory_item_name';

    validateHomePageTitle() {
        cy.xpath(this.product).should("have.text", "Products");
    }

    addproduct(productName) {
        cy.get(this.labelOfProducts).each((itemTitle, index) => {
            const textProduct = itemTitle.find(this.inventoryItemName).text()
            for (let element of productName) {
                if (textProduct == (element)) {
                    let addCartSelector = "#add-to-cart-" + textProduct.replace(/\s/gm, "-").toLowerCase();
                    console.log(addCartSelector);
                    cy.get(addCartSelector).click();
                }
            }
        })
    }
}
