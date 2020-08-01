package com.pccomponentes.utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigurationReader {

    private static Properties properties;

    static {
        try {
            String path="configuration.properties";
            FileInputStream fileInputStream = new FileInputStream(path);
            properties=new Properties();
            properties.load(fileInputStream);
            fileInputStream.close();
        }catch (Throwable e){
            e.printStackTrace();
        }
    }


    public static String getProperty (String key){
        return properties.getProperty(key);
    }
}
