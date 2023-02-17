/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"
import Home from "../../PageObjectModel/Homepage"
describe("new application",()=>{

  })

    beforeEach(function(){

      cy.launchApplication() 
      
    })
   it('Add two products',()=>{
      cy.fixture("Sauce").then(function(data){
         this.Logindata=data
         const Login=new Demo();
         const Ln=new Home();
    
         Login.Setuser().type(this.Logindata.username)
         Login.Setpassword().type(this.Logindata.password)
         Login.Submit().click()
         Login.Verifyhomepage().should('be.visible',"SwagLabs")
         
         //Selecting two product and adding to cart//
         Ln.Productone().click() 
         Ln.Product2().click()
         Ln.Cart().click()
         
         
         

        
      })

    })

  
