

describe('Aplicativo de tarefas cypress', () => {
  it('Deve exibir os itens de tarefas por padrão do aplicativo', () => {
    cy.visit('https://example.cypress.io/todo#/');

    cy.get('.todo-list li').should('have.length', 2);

    cy.get('.todo-list li').first().should('contain.text', 'Pay electric bill');

    cy.get('.todo-list li').last().should('contain.text', 'Walk the dog');
  });

  it('Deve adicionar um novo itens de tarefas', () => {
    cy.visit('https://example.cypress.io/todo#/');
    let novaTarefa = "limpar casa"

    cy.get('[data-test="new-todo"]').type(`${novaTarefa}{enter}`)

    cy.get('.todo-list li').last().should('contain.text', novaTarefa);
  });

  it('Deve marcar um item como concluído', () => {
    cy.visit('https://example.cypress.io/todo#/');

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type="checkbox"]')
      .check();

    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed');
  });

  context('Usando uma tarefa verificada', () => {
    
    beforeEach(() => {
      // Usaremos o comando que usamos acima para marcar um elemento
      // Como queremos realizar vários testes que começam com a verificação
      // um elemento, colocamos no gancho beforeEach
      // para que seja executado no início de cada teste.
      cy.visit('https://example.cypress.io/todo#/');

      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })
    it("Deve filtrar tarefas incompletas", () => {
      cy.contains('Active').click()

      cy.contains("Walk the dog").should("exist")
      cy.contains('Pay electric bill').should("not.exist")


    })
    it("Deve filtrar por tarefas concluídas", () => {
      cy.contains('Completed').click()

      cy.contains("Walk the dog").should("not.exist")
      cy.contains('Pay electric bill').should("exist")


    })
    it("Deve filtrar por tarefas concluídas", () => {
      cy.contains('Completed').click()
      cy.contains('Clear completed').click()

      cy.contains("Walk the dog").should("not.exist")
      cy.contains('Pay electric bill').should("not.exist")

      cy.contains('Clear completed').should("not.exist")


    })

  })


})