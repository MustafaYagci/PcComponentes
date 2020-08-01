package com.pccomponentes.stepDefs;

import com.pccomponentes.pages.CategoryPage;
import com.pccomponentes.utilities.Driver;
import com.pccomponentes.utilities.Reusabilities;
import io.cucumber.java.en.*;
import org.openqa.selenium.interactions.Actions;

public class categoriesStepDefs {

    Actions act = new Actions(Driver.get());
    CategoryPage cp=new CategoryPage();
    @Given("user should be able to hower over the dropdown")
    public void user_should_be_able_to_hower_over_the_dropdown() {
        act.moveToElement(cp.primaryDropDown).click().build().perform();
    }

    @Given("user should be able to hower over {string}")
    public void user_should_be_able_to_hower_over(String string) {
        Reusabilities.StaticWait(2);
         act.moveToElement(cp.SecondaryHowerOver(string)).perform();
    }

    @When("user click {string}")
    public void user_click(String string) {
        Reusabilities.StaticWait(2);
    act.moveToElement(cp.SecondaryHowerOver(string)).click().build().perform();
    }
}
