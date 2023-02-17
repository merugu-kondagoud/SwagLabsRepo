import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
describe("Test suite",function()
{
    const hpp=new HomePage()
    const hp=new LoginPage()
    const cp=new CartPage()
    beforeEach(function ()
    {
        cy.launchApplication();
        cy.fixture('TestDat').then( function(data) {
            this.data=data})
        
        })
        
         it('VerifyCart',function()
        {
            hp.login(this.data.userName,this.data.password)
            hpp.addTwoProducts()
            cp.getCart().click()
            cp.clickCheckOut().click()
            
             })
    })