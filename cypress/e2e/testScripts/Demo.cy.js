///<reference types ="Cypress"/>

describe('Test suite', () =>{

    it('Launch Swag Labs application', () =>{
        cy.log("Launch Swag Labs Application.")
        cy.launchApplication()
    })
    
    })