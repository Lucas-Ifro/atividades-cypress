describe('Formulário de Login',() => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    
    })
    it('Não deve permitir um email inválido', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('teste@alura')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    
    })
    it('Não deve permitir um email em branco', () => {
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    
    })
    
    it('Deve informar erro ao logar quando senha ou email estiver errado', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('Csblaytiosn@gmail.com')
        cy.getByData('senha-input').type('senha_errada')
        cy.getByData('botao-enviar').click()
        cy.get('span').contains("E-mail ou senha incorretos")
    })
    
    it.skip('Não deve permitir um email  e senha em branco', () => {
        cy.getByData('botao-login').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('')
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório')
    
    })
})    