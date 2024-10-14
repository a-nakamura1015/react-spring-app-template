package com.example.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.app.model")
@EnableJpaRepositories(basePackages = "com.example.app.repository")
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
