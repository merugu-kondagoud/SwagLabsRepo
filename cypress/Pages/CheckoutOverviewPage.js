 class CheckoutOverviewPage
{
    
    clickFinish()
    {
      return  cy.get('#finish')
    }
    verifyCheckoutcomplte()
    {
       return cy.get('h2[class=complete-header]')
    }
    
     getQuantity(Qty)
    {
       cy.get('.cart_quantity').each(($e1,index,list)=>{
        const text1=$e1.text()
        expect(text1).to.be.equal(Qty)

       })
    }
      
    getTotal()
    {
        
        let total=0
        let finalTotal=0
        cy.get('.inventory_item_price').each(($e1,index,list)=>{
        let text=$e1.text()
        console.log(text)
        let splitText = text.split('$')
        let afterSlice=splitText.slice(1)
        let ParsedText = parseFloat(afterSlice)
        console.log("parsed text*****" +ParsedText )
        total= total+ParsedText
        console.log("tp****"+total)
        finalTotal=total
            })
        console.log("total*****"+finalTotal)
        // assert.equal(total,39.98,"Actual and expected values are not matched")
    }
}
export default CheckoutOverviewPage;

       
        
        
        
     
    
    