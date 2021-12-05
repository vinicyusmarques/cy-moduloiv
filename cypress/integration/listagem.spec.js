/// <reference types="cypress" />

describe('Listagem', () => {
    it('Quando não houver cadastros, a listagem deve estar vazia', () => {
        cy.fixture('listagem-vazia').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length', 0)
    });

    it.only('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {
        cy.fixture('listagem').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length', 2)
        debugger
    });
});