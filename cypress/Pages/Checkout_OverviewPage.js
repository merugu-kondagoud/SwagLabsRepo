export class Checkout_OverviewPage {

    OverviewLogo = '.title'
    Quantity = '.cart_quantity'
    ProductPrice = '.inventory_item_price'
    Tax = '.summary_tax_label'
    TotalItemPrice = '.summary_total_label'
    Finish_Button = '#finish'

    getValidate_CheckoutOverview(ExpectedText) {
        cy.get(this.OverviewLogo).should('have.text', ExpectedText)
    }

    getValidate_ProductQuantity(quants) {
        var productQuantity = 0
        cy.get(this.Quantity).each(($el, index, $list) => {
            const quantity = $el.text()
            expect(quantity).to.be.equal(quants)
            productQuantity = Number(productQuantity) + Number(quantity)

        }).then(function () {
            cy.log("Total Number of products in the checkout page", productQuantity)
        })
    }

    getValidate_TotalPrice() {
        var TotalproductPrice = 0
        var SumofPricewithTax = 0
        cy.get(this.ProductPrice).each(($el, index, $list) => {
            const priceText = $el.text()
            var price1 = priceText.split("$")
            price1 = price1[1].trim()
            cy.log(price1)
            TotalproductPrice = Number(TotalproductPrice) + Number(price1)

        }).then(function () {
            cy.log("Total price of the products", TotalproductPrice)
        })
        cy.get(this.Tax).then(function (element) {
            const taxText = element.text()
            var taxPrice = taxText.split("$")
            taxPrice = taxPrice[1].trim()
            cy.log(taxPrice)
            SumofPricewithTax = Number(taxPrice) + Number(TotalproductPrice)
            cy.log(SumofPricewithTax)
        })
        cy.get(this.TotalItemPrice).then(function (element) {
            const totalItemText = element.text()
            var Totalprice = totalItemText.split("$")
            Totalprice = Totalprice[1].trim()
            cy.log(Totalprice)
            expect(Number(Totalprice)).to.be.equal(Number(SumofPricewithTax))
        })
    }

    getClick_FinishButton() {
        cy.get(this.Finish_Button).click()
    }
}