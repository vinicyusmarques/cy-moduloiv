/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();


describe('Cadastro', () => {
    it('Quando informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        // input | textarea
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // check
        cy.get('input[value=m]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Livros')

        // select
        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#days').select('25', {force: true})
        cy.get('select#months').select('Fevereiro', {force: true})
        cy.get('select#years').select('1994', {force: true})

        cy.get('input#firstpassword').type('V1ni@1994')
        cy.get('input#secondpassword').type('V1ni@1994')
        cy.contains('Finalizar cadastro').click()
        
        // cy.url captura a url atual
        cy.url().should('contain', 'listagem')



    });
});