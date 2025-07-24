import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Eu estou na página de login', () => {
    cy.visit('/login');
});

When('Preencho com email {string} e senha {string}', (email, password) => {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
});

When('Clico no botão de login', () => {
    cy.get('[data-qa="login-button"]').click();
});

Then('Devo visualizar a mensagem {string}', (message) => {
    cy.contains('li', message).should('be.visible');
});

// Step para o Background do checkout
Given('Eu estou logado no site', () => {
    cy.visit('/login');
    cy.get('[data-qa="login-email"]').type('mdearaujobento@gmail.com');
    cy.get('[data-qa="login-password"]').type('xAd3JWKzrp6cX@');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('li', 'Logged in as').should('be.visible');
});
