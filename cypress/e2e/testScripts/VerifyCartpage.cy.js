/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"
import Home from "../../PageObjectModel/Homepage"
import Cart from "../../PageObjectModel/Cartpage"

describe("new application",()=>{

})

  beforeEach(function(){

    cy.launchApplication()
    
  })
 it('Cart page',()=>{
    cy.fixture("Sauce").then(function(data){
       this.Logindata=data
       const Login=new Demo();
       const ln=new Home();
         const shop=new Cart();
  
       Login.Setuser().type(this.Logindata.username)
       Login.Setpassword().type(this.Logindata.password)
       Login.Submit().click()
       Login.Verifyhomepage().should('be.visible',"SwagLabs")
       
       ln.Productone().click()
       ln.Product2().click()
       ln.Cart().click()

      //verifying cartpage,Checkout//
       shop.VerifyCart().should('have.text','Your Cart')
       shop.Checkout().click()

       
    })
  })