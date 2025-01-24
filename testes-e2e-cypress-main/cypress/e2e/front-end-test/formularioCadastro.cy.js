import faker from 'faker-br';

describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');

    })
    it('Usuario deve conseguir se cadastrar com sucesso', () => {

        //usando uma função criada getByData para escrever o teste 

        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Claytion')
        cy.getByData('email-input').type(`${faker.internet.email()}`)
        cy.getByData('senha-input').type('12345678')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
})
