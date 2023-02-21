export class CartPage {
    
    shoppingCartLink = "a.shopping_cart_link";
    CardTitle = '//span[contains(text(), "Your Cart")]';
    checkoutButton = '#checkout';

    getCartLabel() {
        return cy.get('.cart_item_label');
    }

    clickCart() {
        cy.get(this.shoppingCartLink).click();
    }

    validateCartPageTitle(expectedText) {
        cy.xpath(this.CardTitle).should("have.text", expectedText)
    }

    validateYourCartProducts(productName) {
        productName.forEach(element => {
            cy.validateYourCart(element);
        });
    }

    clickCheckOut() {
        cy.get(this.checkoutButton).click();
    }
}
