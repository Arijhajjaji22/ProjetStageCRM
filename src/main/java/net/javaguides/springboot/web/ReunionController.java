package net.javaguides.springboot.web;

import net.javaguides.springboot.model.Reunion;
import net.javaguides.springboot.service.ReunionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reunions")
public class ReunionController {

    @Autowired
    private ReunionService reunionService;

    @GetMapping
    public List<Reunion> getAllReunions() {
        return reunionService.getAllReunions();
    }

    @PostMapping
    public ResponseEntity<Reunion> planifierReunion(@RequestBody Reunion reunion) {
        Reunion savedReunion = reunionService.planifierReunion(reunion);
        return new ResponseEntity<>(savedReunion, HttpStatus.CREATED);
    }
}
