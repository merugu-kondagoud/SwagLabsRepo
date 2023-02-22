import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
describe("Cart", function () {
    const homepage = new HomePage()
    const login = new LoginPage()
    const cart = new CartPage()
    beforeEach(function () {
        cy.launchApplication();
        cy.fixture('TestData').then(function (logindata) {
            this.logindata = logindata
        })
    })
    it('Verify Cart', function () {
        cy.log("user login.")
        login.login(this.logindata.userName, this.logindata.password)
        cy.log("Adding Two products to cart.")
        homepage.addTwoProducts()
        cy.log("click on cart.")
        cart.clickCart()
        cy.log("click on checkout button.")
        cart.clickCheckOut()
    })
    afterEach(function () {
        cy.logoutFromApplication()
    })
})