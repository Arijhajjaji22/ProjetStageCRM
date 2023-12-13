package net.javaguides.springboot.web;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@ResponseBody
@RestController
public class MainController {
	private final UserRepository userRepository;

	@Autowired
	public MainController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping("/login")
	public ResponseEntity<Map<String, String>> login() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Login page");
		return ResponseEntity.ok(response);
	}
	// Dans le contrôleur MainController
	@GetMapping("/access-denied")
	public ResponseEntity<Map<String, String>> accessDenied() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Access denied. Please login to access this resource.");
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
	}


	@PostMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody Map<String, String> loginData) {
		String email = loginData.get("email");
		String password = loginData.get("password");

		boolean authenticationSuccessful = yourAuthenticationLogic(email, password);
		if (authenticationSuccessful) {
			Map<String, String> response = new HashMap<>();
			response.put("success", "true");
			response.put("message", "Connexion réussie !");
			return ResponseEntity.ok(response);
		} else {
			Map<String, String> response = new HashMap<>();
			response.put("success", "false");
			response.put("message", "Erreur lors de la connexion : Nom d'utilisateur ou mot de passe incorrect.");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}
	}

	// Méthode factice pour représenter votre logique d'authentification
	private boolean yourAuthenticationLogic(String email, String password) {
		if (!isValidEmail(email)) {
			System.out.println("Authentication failed: Invalid email format.");
			return false;
		}


		User user = userRepository.findByEmail(email);
		if (user != null) {
			System.out.println("User found in the database.");
			System.out.println("User email: " + user.getEmail());
			System.out.println("User password: " + user.getPassword());
			if (user.getPassword().equals(password)) {
				System.out.println("Authentication successful for user: " + user.getEmail());
				return true;
			} else {
				System.out.println("Authentication failed: Incorrect password.");
			}
		} else {
			System.out.println("Authentication failed: User not found.");
		}
		return false;
	}

	private boolean isValidEmail(String email) {
		// Pattern pour vérifier le format de l'email
		String emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$";

		// Compile the pattern
		Pattern pattern = Pattern.compile(emailRegex);

		// Vérifie le format de l'email en utilisant le pattern
		Matcher matcher = pattern.matcher(email);

		// Retourne true si l'email est valide, sinon false
		return matcher.matches();
	}
}
