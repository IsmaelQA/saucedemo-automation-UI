/// <reference types="cypress" />

describe('Validar Login válido', () => {
  it('Authentication with migrated user', () => {
    cy.login(cy.env("user"), cy.env("password"));
   // cy.validarLogin();
   // cy.url().should('not.include', 'authenticationendpoint');

  });
});