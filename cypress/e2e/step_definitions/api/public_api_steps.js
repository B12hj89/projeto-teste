import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('Envio um GET para {string}', (url) => {
    cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false
    }).as('apiResponse');
});

Then('O status code deve ser {int}', (statusCode) => {
    cy.get('@apiResponse').its('status').should('eq', statusCode);
});

Then('O campo {string} deve existir', (fieldPath) => {
    const fields = fieldPath.split('.');
    let current = cy.get('@apiResponse').its('body');

    fields.forEach(field => {
        current = current.should('have.property', field);
    });
});
