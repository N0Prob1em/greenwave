package noproblem.greenwave.models;

import java.util.Date;
import java.util.List;

public class EmailRequest {
    private String to;
    private String subject;
    private String body;

    public String getTo() {
        return to;
    }

    public String getSubject() {
        return subject;
    }

    public String getBody() {
        return body;
    }

    public EmailRequest() {}

    public EmailRequest(String to, String subject, String body) {
        this.to = to;
        this.subject = subject;
        this.body = body;
    }
}

