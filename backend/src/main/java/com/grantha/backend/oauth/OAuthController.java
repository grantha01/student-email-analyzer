package com.grantha.backend.oauth;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OAuthController {

    @GetMapping("/user")
    public Principal getUser(Principal principal) {
        return principal;
    }

}