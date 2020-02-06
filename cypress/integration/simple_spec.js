describe('Los estudiantes login', function() {
    //login fallido
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
    //login correcto
    it('Visits los estudiantes and succeds at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("vargaspintoadriana@gmail.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("Avargas1392*")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.botonIngresar').should('not.be.visible')
    })
})

//Se crea cuenta manualmente
describe('Los estudiantes registro', function() {
    it('Visits los estudiantes and fails register', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
            //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp > .loginForm').find('input[name="nombre"]').click().type("Adriana")
        cy.get('.cajaSignUp > .loginForm').find('input[name="apellido"]').click().type("Vargas")
        cy.get('.cajaSignUp > .loginForm').find('input[name="correo"]').click().type("varca.software@gmail.com")
        cy.get('.no_bold').click()
        cy.get('div.jsx-527058112 > .form-group > .has-success > .form-control').select('16')
        cy.get('.cajaSignUp > .loginForm').find('input[name="password"]').click().type("Avargas1392*")
        cy.get('label.jsx-520551651').click()
        cy.get('.cajaSignUp > .loginForm > .logInButton').click()
        cy.get('.sweet-alert').contains('Ocurrió un error activando tu cuenta')
    })
})