package com.pccomponentes.pages;

import com.pccomponentes.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
public class CategoryPage extends BasePage {
    @FindBy(css = "[class='c-main-menu__name']")
    public WebElement primaryDropDown;

    public WebElement SecondaryHowerOver(String category){
        String locator="(//*[@title='"+category+"'])[1]";
        WebElement secondary=Driver.get().findElement(By.xpath(locator));
        return secondary ;
    }
}
