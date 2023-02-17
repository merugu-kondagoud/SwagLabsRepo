export class CartPage {
    getCart = "a.shopping_cart_link";
    getYourCard = '//span[contains(text(), "Your Cart")]';
    checkoutButton = '#checkout';

    getCartLabel()
    {
        return cy.get('.cart_item_label');
    }

    clickCart() {
        cy.get(this.getCart).click();
    }

    validateYourCartPageProperties(expectedText)
    {
        cy.xpath(this.getYourCard).should("have.text", expectedText)
    }

    validateYourCartProducts(productName) {
        productName.forEach(element => {
            cy.validateYourCart(element);
        });
    }

    selectCheckOut() {
        cy.get(this.checkoutButton).click();
    }
}
