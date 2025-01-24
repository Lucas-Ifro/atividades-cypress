let recebimentoTexto = "Pagamento salário"
let recebimentoValor = 1450.67
let recebimentoData = "2025-02-15"

let pagamentoTexto = "Academia"
let pagamentoValor = -110.00
let pagamentoData = "2025-02-16"

describe('Testes finance', () => {
  it('Deve realizar cadastro de entradas e saidas com sucesso', () => {
    cy.visit('https://dev-finance.netlify.app/')

    cy.get('#transaction > .button').click()
    cy.get('#description').type(recebimentoTexto)
    cy.get('#amount').type(recebimentoValor)
    cy.get('#date').type(pagamentoData)
    cy.get('button').click()

    cy.get('#transaction > .button').click()
    cy.get('#description').type(pagamentoTexto)
    cy.get('#amount').type(pagamentoValor)
    cy.get('#date').type(pagamentoData)
    cy.get('button').click()
  })

  it('Deve realizar remover de entradas e saidas com sucesso', () => {
    cy.visit('https://dev-finance.netlify.app/')

    cy.get('#transaction > .button').click()
    cy.get('#description').type(recebimentoTexto)
    cy.get('#amount').type(recebimentoValor)
    cy.get('#date').type(pagamentoData)
    cy.get('button').click()

    cy.get('#transaction > .button').click()
    cy.get('#description').type(pagamentoTexto)
    cy.get('#amount').type(pagamentoValor)
    cy.get('#date').type(pagamentoData)
    cy.get('button').click()

    // REMOVENDO ENTRA E SAÍDA
    cy.get('[data-index="0"] > :nth-child(4) > img').click()
    cy.get('[data-index="0"] > :nth-child(4) > img').click()

  })
})