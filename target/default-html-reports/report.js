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
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/searchFunctionalities.feature");
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
      "name": "@smoke"
    },
    {
      "name": "@searchBox"
    }
  ]
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "Given "
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
formatter.scenario({
  "name": "Searching \"MSI GE66 Raider 10SF-056XES\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@searchBox"
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
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.pccomponentes.utilities.Driver.closeDriver(Driver.java:101)\r\n\tat com.pccomponentes.stepDefs.Hooks.AfterClass(Hooks.java:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Searching \"LG 49LJ594V\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@searchBox"
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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6C5QTC\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\musta\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61548}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6545a0ea07ad2152a460e3389f3aa870\n*** Element info: {Using\u003dxpath, value\u003d//h3/a[contains(@data-name,\u0027\"items\"\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.pccomponentes.pages.BasePage.items(BasePage.java:25)\r\n\tat com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_verify_the_items_with_the(searchFunctionalitiesStepDefs.java:33)\r\n\tat ✽.user should be able to verify the items with the \"LG 49LJ594V\"(file:///C:/Users/musta/IdeaProjects/PcComponentes/src/test/resources/Features/searchFunctionalities.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching \"Xiaomi Mi Airdots\" in the search box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@searchBox"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6C5QTC\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: driver.version: Driver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x006187E3+2852835]\n\tOrdinal0 [0x00505BB1+1727409]\n\tOrdinal0 [0x003DE362+516962]\n\tOrdinal0 [0x003D7D82+490882]\n\tOrdinal0 [0x003D846B+492651]\n\tOrdinal0 [0x003D93C5+496581]\n\tOrdinal0 [0x003D4D64+478564]\n\tOrdinal0 [0x003DF300+520960]\n\tOrdinal0 [0x0038E489+189577]\n\tOrdinal0 [0x0038D7FD+186365]\n\tOrdinal0 [0x0038B70B+177931]\n\tOrdinal0 [0x00372584+75140]\n\tOrdinal0 [0x00373650+79440]\n\tOrdinal0 [0x003735E9+79337]\n\tOrdinal0 [0x0051AD5C+1813852]\n\tGetHandleVerifier [0x0073C616+1075574]\n\tGetHandleVerifier [0x0073C367+1074887]\n\tGetHandleVerifier [0x00747497+1120247]\n\tGetHandleVerifier [0x0073CC16+1077110]\n\tOrdinal0 [0x00513206+1782278]\n\tOrdinal0 [0x0051C3BB+1819579]\n\tOrdinal0 [0x0051C523+1819939]\n\tOrdinal0 [0x00532B45+1911621]\n\tBaseThreadInitThunk [0x7671F989+25]\n\tRtlGetAppContainerNamedObjectPath [0x77CF7084+228]\n\tRtlGetAppContainerNamedObjectPath [0x77CF7054+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.pccomponentes.utilities.Driver.get(Driver.java:40)\r\n\tat com.pccomponentes.stepDefs.Hooks.BeforeMethod(Hooks.java:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to see \"PcComponentes.com | Tienda de Informática y Tecnología online\" as a page title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_see_as_a_page_title(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to type \"Xiaomi Mi Airdots\" and search",
  "keyword": "When "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_type_and_search(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to verify the items with the \"Xiaomi Mi Airdots\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.pccomponentes.stepDefs.searchFunctionalitiesStepDefs.user_should_be_able_to_verify_the_items_with_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.pccomponentes.utilities.Driver.closeDriver(Driver.java:101)\r\n\tat com.pccomponentes.stepDefs.Hooks.AfterClass(Hooks.java:22)\r\n",
  "status": "failed"
});
});