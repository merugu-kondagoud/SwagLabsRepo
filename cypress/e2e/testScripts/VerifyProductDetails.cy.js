/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"
import Home from "../../PageObjectModel/Homepage"
import Cart from "../../PageObjectModel/Cartpage"
import Details from "../../PageObjectModel/Adddetails"
import Product from "../../PageObjectModel/Productdetails"



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
 it('Product details page',()=>{

       const Login=new Demo();
       const ln=new Home();
       const shop=new Cart();
       const data=new Details();
       const details=new Product();
  
       Login.Setuser().type(Logindata.username)
       Login.Setpassword().type(Logindata.password)
       Login.Submit().click()
       Login.Verifyhomepage().should('be.visible',"SwagLabs")

       ln.Productone().click()
       ln.Product2().click()
       ln.Cart().click()

       shop.VerifyCart().should('have.text','Your Cart')
       shop.Checkout().click()
       
        data.Fistname().type(Userinfor.Firstname)
        data.Lastname().type(Userinfor.Lastname)
        data.Zipcode().type(Userinfor.Zipcode)
        data.Continue().click()
        
        //Verifing first product details//
        details.Backpack().should('be.visible',"Sauce Labs Backpack")
        details.BackpackPrise().should('be.visible',"$29.99")
        details.Quantity().should('be.visible',"1")

        ///Verifing second product details//

        details.Bikelight().should('be.visible',"Sauce Labs Bike Light")
        details.BikelightPrice().should('be.visible',"$9.99")
        details.BikelightQuantity().should('be.visible',"1")

        details.Totalprice().should('be.visible',"Total:$43.18")
        details.Finish().click()



        

       })

    })      

