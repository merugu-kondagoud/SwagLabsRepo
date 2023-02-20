export class Checkout_OverviewPage {

    overViewLogo = '.title'
    quantity = '.cart_quantity'
    productPrice = '.inventory_item_price'
    tax = '.summary_tax_label'
    totalItemPrice = '.summary_total_label'
    finishButton = '#finish'

    validateCheckoutOverview(ExpectedText) {
        cy.get(this.overViewLogo).should('have.text', ExpectedText)
    }

    validateProductQuantity(noOfQuantity) {
        var productQuantity = 0
        cy.get(this.quantity).each((qunatity, index, $list) => {
            const quantityText = qunatity.text()
            expect(quantityText).to.be.equal(noOfQuantity)
            productQuantity = Number(productQuantity) + Number(quantityText)

        }).then(function () {
            cy.log("Total Number of products in the checkout page", productQuantity)
        })
    }

    validateTotalPrice() {
        var totalProductPrice = 0
        var sumOfPricewithTax = 0
        cy.get(this.productPrice).each((priceElement, index, $list) => {
            const priceText = priceElement.text()
            var price1 = priceText.split("$")
            price1 = price1[1].trim()
            cy.log(price1)
            totalProductPrice = Number(totalProductPrice) + Number(price1)

        }).then(function () {
            cy.log("Total price of the products", totalProductPrice)
        })
        cy.get(this.tax).then(function (taxElement) {
            const taxText = taxElement.text()
            var taxPrice = taxText.split("$")
            taxPrice = taxPrice[1].trim()
            cy.log(taxPrice)
            sumOfPricewithTax = Number(taxPrice) + Number(totalProductPrice)
            cy.log(sumOfPricewithTax)
        })
        cy.get(this.totalItemPrice).then(function (totalPriceElement) {
            const totalItemText = totalPriceElement.text()
            var totalPrice = totalItemText.split("$")
            totalPrice = totalPrice[1].trim()
            cy.log(totalPrice)
            expect(Number(totalPrice)).to.be.equal(Number(sumOfPricewithTax))
        })
    }

    clickFinishButton() {
        cy.get(this.finishButton).click()
    }
}