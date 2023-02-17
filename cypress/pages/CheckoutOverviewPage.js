export class CheckoutOverviewPage {

    overviewPageProperty = ".header_secondary_container"
    itemPrice = ".inventory_item_price"
    totalPrice = ".summary_total_label"
    finishButton = '#finish'
    cartItem = '.cart_item'
    cartQuantity = '.cart_quantity'

    validateProductQuantity(productQuantity) {
        cy.get(this.cartItem).each(($el, index, $list) => {
            const textproduct = $el.find(this.cartQuantity).text()

            if (textproduct.includes(productQuantity)) {
                expect(textproduct).to.be.equal(productQuantity)
            }
        })
    }

    calculateProductTotal() {
        var sumofProducts = 0;
        var tax = 0;
        var sumOfProductAndTax = 0;

        cy.get(this.itemPrice).each(($e1, index, $list) => {
            const getText = $e1.text();
            var splitText = getText.split("$")
            splitText = splitText[1].trim()
            sumofProducts = Number(sumofProducts) + Number(splitText)

        }).then(function () {
            cy.get(".summary_tax_label").each(($e1, index, $list) => {
                const getText = $e1.text();
                var splitText = getText.split("$")
                splitText = splitText[1].trim()
                tax = Number(tax) + Number(splitText)

            }).then(function () {
                sumOfProductAndTax = sumOfProductAndTax + sumofProducts + tax;
            })
        })
        //METHOD TO TRIM THE TOTAL
        cy.get(this.totalPrice).then(function (element) {
            const copyText = element.text();
            var splitText = copyText.split("$")
            var total = splitText[1].trim()

            expect(Number(total)).to.equal(Number(sumOfProductAndTax));
        })
    }

    selectFinish() {
        cy.get(this.finishButton).click()
    }

    validateOverviewPageProperties(expectedText) {
        cy.get(this.overviewPageProperty).should("have.text", expectedText)
    }
}
