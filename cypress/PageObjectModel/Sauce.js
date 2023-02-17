
class Demo{

    Setuser()
    {
      return cy.get("#user-name")
    }

    Setpassword()

    {
       return cy.get("#password")
    }

    Submit()
    {
        return cy.get('[type="submit"]')
    }

    Verifyhomepage()
    {
  return cy.get('[class="app_logo"]')
    }

}

export default Demo;