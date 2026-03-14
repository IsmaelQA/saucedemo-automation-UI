Cypress.Commands.add('login', (email, password) => {
  cy.visit(Cypress.env('loginUrl'));

  cy.url().should('include', 'authenticationendpoint');

  cy.get('#user-name').type(userName);
  cy.get('#password').type(password);
  cy.get('#sign-in-button').click({ force: true });
});
