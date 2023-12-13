package net.javaguides.springboot.service;
import net.javaguides.springboot.model.Client;
import net.javaguides.springboot.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Long id, Client client) {
        Optional<Client> existingClientOptional = clientRepository.findById(id);

        if (existingClientOptional.isPresent()) {
            Client existingClient = existingClientOptional.get();
            existingClient.setName(client.getName());
            // Autres mises à jour des champs
            return clientRepository.save(existingClient);
        } else {
            throw new RuntimeException("Client not found with id: " + id);
        }
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}


