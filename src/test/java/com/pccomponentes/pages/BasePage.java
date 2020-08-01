package com.pccomponentes.pages;

import com.pccomponentes.utilities.Driver;
import com.pccomponentes.utilities.Reusabilities;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BasePage {

    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    public void searchBox(String search){
        Driver.get().findElement(By.xpath("//input[@name='query']")).sendKeys(search+ Keys.ENTER);
        Reusabilities.StaticWait(2);
    }

    public List<WebElement> items(String items){
        List<WebElement> listOfItems=Driver.get().findElements(By.xpath("//h3/a[contains(@data-name,'\"items\"')]"));
        return listOfItems;
    }
}
