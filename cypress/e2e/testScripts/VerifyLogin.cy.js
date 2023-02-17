/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"

describe("new application",()=>{

  })

    beforeEach(function(){

     cy.launchApplication()
      
    })
   it('Login page',()=>{
      cy.fixture("Sauce").then(function(data){
         this.Logindata=data
         const Login=new Demo();
         
    
         Login.Setuser().type(this.Logindata.username)
         Login.Setpassword().type(this.Logindata.password)
         Login.Submit().click()
         Login.Verifyhomepage().should('be.visible',"SwagLabs")



      
 
      })

    })

  
