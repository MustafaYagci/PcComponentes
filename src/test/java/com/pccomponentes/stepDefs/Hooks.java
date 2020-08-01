package com.pccomponentes.stepDefs;

import com.pccomponentes.utilities.ConfigurationReader;
import com.pccomponentes.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.util.concurrent.TimeUnit;


public class Hooks {
    @Before
    public void BeforeMethod(){

        Driver.get().get(ConfigurationReader.getProperty("qa_url"));
        Driver.get().manage().window().fullscreen();
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
    }

    @After
    public void AfterClass(){
        Driver.closeDriver();
    }
}
