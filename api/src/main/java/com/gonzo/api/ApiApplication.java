package com.gonzo.api;

import com.gonzo.api.config.InitConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class ApiApplication {

    @Autowired
    private InitConfiguration initConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @PostConstruct
    public void setUpInitConfiguration(){
        initConfiguration.initService();
    }

}
