Feature: Validação de API pública

  Scenario: Validar API de exemplo
    When Envio um GET para "https://api.restful-api.dev/objects/7"
    Then O status code deve ser 200
    And O campo "name" deve existir
    