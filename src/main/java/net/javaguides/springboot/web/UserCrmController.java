package net.javaguides.springboot.web;

import net.javaguides.springboot.model.Task;
import net.javaguides.springboot.model.UserCrm;
import net.javaguides.springboot.service.TaskService;
import net.javaguides.springboot.service.UserCrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserCrmController {

    @Autowired
    private UserCrmService userCrmService;

    @GetMapping
    public List<UserCrm> getAllUsers() {
        return userCrmService.getAllUsers();
    }
    @Autowired
    private TaskService taskService;


    @PostMapping("/add")
    public ResponseEntity<Map<String, String>> addUser(@RequestBody UserCrm user) {
        // Logique pour ajouter un utilisateur
        userCrmService.addUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Utilisateur ajouté avec succès");
        return ResponseEntity.ok(response);
    }
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        // Appel du service pour supprimer l'utilisateur
        boolean deleted = userCrmService.deleteUser(userId);

        if (deleted) {
            return ResponseEntity.ok("Utilisateur supprimé avec succès.");
        } else {
            return ResponseEntity.status(500).body("Erreur lors de la suppression de l'utilisateur.");
        }
    }


    // Autres méthodes du contrôleur pour gérer les utilisateurs
}
