export class HomePage {

    product = '//span[contains(text(),"Products")]';
    labelOfProducts = '.inventory_item_label';
    inventoryItemName = '.inventory_item_name';


    validateHomePageProperties() {
        cy.xpath(this.product).should("have.text", "Products");
    }

    addproduct(productName) {
        cy.get(this.labelOfProducts).each(($el, index, $list) => {
            const textproduct = $el.find(this.inventoryItemName).text()
            for (let element of productName) {
                if (textproduct == (element)) {
                    let addCartselector = "#add-to-cart-" + textproduct.replace(/\s/gm, "-").toLowerCase();
                    console.log(addCartselector);
                    cy.get(addCartselector).click();
                }
            }
        })
    }
}
