# saucedemo-automation-ui

Projeto de automação de testes E2E do site **SauceDemo**, desenvolvido com **Cypress**

O objetivo da automação é validar os principais fluxos do usuário, garantindo:
- Organização de código
- Reaproveitamento de comandos
- Separação de responsabilidades
- Clareza na validação das regras de negócio

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Commands reutilizáveis
- Centralização de seletores em objetos `elements`

---

## Descrição dos arquivos

### cypress/support/commands.js
Arquivo responsável por centralizar todas as ações em comum como:
- click no elemento
- escrever texto

Os commands utilizam apenas seletores centralizados nos arquivos de page.
---

### cypress/support/checkoutPage.js
Arquivo responsável por centralizar todos os seletores da tela de checkout, organizados no objeto `elements`.

Contém apenas mapeamento de elementos, como:
- Campos do formulário
- Botões de continuar e finalizar
- Labels de subtotal, tax e total
- Elementos da tela de sucesso


### cypress/support/carrinhoPage.js
Centraliza os seletores e ações na tela de carrinho

### cypress/support/LoginPage.js
Arquivo que contém os seletores e ações da tela de login.

---

### cypress/e2e/login.cy.js
Casos de teste relacionados ao Login:
- Login válido
- Login inválido
- Validação de mensagens de erro

---

### cypress/e2e/carrinho.cy.js
Casos de teste relacionados ao Carrinho:
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Validar produto presente no carrinho

---

### cypress/e2e/checkout.cy.js
Casos de teste relacionados ao Checkout:
- Preencher formulário
- Validar valor subtotal e total
- Validar finalização da compra

---

### cypress/fixtures/config/*.settings.json
Arquivos de configuração por ambiente (qa, homolog), contendo:
- baseUrl
- Dados de usuário
- Variáveis de ambiente utilizadas nos testes

Isso permite executar a automação em diferentes ambientes sem alteração de código.

---

## Como executar o projeto

### Instalar dependências
Na raiz do projeto, execute:

npm install

---

### Executar Cypress em modo interativo

npx cypress open

Selecione o navegador desejado e execute os testes pela interface gráfica.

---

### Executar testes em modo headless

npx cypress run

---

### Executar testes em ambiente específico

Exemplo para o ambiente QA:

npx cypress run --env environmentName=qa

---

## Estratégia de testes adotada

- Um teste para cada fluxo principal solicitado
- Commands reutilizáveis para evitar duplicação de código
- Seletores centralizados para facilitar manutenção
- Validações objetivas das regras de negócio
- Código simples, legível e focado em estabilidade

---

## Observações finais

Este projeto foi desenvolvido com foco em:
- Organização
- Manutenibilidade
- Boas práticas de automação
- Clareza para avaliação técnica

---

Autor: Ismael Batista Santos