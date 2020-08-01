package com.pccomponentes.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                "rerun:target/rerun.txt"},
        features = "src/test/resources/Features",
        glue ="com/pccomponentes/stepDefs",
        dryRun = false,
        tags = "@searchBox"

)
public class Runner {
}
