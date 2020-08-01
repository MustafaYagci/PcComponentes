package com.pccomponentes.utilities;

public class Reusabilities {

    public static void StaticWait(double seconds){
        double mileseconds=seconds*1000;
        try {
            Thread.sleep((long) mileseconds);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            System.out.println("Static wait initialized");
        }
    }

    public static String pageTitle(){
        return Driver.get().getTitle();
    }
}
