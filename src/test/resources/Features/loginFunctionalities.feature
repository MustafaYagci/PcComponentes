Feature: Login Functionality


    @smoke
    Scenario: Login Functionalities negative
      
      Given user should be able to see "PcComponentes.com | Tienda de Informática y Tecnología online" as a page title
      And user should be able click Mi cuenta button
      When user type invalid email or password and click Iniciar session
      Then user should be able to get "El e-mail o la contraseña no son correctos." warning

  @smoke
  @login
    Scenario: Login Functionalities Positive
      Given user should be able to see "PcComponentes.com | Tienda de Informática y Tecnología online" as a page title
      And user should be able click Mi cuenta button
      When user type valid email or password and click Iniciar session