import LoginPO from "./loginPO"


const tests = require ('../../fixtures/sauceuser.json')

describe("login", () => {
    const loginPO = new LoginPO
    
    beforeEach( () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
    })

tests.forEach(test => {

it(test.name, () => {
    loginPO.insertusername().type(test.username);
    loginPO.insertpassword().type(test.password);
    loginPO.insertclickonloginbutton();

    if(test.name === 'locked_out_user'){
        loginPO.asserterror().should('have.text', test.expect)
    }  else{
        loginPO.assertlogin().should('have.text', test.expect)
    }  

})

})


})