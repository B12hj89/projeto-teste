import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Eu estou na página inicial', () => {
    cy.visit('/');
});

When('Eu busco por {string}', (searchTerm) => {
    cy.get('#search_product').type(searchTerm);
    cy.get('#submit_search').click();
});

Then('Devo ver resultados da busca', () => {
    cy.get('.features_items').should('be.visible');
    cy.get('.productinfo').should('have.length.at.least', 1);
});
