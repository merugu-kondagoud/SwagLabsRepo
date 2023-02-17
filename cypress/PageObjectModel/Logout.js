class Logout
{

Clickmenu()
{
    return cy.get('#react-burger-menu-btn')

}

Selectlogout()

{
    return cy.get("#logout_sidebar_link")
}


VerifyLogosignin()

{
    return cy.get('[class="login_logo"]')
}





}

export default Logout;