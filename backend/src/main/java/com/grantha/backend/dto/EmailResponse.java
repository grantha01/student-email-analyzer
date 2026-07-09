package com.grantha.backend.dto;

public class EmailResponse {

    private String id;
    private String from;
    private String subject;
    private String date;
    private String snippet;

    public EmailResponse() {
    }

    public EmailResponse(String id, String from, String subject, String date, String snippet) {
        this.id = id;
        this.from = from;
        this.subject = subject;
        this.date = date;
        this.snippet = snippet;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSnippet() {
        return snippet;
    }

    public void setSnippet(String snippet) {
        this.snippet = snippet;
    }
}