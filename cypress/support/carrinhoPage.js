const elements = {
    //Carrinho list
    carrinho: {
        botaoAdicionarNoCarrinho: "#add-to-cart-sauce-labs-backpack",
        botaoAbrirCarrinho: "#shopping_cart_container",
        labelCartItem: "div[class='inventory_item_name']",
        botaoRemoverdoCarrinho: "#remove-sauce-labs-backpack",
    },
};

Cypress.Commands.add('adicionaraoCarrinho', () => {

    cy.clickElement(elements.carrinho.botaoAdicionarNoCarrinho)
    cy.clickElement(elements.carrinho.botaoAbrirCarrinho)
});

Cypress.Commands.add('validaProdutoadicionadoNoCarrinho', (nomeProduto) => {

    cy.validateMessage(elements.carrinho.labelCartItem, nomeProduto)
});

Cypress.Commands.add('removerProdutodoCarrinho', () => {
    cy.clickElement(elements.carrinho.botaoAdicionarNoCarrinho)
    cy.clickElement(elements.carrinho.botaoAbrirCarrinho)
    cy.clickElement(elements.carrinho.botaoRemoverdoCarrinho)
});

Cypress.Commands.add('validaCarrinhoVazio', () => {

    cy.get('.cart_item').should('not.exist');
});