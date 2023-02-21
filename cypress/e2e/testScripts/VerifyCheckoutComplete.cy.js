import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import UserInformationPage from "../../Pages/UserInformationPage";
import CheckoutOverviewPage from "../../Pages/CheckoutOverviewPage";
import CheckoutCompletePage from "../../Pages/CheckoutCompletPagee";

describe("Test suite", function () {
    const homepage = new HomePage()
    const login = new LoginPage()
    const cart = new CartPage()
    const userinformation = new UserInformationPage()
    const checkoutoverview = new CheckoutOverviewPage()
    const checkoutcomplete = new CheckoutCompletePage()
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
        cy.fixture('UserInformationData').then(function (userinformation) {
            this.userinformation = userinformation
        })
    })
    it('Verify Checkout', function () {
        cy.log("user login.")
        login.login(this.logindata.userName, this.logindata.password)
        cy.log("Adding two products.")
        homepage.addTwoProducts()
        cy.log("click on cart.")
        cart.getCart().click()
        cy.log("click on checkout button.")
        cart.getCheckOut().click()
        cy.log("Enter Username.")
        userinformation.getFirstname().type(this.userinformation.Firstname)
        cy.log("Enter Latname.")
        userinformation.getLastname().type(this.userinformation.Latname)
        cy.log("Enter Zip.")
        userinformation.getZip().type(this.userinformation.Zip)
        cy.log("Clicking continue button.")
        userinformation.getContinue().click()
        cy.log("Clicking finish button")
        checkoutoverview.getFinish().click()
        cy.log("Clicking back button.")
        checkoutcomplete.clickOnBack()
        cy.log("Verifying navigated back to home.")
        checkoutcomplete.verifyBackToHome()
    })
    afterEach(function () {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})

