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

import { CartPage } from "../pages/CartPage"
import { BackToHomePage } from "../pages/BackToHomePage";

const cartPage = new CartPage();
const backToHome = new BackToHomePage();

Cypress.Commands.add('launchBrowser', () => {
    cy.on('uncaught:exception', (err, runnable) => { return false });
    cy.visit('https://www.saucedemo.com')
})

Cypress.Commands.add('validateYourCart', (productName) => {
    cartPage.getCartLabel().each((item, index) => {
        const textProduct = item.find('.inventory_item_name').text()
        if (textProduct.includes(productName)) {
            expect(textProduct).to.be.equal(productName)
        }
    })
})

Cypress.Commands.add('logout', () => {
    backToHome.getBurgerMenuButton().click({ force: true });
    backToHome.getLogoutButton().click({ force: true });
})


