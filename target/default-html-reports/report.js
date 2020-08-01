$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/searchFunctionalities.feature");
formatter.feature({
  "name": "Search Functionalty",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Searching \"\u003cItems\u003e\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchBox"
    }
  ]
});
formatter.step({
  "name": "user should navigate to page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to type \"\u003cItems\u003e\" and search",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to verify the items with the \"\u003cItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items"
      ]
    },
    {
      "cells": [
        "MSI GE66 Raider 10SF-056XES"
      ]
    },
    {
      "cells": [
        "LG 49LJ594V"
      ]
    },
    {
      "cells": [
        "Xiaomi Mi Airdots"
      ]
    }
  ]
});
formatter.background({
  "name": "User Should be able to naviage to the page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Searching \"MSI GE66 Raider 10SF-056XES\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchBox"
    }
  ]
});
formatter.step({
  "name": "user should navigate to page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_navigate_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to type \"MSI GE66 Raider 10SF-056XES\" and search",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_type_and_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to verify the items with the \"MSI GE66 Raider 10SF-056XES\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_verify_the_items_with_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User Should be able to naviage to the page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Searching \"LG 49LJ594V\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchBox"
    }
  ]
});
formatter.step({
  "name": "user should navigate to page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_navigate_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to type \"LG 49LJ594V\" and search",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_type_and_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to verify the items with the \"LG 49LJ594V\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_verify_the_items_with_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User Should be able to naviage to the page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Searching \"Xiaomi Mi Airdots\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchBox"
    }
  ]
});
formatter.step({
  "name": "user should navigate to page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_navigate_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "And "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to type \"Xiaomi Mi Airdots\" and search",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_type_and_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to verify the items with the \"Xiaomi Mi Airdots\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_verify_the_items_with_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});