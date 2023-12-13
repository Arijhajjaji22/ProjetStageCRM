package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.UserCrm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface UserCrmRepository extends JpaRepository<UserCrm, Long> {

}
