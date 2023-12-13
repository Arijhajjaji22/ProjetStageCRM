package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Reunion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReunionRepository extends JpaRepository<Reunion, Long> {
}

