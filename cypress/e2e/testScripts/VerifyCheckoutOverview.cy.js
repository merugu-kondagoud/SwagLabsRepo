import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import UserInformationPage from "../../Pages/UserInformationPage";
import CheckoutOverviewPage from "../../Pages/CheckoutOverviewPage";
describe("Test suite",function()
{
    const hpp=new HomePage()
    const hp=new LoginPage()
    const cp=new CartPage()
    const up=new UserInformationPage()
    const co=new CheckoutOverviewPage()
    beforeEach(function ()
    {
        cy.launchApplication();
        cy.fixture('TestDat').then( function(data) {
            this.data=data
        })
        cy.fixture('UserInformationData').then(function(data1) {
            this.data1=data1
        })
        
        cy.fixture('Quantity').then(function(data3){
            this.data3=data3
        })
        
        
        
        })
        it('VerifyUserInformation',function()
        {
            hp.login(this.data.userName,this.data.password)
            hpp.addTwoProducts()
            cp.getCart().click()
            cp.clickCheckOut().click()
    
            up.enterFirstname().type(this.data1.Firstname)
            up.enterLastname().type(this.data1.Latname)
            up.enterZip().type(this.data1.Zip)
            up.clickContinue().click()
           
            co.getQuantity(this.data3.Qty)
            co.getTotal()
            co.clickFinish().click()
            co.verifyCheckoutcomplte().should('have.text','THANK YOU FOR YOUR ORDER')
            
        })
    })
