/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"
import Home from "../../PageObjectModel/Homepage"
import Cart from "../../PageObjectModel/Cartpage"
import Details from "../../PageObjectModel/Adddetails"

describe("new application",()=>{


let Logindata
let Userinfor
  beforeEach(function(){

    cy.launchApplication()

   cy.fixture("Sauce").then(function(data){
    Logindata=data
   })
    cy.fixture("Userinfo").then(function(info){
    Userinfor=info
    
  })
})
 it('Adding Info',()=>{

       const Login=new Demo();
       const ln=new Home();
       const shop=new Cart();
       const data=new Details();
  
       Login.Setuser().type(Logindata.username)
       Login.Setpassword().type(Logindata.password)
       Login.Submit().click()
       Login.Verifyhomepage().should('be.visible',"SwagLabs")
       
       ln.Productone().click()
       ln.Product2().click()
       ln.Cart().click()

       shop.VerifyCart().should('have.text','Your Cart')
       shop.Checkout().click()

       //verifying adding userinfo .//
        data.Fistname().type(Userinfor.Firstname)
        data.Lastname().type(Userinfor.Lastname)
        data.Zipcode().type(Userinfor.Zipcode)
        data.Continue().click()



       })

    })      

