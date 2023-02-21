import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import UserInformationPage from "../../Pages/UserInformationPage";

describe("Test suite", function () {
    const homepage = new HomePage()
    const login = new LoginPage()
    const cart = new CartPage()
    const userinformation = new UserInformationPage()
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
        cy.fixture('UserInformationData').then(function (userinformation) {
            this.userinformation = userinformation
        })
    })
    it('Verify UserInformation', function () {
        cy.log("user login.")
        login.login(this.logindata.userName, this.logindata.password)
        cy.log("Adding two products to the cart.")
        homepage.addTwoProducts()
        cy.log("Click on cart button.")
        cart.clickCart()
        cy.log("Click on checkout button.")
        cart.clickCheckOut()
        cy.log("Enter Firstname.")
        userinformation.getFirstname().type(this.userinformation.Firstname)
        cy.log("Enter Latname.")
        userinformation.getLastname().type(this.userinformation.Latname)
        cy.log("Enter Zip.")
        userinformation.getZip().type(this.userinformation.Zip)
        cy.log("Clicking continue button.")
        userinformation.getContinue().click()
        cy.log("Verifying checkout overview page")
        userinformation.getCheckoutOverview().should('be.visible')
    })
})
