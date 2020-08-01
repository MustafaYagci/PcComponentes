$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/loginFunctionalities.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Functionalities Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
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
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});