package com.pccomponentes.stepDefs;

import com.pccomponentes.pages.BasePage;
import com.pccomponentes.pages.LoginPage;
import com.pccomponentes.utilities.ConfigurationReader;
import com.pccomponentes.utilities.Driver;
import com.pccomponentes.utilities.Reusabilities;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class loginFunctionalityStepDefs {
    LoginPage lp= new LoginPage();
    @Given("user should be able click Mi cuenta button")
    public void user_should_be_able_click_Mi_cuenta_button() {
      lp.Mi_Cuenta.click();
    }

    @When("user type invalid email or password and click Iniciar session")
    public void user_type_invalid_email_or_password_and_click_Iniciar_session() {
        Reusabilities.StaticWait(2);
      lp.Username.sendKeys("something@gmail.com");
      lp.password.sendKeys("smthng");
      lp.iniciarSession.click();
        Reusabilities.StaticWait(2);
    }

    @Then("user should be able to get {string} warning")
    public void user_should_be_able_to_get_warning(String expected) {
        String actual=lp.errorMessage.getText();
        Assert.assertEquals(expected,actual);
    }

    @Given("user should be able to naviage to the page")
    public void user_should_be_able_to_naviage_to_the_page() {
        Driver.get().get(ConfigurationReader.getProperty("qa_url"));
    }

    @When("user type valid email or password and click Iniciar session")
    public void user_type_valid_email_or_password_and_click_Iniciar_session() {
        Reusabilities.StaticWait(2);
        lp.Username.sendKeys(ConfigurationReader.getProperty("email"));
        lp.password.sendKeys(ConfigurationReader.getProperty("password"));
        lp.iniciarSession.click();
        Reusabilities.StaticWait(2);
    }


}
