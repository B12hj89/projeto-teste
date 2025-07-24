Feature: Login no site Automation Exercise

  Scenario: Login válido com suas credenciais
    Given Eu estou na página de login
    When Preencho com email "mdearaujobento@gmail.com" e senha "xAd3JWKzrp6cX@"
    And Clico no botão de login
    Then Devo visualizar a mensagem "Logged in as"