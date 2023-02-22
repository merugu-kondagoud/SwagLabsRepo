class CheckoutOverviewPage {
    getFinish() {
        return cy.get('#finish')
    }
    verifyCheckoutComplte() {
        return cy.get('h2[class=complete-header]').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }
    getQuantity(Qty) {
        cy.get('.cart_quantity').each(($quantityElement, index, list) => {
            const text1 = $quantityElement.text()
            expect(text1).to.be.equal(Qty)
        })
    }
    getTotalPrice() {
        let total = 0
        let finalTotal = 0
        cy.get('.inventory_item_price').each(($e1, index, list) => {
            let text = $e1.text()
            console.log(text)
            let splitText = text.split('$')
            let afterSlice = splitText.slice(1)
            let ParsedText = parseFloat(afterSlice)
            console.log("parsed text*****" + ParsedText)
            total = total + ParsedText
            console.log("tp****" + total)
            finalTotal = total
        })
        console.log("total*****" + finalTotal)
    }
}
export default CheckoutOverviewPage;







