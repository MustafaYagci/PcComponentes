package com.pccomponentes.stepDefs;

import com.pccomponentes.utilities.ConfigurationReader;
import com.pccomponentes.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;


public class Hooks {
    @Before
    public void BeforeMethod(){
        Driver.get().get(ConfigurationReader.getProperty("qa_url"));
    }

    @After
    public void AfterClass(){
        Driver.closeDriver();
    }
}
