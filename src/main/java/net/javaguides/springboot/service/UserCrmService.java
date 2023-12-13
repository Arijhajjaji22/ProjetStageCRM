package net.javaguides.springboot.service;

import net.javaguides.springboot.model.UserCrm;
import net.javaguides.springboot.repository.UserCrmRepository;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserCrmService {



    @Autowired
    private static UserCrmRepository userCrmRepository;
    @Autowired  // Assurez-vous que cette annotation est présente pour l'injection de dépendance
    public UserCrmService(UserCrmRepository userCrmRepository) {
        this.userCrmRepository = userCrmRepository;
    }
    public static Optional<UserCrm> getUserById(Long id) {
        return userCrmRepository.findById(id);
    }

    public List<UserCrm> getAllUsers() {
        return userCrmRepository.findAll();
    }

    public UserCrm addUser(UserCrm user) {
        return userCrmRepository.save(user);
    }
    public boolean deleteUser(Long userId) {
        // Logique de suppression de l'utilisateur basée sur l'ID userId
        try {
            userCrmRepository.deleteById(userId);
            return true;
        } catch (Exception e) {
            // Gérez les exceptions appropriées (par exemple, NotFoundException)
            return false;
        }
    }

    // Autres méthodes pour la logique métier liée aux utilisateurs
}
