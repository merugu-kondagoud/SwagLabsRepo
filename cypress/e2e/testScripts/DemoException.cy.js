describe('Exception Handling In Cypress', () => {
    Cypress.on("fail", (e, runnable)=>{

        if(e.message.includes("A fixture file could not be found")){
            console.log("**please check your file path**")
        }
    })

    it("Handling Exception", () =>{
        cy.fixture('TestData').then((test)=>{
            console.log(test.userName)
            console.log(test.password)
        })
    })

    it('Navigate to webpage', () => {
        cy.visit('https://www.saucedemo.com/');

    })

})