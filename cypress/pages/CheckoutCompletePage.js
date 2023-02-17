export class CheckoutCompletePage {
  completeMessage = ".complete-header";
  backHomeButton = "#back-to-products"

  validateCompleteMessage(expectedText) {
    cy.get(this.completeMessage).should("have.text", expectedText);
  }

  selectBackHome() {
    cy.get(this.backHomeButton).click();
  }
}
