package com.pccomponentes.stepDefs;

import com.pccomponentes.pages.BasePage;
import com.pccomponentes.utilities.ConfigurationReader;
import com.pccomponentes.utilities.Driver;
import com.pccomponentes.utilities.Reusabilities;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class searchFunctionalitiesStepDefs {
    BasePage bP=new BasePage();

    @Given("user should navigate to page")
    public void user_should_navigate_to_page() {
        Driver.get().get(ConfigurationReader.getProperty("qa_url"));
    }

    @Given("user should be able to see {string} as a page title")
    public void user_should_be_able_to_see_as_a_page_title(String expected) {
       String actual = Reusabilities.pageTitle();
        Assert.assertEquals(expected,actual);
    }

    @When("user should be able to type {string} and search")
    public void user_should_be_able_to_type_and_search(String item) {
       bP.searchBox(item);
    }

    @Then("user should be able to verify the items with the {string}")
    public void user_should_be_able_to_verify_the_items_with_the(String items) {
        List<String> products= new ArrayList<>();
     for (WebElement each: bP.items(items)){
         products.add(each.getText());
     }

     for(String each: products){
         Reusabilities.StaticWait(2);
         Assert.assertTrue(each.contains(items));
     }


    Driver.closeDriver();
    }
}
