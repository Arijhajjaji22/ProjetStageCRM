package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    // Vous pouvez ajouter des méthodes spécifiques pour les requêtes personnalisées ici
}
