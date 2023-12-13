package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Reunion;
import net.javaguides.springboot.repository.ReunionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReunionService {

    @Autowired
    private ReunionRepository reunionRepository;

    public List<Reunion> getAllReunions() {
        return reunionRepository.findAll();
    }

    public Reunion planifierReunion(Reunion reunion) {
        return reunionRepository.save(reunion);
    }
}
