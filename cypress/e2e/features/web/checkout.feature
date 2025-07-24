Feature: Fluxo completo de compra

  Background:
    Given Eu estou logado no site

  Scenario: Comprar um produto
    When Eu busco por "Blue Top"
    And Eu adiciono o produto ao carrinho
    And Eu prossigo para o checkout
    And Preencho os detalhes do pagamento
    Then Eu confirmo que o pedido foi criado com sucesso
    