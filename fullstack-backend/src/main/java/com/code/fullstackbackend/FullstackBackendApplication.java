package com.code.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class FullstackBackendApplication {

    public static void main(String[] args) {
            SpringApplication.run(FullstackBackendApplication.class, args);
        }

}
