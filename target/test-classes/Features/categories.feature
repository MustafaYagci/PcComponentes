Feature: Scenerio category

  @smoke
  @category
  Scenario: Category
    Given user should be able to hower over the dropdown
    And user should be able to hower over "Periféricos"
    When user click "Ratones"
    Then user should be able to see "Ratones" as a page title