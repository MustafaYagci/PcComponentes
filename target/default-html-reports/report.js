$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/categories.feature");
formatter.feature({
  "name": "Scenerio category",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@category"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to hower over the dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.categoriesStepDefs.user_should_be_able_to_hower_over_the_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to hower over \"Periféricos\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.categoriesStepDefs.user_should_be_able_to_hower_over(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Ratones\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.categoriesStepDefs.user_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"Ratones\" as a page title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/loginFunctionalities.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Functionalities negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able click Mi cuenta button",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.loginFunctionalityStepDefs.user_should_be_able_click_Mi_cuenta_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type invalid email or password and click Iniciar session",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.loginFunctionalityStepDefs.user_type_invalid_email_or_password_and_click_Iniciar_session()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to get \"El e-mail o la contraseña no son correctos.\" warning",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.loginFunctionalityStepDefs.user_should_be_able_to_get_warning(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionalities Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able click Mi cuenta button",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.loginFunctionalityStepDefs.user_should_be_able_click_Mi_cuenta_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type valid email or password and click Iniciar session",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.loginFunctionalityStepDefs.user_type_valid_email_or_password_and_click_Iniciar_session()"
});
