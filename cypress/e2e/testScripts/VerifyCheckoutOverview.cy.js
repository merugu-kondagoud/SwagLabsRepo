import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import UserInformationPage from "../../Pages/UserInformationPage";
import CheckoutOverviewPage from "../../Pages/CheckoutOverviewPage";
describe("Test suite", function () {
    const homepage = new HomePage()
    const login = new LoginPage()
    const cart = new CartPage()
    const userinformation = new UserInformationPage()
    const checkoutoverview = new CheckoutOverviewPage()
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
        cy.fixture('UserInformationData').then(function (userinformation) {
            this.userinformation = userinformation
        })
        cy.fixture('Quantity').then(function (quantity) {
            this.quantity = quantity
        })
    })
    it('Verify checkout overview', function () {
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
        cy.log("get the quantiy")
        checkoutoverview.getQuantity(this.quantity.Qty)
        cy.log("Calculating total price")
        checkoutoverview.getTotalPrice()
        cy.log("Clicking finish button")
        checkoutoverview.getFinish().click()
        cy.log("Validating checkout complete page.")
    })
})
