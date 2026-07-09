package com.grantha.backend.gmail;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.grantha.backend.dto.EmailResponse;

@Service
public class GmailService {

    private final RestClient restClient;

    public GmailService(RestClient restClient) {
        this.restClient = restClient;
    }

    @SuppressWarnings("unchecked")
    public List<EmailResponse> getEmails(OAuth2AuthorizedClient authorizedClient) {

        String token = authorizedClient.getAccessToken().getTokenValue();

        // Fetch the latest 10 message IDs
        Map<String, Object> response = restClient.get()
                .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10")
                .header("Authorization", "Bearer " + token)
                .retrieve()
                .body(Map.class);

        List<EmailResponse> emails = new ArrayList<>();

        List<Map<String, Object>> messages =
                (List<Map<String, Object>>) response.get("messages");

        if (messages == null) {
            return emails;
        }

        for (Map<String, Object> message : messages) {

            String id = (String) message.get("id");

            // Fetch full message details
            Map<String, Object> fullMessage = restClient.get()
                    .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages/" + id)
                    .header("Authorization", "Bearer " + token)
                    .retrieve()
                    .body(Map.class);

            EmailResponse email = new EmailResponse();

            email.setId(id);

            // For now
            email.setFrom("Loading...");
            email.setSubject("Loading...");
            email.setDate("Loading...");

            email.setSnippet((String) fullMessage.get("snippet"));

            emails.add(email);
        }

        return emails;
    }
}

