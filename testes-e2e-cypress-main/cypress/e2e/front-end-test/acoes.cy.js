describe("testando a tela de ações", ()=> {
    it("fazendo login e acessando a tela de ações", () => {
        cy.visit('/');

        cy.login('neilton@alura.com','123456');

        cy.get(':nth-child(2) > .Menu_link__kxI6c').click()

        cy.getByData("titulo-cartoes").contains("Meus cartões")

        cy.get('[data-test="lista-transacoes"] > :nth-child(1)').should('exist')

        cy.get(':nth-child(1) > [data-testid="valorTransacao"]').contains('R$ 150')

        cy.get('[data-testid="saldo"]').should('exist')

        cy.getByData("botao-sair").click()
    })
})