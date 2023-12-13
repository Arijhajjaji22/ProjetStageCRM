package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Invoice;
import net.javaguides.springboot.model.UserCrm;
import net.javaguides.springboot.repository.InvoiceRepository;
import net.javaguides.springboot.repository.TaskRepository;
import net.javaguides.springboot.repository.UserCrmRepository;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    @Autowired
    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }


    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Invoice addInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }

    public void deleteInvoice(Long id) {
        invoiceRepository.deleteById(id);

    }
}
