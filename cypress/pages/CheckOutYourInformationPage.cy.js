class CheckOutYourInformationPage {
    textFirstName = "#first-name"
    textLastName = "#last-name"
    textPostalCode = "#postal-code"
    buttonContinue = "#continue"

    getFirstName() {
        return cy.get(this.textFirstName)
    }
    getLastName() {
        return cy.get(this.textLastName)
    }
    getPostalCode() {
        return cy.get(this.textPostalCode)
    }
    getContinueButton() {
        return cy.get(this.buttonContinue)
    }
    enterYourInformation(firstName, lastName, postalCode) {
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getPostalCode().type(postalCode)
        this.getContinueButton().click()
    }
}
export default CheckOutYourInformationPage;