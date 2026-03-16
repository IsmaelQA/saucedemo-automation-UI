const elements = {
  //Checkout list
  checkoutCart: {
    botaocheckout: "#checkout",
    campoNome: '[data-test="firstName"]',
    campoSobrenome: '[data-test="lastName"]',
    campoCep: '[data-test="postalCode"]',
    botaoContinuar: '[data-test="continue"]',

    summaryInfo: '.summary_info',
    rodape: '.cart_footer',
    labelSubtotal: '.summary_subtotal_label',
    labelTax: '.summary_tax_label',
    labelTotal: '.summary_total_label',

  },
};

Cypress.Commands.add('iniciaoCheckout', () => {

  cy.clickElement(elements.checkoutCart.botaocheckout)

});

Cypress.Commands.add('preencheFormulario', () => {

  cy.writeField(elements.checkoutCart.campoNome, 'Ismael');
  cy.writeField(elements.checkoutCart.campoSobrenome, 'Santos');
  cy.writeField(elements.checkoutCart.campoCep, '01311-000');

  // Avança para o overview
  cy.clickElement(elements.checkoutCart.botaoContinuar);

});

Cypress.Commands.add('validapaginaCheckout', () => {

  // Valida que chegou no Step Two (overview)
  cy.location('pathname').should('eq', '/checkout-step-two.html');

  // Valida elementos principais visíveis
  cy.get('.summary_info').should('be.visible');
  cy.get('.cart_footer').should('be.visible');

});

Cypress.Commands.add('validarSubtotal', (valorDoItem) => {
  cy.get('.summary_subtotal_label')
    .should('contain.text', 'Item total:')
    .and('contain.text', valorDoItem);
});

Cypress.Commands.add('validarFinalizacaoDaCompra', () => {


  cy.get('[data-test="finish"]').click();

  // Tela de sucesso
  cy.location('pathname').should('eq', '/checkout-complete.html');
  cy.get('.complete-header').should('be.visible').and('have.text', 'Thank you for your order!');
  cy.get('.complete-text').should('be.visible').and('contain.text', 'Your order has been dispatched');

  // botão Back Home disponível
  cy.get('[data-test="back-to-products"]').should('be.visible');

});