Feature: Busca de produtos

  Scenario: Buscar produto existente
    Given Eu estou na página inicial
    When Eu busco por "Men Tshirt"
    Then Devo ver resultados da busca