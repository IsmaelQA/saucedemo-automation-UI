/// <reference types="cypress" />

describe('Validar carrinho', () => {

    beforeEach(() => {
        cy.loginValido(Cypress.env('user'), Cypress.env('password'));
    });

    it('Validar adicão de produto ao carrinho', () => {

        const dados = {
            produto: "Sauce Labs Backpack",
        };
        cy.adicionaraoCarrinho();
        cy.validaProdutoadicionadoNoCarrinho(dados.produto);
    });

    it('Validar remoção de produto do carrinho', () => {
        cy.removerProdutodoCarrinho();
        cy.validaCarrinhoVazio();
    });

});