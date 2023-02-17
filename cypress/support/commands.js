// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>
//Launch Swag labs application 
Cypress.Commands.add('launchBrowser', () => { 
    cy.visit('https://www.saucedemo.com/')
})
//Launch Swag labs application
Cypress.Commands.add('launchApplication', () => {
    cy.visit('https://www.saucedemo.com/')
})
Cypress.Commands.add('performLogout', () => {
    cy.wait(3000)
    cy.get(".bm-burger-button").click()
    cy.get("#logout_sidebar_link").click()
})
Cypress.Commands.add('verifyLogOutSuccess', () => {
    cy.get("[value='Login']").should('be.visible')
}) 
