/// <reference types="cypress" />

describe('Validar checkout', () => {

    beforeEach(() => {
        cy.loginValido(Cypress.env('user'), Cypress.env('password'));
    });

    it('ValidaPreenchimentoFormulariodeCheckout', () => {
        cy.adicionaraoCarrinho();
        cy.iniciaoCheckout();
        cy.preencheFormulario();
        cy.validapaginaCheckout();
    });

    it('ValidarValorTotal', () => {

         const dados = {
            valorDoItem: "29.99",
        };
        cy.adicionaraoCarrinho();
        cy.iniciaoCheckout();
        cy.preencheFormulario();
        cy.validarSubtotal(dados.valorDoItem);
    });

    it('ValidarFinalizacaoDaCompra', () => {
        
        cy.adicionaraoCarrinho();
        cy.iniciaoCheckout();
        cy.preencheFormulario();
        cy.validarFinalizacaoDaCompra();
    });

});