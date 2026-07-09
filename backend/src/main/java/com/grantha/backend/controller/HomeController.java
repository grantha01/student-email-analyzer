package com.grantha.backend.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home(Principal principal) {

        if (principal != null) {
            return "Login Successful!\nWelcome " + principal.getName();
        }

        return "Welcome Guest";
    }
}