package net.javaguides.springboot.web;

import net.javaguides.springboot.model.User;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import net.javaguides.springboot.service.UserService;
import net.javaguides.springboot.web.dto.UserRegistrationDto;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {


	private UserService userService;

	public UserRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }
	
	@GetMapping
	public String showRegistrationForm() {
		return "registration";
	}
	
	@PostMapping
	public String registerUserAccount(@ModelAttribute("user") UserRegistrationDto registrationDto) {
		System.out.println("Received registration data:");
		System.out.println("First Name: " + registrationDto.getFirstName());
		System.out.println("Last Name: " + registrationDto.getLastName());
		System.out.println("Email: " + registrationDto.getEmail());
		System.out.println("Password: " + registrationDto.getPassword());
		User user = registrationDto.toUser();

		if (user.getPassword() != null) {
			// Save the user using the UserService
			userService.save(user);
		} else {
			// Handle the case where the password is null (you may display an error message here)
			System.out.println("Password is null. User not saved.");
		}

		return "redirect:/registration?success";
	}
}
