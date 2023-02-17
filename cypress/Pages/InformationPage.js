export class InformationPage {

    InformationLogo = ".title"
    Firstname = '#first-name'
    Lastname = '#last-name'
    ZIP_Code = '#postal-code'
    Continue_Button = '#continue'

    getValidate_Informationpage(successMessage) {
        return cy.get(this.InformationLogo).should('have.text', successMessage)
    }

    getInformation(firstName, LastName, ZIPcode) {
        cy.get(this.Firstname).type(firstName)
        cy.get(this.Lastname).type(LastName)
        cy.get(this.ZIP_Code).type(ZIPcode)
    }
    
    getClick_Continue() {
        return cy.get(this.Continue_Button).click()
    }
}