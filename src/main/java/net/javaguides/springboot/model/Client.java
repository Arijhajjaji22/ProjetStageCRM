package net.javaguides.springboot.model;

import javax.persistence.*;
import java.time.LocalDate;
@Table(name = "client")
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String email;

    private String phone;
    private String workRequested;
    private String specificRequirements;
    private LocalDate  deadline;

    public Client(Long id, String name, String address, String email, String phone, String workRequested, String specificRequirements, LocalDate deadline) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.workRequested = workRequested;
        this.specificRequirements = specificRequirements;
        this.deadline = deadline;
    }

    public Client() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void Name(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWorkRequested() {
        return workRequested;
    }

    public void setWorkRequested(String workRequested) {
        this.workRequested = workRequested;
    }

    public String getSpecificRequirements() {
        return specificRequirements;
    }

    public void setSpecificRequirements(String specificRequirements) {
        this.specificRequirements = specificRequirements;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstName='" + name + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", workRequested='" + workRequested + '\'' +
                ", specificRequirements='" + specificRequirements + '\'' +
                ", deadline=" + deadline +
                '}';
    }
    // Getters and setters
}
