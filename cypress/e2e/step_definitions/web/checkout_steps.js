import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('Eu adiciono o produto ao carrinho', () => {
    cy.get('.productinfo').first().trigger('mouseover');
    cy.get('.add-to-cart').first().click();
    cy.get('button:contains("Continue Shopping")').click();
});

When('Eu prossigo para o checkout', () => {
    cy.get('a[href="/view_cart"]').first().click();
    cy.get('.check_out').click();
});

When('Preencho os detalhes do pagamento', () => {
    // Preencher informações do cartão (dados de teste)
    cy.get('input[name="name_on_card"]').type('Test User');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2025');
    cy.get('#submit').click();
});

Then('Eu confirmo que o pedido foi criado com sucesso', () => {
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
});
