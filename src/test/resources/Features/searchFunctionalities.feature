Feature: Search Functionalty
  Background: User Should be able to naviage to the page

  @searchBox
   Scenario Outline: Searching "<Items>" in the search box
     Given user should navigate to page
     And user should be able to see "PcComponentes.com | Tienda de Informática y Tecnología online" as a page title
     When user should be able to type "<Items>" and search
     Then  user should be able to verify the items with the "<Items>"


     Examples:
     |Items|
     |MSI GE66 Raider 10SF-056XES|
     |LG 49LJ594V|
     |Xiaomi Mi Airdots|