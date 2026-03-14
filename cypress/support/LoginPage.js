Cypress.Commands.add('loginValido', (userName, password) => {
  cy.visit(Cypress.env('loginUrl'));

 // cy.url().should('include', 'authenticationendpoint');

  cy.get('#user-name').type(userName);
  cy.get('#password').type(password);
  cy.get('#login-button').click({ force: true });
});

Cypress.Commands.add('validarLogin', (userName, password) => {
  
cy.url().should('include', '/inventory.html')
cy.get('.inventory_list').should('be.visible')
cy.get('.app_logo').should('be.visible') // "Swag Labs"

});
