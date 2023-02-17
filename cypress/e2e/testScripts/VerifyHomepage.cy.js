///<reference types="cypress"/>
import HomePage from "../../Pages/HomePage";
import LoginPage from "../../Pages/LoginPage";

describe("Test suite",function()
{
    const hpp=new HomePage()
    const hp=new LoginPage()
    beforeEach(function ()
    {
        cy.launchApplication();
        cy.fixture('TestDat').then( function(data) {
            this.data=data})
        })


    it('Verify Home page',function()
    {
    hp.login(this.data.userName,this.data.password)
    //verifying Homepage
    hpp.validateHomepage().should("be.visible")
    //Adding products to the cart
    hpp.addTwoProducts()
    //verifing items count in the cart
    hpp.validateCart().should('contain','2') 
    })

    
})
    
