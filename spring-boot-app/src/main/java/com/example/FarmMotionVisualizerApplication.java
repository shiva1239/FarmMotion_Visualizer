package com.example;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Bean;
import com.example.entities.Role;
import com.example.repositories.RoleRepository;

@SpringBootApplication
@EntityScan(basePackages = "com.example.entities")
@ComponentScan(basePackages = {"com.example.entities","com.example.controllers","com.example.repositories","com.example.services","com.example.repositories","com.example.security"})
public class FarmMotionVisualizerApplication {

    public static void main(String[] args) {
        SpringApplication.run(FarmMotionVisualizerApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(RoleRepository roleRepo) {
        return (args) -> {
            Role role=new Role();
            role.setName("ROLE_ADMIN");
            roleRepo.save(role);
        };
    }

}
