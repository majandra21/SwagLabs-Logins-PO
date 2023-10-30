class LoginPO{

    insertusername() {
        return cy.get('[data-test="username"]')
    }

    insertpassword(){
        return cy.get('[data-test="password"]')
    }

    insertclickonloginbutton(){
        return cy.get('#login-button').click()
    }

    assertlogin(){
        return cy.contains('Products')
    }

    asserterror(){
        return cy.contains('Epic sadface: Sorry, this user has been locked out.')
    }



} 

export default LoginPO