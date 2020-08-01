package com.pccomponentes.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    @FindBy(xpath = "(//*[@class='Input-sc-gol60e iAZnPL'])[1]")
    public WebElement Username;

    @FindBy(xpath = "(//*[@class='Input-sc-gol60e iAZnPL'])[2]")
    public WebElement password;

    @FindBy(xpath = "//*[@data-cy='log-in']")
    public  WebElement iniciarSession;

    @FindBy(xpath = "//*[@data-cy='invalid-credentials-notif']")
    public WebElement errorMessage;

}
