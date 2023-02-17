export class CheckoutPage {

    firstName = "#first-name";
    lastName = "#last-name";
    postalCode = "#postal-code";
    continueButton = "#continue"
    pageName = '//span[contains(text(), "Your Information")]'

    validateLandingPage(expectedText) {
        cy.xpath(this.pageName).should("have.text", expectedText)
    }

    enterUserInformation(firstName, lastName, postalCode) {
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.postalCode).type(postalCode);
    }

    selectContinueButton() {
        cy.get(this.continueButton).click()
    }
}
