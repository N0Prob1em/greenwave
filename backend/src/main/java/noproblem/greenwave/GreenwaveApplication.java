package noproblem.greenwave;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class GreenwaveApplication {

	public static void main(String[] args) {
		SpringApplication.run(GreenwaveApplication.class, args);
	}

}
