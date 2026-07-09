package com.grantha.backend.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grantha.backend.dto.EmailResponse;
import com.grantha.backend.gmail.GmailService;

@RestController
public class GmailController {

    private final GmailService gmailService;

    public GmailController(GmailService gmailService) {
        this.gmailService = gmailService;
    }

    @GetMapping("/api/gmail/emails")
    public List<EmailResponse> getEmails(
            @RegisteredOAuth2AuthorizedClient("google")
            OAuth2AuthorizedClient authorizedClient)
            throws Exception {

        return gmailService.getEmails(authorizedClient);
    }
}