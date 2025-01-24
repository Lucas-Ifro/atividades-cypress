describe('Pagina Inicial', () => {
    beforeEach (()=> {
      cy.visit('http://localhost:3000');
    })  
    
    it('Deve renderizar o titulo principal', () => {
      cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
    });
  
    it('Deve renderizar o titulo 1 card', () => {
      cy.get('.Inicio_vantagens__itens__PSr2j > :nth-child(1) > h3').contains('Conta e cartão gratuitos');
    });
    it('Deve renderizar o titulo 2 card', () => {
      cy.get('.Inicio_vantagens__itens__PSr2j > :nth-child(2) > h3').contains('Saques sem custo');
    });
  
  describe('Botao pagina inicial', () => {
    it('Deve renderizar o botão', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-test="botao-cadastro"]').contains('Abrir minha conta');
      cy.get('[data-test="botao-login"]').contains('Já tenho conta');
    });
    })



      
})