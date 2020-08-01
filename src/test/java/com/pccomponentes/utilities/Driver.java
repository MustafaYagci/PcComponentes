package com.pccomponentes.utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;

public class Driver {

    private Driver(){}

    private static InheritableThreadLocal<WebDriver> driverPool= new InheritableThreadLocal<WebDriver>();

    public static WebDriver Driver() {

        if (driverPool == null) {
            String browser = System.getProperty("browser") != null ? browser = System.getProperty("browser") : ConfigurationReader.getProperty("browser");

            switch (browser) {
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    driverPool.set(new ChromeDriver());
                    break;

                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver());
                    break;

                case "opera":
                    WebDriverManager.operadriver().setup();
                    driverPool.set(new OperaDriver());
                    break;
            }
        }
            return driverPool.get();
    }

        public static void terminator(){
           driverPool.get().quit();
           driverPool.remove();
        }

}
