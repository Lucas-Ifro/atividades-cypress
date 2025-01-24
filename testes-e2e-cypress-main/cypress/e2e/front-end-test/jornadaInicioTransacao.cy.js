describe('Jornadas de usuário', () => {
    it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => { 
      cy.visit('/');
  
      /* 
      //Forma manual de logar sem uma função personalizada
      cy.getByData('botao-login').click();   
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click(); 
      */
      
      //usando a função login personalizada para logar
      cy.login('neilton@alura.com','123456');
  
      cy.get('[data-testid="data-atual"]').contains("Sábado, 30/11/2024")

      cy.location('pathname').should('eq', '/home');
      
  
      cy.getByData('select-opcoes').select('Transferência');
      cy.getByData('form-input').type('80');
      cy.getByData('realiza-transacao').click();

      cy.getByData('select-opcoes').select('Depósito');
      cy.getByData('form-input').type('80');
      cy.getByData('realiza-transacao').click();
  
      cy.getByData('lista-transacoes').find('li').last(-1).contains('R$ 80');
  
      cy.getByData('botao-sair').click();
      cy.location('pathname').should('eq', '/');
    });
  });
