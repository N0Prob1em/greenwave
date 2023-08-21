package noproblem.greenwave.models;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "email")
public class EmailConfig {
    private String host = "smtp.gmail.com";
    private int port = 587;
    private String username = "servicedesk.greenwave@gmail.com";
    private String password = "zbqbqmiiawrlkcrp";

    // getters and setters

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = "smtp.gmail.com";
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = 587;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = "snehalkdm2191@gmail.com";
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = "ueryvhruhnizshmc";
    }
}
