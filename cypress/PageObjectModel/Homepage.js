class Home

{

    Productone(){

        return cy.get("#add-to-cart-sauce-labs-backpack")
    }

    Product2(){

        return cy.get("#add-to-cart-sauce-labs-fleece-jacket")
    }

    Cart(){

        return cy.get('[class="shopping_cart_link"]')
    }

}


export default Home;