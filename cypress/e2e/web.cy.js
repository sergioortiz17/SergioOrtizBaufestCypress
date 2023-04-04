describe('Technical Test Sergio Ortiz',() => {
    
    // EJERCICIO 1
    const numero = Math.floor(Math.random()*10000)
    it ('SignUp Login Logout Add product cart and verify', () =>{
        cy.visit('https://www.demoblaze.com/index.html');
        //Registrarse
        cy.get('#signin2').click();
        cy.wait(2000);
        let user =`Sergio${numero}`;
        cy.get('#sign-username').type(user);
        cy.get('#sign-password').type('Qwerty123');
        cy.get('[type="button"]').contains('Sign up').click();
        cy.log(user)
        //Loguearse
        cy.get('#login2').click();
        cy.wait(2000);
        cy.get('#loginusername').type(user);
        cy.get('#loginpassword').type('Qwerty123');
        cy.get('[type="button"]').contains('Log in').click();
        //Desoguearse
        cy.wait(2000);
        cy.get('#logout2').click({force:true});
        //Add laptop
        cy.contains('Laptops').click()
        cy.wait(1000);
        const laptopsArray = ['Sony vaio i5', 'Sony vaio i7', 'MacBook air','Dell i7 8gb','2017 Dell 15.6 Inch','MacBook Pro'];
        let aleatorio = Math.floor(Math.random() * 6);
        let laptop = laptopsArray[aleatorio];
        cy.log(laptop);
        cy.contains(laptop).click();
        cy.contains('Add to cart').click();
        //Verify cart
        cy.get('#cartur').click();
        cy.wait(2000);
        cy.contains(laptop).should('exist');
        cy.log('si se agrego al carrito la '+laptop);

    });

    //EJERCICIO 2

    it('Realizar POST al path /v2/pet', () => {
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/pet',
          body: {
            "id": 1,
            "category": {
              "id": 0,
              "name": "gatoFenix"
            },
            "name": "gatoFenix",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "gatoFenix"
              }
            ],
            "status": "available"
          }
        }).then((response) => {
          expect(response.status).to.eq(200) //Status code esperado.
          expect(response.body.name).to.eq('gatoFenix')
        })
      })

      
      it('Realizar GET al path /v2/pet/{petId}', () => {
        const petId = 1 // ID de la mascota existente
        cy.request({
          method: 'GET',
          url: `https://petstore.swagger.io/v2/pet/${petId}`
        }).then((response) => {
          expect(response.status).to.eq(200) //Status code esperado.
          expect(response.body.id).to.eq(petId)
        })
      })
    

      it('Realizar PUT al path /v2/pet', () => {
        const petId = 1 // ID de la mascota existente a modificar
        cy.request({
          method: 'PUT',
          url: `https://petstore.swagger.io/v2/pet`,
          body: {
            "id": petId,
            "category": {
              "id": 0,
              "name": "Rex"
            },
            "name": "Rex",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "Rex"
              }
            ],
            "status": "available"
          }
        }).then((response) => {
          expect(response.status).to.eq(200) //Status code esperado.
          expect(response.body.name).to.eq('Rex')
        })
      })


});
