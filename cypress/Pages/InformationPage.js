export class InformationPage {

    informationLogo = ".title"
    firstName = '#first-name'
    lastName = '#last-name'
    ZIP_Code = '#postal-code'
    continueButton = '#continue'

    validateInformationpage(successMessage) {
        return cy.get(this.informationLogo).should('have.text', successMessage)
    }

    getInformation(firstName, LastName, ZIPcode) {
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(LastName)
        cy.get(this.ZIP_Code).type(ZIPcode)
    }

    clickContinue() {
        return cy.get(this.continueButton).click()
    }
}