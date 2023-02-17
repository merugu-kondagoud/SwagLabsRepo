///<reference types="cypress"/>
import LoginPage from "../../Pages/LoginPage";

describe('TestSuite', function () {

    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestDat').then(function (data) {
            this.data = data
        })
    })
 it('Verify Login', function () {
       
       const hp = new LoginPage()
        
        hp.login(this.data.userName, this.data.password)
    })
    
})




