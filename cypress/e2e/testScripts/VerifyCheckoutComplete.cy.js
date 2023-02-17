import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import UserInformationPage from "../../Pages/UserInformationPage";
import CheckoutOverviewPage from "../../Pages/CheckoutOverviewPage";
import CheckoutCompletePage from "../../Pages/CheckoutCompletPagee";

describe("Test suite",function()
{
    const hpp=new HomePage()
    const hp=new LoginPage()
    const cp=new CartPage()
    const up=new UserInformationPage()
    const co=new CheckoutOverviewPage()
    const cop=new CheckoutCompletePage()
    beforeEach(function ()
    {
        cy.launchApplication();
        cy.fixture('TestDat').then( function(data) {
            this.data=data
        })
        cy.fixture('UserInformationData').then(function(data1) {
            this.data1=data1
        })
        
        })
    
    
        it('Verify successfull Checkout',function()
        {
            hp.login(this.data.userName,this.data.password)
            hpp.addTwoProducts()
            cp.getCart().click()
            cp.clickCheckOut().click()
    
            up.enterFirstname().type(this.data1.Firstname)
            up.enterLastname().type(this.data1.Latname)
            up.enterZip().type(this.data1.Zip)
            up.clickContinue().click()
            co.clickFinish().click()
            cop.clickBack().click()
            cop.verifyBack().should('be.be.visible')
        })
        afterEach(function ()
    {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    })
        
    })