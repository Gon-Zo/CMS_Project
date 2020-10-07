package com.gonzo.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
//@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

//                allowedOrigins.allowedOrigins("http://localhost:9000")
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("POST", "PUT", "GET", "OPTIONS", "DELETE")
                .allowCredentials(true)
                .maxAge(3600)
                .allowedHeaders("Content-Type", "Access-Control-Allow-Headers", "Authorization", "X-Requested-With")
        ;

    }

}
