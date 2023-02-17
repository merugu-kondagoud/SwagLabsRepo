class Product{

Backpack()
{
    return cy.get('[class="inventory_item_name"]')
}

BackpackPrise()
{
    return cy.get('[class="inventory_item_price"]')
}

Quantity()
{
    return cy.get('[class="cart_quantity"]')
}

//second product//
Bikelight()
{
    return cy.get('[class="inventory_item_name"]')
}


BikelightPrice()
    {
      return cy.get('[class="inventory_item_price"]')  
    }
 

BikelightQuantity()
{
    return cy.get('[class="cart_quantity"]')
}
    

//Total price//

Totalprice(){

    return cy.get('[class="summary_total_label"]')
}

Finish()
    {
       return cy.get("#finish") 
    }


}

export default Product;