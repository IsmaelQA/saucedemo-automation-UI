/// <reference types="cypress" />
describe('Validar Login', () => {

  it('Login valido', () => {
    cy.loginValido(Cypress.env("user"), Cypress.env("password"));
    cy.validarLogin();
  
  });

  it('Login invalido', () => {
    cy.loginValido(Cypress.env("user"), Cypress.env("passwordInvalida"));
    cy.validarLoginInvalido();
  
  });
});