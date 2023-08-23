package noproblem.greenwave.controllers;

import noproblem.greenwave.models.EmailConfig;
import noproblem.greenwave.models.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.util.Properties;

@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailConfig emailConfig;

    @PostMapping("/sendmail")
    public ResponseEntity<String> sendEmail(@Valid @RequestBody EmailRequest emailRequest) {
        Properties props = new Properties();
        props.put("mail.smtp.host", emailConfig.getHost());
        props.put("mail.smtp.port", emailConfig.getPort());
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailConfig.getUsername(), emailConfig.getPassword());
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(emailConfig.getUsername()));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailRequest.getTo()));
            message.setSubject(emailRequest.getSubject());
            message.setText(emailRequest.getBody());

            Transport.send(message);

            return ResponseEntity.ok("Email sent successfully");
        } catch (MessagingException e) {
            e.printStackTrace(); // Handle the exception appropriately
            return ResponseEntity.status(500).body("Failed to send email");
        }
    }
}
