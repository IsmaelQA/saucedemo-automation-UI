// Base Commands
Cypress.Commands.add("visitUrl", () => {
  cy.visit("/");
});

Cypress.Commands.add("clickElement", (element) => {
  cy.get(element).click();
});

Cypress.Commands.add("forceclickElement", (element) => {
  cy.get(element).click({ force: true });
});

Cypress.Commands.add("clickOnScreen", (element) => {
  cy.get(element).click(100, 10, { force: true });
});

Cypress.Commands.add("clickVisibleElement", (element) => {
  cy.get(element).should("be.visible").click();
});

Cypress.Commands.add("validateInputValue", (selector, expectedValue) => {
  cy.get(selector).should("be.visible").and("have.value", expectedValue.toString());
});

Cypress.Commands.add("validateMessage", (element, text) => {
  cy.get(element).should("contain.text", text);
});

Cypress.Commands.add("checkVisibleElement", (element) => {
  cy.get(element).should("be.visible", { timeout: 80000 });
});

Cypress.Commands.add("clickElementWithText", (element, text) => {
  cy.get(element).should("be.visible").contains(text);
});

Cypress.Commands.add("writeField", (element, value) => {
  cy.get(element).click();
  cy.get(element).type(value, { force: true });
});

Cypress.Commands.add("scroll", () => {
  cy.scrollTo(0, 500);
  cy.wait(1000);
});

Cypress.Commands.add("loadingInformation", () => {
  cy.reload();
  cy.wait(30000);
});

Cypress.Commands.add('selectOptionCombobox', (element, option) => {
  cy.get(element).should('be.visible', { timeout: 10000 }).select(option)
})

Cypress.Commands.add('clickEnter', (element) => {
  cy.get(element).type('{enter}', { force: true, timeout: 10000})
})

Cypress.Commands.add('arrowDown', (element) => {
  cy.get(element).type('{downarrow}{downarrow}{downarrow}');
})

Cypress.Commands.add('takeScreenshot', () => {
  cy.wait(1000)
  cy.screenshot();
  cy.wait(1000)
  cy.viewport(1920, 1080)
})

Cypress.Commands.add('savePartOfText', (element, startPosition, endPosition, name) => {
  cy.get(element).invoke('text').then((text) => {
      cy.wrap(text.slice(startPosition, endPosition)).as(name)
  })
})

Cypress.Commands.add("CheckIfFieldHasText", (element, expectedText) => {
  cy.get(element).should('have.text', expectedText);
});

