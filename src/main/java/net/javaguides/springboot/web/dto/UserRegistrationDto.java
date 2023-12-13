package net.javaguides.springboot.web.dto;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import net.javaguides.springboot.model.User;

public class UserRegistrationDto {
	private String firstName;
	private String lastName;
	private String email;
	private String password;

	public UserRegistrationDto() {
	}

	public UserRegistrationDto(String firstName, String lastName, String email, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User toUser() {
		User user = new User();
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setEmail(email);
		user.setPassword(password);



		return user;
	}
}
