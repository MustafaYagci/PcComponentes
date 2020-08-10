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
});