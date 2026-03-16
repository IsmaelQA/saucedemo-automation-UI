Cypress.Commands.add('loginValido', (userName, password) => {

  cy.visit(Cypress.env('loginUrl'));
  cy.get('#user-name').type(userName);
  cy.get('#password').type(password);
  cy.get('#login-button').click({ force: true });
});

Cypress.Commands.add('validarLogin', () => { 
cy.url().should('include', '/inventory.html')
cy.get('.inventory_list').should('be.visible')
cy.get('.app_logo').should('be.visible') // "Swag Labs"

});

Cypress.Commands.add('validarLoginInvalido', () => { 

 cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username and password do not match any user in this service');
});
